export type ConsentCategory = "functional" | "marketing";

export interface ConsentAdapter {
  hasConsent(category: ConsentCategory): boolean;
  subscribe(listener: () => void): () => void;
  openSettings(): void;
}

export interface ConsentStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export interface LocalStorageConsentAdapter extends ConsentAdapter {
  setConsent(category: ConsentCategory, granted: boolean): void;
}

const STORAGE_KEY = "friendlyway.consent";
const STORAGE_VERSION = 1;

interface StoredConsent {
  readonly version: typeof STORAGE_VERSION;
  readonly categories: Partial<Record<ConsentCategory, boolean>>;
}

function readStoredConsent(storage: ConsentStorage): StoredConsent {
  const stored = storage.getItem(STORAGE_KEY);

  if (!stored) {
    return { version: STORAGE_VERSION, categories: {} };
  }

  try {
    const parsed: unknown = JSON.parse(stored);

    if (
      typeof parsed === "object"
      && parsed !== null
      && "version" in parsed
      && parsed.version === STORAGE_VERSION
      && "categories" in parsed
      && typeof parsed.categories === "object"
      && parsed.categories !== null
    ) {
      return parsed as StoredConsent;
    }
  } catch {
    // Invalid persisted values are treated as no consent.
  }

  return { version: STORAGE_VERSION, categories: {} };
}

export function createLocalStorageConsentAdapter(
  storage: ConsentStorage,
  openSettings: () => void = () => {},
): LocalStorageConsentAdapter {
  const listeners = new Set<() => void>();

  return {
    hasConsent(category) {
      return readStoredConsent(storage).categories[category] === true;
    },
    setConsent(category, granted) {
      const stored = readStoredConsent(storage);
      storage.setItem(STORAGE_KEY, JSON.stringify({
        version: STORAGE_VERSION,
        categories: { ...stored.categories, [category]: granted },
      }));
      listeners.forEach((listener) => listener());
    },
    subscribe(listener) {
      listeners.add(listener);

      return () => listeners.delete(listener);
    },
    openSettings,
  };
}

export const noConsentAdapter: ConsentAdapter = {
  hasConsent: () => false,
  subscribe: () => () => {},
  openSettings: () => {},
};