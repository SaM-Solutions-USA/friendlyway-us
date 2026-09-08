// Required non-root catch-all route handler: thin pathname adapter delegating
// to the shared legacy response helper. Extracts the dynamic pathname from the
// request URL so the helper can resolve the correct legacy document.

import { getLegacyPageResponse, headLegacyPageResponse } from "../../lib/legacy-page-response.ts";

export const runtime = "nodejs";

export async function GET(request: Request): Promise<Response> {
  const pathname = new URL(request.url).pathname;
  return getLegacyPageResponse(pathname);
}

export async function HEAD(request: Request): Promise<Response> {
  const pathname = new URL(request.url).pathname;
  return headLegacyPageResponse(pathname);
}
