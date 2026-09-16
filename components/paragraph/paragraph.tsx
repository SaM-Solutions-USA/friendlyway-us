import type { ReactNode } from "react";

import styles from "./paragraph.module.css";

export interface ParagraphProps {
  readonly children: ReactNode;
}

export function Paragraph({ children }: ParagraphProps) {
  return <p className={styles.root}>{children}</p>;
}