import type { Metadata } from "next";

import { AlternatingFeatureList } from "@/components/solutions/alternating-feature-list";
import { BenefitIconGrid } from "@/components/solutions/benefit-icon-grid";
import { CallToActionBanner } from "@/components/solutions/call-to-action-banner";
import { ProcessTimeline } from "@/components/solutions/process-timeline";
import { ProofPointGrid } from "@/components/solutions/proof-point-grid";
import { SolutionCardGrid } from "@/components/solutions/solution-card-grid";
import { SolutionHero } from "@/components/solutions/solution-hero";
import { TestimonialSpotlight } from "@/components/solutions/testimonial-spotlight";
import { UseCaseGrid } from "@/components/solutions/use-case-grid";
import { ContactPanel } from "@/components/shared/content/contact-panel";
import { LogoMarquee } from "@/components/shared/content/logo-marquee";
import { StructuredData } from "@/components/shared/content/structured-data";
import { HubSpotForm } from "@/components/shared/forms/hubspot-form";
import { ContentSection } from "@/components/shared/layout/content-section";
import { TwoColumnSplit } from "@/components/shared/layout/two-column-split";
import { SectionHeading } from "@/components/shared/typography/section-heading";
import { Faq } from "@/components/products/faq/faq";
import { emergencyMusteringContent } from "./content";
import { createCallToActionProps, createClientLogoProps, createContactFormProps, createContactPanelProps, createEmergencyMusteringHeroProps, createFaqProps, createIntegrationProps, createProcessTimelineProps, createRealWorldCapabilityProps, createSafetyBenefitProps, createSolutionFeatureProps, createSupportingSolutionProps, createTestimonialProps, createUseCaseProps, createWhyFriendlywayProps } from "./presenter";
import { getEmergencyMusteringMetadata, getEmergencyMusteringStructuredData } from "./seo";

export const metadata: Metadata = getEmergencyMusteringMetadata(emergencyMusteringContent.seo);

export default function EmergencyMusteringRoute() {
  return (
    <article>
      <ContentSection as="div" paddingBlock="lg">
        <SolutionHero {...createEmergencyMusteringHeroProps(emergencyMusteringContent)} />
      </ContentSection>
      <ContentSection as="div" paddingBlock="sm">
        <LogoMarquee {...createClientLogoProps(emergencyMusteringContent)} />
      </ContentSection>
      <ContentSection labelledBy="safety-benefits-heading" paddingBlock="lg">
        <BenefitIconGrid {...createSafetyBenefitProps(emergencyMusteringContent)} />
      </ContentSection>
      <AlternatingFeatureList {...createSolutionFeatureProps(emergencyMusteringContent)} />
      <ContentSection paddingBlockEnd="md" paddingBlockStart="lg">
        <SolutionCardGrid {...createSupportingSolutionProps(emergencyMusteringContent)} />
      </ContentSection>
      <ContentSection as="div" paddingBlock="md">
        <CallToActionBanner {...createCallToActionProps(emergencyMusteringContent)} />
      </ContentSection>
      <ContentSection paddingBlock="lg" tone="sand">
        <ProcessTimeline {...createProcessTimelineProps(emergencyMusteringContent)} />
      </ContentSection>
      <ContentSection paddingBlock="lg">
        <UseCaseGrid {...createUseCaseProps(emergencyMusteringContent)} />
      </ContentSection>
      <ContentSection as="div" paddingBlock="lg">
        <TestimonialSpotlight {...createTestimonialProps(emergencyMusteringContent)} />
      </ContentSection>
      <ContentSection paddingBlock="lg">
        <UseCaseGrid {...createRealWorldCapabilityProps(emergencyMusteringContent)} />
      </ContentSection>
      <ContentSection paddingBlock="lg" tone="sand">
        <SolutionCardGrid {...createIntegrationProps(emergencyMusteringContent)} />
      </ContentSection>
      <ContentSection paddingBlock="lg">
        <ProofPointGrid {...createWhyFriendlywayProps(emergencyMusteringContent)} />
      </ContentSection>
      <ContentSection
        gap="md"
        id="block-feedback_details-form"
        labelledBy="contact-us-heading"
        paddingBlock="lg"
        tone="muted"
      >
        <SectionHeading as="h2" id="contact-us-heading">{emergencyMusteringContent.contact.heading}</SectionHeading>
        <TwoColumnSplit>
          <ContactPanel {...createContactPanelProps(emergencyMusteringContent)} />
          <HubSpotForm config={createContactFormProps(emergencyMusteringContent)} />
        </TwoColumnSplit>
      </ContentSection>
      <ContentSection gap="md" labelledBy="faq-heading" paddingBlock="lg" tone="sand">
        <div>
          <SectionHeading as="h2" id="faq-heading">{emergencyMusteringContent.faq.heading}</SectionHeading>
          <p>{emergencyMusteringContent.faq.description}</p>
        </div>
        <Faq {...createFaqProps(emergencyMusteringContent)} initiallyOpenIndex={0} />
      </ContentSection>
      <StructuredData data={getEmergencyMusteringStructuredData(emergencyMusteringContent)} />
    </article>
  );
}