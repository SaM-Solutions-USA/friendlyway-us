import type { PricingPageProps } from "@/components/pricing/pricing-page";

import { getPricingStructuredData } from "./seo";
import type { PricingContent } from "./types";

export function createPricingPageProps(content: PricingContent): PricingPageProps {
  return {
    introduction: content.introduction,
    plans: content.plans,
    billingNote: content.billingNote,
    comparison: content.comparison,
    hardware: content.hardware,
    quote: content.quote,
    structuredData: getPricingStructuredData(content),
  };
}