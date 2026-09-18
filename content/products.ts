import type { HubSpotFormConfig } from "@/components/hubspot-form";
import type { ContentCard, ContentContactProfile, ContentCta, ContentMedia } from "@/content/types";

export interface ProductSeo {
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
  readonly socialImage: ContentMedia;
}

export interface ProductSpecificationGroup {
  readonly heading: string;
  readonly items: readonly string[];
}

export interface ProductContent {
  readonly slug: string;
  readonly seo: ProductSeo;
  readonly hero: {
    readonly title: string;
    readonly description: string;
    readonly actions: readonly ContentCta[];
    readonly media: ContentMedia;
  };
  readonly features: readonly {
    readonly title: string;
    readonly description: string;
    readonly media: ContentMedia;
  }[];
  readonly qrCallout: {
    readonly heading: string;
    readonly description: string;
    readonly qrCode: ContentMedia;
    readonly deviceImage: ContentMedia;
  };
  readonly applications: {
    readonly heading: string;
    readonly description: string;
    readonly items: readonly string[];
    readonly cta: ContentCta;
  };
  readonly platform: {
    readonly heading: string;
    readonly description: string;
    readonly media: ContentMedia;
    readonly features: readonly { readonly title: string; readonly description: string }[];
  };
  readonly industries: {
    readonly heading: string;
    readonly description: string;
    readonly items: readonly { readonly title: string; readonly icon: ContentMedia }[];
  };
  readonly productDetail: {
    readonly name: string;
    readonly description: string;
    readonly orderAction: ContentCta;
    readonly gallery: readonly ContentMedia[];
    readonly specifications: readonly ProductSpecificationGroup[];
    readonly schema: {
      readonly productId: string;
      readonly sku: string;
      readonly image: Pick<ContentMedia, "src" | "alt">;
      readonly offer: {
        readonly priceCurrency: string;
        readonly availability: "https://schema.org/InStock";
        readonly itemCondition: "https://schema.org/NewCondition";
      };
    };
  };
  readonly contact: {
    readonly heading: string;
    readonly paragraphs: readonly string[];
    readonly profile: ContentContactProfile;
    readonly form?: HubSpotFormConfig;
  };
  readonly faq: readonly { readonly question: string; readonly answer: string }[];
  readonly relatedProducts: {
    readonly heading: string;
    readonly cards: readonly ContentCard[];
    readonly cta: ContentCta;
  };
}

export const counter22Content = {
  slug: "counter-22",
  seo: {
    title: "friendlyway Counter 22 – Tablet Kiosk for Visitor Management",
    description: "Discover the Counter 22: a compact kiosk with an LED frame, 5G connectivity, and an integrated camera. Ideal for self-check-ins & digital reception.",
    canonicalPath: "/products/counter-22",
    robots: { index: false, follow: false },
    openGraph: { locale: "en_US", type: "article", updatedTime: "2026-03-02T12:12:57+03:00" },
    socialImage: { src: "/wp-content/uploads/fw-rich-snippet-Counter-22.png", width: 1200, height: 630, alt: "friendlyway Counter 22" },
  },
  hero: {
    title: "friendlyway Counter 22. Compact & Universally Deployable.",
    description: "Elegant LED frame, 21.5-inch touch display, and integrated 5G modem — this tablet kiosk serves as a compact check-in and self-service station for your visitors wherever they are.",
    actions: [
      { label: "Request a quote", href: "#block-feedback_details-form" },
      { label: "View in AR", href: "#qr-code" },
    ],
    media: { src: "/wp-content/uploads/main-counter-22.webp", srcSet: "/wp-content/uploads/main-counter-22.webp 1x, /wp-content/uploads/main-counter-22@2x.webp 2x", width: 548, height: 336, alt: "friendlyway Counter 22. Compact & Universally Deployable." },
  },
  features: [
    { title: "Modern Design with LED Frame", description: "The slim black design and illuminated LED frame give the Counter 22 a modern and professional look.", media: { src: "/wp-content/uploads/adv-counter-22-1.webp", srcSet: "/wp-content/uploads/adv-counter-22-1.webp 1x, /wp-content/uploads/adv-counter-22-1@2x.webp 2x", width: 700, height: 400, alt: "Modern Design with LED Frame" } },
    { title: "Compact and Flexible", description: "Thanks to its small footprint, the Counter 22 fits perfectly even in smaller entrance areas — while still offering the full functionality of a large kiosk system.", media: { src: "/wp-content/uploads/adv-counter-22-2.webp", srcSet: "/wp-content/uploads/adv-counter-22-2.webp 1x, /wp-content/uploads/adv-counter-22-2@2x.webp 2x", width: 700, height: 400, alt: "Compact and Flexible" } },
    { title: "Fully Equipped for Accessible Self-Service Interactions", description: "With an integrated camera, QR scanner, microphone, and multiple ports, the Counter 22 is ready for demanding applications, such as video calls or secure self-check-ins. It also meets requirements for barrier-free accessibility.", media: { src: "/wp-content/uploads/adv-counter-22-3.webp", srcSet: "/wp-content/uploads/adv-counter-22-3.webp 1x, /wp-content/uploads/adv-counter-22-3@2x.webp 2x", width: 700, height: 400, alt: "Fully Equipped for Accessible Self-Service Interactions" } },
    { title: "Future-Proof Connectivity", description: "Equipped with powerful connection options, including LAN, Wi-Fi, and an integrated 5G modem, the Counter 22 ensures ultra-fast and stable data transfer — anytime, anywhere.", media: { src: "/wp-content/uploads/Counter-22-4-1.webp", srcSet: "/wp-content/uploads/Counter-22-4-1.webp 1x, /wp-content/uploads/Counter-22-4@2x-1.webp 2x", width: 700, height: 400, alt: "Future-Proof Connectivity" } },
  ],
  qrCallout: {
    heading: "Experience the Counter 22 in AR!",
    description: "Simply scan the QR code with your smartphone.",
    qrCode: { src: "/wp-content/uploads/qr-code.svg", width: 118, height: 84, alt: "" },
    deviceImage: { src: "/wp-content/uploads/1x-1.png", srcSet: "/wp-content/uploads/1x-1.png 1x, /wp-content/uploads/2x-1.png 2x", width: 232, height: 232, alt: "" },
  },
  applications: {
    heading: "Business Applications",
    description: "When connected to our powerful friendlyway Cloud Platform, the Counter 22 becomes the central interface for your digital workflows. It is the ideal hardware for a wide range of business use cases.",
    items: ["Visitor Management: Use the Counter 22 as an autonomous self-check-in station for pre-registered visitors to support your reception team.", "Employee Self-Service: Offer your staff a central point for retrieving important information.", "Interactive Wayfinding: Help visitors navigate your facilities with intuitive digital maps.", "Video Assistance: Enable direct audio-video contact with support staff or specialists."],
    cta: { label: "Learn more", href: "/friendlyway-cloud-platform/" },
  },
  platform: {
    heading: "Powered by the friendlyway Cloud Platform",
    description: "With over 25,000 devices deployed in 70 countries, we know how to deliver high-quality, reliable solutions. Since 1998, friendlyway has been supporting companies and organizations with innovative software and hardware.",
    media: { src: "/wp-content/uploads/cloud-platform-counter-22.webp", srcSet: "/wp-content/uploads/cloud-platform-counter-22.webp 1x, /wp-content/uploads/cloud-platform-counter-22@2x.webp 2x", width: 1136, height: 520, alt: "Powered by the friendlyway Cloud Platform" },
    features: [{ title: "friendlyway Cloud Platform", description: "Connect all your digital signage and self-service devices through a single, cloud-managed platform." }, { title: "friendlyway Modules", description: "Activate our ready-to-use modules, including Visitor Management, Wayfinding, Secure Browser, and more." }],
  },
  industries: {
    heading: "Industries",
    description: "friendlyway provides complete solutions for digitized displays and self-service workflows across sectors:",
    items: [
      { title: "Automotive", icon: { src: "/wp-content/uploads/icon-car.svg", width: 24, height: 25, alt: "" } },
      { title: "Retail", icon: { src: "/wp-content/uploads/icon-retail-1.svg", width: 24, height: 24, alt: "" } },
      { title: "Banking", icon: { src: "/wp-content/uploads/icon-finance.svg", width: 24, height: 24, alt: "Finance" } },
      { title: "Airports & Train Stations", icon: { src: "/wp-content/uploads/icon-earth.svg", width: 20, height: 21, alt: "" } },
      { title: "Municipalities & Government", icon: { src: "/wp-content/uploads/icon-public-sector.svg", width: 24, height: 24, alt: "Public sector" } },
      { title: "Trade Shows", icon: { src: "/wp-content/uploads/icon-trade-shows-and-events.svg", width: 24, height: 24, alt: "" } },
      { title: "Clinics & Healthcare", icon: { src: "/wp-content/uploads/icon-heathcare.svg", width: 24, height: 24, alt: "" } },
      { title: "Manufacturing", icon: { src: "/wp-content/uploads/icon-general-manufacturing.svg", width: 24, height: 24, alt: "" } },
    ],
  },
  productDetail: {
    name: "friendlyway Counter 22",
    description: "Tablet Kiosk with LED Light Status Frame",
    orderAction: { label: "Order now", href: "#order-counter-22" },
    gallery: [
      { src: "/wp-content/uploads/counter-22-frontal.webp", srcSet: "/wp-content/uploads/counter-22-frontal.webp 1x, /wp-content/uploads/counter-22-frontal@2x.webp 2x", width: 178, height: 544, alt: "friendlyway Counter 22" },
      { src: "/wp-content/uploads/counter-22-side-1.webp", srcSet: "/wp-content/uploads/counter-22-side-1.webp 1x, /wp-content/uploads/counter-22-side@2x-1.webp 2x", width: 172, height: 564, alt: "friendlyway Counter 22" },
      { src: "/wp-content/uploads/counter-22-close-up-1.webp", srcSet: "/wp-content/uploads/counter-22-close-up-1.webp 1x, /wp-content/uploads/counter-22-close-up@2x-1.webp 2x", width: 202, height: 554, alt: "friendlyway Counter 22" },
      { src: "/wp-content/uploads/counter-22-sketch.webp", srcSet: "/wp-content/uploads/counter-22-sketch.webp 1x, /wp-content/uploads/counter-22-sketch@2x.webp 2x", width: 460, height: 520, alt: "friendlyway Counter 22" },
    ],
    specifications: [
      { heading: "Hardware", items: ["21.5″ PCAP multitouch display with 250 cd/m² brightness", "Integrated PC: Intel Core i5, 16 GB RAM, 256 GB SSD", "Operating system: Windows 11 Professional", "5-megapixel camera", "QR code scanner", "Integrated speakers and microphone", "Connectivity: LAN, Wi-Fi 6, 5G modem", "Ports: USB 2.0, USB 3.0, HDMI, DisplayPort (DP), MIC-IN, LINE-OUT", "Integrated LED light frame", "External power supply"] },
      { heading: "Design", items: ["Display with black housing and an anti-glare glass surface", "Slim, powder-coated steel stand in black", "Modern, minimalist design with angled display for ergonomic operation", "Optional floor-mount installation", "VESA mount compatible (100×100, 200×200)"] },
      { heading: "Dimensions & Weight", items: ["Display tilt angle: 45°", "Height: 51” (130 cm), width: 13” (33 cm)", "Base plate (W × D): 18” x 12” (450 mm × 300 mm)", "Weight: 55 lbs (25 kg)"] },
    ],
    schema: {
      productId: "fw-counter-22",
      sku: "fw-counter-22",
      image: { src: "/wp-content/uploads/friendlyway-Counter-22.png", alt: "friendlyway Counter 22" },
      offer: { priceCurrency: "EUR", availability: "https://schema.org/InStock", itemCondition: "https://schema.org/NewCondition" },
    },
  },
  contact: {
    heading: "Contact Us",
    paragraphs: ["Ready to learn more? Please enter your contact information and a description of your specific needs or questions, and we will get back to you shortly."],
    profile: { name: "Dmitry Koshkin", role: "Managing Director", location: "friendlyway USA", portrait: { src: "/wp-content/uploads/foto.png", width: 216, height: 216, alt: "" } },
    form: {
      portalId: "50845293",
      formId: "1d974790-256b-4ef6-860e-bced18225498",
      region: "na1",
      formName: "Contact us",
      consentCategory: "functional",
    },
  },
  faq: [
    { question: "What are the typical applications for this kiosk?", answer: "This kiosk is primarily used as a compact self-service station at receptions. Common use cases include visitor registration, employee check-in, or communication via audio/video calls." },
    { question: "Can I integrate the kiosk with my access control system?", answer: "Yes, our platform can easily connect to company access systems, such as turnstiles, doors, or parking barriers, allowing access control to be directly managed via the kiosk." },
    { question: "What content can I display on the kiosk?", answer: "You can display a wide range of content. Our integrated CMS helps you publish not only presentations but also interactive workflows (ScreenFlows), service menus, or videos with ease." },
    { question: "What is the delivery and setup time?", answer: "Delivery times for the Counter 22 are provided upon request. The software comes pre-installed and is configured via the cloud-based friendlyway platform, enabling fast on-site setup." },
    { question: "Why choose friendlyway?", answer: "We offer more than just a device. You get a perfectly matched solution combining robust hardware, intuitive software, and reliable service. With over 25 years of experience and 25,000 installations in more than 70 countries, we deliver systems developed in Germany — from a partner who understands and fulfills your requirements." },
  ],
  relatedProducts: {
    heading: "Other Products",
    cards: [
      { title: "friendlyway Counter 12", image: { src: "/wp-content/uploads/friendlyway-counter-12.png", width: 445, height: 265, alt: "friendlyway Counter 12" } },
      { title: "friendlyway Luminum 43", href: "/products/luminum-43", image: { src: "/wp-content/uploads/luminum-445x265-min.png", width: 445, height: 265, alt: "luminum 43" } },
      { title: "friendlyway Impress 43", href: "/products/impress-43", image: { src: "/wp-content/uploads/impress43.png", width: 445, height: 265, alt: "" } },
      { title: "friendlyway Empire 22 Slim", href: "/products/empire-22-slim", image: { src: "/wp-content/uploads/empire-22-slim.jpg", width: 445, height: 265, alt: "" } },
    ],
    cta: { label: "See more products", href: "/kiosks-terminals-overview/" },
  },
} as const satisfies ProductContent;