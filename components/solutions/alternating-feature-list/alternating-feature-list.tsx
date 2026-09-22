import Image from "next/image";

import styles from "./alternating-feature-list.module.css";

export interface AlternatingFeatureListItem {
  readonly title: string;
  readonly description: string;
  readonly media: {
    readonly src: string;
    readonly width: number;
    readonly height: number;
    readonly alt: string;
  };
}

export interface AlternatingFeatureListProps {
  readonly heading: string;
  readonly description: string;
  readonly items: readonly AlternatingFeatureListItem[];
}

export function AlternatingFeatureList({ heading, description, items }: AlternatingFeatureListProps) {
  return (
    <section aria-labelledby="solution-features-heading" className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 id="solution-features-heading">{heading}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.rows}>
          {items.map((item, index) => (
            <div className={styles.row} data-reversed={index % 2 === 1 || undefined} key={item.title}>
              <Image
                className={styles.image}
                src={item.media.src}
                width={item.media.width}
                height={item.media.height}
                alt={item.media.alt}
                sizes="(max-width: 991px) calc(100vw - 32px), (max-width: 1199px) calc(50vw - 36px), 548px"
              />
              <div className={styles.copy}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}