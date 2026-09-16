"use client";

import { useEffect, useState } from "react";

import type { WelcomeBannerContent } from "@/content/site";

import styles from "./welcome-banner.module.css";
import { createBannerDismissal, isBannerDismissed } from "./welcome-banner-state";

const STORAGE_KEY = "welcome-banner";

export interface WelcomeBannerProps {
  readonly banner: WelcomeBannerContent;
}

export function WelcomeBanner({ banner }: WelcomeBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(!isBannerDismissed(window.localStorage.getItem(STORAGE_KEY), banner.release));
  }, [banner.release]);

  function dismiss() {
    try {
      window.localStorage.setItem(STORAGE_KEY, createBannerDismissal(banner.release, Math.floor(Date.now() / 1000)));
    } catch {
      // The banner remains dismissible when storage is unavailable.
    }
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <aside className={styles.root} aria-label="Announcement">
      <div className={styles.container}>
        <div className={styles.inner}>
          <a className={styles.content} href={banner.href} target="_blank" rel="noreferrer">
            <div className={styles.split}>
              <div className={styles.left}>
                <div className={styles.image}><img src={banner.image.src} srcSet={banner.image.srcSet} width={banner.image.width} height={banner.image.height} alt={banner.image.alt} /></div>
              </div>
              <div className={styles.right}>
                <p className={styles.title}><strong>{banner.title}</strong> {banner.details}</p>
                <span className={styles.action}>{banner.actionLabel}</span>
              </div>
            </div>
          </a>
          <button className={styles.close} type="button" onClick={dismiss} aria-label="Dismiss announcement">
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14"><path d="m1.137 0-1.137 1.137L5.863 7 0 12.863 1.137 14 7 8.137 12.863 14 14 12.863 8.137 7 14 1.137 12.863 0 7 5.863 1.137 0Z" /></svg>
          </button>
        </div>
      </div>
    </aside>
  );
}