import type { BenefitIconGridProps } from "@/components/solutions/benefit-icon-grid";
import type { AlternatingFeatureListProps } from "@/components/solutions/alternating-feature-list";
import type { CallToActionBannerProps } from "@/components/solutions/call-to-action-banner";
import type { ProcessTimelineProps } from "@/components/solutions/process-timeline";
import type { ProofPointGridProps } from "@/components/solutions/proof-point-grid";
import type { SolutionCardGridProps } from "@/components/solutions/solution-card-grid";
import type { SolutionHeroProps } from "@/components/solutions/solution-hero";
import type { TestimonialSpotlightProps } from "@/components/solutions/testimonial-spotlight";
import type { UseCaseGridProps } from "@/components/solutions/use-case-grid";
import type { ContactPanelProps } from "@/components/shared/content/contact-panel";
import type { HubSpotFormConfig } from "@/components/shared/forms/hubspot-form";
import type { FaqProps } from "@/components/products/faq/faq";
import type { LogoMarqueeProps } from "@/components/shared/content/logo-marquee";

import type { EmergencyMusteringContent } from "./types";

export function createEmergencyMusteringHeroProps(content: EmergencyMusteringContent): SolutionHeroProps {
  return { hero: content.hero };
}

export function createClientLogoProps(content: EmergencyMusteringContent): LogoMarqueeProps {
  return { logos: content.clientLogos, mode: "scroll" };
}

export function createSafetyBenefitProps(content: EmergencyMusteringContent): BenefitIconGridProps {
  return content.safetyBenefits;
}

export function createSolutionFeatureProps(content: EmergencyMusteringContent): AlternatingFeatureListProps {
  return content.solutionFeatures;
}

export function createSupportingSolutionProps(content: EmergencyMusteringContent): SolutionCardGridProps {
  return content.supportingSolutions;
}

export function createCallToActionProps(content: EmergencyMusteringContent): CallToActionBannerProps {
  return content.callToAction;
}

export function createProcessTimelineProps(content: EmergencyMusteringContent): ProcessTimelineProps {
  return content.timeline;
}

export function createUseCaseProps(content: EmergencyMusteringContent): UseCaseGridProps {
  return content.useCases;
}

export function createTestimonialProps(content: EmergencyMusteringContent): TestimonialSpotlightProps {
  return content.testimonial;
}

export function createRealWorldCapabilityProps(content: EmergencyMusteringContent): UseCaseGridProps {
  return content.realWorldCapabilities;
}

export function createIntegrationProps(content: EmergencyMusteringContent): SolutionCardGridProps {
  return content.integrations;
}

export function createWhyFriendlywayProps(content: EmergencyMusteringContent): ProofPointGridProps {
  return content.whyFriendlyway;
}

export function createContactPanelProps(content: EmergencyMusteringContent): ContactPanelProps {
  return {
    paragraphs: content.contact.paragraphs,
    profile: content.contact.profile,
  };
}

export function createContactFormProps(content: EmergencyMusteringContent): HubSpotFormConfig {
  return content.contact.form;
}

export function createFaqProps(content: EmergencyMusteringContent): FaqProps {
  return { items: content.faq.items };
}