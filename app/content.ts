import { customerTestimonials } from "@/content/testimonials";

import type { HomeContent } from "./types";

// Source of truth: legacy/index.html lines 1530–1575 (block-promo_style_1).
export const homeContent = {
  seo: {
    title: "friendlyway: Visitor Management, Digital Signage & Self-Service",
    description: "Best practices of self-service and digital content management, furnished into one cloud platform, fully integrated with kiosks and hardware solutions.",
    canonicalPath: "/",
    robots: { index: false, follow: false },
    socialImage: { src: "/wp-content/uploads/1200x630-min-9.jpg", width: 1200, height: 630, alt: "Why friendlyway" },
  },
  hero: {
    heading:
      "More Control, Less Effort: Modern Digital Experiences for Your Physical Locations",
    description:
      "Streamline check-in, enhance communication, and manage secure access – all with friendlyway’s powerful cloud platform and self-service kiosk solutions.",
    media: {
      src: "/wp-content/uploads/preview-mehr-effizienz.mp4",
      width: 1920,
      height: 1080,
      alt: "More Control, Less Effort: Modern Digital Experiences for Your Physical Locations",
    },
    actions: [
      { label: "START A 14-DAY FREE TRIAL", href: "/free-trial/", variant: "primary" },
      { label: "BOOK A DEMO", href: "#block-feedback_demo-form_2", variant: "secondary" },
    ],
  },
  clients: {
    heading: "Trusted by market leaders worldwide",
    logos: [
      { src: "/wp-content/uploads/logo-tvb-achensee.svg", width: 103, height: 49, alt: "Achensee" },
      { src: "/wp-content/uploads/publicsecurityand.svg", width: 185, height: 49, alt: "City of Munic Department of Public Security and Order" },
      { src: "/wp-content/uploads/millennium.svg", width: 168, height: 40, alt: "Millennium Group" },
      { src: "/wp-content/uploads/icon-bmw.svg", width: 56, height: 56, alt: "BMW" },
      { src: "/wp-content/uploads/icon-sixt.svg", width: 96, height: 40, alt: "SIXT" },
      { src: "/wp-content/uploads/icon-raiffeisen.svg", width: 51, height: 56, alt: "Raiffeisen" },
      { src: "/wp-content/uploads/PG_logo.svg", width: 81, height: 35, alt: "Procter&Gamble" },
      { src: "/wp-content/uploads/bosch-logo.svg", width: 157, height: 35, alt: "Bosch" },
      { src: "/wp-content/uploads/Kalkhoff-logo.svg", width: 207, height: 25, alt: "Kalkhoff" },
      { src: "/wp-content/uploads/duravit-logo.svg", width: 170, height: 40, alt: "Duravit" },
      { src: "/wp-content/uploads/logo-daimler-truck.svg", width: 213, height: 17, alt: "Daimler Truck" },
      { src: "/wp-content/uploads/logo-filtrox.png", width: 75, height: 75, alt: "Filtrox" },
      { src: "/wp-content/uploads/logo-hauser.png", width: 168, height: 29, alt: "Hauser" },
      { src: "/wp-content/uploads/logo-vopi.png", width: 80, height: 80, alt: "Volpi" },
      { src: "/wp-content/uploads/mw-logo.svg", width: 200, height: 35, alt: "Motorworld" },
      { src: "/wp-content/uploads/sparkasse-logo.svg", width: 158, height: 45, alt: "Sparkasse" },
    ],
  },
  onSiteSolutions: {
    heading: "Smart Solutions for Your On-Site Processes",
    cards: [
      {
        title: "Visitor management and access control",
        description: "Handle all types of visitors and manage access processes – efficiently and securely.",
        href: "/visitor-management-solution/",
        media: {
          src: "/wp-content/uploads/Self-Check-in-Besucherverwaltung.webp",
          srcSet: "/wp-content/uploads/Self-Check-in-Besucherverwaltung.webp 1x, /wp-content/uploads/Self-Check-in-Besucherverwaltung@2x.webp 2x",
          width: 560,
          height: 344,
          alt: "Visitor management and access control",
        },
      },
      {
        title: "Contingent workforce management",
        description: "Plan shifts and track the activities of temps, coordinating multiple staffing agencies.",
        href: "/multi-vendor-staffing-solution/",
        media: {
          src: "/wp-content/uploads/contingent-workforce-management.webp",
          srcSet: "/wp-content/uploads/contingent-workforce-management.webp 1x, /wp-content/uploads/contingent-workforce-management@2x.webp 2x",
          width: 560,
          height: 343,
          alt: "Contingent workforce management",
        },
      },
      {
        title: "Mustering and evacuation tracking",
        description: "Ensure every person is accounted for during emergencies.",
        href: "/emergency-mustering-evacuation-tracking/",
        media: {
          src: "/wp-content/uploads/mustering-and-evacuation-tracking.webp",
          srcSet: "/wp-content/uploads/mustering-and-evacuation-tracking.webp 1x, /wp-content/uploads/mustering-and-evacuation-tracking@2x.webp 2x",
          width: 560,
          height: 343,
          alt: "Mustering and evacuation tracking",
        },
      },
      {
        title: "Digital communication in public spaces",
        description: "Keep everyone informed with real-time updates and interactive signage.",
        href: "/friendlyway-digital-signage/",
        media: {
          src: "/wp-content/uploads/Promotion-Information-Interaktion.webp",
          srcSet: "/wp-content/uploads/Promotion-Information-Interaktion.webp 1x, /wp-content/uploads/Promotion-Information-Interaktion@2x.webp 2x",
          width: 560,
          height: 344,
          alt: "Digital communication in public spaces",
        },
      },
    ],
  },
  kiosks: {
    heading: "Explore Our Self-Service Kiosks",
    cards: [
      {
        title: "Counter 12",
        description: "Compact table-top kiosk for digital reception",
        href: "/kiosks-terminals-overview/",
        image: { src: "/wp-content/uploads/friendlyway-counter-12.png", width: 445, height: 265, alt: "Counter 12" },
      },
      {
        title: "Empire 22 Slim",
        description: "Sleek kiosk for lobbies or production areas",
        href: "/products/empire-22-slim/",
        image: { src: "/wp-content/uploads/empire-22-slim.jpg", width: 445, height: 265, alt: "Empire 22 Slim" },
      },
      {
        title: "Impress 43",
        description: "Large-screen kiosk for service applications",
        href: "/products/impress-43/",
        image: { src: "/wp-content/uploads/impress43.png", width: 445, height: 265, alt: "Impress 43" },
      },
      {
        title: "Luminum 43",
        description: "Ergonomic kiosk for modern engagement",
        href: "/products/luminum-43/",
        image: { src: "/wp-content/uploads/luminum-445x265-min.png", width: 445, height: 265, alt: "Luminum 43" },
      },
    ],
    cta: { label: "VIEW ALL PRODUCTS", href: "/kiosks-terminals-overview/" },
  },
  cloudPlatform: {
    heading: "friendlyway Cloud Platform for Managing On-Site Experiences",
    description: "Effortlessly design interactive experiences at your points of service and work.",
    slides: [
      {
        id: "playlists",
        label: "Play multimedia playlists",
        description: "Upload content and play it on thousands of devices.",
        media: { src: "/wp-content/uploads/1-Run_multimedia_playlist.jpg", width: 730, height: 488, alt: "Play multimedia playlists" },
      },
      {
        id: "screenflows",
        label: "Create interactive screenflows",
        description: "Choose from pre-made content or create your visitor workflows.",
        media: { src: "/wp-content/uploads/create-interactive-scenarios.jpg", width: 730, height: 488, alt: "" },
      },
      {
        id: "schedule",
        label: "Schedule playback",
        description: "Set your playback schedule in a simple user interface.",
        media: {
          src: "/wp-content/uploads/Schedule-multi-store-playback.webp",
          srcSet: "/wp-content/uploads/Schedule-multi-store-playback.webp 1x, /wp-content/uploads/Schedule-multi-store-playback@2x.webp 2x",
          width: 720,
          height: 481,
          alt: "Schedule playback",
        },
      },
      {
        id: "analytics",
        label: "Collect and analyze data",
        description: "Centralize your data management. Collect usage statistics from your devices.",
        media: { src: "/wp-content/uploads/4-Collect_data.jpg", width: 730, height: 488, alt: "Collect data" },
      },
      {
        id: "devices",
        label: "Control all devices centrally",
        description: "Monitor device usage and performance remotely.",
        media: { src: "/wp-content/uploads/leverage-reporting-and-integrations.jpg", width: 730, height: 488, alt: "" },
      },
    ],
    cta: { label: "SCHEDULE A DEMO", href: "#block-feedback_demo-form_2" },
  },
  integrations: {
    heading: "Seamless integration with the tools you already use",
    logos: [
      { label: "Microsoft 365", image: { src: "/wp-content/uploads/logo-microsoft-365-copilot.svg", width: 72, height: 73, alt: "Microsoft 365" } },
      { label: "Microsoft SharePoint", image: { src: "/wp-content/uploads/logo-microsoft-sharepoint.svg", width: 74, height: 73, alt: "Microsoft SharePoint" } },
      { label: "Microsoft Teams", image: { src: "/wp-content/uploads/logo-microsoft-office-teams.svg", width: 78, height: 73, alt: "Microsoft Teams" } },
      { label: "Microsoft Outlook", image: { src: "/wp-content/uploads/logo-microsoft-office-outlook.svg", width: 78, height: 73, alt: "Microsoft Outlook" } },
      { label: "Microsoft Entra ID", image: { src: "/wp-content/uploads/logo-microsoft-entra-id.svg", width: 80, height: 73, alt: "Microsoft Entra ID" } },
      { label: "Google Calendar", image: { src: "/wp-content/uploads/logo-google-calendar.svg", width: 72, height: 73, alt: "Google Calendar" } },
      { label: "Google Drive", image: { src: "/wp-content/uploads/logo-google-drive.svg", width: 82, height: 73, alt: "Google Drive" } },
    ],
  },
  whyFriendlyway: {
    heading: "Why friendlyway?",
    items: [
      {
        icon: { src: "/wp-content/uploads/icon-easy.svg", width: 61, height: 60, alt: "" },
        description: [{ type: "paragraph", content: [{ type: "strong", text: "25+ years of innovation" }, " in kiosk and digital signage solutions"] }],
      },
      {
        icon: { src: "/wp-content/uploads/Integrations.svg", width: 72, height: 61, alt: "" },
        description: [{ type: "paragraph", content: [{ type: "strong", text: "All-in-one platform:" }, " hardware and software integration"] }],
      },
      {
        icon: { src: "/wp-content/uploads/icon-drag-drop.svg", width: 60, height: 60, alt: "" },
        description: [{ type: "paragraph", content: [{ type: "strong", text: "Modular and scalable" }, " – from single-site to global rollouts"] }],
      },
      {
        icon: { src: "/wp-content/uploads/icon-guarantee.svg", width: 64, height: 65, alt: "" },
        description: [{ type: "paragraph", content: [{ type: "strong", text: "Made in Germany" }, ", with the tech and security you can trust"] }],
      },
    ],
  },
  testimonials: {
    heading: "What Our Customers Say",
    items: [
      {
        logo: { src: "/wp-content/uploads/logo-hochschwarzwald-1.svg", width: 238, height: 106, alt: "" },
        quote: "\u201cOur entire team was genuinely impressed by the collaborative partnership with friendlyway\u2014not only as a supplier of interactive info kiosks and software but also for their professional execution and seamless integration with our partner systems. The new service points have been very appreciated by both our guests and regional partners. We\u2019re excited to continue expanding our digital services and look forward to further collaboration with the friendlyway team.\u201d",
        author: {
          name: "Felix J\u00e4gler",
          role: "Head of Guest Services, Hochschwarzwald Tourism",
          portrait: { src: "/wp-content/uploads/Felix-Jaegler.png", width: 70, height: 70, alt: "" },
        },
        metrics: [
          { value: "3.8 million", label: "overnight stays per year" },
          { value: "24/7", label: "system availability" },
        ],
        details: [
          { heading: "friendlyway solutions", items: ["Digital Signage", "Wayfinding and Visitor Guidance"] },
          { heading: "Industry", items: ["Travel & Hospitality"] },
        ],
      },
      customerTestimonials.baywa,
      customerTestimonials.inprotec,
      customerTestimonials.millennium,
      {
        logo: { src: "/wp-content/uploads/logo-tvb-achensee-1.svg", width: 237, height: 99, alt: "Achensee logo" },
        quote: "\u201cAchensee Tourism was looking for a solution provider with the unique expertise and capability to deliver both digital signage software and kiosk hardware \u2014 friendlyway not only met our requirements but fully exceeded them. We needed a cloud-based platform that was intuitive, easy to use, and capable of offering users a modern digital visitor experience with self-service and interactive functions, and friendlyway\u2019s solution offering was the best option on the market.\u201d",
        author: {
          name: "Patrick Benko",
          role: "Digital media, design & print, Achensee Tourism",
          portrait: { src: "/wp-content/uploads/Screenshot-2022-09-07-at-15.50-1-min.png", width: 70, height: 70, alt: "" },
        },
        metrics: [
          { value: "2X improvement", label: "in operational costs for customer support teams" },
          { value: "Over 1,6 mln", label: "satisfied visitors per year" },
        ],
        details: [
          { heading: "friendlyway solutions", items: ["Digital Signage", "Wayfinding and Visitor Guidance"] },
          { heading: "Industry", items: ["Travel & Hospitality"] },
        ],
        action: { label: "See Case Study", href: "/case-studies/interactive-terminals-for-achensee" },
      },
      {
        logo: { src: "/wp-content/uploads/union.png", width: 237, height: 58, alt: "" },
        quote: "\u201cThe project for Munich\u2019s City Government Service Center featured a large-scale deployment of over 290 friendlyway\u2019s digital signage devices and several software modules of the cloud platform. friendlyway successfully implemented this custom hardware and software solution that optimized and transformed the Service Center\u2019s ability to deliver modern, efficient digital visitor experiences to thousands of daily visitors.\u201d",
        author: {
          name: "Anton Dechko",
          role: "Managing Director, friendlyway Germany",
          portrait: { src: "/wp-content/uploads/photo-80px-1.png", width: 70, height: 70, alt: "" },
        },
        metrics: [
          { value: "Up to 5,000", label: "visitors per day" },
          { value: "43,000+ sq. foot", label: "administrative building" },
        ],
        details: [
          { heading: "friendlyway solutions", items: ["Digital Signage", "Wayfinding and Visitor Guidance"] },
          { heading: "Industry", items: ["Public Sector"] },
        ],
        action: { label: "See Case Study", href: "/case-studies/munich-government-service-center" },
      },
    ],
  },
  customerStories: {
    heading: "Proven Success and Measurable Results Across Industries",
    description: "We offer tailored solutions for every environment where people move, work, and interact.",
    categories: ["Manufacturing", "Retail", "Public Sector", "Tourism & Hospitality"],
    stories: [
      {
        category: "Manufacturing",
        title: "Visitor Management Automation for inprotec \u2014 Powder and Granulate Manufacturer",
        image: { src: "/wp-content/uploads/fly-images/24291/fw-inprotec-357x208-c.webp", width: 357, height: 208, alt: "Visitor Management Automation for inprotec \u2014 Powder and Granulate Manufacturer" },
        href: "/case-studies/visitor-management-for-inprotec",
      },
      {
        category: "Manufacturing",
        title: "Automated Contingent Labor Management and Visitor Registration for Millennium Print Group",
        image: { src: "/wp-content/uploads/fly-images/6457/mil-print2-min-357x208-c.jpg", width: 357, height: 208, alt: "Automated Contingent Labor Management and Visitor Registration for Millennium Print Group" },
      },
      {
        category: "Manufacturing",
        title: "Visitor Management, Employee Self-Service, and Digital Signage for an Electric Bike Manufacturer",
        image: { src: "/wp-content/uploads/fly-images/24124/A-Premium-E-Bike-Brand-357x208-c.webp", width: 357, height: 208, alt: "Visitor Management, Employee Self-Service, and Digital Signage for an Electric Bike Manufacturer" },
      },
      {
        category: "Manufacturing",
        title: "Flawless Management of Visits and Truck Entrances for a Global FMCG Manufacturer",
        image: { src: "/wp-content/uploads/fly-images/22683/A-Global-FMCG-Manufacturer-357x208-c.png", width: 357, height: 208, alt: "Flawless Management of Visits and Truck Entrances for a Global FMCG Manufacturer" },
      },
      {
        category: "Retail",
        title: "BayWa DIY Stores Rely on Self-Service Kiosks for Live Video Support and Payments at Checkout",
        image: { src: "/wp-content/uploads/fly-images/25760/fw-featured-image-baywa-1-2-357x208-c.webp", width: 357, height: 208, alt: "BayWa DIY Stores Rely on Self-Service Kiosks for Live Video Support and Payments at Checkout" },
        href: "/case-studies/video-and-payment-kiosk-for-baywa",
      },
      {
        category: "Public Sector",
        title: "Digital Signage and Automated Visitor Navigation for Munich Government Service Center",
        image: { src: "/wp-content/uploads/fly-images/622/image-29-357x208-c.jpg", width: 357, height: 208, alt: "Digital Signage and Automated Visitor Navigation for Munich Government Service Center" },
        href: "/case-studies/munich-government-service-center",
      },
      {
        category: "Tourism & Hospitality",
        title: "Kiosks with Video Calling, Signage, and Navigation for Achensee \u2014 Austrian Resort Destination",
        image: { src: "/wp-content/uploads/fly-images/625/achense-357x208-c.jpg", width: 357, height: 208, alt: "Kiosks with Video Calling, Signage, and Navigation for Achensee \u2014 Austrian Resort Destination" },
        href: "/case-studies/interactive-terminals-for-achensee",
      },
      {
        category: "Tourism & Hospitality",
        title: "Interactive Kiosks Enhance Guest Experience in Hochschwarzwald \u2014 Germany\u2019s Beloved Vacation Region",
        image: { src: "/wp-content/uploads/fly-images/25850/Ausblick-vom-Hochfirst-nach-Titisee-357x208-c.webp", width: 357, height: 208, alt: "Interactive Kiosks Enhance Guest Experience in Hochschwarzwald \u2014 Germany\u2019s Beloved Vacation Region" },
        href: "/case-studies/interactive-kiosks-for-hochschwarzwald",
      },
      {
        category: "Manufacturing",
        title: "Digital Check-in on Tablet for CWS Cleanrooms",
        image: { src: "/wp-content/uploads/fly-images/26462/CWS-Counter-12-Tablet-357x208-c.webp", width: 357, height: 208, alt: "Digital Check-in on Tablet for CWS Cleanrooms" },
        href: "/case-studies/success-story-cws-cleanrooms-digital-visitor-management",
      },
      {
        category: "Public Sector",
        title: "Securing Critical Infrastructure for SWM \u2013 Munich\u2019s Municipal Utilities Company",
        image: { src: "/wp-content/uploads/fly-images/26667/featured-image-kritis-konformes-besuchermanagement-fuer-die-stadtwerke-muenchen-357x208-c.webp", width: 357, height: 208, alt: "Securing Critical Infrastructure for SWM \u2013 Munich\u2019s Municipal Utilities Company" },
        href: "/case-studies/visitor-management-for-stadtwerke-muenchen",
      },
      {
        category: "Public Sector",
        title: "Visitor Management for Critical Infrastructure Operator Stadtwerke Osnabr\u00fcck",
        image: { src: "/wp-content/uploads/fly-images/27026/shared-image-14-1-357x208-c.webp", width: 357, height: 208, alt: "Visitor Management for Critical Infrastructure Operator Stadtwerke Osnabr\u00fcck" },
        href: "/case-studies/visitor-management-for-stadtwerke-osnabrueck",
      },
      {
        category: "Manufacturing",
        title: "Visitor Registration at Manufacturing Facilities of Poly-clip System",
        image: { src: "/wp-content/uploads/fly-images/624/image-33-357x208-c.jpg", width: 357, height: 208, alt: "Visitor Registration at Manufacturing Facilities of Poly-clip System" },
      },
      {
        category: "Tourism & Hospitality",
        title: "Welcoming and Guiding Visitors at Motorworld M\u00fcnchen",
        image: { src: "/wp-content/uploads/fly-images/26451/motorworld-357x208-c.jpg", width: 357, height: 208, alt: "Welcoming and Guiding Visitors at Motorworld M\u00fcnchen" },
      },
    ],
  },
  insightsAndNews: {
    heading: "Insights and News",
    description:
      "Discover the latest trends in digital signage, innovative visitor management strategies, and insights into self-service kiosk technologies.",
    articles: [
      {
        title: "Meet friendlyway at GSX 2026 in Atlanta",
        href: "/meet-friendlyway-at-gsx-2026",
        dateLabel: "Jun 11, 2026",
        dateTime: "2026-06-11",
        media: { src: "/wp-content/uploads/890x530.webp", width: 890, height: 530, alt: "Meet friendlyway at GSX 2026 in Atlanta" },
      },
      {
        title: "Secure Every Entry: Smarter Visitor and Workforce Access Management for Manufacturing",
        href: "/visitor-and-workforce-access-management-for-manufacturing",
        dateLabel: "Feb 27, 2026",
        dateTime: "2026-02-27",
        media: { src: "/wp-content/uploads/title-890x530-11.webp", width: 890, height: 530, alt: "Visitor and Workforce Access Management for Manufacturing" },
      },
      {
        title: "What Are Visitor Check-In Systems?",
        href: "/what-are-visitor-check-in-systems",
        dateLabel: "Feb 16, 2026",
        dateTime: "2026-02-16",
        media: { src: "/wp-content/uploads/title-890x530-10.webp", width: 890, height: 530, alt: "What Are Visitor Check-In Systems?" },
      },
    ],
    cta: { label: "VIEW MORE NEWS", href: "/news/" },
  },
  liveDemo: {
    id: "block-feedback_demo-form_2",
    heading: "Live Demo",
    description:
      "Whether you're managing visitors or employees, friendlyway provides the right tools to help you do it smarter. Fill out the form to request a live demo of our solutions.",
    media: {
      src: "/wp-content/uploads/hardware-and-platform-image.webp",
      srcSet:
        "/wp-content/uploads/hardware-and-platform-image.webp 1x, /wp-content/uploads/hardware-and-platform-image@2x.webp 2x",
      width: 480,
      height: 416,
      alt: "",
    },
    form: {
      portalId: "50845293",
      formId: "1d974790-256b-4ef6-860e-bced18225498",
      region: "na1",
      formName: "Live Demo",
      consentCategory: "functional",
    },
  },
} satisfies HomeContent;
