import { ContentSection } from "@/components/shared/layout/content-section";
import { Paragraph } from "@/components/shared/typography/paragraph";
import { SectionHeading } from "@/components/shared/typography/section-heading";

import styles from "./insights-and-news.module.css";

export interface InsightsAndNewsArticle {
  readonly title: string;
  readonly href: string;
  readonly dateLabel: string;
  readonly dateTime: string;
  readonly media: {
    readonly src: string;
    readonly width: number;
    readonly height: number;
    readonly alt: string;
  };
}

export interface InsightsAndNewsProps {
  readonly heading: { readonly text: string; readonly id: string };
  readonly description: string;
  readonly articles: readonly InsightsAndNewsArticle[];
  readonly cta: { readonly label: string; readonly href: string };
}

export function InsightsAndNews({ heading, description, articles, cta }: InsightsAndNewsProps) {
  return (
    <ContentSection gap="sm" labelledBy={heading.id} paddingBlock="lg">
      <SectionHeading as="h2" id={heading.id}>{heading.text}</SectionHeading>
      <Paragraph>{description}</Paragraph>
      <ul className={styles.grid}>
        {articles.map((article) => (
          <li className={styles.item} key={article.href}>
            <a className={styles.card} href={article.href}>
              <img
                alt={article.media.alt}
                className={styles.image}
                decoding="async"
                height={article.media.height}
                loading="lazy"
                sizes="(max-width: 575px) calc(100vw - 32px), (max-width: 991px) calc((100vw - 48px) / 2), 368px"
                src={article.media.src}
                width={article.media.width}
              />
              <div className={styles.content}>
                <h3 className={styles.title}>{article.title}</h3>
                <time className={styles.date} dateTime={article.dateTime}>{article.dateLabel}</time>
              </div>
            </a>
          </li>
        ))}
        <li className={styles.ctaItem}>
          <a className={styles.cta} href={cta.href}>{cta.label}</a>
        </li>
      </ul>
    </ContentSection>
  );
}
