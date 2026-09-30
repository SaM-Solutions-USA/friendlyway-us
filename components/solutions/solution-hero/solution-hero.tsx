import Image from "next/image";

import { VideoPlayer } from "@/components/shared/content/video-player";
import type { VideoPlayerMedia } from "@/components/shared/content/video-player";

import styles from "./solution-hero.module.css";

export interface SolutionHeroImageMedia {
  readonly kind?: "image";
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
}

export type SolutionHeroVideoMedia = VideoPlayerMedia;

export type SolutionHeroMedia = SolutionHeroImageMedia | SolutionHeroVideoMedia;

export interface SolutionHeroAction {
  readonly label: string;
  readonly href: string;
  readonly variant?: "outline";
}

export interface SolutionHeroProps {
  readonly hero: {
    readonly title: string;
    readonly description: string;
    readonly actions: readonly SolutionHeroAction[];
    readonly media: SolutionHeroMedia;
  };
}

export function SolutionHero({ hero }: SolutionHeroProps) {
  return (
    <div className={styles.root}>
      <div className={styles.copy}>
        <h1 className={styles.title}>{hero.title}</h1>
        <p className={styles.description}>{hero.description}</p>
        <div className={styles.actions}>
          {hero.actions.map((action) => <a className={styles.action} data-variant={action.variant} href={action.href} key={action.label}>{action.label}</a>)}
        </div>
      </div>
      {hero.media.kind === "video" ? (
        <VideoPlayer className={styles.media} media={hero.media} />
      ) : (
        <Image
          className={styles.image}
          src={hero.media.src}
          width={hero.media.width}
          height={hero.media.height}
          alt={hero.media.alt}
          sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1199px) calc(50vw - 40px), 548px"
          preload
        />
      )}
    </div>
  );
}