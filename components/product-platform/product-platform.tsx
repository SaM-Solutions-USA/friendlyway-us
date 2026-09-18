import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import type { ProductContent } from "@/content/products";

import styles from "./product-platform.module.css";

export function ProductPlatform({ platform }: { readonly platform: ProductContent["platform"] }) {
  return (
    <div className={styles.root}>
      <SectionHeading as="h2">{platform.heading}</SectionHeading>
      <p>{platform.description}</p>
      <Image className={styles.image} src={platform.media.src} width={platform.media.width} height={platform.media.height} alt={platform.media.alt} />
      <div className={styles.features}>{platform.features.map((feature) => <div key={feature.title}><h3>{feature.title}</h3><p>{feature.description}</p></div>)}</div>
    </div>
  );
}