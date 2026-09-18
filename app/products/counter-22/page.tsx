import type { Metadata } from "next";

import { ProductPage } from "@/components/product-page";
import { counter22Content } from "@/content/products";
import { getProductMetadata } from "@/lib/product-seo";

export const metadata: Metadata = getProductMetadata(counter22Content.seo);

export default function Counter22Route() {
  return <ProductPage content={counter22Content} />;
}