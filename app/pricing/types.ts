export type LicenseId = "starter" | "professional" | "enterprise";

export interface PricingContent {
  readonly seo: {
    readonly title: string;
    readonly description: string;
    readonly canonicalPath: string;
    readonly robots: { readonly index: boolean; readonly follow: boolean };
    readonly socialImage: { readonly src: string; readonly width: number; readonly height: number; readonly alt: string };
  };
  readonly introduction: { readonly heading: string; readonly description: string };
  readonly plans: readonly Plan[];
  readonly billingNote: string;
  readonly comparison: readonly FeatureCategory[];
  readonly hardware: { readonly heading: string; readonly tabs: readonly HardwareTab[]; readonly note: string };
  readonly quote: { readonly headingPrefix: string; readonly headingAccent: string; readonly headingSuffix: string; readonly description: string; readonly form: PricingFormConfig };
}

export interface PricingFormConfig {
  readonly portalId: string;
  readonly formId: string;
  readonly region?: string;
  readonly formName: string;
  readonly consentCategory: "functional" | "marketing";
}

export interface Plan {
  readonly id: LicenseId;
  readonly name: string;
  readonly description: string;
  readonly price?: string;
  readonly pricePrefix?: string;
  readonly period?: string;
  readonly bestseller?: boolean;
  readonly features: readonly string[];
  readonly ctaLabel: string;
}

export interface FeatureCategory {
  readonly title: string;
  readonly rows: readonly { readonly feature: string; readonly available: readonly LicenseId[] }[];
}

export interface HardwareTab {
  readonly id: LicenseId;
  readonly label: string;
  readonly products: readonly HardwareProduct[];
}

export interface HardwareProduct {
  readonly name: string;
  readonly href?: string;
  readonly price: string;
  readonly image: { readonly src: string; readonly srcSet: string; readonly width: number; readonly height: number; readonly alt: string };
}