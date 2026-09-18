import Image from "next/image";

import { ProductAction } from "@/components/product-action/product-action";
import type { ProductContent } from "@/content/products";

import styles from "./product-hero.module.css";

export function ProductHero({ hero }: { readonly hero: ProductContent["hero"] }) {
  return (
    <div className={styles.root}>
      <div>
        <h1 className={styles.title}>{hero.title}</h1>
        <p className={styles.description}>{hero.description}</p>
        <div className={styles.actions}>{hero.actions.map((action, index) => <ProductAction action={action} key={action.label} variant={index === 0 ? "primary" : "secondary"} />)}</div>
      </div>
      <Image className={styles.image} src={hero.media.src} width={hero.media.width} height={hero.media.height} alt={hero.media.alt} priority />
    </div>
  );
}