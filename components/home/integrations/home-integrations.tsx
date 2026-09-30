import { ContentSection } from "@/components/shared/layout/content-section";

import styles from "./home-integrations.module.css";

export interface HomeIntegrationsProps {
  readonly heading: { readonly text: string; readonly id: string };
  readonly logos: readonly {
    readonly label: string;
    readonly image: { readonly src: string; readonly width: number; readonly height: number; readonly alt: string };
  }[];
}

export function HomeIntegrations({ heading, logos }: HomeIntegrationsProps) {
  return (
    <ContentSection labelledBy={heading.id}>
      <div className={styles.root}>
        <h2 className={styles.heading} id={heading.id}>{heading.text}</h2>
        <ul className={styles.grid}>
          {logos.map(({ label, image }) => (
            <li className={styles.item} key={label}>
              <div className={styles.picture}>
                <img alt={image.alt} height={image.height} loading="lazy" src={image.src} width={image.width} />
              </div>
              <span className={styles.label}>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </ContentSection>
  );
}