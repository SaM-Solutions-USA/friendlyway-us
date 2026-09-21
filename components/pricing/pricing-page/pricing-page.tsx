import { FeatureComparison, type FeatureComparisonProps } from "@/components/pricing/feature-comparison";
import { HardwareLicenseTabs, type HardwareLicenseTabsProps } from "@/components/pricing/hardware-license-tabs";
import { PricingPlanGrid, type PricingPlanGridProps } from "@/components/pricing/pricing-plan-grid";
import { QuotePanel, type QuotePanelProps } from "@/components/pricing/quote-panel";
import { StructuredData } from "@/components/shared/content/structured-data";
import { ContentSection } from "@/components/shared/layout/content-section";

export interface PricingPageProps extends PricingPlanGridProps, QuotePanelProps {
  readonly comparison: FeatureComparisonProps["categories"];
  readonly hardware: { readonly heading: string; readonly tabs: HardwareLicenseTabsProps["tabs"]; readonly note: string };
  readonly structuredData: unknown;
}

export function PricingPage({ introduction, plans, billingNote, comparison, hardware, quote, structuredData }: PricingPageProps) {
  return <article>
    <ContentSection as="div" paddingBlock="md" tone="muted"><PricingPlanGrid billingNote={billingNote} introduction={introduction} plans={plans} /></ContentSection>
    <ContentSection gap="md" labelledBy="feature-comparison" paddingBlock="lg" tone="muted"><FeatureComparison categories={comparison} heading="Full list of features by license type" /></ContentSection>
    <ContentSection labelledBy="hardware-comparison" paddingBlock="lg" tone="muted"><HardwareLicenseTabs heading={hardware.heading} note={hardware.note} tabs={hardware.tabs} /></ContentSection>
    <ContentSection id="block-formback_view" labelledBy="quote-heading" paddingBlock="lg" tone="muted"><QuotePanel quote={quote} /></ContentSection>
    <StructuredData data={structuredData} />
  </article>;
}
