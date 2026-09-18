import { ProductAction } from "@/components/product-action/product-action";
import { SectionHeading } from "@/components/section-heading";
import type { ProductContent } from "@/content/products";

import styles from "./product-applications.module.css";

export function ProductApplications({ applications }: { readonly applications: ProductContent["applications"] }) {
  return (
    <div className={styles.root}>
      <div className={styles.intro}><SectionHeading as="h2">{applications.heading}</SectionHeading><p>{applications.description}</p></div>
      <ul className={styles.list}>{applications.items.map((item) => {
        const [title, description] = item.split(": ", 2);
        return <li key={item}><strong>{title}</strong>{description ? `: ${description}` : null}</li>;
      })}</ul>
      <div className={styles.action}><ProductAction action={applications.cta} variant="secondary" /></div>
    </div>
  );
}