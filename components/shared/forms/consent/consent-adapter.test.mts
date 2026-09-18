import assert from "node:assert/strict";
import test from "node:test";

import {
  createLocalStorageConsentAdapter,
  type ConsentStorage,
} from "./consent-adapter.ts";

function createStorage(): ConsentStorage {
  const values = new Map<string, string>();

  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  };
}

test("local storage consent is denied until explicitly granted", () => {
  const adapter = createLocalStorageConsentAdapter(createStorage());

  assert.equal(adapter.hasConsent("functional"), false);
  adapter.setConsent("functional", true);
  assert.equal(adapter.hasConsent("functional"), true);
  assert.equal(adapter.hasConsent("marketing"), false);
});

test("local storage consent notifies and persists changes", () => {
  const storage = createStorage();
  const adapter = createLocalStorageConsentAdapter(storage);
  let notifications = 0;
  const unsubscribe = adapter.subscribe(() => { notifications += 1; });

  adapter.setConsent("marketing", true);
  unsubscribe();
  adapter.setConsent("marketing", false);

  const reloadedAdapter = createLocalStorageConsentAdapter(storage);
  assert.equal(notifications, 1);
  assert.equal(reloadedAdapter.hasConsent("marketing"), false);
});