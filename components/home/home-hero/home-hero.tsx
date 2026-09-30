import { HeroVideo } from "./hero-video";
import styles from "./home-hero.module.css";

export interface HomeHeroActionProps {
  readonly label: string;
  readonly href: string;
  readonly variant: "primary" | "secondary";
}

export interface HomeHeroProps {
  readonly hero: {
    readonly heading: string;
    readonly description: string;
    readonly media: {
      readonly src: string;
      readonly width: number;
      readonly height: number;
      readonly alt: string;
    };
    readonly actions: readonly HomeHeroActionProps[];
  };
}

function actionClass(variant: HomeHeroActionProps["variant"]) {
  return variant === "primary" ? styles.actionPrimary : styles.actionSecondary;
}

export function HomeHero({ hero }: HomeHeroProps) {
  return (
    <section className={styles.root} data-block="home-hero">
      <div className={styles.media}>
        <HeroVideo
          alt={hero.media.alt}
          className={styles.video}
          height={hero.media.height}
          src={hero.media.src}
          width={hero.media.width}
        />
      </div>
      <div className={styles.inner}>
        <h1 className={styles.heading}>{hero.heading}</h1>
        <p className={styles.description}>{hero.description}</p>
        <div className={styles.actions}>
          {hero.actions.map((action) => (
            <a
              className={`${styles.action} ${actionClass(action.variant)}`}
              href={action.href}
              key={action.label}
            >
              <span>{action.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
