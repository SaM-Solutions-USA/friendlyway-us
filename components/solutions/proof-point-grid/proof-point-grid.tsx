import Image from "next/image";

import { Paragraph } from "@/components/shared/typography/paragraph";
import { SectionHeading } from "@/components/shared/typography/section-heading";

import styles from "./proof-point-grid.module.css";

export interface ProofPointGridItem {
  readonly icon: {
    readonly src: string;
    readonly width: number;
    readonly height: number;
    readonly alt: string;
  };
  readonly title?: string;
  readonly description: string;
}

export interface ProofPointGridProps {
  readonly heading: string;
  readonly description?: string;
  readonly items: readonly ProofPointGridItem[];
  readonly tone?: "default" | "inverse";
}

export function ProofPointGrid({ heading, description, items, tone = "default" }: ProofPointGridProps) {
  const headingId = "proof-point-grid-heading";

  return (
    <div className={`${styles.root} ${tone === "inverse" ? styles.inverse : ""}`}>
      {description ? (
        <div className={styles.intro}>
          <SectionHeading as="h2" id={headingId}>{heading}</SectionHeading>
          <Paragraph>{description}</Paragraph>
        </div>
      ) : <SectionHeading as="h2" id={headingId}>{heading}</SectionHeading>}
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
            {item.title ? <h3 className={styles.title}>{item.title}</h3> : null}
            <p className={styles.description}>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}