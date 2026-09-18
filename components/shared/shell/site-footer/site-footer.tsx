import type { FooterContent, FooterSocialLink, SiteLink } from "@/content/site";
import { ConsentSettingsButton } from "@/components/shared/forms/consent-settings";

import styles from "./site-footer.module.css";

export interface SiteFooterProps {
  readonly footer: FooterContent;
}

function FooterLink({ link }: { readonly link: SiteLink }) {
  return (
    <a
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noreferrer" : undefined}
    >
      {link.label}
    </a>
  );
}

function SocialIcon({ icon }: { readonly icon: FooterSocialLink["icon"] }) {
  if (icon === "facebook") {
    return <svg aria-hidden="true" viewBox="0 0 18 18"><path d="M18 .0005H0v18h9.621v-6.961H7.278V8.314h2.343V6.31c0-2.324 1.421-3.591 3.495-3.591.699-.002 1.397.034 2.092.105v2.43H13.78c-1.13 0-1.35.534-1.35 1.322V8.31h2.7l-.351 2.725h-2.365V18H18Z" /></svg>;
  }
  if (icon === "youtube") {
    return <svg aria-hidden="true" viewBox="0 0 20 16"><path d="M19 1s-3-1-9-1S1 1 1 1 0 4 0 8s1 7 1 7 3 1 9 1 9-1 9-1 1-3 1-7-1-7-1-7ZM8 11.464V4.536L14 8l-6 3.464Z" /></svg>;
  }
  return <svg aria-hidden="true" viewBox="0 0 18 18"><path d="M18 0H0v18h18V0ZM6 14H3.477V7H6v7ZM4.694 5.717c-.771 0-1.287-.514-1.287-1.2s.514-1.2 1.371-1.2c.771 0 1.286.514 1.286 1.2s-.514 1.2-1.37 1.2ZM15 14h-2.442v-3.826c0-1.058-.651-1.302-.895-1.302s-1.058.163-1.058 1.302V14H8.082V7h2.523v.977C10.93 7.407 11.581 7 12.802 7S15 7.977 15 10.174V14Z" /></svg>;
}

export function SiteFooter({ footer }: SiteFooterProps) {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <div className={styles.primaryRow}>
          <div className={styles.column}>
            <dl className={styles.addresses}>
              {footer.addresses.map((address) => (
                <div key={address.name}>
                  <dt>{address.name}{address.legalName ? <><br /><small>{address.legalName}</small></> : null}</dt>
                  <dd>{address.descriptionLines.map((line, index) => <span key={line}>{line}{index < address.descriptionLines.length - 1 ? <br /> : null}</span>)}</dd>
                </div>
              ))}
            </dl>
            <ul className={styles.socialList} aria-label="Social media">
              {footer.socialLinks.map((link) => <li key={link.href}><a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}><SocialIcon icon={link.icon} /></a></li>)}
            </ul>
          </div>

          <section className={styles.column} aria-labelledby="footer-contact">
            <h2 id="footer-contact">Contact</h2>
            <ul className={styles.contacts}>
              {footer.contactMethods.map((contact) => <li key={contact.href}><span>{contact.name}{contact.hours ? <><br />{contact.hours}</> : null}</span><a href={contact.href}>{contact.value}</a></li>)}
            </ul>
          </section>
          {footer.columns.map((column) => (
            <nav className={styles.column} key={column.title} aria-labelledby={`footer-${column.title.toLowerCase()}`}>
              <h2 id={`footer-${column.title.toLowerCase()}`}>{column.title}</h2>
              <ul className={styles.menuList}>
                {column.links.map((link) => <li key={link.href}><FooterLink link={link} /></li>)}
              </ul>
            </nav>
          ))}
        </div>

        <div className={styles.secondaryRow}>
          <div className={styles.copyright}>{footer.copyright}</div>
          <nav className={styles.legal} aria-label="Legal">
            <ul className={styles.legalList}>
              {footer.legalLinks.map((link) => <li key={link.href}><FooterLink link={link} /></li>)}
              <li><ConsentSettingsButton /></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}