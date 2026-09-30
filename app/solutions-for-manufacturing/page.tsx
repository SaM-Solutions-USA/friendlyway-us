import type { Metadata } from "next";

import { ContactPanel } from "@/components/shared/content/contact-panel";
import { ImageFeature } from "@/components/shared/content/image-feature";
import { ImageGallery } from "@/components/shared/content/image-gallery";
import { LogoMarquee } from "@/components/shared/content/logo-marquee";
import { StructuredData } from "@/components/shared/content/structured-data";
import { HubSpotForm } from "@/components/shared/forms/hubspot-form";
import { ContentSection } from "@/components/shared/layout/content-section";
import { TwoColumnSplit } from "@/components/shared/layout/two-column-split";
import { SectionHeading } from "@/components/shared/typography/section-heading";
import { CallToActionBanner } from "@/components/solutions/call-to-action-banner";
import { CallToActionLink } from "@/components/solutions/call-to-action-banner";
import { RichContent } from "@/components/shared/content/rich-content/rich-content";
import { BenefitIconGrid } from "@/components/solutions/benefit-icon-grid";
import { CustomerStoryGrid } from "@/components/solutions/customer-story-grid";
import { Faq } from "@/components/products/faq/faq";
import { ManufacturingChallenges } from "@/components/solutions/manufacturing-challenges";
import { ManufacturingSolutionGrid } from "@/components/solutions/manufacturing-solution-grid";
import { ProofPointGrid } from "@/components/solutions/proof-point-grid";
import { SolutionHero } from "@/components/solutions/solution-hero";
import { StatisticsGrid } from "@/components/solutions/statistics-grid";
import { TestimonialCarousel } from "@/components/solutions/testimonial-spotlight";
import { TransformationJourney } from "@/components/solutions/transformation-journey";

import { manufacturingContent } from "./content";
import { createChallengesProps, createClientLogoProps, createContactFormProps, createContactPanelProps, createCustomerStoriesProps, createFaqProps, createHardwareOptionsProps, createIndustriesProps, createManufacturingHeroProps, createManufacturingSolutionGridProps, createRealLifeGalleryProps, createStatisticsProps, createTestimonialCarouselProps, createTransformationJourneyProps, createWhyFriendlywayProps } from "./presenter";
import { getManufacturingMetadata, getManufacturingStructuredData } from "./seo";

export const metadata: Metadata = getManufacturingMetadata(manufacturingContent.seo);

export default function ManufacturingRoute() {
  return (
    <article>
      <ContentSection as="div" paddingBlock="lg">
        <SolutionHero {...createManufacturingHeroProps(manufacturingContent)} />
      </ContentSection>
      <ContentSection gap="md" labelledBy="featured-clients-heading" paddingBlock="sm">
        <SectionHeading as="h2" id="featured-clients-heading">Featured Clients</SectionHeading>
        <LogoMarquee {...createClientLogoProps(manufacturingContent)} />
      </ContentSection>
      <ContentSection paddingBlock="lg" tone="sand">
        <ManufacturingSolutionGrid {...createManufacturingSolutionGridProps(manufacturingContent)} />
      </ContentSection>
      <ContentSection paddingBlock="lg">
        <ImageGallery {...createRealLifeGalleryProps(manufacturingContent)} />
      </ContentSection>
      <ContentSection paddingBlock="lg">
        <ImageFeature {...createHardwareOptionsProps(manufacturingContent)} />
      </ContentSection>
      <ContentSection as="div" paddingBlock="md">
        <CallToActionBanner
          labelledBy="call-to-action-heading"
          text={
            <>
              <h2 id="call-to-action-heading">{manufacturingContent.demo.heading}</h2>
              <RichContent blocks={[{ type: "paragraph", content: [manufacturingContent.demo.description] }]} variant="plain" />
            </>
          }
          cta={
            <CallToActionLink href={manufacturingContent.demo.action.href} label={manufacturingContent.demo.action.label} />
          }
        />
      </ContentSection>
      <ContentSection labelledBy="manufacturing-challenges-heading" paddingBlock="lg" tone="sand">
        <ManufacturingChallenges {...createChallengesProps(manufacturingContent)} />
      </ContentSection>
      <ContentSection labelledBy="testimonial-carousel-heading">
        <TestimonialCarousel {...createTestimonialCarouselProps(manufacturingContent)} />
      </ContentSection>
      <ContentSection labelledBy="transformation-journey-heading" paddingBlock="lg">
        <TransformationJourney {...createTransformationJourneyProps(manufacturingContent)} />
      </ContentSection>
      <ContentSection paddingBlock="lg" tone="dark">
        <ProofPointGrid {...createWhyFriendlywayProps(manufacturingContent)} />
      </ContentSection>
      <ContentSection labelledBy="statistics-grid-heading" paddingBlock="lg">
        <StatisticsGrid {...createStatisticsProps(manufacturingContent)} />
      </ContentSection>
      <ContentSection labelledBy="customer-story-grid-heading" paddingBlock="lg">
        <CustomerStoryGrid {...createCustomerStoriesProps(manufacturingContent)} />
      </ContentSection>
      <ContentSection labelledBy="industries-heading" paddingBlock="lg">
        <BenefitIconGrid {...createIndustriesProps(manufacturingContent)} />
      </ContentSection>
      <ContentSection
        gap="md"
        id="block-feedback_details-form"
        labelledBy="contact-us-heading"
        paddingBlock="lg"
        tone="muted"
      >
        <SectionHeading as="h2" id="contact-us-heading">{manufacturingContent.contact.heading}</SectionHeading>
        <TwoColumnSplit>
          <ContactPanel {...createContactPanelProps(manufacturingContent)} />
          <HubSpotForm config={createContactFormProps(manufacturingContent)} />
        </TwoColumnSplit>
      </ContentSection>
      <ContentSection gap="md" labelledBy="faq-heading" paddingBlock="lg" tone="sand">
        <SectionHeading as="h2" id="faq-heading">{manufacturingContent.faq.heading}</SectionHeading>
        <Faq {...createFaqProps(manufacturingContent)} initiallyOpenIndex={0} />
      </ContentSection>
      <StructuredData data={getManufacturingStructuredData(manufacturingContent)} />
    </article>
  );
}
