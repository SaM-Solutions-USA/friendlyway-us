import { SectionHeading } from "@/components/shared/typography/section-heading";

import styles from "./statistics-grid.module.css";

export interface StatisticsGridProps {
  readonly heading: string;
  readonly items: readonly {
    readonly value: string;
    readonly unit?: string;
    readonly description: string;
  }[];
}

export function StatisticsGrid({ heading, items }: StatisticsGridProps) {
  return (
    <div className={styles.root}>
      <SectionHeading as="h2" id="statistics-grid-heading">{heading}</SectionHeading>
      <dl aria-labelledby="statistics-grid-heading" className={styles.grid}>
        {items.map((item) => (
          <div className={styles.item} key={item.description}>
            <dt className={styles.value}>
              {item.value}{item.unit ? <span className={styles.unit}> {item.unit}</span> : null}
            </dt>
            <dd className={styles.description}>{item.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}