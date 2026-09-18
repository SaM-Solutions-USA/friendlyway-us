import Image from "next/image";

import type { ProductPageContent } from "@/components/products/types";

import styles from "./product-features.module.css";

export function ProductFeatures({ features }: { readonly features: ProductPageContent["features"] }) {
  return (
    <section className={styles.band}>
      <div className={styles.container}>
        {features.map((feature, index) => (
          <div className={styles.feature} data-reversed={index % 2 === 1} key={feature.title}>
            <Image className={styles.image} src={feature.media.src} width={feature.media.width} height={feature.media.height} alt={feature.media.alt} />
            <div className={styles.copy}><h2>{feature.title}</h2><p>{feature.description}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}