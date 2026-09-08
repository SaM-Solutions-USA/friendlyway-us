// Focused tests for the server-only legacy resolver (Node built-in runner).
// Run with: npm run test:legacy-resolver

import assert from "node:assert/strict";
import { access, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { resolveLegacyPage } from "../lib/resolve-legacy-page.ts";

const LEGACY_ROOT = path.resolve("legacy");

function legacyPath(...segments: string[]): string {
  return path.join(LEGACY_ROOT, ...segments);
}

async function exists(filePath: string): Promise<boolean> {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

// Unique temporary fixture for the `<path>.html` fallback test. Cleaned up
// in `after` so no artifact remains under `legacy/`.
const FIXTURE_BASENAME = "__resolver-fallback-test-7f3c9a2e";
const FIXTURE_HTML = legacyPath(`${FIXTURE_BASENAME}.html`);
const FIXTURE_DIR = legacyPath(`${FIXTURE_BASENAME}-dir`);

test("resolveLegacyPage", async (t) => {
  await t.test("root maps to legacy/index.html", async () => {
    const resolved = await resolveLegacyPage("/");
    assert.equal(resolved, legacyPath("index.html"));
  });

  await t.test("nested path resolves to <path>/index.html", async () => {
    const resolved = await resolveLegacyPage("/about-us");
    assert.equal(resolved, legacyPath("about-us", "index.html"));
  });

  await t.test("deep path resolves below nested directories", async () => {
    const resolved = await resolveLegacyPage(
      "/author/friendlyway-team/page/3",
    );
    assert.equal(
      resolved,
      legacyPath("author", "friendlyway-team", "page", "3", "index.html"),
    );
  });

  await t.test("missing page returns null", async () => {
    const resolved = await resolveLegacyPage(
      "/this-page-does-not-exist-anywhere-42",
    );
    assert.equal(resolved, null);
  });

  await t.test("literal traversal returns null", async () => {
    assert.equal(await resolveLegacyPage("/../package.json"), null);
    assert.equal(await resolveLegacyPage("/../../etc/passwd"), null);
    assert.equal(await resolveLegacyPage("/about-us/../secret"), null);
  });

  await t.test("backslash traversal returns null", async () => {
    assert.equal(await resolveLegacyPage("\\..\\package.json"), null);
    assert.equal(await resolveLegacyPage("/..\\..\\windows\\system32"), null);
  });

  await t.test("encoded traversal returns null", async () => {
    assert.equal(await resolveLegacyPage("/%2e%2e/package.json"), null);
    assert.equal(await resolveLegacyPage("/%2E%2E%5Cpackage.json"), null);
    assert.equal(await resolveLegacyPage("/%252e%252e/package.json"), null);
  });

  await t.test("encoded separator traversal returns null", async () => {
    // "%2F" decodes to "/" creating an empty segment / extra depth.
    assert.equal(await resolveLegacyPage("/about%2Fus"), null);
    assert.equal(await resolveLegacyPage("/%2f..%2fpackage.json"), null);
  });

  await t.test("double-encoded traversal returns null", async () => {
    assert.equal(
      await resolveLegacyPage("/%252e%252e%252fpackage.json"),
      null,
    );
    // "%25" decodes to a literal "%", so this still yields "%00" — it must
    // never produce a null byte or reach the filesystem as one.
    assert.equal(await resolveLegacyPage("/%2500"), null);
  });

  await t.test("malformed encoding returns null", async () => {
    assert.equal(await resolveLegacyPage("/%E0%FF"), null);
    assert.equal(await resolveLegacyPage("/about%2"), null);
    assert.equal(await resolveLegacyPage("/%%"), null);
  });

  await t.test("null byte injection returns null", async () => {
    assert.equal(await resolveLegacyPage("/about-us\0.html"), null);
    assert.equal(await resolveLegacyPage("/about%00us"), null);
  });

  await t.test("<path>.html fallback resolves a real file", async () => {
    // Create a unique temporary fixture below legacy/ for this test only.
    await writeFile(FIXTURE_HTML, "<!DOCTYPE html><html><body>fb</body></html>");
    try {
      const resolved = await resolveLegacyPage(`/${FIXTURE_BASENAME}`);
      assert.equal(resolved, FIXTURE_HTML);
    } finally {
      await rm(FIXTURE_HTML, { force: true });
    }
  });

  await t.test("resolved targets are real files below legacy/", async () => {
    const inputs = ["/", "/about-us", "/author/friendlyway-team/page/3"];
    for (const input of inputs) {
      const resolved = await resolveLegacyPage(input);
      assert.ok(resolved, `expected a resolution for ${input}`);
      const relative = path.relative(LEGACY_ROOT, resolved as string);
      assert.ok(
        relative !== "" &&
          !relative.startsWith("..") &&
          !path.isAbsolute(relative),
        `${resolved} must remain below legacy/`,
      );
      assert.ok(await exists(resolved as string));
    }
  });

  // Teardown safety: guarantee no fixture artifact remains.
  t.after(async () => {
    await rm(FIXTURE_HTML, { force: true });
    await rm(FIXTURE_DIR, { recursive: true, force: true });
  });
});
