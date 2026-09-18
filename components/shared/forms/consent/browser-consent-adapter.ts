"use client";

import {
  createLocalStorageConsentAdapter,
  noConsentAdapter,
  type ConsentAdapter,
  type LocalStorageConsentAdapter,
} from "./consent-adapter";

const OPEN_SETTINGS_EVENT = "friendlyway:open-consent-settings";
let browserConsentAdapter: LocalStorageConsentAdapter | undefined;

export function openConsentSettings() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
  }
}

export function subscribeToConsentSettings(listener: () => void) {
  window.addEventListener(OPEN_SETTINGS_EVENT, listener);

  return () => window.removeEventListener(OPEN_SETTINGS_EVENT, listener);
}

export function getBrowserConsentAdapter(): ConsentAdapter {
  if (typeof window === "undefined") {
    return noConsentAdapter;
  }

  browserConsentAdapter ??= createLocalStorageConsentAdapter(window.localStorage, openConsentSettings);

  return browserConsentAdapter;
}

export function getBrowserLocalStorageConsentAdapter(): LocalStorageConsentAdapter | undefined {
  if (typeof window === "undefined") {
    return undefined;
  }

  getBrowserConsentAdapter();

  return browserConsentAdapter;
}