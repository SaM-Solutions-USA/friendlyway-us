"use client";

import { useEffect, useRef } from "react";

export interface HeroVideoProps {
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
  readonly className?: string;
}

export function HeroVideo({ src, width, height, alt, className }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const query = window.matchMedia("(prefers-reduced-motion: reduce)");

    const applyPreference = () => {
      if (query.matches) {
        video.pause();
        return;
      }

      const playResult = video.play();
      if (playResult && typeof playResult.catch === "function") {
        playResult.catch(() => {
          /* Autoplay rejected (e.g. policy or missing gesture); stay paused. */
        });
      }
    };

    applyPreference();
    query.addEventListener("change", applyPreference);

    return () => {
      query.removeEventListener("change", applyPreference);
      video.pause();
    };
  }, []);

  return (
    <video
      aria-label={alt}
      className={className}
      height={height}
      loop
      muted
      playsInline
      preload="none"
      ref={videoRef}
      src={src}
      width={width}
    />
  );
}
