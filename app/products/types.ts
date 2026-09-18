import type { HubSpotFormConfig } from "@/components/shared/forms/hubspot-form";
import type { ContentCard, ContentContactProfile, ContentCta, ContentMedia } from "@/content/types";

export interface ProductSeo {
  readonly title: string;
  readonly description: string;
  readonly canonicalPath: string;
  readonly robots: { readonly index: boolean; readonly follow: boolean };
  readonly openGraph: { readonly locale: string; readonly type: "article"; readonly updatedTime: string };
  readonly socialImage: ContentMedia;
}

export interface ProductContent {
  readonly slug: string;
  readonly seo: ProductSeo;
  readonly hero: { readonly title: string; readonly description: string; readonly actions: readonly ContentCta[]; readonly media: ContentMedia };
  readonly features: readonly { readonly title: string; readonly description: string; readonly media: ContentMedia }[];
  readonly qrCallout: { readonly heading: string; readonly description: string; readonly qrCode: ContentMedia; readonly deviceImage: ContentMedia };
  readonly applications: { readonly heading: string; readonly description: string; readonly items: readonly string[]; readonly cta: ContentCta };
  readonly platform: { readonly heading: string; readonly description: string; readonly media: ContentMedia; readonly features: readonly { readonly title: string; readonly description: string }[] };
  readonly industries: { readonly heading: string; readonly description: string; readonly items: readonly { readonly title: string; readonly icon: ContentMedia }[] };
  readonly productDetail: { readonly name: string; readonly description: string; readonly orderAction: ContentCta; readonly gallery: readonly ContentMedia[]; readonly specifications: readonly { readonly heading: string; readonly items: readonly string[] }[]; readonly schema: { readonly productId: string; readonly sku: string; readonly image: Pick<ContentMedia, "src" | "alt">; readonly offer: { readonly priceCurrency: string; readonly availability: "https://schema.org/InStock"; readonly itemCondition: "https://schema.org/NewCondition" } } };
  readonly contact: { readonly heading: string; readonly paragraphs: readonly string[]; readonly profile: ContentContactProfile; readonly form?: HubSpotFormConfig };
  readonly faq: readonly { readonly question: string; readonly answer: string }[];
  readonly relatedProducts: { readonly heading: string; readonly cards: readonly ContentCard[]; readonly cta: ContentCta };
}
