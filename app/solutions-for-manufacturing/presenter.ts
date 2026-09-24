import type { ContactPanelProps } from "@/components/shared/content/contact-panel";
import type { HubSpotFormConfig } from "@/components/shared/forms/hubspot-form";
import type { ImageFeatureProps } from "@/components/shared/content/image-feature";
import type { ImageGalleryProps } from "@/components/shared/content/image-gallery";
import type { LogoMarqueeProps } from "@/components/shared/content/logo-marquee";
import type { CallToActionBannerProps } from "@/components/solutions/call-to-action-banner";
import type { BenefitIconGridProps } from "@/components/solutions/benefit-icon-grid";
import type { CustomerStoryGridProps } from "@/components/solutions/customer-story-grid";
import type { ManufacturingChallengesProps } from "@/components/solutions/manufacturing-challenges";
import type { ProofPointGridProps } from "@/components/solutions/proof-point-grid";
import type { ManufacturingSolutionGridProps } from "@/components/solutions/manufacturing-solution-grid";
import type { SolutionHeroProps } from "@/components/solutions/solution-hero";
import type { StatisticsGridProps } from "@/components/solutions/statistics-grid";
import type { TestimonialCarouselProps } from "@/components/solutions/testimonial-spotlight";
import type { TransformationJourneyProps } from "@/components/solutions/transformation-journey";
import type { FaqProps } from "@/components/products/faq/faq";

import type { ManufacturingContent } from "./types";

export function createManufacturingHeroProps(content: ManufacturingContent): SolutionHeroProps {
  return { hero: content.hero };
}

export function createClientLogoProps(content: ManufacturingContent): LogoMarqueeProps {
  return { logos: content.clientLogos, mode: "scroll" };
}

export function createManufacturingSolutionGridProps(content: ManufacturingContent): ManufacturingSolutionGridProps {
  return content.solutions;
}

export function createRealLifeGalleryProps(content: ManufacturingContent): ImageGalleryProps {
  return content.realLifeGallery;
}

export function createHardwareOptionsProps(content: ManufacturingContent): ImageFeatureProps {
  return { ...content.hardwareOptions, preserveMediaWidth: true };
}

export function createDemoProps(content: ManufacturingContent): CallToActionBannerProps {
  return content.demo;
}

export function createChallengesProps(content: ManufacturingContent): ManufacturingChallengesProps {
  return content.challenges;
}

export function createTestimonialCarouselProps(content: ManufacturingContent): TestimonialCarouselProps {
  return content.testimonials;
}

export function createTransformationJourneyProps(content: ManufacturingContent): TransformationJourneyProps {
  return content.transformationJourney;
}

export function createWhyFriendlywayProps(content: ManufacturingContent): ProofPointGridProps {
  return content.whyFriendlyway;
}

export function createStatisticsProps(content: ManufacturingContent): StatisticsGridProps {
  return content.statistics;
}

export function createCustomerStoriesProps(content: ManufacturingContent): CustomerStoryGridProps {
  return content.customerStories;
}

export function createIndustriesProps(content: ManufacturingContent): BenefitIconGridProps {
  return content.industries;
}

export function createFaqProps(content: ManufacturingContent): FaqProps {
  return { items: content.faq.items };
}

export function createContactPanelProps(content: ManufacturingContent): ContactPanelProps {
  return { paragraphs: content.contact.paragraphs, profile: content.contact.profile };
}

export function createContactFormProps(content: ManufacturingContent): HubSpotFormConfig {
  return content.contact.form;
}
