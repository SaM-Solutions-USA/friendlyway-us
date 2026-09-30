import { customerTestimonials } from "@/content/testimonials";

export const visitorManagementContent = {
  seo: {
    title: "Visitor Management System - friendlyway",
    robots: { index: false, follow: false },
  },
  hero: {
    tone: "warm",
    title: "friendlyway Visitor Management",
    description: "Make check-in effortless, keep people safe, and give your team time back.",
    actions: [
      { label: "Book a Demo", href: "#block-feedback_details-form" },
      { label: "Start a Free Trial", href: "/free-trial/", variant: "outline" },
    ],
    media: {
      kind: "video",
      sources: [
        { src: "/wp-content/uploads/friendlyway-check-in.webm", type: "video/webm" },
        { src: "/wp-content/uploads/friendlyway-check-in.mp4", type: "video/mp4" },
      ],
      poster: "/wp-content/uploads/friendlyway-check-in-poster.jpg",
      width: 1920,
      height: 1080,
      label: "friendlyway visitor check-in demonstration",
    },
  },
  clients: {
    heading: "Featured Clients",
    logos: [
    { src: "/wp-content/uploads/logo-tvb-achensee.svg", width: 103, height: 49, alt: "Achensee" },
    { src: "/wp-content/uploads/publicsecurityand.svg", width: 185, height: 49, alt: "City of Munic Department of Public Security and Order" },
    { src: "/wp-content/uploads/millennium.svg", width: 168, height: 40, alt: "Millennium Group" },
    { src: "/wp-content/uploads/icon-bmw.svg", width: 56, height: 56, alt: "BMW" },
    { src: "/wp-content/uploads/icon-sixt.svg", width: 96, height: 40, alt: "SIXT" },
    { src: "/wp-content/uploads/icon-raiffeisen.svg", width: 51, height: 56, alt: "Raiffeisen" },
    ],
  },
  statistics: {
    heading: "Proven at Scale",
    items: [
      { value: "300K+", description: "visits and shift clock-ins processed each month" },
      { value: "500+", description: "customers in a wide range of industries" },
      { value: "24/7", description: "uninterrupted, secure access to all locations" },
    ],
  },
  howItWorks: {
    heading: "How It Works: Visitor Management Made Easy",
    description: "We support the complete visitor journey from event planning and invitation sending through onsite check-in, badging, compliance paperwork, and visitor guidance to check-out, attendance reports, and follow-up surveys.",
    items: [
      {
        title: "First impressions matter",
        description: "Turn your reception into an impressive first touchpoint \u2014 customize the check-in screens to match your brand and corporate identity. On arrival, hosts receive instant notifications via chat or email. Visitor badges/RFID cards print automatically during self-service check-in.",
        media: { kind: "video", sources: [{ src: "/wp-content/uploads/easy-check-in.webm", type: "video/webm" }], poster: "/wp-content/uploads/easy-check-in-poster.jpg", width: 1996, height: 1330, label: "First impressions matter: visitor check-in demonstration" },
      },
      {
        title: "Customize your visitor experience",
        description: "Plan every step of the journey, including invitations and pre-registration, QR/PIN sign-in, visitor screening, wayfinding, and digital signage. Our platform is fully configurable to your organization\u2019s workflows.",
        media: { src: "/wp-content/uploads/classic-straight.webp", width: 700, height: 408, alt: "Customize your visitor experience" },
      },
      {
        title: "Support visitors via video chat or an AI assistant",
        description: "With built-in live video/audio (Teams or traditional VoIP), guests can notify their host of arrival, ask questions directly from the kiosk or tablet, and receive immediate answers.",
        media: { src: "/wp-content/uploads/impress-teams-calls-2.webp", width: 700, height: 408, alt: "Support visitors via video chat or an AI assistant" },
        action: { label: "Explore Video Chat", href: "/video-chat-for-customer-service/" },
      },
      {
        title: "Provide digital agreements and safety briefings",
        description: "Use text, images, and videos \u2014 and even add short quizzes for comprehension checks \u2014 to meet all your compliance requirements simply and effectively. Electronic signatures ensure complete, auditable records.",
        media: { kind: "video", sources: [{ src: "/wp-content/uploads/hard-check-in.webm", type: "video/webm" }], poster: "/wp-content/uploads/hard-check-in-poster.jpg", width: 1996, height: 1330, label: "Provide digital agreements and safety briefings demonstration" },
      },
      {
        title: "Integrate with your PIAM solutions",
        description: "The visitor management module can be integrated with security turnstiles and other physical access management hardware, ensuring a seamless automated visitor check-in process.",
        media: { src: "/wp-content/uploads/integrate.webp", width: 700, height: 408, alt: "Integrate with your PIAM solutions" },
      },
      {
        title: "Offer guided visits from the kiosk to the destination",
        description: "Some security policies require a \u201cguided visit\u201d procedure. Upon a visitor\u2019s check-in, the assigned host is notified and proceeds to the kiosk to confirm the visitor\u2019s identity and issue an access badge. The host can then accompany the visitor or provide directions.",
        media: { src: "/wp-content/uploads/offer-guided-visits-.webp", width: 700, height: 408, alt: "Offer guided visits from the kiosk to the destination" },
      },
      {
        title: "Who\u2019s on site? Who\u2019s expected?",
        description: "With friendlyway, your team always knows who is currently on site and which visits are scheduled. Enjoy maximum visibility for stronger security \u2014 and fewer follow-ups and misunderstandings.",
        media: { src: "/wp-content/uploads/reports-img-2.jpg", width: 709, height: 412, alt: "Who\u2019s on site? Who\u2019s expected?" },
      },
    ],
    footerAction: { label: "View All Features and Pricing", href: "/pricing/" },
  },
  whyVisitorManagement: {
    heading: "Why friendlyway Visitor Management?",
    items: [
      { icon: { src: "/wp-content/uploads/like-1.svg", width: 50, height: 50, alt: "" }, label: "Provide exceptional visitor experience" },
      { icon: { src: "/wp-content/uploads/security-shield-green.svg", width: 50, height: 50, alt: "" }, label: "Improve the security and safety of your premises" },
      { icon: { src: "/wp-content/uploads/user-location.svg", width: 50, height: 50, alt: "" }, label: "Deliver high-quality visitor navigation and support" },
      { icon: { src: "/wp-content/uploads/policy-document.svg", width: 50, height: 50, alt: "" }, label: "Ensure compliance with legal requirements and regulations" },
      { icon: { src: "/wp-content/uploads/time.svg", width: 50, height: 50, alt: "" }, label: "Reduce waiting times and improve customer satisfaction" },
      { icon: { src: "/wp-content/uploads/combo-chart.svg", width: 50, height: 50, alt: "" }, label: "Learn more about your visitors via real-time reporting" },
    ],
  },
  clientReview: customerTestimonials.millennium,
  visitorExperiences: {
    heading: "Provide Customized Experiences to Every Visitor",
    descriptionLead: "Define every step",
    description: "of the visitor experience to provide the best possible services to your customers, partners, and employees.",
    items: [
      { icon: { src: "/wp-content/uploads/id-card.svg", width: 51, height: 51, alt: "" }, labels: ["Visitor", "Guest"] },
      { icon: { src: "/wp-content/uploads/businessman.svg", width: 51, height: 51, alt: "" }, labels: ["Client", "Prospect"] },
      { icon: { src: "/wp-content/uploads/labour-day.svg", width: 51, height: 51, alt: "" }, labels: ["Contractor", "Service worker"] },
      { icon: { src: "/wp-content/uploads/employee.svg", width: 51, height: 51, alt: "" }, labels: ["Employee"] },
      { icon: { src: "/wp-content/uploads/patient.svg", width: 51, height: 51, alt: "" }, labels: ["Patient", "Service provider"] },
      { icon: { src: "/wp-content/uploads/qc.svg", width: 51, height: 51, alt: "" }, labels: ["Inspector", "Auditor"] },
    ],
  },
  scenarios: {
    heading: "Off-the-Shelf Scenarios",
    items: [
      {
        title: "Event planning",
        features: [
          { label: "Event scheduling", icon: { src: "/wp-content/uploads/schedule.svg", width: 40, height: 40, alt: "" } },
          { label: "Personalized invitations to visitors", icon: { src: "/wp-content/uploads/icon-invite.svg", width: 41, height: 40, alt: "" } },
          { label: "Outlook integration", icon: { src: "/wp-content/uploads/icon-outlook-2.svg", width: 41, height: 40, alt: "" } },
        ],
      },
      {
        title: "Pre-registration",
        features: [
          { label: "Pre-visit registration forms", icon: { src: "/wp-content/uploads/forms.svg", width: 41, height: 40, alt: "" } },
          { label: "Pre-visit compliance and security verification", icon: { src: "/wp-content/uploads/verified-account.svg", width: 41, height: 40, alt: "" } },
          { label: "Acceptance of policies and guidelines by the visitor", icon: { src: "/wp-content/uploads/document-writer.svg", width: 41, height: 40, alt: "" } },
        ],
      },
      {
        title: "Check-in and registration",
        features: [
          { label: "Visitor check-in using ID/QR code from the invitation", icon: { src: "/wp-content/uploads/id-verified.svg", width: 40, height: 40, alt: "" } },
          { label: "Customizable registration forms and questionnaires", icon: { src: "/wp-content/uploads/forms.svg", width: 41, height: 40, alt: "" } },
          { label: "Document signing by the visitor", icon: { src: "/wp-content/uploads/icon-smart-forms.svg", width: 41, height: 40, alt: "" } },
          { label: "Badge printing, access card dispensing", icon: { src: "/wp-content/uploads/label-printer.svg", width: 41, height: 40, alt: "" } },
        ],
      },
      {
        title: "Guide",
        features: [
          { label: "Visit approval workflow", icon: { src: "/wp-content/uploads/icon-handshake.svg", width: 19, height: 19, alt: "" } },
          { label: "Video chat with a host/support team at a kiosk", icon: { src: "/wp-content/uploads/webcam.svg", width: 41, height: 40, alt: "" } },
          { label: "Displaying/printing of a site map with directions", icon: { src: "/wp-content/uploads/map-marker.svg", width: 41, height: 40, alt: "" } },
        ],
      },
      {
        title: "Security and safety",
        features: [
          { label: "Integration with physical access control", icon: { src: "/wp-content/uploads/icon-turnstile.svg", width: 40, height: 40, alt: "" } },
          { label: "Real-time visitor location and reporting", icon: { src: "/wp-content/uploads/location-update.svg", width: 41, height: 40, alt: "" } },
          { label: "Emergency alert and evacuation route display", icon: { src: "/wp-content/uploads/siren.svg", width: 41, height: 40, alt: "" } },
          { label: "Visitor check-in at a muster station during emergency events", icon: { src: "/wp-content/uploads/collect.svg", width: 41, height: 40, alt: "" } },
        ],
      },
      {
        title: "Check-out/ post-visit support",
        features: [
          { label: "Badge collection", icon: { src: "/wp-content/uploads/badge-1.svg", width: 40, height: 40, alt: "" } },
          { label: "Post-visit surveys and reminders", icon: { src: "/wp-content/uploads/survey.svg", width: 41, height: 40, alt: "" } },
          { label: "Visit logs and reporting", icon: { src: "/wp-content/uploads/graph-report.svg", width: 41, height: 40, alt: "" } },
        ],
      },
    ],
  },
  callToAction: {
    description: ["See all capabilities of friendlyway Cloud Platform ", { type: "lineBreak" }, "for ", { type: "strong", text: "visitor management" }, " in action"],
    action: { label: "Request a Demo", href: "#block-feedback_details-form" },
    backgroundImage: "/wp-content/uploads/Illustration.svg",
  },
  platformFeatures: {
    heading: "Leverage Powerful Platform Features for Unique, Personalized Visitor Experiences",
    items: [
      { icon: { src: "/wp-content/uploads/workflow.svg", width: 42, height: 42, alt: "" }, label: "Highly customizable visitor registration process" },
      { icon: { src: "/wp-content/uploads/deploy.svg", width: 36, height: 36, alt: "" }, label: "Deploy to your devices in just one click" },
      { icon: { src: "/wp-content/uploads/cloud-type2.svg", width: 42, height: 42, alt: "" }, label: "Cloud and on-premises deployment modes" },
      { icon: { src: "/wp-content/uploads/visitor-management-turnstile.svg", width: 49, height: 48, alt: "" }, label: "Integration with physical access management solutions and devices" },
      { icon: { src: "/wp-content/uploads/visitor.svg", width: 39, height: 34, alt: "" }, label: "Integration with badge printers, RFID card dispensers, and government ID readers" },
      { icon: { src: "/wp-content/uploads/quick-access.svg", width: 33, height: 42, alt: "" }, label: "Quick access to visitor reporting and analytics" },
      { icon: { src: "/wp-content/uploads/alarm.svg", width: 42, height: 42, alt: "" }, label: "Emergency alarm mode" },
      { icon: { src: "/wp-content/uploads/icon-integration.svg", width: 62, height: 36, alt: "" }, label: "Over ten plug-and-play off-the-shelf modules" },
      { icon: { src: "/wp-content/uploads/badge.svg", width: 43, height: 43, alt: "" }, label: "Video tagging at check-in/check-out" },
      { icon: { src: "/wp-content/uploads/language-choice.svg", width: 54, height: 43, alt: "" }, label: "Multi-language support" },
      { icon: { src: "/wp-content/uploads/person-with-disability.svg", width: 43, height: 43, alt: "" }, label: "Accessibility support" },
    ],
  },
  whyFriendlyway: {
    tone: "inverse",
    heading: "Why Choose friendlyway?",
    description: [
      {
        type: "paragraph",
        content: [
          "friendlyway combines ",
          { type: "strong", text: "25+ years of domain expertise" },
          " with the latest technologies to create best-in-class solutions",
        ],
      },
    ],
    items: [
      {
        icon: { src: "/wp-content/uploads/easy.svg", width: 60, height: 61, alt: "" },
        title: "Fast ROI",
        description: [{ type: "paragraph", content: ["Set up in minutes and save hours. Use a flexible subscription model"] }],
      },
      {
        icon: { src: "/wp-content/uploads/cloud-1.svg", width: 60, height: 61, alt: "" },
        title: "Cloud-based",
        description: [{ type: "paragraph", content: ["Enjoy a platform designed and built specifically for the cloud"] }],
      },
      {
        icon: { src: "/wp-content/uploads/drag-and-drop-1.svg", width: 60, height: 61, alt: "" },
        title: "Flexible & easy to use",
        description: [{ type: "paragraph", content: ["Combine modules as you need and create intricate workflows with simple drag-and-drop"] }],
      },
      {
        icon: { src: "/wp-content/uploads/puzzle.svg", width: 104, height: 60, alt: "" },
        title: "Integrations",
        description: [{ type: "paragraph", content: ["Easily integrate the platform with other hardware and software"] }],
      },
    ],
  },
  hardware: {
    heading: "Hardware for Visitor Management",
    description: "Choose between utilizing your existing devices or leveraging friendlyway's self-service kiosks for visitor management. Crafted in Germany using top-tier quality components, our hardware guarantees exceptional durability and performance for commercial use.",
    cards: [
      {
        title: "friendlyway Impress 43",
        href: "/products/impress-43/",
        image: { src: "/wp-content/uploads/visitor-hardware-impress-43.webp", width: 174, height: 265, alt: "friendlyway Impress 43" },
      },
      {
        title: "friendlyway Empire 22 Slim",
        href: "/products/empire-22-slim/",
        image: { src: "/wp-content/uploads/visitor-hardware-empire-22-slim.webp", width: 174, height: 265, alt: "friendlyway Empire 22 Slim" },
      },
      {
        title: "friendlyway Luminum 43",
        href: "/products/luminum-43/",
        image: { src: "/wp-content/uploads/visitor-hardware-luminum-43.webp", width: 174, height: 265, alt: "friendlyway Luminum 43" },
      },
      {
        title: "friendlyway Counter 12",
        href: "/products/counter-12/",
        image: { src: "/wp-content/uploads/visitor-hardware-counter-12.webp", width: 174, height: 265, alt: "friendlyway Counter 12" },
      },
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
      portrait: { src: "/wp-content/uploads/foto.png", width: 216, height: 216, alt: "" },
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
    heading: "Frequently Asked Questions",
    items: [
      { question: "What is a visitor management system?", answer: "A visitor management system is a comprehensive software solution that streamlines and automates managing guests, visitors, and clients at your facility. It centralizes visitor data, provides customizable visitor experiences, and enhances security and compliance by integrating digital signage and access control systems." },
      { question: "How does a digital visitor management solution improve security at my facility?", answer: "A digital visitor management solution enhances security by providing features like instant badge printing or issuing RFID cards, real-time tracking of visitor access and movements, and enabling visitor pre-registration. It also allows for visitor information verification against watchlists, ensuring unauthorized individuals do not get access to the facility." },
      { question: "Can I customize the visitor experience with a visitor management solution?", answer: "Yes, our friendlyway Visitor Management allows you to configure custom visitor journeys and create engaging welcome screens and interactive menus to suit the unique needs of your business. This flexibility helps create a professional and tailored guest experience while streamlining the check-in process." },
      { question: "How does the solution handle legal compliance and document signing?", answer: "Our visitor management solution simplifies regulatory compliance by offering secure, paperless document signing options online and at on-site kiosks. Digital signatures can be collected and stored, ensuring you have all the necessary records to meet compliance requirements." },
      { question: "Can I send invitations to clients and manage event attendance with your platform?", answer: "Yes. You can easily send client invites, track RSVPs, and manage event attendance on friendlyway Cloud Platform. The user-friendly invitation system supports various visitor types, ensuring efficient communication." },
      { question: "Is friendlyway Visitor Management suitable for businesses of all sizes?", answer: "Absolutely! Our solution is scalable and adaptable, which makes it work for businesses of all sizes and industries. We can tailor it to fit your organization's requirements, ensuring it meets your visitor management needs effectively and efficiently." },
    ],
  },
} as const;