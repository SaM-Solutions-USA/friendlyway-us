"use client";

import Image from "next/image";
import { useState } from "react";

import type { ProductMedia } from "@/components/products/types";

import styles from "./product-gallery.module.css";

export function ProductGallery({ media }: { readonly media: readonly ProductMedia[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMedia = media[activeIndex];

  if (!activeMedia) {
    return null;
  }

  return (
    <div className={styles.root} aria-roledescription="carousel" aria-label="Product images">
      <div className={styles.stage}>
        <Image className={styles.image} key={activeMedia.src} src={activeMedia.src} width={activeMedia.width} height={activeMedia.height} alt={activeMedia.alt} />
        <div className={styles.controls}>
          <button aria-label="Previous product image" className={styles.previous} disabled={activeIndex === 0} onClick={() => setActiveIndex(activeIndex - 1)} type="button" />
          <button aria-label="Next product image" className={styles.next} disabled={activeIndex === media.length - 1} onClick={() => setActiveIndex(activeIndex + 1)} type="button" />
        </div>
      </div>
      <div className={styles.slideSwitcher} aria-label="Choose product image" role="group">
        {media.map((item, index) => <button aria-current={index === activeIndex ? "true" : undefined} aria-label={`Show product image ${index + 1}`} className={styles.slideButton} key={item.src} onClick={() => setActiveIndex(index)} type="button"><span /></button>)}
      </div>
    </div>
  );
}