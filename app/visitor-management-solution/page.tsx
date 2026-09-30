import type { Metadata } from "next";

import { Faq } from "@/components/products/faq/faq";
import { ContactPanel } from "@/components/shared/content/contact-panel";
import { LogoMarquee } from "@/components/shared/content/logo-marquee";
import { HubSpotForm } from "@/components/shared/forms/hubspot-form";
import { AlternatingFeatureList } from "@/components/solutions/alternating-feature-list";
import { BenefitIconGrid } from "@/components/solutions/benefit-icon-grid";
import { ScenarioList } from "@/components/solutions/scenario-list";
import { CallToActionBanner, CallToActionLink } from "@/components/solutions/call-to-action-banner";
import { RichContent } from "@/components/shared/content/rich-content/rich-content";
import { SolutionHero } from "@/components/solutions/solution-hero";
import { StatisticsGrid } from "@/components/solutions/statistics-grid";
import { TestimonialSpotlight } from "@/components/solutions/testimonial-spotlight";
import { VisitorExperienceGrid } from "@/components/solutions/visitor-experience-grid";
import { PlatformFeaturesGrid } from "@/components/solutions/platform-features-grid";
import { ProofPointGrid } from "@/components/solutions/proof-point-grid";
import { ProductGrid } from "@/components/shared/content/product-grid";
import { HomeIntegrations } from "@/components/home/integrations/home-integrations";
import { ContentSection } from "@/components/shared/layout/content-section";
import { TwoColumnSplit } from "@/components/shared/layout/two-column-split";
import { SectionHeading } from "@/components/shared/typography/section-heading";

import { visitorManagementContent } from "./content";
import hardwareStyles from "./visitor-hardware.module.css";
import styles from "./visitor-call-to-action.module.css";
import { homeContent } from "../content";
import { createClientLogoProps, createClientReviewProps, createContactFormProps, createContactPanelProps, createFaqProps, createHowItWorksProps, createPlatformFeaturesProps, createScenarioProps, createStatisticsProps, createVisitorExperienceProps, createVisitorHardwareProps, createVisitorManagementHeroProps, createWhyFriendlywayProps, createWhyVisitorManagementProps } from "./presenter";
import { createHomeIntegrationsProps } from "../presenter";
import { getVisitorManagementMetadata } from "./seo";

export const metadata: Metadata = getVisitorManagementMetadata(visitorManagementContent.seo);

export default function VisitorManagementRoute() {
  return (
    <article>
      <ContentSection as="div" paddingBlock="lg" tone={visitorManagementContent.hero.tone}>
        <SolutionHero {...createVisitorManagementHeroProps(visitorManagementContent)} />
      </ContentSection>
      <ContentSection gap="md" labelledBy="featured-clients-heading" paddingBlock="sm">
        <SectionHeading as="h2" id="featured-clients-heading">{visitorManagementContent.clients.heading}</SectionHeading>
        <LogoMarquee {...createClientLogoProps(visitorManagementContent)} />
      </ContentSection>
      <ContentSection labelledBy="statistics-grid-heading" paddingBlock="lg">
        <StatisticsGrid {...createStatisticsProps(visitorManagementContent)} />
      </ContentSection>
      <AlternatingFeatureList {...createHowItWorksProps(visitorManagementContent)} />
      <ContentSection labelledBy="why-visitor-management-heading" paddingBlock="lg">
        <BenefitIconGrid {...createWhyVisitorManagementProps(visitorManagementContent)} />
      </ContentSection>
      <ContentSection as="div" paddingBlock="lg">
        <TestimonialSpotlight {...createClientReviewProps(visitorManagementContent)} />
      </ContentSection>
      <ContentSection labelledBy="visitor-experiences-heading" paddingBlock="lg" paddingBlockEnd="none" tone="sand">
        <VisitorExperienceGrid {...createVisitorExperienceProps(visitorManagementContent)} />
      </ContentSection>
      <ContentSection labelledBy="scenarios-heading" paddingBlock="lg" paddingBlockStart="sm" tone="sand">
        <ScenarioList {...createScenarioProps(visitorManagementContent)} />
      </ContentSection>
      <HomeIntegrations {...createHomeIntegrationsProps(homeContent)} />
      <ContentSection as="div" paddingBlock="md">
        <CallToActionBanner
          backgroundImage={visitorManagementContent.callToAction.backgroundImage}
          text={
            <div className={styles.text}>
              <RichContent
                blocks={[{ type: "paragraph", content: visitorManagementContent.callToAction.description }]}
                variant="plain"
              />
            </div>
          }
          cta={<CallToActionLink {...visitorManagementContent.callToAction.action} variant="outline" />}
        />
      </ContentSection>
      <ContentSection labelledBy="platform-features-heading" paddingBlock="lg">
        <PlatformFeaturesGrid {...createPlatformFeaturesProps(visitorManagementContent)} />
      </ContentSection>
      <ContentSection paddingBlock="lg" tone="dark">
        <ProofPointGrid {...createWhyFriendlywayProps(visitorManagementContent)} />
      </ContentSection>
      <ContentSection gap="md" labelledBy="visitor-hardware-heading" paddingBlock="lg">
        <div className={hardwareStyles.intro}>
          <SectionHeading as="h2" id="visitor-hardware-heading">{visitorManagementContent.hardware.heading}</SectionHeading>
          <p className={hardwareStyles.description}>{visitorManagementContent.hardware.description}</p>
        </div>
        <ProductGrid {...createVisitorHardwareProps(visitorManagementContent)} />
      </ContentSection>
      <ContentSection
        gap="md"
        id="block-feedback_details-form"
        labelledBy="contact-us-heading"
        paddingBlock="lg"
        tone="muted"
      >
        <SectionHeading as="h2" id="contact-us-heading">{visitorManagementContent.contact.heading}</SectionHeading>
        <TwoColumnSplit>
          <ContactPanel {...createContactPanelProps(visitorManagementContent)} />
          <HubSpotForm config={createContactFormProps(visitorManagementContent)} />
        </TwoColumnSplit>
      </ContentSection>
      <ContentSection gap="md" labelledBy="faq-heading" paddingBlock="lg" tone="sand">
        <SectionHeading as="h2" id="faq-heading">{visitorManagementContent.faq.heading}</SectionHeading>
        <Faq {...createFaqProps(visitorManagementContent)} initiallyOpenIndex={0} />
      </ContentSection>
    </article>
  );
}