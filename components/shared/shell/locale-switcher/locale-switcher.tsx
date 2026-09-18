"use client";

import { useEffect, useId, useRef, useState } from "react";

import type { SiteLocale } from "@/content/site";

import styles from "./locale-switcher.module.css";

export interface LocaleSwitcherProps {
  readonly locales: readonly SiteLocale[];
}

export function LocaleSwitcher({ locales }: LocaleSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const currentLocale = locales.find((locale) => locale.current) ?? locales[0];
  const alternateLocales = locales.filter((locale) => !locale.current);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function closeOnOutsidePointer(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus({ preventScroll: true });
      }
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  if (!currentLocale) {
    return null;
  }

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        ref={triggerRef}
        className={styles.trigger}
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <img src={currentLocale.flag.src} width={currentLocale.flag.width} height={currentLocale.flag.height} alt="" />
        <span>{currentLocale.label}</span>
        <span className={styles.chevron} aria-hidden="true" />
      </button>
      {isOpen ? (
        <ul id={menuId} className={styles.menu} aria-label="Choose region">
          {alternateLocales.map((locale) => (
            <li key={locale.href}>
              <a href={locale.href} target={locale.external ? "_blank" : undefined} rel={locale.external ? "noreferrer" : undefined}>
                <img src={locale.flag.src} width={locale.flag.width} height={locale.flag.height} alt="" />
                <span>{locale.label}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}