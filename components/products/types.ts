export interface ProductMedia { readonly src: string; readonly width: number; readonly height: number; readonly alt: string; }
export interface ProductCta { readonly label: string; readonly href: string; }
export interface ProductCard { readonly title: string; readonly description?: string; readonly href?: string; readonly image?: ProductMedia; }
export interface ProductContactProfile { readonly name: string; readonly role: string; readonly location: string; readonly portrait: ProductMedia; }
export interface ProductFormConfig { readonly portalId: string; readonly formId: string; readonly region?: string; readonly formName: string; readonly consentCategory: "functional" | "marketing"; }

export interface ProductPageContent {
  readonly hero: { readonly title: string; readonly description: string; readonly actions: readonly ProductCta[]; readonly media: ProductMedia };
  readonly features: readonly { readonly title: string; readonly description: string; readonly media: ProductMedia }[];
  readonly qrCallout: { readonly heading: string; readonly description: string; readonly qrCode: ProductMedia; readonly deviceImage: ProductMedia };
  readonly applications: { readonly heading: string; readonly description: string; readonly items: readonly string[]; readonly cta: ProductCta };
  readonly platform: { readonly heading: string; readonly description: string; readonly media: ProductMedia; readonly features: readonly { readonly title: string; readonly description: string }[] };
  readonly industries: { readonly heading: string; readonly description: string; readonly items: readonly { readonly title: string; readonly icon: ProductMedia }[] };
  readonly productDetail: { readonly name: string; readonly description: string; readonly orderAction: ProductCta; readonly gallery: readonly ProductMedia[]; readonly specifications: readonly { readonly heading: string; readonly items: readonly string[] }[] };
  readonly contact: { readonly heading: string; readonly paragraphs: readonly string[]; readonly profile: ProductContactProfile; readonly form?: ProductFormConfig };
  readonly faq: readonly { readonly question: string; readonly answer: string }[];
  readonly relatedProducts: { readonly heading: string; readonly cards: readonly ProductCard[]; readonly cta: ProductCta };
}
