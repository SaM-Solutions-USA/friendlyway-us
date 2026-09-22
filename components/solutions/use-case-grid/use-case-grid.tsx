import Image from "next/image";

import { SectionHeading } from "@/components/shared/typography/section-heading";

import styles from "./use-case-grid.module.css";

export interface UseCaseGridItem {
  readonly icon: {
    readonly src: string;
    readonly width: number;
    readonly height: number;
    readonly alt: string;
  };
  readonly title: string;
  readonly description: string;
}

export interface UseCaseGridProps {
  readonly heading: string;
  readonly description?: string;
  readonly items: readonly UseCaseGridItem[];
  readonly desktopColumns?: 3 | 4;
}

export function UseCaseGrid({ heading, description, items, desktopColumns = 3 }: UseCaseGridProps) {
  const headingId = "use-case-grid-heading";

  return (
    <div className={styles.root}>
      <div className={styles.intro}>
        <SectionHeading as="h2" id={headingId}>{heading}</SectionHeading>
        {description ? <p className={styles.introDescription}>{description}</p> : null}
      </div>
      <ul aria-labelledby={headingId} className={styles.grid} data-columns={desktopColumns}>
        {items.map((item) => (
          <li className={styles.item} key={item.title}>
            <Image
              className={styles.icon}
              src={item.icon.src}
              width={item.icon.width}
              height={item.icon.height}
              alt={item.icon.alt}
            />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}