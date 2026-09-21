import { HubSpotForm } from "@/components/shared/forms/hubspot-form";

import styles from "./quote-panel.module.css";

export interface QuotePanelProps {
  readonly quote: { readonly headingPrefix: string; readonly headingAccent: string; readonly headingSuffix: string; readonly description: string; readonly form: Parameters<typeof HubSpotForm>[0]["config"] };
}

export function QuotePanel({ quote }: QuotePanelProps) {
  return <div className={styles.root}>
    <header className={styles.header}>
      <h2 id="quote-heading">{quote.headingPrefix}<span>{quote.headingAccent}</span>{quote.headingSuffix}</h2>
      <p>{quote.description}</p>
    </header>
    <div className={styles.formArea}><HubSpotForm config={quote.form} /></div>
  </div>;
}