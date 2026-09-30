import Image from "next/image";

import { RichContent, type RichContentBlock } from "@/components/shared/content/rich-content/rich-content";
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
  readonly description: readonly RichContentBlock[];
}

export interface ProofPointGridProps {
  readonly heading: string;
  readonly description?: readonly RichContentBlock[];
  readonly items: readonly ProofPointGridItem[];
  readonly tone?: "default" | "inverse";
  readonly layout?: "centered" | "editorial";
}

export function ProofPointGrid({ heading, description, items, tone = "default", layout = "centered" }: ProofPointGridProps) {
  const headingId = "proof-point-grid-heading";

  return (
    <div className={`${styles.root} ${tone === "inverse" ? styles.inverse : ""} ${layout === "editorial" ? styles.editorial : ""}`}>
      {description ? (
        <div className={styles.intro}>
          <SectionHeading as="h2" id={headingId}>{heading}</SectionHeading>
          <div className={styles.introDescription}><RichContent blocks={description} variant="plain" /></div>
        </div>
      ) : <SectionHeading as="h2" id={headingId}>{heading}</SectionHeading>}
      <ul aria-labelledby={headingId} className={styles.grid}>
        {items.map((item) => (
          <li className={styles.item} key={item.icon.src}>
            <Image
              className={styles.icon}
              src={item.icon.src}
              width={item.icon.width}
              height={item.icon.height}
              alt={item.icon.alt}
            />
            {item.title ? <h3 className={styles.title}>{item.title}</h3> : null}
            <div className={styles.description}><RichContent blocks={item.description} variant="plain" /></div>
          </li>
        ))}
      </ul>
    </div>
  );
}