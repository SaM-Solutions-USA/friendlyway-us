import Image from "next/image";

import { SectionHeading } from "@/components/shared/typography/section-heading";
import type { ProductPageContent } from "@/components/products/types";

import styles from "./product-platform.module.css";

export function ProductPlatform({ platform }: { readonly platform: ProductPageContent["platform"] }) {
  return (
    <div className={styles.root}>
      <SectionHeading as="h2">{platform.heading}</SectionHeading>
      <p>{platform.description}</p>
      <Image className={styles.image} src={platform.media.src} width={platform.media.width} height={platform.media.height} alt={platform.media.alt} />
      <div className={styles.features}>{platform.features.map((feature) => <div key={feature.title}><h3>{feature.title}</h3><p>{feature.description}</p></div>)}</div>
    </div>
  );
}