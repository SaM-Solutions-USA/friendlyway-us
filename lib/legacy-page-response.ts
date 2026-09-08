// Server-only shared library: extracts the duplicated legacy HTML response
// logic that was previously duplicated across `app/route.ts` and
// `app/[...slug]/route.ts`. Both route handlers now delegate to these two
// functions, passing only their pathname selection.

import { readFile } from "node:fs/promises";
import { resolveLegacyPage } from "./resolve-legacy-page.ts";

const CONTENT_TYPE = "text/html; charset=utf-8";

function notFound(): Response {
  return new Response(null, { status: 404 });
}

/**
 * Resolve the supplied pathname to a legacy HTML document and return a full
 * GET-style response (200 with body, or bare 404).
 */
export async function getLegacyPageResponse(pathname: string): Promise<Response> {
  const resolved = await resolveLegacyPage(pathname);
  if (resolved === null) {
    return notFound();
  }

  let html: string;
  try {
    html = await readFile(resolved, "utf-8");
  } catch {
    return notFound();
  }

  return new Response(html, {
    status: 200,
    headers: { "Content-Type": CONTENT_TYPE },
  });
}

/**
 * Resolve the supplied pathname and return a HEAD-style response (200 with
 * content type but no body, or bare 404). Does not read the document file.
 */
export async function headLegacyPageResponse(pathname: string): Promise<Response> {
  const resolved = await resolveLegacyPage(pathname);
  if (resolved === null) {
    return notFound();
  }

  return new Response(null, {
    status: 200,
    headers: { "Content-Type": CONTENT_TYPE },
  });
}
