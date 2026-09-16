import type { NavigationNode } from "@/lib/navigation";

export interface MediaAsset {
  readonly src: string;
  readonly alt: string;
  readonly width?: number;
  readonly height?: number;
  readonly srcSet?: string;
}

export interface NavigationItem extends NavigationNode {
  readonly label: string;
  readonly description?: string;
  readonly media?: MediaAsset;
  readonly children?: readonly NavigationItem[];
}

export interface SiteLink {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
  readonly primaryAction?: boolean;
}

export interface SiteLocale extends SiteLink {
  readonly current?: boolean;
  readonly flag: MediaAsset;
}

export interface FooterAddress {
  readonly name: string;
  readonly legalName?: string;
  readonly descriptionLines: readonly string[];
}

export interface FooterContactMethod {
  readonly name: string;
  readonly hours?: string;
  readonly href: string;
  readonly value: string;
}

export interface FooterSocialLink extends SiteLink {
  readonly icon: "facebook" | "youtube" | "linkedin";
}

export interface FooterContent {
  readonly addresses: readonly FooterAddress[];
  readonly contactMethods: readonly FooterContactMethod[];
  readonly socialLinks: readonly FooterSocialLink[];
  readonly columns: readonly { readonly title: string; readonly links: readonly SiteLink[] }[];
  readonly legalLinks: readonly SiteLink[];
  readonly copyright: string;
}

export interface WelcomeBannerContent {
  readonly release: string;
  readonly href: string;
  readonly image: MediaAsset;
  readonly title: string;
  readonly details: string;
  readonly actionLabel: string;
}

export const siteContent = {
  welcomeBanner: {
    release: "1785931796",
    href: "/meet-friendlyway-at-gsx-2026",
    image: {
      src: "/wp-content/uploads/logo-gsx-2026.png",
      srcSet: "/wp-content/uploads/logo-gsx-2026.png 1x, /wp-content/uploads/logo-gsx-2026@2x.png 2x",
      width: 75,
      height: 24,
      alt: "Meet friendlyway at GSX 2026",
    },
    title: "Meet friendlyway at GSX 2026!",
    details: "🔐 September 14-16, Georgia World Congress Center, Atlanta, Booth 4146.",
    actionLabel: "Learn more",
  },
  brand: {
    name: "friendlyway",
    logo: {
      src: "/wp-content/uploads/friendlyway.svg",
      alt: "friendlyway",
      width: 289,
      height: 76,
    },
  },
  contactCta: { label: "Contact", href: "/contact-us" },
  phone: { label: "+1 857 777 60 73", href: "tel:+18577776073" },
  utilityLinks: [
    { label: "Customer Support", href: "https://helpdesk.friendlyway.com/en/support/home", external: true },
    { label: "Contact", href: "/contact-us" },
    { label: "Login", href: "https://cloud.friendlyway.us/#/auth", external: true },
    { label: "Free Trial", href: "/free-trial", primaryAction: true },
  ],
  locales: [
    { label: "US", href: "/", current: true, flag: { src: "/wp-content/uploads/united-kingdom-2.svg", alt: "United States", width: 16, height: 16 } },
    { label: "EU", href: "https://www.friendlyway.com/", external: true, flag: { src: "/wp-content/uploads/eu-en.svg", alt: "European Union", width: 16, height: 16 } },
    { label: "DE", href: "https://www.friendlyway.de/", external: true, flag: { src: "/wp-content/uploads/germany.svg", alt: "Germany", width: 16, height: 16 } },
    { label: "PL", href: "https://friendlyway.pl/", external: true, flag: { src: "/wp-content/uploads/poland.svg", alt: "Poland", width: 16, height: 16 } },
    { label: "IT", href: "https://friendlyway.it/", external: true, flag: { src: "/wp-content/uploads/italy.svg", alt: "Italy", width: 16, height: 16 } },
  ],
  navigation: [
    {
      id: "solutions",
      label: "Solutions",
      children: [
        {
          id: "visitor-security",
          label: "Visitor & Security",
          media: { src: "/wp-content/uploads/icon-vm.svg", alt: "Visitor & Security", width: 24, height: 25 },
          children: [
            { id: "visitor-management", label: "Visitor Management", href: "/visitor-management-solution", description: "Streamline check-in and compliance" },
            { id: "visitor-analytics", label: "Visitor Analytics", href: "/ai-assistant-for-visitor-analytics", description: "Leverage AI insights into visitor flows" },
          ],
        },
        {
          id: "workforce-safety",
          label: "Workforce & Safety",
          media: { src: "/wp-content/uploads/icon-users.svg", alt: "Workforce & Safety", width: 24, height: 24 },
          children: [
            { id: "contingent-workforce", label: "Contingent Workforce Management", href: "/multi-vendor-staffing-solution", description: "Consolidate multi-agency staffing" },
            { id: "emergency-mustering", label: "Emergency Mustering", href: "/emergency-mustering-evacuation-tracking", description: "Accelerate roll-call accountability" },
          ],
        },
        {
          id: "communication-service",
          label: "Communication & Service",
          media: { src: "/wp-content/uploads/icon-services.svg", alt: "Communication & Service", width: 24, height: 24 },
          children: [
            { id: "digital-signage", label: "Digital Signage", href: "/friendlyway-digital-signage", description: "Deliver targeted onsite messaging" },
            { id: "wayfinding", label: "Wayfinding", href: "/wayfinding-software", description: "Guide visitors to destinations" },
            { id: "onsite-video", label: "Onsite Video Assistance", href: "/video-chat-for-customer-service", description: "Connect guests to expert staff" },
          ],
        },
        {
          id: "solutions-by-industry",
          label: "By Industry",
          children: [
            { id: "manufacturing", label: "Manufacturing", href: "/solutions-for-manufacturing", media: { src: "/wp-content/uploads/icon-manufacturing-2.svg", alt: "Manufacturing", width: 24, height: 24 } },
            { id: "public-sector", label: "Public Sector", href: "/visitor-management-government-public-sector", media: { src: "/wp-content/uploads/icon-public-sector-1-1.svg", alt: "Public Sector", width: 24, height: 24 } },
            { id: "tourism", label: "Tourism & Hospitality", href: "/solutions-for-tourism-travel-hospitality", media: { src: "/wp-content/uploads/icon-tourism-1.svg", alt: "Tourism & Hospitality", width: 24, height: 24 } },
            { id: "all-industries", label: "See all industries", href: "/solutions", media: { src: "/wp-content/uploads/icons-industries.svg", alt: "See all industries", width: 24, height: 24 } },
          ],
        },
      ],
    },
    {
      id: "software",
      label: "Software",
      children: [
        { id: "software-intro", label: "Software", description: "Everything you need for smart visitor experiences - on one trusted platform" },
        { id: "cloud-platform", label: "friendlyway Cloud Platform", href: "/friendlyway-cloud-platform", media: { src: "/wp-content/uploads/friendlyway-cloud-platform-1.webp", srcSet: "/wp-content/uploads/friendlyway-cloud-platform@2x-1.webp 2x", alt: "friendlyway Cloud Platform", width: 254, height: 144 } },
        { id: "integrations", label: "Integrations", href: "/integrations", media: { src: "/wp-content/uploads/integrations.webp", srcSet: "/wp-content/uploads/integrations@2x.webp 2x", alt: "Integrations", width: 254, height: 144 } },
        { id: "add-ons", label: "Useful Add-Ons", href: "/add-ons-software", media: { src: "/wp-content/uploads/useful-add-ons.webp", srcSet: "/wp-content/uploads/useful-add-ons@2x.webp 2x", alt: "Useful Add-Ons", width: 254, height: 144 } },
      ],
    },
    {
      id: "hardware",
      label: "Hardware",
      href: "/kiosks-terminals-overview",
      children: [
        { id: "hardware-overview", label: "Overview", href: "/kiosks-terminals-overview" },
        { id: "counter-22", label: "Counter 22", href: "/products/counter-22", description: "Tablet Kiosk with LED Light Status Frame", media: { src: "/wp-content/uploads/counter-22.webp", srcSet: "/wp-content/uploads/counter-22@2x.webp 2x", alt: "Counter 22", width: 80, height: 80 } },
        { id: "empire-22-slim", label: "Empire 22 Slim", href: "/products/empire-22-slim", description: "Sleek Kiosk for Lobbies or Production Areas", media: { src: "/wp-content/uploads/Impress-43-2.webp", srcSet: "/wp-content/uploads/Impress-43@2x-2.webp 2x", alt: "Empire 22 Slim", width: 80, height: 80 } },
        { id: "empire-22-deep", label: "Empire 22 Deep", href: "/products/empire-22-deep", description: "Midweight Kiosk Balancing Modularity and Utility", media: { src: "/wp-content/uploads/Impress-43.png", srcSet: "/wp-content/uploads/Impress-43@2x.png 2x", alt: "Empire 22 Deep", width: 80, height: 80 } },
        { id: "empire-22-pro", label: "Empire 22 Pro", href: "/products/empire-22-pro-kiosk", description: "Versatile Kiosk for Any Business Application", media: { src: "/wp-content/uploads/Impress-43-3.webp", srcSet: "/wp-content/uploads/Impress-43@2x-3.webp 2x", alt: "Empire 22 Pro", width: 80, height: 80 } },
        { id: "luminum-43", label: "Luminum 43", href: "/products/luminum-43", description: "Ergonomic Kiosk for Modern Digital Engagement", media: { src: "/wp-content/uploads/Luminum-43-1-1.webp", srcSet: "/wp-content/uploads/Luminum-43@2x-1-1.webp 2x", alt: "Luminum 43", width: 80, height: 80 } },
        { id: "impress-43", label: "Impress 43", href: "/products/impress-43", description: "Premium Kiosk for Interactive Visitor Experiences", media: { src: "/wp-content/uploads/Impress-43-4.webp", srcSet: "/wp-content/uploads/Impress-43@2x-4.webp 2x", alt: "Impress 43", width: 80, height: 80 } },
      ],
    },
    {
      id: "industries",
      label: "Industries",
      href: "/solutions",
      children: [
        { id: "manufacturing-infrastructure", label: "Manufacturing and Infrastructure", children: [
          { id: "general-manufacturing", label: "General Manufacturing", href: "/solutions-for-manufacturing", media: { src: "/wp-content/uploads/icon-general-manufacturing.svg", alt: "General Manufacturing", width: 24, height: 24 } },
          { id: "pulp-paper", label: "Pulp and Paper", href: "/safety-solutions-for-pulp-and-paper", media: { src: "/wp-content/uploads/icon-pulp-and-paper.svg", alt: "Pulp and Paper", width: 24, height: 24 } },
          { id: "construction", label: "Construction", href: "/construction-site-visitor-workforce-management", media: { src: "/wp-content/uploads/icon-construction.svg", alt: "Construction", width: 24, height: 24 } },
          { id: "ai-data-centers", label: "AI Data Centers", href: "/visitor-management-ai-data-centers", media: { src: "/wp-content/uploads/icon-data-center.svg", alt: "AI Data Centers", width: 24, height: 24 } },
        ] },
        { id: "government", label: "Government and Public Institutions", children: [
          { id: "government-public-sector", label: "Public Sector", href: "/visitor-management-government-public-sector", media: { src: "/wp-content/uploads/icon-public-sector.svg", alt: "Public Sector", width: 24, height: 24 } },
          { id: "judiciary", label: "Judiciary", href: "/self-service-solutions-for-courts", media: { src: "/wp-content/uploads/icon-judiciary.svg", alt: "Judiciary", width: 24, height: 24 } },
          { id: "education", label: "Education", href: "/visitor-management-educational-institutions", media: { src: "/wp-content/uploads/icon-education.svg", alt: "Education", width: 24, height: 24 } },
        ] },
        { id: "commercial-services", label: "Commercial and Service Industries", children: [
          { id: "retail", label: "Retail", href: "/retail-digital-signage-software-and-solutions", media: { src: "/wp-content/uploads/icon-retail.svg", alt: "Retail", width: 24, height: 24 } },
          { id: "tourism-hospitality", label: "Tourism and Hospitality", href: "/solutions-for-tourism-travel-hospitality", media: { src: "/wp-content/uploads/icon-tourism-and-hospitality.svg", alt: "Tourism and Hospitality", width: 24, height: 24 } },
          { id: "trade-shows", label: "Trade Shows and Events", href: "/digital-signage-for-trade-shows-and-showrooms", media: { src: "/wp-content/uploads/icon-trade-shows-and-events.svg", alt: "Trade Shows and Events", width: 24, height: 24 } },
          { id: "sports-venues", label: "Sports Venues and Arenas", href: "/friendlyway-solutions-for-sports-events-arenas", media: { src: "/wp-content/uploads/icon-sports-venues-and-arenas.svg", alt: "Sports Venues and Arenas", width: 24, height: 24 } },
        ] },
      ],
    },
    { id: "pricing", label: "Pricing", children: [
      { id: "visitor-pricing", label: "Visitor Management Pricing Plans", href: "/pricing" },
      { id: "signage-pricing", label: "Digital Signage Pricing Plans", href: "/pricing-digital-signage" },
    ] },
    { id: "resources", label: "Resources", children: [
      { id: "success-stories", label: "Success Stories", href: "/case-studies" },
      { id: "industry-insights", label: "Industry Insights", href: "/news" },
      { id: "company-news", label: "Company News", href: "/author/friendlyway-team/" },
    ] },
    { id: "about-us", label: "About Us", href: "/about-us" },
  ],
  footer: {
    addresses: [
      { name: "friendlyway USA", descriptionLines: ["83 Morse Street, Building 6,", "Norwood, MA 02062 United States"] },
      { name: "friendlyway Germany", legalName: "SaM Digital Solutions GmbH", descriptionLines: ["Römerstrasse 32", "82205 Gilching, Deutschland"] },
      { name: "friendlyway Polska", descriptionLines: ["Żelazna street 59 Warszawa,", "00-848, Poland"] },
    ],
    contactMethods: [
      { name: "Sales (USA)", hours: "Mon–Fri: 9 AM – 5 PM (ET)", href: "tel:+18577776073", value: "+1 857 777 60 73" },
      { name: "Sales (Global)", hours: "Mon–Fri: 9 AM – 5 PM (CET)", href: "tel:+498958804440", value: "+49 89 58 80 44 40" },
      { name: "Fax", href: "tel:+4989588044419", value: "+49 89 58 80 44 41 9" },
    ],
    socialLinks: [
      { label: "Facebook", href: "https://www.facebook.com/friendlyway/", external: true, icon: "facebook" },
      { label: "YouTube", href: "https://www.youtube.com/channel/UComq8hdFBW8PszOy9xQ1GrA", external: true, icon: "youtube" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/friendlyway/", external: true, icon: "linkedin" },
    ],
    columns: [
      { title: "Company", links: [
        { label: "About Us", href: "/about-us" }, { label: "friendlyway Blog", href: "/news" },
        { label: "Cases", href: "/case-studies/" }, { label: "Support", href: "https://helpdesk.friendlyway.com/en/support/home", external: true },
        { label: "Contact", href: "/contact-us" }, { label: "Status", href: "https://status.friendlyway.com/", external: true },
      ] },
      { title: "Explore", links: [
        { label: "friendlyway Cloud Platform", href: "/friendlyway-cloud-platform" }, { label: "friendlyway Kiosks", href: "/kiosks-terminals-overview" },
        { label: "Digital Signage Software", href: "/friendlyway-digital-signage/" }, { label: "Visitor Management System", href: "/visitor-management-solution" },
        { label: "Contingent Workforce Management Solution", href: "/multi-vendor-staffing-solution" },
      ] },
    ],
    legalLinks: [
      { label: "Privacy and Responsibility", href: "/privacy-and-responsibility" },
      { label: "Return Policy", href: "/return-policy" },
    ],
    copyright: "© 1998–2026 friendlyway. Digital signage & self-service solutions since 1998.",
  },
} as const satisfies {
  readonly brand: { readonly name: string; readonly logo: MediaAsset };
  readonly welcomeBanner: WelcomeBannerContent;
  readonly contactCta: SiteLink;
  readonly phone: SiteLink;
  readonly utilityLinks: readonly SiteLink[];
  readonly locales: readonly SiteLocale[];
  readonly navigation: readonly NavigationItem[];
  readonly footer: FooterContent;
};