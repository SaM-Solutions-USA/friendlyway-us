// Server-only utility: maps a request pathname to an existing legacy HTML
// document below `legacy/`. Never expose directory listings, never touch
// files outside `legacy/`, and reject unsafe input before any filesystem
// access. Must only ever be imported from server code.

import { access, stat } from "node:fs/promises";
import path from "node:path";

const LEGACY_ROOT = path.resolve("legacy");
const LEGACY_ROOT_FILE = path.join(LEGACY_ROOT, "index.html");

/**
 * Resolve a request pathname (e.g. "/about-us") to the absolute path of a
 * legacy HTML document below `legacy/`, or `null` when no safe, existing
 * target matches.
 *
 * Contract:
 * - "/" maps to `legacy/index.html`.
 * - Other pathnames try exactly `legacy/<path>/index.html`, then
 *   `legacy/<path>.html`.
 * - Unsafe input (traversal, backslashes, null bytes, malformed or
 *   percent-encoded traversal/separators, including double-encoded forms)
 *   returns `null` without any filesystem access.
 */
export async function resolveLegacyPage(
  pathname: string,
): Promise<string | null> {
  if (typeof pathname !== "string" || pathname.length === 0) {
    return null;
  }

  // Reject non-URL characters outright: backslashes and control characters
  // (including null bytes) must never appear in a request pathname.
  const CONTROL_CHARACTERS = /[\u0000-\u001f\u007f\\]/;
  if (CONTROL_CHARACTERS.test(pathname)) {
    return null;
  }

  // The raw input must be a URL pathname: absolute, with no query/fragment.
  if (!pathname.startsWith("/") || pathname.includes("?") || pathname.includes("#")) {
    return null;
  }

  // Decode in strict mode until no encoded data remains. This rejects unsafe
  // percent-encoded forms even when they have been encoded multiple times.
  let normalized: string;
  try {
    normalized = decodeURIComponent(pathname);
    while (/%[0-9a-f]{2}/i.test(normalized)) {
      normalized = decodeURIComponent(normalized);
    }
  } catch {
    return null;
  }

  if (normalized.includes("\0") || normalized.includes("\\")) {
    return null;
  }

  // After decoding, the path must still be an absolute pathname using only
  // "/" as its separator.
  if (!normalized.startsWith("/")) {
    return null;
  }

  // Segments are split on "/" only. Empty interior segments (including from
  // encoded separators) and "." / ".." traversal segments are rejected.
  if (normalized === "/") {
    return LEGACY_ROOT_FILE;
  }

  const segments = normalized.slice(1).split("/");
  if (
    segments.some(
      (segment) => segment === "" || segment === ".." || segment === ".",
    )
  ) {
    return null;
  }

  // Build candidates: legacy/<segments>/index.html, then legacy/<segments>.html
  const candidatePaths: string[] = [
    path.join(LEGACY_ROOT, ...segments, "index.html"),
    path.join(LEGACY_ROOT, `${segments.join("/")}.html`),
  ];

  for (const candidate of candidatePaths) {
    // Prove the final candidate remains strictly below the legacy root.
    const relative = path.relative(LEGACY_ROOT, candidate);
    if (
      relative === "" ||
      relative.startsWith("..") ||
      path.isAbsolute(relative)
    ) {
      return null;
    }

    if (await isReadableFile(candidate)) {
      return candidate;
    }
  }

  return null;
}

async function isReadableFile(filePath: string): Promise<boolean> {
  try {
    // Verify existence, then confirm the target is a regular file (not a
    // directory), so no directory listing or directory "document" is ever
    // returned.
    await access(filePath);
    const info = await stat(filePath);
    return info.isFile();
  } catch {
    return false;
  }
}
