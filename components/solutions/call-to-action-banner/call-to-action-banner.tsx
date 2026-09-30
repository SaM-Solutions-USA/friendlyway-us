import type { ReactNode } from "react";

import styles from "./call-to-action-banner.module.css";

export interface CallToActionBannerProps {
  readonly text: ReactNode;
  readonly cta: ReactNode;
  readonly labelledBy?: string;
  readonly backgroundImage?: string;
}

export function CallToActionBanner(props: CallToActionBannerProps) {
  const { text, cta, labelledBy, backgroundImage } = props;
  return (
    <section
      aria-labelledby={labelledBy || undefined}
      className={styles.root}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      <div className={styles.layout}>
        <div className={`${styles.copy} ${styles.slotCopy}`}>
          {text}
        </div>
        <div className={styles.actionContainer}>
          {cta}
        </div>
      </div>
    </section>
  );
}