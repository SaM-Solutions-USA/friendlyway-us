import type { Metadata } from "next";

import { PricingPage } from "@/components/pricing/pricing-page";
import { pricingContent } from "./content";
import { createPricingPageProps } from "./presenter";
import { getPricingMetadata } from "./seo";

export const metadata: Metadata = getPricingMetadata(pricingContent.seo);

export default function PricingRoute() {
  return <PricingPage {...createPricingPageProps(pricingContent)} />;
}