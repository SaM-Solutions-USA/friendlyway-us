import type { ReactNode } from "react";

import styles from "./two-column-split.module.css";

export type TwoColumnSplitGap = "sm" | "md" | "lg";

export interface TwoColumnSplitProps {
  readonly gap?: TwoColumnSplitGap;
  readonly children: ReactNode;
}

export function TwoColumnSplit({ gap = "md", children }: TwoColumnSplitProps) {
  return <div className={`${styles.root} ${styles[gap]}`}>{children}</div>;
}