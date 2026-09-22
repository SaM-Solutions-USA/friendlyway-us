export interface EmergencyMusteringMedia {
  readonly src: string;
  readonly srcSet?: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
}

export interface EmergencyMusteringAction {
  readonly label: string;
  readonly href: string;
}

export interface EmergencyMusteringContent {
  readonly seo: {
    readonly title: string;
    readonly description: string;
    readonly canonicalPath: string;
    readonly robots: { readonly index: boolean; readonly follow: boolean };
    readonly openGraph: { readonly locale: string; readonly type: "article"; readonly updatedTime: string };
    readonly socialImage: EmergencyMusteringMedia;
  };
  readonly hero: {
    readonly title: string;
    readonly description: string;
    readonly actions: readonly EmergencyMusteringAction[];
    readonly media: EmergencyMusteringMedia;
  };
  readonly clientLogos: readonly EmergencyMusteringMedia[];
  readonly safetyBenefits: {
    readonly heading: string;
    readonly description: string;
    readonly items: readonly {
      readonly icon: EmergencyMusteringMedia;
      readonly label: string;
    }[];
  };
  readonly solutionFeatures: {
    readonly heading: string;
    readonly description: string;
    readonly items: readonly {
      readonly title: string;
      readonly description: string;
      readonly media: EmergencyMusteringMedia;
    }[];
  };
  readonly supportingSolutions: {
    readonly heading: string;
    readonly cards: readonly {
      readonly title: string;
      readonly description: readonly string[];
      readonly href?: string;
    }[];
  };
  readonly callToAction: {
    readonly heading: string;
    readonly description: string;
    readonly action: EmergencyMusteringAction;
    readonly backgroundImage: string;
  };
  readonly timeline: {
    readonly heading: string;
    readonly steps: readonly {
      readonly title: string;
      readonly description: string;
    }[];
  };
  readonly useCases: {
    readonly heading: string;
    readonly description: string;
    readonly items: readonly {
      readonly icon: EmergencyMusteringMedia;
      readonly title: string;
      readonly description: string;
    }[];
  };
  readonly testimonial: {
    readonly logo: EmergencyMusteringMedia;
    readonly quote: string;
    readonly author: {
      readonly name: string;
      readonly role: string;
      readonly portrait: EmergencyMusteringMedia;
    };
    readonly metrics: readonly {
      readonly value: string;
      readonly label: string;
    }[];
    readonly details: readonly {
      readonly heading: string;
      readonly items: readonly string[];
    }[];
  };
  readonly realWorldCapabilities: {
    readonly heading: string;
    readonly desktopColumns: 3 | 4;
    readonly items: readonly {
      readonly icon: EmergencyMusteringMedia;
      readonly title: string;
      readonly description: string;
    }[];
  };
  readonly integrations: {
    readonly heading: string;
    readonly description: string;
    readonly desktopColumns: 2 | 3;
    readonly cards: readonly {
      readonly title: string;
      readonly description: readonly string[];
      readonly href?: string;
    }[];
  };
  readonly whyFriendlyway: {
    readonly heading: string;
    readonly items: readonly {
      readonly icon: EmergencyMusteringMedia;
      readonly description: string;
    }[];
  };
  readonly contact: {
    readonly heading: string;
    readonly paragraphs: readonly string[];
    readonly profile: {
      readonly name: string;
      readonly role: string;
      readonly location: string;
      readonly portrait: EmergencyMusteringMedia;
    };
    readonly form: {
      readonly portalId: string;
      readonly formId: string;
      readonly region?: string;
      readonly formName: string;
      readonly consentCategory: "functional" | "marketing";
    };
  };
  readonly faq: {
    readonly heading: string;
    readonly description: string;
    readonly items: readonly {
      readonly question: string;
      readonly answer: string;
    }[];
  };
}