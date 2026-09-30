import { ContentSection } from "@/components/shared/layout/content-section";
import { HubSpotForm, type HubSpotFormConfig } from "@/components/shared/forms/hubspot-form";

import styles from "./live-demo.module.css";

export interface HomeLiveDemoProps {
  readonly id: string;
  readonly heading: string;
  readonly description: string;
  readonly media: {
    readonly src: string;
    readonly srcSet: string;
    readonly width: number;
    readonly height: number;
    readonly alt: string;
  };
  readonly form: HubSpotFormConfig;
}

export function HomeLiveDemo({ id, heading, description, media, form }: HomeLiveDemoProps) {
  return (
    <ContentSection gap="lg" id={id} paddingBlock="xl" tone="sand">
      <div className={styles.header}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.grid}>
        <div className={styles.mediaColumn}>
          <img
            alt={media.alt}
            height={media.height}
            loading="lazy"
            sizes="(max-width: 767px) 100vw, 480px"
            src={media.src}
            srcSet={media.srcSet}
            width={media.width}
          />
        </div>
        <div className={styles.formColumn}>
          <HubSpotForm config={form} />
        </div>
      </div>
    </ContentSection>
  );
}
