import styles from "./call-to-action-link.module.css";

export interface CallToActionLinkProps {
  readonly href: string;
  readonly label: string;
  readonly variant?: "filled" | "outline";
}

export function CallToActionLink({ href, label, variant = "filled" }: CallToActionLinkProps) {
  const className = variant === "outline" ? `${styles.action} ${styles.outline}` : styles.action;
  return <a className={className} href={href}>{label}</a>;
}
