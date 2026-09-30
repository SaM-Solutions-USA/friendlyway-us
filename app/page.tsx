import type { Metadata } from "next";

import { HomeCloudPlatform } from "@/components/home/cloud-platform";
import { HomeHero } from "@/components/home/home-hero";
import { HomeIntegrations } from "@/components/home/integrations/home-integrations";
import { InsightsAndNews } from "@/components/home/insights-and-news";
import { HomeLiveDemo } from "@/components/home/live-demo";
import { HomeOnSiteSolutions } from "@/components/home/on-site-solutions";
import { ProofPointGrid } from "@/components/solutions/proof-point-grid/proof-point-grid";
import { TestimonialCarousel } from "@/components/solutions/testimonial-spotlight";
import { FilteredCustomerStoryGrid } from "@/components/solutions/customer-story-grid";
import { LogoMarquee } from "@/components/shared/content/logo-marquee";
import { ProductGrid } from "@/components/shared/content/product-grid";
import { StructuredData } from "@/components/shared/content/structured-data";
import { ContentSection } from "@/components/shared/layout/content-section";
import { AppShell } from "@/components/shared/shell/app-shell";
import { SectionHeading } from "@/components/shared/typography/section-heading";

import { homeContent } from "./content";
import { getHomeMetadata, getHomeStructuredData } from "./seo";
import {
  createHomeClientsProps,
  createHomeCustomerStoriesProps,
  createHomeCloudPlatformProps,
  createHomeHeroProps,
  createHomeInsightsAndNewsProps,
  createHomeIntegrationsProps,
  createHomeKiosksProps,
  createHomeLiveDemoProps,
  createHomeOnSiteSolutionsProps,
  createHomeTestimonialProps,
  createHomeWhyFriendlywayProps,
} from "./presenter";

export const metadata: Metadata = getHomeMetadata(homeContent.seo);

export default function HomePage() {
  const clientsProps = createHomeClientsProps(homeContent);
  const kiosksProps = createHomeKiosksProps(homeContent);

  return (
    <AppShell currentPathname="/">
      <HomeHero {...createHomeHeroProps(homeContent)} />
      <ContentSection
        gap="md"
        labelledBy={clientsProps.heading?.id}
        paddingBlockStart="md"
      >
        <LogoMarquee {...clientsProps} />
      </ContentSection>
      <HomeOnSiteSolutions {...createHomeOnSiteSolutionsProps(homeContent)} />
      <ContentSection gap="md" labelledBy={kiosksProps.heading.id} paddingBlock="lg" tone="sand">
        <SectionHeading as="h2" id={kiosksProps.heading.id}>{kiosksProps.heading.text}</SectionHeading>
        <ProductGrid {...kiosksProps.grid} />
      </ContentSection>
      <HomeCloudPlatform {...createHomeCloudPlatformProps(homeContent)} />
      <HomeIntegrations {...createHomeIntegrationsProps(homeContent)} />
      <ContentSection labelledBy="proof-point-grid-heading" tone="sand">
        <ProofPointGrid {...createHomeWhyFriendlywayProps(homeContent)} />
      </ContentSection>
      <ContentSection labelledBy="testimonial-carousel-heading">
        <TestimonialCarousel {...createHomeTestimonialProps(homeContent)} />
      </ContentSection>
      <ContentSection labelledBy="customer-story-grid-heading" paddingBlock="lg">
        <FilteredCustomerStoryGrid {...createHomeCustomerStoriesProps(homeContent)} />
      </ContentSection>
      <InsightsAndNews {...createHomeInsightsAndNewsProps(homeContent)} />
      <HomeLiveDemo {...createHomeLiveDemoProps(homeContent)} />
      <StructuredData data={getHomeStructuredData(homeContent.seo)} />
    </AppShell>
  );
}