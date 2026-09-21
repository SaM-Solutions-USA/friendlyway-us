import type { PricingContent } from "./types";

const luminum = {
  name: "friendlyway Luminum 43 Kiosk", href: "/products/luminum-43/", price: "from $3,750 USD*",
  image: { src: "/wp-content/uploads/Luminum-Kiosk.webp", srcSet: "/wp-content/uploads/Luminum-Kiosk.webp 1x, /wp-content/uploads/Luminum-Kiosk@2x.webp 2x", width: 320, height: 312, alt: "Luminum Kiosk" },
};

const empireSlim = {
  name: "friendlyway Empire 22 Slim Kiosk", href: "/products/empire-22-slim/", price: "from $4,000 USD*",
  image: { src: "/wp-content/uploads/Empire-22-Slim-Kiosk.webp", srcSet: "/wp-content/uploads/Empire-22-Slim-Kiosk.webp 1x, /wp-content/uploads/Empire-22-Slim-Kiosk@2x.webp 2x", width: 320, height: 312, alt: "Empire 22 Slim Kiosk" },
};

const impress = {
  name: "friendlyway Impress 43 Kiosk", href: "/products/impress-43/", price: "from $5,200 USD*",
  image: { src: "/wp-content/uploads/Impress-Kiosk.webp", srcSet: "/wp-content/uploads/Impress-Kiosk.webp 1x, /wp-content/uploads/Impress-Kiosk@2x.webp 2x", width: 320, height: 318, alt: "Impress Kiosk" },
};

const empireDeep = {
  name: "friendlyway Empire 22 Deep Kiosk", href: "/products/empire-22-deep/", price: "from $4,500 USD*",
  image: { src: "/wp-content/uploads/Empire-22-Deep-Kiosk.webp", srcSet: "/wp-content/uploads/Empire-22-Deep-Kiosk.webp 1x, /wp-content/uploads/Empire-22-Deep-Kiosk@2x.webp 2x", width: 320, height: 312, alt: "Empire 22 Deep Kiosk" },
};

const empirePro = {
  name: "friendlyway Empire 22 Pro Kiosk", href: "/products/empire-22-pro-kiosk/", price: "from $7,200 USD*",
  image: { src: "/wp-content/uploads/Empire-22-Pro-Kiosk.webp", srcSet: "/wp-content/uploads/Empire-22-Pro-Kiosk.webp 1x, /wp-content/uploads/Empire-22-Pro-Kiosk@2x.webp 2x", width: 320, height: 312, alt: "Empire 22 Pro Kiosk" },
};

const accessManagement = {
  name: "Access Management Systems", price: "Inquire for price",
  image: { src: "/wp-content/uploads/Access-management-systems.webp", srcSet: "/wp-content/uploads/Access-management-systems.webp 1x, /wp-content/uploads/Access-management-systems@2x.webp 2x", width: 320, height: 312, alt: "Access management systems" },
};

const portableScanStation = {
  name: "Portable Scan Station", price: "from $2,350 USD*",
  image: { src: "/wp-content/uploads/Portable-scan-stations.webp", srcSet: "/wp-content/uploads/Portable-scan-stations.webp 1x, /wp-content/uploads/Portable-scan-stations@2x.webp 2x", width: 320, height: 312, alt: "Portable scan stations" },
};

const biometricAccess = {
  name: "Biometric Access Devices", price: "Inquire for price",
  image: { src: "/wp-content/uploads/biometric.webp", srcSet: "/wp-content/uploads/biometric.webp 1x, /wp-content/uploads/biometrics@2x.webp 2x", width: 320, height: 312, alt: "" },
};

export const pricingContent = {
  seo: {
    title: "Pricing Plans for Visitor Management - friendlyway",
    description: "Explore flexible visitor management plans with friendlyway - tailored solutions for managing site security, safety, and compliance across multiple facilities.",
    canonicalPath: "/pricing",
    robots: { index: false, follow: false },
    socialImage: { src: "/wp-content/uploads/Rich-Snippet-Pricing-US.png", width: 1200, height: 630, alt: "Pricing Plans - friendlyway Visitor Management" },
  },
  introduction: {
    heading: "Pricing Plans for friendlyway Visitor Management",
    description: "Visitor management systems help organizations efficiently manage visitor entry and tracking, enhancing security and streamlining visitor experiences.",
  },
  plans: [
    { id: "starter", name: "Starter", description: "Simple off-the-shelf process for a quick start", price: "$75", period: "Per kiosk/month*", features: ["Creating events, inviting visitors", "Simple B&W badging", "Clocking visitors in and out"], ctaLabel: "Request a quote" },
    { id: "professional", name: "Professional", description: "Configurable workflows and integration with access management", pricePrefix: "Starts at", price: "$500", period: "Per location/month*", bestseller: true, features: ["Includes two kiosks. 190 USD/month for every additional kiosk at the same location", "Up to three visitor registration workflows, pre-visit questionnaires, and compliance forms", "ID scanning, visitor photo at a kiosk, color badge printing", "Standard integration with physical access infrastructure"], ctaLabel: "Request a quote" },
    { id: "enterprise", name: "Enterprise", description: "Highly customizable solutions suitable for large enterprises", features: ["Complex processes for visitors, workforce, and contractors", "Multi-zone visitor tracking, real-time reporting", "Emergency mustering and facial recognition"], ctaLabel: "Contact us" },
  ],
  billingNote: "*Billed quarterly, contracted annually",
  comparison: [
    { title: "Event Planning and Invitation", rows: [{ feature: "Configurable event planning (single visit, multi-entry visit)", available: ["starter", "professional", "enterprise"] }, { feature: "Multilingual visitor email invitations", available: ["starter", "professional", "enterprise"] }, { feature: "Visitor and event import from third-party systems", available: ["professional", "enterprise"] }] },
    { title: "Pre-Registration", rows: [{ feature: "Pre-visit document signing", available: ["professional", "enterprise"] }, { feature: "Pre-visit ID verification", available: ["enterprise"] }] },
    { title: "Check-In and Registration", rows: [{ feature: "Single visitor workflow", available: ["starter"] }, { feature: "Up to three visitor workflows", available: ["professional", "enterprise"] }, { feature: "Configurable walk-in visitor registration", available: ["starter", "professional", "enterprise"] }] },
    { title: "Compliance and Documents", rows: [{ feature: "Photo capture at a kiosk with photo print on thermal paper", available: ["professional", "enterprise"] }, { feature: "Federal document scanning", available: ["professional", "enterprise"] }, { feature: "Federal ID verification", available: ["enterprise"] }] },
    { title: "Badging", rows: [{ feature: "Visitor badges with barcode or QR code", available: ["starter", "professional", "enterprise"] }] },
    { title: "Security and Access Management", rows: [{ feature: "Integration with physical access infrastructure", available: ["professional", "enterprise"] }] },
    { title: "Visitor Support and Navigation", rows: [{ feature: "Wayfinding and interactive maps", available: ["professional", "enterprise"] }] },
    { title: "Safety", rows: [{ feature: "Emergency mustering", available: ["enterprise"] }] },
    { title: "Checkout, Post-Visit Support, and Reporting", rows: [{ feature: "Advanced visit logs, CSV export, and reporting", available: ["professional", "enterprise"] }, { feature: "Real-time visitor location and reporting", available: ["enterprise"] }] },
    { title: "Time Clock, Scheduling, and Timesheets", rows: [{ feature: "Shift planning for contingent workforce and employees", available: ["enterprise"] }, { feature: "Workforce and contractor time clock", available: ["enterprise"] }] },
    { title: "General Features of friendlyway Cloud Platform", rows: [{ feature: "Multilingual interface for web users (admin cockpits)", available: ["starter", "professional", "enterprise"] }, { feature: "API integration for third-party software", available: ["professional", "enterprise"] }, { feature: "ADA support for visitor experience at a kiosk", available: ["starter", "professional", "enterprise"] }] },
  ],
  hardware: {
    heading: "Compare hardware by license type",
    tabs: [
      { id: "starter", label: "Starter", products: [luminum, empireSlim, impress] },
      { id: "professional", label: "Professional", products: [empireDeep, empirePro, accessManagement, portableScanStation] },
      { id: "enterprise", label: "Enterprise", products: [empireDeep, empirePro, accessManagement, portableScanStation, biometricAccess] },
    ],
    note: "* All hardware prices listed are starting prices based on standard components and do not include shipping costs and taxes. For exact pricing, please request a quote.",
  },
  quote: {
    headingPrefix: "Over ",
    headingAccent: "1.000",
    headingSuffix: " companies worldwide rely on friendlyway",
    description: "You, too, can elevate your visitor experience to the next level!",
    form: { portalId: "50845293", formId: "9b141db5-387c-4d92-8bc7-73de37808ccb", region: "na1", formName: "Request a quote", consentCategory: "functional" },
  },
} as const satisfies PricingContent;