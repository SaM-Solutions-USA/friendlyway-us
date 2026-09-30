import Image from "next/image";

import { Paragraph } from "@/components/shared/typography/paragraph";
import { SectionHeading } from "@/components/shared/typography/section-heading";

import styles from "./visitor-experience-grid.module.css";

export interface VisitorExperienceGridIcon {
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
}

export interface VisitorExperienceGridItem {
  readonly icon: VisitorExperienceGridIcon;
  readonly labels: readonly string[];
}

export interface VisitorExperienceGridProps {
  readonly heading: string;
  readonly headingId?: string;
  readonly descriptionLead: string;
  readonly description: string;
  readonly items: readonly VisitorExperienceGridItem[];
}

export function VisitorExperienceGrid({
  heading,
  headingId = "visitor-experience-grid-heading",
  descriptionLead,
  description,
  items,
}: VisitorExperienceGridProps) {
  return (
    <div className={styles.root}>
      <div className={styles.intro}>
        <SectionHeading as="h2" id={headingId}>{heading}</SectionHeading>
        <Paragraph>
          <strong>{descriptionLead}</strong> {description}
        </Paragraph>
      </div>
      <ul aria-labelledby={headingId} className={styles.grid}>
        {items.map((item) => (
          <li className={styles.card} key={item.icon.src}>
            <Image
              className={styles.icon}
              src={item.icon.src}
              width={item.icon.width}
              height={item.icon.height}
              alt={item.icon.alt}
            />
            <ul className={styles.labels}>
              {item.labels.map((label) => (
                <li key={label}>{label}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
