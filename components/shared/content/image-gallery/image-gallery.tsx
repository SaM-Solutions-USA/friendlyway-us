"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

import type { SharedMedia } from "../media";
import { SectionHeading } from "../../typography/section-heading";

import styles from "./image-gallery.module.css";

export interface ImageGalleryProps {
  readonly heading: string;
  readonly images: readonly SharedMedia[];
}

function getScrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
}

export function ImageGallery({ heading, images }: ImageGalleryProps) {
  const headingId = useId();
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideIndices, setSlideIndices] = useState(() => images.map((_, index) => index));

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateSlideIndices = () => {
      const items = [...viewport.querySelectorAll<HTMLElement>("li")];
      const maximumScroll = viewport.scrollWidth - viewport.clientWidth;
      const nextSlideIndices = items.flatMap((item, index) => {
        const previousItem = items[index - 1];
        const firstItemOffset = items[0]?.offsetLeft ?? 0;
        const target = Math.min(item.offsetLeft - firstItemOffset, maximumScroll);
        const previousTarget = previousItem ? Math.min(previousItem.offsetLeft - firstItemOffset, maximumScroll) : -1;

        return index === 0 || target > previousTarget + 1 ? [index] : [];
      });

      setSlideIndices((currentSlideIndices) => (
        currentSlideIndices.length === nextSlideIndices.length
        && currentSlideIndices.every((itemIndex, index) => itemIndex === nextSlideIndices[index])
          ? currentSlideIndices
          : nextSlideIndices
      ));
    };

    const updateActiveIndex = () => {
      const items = [...viewport.querySelectorAll<HTMLElement>("li")];
      const firstItemOffset = items[0]?.offsetLeft ?? 0;
      const closestIndex = items.reduce((currentIndex, item, index) => (
        Math.abs(item.offsetLeft - firstItemOffset - viewport.scrollLeft) < Math.abs(items[currentIndex].offsetLeft - firstItemOffset - viewport.scrollLeft)
          ? index
          : currentIndex
      ), 0);
      setActiveIndex(closestIndex);
    };

    updateSlideIndices();
    updateActiveIndex();
    viewport.addEventListener("scroll", updateActiveIndex, { passive: true });
    const resizeObserver = new ResizeObserver(() => {
      updateSlideIndices();
      updateActiveIndex();
    });
    resizeObserver.observe(viewport);

    return () => {
      viewport.removeEventListener("scroll", updateActiveIndex);
      resizeObserver.disconnect();
    };
  }, [images]);

  if (images.length === 0) return null;

  const scrollToItem = (index: number) => {
    const viewport = viewportRef.current;
    const item = viewport?.querySelectorAll<HTMLElement>("li")[index];
    const firstItem = viewport?.querySelector<HTMLElement>("li");
    if (!viewport || !item || !firstItem) return;

    viewport.scrollTo({ left: item.offsetLeft - firstItem.offsetLeft, behavior: getScrollBehavior() });
  };

  return (
    <section aria-labelledby={headingId} className={styles.root}>
      <SectionHeading as="h2" id={headingId}>{heading}</SectionHeading>
      <div className={styles.viewport} ref={viewportRef}>
        <ul aria-label={heading} className={styles.list}>
          {images.map((image) => (
            <li className={styles.item} key={image.src}>
              <Image alt={image.alt} className={styles.image} height={image.height} src={image.src} width={image.width} />
            </li>
          ))}
        </ul>
      </div>
      <div aria-label="Choose gallery image" className={styles.slideSwitcher} role="group">
        {slideIndices.map((imageIndex) => {
          const image = images[imageIndex];

          return (
          <button
            aria-current={imageIndex === activeIndex ? "true" : undefined}
            aria-label={`Show image ${imageIndex + 1}`}
            className={styles.slideButton}
            key={image.src}
            onClick={() => scrollToItem(imageIndex)}
            type="button"
          >
            <span />
          </button>
          );
        })}
      </div>
    </section>
  );
}