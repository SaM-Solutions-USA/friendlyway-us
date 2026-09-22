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
  readonly description: string;
  readonly items: readonly BenefitIconGridItem[];
}

export function BenefitIconGrid({ heading, description, items }: BenefitIconGridProps) {
  return (
    <div className={styles.root}>
      <div className={styles.intro}>
        <SectionHeading as="h2" id="safety-benefits-heading">{heading}</SectionHeading>
        <Paragraph>{description}</Paragraph>
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