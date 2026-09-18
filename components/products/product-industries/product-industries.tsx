import Image from "next/image";

import { SectionHeading } from "@/components/shared/typography/section-heading";
import type { ProductPageContent } from "@/components/products/types";

import styles from "./product-industries.module.css";

export function ProductIndustries({ industries }: { readonly industries: ProductPageContent["industries"] }) {
  return (
    <div className={styles.root}>
      <SectionHeading as="h2" id="industries-heading">{industries.heading}</SectionHeading>
      <p>{industries.description}</p>
      <ul className={styles.list}>{industries.items.map((industry) => <li key={industry.title}><Image src={industry.icon.src} width={industry.icon.width} height={industry.icon.height} alt={industry.icon.alt} /><span>{industry.title}</span></li>)}</ul>
    </div>
  );
}