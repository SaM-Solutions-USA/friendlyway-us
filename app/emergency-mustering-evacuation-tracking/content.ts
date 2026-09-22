import type { EmergencyMusteringContent } from "./types";

export const emergencyMusteringContent = {
  seo: {
    title: "Emergency Mustering & Evacuation Tracking Software | friendlyway",
    description: "friendlyway Emergency Mustering helps organizations ensure safety and compliance during emergencies with real-time accountability, integrations, and detailed reporting.",
    canonicalPath: "/emergency-mustering-evacuation-tracking",
    robots: { index: false, follow: false },
    openGraph: { locale: "en_US", type: "article", updatedTime: "2026-01-19T13:24:00+03:00" },
    socialImage: { src: "/wp-content/uploads/fw-rich-snippet-VM.png", width: 1200, height: 630, alt: "friendlyway Emergency Mustering and Evacuation Tracking" },
  },
  hero: {
    title: "friendlyway Emergency Mustering and Evacuation Tracking",
    description: "Protect every person on site — employees, contractors, and guests — with a fast, reliable, and compliant mustering solution.",
    actions: [{ label: "Request a Demo", href: "#block-feedback_details-form" }],
    media: { src: "/wp-content/uploads/fw-mustering.webp", srcSet: "/wp-content/uploads/fw-mustering.webp 1x, /wp-content/uploads/fw-mustering@2x.webp 2x", width: 548, height: 336, alt: "" },
  },
  clientLogos: [
    { src: "/wp-content/uploads/millennium.svg", width: 168, height: 40, alt: "Millennium Group" },
    { src: "/wp-content/uploads/icon-bmw.svg", width: 56, height: 56, alt: "BMW" },
    { src: "/wp-content/uploads/icon-siemens.svg", width: 154, height: 25, alt: "" },
    { src: "/wp-content/uploads/publicsecurityand.svg", width: 185, height: 49, alt: "City of Munich Department of Public Security and Order" },
    { src: "/wp-content/uploads/icon-sixt.svg", width: 96, height: 40, alt: "SIXT" },
    { src: "/wp-content/uploads/icon-raiffeisen.svg", width: 51, height: 56, alt: "Raiffeisen" },
    { src: "/wp-content/uploads/logo-tvb-achensee.svg", width: 103, height: 49, alt: "Achensee" },
  ],
  safetyBenefits: {
    heading: "Ensure Safety with Real-Time Emergency Mustering",
    description: "Our emergency mustering software ensures that everyone is quickly and accurately accounted for during evacuations. Built with compliance in mind, it helps organizations meet OSHA, EU, and industry safety standards.",
    items: [
      { icon: { src: "/wp-content/uploads/Time.svg", width: 50, height: 50, alt: "" }, label: "Faster, more organized evacuations with fewer risks" },
      { icon: { src: "/wp-content/uploads/Check.svg", width: 50, height: 50, alt: "" }, label: "Scalable — from single sites to nationwide deployments" },
      { icon: { src: "/wp-content/uploads/User-Location.svg", width: 50, height: 50, alt: "" }, label: "Complete coverage for staff, contractors, and guests" },
      { icon: { src: "/wp-content/uploads/Security-Shield.svg", width: 50, height: 50, alt: "" }, label: "Privacy-first architecture, role-based access, and offline resilience" },
      { icon: { src: "/wp-content/uploads/Like.svg", width: 50, height: 50, alt: "" }, label: "Industrial-grade devices that thrive outdoors in any weather" },
      { icon: { src: "/wp-content/uploads/Policy-Document.svg", width: 50, height: 50, alt: "" }, label: "Compliance with legal requirements and regulations" },
    ],
  },
  solutionFeatures: {
    heading: "The friendlyway Solution",
    description: "Our platform delivers end-to-end emergency mustering capabilities that are reliable, fast, and easy to use. Rugged LTE tablets, intuitive software, and clear dashboards work together to give you full control in any situation.",
    items: [
      {
        title: "Real-time tracking of employees, contractors, and visitors",
        description: "Keep a live roster at hand as an alarm triggers. The evacuation tracking system syncs with access control and visitor data to show who’s safe, who’s en route, and who needs help across sites, shifts, and zones.",
        media: { src: "/wp-content/uploads/Real-time-tracking-of-employees.webp", srcSet: "/wp-content/uploads/Real-time-tracking-of-employees.webp 1x, /wp-content/uploads/Real-time-tracking-of-employees@2x.webp 2x", width: 600, height: 368, alt: "Real-time tracking of employees, contractors, and visitors" },
      },
      {
        title: "Flexible muster check-in options using rugged LTE tablets",
        description: "Match check-in to your environment. Our portable, industrial-grade LTE-enabled tablets, designed for outdoor use, allow safety teams to quickly scan visitor and contractor badges or employee RFID cards, ensuring no one is overlooked.",
        media: { src: "/wp-content/uploads/Muster-check-in.webp", srcSet: "/wp-content/uploads/Muster-check-in.webp 1x, /wp-content/uploads/Muster-check-in@2x.webp 2x", width: 600, height: 368, alt: "Flexible muster check-in options using rugged LTE tablets" },
      },
      {
        title: "Instant mustering results with a live missing-persons list",
        description: "See results in seconds. A live dashboard highlights the accounted-for individuals and those who are still missing, enabling teams to act quickly and clear sites confidently.",
        media: { src: "/wp-content/uploads/Mustering-ashboard.webp", srcSet: "/wp-content/uploads/Mustering-ashboard.webp 1x, /wp-content/uploads/Mustering-ashboard@2x.webp 2x", width: 600, height: 368, alt: "Instant mustering results with a live missing-persons list" },
      },
      {
        title: "Automated evacuation reports for audits and compliance",
        description: "Close every drill or incident with verifiable proof. Export and share timestamped reports supporting OSHA compliance, evacuation requirements, and internal policies.",
        media: { src: "/wp-content/uploads/Evacuation-reports.webp", srcSet: "/wp-content/uploads/Evacuation-reports.webp 1x, /wp-content/uploads/Evacuation-reports@2x.webp 2x", width: 600, height: 368, alt: "Automated evacuation reports for audits and compliance" },
      },
    ],
  },
  supportingSolutions: {
    heading: "Integrate Wayfinding with Other friendlyway Solutions",
    cards: [
      {
        title: "Hardware built for the moment",
        description: [
          "For teams on the move, mobile mustering solutions enable supervisors to account for people directly from their tablets.",
          "Our LTE devices resist dust, rain, glare, and drops — ideal for parking lots, campus greens, and remote yards. Paired with RFID readers, they deliver fast and reliable scans even in high-traffic assembly areas.",
        ],
      },
      {
        title: "Software that thinks ahead",
        description: [
          "Role-based dashboards surface what each stakeholder needs: EHS sees sitewide status, muster captains obtain live roll calls, and security can have last-seen location data from access control.",
          "Automated alerts, escalation rules, and post-event summaries reduce cognitive load when stress is high.",
        ],
      },
    ],
  },
  callToAction: {
    heading: "Ready to modernize your mustering?",
    description: "Replace manual headcounts with a single, integrated platform that helps you protect people, prove compliance, and learn from every drill.",
    action: { label: "Request a Demo", href: "#block-feedback_details-form" },
    backgroundImage: "/wp-content/uploads/Illustration.svg",
  },
  timeline: {
    heading: "How It Works",
    steps: [
      { title: "Alarm triggers the workflow.", description: "The system activates instantly and syncs with visitor management and access control data to build an accurate roster." },
      { title: "People head to muster points.", description: "Emergency signage guides everyone to assigned assembly areas." },
      { title: "Quick check-in at the muster point", description: "Use LTE-enabled tablets to record presence in seconds." },
      { title: "Live command view for safety teams", description: "See who’s accounted for and who remains missing." },
      { title: "Close and report", description: "The system compiles a complete, timestamped report — your foundation for audits, debriefs, and training." },
    ],
  },
  useCases: {
    heading: "Use Cases",
    description: "Emergency mustering is not one-size-fits-all. friendlyway adapts to industries with different risk profiles, workforce types, and compliance obligations, ensuring safety and accountability for everyone on-site.",
    items: [
      { icon: { src: "/wp-content/uploads/Manufacturing-icon-1.svg", width: 48, height: 48, alt: "" }, title: "Manufacturing plants", description: "High-risk environments, shift patterns, contractor-heavy teams — account for everyone fast." },
      { icon: { src: "/wp-content/uploads/Heathcare-icon.svg", width: 48, height: 48, alt: "" }, title: "Logistics & warehouses", description: "Large floors, rotating staff, frequent visitors — scale mustering without slowing operations." },
      { icon: { src: "/wp-content/uploads/Corporate-icon1.svg", width: 48, height: 48, alt: "" }, title: "Corporate offices", description: "Clear guidance for employees and guests, plus proof for audits and insurance compliance." },
      { icon: { src: "/wp-content/uploads/Public-Sector-icon.svg", width: 48, height: 49, alt: "" }, title: "Government facilities", description: "Strict standards, secure deployments, and detailed chain-of-custody reporting." },
      { icon: { src: "/wp-content/uploads/retail-icon.svg", width: 48, height: 48, alt: "" }, title: "Retail", description: "Multi-store sites, high customer footfall, and seasonal staff — maintain rapid accountability without disrupting service." },
      { icon: { src: "/wp-content/uploads/Hospitality-icon.svg", width: 48, height: 48, alt: "" }, title: "Hospitality", description: "Hotels, venues, and resorts — protect guests and staff with multilingual guidance and fast muster verification across large properties." },
    ],
  },
  testimonial: {
    logo: { src: "/wp-content/uploads/mpg-logo-2.svg", width: 238, height: 57, alt: "MPG" },
    quote: "“friendlyway has been instrumental in introducing innovative software solutions that have been crucial for successfully managing our workforce amid growth. The friendlyway team understands our business, as well as our challenges and opportunities becoming a trusted partner today and in the future.”",
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
  realWorldCapabilities: {
    heading: "Built for the Real World",
    desktopColumns: 4,
    items: [
      { icon: { src: "/wp-content/uploads/Heathcare-icon1.svg", width: 48, height: 48, alt: "" }, title: "Outdoor-ready hardware", description: "Sunlight-readable, rain-resistant, drop-tolerant LTE tablets." },
      { icon: { src: "/wp-content/uploads/Heathcare-icon1.svg", width: 48, height: 48, alt: "" }, title: "Offline-first", description: "Local caching powers mustering during outages; data syncs when connectivity returns." },
      { icon: { src: "/wp-content/uploads/Heathcare-icon1.svg", width: 48, height: 48, alt: "" }, title: "Role-based control", description: "Granular permissions for EHS, security, and site leaders." },
      { icon: { src: "/wp-content/uploads/Heathcare-icon1.svg", width: 48, height: 48, alt: "" }, title: "Privacy by design", description: "Data minimization, encryption, and configurable retention policies." },
    ],
  },
  integrations: {
    heading: "Integrations & Ecosystem",
    description: "The mustering solution integrates seamlessly with other modules on the friendlyway Cloud Platform, your existing safety stack, and core business systems to keep rosters accurate and check-ins effortless.",
    desktopColumns: 3,
    cards: [
      { title: "Visitor management software", description: ["Share invites, badges, and host details."], href: "/multi-vendor-staffing-solution/" },
      { title: "Contingent workforce management", description: ["Ensure complete workforce accountability."], href: "/friendlyway-digital-signage/" },
      { title: "Digital signage and wayfinding", description: ["Guide people to exits and muster points."], href: "/friendlyway-digital-signage/" },
      { title: "Physical access control systems", description: ["RFID, badges, and turnstiles provide “last seen” context."] },
    ],
  },
  whyFriendlyway: {
    heading: "Why friendlyway?",
    items: [
      { icon: { src: "/wp-content/uploads/25-years-icon.svg", width: 64, height: 64, alt: "25+ years icon" }, description: "Over 25 years of experience in self-service and safety solutions" },
      { icon: { src: "/wp-content/uploads/Group-1371.svg", width: 76, height: 44, alt: "" }, description: "Seamless integration into the friendlyway ecosystem" },
      { icon: { src: "/wp-content/uploads/Cloud-icon1.svg", width: 64, height: 64, alt: "" }, description: "Flexible deployment options: SaaS or on-premises" },
      { icon: { src: "/wp-content/uploads/Guarantee-icon.svg", width: 64, height: 64, alt: "" }, description: "Dedicated regional support teams in the US and EU" },
    ],
  },
  contact: {
    heading: "Contact Us",
    paragraphs: [
      "Please enter your contact information and any other details you feel are important for us to help you with. Once the form is submitted, our team will be in touch with you shortly.",
    ],
    profile: {
      name: "Dmitry Koshkin",
      role: "Managing Director",
      location: "friendlyway USA",
      portrait: { src: "/wp-content/uploads/foto.png", width: 216, height: 216, alt: "foto de" },
    },
    form: {
      portalId: "50845293",
      formId: "1d974790-256b-4ef6-860e-bced18225498",
      region: "na1",
      formName: "Contact Us",
      consentCategory: "functional",
    },
  },
  faq: {
    heading: "FAQ",
    description: "Get quick answers to the most common questions about our emergency mustering solution.",
    items: [
      { question: "How does real-time evacuation tracking work?", answer: "Our platform continually synchronizes personnel data from visitor and access control systems. When an event begins, muster captains use rugged LTE tablets to scan badges or RFID cards. As people check in, the command dashboard updates instantly with who is accounted for, their check-in method and location, and who remains missing." },
      { question: "Can visitors and contractors be included in the system?", answer: "Absolutely. friendlyway was built for mixed workforces. Temporary staff, vendors, and guests are included through contractor tracking and visitor evacuation management features. The same fast check-in flows apply to everyone, whether they carry an RFID card, a printed visitor badge, or a QR code sent to their phone." },
      { question: "Does it function during network outages (offline)?", answer: "Yes. Devices maintain local rosters and event data, enabling mustering to continue interruption-free. Tablets sync peer-to-peer and over LTE when available, then consolidate records into the central system once connectivity returns. You maintain accountability and complete audit trails even during partial outages." },
      { question: "Is it OSHA & EU compliant?", answer: "friendlyway supports OSHA compliance evacuation procedures and aligns with EU and industry best practices by standardizing processes, maintaining accurate rosters, and generating audit-ready reports. The muster point management software helps operationalize your policies, document drills and incidents, and demonstrate consistent execution across sites." },
      { question: "How fast can implementation be completed?", answer: "Most organizations deploy quickly thanks to prebuilt connectors for visitor management and access control systems. Our team guides you through configuration, device rollout, and training so your evacuation mustering solution is ready for drills and real events without disrupting daily operations. Most teams start with core sites and expand quickly." },
    ],
  },
} as const satisfies EmergencyMusteringContent;