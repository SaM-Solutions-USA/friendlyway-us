import Image from "next/image";

import type { AboutUsMedia } from "@/content/about-us";

import styles from "./about-hero.module.css";

export interface AboutHeroProps {
  readonly media: AboutUsMedia;
}

export function AboutHero({ media }: AboutHeroProps) {
  return (
    <section className={styles.root} aria-label="About friendlyway">
      <Image
        className={styles.image}
        src={media.src}
        width={media.width}
        height={media.height}
        alt={media.alt}
        sizes="(max-width: 1199px) calc(100vw - 3rem), 1136px"
        preload
      />
    </section>
  );
}