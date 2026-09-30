import type { TestimonialSpotlightProps } from "@/components/solutions/testimonial-spotlight";

export const customerTestimonials = {
  millennium: {
    logo: { src: "/wp-content/uploads/mpg-logo-2.svg", width: 238, height: 57, alt: "MPG" },
    quote: "\u201cfriendlyway has been instrumental in introducing innovative software solutions that have been crucial for successfully managing our workforce amid growth. The friendlyway team understands our business, as well as our challenges and opportunities becoming a trusted partner today and in the future.\u201d",
    author: {
      name: "Johnny A. Mendoza",
      role: "Director, Capacity and Utilization, Millennium Print Group",
      portrait: { src: "/wp-content/uploads/Mendoza.png", width: 70, height: 71, alt: "" },
    },
    metrics: [
      { value: "1,200 persons/hour", label: "throughput" },
      { value: "24/7/365", label: "service availability" },
    ],
    details: [
      { heading: "friendlyway solutions", items: ["Contingent Workforce Management", "Visitor Management", "Employee Self-Service", "Emergency Mustering"] },
      { heading: "Industry", items: ["Manufacturing"] },
    ],
  },
  inprotec: {
    logo: { src: "/wp-content/uploads/logo-case-inprotec.webp", width: 120, height: 120, alt: "Case - Inprotec" },
    quote: "\u201cWith friendlyway, we have succeeded in modernizing our visitor management system to make it secure and convenient for visitors and employees. The friendlyway team met our requirements 100% and proved to be a competent and reliable partner.\u201d",
    author: {
      name: "Denis Sieland",
      role: "Maintenance/Servicing, inprotec GmbH",
      portrait: { src: "/wp-content/uploads/Denis-Sieland.png", width: 140, height: 140, alt: "Denis Sieland" },
    },
    metrics: [
      { value: "10x", label: "faster check-in" },
      { value: "5x", label: "cost reduction through complete digitalization" },
    ],
    details: [
      { heading: "friendlyway solutions", items: ["Visitor Management"] },
      { heading: "Industry", items: ["Manufacturing"] },
    ],
    action: { label: "See Case Study", href: "/case-studies/visitor-management-for-inprotec" },
  },
  baywa: {
    logo: { src: "/wp-content/uploads/BayWa_Logo-1.svg", width: 78, height: 80, alt: "BayWa logo" },
    quote: "\u201cThe new friendlyway video consultation kiosks with the integrated MS Teams solution have significantly eased the workload for our in-store teams. At the same time, our customers appreciate having quick access to expert advice \u2014 even on highly specialized topics. A big thank-you to the friendlyway team for their excellent work \u2014 from concept development all the way through to on-site implementation.\u201d",
    author: {
      name: "Claudia Englert",
      role: "Business Information Manager, BayWa Building Materials",
      portrait: { src: "/wp-content/uploads/Claudia-Englert-avatar@2x.png", width: 140, height: 140, alt: "Claudia Englert, BayWa" },
    },
    metrics: [
      { value: "2 pilot locations", label: "offering live video chat, more locations coming soon" },
      { value: "2 self-checkout kiosks", label: "with payments, scanning & printing" },
    ],
    details: [
      { heading: "friendlyway modules", items: ["Microsoft Teams Integration", "Card Payments"] },
      { heading: "Industry", items: ["Retail"] },
    ],
    action: { label: "See Case Study", href: "/case-studies/video-and-payment-kiosk-for-baywa" },
  },
} satisfies Record<string, TestimonialSpotlightProps>;