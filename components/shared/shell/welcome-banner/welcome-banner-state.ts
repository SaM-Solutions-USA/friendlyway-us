interface StoredBannerDismissal {
  readonly date?: { readonly release?: string };
}

export function isBannerDismissed(storedValue: string | null, release: string): boolean {
  if (!storedValue) {
    return false;
  }

  try {
    return (JSON.parse(storedValue) as StoredBannerDismissal).date?.release === release;
  } catch {
    return false;
  }
}

export function createBannerDismissal(release: string, closure: number): string {
  return JSON.stringify({ date: { release, closure } });
}