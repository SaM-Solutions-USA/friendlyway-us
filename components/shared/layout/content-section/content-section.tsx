import type { ReactNode } from "react";

import styles from "./content-section.module.css";

export type ContentSectionElement = "section" | "div" | "aside";
export type ContentSectionWidth = "content" | "full";
export type ContentSectionSpacing = "none" | "xs" | "sm" | "md" | "lg" | "xl";
export type ContentSectionTone = "default" | "muted" | "sand" | "dark" | "warm";

export interface ContentSectionProps {
  readonly as?: ContentSectionElement;
  readonly id?: string;
  readonly labelledBy?: string;
  readonly width?: ContentSectionWidth;
  readonly paddingBlock?: ContentSectionSpacing;
  readonly paddingBlockStart?: ContentSectionSpacing;
  readonly paddingBlockEnd?: ContentSectionSpacing;
  readonly gap?: ContentSectionSpacing;
  readonly tone?: ContentSectionTone;
  readonly children: ReactNode;
}

function getSpacingClass(prefix: string, spacing: ContentSectionSpacing) {
  return styles[`${prefix}${spacing[0].toUpperCase()}${spacing.slice(1)}`];
}

export function ContentSection({
  as: Element = "section",
  id,
  labelledBy,
  width = "content",
  paddingBlock = "none",
  paddingBlockStart,
  paddingBlockEnd,
  gap = "none",
  tone = "default",
  children,
}: ContentSectionProps) {
  const paddingStart = paddingBlockStart ?? paddingBlock;
  const paddingEnd = paddingBlockEnd ?? paddingBlock;

  return (
    <Element aria-labelledby={labelledBy} className={`${styles.band} ${styles[tone]}`} id={id}>
      <div
        className={[
          styles.inner,
          styles[width],
          getSpacingClass("paddingStart", paddingStart),
          getSpacingClass("paddingEnd", paddingEnd),
          getSpacingClass("gap", gap),
        ].join(" ")}
      >
        {children}
      </div>
    </Element>
  );
}