import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import styles from "./section-heading.module.css";

export interface SectionHeadingProps {
  readonly as: "h1" | "h2" | "h3";
  readonly children: ReactNode;
  readonly id?: string;
}

export function SectionHeading({ as, children, id }: SectionHeadingProps) {
  const Heading = as as ElementType<ComponentPropsWithoutRef<typeof as>>;

  return <Heading className={styles.root} id={id}>{children}</Heading>;
}