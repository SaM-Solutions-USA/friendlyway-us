import Image from "next/image";

import { Paragraph } from "@/components/shared/typography/paragraph";
import { SectionHeading } from "@/components/shared/typography/section-heading";

import styles from "./manufacturing-solution-grid.module.css";

export interface ManufacturingSolutionGridItem {
  readonly title: string;
  readonly icon: {
    readonly src: string;
    readonly width: number;
    readonly height: number;
    readonly alt: string;
  };
  readonly paragraphs: readonly string[];
  readonly features: readonly string[];
  readonly action?: {
    readonly label: string;
    readonly href: string;
  };
}

export interface ManufacturingSolutionGridProps {
  readonly heading: string;
  readonly items: readonly ManufacturingSolutionGridItem[];
}

export function ManufacturingSolutionGrid({ heading, items }: ManufacturingSolutionGridProps) {
  const headingId = "manufacturing-solutions-heading";

  return (
    <div className={styles.root}>
      <SectionHeading as="h2" id={headingId}>{heading}</SectionHeading>
      <ul aria-labelledby={headingId} className={styles.grid}>
        {items.map((item) => (
          <li className={styles.card} key={item.title}>
            <Image className={styles.icon} src={item.icon.src} width={item.icon.width} height={item.icon.height} alt={item.icon.alt} />
            <h3 className={styles.title}>{item.title}</h3>
            <div className={styles.copy}>
              {item.paragraphs.map((paragraph) => <Paragraph key={paragraph}>{paragraph}</Paragraph>)}
            </div>
            <ul className={styles.features}>
              {item.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            {item.action ? (
              <div className={styles.actionContainer}>
                <a className={styles.action} href={item.action.href}>
                  {item.action.label}
                  <svg aria-hidden="true" viewBox="0 0 11 22">
                    <path d="M3 6.73633L7 11.2363L3 15.7363" />
                  </svg>
                </a>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}