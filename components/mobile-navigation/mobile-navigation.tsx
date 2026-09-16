"use client";

import { useEffect, useId, useRef, useState } from "react";

import type { NavigationItem } from "@/content/site";

import styles from "./mobile-navigation.module.css";

export interface MobileNavigationProps {
  readonly navigation: readonly NavigationItem[];
  readonly activeNavigationIds: readonly string[];
  readonly currentPathname: string;
}

interface NavigationViewProps {
  readonly items: readonly NavigationItem[];
  readonly parent: NavigationItem | null;
  readonly path: readonly string[];
  readonly activeNavigationIds: ReadonlySet<string>;
  readonly drawerId: string;
  readonly onForward: (item: NavigationItem, trigger: HTMLButtonElement) => void;
  readonly onBack: () => void;
  readonly onDestination: () => void;
}

interface NavigationViewData {
  readonly parent: NavigationItem | null;
  readonly items: readonly NavigationItem[];
}

function SolutionsView({
  items,
  activeNavigationIds,
  onDestination,
}: Pick<NavigationViewProps, "items" | "activeNavigationIds" | "onDestination">) {
  return (
    <ul className={`${styles.list} ${styles.solutionsList}`} aria-label="Solutions">
      {items.map((category) => (
        <li key={category.id} className={styles.solutionCategory}>
          <div className={styles.solutionHeading}>
            {category.media ? <img src={category.media.src} width={category.media.width} height={category.media.height} alt="" /> : null}
            <span>{category.label}</span>
          </div>
          <ul className={styles.solutionDestinations}>
            {category.children?.map((item) => {
              const isActive = activeNavigationIds.has(item.id);
              return (
                <li key={item.id} data-active={isActive || undefined}>
                  {item.href ? (
                    <a href={item.href} aria-current={isActive ? "page" : undefined} onClick={onDestination}>
                      {item.media ? <img src={item.media.src} width={item.media.width} height={item.media.height} alt="" /> : null}
                      <span>
                        <span className={styles.solutionDestinationTitle}>{item.label}</span>
                        {item.description ? <span className={styles.solutionDescription}>{item.description}</span> : null}
                      </span>
                    </a>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </li>
      ))}
    </ul>
  );
}

function SoftwareView({
  items,
  activeNavigationIds,
  onDestination,
}: Pick<NavigationViewProps, "items" | "activeNavigationIds" | "onDestination">) {
  const [introduction, ...links] = items;

  return (
    <div className={styles.softwareView}>
      {introduction ? (
        <div className={styles.softwareIntroduction}>
          <h2>{introduction.label}</h2>
          {introduction.description ? <p>{introduction.description}</p> : null}
        </div>
      ) : null}
      <ul className={styles.softwareLinks} aria-label="Software products">
        {links.map((item) => {
          const isActive = activeNavigationIds.has(item.id);
          return (
            <li key={item.id} data-active={isActive || undefined}>
              {item.href ? (
                <a href={item.href} aria-current={isActive ? "page" : undefined} onClick={onDestination}>
                  {item.media ? <img src={item.media.src} srcSet={item.media.srcSet} width={item.media.width} height={item.media.height} alt="" /> : null}
                  <span>{item.label}</span>
                </a>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function HardwareView({
  items,
  activeNavigationIds,
  onDestination,
}: Pick<NavigationViewProps, "items" | "activeNavigationIds" | "onDestination">) {
  const [overview, ...products] = items;

  return (
    <ul className={`${styles.list} ${styles.hardwareList}`} aria-label="Hardware products">
      {overview?.href ? (
        <li className={styles.hardwareOverview} data-active={activeNavigationIds.has(overview.id) || undefined}>
          <a href={overview.href} aria-current={activeNavigationIds.has(overview.id) ? "page" : undefined} onClick={onDestination}>{overview.label}</a>
        </li>
      ) : null}
      {products.map((item) => {
        const isActive = activeNavigationIds.has(item.id);
        return (
          <li key={item.id} className={styles.hardwareProduct} data-active={isActive || undefined}>
            {item.href ? (
              <a href={item.href} aria-current={isActive ? "page" : undefined} onClick={onDestination}>
                {item.media ? <img src={item.media.src} srcSet={item.media.srcSet} width={item.media.width} height={item.media.height} alt="" /> : null}
                <span>
                  <span className={styles.hardwareTitle}>{item.label}</span>
                  {item.description ? <span className={styles.hardwareDescription}>{item.description}</span> : null}
                </span>
              </a>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

function IndustriesView({
  items,
  activeNavigationIds,
  drawerId,
  onForward,
}: Pick<NavigationViewProps, "items" | "activeNavigationIds" | "drawerId" | "onForward">) {
  return (
    <ul className={`${styles.list} ${styles.industriesList}`} aria-label="Industries">
      {items.map((category) => {
        const isActive = activeNavigationIds.has(category.id);
        return (
          <li key={category.id} className={styles.industryCategory} data-active={isActive || undefined}>
            <button className={styles.industryCategoryLabel} type="button" onClick={(event) => onForward(category, event.currentTarget)}>{category.label}</button>
            <button
              className={styles.forward}
              type="button"
              aria-label={`Open ${category.label}`}
              aria-controls={`${drawerId}-${category.id}`}
              onClick={(event) => onForward(category, event.currentTarget)}
            >
              <span aria-hidden="true" />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function IndustryDestinationsView({
  items,
  parent,
  activeNavigationIds,
  onDestination,
}: Pick<NavigationViewProps, "items" | "parent" | "activeNavigationIds" | "onDestination">) {
  return (
    <ul className={`${styles.list} ${styles.industryDestinations}`} aria-label={parent?.label}>
      {items.map((item) => {
        const isActive = activeNavigationIds.has(item.id);
        return (
          <li key={item.id} data-active={isActive || undefined}>
            {item.href ? (
              <a href={item.href} aria-current={isActive ? "page" : undefined} onClick={onDestination}>
                {item.media ? <img src={item.media.src} width={item.media.width} height={item.media.height} alt="" /> : null}
                <span>{item.label}</span>
              </a>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

function collectNavigationViews(items: readonly NavigationItem[], parent: NavigationItem | null = null): readonly NavigationViewData[] {
  return [
    { parent, items },
    ...items.flatMap((item) => item.children?.length ? collectNavigationViews(item.children, item) : []),
  ];
}

function NavigationView({
  items,
  parent,
  path,
  activeNavigationIds,
  drawerId,
  onForward,
  onBack,
  onDestination,
}: NavigationViewProps) {
  const currentId = path.at(-1);
  const isCurrent = parent ? currentId === parent.id : path.length === 0;
  const isAncestor = parent ? path.includes(parent.id) && !isCurrent : path.length > 0;
  const viewState = isCurrent ? "current" : isAncestor ? "previous" : "next";

  return (
    <section
      id={parent ? `${drawerId}-${parent.id}` : undefined}
      className={styles.view}
      data-state={viewState}
      aria-hidden={!isCurrent}
      inert={!isCurrent || undefined}
    >
      {parent ? (
        <button className={styles.back} type="button" onClick={onBack} data-mobile-back-for={parent.id}>
          <span className={styles.backArrow} aria-hidden="true" />
          <span>{parent.label}</span>
        </button>
      ) : null}
      {parent?.id === "solutions" ? (
        <SolutionsView
          items={items}
          activeNavigationIds={activeNavigationIds}
          onDestination={onDestination}
        />
      ) : parent?.id === "software" ? (
        <SoftwareView
          items={items}
          activeNavigationIds={activeNavigationIds}
          onDestination={onDestination}
        />
      ) : parent?.id === "hardware" ? (
        <HardwareView
          items={items}
          activeNavigationIds={activeNavigationIds}
          onDestination={onDestination}
        />
      ) : parent?.id === "industries" ? (
        <IndustriesView
          items={items}
          activeNavigationIds={activeNavigationIds}
          drawerId={drawerId}
          onForward={onForward}
        />
      ) : parent && ["manufacturing-infrastructure", "government", "commercial-services"].includes(parent.id) ? (
        <IndustryDestinationsView
          items={items}
          parent={parent}
          activeNavigationIds={activeNavigationIds}
          onDestination={onDestination}
        />
      ) : (
      <ul className={styles.list} aria-label={parent ? parent.label : "Primary navigation"}>
        {items.map((item) => {
          const hasChildren = Boolean(item.children?.length);
          const isActive = activeNavigationIds.has(item.id);
          const opensMobileSubmenu = hasChildren && (item.id === "hardware" || item.id === "industries");

          return (
            <li key={item.id} className={styles.item} data-active={isActive || undefined}>
              <div className={styles.row}>
                {item.href && !opensMobileSubmenu ? (
                  <a href={item.href} aria-current={isActive ? "page" : undefined} onClick={onDestination}>{item.label}</a>
                ) : hasChildren ? (
                  <button className={styles.parentLabel} type="button" onClick={(event) => onForward(item, event.currentTarget)}>{item.label}</button>
                ) : <span>{item.label}</span>}
                {hasChildren ? (
                  <button
                    className={styles.forward}
                    type="button"
                    aria-label={`Open ${item.label}`}
                    aria-controls={`${drawerId}-${item.id}`}
                    onClick={(event) => onForward(item, event.currentTarget)}
                  >
                    <span aria-hidden="true" />
                  </button>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
      )}
    </section>
  );
}

export function MobileNavigation({ navigation, activeNavigationIds, currentPathname }: MobileNavigationProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const forwardTriggersRef = useRef(new Map<string, HTMLButtonElement>());
  const focusIntentRef = useRef<{ readonly type: "back"; readonly id: string } | { readonly type: "forward"; readonly id: string } | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState<readonly string[]>([]);
  const [overlayTop, setOverlayTop] = useState<number | null>(null);
  const generatedId = useId().replaceAll(":", "");
  const drawerId = `mobile-navigation-${generatedId}`;
  const activeIds = new Set(activeNavigationIds);
  const navigationViews = collectNavigationViews(navigation);

  function closeMenu(restoreFocus = true) {
    setIsOpen(false);
    setPath([]);
    setOverlayTop(null);
    focusIntentRef.current = null;
    if (restoreFocus) {
      requestAnimationFrame(() => triggerRef.current?.focus({ preventScroll: true }));
    }
  }

  function openMenu() {
    const header = triggerRef.current?.closest("header");
    setOverlayTop(header?.getBoundingClientRect().bottom ?? null);
    setPath([]);
    setIsOpen(true);
  }

  function moveForward(item: NavigationItem, trigger: HTMLButtonElement) {
    forwardTriggersRef.current.set(item.id, trigger);
    focusIntentRef.current = { type: "back", id: item.id };
    setPath((currentPath) => [...currentPath, item.id]);
  }

  function moveBack() {
    const currentId = path.at(-1);
    if (!currentId) {
      return;
    }
    focusIntentRef.current = { type: "forward", id: currentId };
    setPath((currentPath) => currentPath.slice(0, -1));
  }

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusIntent = focusIntentRef.current;
    const focusTarget = focusIntent?.type === "back"
      ? drawerRef.current?.querySelector<HTMLButtonElement>(`[data-mobile-back-for="${focusIntent.id}"]`)
      : focusIntent?.type === "forward"
        ? forwardTriggersRef.current.get(focusIntent.id)
        : drawerRef.current?.querySelector<HTMLButtonElement>("button");
    requestAnimationFrame(() => focusTarget?.focus({ preventScroll: true }));
    focusIntentRef.current = null;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }
      if (event.key !== "Tab" || !drawerRef.current) {
        return;
      }
      const focusable = [...drawerRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")]
        .filter((element) => !element.closest("[aria-hidden=\"true\"]"));
      const first = focusable.at(0);
      const last = focusable.at(-1);
      if (!first || !last) {
        return;
      }
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, path]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const header = triggerRef.current?.closest("header");
    if (!header) {
      return;
    }
    const updateOverlayTop = () => setOverlayTop(header.getBoundingClientRect().bottom);
    const resizeObserver = new ResizeObserver(updateOverlayTop);
    resizeObserver.observe(header);
    window.addEventListener("resize", updateOverlayTop);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateOverlayTop);
    };
  }, [isOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 992px)");
    function handleBreakpointChange(event: MediaQueryListEvent) {
      if (event.matches) {
        closeMenu(false);
      }
    }
    mediaQuery.addEventListener("change", handleBreakpointChange);
    if (mediaQuery.matches) {
      closeMenu(false);
    }
    return () => mediaQuery.removeEventListener("change", handleBreakpointChange);
  }, []);

  return (
    <div className={styles.root} data-current-pathname={currentPathname}>
      <button
        ref={triggerRef}
        className={styles.trigger}
        type="button"
        aria-label={`${isOpen ? "Close" : "Open"} navigation menu`}
        aria-controls={drawerId}
        aria-expanded={isOpen}
        onClick={() => isOpen ? closeMenu() : openMenu()}
      >
        <span /><span /><span />
      </button>
      <div className={styles.overlay} hidden={!isOpen} style={overlayTop === null ? undefined : { top: overlayTop }}>
        <button className={styles.backdrop} type="button" aria-label="Close navigation menu" onClick={() => closeMenu()} />
        <div ref={drawerRef} id={drawerId} className={styles.drawer} role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className={styles.track}>
            {navigationViews.map((view) => (
              <NavigationView
                key={view.parent?.id ?? "root"}
                items={view.items}
                parent={view.parent}
                path={path}
                activeNavigationIds={activeIds}
                drawerId={drawerId}
                onForward={moveForward}
                onBack={moveBack}
                onDestination={() => closeMenu(false)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}