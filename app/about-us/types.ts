export interface AboutUsMedia {
  readonly src: string;
  readonly srcSet?: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
}

export interface AboutUsCta {
  readonly label: string;
  readonly href: string;
}

export interface AboutUsCard {
  readonly title: string;
  readonly description?: string;
  readonly href?: string;
  readonly image?: AboutUsMedia;
}

export interface AboutUsProofPoint {
  readonly icon: AboutUsMedia;
  readonly label: string;
}

export interface AboutUsTeamMember {
  readonly name: string;
  readonly role: string;
  readonly portrait: AboutUsMedia;
}

export interface AboutUsOffice {
  readonly name: string;
  readonly address: string;
  readonly telephone?: {
    readonly display: string;
    readonly href: string;
  };
}

export interface AboutUsContactProfile {
  readonly name: string;
  readonly role: string;
  readonly location: string;
  readonly portrait: AboutUsMedia;
}

export interface AboutUsFormConfig {
  readonly portalId: string;
  readonly formId: string;
  readonly region?: string;
  readonly formName: string;
  readonly consentCategory: "functional" | "marketing";
}

export interface AboutUsSeo {
  readonly title: string;
  readonly description: string;
  readonly canonicalPath: string;
  readonly robots: { readonly index: boolean; readonly follow: boolean };
  readonly openGraph: { readonly locale: string; readonly type: "article"; readonly updatedTime: string };
  readonly socialImage: AboutUsMedia;
}

export interface AboutUsContent {
  readonly title: string;
  readonly seo: AboutUsSeo;
  readonly hero: AboutUsMedia;
  readonly introduction: { readonly paragraphs: readonly string[]; readonly proofPoints: readonly AboutUsProofPoint[] };
  readonly editorialSections: readonly { readonly heading: string; readonly paragraphs: readonly string[] }[];
  readonly teams: readonly { readonly description: string; readonly members: readonly AboutUsTeamMember[] }[];
  readonly softwareSolutions: { readonly cards: readonly AboutUsCard[]; readonly cta: AboutUsCta };
  readonly hardwareOfferings: { readonly cards: readonly AboutUsCard[]; readonly cta: AboutUsCta };
  readonly clientLogos: readonly AboutUsMedia[];
  readonly partnerLogos: readonly AboutUsMedia[];
  readonly offices: readonly AboutUsOffice[];
  readonly contact: { readonly heading: string; readonly paragraphs: readonly string[]; readonly profile: AboutUsContactProfile; readonly form: AboutUsFormConfig };
}
