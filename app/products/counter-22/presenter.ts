import type { ProductPageProps } from "@/components/products/product-page";

import { getProductStructuredData } from "./seo";
import type { ProductContent } from "../types";

export function createProductPageProps(content: ProductContent): ProductPageProps {
  return {
    content,
    structuredData: getProductStructuredData(content),
  };
}
