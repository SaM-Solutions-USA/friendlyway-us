export interface ContentMedia {
  readonly src: string;
  readonly srcSet?: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
}

export interface ContentCta {
  readonly label: string;
  readonly href: string;
}

export interface ContentCard {
  readonly title: string;
  readonly description?: string;
  readonly href?: string;
  readonly image?: ContentMedia;
}

export interface ContentProofPoint {
  readonly icon: ContentMedia;
  readonly label: string;
}

export interface ContentTeamMember {
  readonly name: string;
  readonly role: string;
  readonly portrait: ContentMedia;
}

export interface ContentContactProfile {
  readonly name: string;
  readonly role: string;
  readonly location: string;
  readonly portrait: ContentMedia;
}

export interface ContentOffice {
  readonly name: string;
  readonly address: string;
  readonly telephone?: {
    readonly display: string;
    readonly href: string;
  };
}