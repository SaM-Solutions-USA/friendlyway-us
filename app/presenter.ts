import type { HomeCloudPlatformProps } from "@/components/home/cloud-platform";
import type { HomeLiveDemoProps } from "@/components/home/live-demo";
import type { HomeHeroProps } from "@/components/home/home-hero";
import type { HomeIntegrationsProps } from "@/components/home/integrations/home-integrations";
import type { InsightsAndNewsProps } from "@/components/home/insights-and-news";
import type { HomeOnSiteSolutionsProps } from "@/components/home/on-site-solutions";
import type { ProofPointGridProps } from "@/components/solutions/proof-point-grid/proof-point-grid";
import type { TestimonialCarouselProps } from "@/components/solutions/testimonial-spotlight";
import type { FilteredCustomerStoryGridProps } from "@/components/solutions/customer-story-grid";
import type { LogoMarqueeProps } from "@/components/shared/content/logo-marquee";
import type { ProductGridProps } from "@/components/shared/content/product-grid";

import type { HomeContent } from "./types";

export function createHomeHeroProps(content: HomeContent): HomeHeroProps {
  return { hero: content.hero };
}

export function createHomeClientsProps(content: HomeContent): LogoMarqueeProps {
  return {
    logos: content.clients.logos,
    mode: "scroll",
    heading: { text: content.clients.heading, id: "trusted-clients-heading" },
  };
}

export function createHomeOnSiteSolutionsProps(content: HomeContent): HomeOnSiteSolutionsProps {
  return {
    heading: { text: content.onSiteSolutions.heading, id: "on-site-solutions-heading" },
    cards: content.onSiteSolutions.cards,
  };
}

export function createHomeKiosksProps(content: HomeContent): {
  readonly heading: { readonly text: string; readonly id: string };
  readonly grid: ProductGridProps;
} {
  return {
    heading: { text: content.kiosks.heading, id: "home-kiosks-heading" },
    grid: { cards: content.kiosks.cards, cta: content.kiosks.cta, variant: "kiosks" },
  };
}

export function createHomeCloudPlatformProps(content: HomeContent): HomeCloudPlatformProps {
  return {
    heading: { text: content.cloudPlatform.heading, id: "cloud-platform-heading" },
    description: content.cloudPlatform.description,
    slides: content.cloudPlatform.slides,
    cta: content.cloudPlatform.cta,
  };
}

export function createHomeIntegrationsProps(content: HomeContent): HomeIntegrationsProps {
  return {
    heading: { text: content.integrations.heading, id: "home-integrations-heading" },
    logos: content.integrations.logos,
  };
}

export function createHomeWhyFriendlywayProps(content: HomeContent): ProofPointGridProps {
  return { ...content.whyFriendlyway, layout: "editorial" };
}

export function createHomeTestimonialProps(content: HomeContent): TestimonialCarouselProps {
  return content.testimonials;
}

export function createHomeCustomerStoriesProps(content: HomeContent): FilteredCustomerStoryGridProps {
  return content.customerStories;
}

export function createHomeInsightsAndNewsProps(content: HomeContent): InsightsAndNewsProps {
  const { insightsAndNews } = content;
  return {
    heading: { text: insightsAndNews.heading, id: "home-insights-and-news-heading" },
    description: insightsAndNews.description,
    articles: insightsAndNews.articles,
    cta: insightsAndNews.cta,
  };
}

export function createHomeLiveDemoProps(content: HomeContent): HomeLiveDemoProps {
  const { liveDemo } = content;
  return {
    id: liveDemo.id,
    heading: liveDemo.heading,
    description: liveDemo.description,
    media: liveDemo.media,
    form: liveDemo.form,
  };
}
