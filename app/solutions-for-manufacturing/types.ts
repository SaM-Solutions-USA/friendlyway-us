import type { SharedMedia } from "@/components/shared/content/media";
import type { BenefitIconGridProps } from "@/components/solutions/benefit-icon-grid";
import type { CustomerStoryGridProps } from "@/components/solutions/customer-story-grid";
import type { ManufacturingChallengesProps } from "@/components/solutions/manufacturing-challenges";
import type { ProofPointGridProps } from "@/components/solutions/proof-point-grid";
import type { StatisticsGridProps } from "@/components/solutions/statistics-grid";
import type { TestimonialCarouselProps } from "@/components/solutions/testimonial-spotlight";
import type { TransformationJourneyProps } from "@/components/solutions/transformation-journey";
import type { FaqProps } from "@/components/products/faq/faq";

export interface ManufacturingContent {
  readonly seo: {
    readonly title: string;
    readonly description: string;
    readonly canonicalPath: string;
    readonly robots: {
      readonly index: boolean;
      readonly follow: boolean;
      readonly noarchive: boolean;
      readonly nosnippet: boolean;
    };
    readonly openGraph: {
      readonly locale: string;
      readonly type: "article";
      readonly updatedTime: string;
    };
    readonly socialImage: SharedMedia;
  };
  readonly hero: {
    readonly title: string;
    readonly description: string;
    readonly actions: readonly {
      readonly label: string;
      readonly href: string;
    }[];
    readonly media: SharedMedia;
  };
  readonly clientLogos: readonly SharedMedia[];
  readonly solutions: {
    readonly heading: string;
    readonly items: readonly {
      readonly title: string;
      readonly icon: SharedMedia;
      readonly paragraphs: readonly string[];
      readonly features: readonly string[];
      readonly action?: {
        readonly label: string;
        readonly href: string;
      };
    }[];
  };
  readonly realLifeGallery: {
    readonly heading: string;
    readonly images: readonly SharedMedia[];
  };
  readonly hardwareOptions: {
    readonly heading: string;
    readonly description: string;
    readonly media: SharedMedia;
  };
  readonly demo: {
    readonly heading: string;
    readonly description: string;
    readonly action: {
      readonly label: string;
      readonly href: string;
    };
  };
  readonly challenges: ManufacturingChallengesProps;
  readonly testimonials: TestimonialCarouselProps;
  readonly transformationJourney: TransformationJourneyProps;
  readonly whyFriendlyway: ProofPointGridProps;
  readonly statistics: StatisticsGridProps;
  readonly customerStories: CustomerStoryGridProps;
  readonly industries: BenefitIconGridProps;
  readonly faq: {
    readonly heading: string;
    readonly items: FaqProps["items"];
  };
  readonly contact: {
    readonly heading: string;
    readonly paragraphs: readonly string[];
    readonly profile: {
      readonly name: string;
      readonly role: string;
      readonly location: string;
      readonly portrait: SharedMedia;
    };
    readonly form: {
      readonly portalId: string;
      readonly formId: string;
      readonly region: string;
      readonly formName: string;
      readonly consentCategory: "functional";
    };
  };
}
