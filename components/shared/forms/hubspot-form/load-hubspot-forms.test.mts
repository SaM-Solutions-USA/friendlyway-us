import assert from "node:assert/strict";
import test from "node:test";

import { loadHubSpotForms } from "./load-hubspot-forms.ts";

test("HubSpot form script loading is deduplicated per document", async () => {
  const listeners = new Map<string, () => void>();
  let appendedScripts = 0;
  const script = {
    addEventListener: (event: string, listener: () => void) => listeners.set(event, listener),
  };

  Object.assign(globalThis, {
    document: {
      createElement: () => script,
      getElementById: () => null,
      head: { append: () => { appendedScripts += 1; } },
    },
    window: {},
  });

  const firstLoad = loadHubSpotForms();
  const secondLoad = loadHubSpotForms();

  assert.equal(appendedScripts, 1);
  Object.assign(globalThis.window, { hbspt: { forms: { create: () => {} } } });
  listeners.get("load")?.();

  assert.equal(await firstLoad, await secondLoad);
});