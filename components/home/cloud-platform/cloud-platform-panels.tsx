"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./home-cloud-platform.module.css";

export interface CloudPlatformSlide {
  readonly id: string;
  readonly label: string;
  readonly description: string;
  readonly media: {
    readonly src: string;
    readonly srcSet?: string;
    readonly width: number;
    readonly height: number;
    readonly alt: string;
  };
}

export function CloudPlatformPanels({ headingId, slides }: { readonly headingId: string; readonly slides: readonly CloudPlatformSlide[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [stopped, setStopped] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 992px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMedia = () => {
      setIsDesktop(desktopQuery.matches);
      setReducedMotion(motionQuery.matches);
    };
    updateMedia();
    desktopQuery.addEventListener("change", updateMedia);
    motionQuery.addEventListener("change", updateMedia);
    return () => {
      desktopQuery.removeEventListener("change", updateMedia);
      motionQuery.removeEventListener("change", updateMedia);
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    let intersecting = false;
    const updateVisibility = () => setIsVisible(intersecting && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      intersecting = entry.isIntersecting;
      updateVisibility();
    });
    observer.observe(root);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop || !isVisible || reducedMotion || stopped || slides.length < 2) return;
    const timer = window.setInterval(() => setActiveIndex((index) => (index + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, [isDesktop, isVisible, reducedMotion, stopped, slides.length]);

  function select(index: number) {
    setActiveIndex(index);
    setStopped(true);
  }

  function onTabKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const next = event.key === "ArrowRight" ? (index + 1) % slides.length
      : event.key === "ArrowLeft" ? (index - 1 + slides.length) % slides.length
      : event.key === "Home" ? 0
      : event.key === "End" ? slides.length - 1
      : null;
    if (next === null) return;
    event.preventDefault();
    select(next);
    tabRefs.current[next]?.focus();
  }

  const active = slides[activeIndex];

  return (
    <div className={styles.panels} ref={rootRef}>
      <div className={styles.desktop}>
        <div className={styles.desktopMedia} id="cloud-platform-panel" role="tabpanel" aria-labelledby={`cloud-tab-${active.id}`} tabIndex={0}>
          <img alt={active.media.alt} height={active.media.height} loading="lazy" sizes="736px" src={active.media.src} srcSet={active.media.srcSet} width={active.media.width} />
        </div>
        <div className={styles.tabList} role="tablist" aria-labelledby={headingId}>
          {slides.map((slide, index) => (
            <button
              aria-controls="cloud-platform-panel"
              aria-selected={index === activeIndex}
              className={styles.tab}
              id={`cloud-tab-${slide.id}`}
              key={slide.id}
              onClick={() => select(index)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
              ref={(element) => { tabRefs.current[index] = element; }}
              role="tab"
              tabIndex={index === activeIndex ? 0 : -1}
              type="button"
            >
              <span className={styles.tabLabel}>{slide.label}</span>
              {index === activeIndex ? <span className={styles.tabDescription}>{slide.description}</span> : null}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.mobile}>
        {slides.map((slide, index) => (
          <div className={styles.mobileItem} key={slide.id}>
            <h3>
              <button
                aria-controls={`cloud-accordion-panel-${slide.id}`}
                aria-expanded={index === activeIndex}
                id={`cloud-accordion-${slide.id}`}
                onClick={() => select(index)}
                type="button"
              >{slide.label}</button>
            </h3>
            <div
              aria-labelledby={`cloud-accordion-${slide.id}`}
              hidden={index !== activeIndex}
              id={`cloud-accordion-panel-${slide.id}`}
              role="region"
            >
              <p>{slide.description}</p>
              <img alt={slide.media.alt} height={slide.media.height} loading="lazy" sizes="(max-width: 991px) calc(100vw - 32px), 736px" src={slide.media.src} srcSet={slide.media.srcSet} width={slide.media.width} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}