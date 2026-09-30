import type { FaqProps } from "@/components/products/faq/faq";
import type { ContactPanelProps } from "@/components/shared/content/contact-panel";
import type { LogoMarqueeProps } from "@/components/shared/content/logo-marquee";
import type { HubSpotFormConfig } from "@/components/shared/forms/hubspot-form";
import type { AlternatingFeatureListProps } from "@/components/solutions/alternating-feature-list";
import type { BenefitIconGridProps } from "@/components/solutions/benefit-icon-grid";

import type { ScenarioListProps } from "@/components/solutions/scenario-list";
import type { SolutionHeroProps } from "@/components/solutions/solution-hero";
import type { StatisticsGridProps } from "@/components/solutions/statistics-grid";
import type { TestimonialSpotlightProps } from "@/components/solutions/testimonial-spotlight";
import type { VisitorExperienceGridProps } from "@/components/solutions/visitor-experience-grid";
import type { PlatformFeaturesGridProps } from "@/components/solutions/platform-features-grid";
import type { ProofPointGridProps } from "@/components/solutions/proof-point-grid";
import type { ProductGridProps } from "@/components/shared/content/product-grid";

import type { visitorManagementContent } from "./content";

export function createVisitorManagementHeroProps(content: typeof visitorManagementContent): SolutionHeroProps {
  return { hero: content.hero };
}

export function createClientLogoProps(content: typeof visitorManagementContent): LogoMarqueeProps {
  return { logos: content.clients.logos, mode: "scroll" };
}

export function createStatisticsProps(content: typeof visitorManagementContent): StatisticsGridProps {
  return content.statistics;
}

export function createHowItWorksProps(content: typeof visitorManagementContent): AlternatingFeatureListProps {
  return content.howItWorks;
}

export function createWhyVisitorManagementProps(content: typeof visitorManagementContent): BenefitIconGridProps {
  return { ...content.whyVisitorManagement, headingId: "why-visitor-management-heading" };
}

export function createClientReviewProps(content: typeof visitorManagementContent): TestimonialSpotlightProps {
  return content.clientReview;
}

export function createVisitorExperienceProps(content: typeof visitorManagementContent): VisitorExperienceGridProps {
  return { ...content.visitorExperiences, headingId: "visitor-experiences-heading" };
}

export function createScenarioProps(content: typeof visitorManagementContent): ScenarioListProps {
  return { ...content.scenarios, headingId: "scenarios-heading" };
}

export function createContactPanelProps(content: typeof visitorManagementContent): ContactPanelProps {
  return { paragraphs: content.contact.paragraphs, profile: content.contact.profile };
}

export function createContactFormProps(content: typeof visitorManagementContent): HubSpotFormConfig {
  return content.contact.form;
}

export function createFaqProps(content: typeof visitorManagementContent): FaqProps {
  return { items: content.faq.items };
}

export function createPlatformFeaturesProps(content: typeof visitorManagementContent): PlatformFeaturesGridProps {
  return { ...content.platformFeatures, headingId: "platform-features-heading" };
}

export function createWhyFriendlywayProps(content: typeof visitorManagementContent): ProofPointGridProps {
  return content.whyFriendlyway;
}

export function createVisitorHardwareProps(content: typeof visitorManagementContent): ProductGridProps {
  return { cards: content.hardware.cards };
}