import Image from "next/image";
import type { ContentCard, ContentCta } from "@/content/types";
import styles from "./product-grid.module.css";

export interface ProductGridProps {
  readonly cards: readonly ContentCard[];
  readonly cta?: ContentCta;
  readonly variant?: "default" | "kiosks";
}

export function ProductGrid({ cards, cta, variant = "default" }: ProductGridProps) {
  const isKiosk = variant === "kiosks";
  const kioskSizes = "(max-width: 767px) calc(100vw - 32px), 552px";
  const defaultSizes = "(max-width: 475px) calc(100vw - 32px), (max-width: 991px) 50vw, 25vw";

  return (
    <div className={styles.root} data-variant={isKiosk ? "kiosks" : undefined}>
      <ul className={styles.grid}>
        {cards.map((card) => {
          const sizes = isKiosk ? kioskSizes : defaultSizes;

          const imageNode = card.image ? (
            <div className={styles.imageWrap}>
              <Image
                className={styles.image}
                src={card.image.src}
                width={card.image.width}
                height={card.image.height}
                alt={card.image.alt}
                sizes={sizes}
              />
            </div>
          ) : null;

          const content = isKiosk ? (
            <>
              {imageNode}
              <h3 className={styles.title}>{card.title}</h3>
              {card.description ? <p className={styles.description}>{card.description}</p> : null}
            </>
          ) : (
            <>
              {imageNode}
              <span className={styles.title}>{card.title}</span>
            </>
          );

          if (card.href) {
            return (
              <li key={card.title}>
                <a className={styles.cardLink} href={card.href}>{content}</a>
              </li>
            );
          }

          if (isKiosk) {
            return (
              <li key={card.title}>
                <div className={styles.cardLink}>{content}</div>
              </li>
            );
          }

          return (
            <li key={card.title}>
              {content}
            </li>
          );
        })}
      </ul>
      {cta ? (
        <a className={styles.cta} href={cta.href}>
          {cta.label}
        </a>
      ) : null}
    </div>
  );
}
