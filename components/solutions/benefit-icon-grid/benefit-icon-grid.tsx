import Image from "next/image";

import { Paragraph } from "@/components/shared/typography/paragraph";
import { SectionHeading } from "@/components/shared/typography/section-heading";

import styles from "./benefit-icon-grid.module.css";

export interface BenefitIconGridItem {
  readonly icon: {
    readonly src: string;
    readonly width: number;
    readonly height: number;
    readonly alt: string;
  };
  readonly label: string;
}

export interface BenefitIconGridProps {
  readonly heading: string;
  readonly headingId?: string;
  readonly description?: string;
  readonly items: readonly BenefitIconGridItem[];
  readonly variant?: "default" | "industries";
}

export function BenefitIconGrid({ heading, headingId = "safety-benefits-heading", description, items, variant = "default" }: BenefitIconGridProps) {
  return (
    <div className={`${styles.root} ${variant === "industries" ? styles.industries : ""}`}>
      <div className={styles.intro}>
        <SectionHeading as="h2" id={headingId}>{heading}</SectionHeading>
        {description ? <Paragraph>{description}</Paragraph> : null}
      </div>
      <ul className={styles.grid}>
        {items.map((item) => (
          <li className={styles.item} key={item.label}>
            <Image
              className={styles.icon}
              src={item.icon.src}
              width={item.icon.width}
              height={item.icon.height}
              alt={item.icon.alt}
            />
            <p className={styles.label}>{item.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}