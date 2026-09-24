"use client";

import { useRef, useState } from "react";
import { flushSync } from "react-dom";

import { SectionHeading } from "@/components/shared/typography/section-heading";
import { CarouselArrow } from "@/components/shared/content/carousel-arrow";

import styles from "./transformation-journey.module.css";

export interface TransformationJourneyProps {
  readonly heading: string;
  readonly items: readonly {
    readonly title: string;
    readonly rows: readonly { readonly before: string; readonly after: string }[];
  }[];
}

export function TransformationJourney({ heading, items }: TransformationJourneyProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number | null>(null);
  const transitionRequest = useRef(0);
  const currentTransition = useRef<ReturnType<typeof document.startViewTransition> | null>(null);

  function showSlide(index: number, direction?: "forward" | "backward") {
    const request = ++transitionRequest.current;
    currentTransition.current?.skipTransition();
    currentTransition.current = null;
    if (index === activeIndex) return;

    if (!document.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActiveIndex(index);
      return;
    }

    if (slideRef.current) {
      slideRef.current.style.viewTransitionName = direction === "backward" || (!direction && index < activeIndex)
        ? "journey-backward"
        : "journey-forward";
    }
    const transition = document.startViewTransition(() => {
      if (request === transitionRequest.current) flushSync(() => setActiveIndex(index));
    });
    currentTransition.current = transition;
    void transition.ready.catch(() => {});
    void transition.finished.then(() => {
      if (currentTransition.current === transition) currentTransition.current = null;
    });
  }

  function move(direction: -1 | 1) {
    showSlide((activeIndex + direction + items.length) % items.length, direction === 1 ? "forward" : "backward");
  }

  if (items.length === 0) return null;

  const active = items[activeIndex];

  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        <SectionHeading as="h2" id="transformation-journey-heading">{heading}</SectionHeading>
      </div>
      <div className={styles.carousel}>
        {items.length > 1 ? (
          <CarouselArrow aria-label="Previous transformation" className={`${styles.arrow} ${styles.previous}`} direction="previous" onClick={() => move(-1)} style={{ viewTransitionName: "journey-previous-arrow" }} />
        ) : null}
        <div
          className={styles.slide}
          onTouchStart={(event) => { startX.current = event.touches[0]?.clientX ?? null; }}
          onTouchEnd={(event) => {
            if (startX.current === null) return;
            const distance = startX.current - event.changedTouches[0].clientX;
            startX.current = null;
            if (Math.abs(distance) > 50) move(distance > 0 ? 1 : -1);
          }}
          ref={slideRef}
          style={{ viewTransitionName: "journey-forward" }}
        >
          <h3 className={styles.title} aria-live="polite">{active.title}</h3>
          <div className={styles.table}>
            <div className={`${styles.cell} ${styles.columnHeading}`}>
              <svg aria-hidden="true" className={styles.headingIcon} viewBox="0 0 24 25" fill="none">
                <path d="M12 3C6.486 3 2 7.486 2 13C2 18.514 6.486 23 12 23C17.514 23 22 18.514 22 13C22 7.486 17.514 3 12 3ZM16 9.5C16.828 9.5 17.5 10.172 17.5 11C17.5 11.828 16.828 12.5 16 12.5C15.172 12.5 14.5 11.828 14.5 11C14.5 10.172 15.172 9.5 16 9.5ZM8 9.5C8.828 9.5 9.5 10.172 9.5 11C9.5 11.828 8.828 12.5 8 12.5C7.172 12.5 6.5 11.828 6.5 11C6.5 10.172 7.172 9.5 8 9.5ZM15.42 17.876C13.328 16.761 10.671 16.761 8.579 17.876C8.14 18.11 7.597 17.98 7.308 17.574C6.956 17.081 7.118 16.387 7.652 16.099C8.974 15.387 10.457 15.015 12 15.015C13.543 15.015 15.027 15.387 16.348 16.099C16.882 16.386 17.044 17.081 16.692 17.574C16.403 17.98 15.86 18.11 15.42 17.876Z" fill="#FF6969" />
              </svg>
              Before
            </div>
            <div className={`${styles.cell} ${styles.columnHeading}`}>
              <svg aria-hidden="true" className={styles.headingIcon} viewBox="0 0 24 25" fill="none">
                <path d="M12 2.73584C6.477 2.73584 2 7.21284 2 12.7358C2 18.2588 6.477 22.7358 12 22.7358C17.523 22.7358 22 18.2588 22 12.7358C22 7.21284 17.523 2.73584 12 2.73584ZM15.5 8.73584C16.33 8.73584 17 9.40584 17 10.2358C17 11.0658 16.33 11.7358 15.5 11.7358C14.67 11.7358 14 11.0658 14 10.2358C14 9.40584 14.67 8.73584 15.5 8.73584ZM8.5 8.73584C9.33 8.73584 10 9.40584 10 10.2358C10 11.0658 9.33 11.7358 8.5 11.7358C7.67 11.7358 7 11.0658 7 10.2358C7 9.40584 7.67 8.73584 8.5 8.73584ZM12 18.2358C9.968 18.2358 8.202 17.1258 7.253 15.4888C7.06 15.1558 7.308 14.7358 7.692 14.7358H16.307C16.692 14.7358 16.939 15.1558 16.746 15.4888C15.798 17.1258 14.032 18.2358 12 18.2358Z" fill="#71B393" />
              </svg>
              After
            </div>
            {active.rows.map((row, index) => (
              <div className={styles.row} key={index}>
                <div className={styles.cell}><span aria-hidden="true" className={styles.beforeIcon} />{row.before}</div>
                <div className={styles.cell}><span aria-hidden="true" className={styles.afterIcon} />{row.after}</div>
              </div>
            ))}
          </div>
        </div>
        {items.length > 1 ? (
          <CarouselArrow aria-label="Next transformation" className={`${styles.arrow} ${styles.next}`} direction="next" onClick={() => move(1)} style={{ viewTransitionName: "journey-next-arrow" }} />
        ) : null}
      </div>
      {items.length > 1 ? (
        <div aria-label="Choose transformation" className={styles.dots} role="group">
          {items.map((item, index) => (
            <button
              aria-current={index === activeIndex ? "true" : undefined}
              aria-label={`Show transformation ${index + 1}: ${item.title}`}
              className={styles.dot}
              key={item.title}
              onClick={() => showSlide(index)}
              type="button"
            ><span /></button>
          ))}
        </div>
      ) : null}
    </div>
  );
}