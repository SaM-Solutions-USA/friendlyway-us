import { Paragraph } from "@/components/shared/typography/paragraph";
import { SectionHeading } from "@/components/shared/typography/section-heading";

import styles from "./solution-card-grid.module.css";

export interface SolutionCardGridItem {
  readonly title: string;
  readonly description: readonly string[];
  readonly href?: string;
}

export interface SolutionCardGridProps {
  readonly heading: string;
  readonly description?: string;
  readonly cards: readonly SolutionCardGridItem[];
  readonly desktopColumns?: 2 | 3;
}

export function SolutionCardGrid({ heading, description, cards, desktopColumns = 2 }: SolutionCardGridProps) {
  const headingId = "solution-card-grid-heading";

  return (
    <div className={styles.root}>
      <div className={styles.intro}>
        <SectionHeading as="h2" id={headingId}>{heading}</SectionHeading>
        {description ? <Paragraph>{description}</Paragraph> : null}
      </div>
      <ul aria-labelledby={headingId} className={styles.grid} data-columns={desktopColumns}>
        {cards.map((card) => (
          <li className={styles.card} key={card.title}>
            {card.href ? (
              <a className={styles.cardInner} href={card.href}>
                <CardContent card={card} />
              </a>
            ) : (
              <div className={styles.cardInner}>
                <CardContent card={card} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CardContent({ card }: { readonly card: SolutionCardGridItem }) {
  return (
    <>
      <h3 className={styles.title}>{card.title}</h3>
      <div className={styles.description}>
        {card.description.map((paragraph) => <Paragraph key={paragraph}>{paragraph}</Paragraph>)}
      </div>
    </>
  );
}