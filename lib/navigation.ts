export interface NavigationNode {
  readonly id: string;
  readonly href?: string;
  readonly children?: readonly NavigationNode[];
}

const TRUSTED_EXTERNAL_HOSTS = new Set([
  "cloud.friendlyway.us",
  "friendlyway.it",
  "friendlyway.pl",
  "helpdesk.friendlyway.com",
  "status.friendlyway.com",
  "www.friendlyway.com",
  "www.friendlyway.de",
  "www.facebook.com",
  "www.linkedin.com",
  "www.youtube.com",
]);

function normalizePathname(pathname: string): string {
  const path = pathname.split(/[?#]/, 1)[0] || "/";
  return path === "/" ? path : path.replace(/\/+$/, "");
}

export function isInternalHref(href: string): boolean {
  return href.startsWith("/") && !href.startsWith("//");
}

export function isTrustedExternalHref(href: string): boolean {
  try {
    const url = new URL(href);
    return url.protocol === "https:" && TRUSTED_EXTERNAL_HOSTS.has(url.hostname);
  } catch {
    return false;
  }
}

export function isPathActive(href: string | undefined, pathname: string): boolean {
  if (!href || !isInternalHref(href)) {
    return false;
  }

  const targetPath = normalizePathname(href);
  const currentPath = normalizePathname(pathname);
  return targetPath === "/"
    ? currentPath === targetPath
    : currentPath === targetPath || currentPath.startsWith(`${targetPath}/`);
}

export function getActiveNavigationIds(
  navigation: readonly NavigationNode[],
  pathname: string,
): ReadonlySet<string> {
  const activeIds = new Set<string>();

  function visit(item: NavigationNode): boolean {
    const childIsActive = item.children?.some(visit) ?? false;
    const itemIsActive = isPathActive(item.href, pathname);
    if (itemIsActive || childIsActive) {
      activeIds.add(item.id);
      return true;
    }
    return false;
  }

  navigation.forEach(visit);
  return activeIds;
}