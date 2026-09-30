import type { RichContentBlock } from "@/components/shared/content/rich-content/rich-content";
import type { TestimonialCarouselProps } from "@/components/solutions/testimonial-spotlight";
import type { FilteredCustomerStoryGridProps } from "@/components/solutions/customer-story-grid";

export interface HomeHeroAction {
  readonly label: string;
  readonly href: string;
  readonly variant: "primary" | "secondary";
}

export interface HomeHeroMedia {
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
}

export interface HomeHeroContent {
  readonly heading: string;
  readonly description: string;
  readonly media: HomeHeroMedia;
  readonly actions: readonly HomeHeroAction[];
}

export interface HomeClientLogo {
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
}

export interface HomeClientsContent {
  readonly heading: string;
  readonly logos: readonly HomeClientLogo[];
}

export interface HomeOnSiteSolutionCard {
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly media: {
    readonly src: string;
    readonly srcSet: string;
    readonly width: number;
    readonly height: number;
    readonly alt: string;
  };
}

export interface HomeOnSiteSolutionsContent {
  readonly heading: string;
  readonly cards: readonly HomeOnSiteSolutionCard[];
}

export interface HomeKiosksContent {
  readonly heading: string;
  readonly cards: readonly {
    readonly title: string;
    readonly description: string;
    readonly href: string;
    readonly image: {
      readonly src: string;
      readonly width: number;
      readonly height: number;
      readonly alt: string;
    };
  }[];
  readonly cta: { readonly label: string; readonly href: string };
}

export interface HomeCloudPlatformContent {
  readonly heading: string;
  readonly description: string;
  readonly slides: readonly {
    readonly id: string;
    readonly label: string;
    readonly description: string;
    readonly media: {
      readonly src: string;
      readonly srcSet?: string;
      readonly width: number;
      readonly height: number;
      readonly alt: string;
    };
  }[];
  readonly cta: { readonly label: string; readonly href: string };
}

export interface HomeIntegrationsContent {
  readonly heading: string;
  readonly logos: readonly {
    readonly label: string;
    readonly image: { readonly src: string; readonly width: number; readonly height: number; readonly alt: string };
  }[];
}

export interface HomeWhyFriendlywayContent {
  readonly heading: string;
  readonly items: readonly {
    readonly icon: { readonly src: string; readonly width: number; readonly height: number; readonly alt: string };
    readonly description: readonly RichContentBlock[];
  }[];
}

export interface HomeInsightsAndNewsContent {
  readonly heading: string;
  readonly description: string;
  readonly articles: readonly {
    readonly title: string;
    readonly href: string;
    readonly dateLabel: string;
    readonly dateTime: string;
    readonly media: {
      readonly src: string;
      readonly width: number;
      readonly height: number;
      readonly alt: string;
    };
  }[];
  readonly cta: { readonly label: string; readonly href: string };
}

export interface HomeLiveDemoFormConfig {
  readonly portalId: string;
  readonly formId: string;
  readonly region: string;
  readonly formName: string;
  readonly consentCategory: "functional";
}

export interface HomeLiveDemoMedia {
  readonly src: string;
  readonly srcSet: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
}

export interface HomeLiveDemoContent {
  readonly id: string;
  readonly heading: string;
  readonly description: string;
  readonly media: HomeLiveDemoMedia;
  readonly form: HomeLiveDemoFormConfig;
}

export interface HomeSeo {
  readonly title: string;
  readonly description: string;
  readonly canonicalPath: string;
  readonly robots: { readonly index: boolean; readonly follow: boolean };
  readonly socialImage: { readonly src: string; readonly width: number; readonly height: number; readonly alt: string };
}

export interface HomeContent {
  readonly seo: HomeSeo;
  readonly hero: HomeHeroContent;
  readonly clients: HomeClientsContent;
  readonly onSiteSolutions: HomeOnSiteSolutionsContent;
  readonly kiosks: HomeKiosksContent;
  readonly cloudPlatform: HomeCloudPlatformContent;
  readonly integrations: HomeIntegrationsContent;
  readonly whyFriendlyway: HomeWhyFriendlywayContent;
  readonly testimonials: TestimonialCarouselProps;
  readonly customerStories: FilteredCustomerStoryGridProps;
  readonly insightsAndNews: HomeInsightsAndNewsContent;
  readonly liveDemo: HomeLiveDemoContent;
}
