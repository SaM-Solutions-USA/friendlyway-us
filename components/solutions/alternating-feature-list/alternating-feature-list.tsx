import Image from "next/image";

import { VideoPlayer } from "@/components/shared/content/video-player";
import type { VideoPlayerMedia } from "@/components/shared/content/video-player";

import styles from "./alternating-feature-list.module.css";

export interface AlternatingFeatureListImageMedia {
  readonly kind?: "image";
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
}

export type AlternatingFeatureListVideoMedia = VideoPlayerMedia;

export interface AlternatingFeatureListAction {
  readonly label: string;
  readonly href: string;
}

export interface AlternatingFeatureListItem {
  readonly title: string;
  readonly description: string;
  readonly media: AlternatingFeatureListImageMedia | AlternatingFeatureListVideoMedia;
  readonly action?: AlternatingFeatureListAction;
}

export interface AlternatingFeatureListProps {
  readonly heading: string;
  readonly description: string;
  readonly items: readonly AlternatingFeatureListItem[];
  readonly footerAction?: AlternatingFeatureListAction;
}

export function AlternatingFeatureList({ heading, description, items, footerAction }: AlternatingFeatureListProps) {
  return (
    <section aria-labelledby="solution-features-heading" className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 id="solution-features-heading">{heading}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.rows}>
          {items.map((item, index) => (
            <div className={styles.row} data-reversed={index % 2 === 1 || undefined} key={item.title}>
              {item.media.kind === "video" ? (
                <VideoPlayer className={styles.image} media={item.media} />
              ) : (
                <Image
                  className={styles.image}
                  src={item.media.src}
                  width={item.media.width}
                  height={item.media.height}
                  alt={item.media.alt}
                  sizes="(max-width: 991px) calc(100vw - 32px), (max-width: 1199px) calc(50vw - 36px), 548px"
                />
              )}
              <div className={styles.copy}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.action ? (
                  <a className={styles.action} href={item.action.href}>
                    {item.action.label}
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        {footerAction ? (
          <div className={styles.footer}>
            <a className={styles.footerAction} href={footerAction.href}>{footerAction.label}</a>
          </div>
        ) : null}
      </div>
    </section>
  );
}