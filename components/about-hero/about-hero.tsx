import Image from "next/image";

import type { ContentMedia } from "@/content/types";

import styles from "./about-hero.module.css";

export interface AboutHeroProps {
  readonly media: ContentMedia;
}

export function AboutHero({ media }: AboutHeroProps) {
  return (
    <div className={styles.root}>
      <Image
        className={styles.image}
        src={media.src}
        width={media.width}
        height={media.height}
        alt={media.alt}
        sizes="(max-width: 1199px) calc(100vw - 3rem), 1136px"
        preload
      />
    </div>
  );
}