import Image from "next/image";

import styles from "./testimonial-spotlight.module.css";

export interface TestimonialSpotlightMedia {
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
}

export interface TestimonialSpotlightProps {
  readonly logo: TestimonialSpotlightMedia;
  readonly quote: string;
  readonly author: {
    readonly name: string;
    readonly role: string;
    readonly portrait: TestimonialSpotlightMedia;
  };
  readonly metrics: readonly {
    readonly value: string;
    readonly label: string;
  }[];
  readonly details: readonly {
    readonly heading: string;
    readonly items: readonly string[];
  }[];
  readonly action?: {
    readonly label: string;
    readonly href: string;
  };
}

export function TestimonialSpotlight({ logo, quote, author, metrics, details, action }: TestimonialSpotlightProps) {
  return (
    <section aria-label={`Testimonial from ${author.name}`} className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.main}>
          <Image className={styles.logo} src={logo.src} width={logo.width} height={logo.height} alt={logo.alt} />
          <blockquote className={styles.quote}><p>{quote}</p></blockquote>
          <div className={styles.author}>
            <Image className={styles.portrait} src={author.portrait.src} width={author.portrait.width} height={author.portrait.height} alt={author.portrait.alt} />
            <div className={styles.authorCopy}>
              <p className={styles.authorName}>{author.name}</p>
              <p className={styles.authorRole}>{author.role}</p>
            </div>
          </div>
        </div>
        <aside className={styles.aside}>
          <dl className={styles.metrics}>
            {metrics.map((metric) => (
              <div className={styles.metric} key={metric.label}>
                <dt className={styles.metricValue}>{metric.value}</dt>
                <dd className={styles.metricLabel}>{metric.label}</dd>
              </div>
            ))}
          </dl>
          <div className={styles.details}>
            {details.map((detail) => (
              <div className={styles.detail} key={detail.heading}>
                <h2 className={styles.detailHeading}>{detail.heading}</h2>
                <ul className={styles.detailList}>
                  {detail.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          {action ? <a className={styles.action} href={action.href}>{action.label}</a> : null}
        </aside>
      </div>
    </section>
  );
}