import Image from "next/image";

import type { SharedMedia } from "../media";
import { SectionHeading } from "../../typography/section-heading";

import styles from "./image-feature.module.css";

export interface ImageFeatureProps {
  readonly heading: string;
  readonly description: string;
  readonly media: SharedMedia;
  readonly preserveMediaWidth?: boolean;
}

export function ImageFeature({ heading, description, media, preserveMediaWidth = false }: ImageFeatureProps) {
  return (
    <div className={styles.root} data-preserve-media-width={preserveMediaWidth || undefined}>
      <SectionHeading as="h2">{heading}</SectionHeading>
      <p className={styles.description}>{description}</p>
      <div className={styles.mediaViewport}>
        <Image alt={media.alt} className={styles.image} height={media.height} src={media.src} width={media.width} />
      </div>
    </div>
  );
}