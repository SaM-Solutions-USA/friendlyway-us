import type { HubSpotFormConfig } from "@/components/hubspot-form";

export interface AboutUsSeoImage {
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
}

export interface AboutUsSeo {
  readonly title: string;
  readonly description: string;
  readonly canonicalPath: string;
  readonly robots: {
    readonly index: boolean;
    readonly follow: boolean;
  };
  readonly openGraph: {
    readonly locale: string;
    readonly type: "article";
    readonly updatedTime: string;
  };
  readonly socialImage: AboutUsSeoImage;
}

export interface AboutUsMedia {
  readonly src: string;
  readonly srcSet?: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
}

export interface AboutUsProofPoint {
  readonly icon: AboutUsMedia;
  readonly label: string;
}

export interface AboutUsEditorialSection {
  readonly heading: string;
  readonly paragraphs: readonly string[];
}

export interface AboutUsTeamMember {
  readonly name: string;
  readonly role: string;
  readonly portrait: AboutUsMedia;
}

export interface AboutUsCard {
  readonly title: string;
  readonly description?: string;
  readonly href?: string;
  readonly image?: AboutUsMedia;
}

export interface AboutUsOffice {
  readonly name: string;
  readonly address: string;
  readonly telephone?: { readonly display: string; readonly href: string };
}

export interface AboutUsContact {
  readonly heading: string;
  readonly paragraphs: readonly string[];
  readonly profile: {
    readonly name: string;
    readonly role: string;
    readonly location: string;
    readonly portrait: AboutUsMedia;
  };
  readonly form: HubSpotFormConfig;
}

export interface AboutUsContent {
  readonly title: string;
  readonly seo: AboutUsSeo;
  readonly hero: AboutUsMedia;
  readonly introduction: {
    readonly paragraphs: readonly string[];
    readonly proofPoints: readonly AboutUsProofPoint[];
  };
  readonly editorialSections: readonly AboutUsEditorialSection[];
  readonly teams: readonly { readonly description: string; readonly members: readonly AboutUsTeamMember[] }[];
  readonly softwareSolutions: { readonly cards: readonly AboutUsCard[]; readonly cta: { readonly label: string; readonly href: string } };
  readonly hardwareOfferings: { readonly cards: readonly AboutUsCard[]; readonly cta: { readonly label: string; readonly href: string } };
  readonly clientLogos: readonly AboutUsMedia[];
  readonly partnerLogos: readonly AboutUsMedia[];
  readonly offices: readonly AboutUsOffice[];
  readonly contact: AboutUsContact;
}

export const aboutUsContent = {
  title: "Discover friendlyway",
  hero: {
    src: "/wp-content/uploads/Entdecken-Sie-friendlyway.webp",
    srcSet: "/wp-content/uploads/Entdecken-Sie-friendlyway.webp 1x, /wp-content/uploads/Entdecken-Sie-friendlyway@2x.webp 2x",
    width: 1136,
    height: 422,
    alt: "Discover friendlyway",
  },
  introduction: {
    paragraphs: [
      "We are a global provider of digital signage and self-service solutions with over 25 years of experience. We focus on software and hardware solutions and consulting in digital signage, access management, workforce management, and visitor and facility management for the US and European markets, leveraging global resources and a broad partner network.",
      "Our clients rely on our leading SaaS platform and German-engineered commercial-grade hardware. We serve various industries, including manufacturing, the public sector, real estate, hospitality, and education, delivering technological excellence, quick time-to-market, and uncompromised software quality and security.",
    ],
    proofPoints: [
      {
        icon: { src: "/wp-content/uploads/icon-approval.svg", width: 64, height: 64, alt: "Approval" },
        label: "Software and Hardware Experts",
      },
      {
        icon: { src: "/wp-content/uploads/icon-clients.svg", width: 65, height: 64, alt: "Clients" },
        label: "500+ Clients",
      },
      {
        icon: { src: "/wp-content/uploads/icon-kiosk.svg", width: 45, height: 64, alt: "Kiosk" },
        label: "25,000+ Devices in 70 Countries",
      },
    ],
  },
  editorialSections: [
    {
      heading: "Our Focus on End-to-End Solutions",
      paragraphs: [
        "With our unique capabilities, friendlyway is perfectly equipped to provide comprehensive end-to-end solutions, including software and hardware. For added scalability, our clients can use their own Windows-based devices and are not limited to friendlyway hardware.",
      ],
    },
    {
      heading: "Fast ROI for Small Business. Customization for Enterprise.",
      paragraphs: [
        "For smaller projects and SMB clients, we offer standard pre-packaged and pre-configured solutions to help you achieve fast ROI.",
        "For enterprise clients, we provide highly configurable and scalable solutions with extensive integration capabilities and built-in APIs, complemented by consulting and software development services.",
      ],
    },
  ],
  teams: [
    { description: "Key Members of Our European Team", members: [
      { name: "Anton Dechko", role: "Managing Director", portrait: { src: "/wp-content/uploads/Anton-Dechko-1.png", width: 144, height: 144, alt: "" } },
      { name: "Soeren Seybert", role: "Head of Sales & Partner Management", portrait: { src: "/wp-content/uploads/Soeren-Seybert-1.png", width: 144, height: 144, alt: "" } },
      { name: "Philipp Weber", role: "Manager Hardware Portfolio and Production", portrait: { src: "/wp-content/uploads/Philipp-Weber-1.png", width: 144, height: 144, alt: "" } },
    ] },
    { description: "Key Members of Our US Team", members: [
      { name: "Dmitry Koshkin", role: "Managing Director", portrait: { src: "/wp-content/uploads/Dmitry-Koshkin-1.png", width: 144, height: 144, alt: "" } },
      { name: "Ryan Spillane", role: "Business Development and Sales", portrait: { src: "/wp-content/uploads/Ryan-Spillane.png", width: 144, height: 144, alt: "" } },
      { name: "Irina Viniarskaya", role: "Customer Success Manager", portrait: { src: "/wp-content/uploads/Irina-Viniarskaya-1.png", width: 144, height: 144, alt: "" } },
    ] },
  ],
  softwareSolutions: { cards: [
    { title: "Visitor Management", description: "Elevate visitor experience by offering a seamless journey.", href: "/visitor-management-solution/" },
    { title: "Digital Signage", description: "Leverage modern ways of marketing and communication.", href: "/friendlyway-digital-signage/" },
    { title: "Workforce Time Management and Shift Planning", description: "Track the activities of temporary and permanent workers.", href: "/multi-vendor-staffing-solution/" },
    { title: "Badging, Identity, and Access Management", description: "Provide uninterrupted, secure access to your premises." },
    { title: "Wayfinding and Visitor Guidance", description: "Help visitors quickly find their way and get assistance.", href: "/wayfinding-software/" },
    { title: "Self-Service Solutions", description: "Empower users to complete routine tasks alone via kiosks." },
    { title: "Emergency Mustering and Evacuation Tracking", description: "Ensure precise headcounts and safety during critical events.", href: "/emergency-mustering-evacuation-tracking/" },
  ], cta: { label: "About the platform", href: "/friendlyway-cloud-platform/" } },
  hardwareOfferings: { cards: [
    { title: "friendlyway Impress 43", href: "/products/impress-43", image: { src: "/wp-content/uploads/impress43.png", width: 445, height: 265, alt: "" } },
    { title: "friendlyway Empire 22 Slim", href: "/products/empire-22-slim", image: { src: "/wp-content/uploads/empire-22-slim.jpg", width: 445, height: 265, alt: "" } },
    { title: "friendlyway Luminum 43", href: "/products/luminum-43", image: { src: "/wp-content/uploads/luminum-445x265-min.png", width: 445, height: 265, alt: "luminum 43" } },
    { title: "friendlyway Counter 12", image: { src: "/wp-content/uploads/friendlyway-counter-12.png", width: 445, height: 265, alt: "friendlyway Counter 12" } },
  ], cta: { label: "See more products", href: "/kiosks-terminals-overview/" } },
  clientLogos: [
    { src: "/wp-content/uploads/logo-tvb-achensee.svg", width: 103, height: 49, alt: "Achensee" },
    { src: "/wp-content/uploads/publicsecurityand.svg", width: 185, height: 49, alt: "City of Munich Department of Public Security and Order" },
    { src: "/wp-content/uploads/millennium.svg", width: 168, height: 40, alt: "Millennium Group" },
    { src: "/wp-content/uploads/icon-bmw.svg", width: 56, height: 56, alt: "BMW" },
    { src: "/wp-content/uploads/icon-sixt.svg", width: 96, height: 40, alt: "SIXT" },
    { src: "/wp-content/uploads/icon-raiffeisen.svg", width: 51, height: 56, alt: "Raiffeisen" },
    { src: "/wp-content/uploads/PG_logo.svg", width: 81, height: 35, alt: "Procter & Gamble" },
    { src: "/wp-content/uploads/bosch-logo.svg", width: 157, height: 35, alt: "Bosch" },
    { src: "/wp-content/uploads/Kalkhoff-logo.svg", width: 207, height: 25, alt: "Kalkhoff" },
    { src: "/wp-content/uploads/duravit-logo.svg", width: 170, height: 40, alt: "Duravit" },
    { src: "/wp-content/uploads/logo-daimler-truck.svg", width: 213, height: 17, alt: "Daimler Truck" },
    { src: "/wp-content/uploads/logo-filtrox.png", width: 75, height: 75, alt: "Filtrox" },
    { src: "/wp-content/uploads/logo-hauser.png", width: 168, height: 29, alt: "Hauser" },
    { src: "/wp-content/uploads/logo-vopi.png", width: 80, height: 80, alt: "Volpi" },
  ],
  partnerLogos: [
    { src: "/wp-content/uploads/logo-faac.png", width: 150, height: 31, alt: "FAAC" },
    { src: "/wp-content/uploads/logo-bosch.svg", width: 150, height: 35, alt: "Bosch" },
    { src: "/wp-content/uploads/logo-mobiledemand.svg", width: 150, height: 62, alt: "MobileDemand" },
    { src: "/wp-content/uploads/logo-tbs.svg", width: 109, height: 71, alt: "TBS" },
    { src: "/wp-content/uploads/logo-fbMedia.svg", width: 108, height: 81, alt: "fbMEDIA logo" },
    { src: "/wp-content/uploads/logo-interflex.svg", width: 150, height: 59, alt: "Interflex" },
    { src: "/wp-content/uploads/logo-Suprag-Solutions-Tranparent-1.png", width: 150, height: 61, alt: "Suprag Solutions" },
  ],
  offices: [
    { name: "HQ: Munich Area, Germany", address: "Römerstrasse 32, 82205 Gilching, Deutschland", telephone: { display: "+49 89 58 80 44 40", href: "tel:+498958804440" } },
    { name: "Boston Area, United States", address: "83 Morse Street, Building 6, Norwood, MA 02062, United States", telephone: { display: "+1 857 777 60 73", href: "tel:+18577776073" } },
    { name: "friendlyway Polska", address: "Żelazna street 59 Warszawa, 00-848, Poland", telephone: { display: "+48-79-290-2058", href: "tel:+48792902058" } },
    { name: "friendlyway Italy (Remote/Partner)", address: "friendlyway supports customers in Italy through local partners and remote services — without maintaining a physical office in the country." },
  ],
  contact: {
    heading: "Contact Us",
    paragraphs: [
      "Please enter your contact information and any other details you feel are important for us to help you with. Once the form is submitted, our team will be in touch with you shortly.",
    ],
    profile: {
      name: "Dmitry Koshkin",
      role: "Managing Director",
      location: "friendlyway USA",
      portrait: { src: "/wp-content/uploads/foto.png", width: 216, height: 216, alt: "" },
    },
    form: {
      portalId: "50845293",
      formId: "1d974790-256b-4ef6-860e-bced18225498",
      region: "na1",
      formName: "Contact us",
      consentCategory: "functional",
    },
  },
  seo: {
    title: "About Us - friendlyway",
    description: "We are a global provider of digital signage and self-service solutions with over 25 years of experience. Our clients rely on our leading SaaS platform.",
    canonicalPath: "/about-us",
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      locale: "en_US",
      type: "article",
      updatedTime: "2026-01-19T13:26:27+03:00",
    },
    socialImage: {
      src: "/wp-content/uploads/fw-rich-snippet-Manufacturing.png",
      width: 1200,
      height: 630,
      alt: "friendlyway Solutions",
    },
  },
} as const satisfies AboutUsContent;