import type { Metadata } from "next";

import { ProductPage } from "@/components/products/product-page";
import { counter22Content } from "./content";
import { createProductPageProps } from "./presenter";
import { getProductMetadata } from "./seo";

export const metadata: Metadata = getProductMetadata(counter22Content.seo);

export default function Counter22Route() {
  return <ProductPage {...createProductPageProps(counter22Content)} />;
}