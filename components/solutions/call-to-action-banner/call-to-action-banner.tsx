import styles from "./call-to-action-banner.module.css";

export interface CallToActionBannerProps {
  readonly heading: string;
  readonly description: string;
  readonly action: {
    readonly label: string;
    readonly href: string;
  };
  readonly backgroundImage?: string;
}

export function CallToActionBanner({ heading, description, action, backgroundImage }: CallToActionBannerProps) {
  return (
    <section
      aria-labelledby="call-to-action-heading"
      className={styles.root}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      <div className={styles.layout}>
        <div className={styles.copy}>
          <h2 className={styles.heading} id="call-to-action-heading">{heading}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.actionContainer}>
          <a className={styles.action} href={action.href}>{action.label}</a>
        </div>
      </div>
    </section>
  );
}