import { ContentSection } from "@/components/shared/layout/content-section";

import { CloudPlatformPanels, type CloudPlatformSlide } from "./cloud-platform-panels";
import styles from "./home-cloud-platform.module.css";

export interface HomeCloudPlatformProps {
  readonly heading: { readonly text: string; readonly id: string };
  readonly description: string;
  readonly slides: readonly CloudPlatformSlide[];
  readonly cta: { readonly label: string; readonly href: string };
}

export function HomeCloudPlatform({ heading, description, slides, cta }: HomeCloudPlatformProps) {
  return (
    <ContentSection labelledBy={heading.id}>
      <div className={styles.root}>
        <div className={styles.intro}>
          <h2 className={styles.heading} id={heading.id}>{heading.text}</h2>
          <p>{description}</p>
        </div>
        <a className={styles.cta} href={cta.href}>{cta.label}</a>
        <CloudPlatformPanels headingId={heading.id} slides={slides} />
      </div>
    </ContentSection>
  );
}