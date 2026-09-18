"use client";

import { useEffect, useId, useRef, useState } from "react";

import type { NavigationItem } from "@/content/site";

import styles from "./desktop-navigation.module.css";

export interface DesktopNavigationProps {
  readonly navigation: readonly NavigationItem[];
  readonly activeNavigationIds: readonly string[];
}

interface MenuBranchProps {
  readonly items: readonly NavigationItem[];
  readonly activeIds: ReadonlySet<string>;
  readonly menuPath: readonly string[];
  readonly openPath: readonly string[];
  readonly menuIdPrefix: string;
  readonly onOpen: (menuPath: readonly string[]) => void;
  readonly onToggle: (menuPath: readonly string[], trigger: HTMLButtonElement) => void;
}

function SolutionsPanel({ items, activeIds }: Pick<MenuBranchProps, "items" | "activeIds">) {
  return (
    <ul className={styles.solutionsGrid}>
      {items.map((category) => (
        <li key={category.id} className={styles.solutionsColumn} data-industry={category.id === "solutions-by-industry" || undefined}>
          <div className={styles.solutionsHeading}>
            {category.media ? <img src={category.media.src} width={category.media.width} height={category.media.height} alt={category.media.alt} /> : null}
            <span>{category.label}</span>
          </div>
          <ul className={styles.solutionsLinks}>
            {category.children?.map((link) => (
              <li key={link.id} data-active={activeIds.has(link.id) || undefined}>
                {link.href ? (
                  <a className={styles.solutionLink} href={link.href}>
                    {link.media ? <img src={link.media.src} width={link.media.width} height={link.media.height} alt={link.media.alt} /> : null}
                    <span>
                      <span className={styles.solutionLinkTitle}>{link.label}</span>
                      {link.description ? <span className={styles.solutionLinkDescription}>{link.description}</span> : null}
                    </span>
                  </a>
                ) : <span className={styles.solutionLinkTitle}>{link.label}</span>}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

function SoftwarePanel({ items, activeIds }: Pick<MenuBranchProps, "items" | "activeIds">) {
  return (
    <ul className={styles.softwareGrid}>
      {items.map((item) => (
        <li key={item.id} className={styles.softwareColumn} data-active={activeIds.has(item.id) || undefined}>
          {item.href ? (
            <a className={styles.softwareLink} href={item.href}>
              {item.media ? <img src={item.media.src} srcSet={item.media.srcSet} width={item.media.width} height={item.media.height} alt={item.media.alt} /> : null}
              <span className={styles.softwareLinkTitle}>{item.label}</span>
            </a>
          ) : (
            <div className={styles.softwareIntroduction}>
              <h2>{item.label}</h2>
              {item.description ? <p>{item.description}</p> : null}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

function HardwarePanel({ items, activeIds }: Pick<MenuBranchProps, "items" | "activeIds">) {
  return (
    <ul className={styles.hardwareGrid}>
      {items.filter((item) => item.id !== "hardware-overview").map((item) => (
        <li key={item.id} className={styles.hardwareItem} data-active={activeIds.has(item.id) || undefined}>
          {item.href ? (
            <a className={styles.hardwareLink} href={item.href}>
              {item.media ? <img src={item.media.src} srcSet={item.media.srcSet} width={item.media.width} height={item.media.height} alt={item.media.alt} /> : null}
              <span>
                <span className={styles.hardwareTitle}>{item.label}</span>
                {item.description ? <span className={styles.hardwareDescription}>{item.description}</span> : null}
              </span>
            </a>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

function IndustriesPanel({ items, activeIds }: Pick<MenuBranchProps, "items" | "activeIds">) {
  return (
    <ul className={styles.industriesGrid}>
      {items.map((category) => (
        <li key={category.id} className={styles.industriesColumn}>
          <h2>{category.label}</h2>
          <ul>
            {category.children?.map((item) => (
              <li key={item.id} data-active={activeIds.has(item.id) || undefined}>
                {item.href ? (
                  <a className={styles.industryLink} href={item.href}>
                    {item.media ? <img src={item.media.src} width={item.media.width} height={item.media.height} alt={item.media.alt} /> : null}
                    <span>{item.label}</span>
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

function MenuBranch({
  items,
  activeIds,
  menuPath,
  openPath,
  menuIdPrefix,
  onOpen,
  onToggle,
}: MenuBranchProps) {
  return (
    <ul className={menuPath.length === 0 ? styles.list : styles.dropdown}>
      {items.map((item) => {
        const itemPath = [...menuPath, item.id];
        const hasChildren = Boolean(item.children?.length);
        const isOpen = openPath.includes(item.id);
        const submenuId = `${menuIdPrefix}-${item.id}`;
        const isSolutionsMenu = menuPath.length === 0 && item.id === "solutions";
        const isSoftwareMenu = menuPath.length === 0 && item.id === "software";
        const isHardwareMenu = menuPath.length === 0 && item.id === "hardware";
        const isIndustriesMenu = menuPath.length === 0 && item.id === "industries";

        return (
          <li
            key={item.id}
            className={menuPath.length === 0 ? styles.item : styles.submenuItem}
            data-active={activeIds.has(item.id) || undefined}
            data-menu={menuPath.length === 0 ? item.id : undefined}
            data-open={isOpen || undefined}
            onPointerEnter={hasChildren ? () => onOpen(itemPath) : undefined}
          >
            <div className={styles.itemControl}>
              {item.href ? <a className={styles.link} href={item.href}>{item.label}</a> : null}
              {hasChildren ? (
                <button
                  className={styles.toggle}
                  type="button"
                  aria-label={`${isOpen ? "Close" : "Open"} ${item.label} menu`}
                  aria-controls={submenuId}
                  aria-expanded={isOpen}
                  onClick={(event) => onToggle(itemPath, event.currentTarget)}
                >
                  {!item.href ? item.label : null}
                  <span className={styles.chevron} aria-hidden="true" />
                </button>
              ) : null}
              {!item.href && !hasChildren ? <span className={styles.label}>{item.label}</span> : null}
            </div>
            {hasChildren ? (
              <div id={submenuId} className={`${styles.submenu}${isSolutionsMenu ? ` ${styles.solutionsDropdown}` : ""}${isSoftwareMenu ? ` ${styles.softwareDropdown}` : ""}${isHardwareMenu ? ` ${styles.hardwareDropdown}` : ""}${isIndustriesMenu ? ` ${styles.industriesDropdown}` : ""}`} hidden={!isOpen}>
                {item.description ? <p className={styles.description}>{item.description}</p> : null}
                {isSolutionsMenu ? <SolutionsPanel items={item.children ?? []} activeIds={activeIds} /> : (
                  isSoftwareMenu ? <SoftwarePanel items={item.children ?? []} activeIds={activeIds} /> : (
                    isHardwareMenu ? <HardwarePanel items={item.children ?? []} activeIds={activeIds} /> : (
                      isIndustriesMenu ? <IndustriesPanel items={item.children ?? []} activeIds={activeIds} /> : (
                        <MenuBranch
                          items={item.children ?? []}
                          activeIds={activeIds}
                          menuPath={itemPath}
                          openPath={openPath}
                          menuIdPrefix={menuIdPrefix}
                          onOpen={onOpen}
                          onToggle={onToggle}
                        />
                      )
                    )
                  )
                )}
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

export function DesktopNavigation({ navigation, activeNavigationIds }: DesktopNavigationProps) {
  const navigationRef = useRef<HTMLElement>(null);
  const focusReturnRef = useRef<HTMLButtonElement | null>(null);
  const pointerOpenedMenuRef = useRef<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [openPath, setOpenPath] = useState<readonly string[]>([]);
  const menuIdPrefix = `desktop-navigation-${useId().replaceAll(":", "")}`;
  const activeIds = new Set(activeNavigationIds);

  function closeMenu(restoreFocus = false) {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    pointerOpenedMenuRef.current = null;
    setOpenPath([]);
    if (restoreFocus) {
      focusReturnRef.current?.focus();
    }
  }

  function openMenu(menuPath: readonly string[]) {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    pointerOpenedMenuRef.current = menuPath.at(-1) ?? null;
    setOpenPath(menuPath);
  }

  function scheduleClose() {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => closeMenu(), 200);
  }

  function toggleMenu(menuPath: readonly string[], trigger: HTMLButtonElement) {
    focusReturnRef.current = trigger;
    if (pointerOpenedMenuRef.current === menuPath.at(-1)) {
      pointerOpenedMenuRef.current = null;
      return;
    }
    setOpenPath((currentPath) => currentPath.at(-1) === menuPath.at(-1) ? [] : menuPath);
  }

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (navigationRef.current && !navigationRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav
      ref={navigationRef}
      className={styles.root}
      aria-label="Primary"
      onPointerEnter={() => {
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
          closeTimeoutRef.current = null;
        }
      }}
      onPointerLeave={scheduleClose}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          closeMenu();
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && openPath.length > 0) {
          event.preventDefault();
          closeMenu(true);
        }
      }}
    >
      <MenuBranch
        items={navigation}
        activeIds={activeIds}
        menuPath={[]}
        openPath={openPath}
        menuIdPrefix={menuIdPrefix}
        onOpen={openMenu}
        onToggle={toggleMenu}
      />
    </nav>
  );
}