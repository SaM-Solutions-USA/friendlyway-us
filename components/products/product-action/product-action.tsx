import type { ProductCta } from "@/components/products/types";

import styles from "./product-action.module.css";

export type ProductActionVariant = "primary" | "secondary";

export interface ProductActionProps {
  readonly action: ProductCta;
  readonly fullWidth?: boolean;
  readonly variant: ProductActionVariant;
}

export function ProductAction({ action, fullWidth = false, variant }: ProductActionProps) {
  return <a className={`${styles[variant]} ${fullWidth ? styles.fullWidth : ""}`} href={action.href}>{action.label}</a>;
}