import Image from "next/image";

import { SectionHeading } from "@/components/shared/typography/section-heading";

import styles from "./proof-point-grid.module.css";

export interface ProofPointGridItem {
  readonly icon: {
    readonly src: string;
    readonly width: number;
    readonly height: number;
    readonly alt: string;
  };
  readonly description: string;
}

export interface ProofPointGridProps {
  readonly heading: string;
  readonly items: readonly ProofPointGridItem[];
}

export function ProofPointGrid({ heading, items }: ProofPointGridProps) {
  const headingId = "proof-point-grid-heading";

  return (
    <div className={styles.root}>
      <SectionHeading as="h2" id={headingId}>{heading}</SectionHeading>
      <ul aria-labelledby={headingId} className={styles.grid}>
        {items.map((item) => (
          <li className={styles.item} key={item.description}>
            <Image
              className={styles.icon}
              src={item.icon.src}
              width={item.icon.width}
              height={item.icon.height}
              alt={item.icon.alt}
            />
            <p className={styles.description}>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}