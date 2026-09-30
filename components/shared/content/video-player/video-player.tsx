"use client";

import { useRef, useState } from "react";

import styles from "./video-player.module.css";

export interface VideoPlayerSource {
  readonly src: string;
  readonly type: string;
}

export interface VideoPlayerMedia {
  readonly kind: "video";
  readonly sources: ReadonlyArray<VideoPlayerSource>;
  readonly poster: string;
  readonly width: number;
  readonly height: number;
  readonly label: string;
}

export interface VideoPlayerProps {
  readonly media: VideoPlayerMedia;
  readonly className?: string;
}

export function VideoPlayer({ media, className }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (!video.paused) {
      video.pause();
      return;
    }

    try {
      await video.play();
      setError(false);
    } catch {
      setError(true);
    }
  }

  return (
    <div aria-label={media.label} className={className ? `${styles.frame} ${className}` : styles.frame} role="group">
      <video
        aria-label={media.label}
        className={styles.media}
        height={media.height}
        onEnded={() => setPlaying(false)}
        onError={() => setError(true)}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
        playsInline
        poster={media.poster}
        preload="none"
        ref={videoRef}
        width={media.width}
      >
        {media.sources.map((source) => <source key={source.src} src={source.src} type={source.type} />)}
        Your browser does not support video playback.
      </video>
      {error ? <p className={styles.error} role="alert">Video unavailable.</p> : null}
      <button
        aria-label={playing ? "Pause video" : "Play video"}
        className={styles.playButton}
        data-playing={playing || undefined}
        onClick={togglePlayback}
        title={playing ? "Pause video" : "Play video"}
        type="button"
      >
        <span aria-hidden="true" className={playing ? styles.pauseIcon : styles.playIcon} />
      </button>
    </div>
  );
}
