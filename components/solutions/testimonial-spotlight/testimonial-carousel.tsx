"use client";

import { flushSync } from "react-dom";
import { useRef, useState } from "react";

import { SectionHeading } from "@/components/shared/typography/section-heading";

import { TestimonialSpotlight, type TestimonialSpotlightProps } from "./testimonial-spotlight";
import styles from "./testimonial-carousel.module.css";

export interface TestimonialCarouselProps {
  readonly heading: string;
  readonly items: readonly TestimonialSpotlightProps[];
}

export function TestimonialCarousel({ heading, items }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const previousRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  const transitionRequest = useRef(0);
  const currentTransition = useRef<ReturnType<typeof document.startViewTransition> | null>(null);

  function showTestimonial(index: number) {
    const request = ++transitionRequest.current;
    currentTransition.current?.skipTransition();
    currentTransition.current = null;
    if (index === activeIndex) return;

    if (!document.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActiveIndex(index);
      return;
    }

    if (slidesRef.current) {
      slidesRef.current.style.viewTransitionName = index > activeIndex ? "testimonial-forward" : "testimonial-backward";
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

  function showPrevious() {
    showTestimonial(activeIndex - 1);
    if (activeIndex === 1) window.requestAnimationFrame(() => nextRef.current?.focus());
  }

  function showNext() {
    showTestimonial(activeIndex + 1);
    if (activeIndex === items.length - 2) window.requestAnimationFrame(() => previousRef.current?.focus());
  }

  if (items.length === 0) return null;

  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        <SectionHeading as="h2" id="testimonial-carousel-heading">{heading}</SectionHeading>
      </div>
      <div className={styles.slides} aria-live="off" ref={slidesRef} style={{ viewTransitionName: "testimonial-forward" }}>
        {items.map((item, index) => (
          <div className={styles.slide} hidden={index !== activeIndex} key={`${item.author.name}-${index}`}>
            <TestimonialSpotlight {...item} />
          </div>
        ))}
        {items.length > 1 ? (
          <div className={styles.arrows}>
            {activeIndex > 0 ? (
              <button aria-label="Previous testimonial" className={`${styles.arrow} ${styles.previous}`} onClick={showPrevious} ref={previousRef} type="button">
                <span aria-hidden="true">‹</span>
              </button>
            ) : null}
            {activeIndex < items.length - 1 ? (
              <button aria-label="Next testimonial" className={`${styles.arrow} ${styles.next}`} onClick={showNext} ref={nextRef} type="button">
                <span aria-hidden="true">›</span>
              </button>
            ) : null}
          </div>
        ) : null}
      </div>
      {items.length > 1 ? (
        <div aria-label="Choose testimonial" className={styles.dots} role="group">
          {items.map((item, index) => (
            <button
              aria-current={index === activeIndex ? "true" : undefined}
              aria-label={`Show testimonial ${index + 1}: ${item.author.name}`}
              className={styles.dot}
              key={item.author.name}
              onClick={() => showTestimonial(index)}
              type="button"
            >
              <span />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}