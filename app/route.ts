// Root route handler: thin pathname adapter delegating to the shared legacy
// response helper. Passes "/" as the pathname for the legacy homepage.

import { getLegacyPageResponse, headLegacyPageResponse } from "../lib/legacy-page-response.ts";

export const runtime = "nodejs";

export async function GET(): Promise<Response> {
  return getLegacyPageResponse("/");
}

export async function HEAD(): Promise<Response> {
  return headLegacyPageResponse("/");
}
