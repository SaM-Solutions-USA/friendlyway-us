import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const sharedComponentPaths = [
  "components/shared/content/logo-marquee/logo-marquee.tsx",
  "components/shared/content/contact-panel/contact-panel.tsx",
] as const;

test("shared content components do not depend on route content types", async () => {
  for (const componentPath of sharedComponentPaths) {
    const source = await readFile(path.resolve(componentPath), "utf8");

    assert.doesNotMatch(source, /from ["']@\/content\//, `${componentPath} must not import route content`);
    assert.doesNotMatch(source, /from ["']@\/app\//, `${componentPath} must not import route modules`);
  }
});