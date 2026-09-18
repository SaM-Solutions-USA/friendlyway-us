import { ProductAction } from "@/components/product-action/product-action";
import { ProductGallery } from "@/components/product-gallery/product-gallery";
import { SectionHeading } from "@/components/section-heading";
import type { ProductContent } from "@/content/products";

import styles from "./product-detail.module.css";

export function ProductDetail({ detail }: { readonly detail: ProductContent["productDetail"] }) {
  return (
    <div className={styles.root}>
      <ProductGallery media={detail.gallery} />
      <div className={styles.content}>
        <SectionHeading as="h2" id="product-detail-heading">{detail.name}</SectionHeading>
        <p className={styles.description}>{detail.description}</p>
        <div className={styles.action}><ProductAction action={detail.orderAction} fullWidth variant="primary" /></div>
        <div className={styles.specifications}>{detail.specifications.map((group) => <section key={group.heading}><h3>{group.heading}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></section>)}</div>
      </div>
    </div>
  );
}