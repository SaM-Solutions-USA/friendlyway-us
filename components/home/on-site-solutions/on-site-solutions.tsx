import { ContentSection } from "@/components/shared/layout/content-section";

import styles from "./on-site-solutions.module.css";

export interface HomeOnSiteSolutionCard {
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly media: {
    readonly src: string;
    readonly srcSet: string;
    readonly width: number;
    readonly height: number;
    readonly alt: string;
  };
}

export interface HomeOnSiteSolutionsProps {
  readonly heading: { readonly text: string; readonly id: string };
  readonly cards: readonly HomeOnSiteSolutionCard[];
}

export function HomeOnSiteSolutions({ heading, cards }: HomeOnSiteSolutionsProps) {
  return (
    <ContentSection gap="md" labelledBy={heading.id} paddingBlock="lg">
      <h2 className={styles.heading} id={heading.id}>{heading.text}</h2>
      <ul className={styles.grid}>
        {cards.map((card) => (
          <li className={styles.card} key={card.href}>
            <a className={styles.link} href={card.href}>
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.description}>{card.description}</p>
              <span className={styles.action} aria-hidden="true">Learn more <span className={styles.chevron} /></span>
              <div className={styles.media}>
                <img
                  alt={card.media.alt}
                  className={styles.image}
                  height={card.media.height}
                  loading="lazy"
                  sizes="(max-width: 991px) calc(100vw - 32px), 560px"
                  src={card.media.src}
                  srcSet={card.media.srcSet}
                  width={card.media.width}
                />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </ContentSection>
  );
}