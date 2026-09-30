import { customerTestimonials } from "@/content/testimonials";

import type { ManufacturingContent } from "./types";

export const manufacturingContent = {
  seo: {
    title: "friendlyway Solutions for Manufacturing - friendlyway",
    description: "Time tracking. Shift planning. Access control. Reporting. Safety management. Discover industrial workplace solutions from friendlyway.",
    canonicalPath: "/solutions-for-manufacturing",
    robots: { index: false, follow: false, noarchive: true, nosnippet: true },
    openGraph: { locale: "en_US", type: "article", updatedTime: "2026-01-19T13:22:09+03:00" },
    socialImage: {
      src: "/wp-content/uploads/fw-rich-snippet-Manufacturing-1.png",
      width: 1200,
      height: 630,
      alt: "friendlyway Solutions for Manufacturing",
    },
  },
  hero: {
    title: "friendlyway Solutions for Manufacturing",
    description: "Time tracking. Shift planning. Access control. Reporting. Safety management.",
    actions: [{ label: "Request a Demo", href: "#block-feedback_details-form" }],
    media: {
      src: "/wp-content/uploads/VM-manufacturing.webp",
      width: 548,
      height: 336,
      alt: "friendlyway Solutions for Manufacturing",
    },
  },
  clientLogos: [
    { src: "/wp-content/uploads/PG_logo.svg", width: 81, height: 35, alt: "Procter & Gamble" },
    { src: "/wp-content/uploads/bosch-logo.svg", width: 157, height: 35, alt: "Bosch" },
    { src: "/wp-content/uploads/Kalkhoff-logo.svg", width: 207, height: 25, alt: "Kalkhoff" },
    { src: "/wp-content/uploads/millennium.svg", width: 168, height: 40, alt: "Millennium Group" },
    { src: "/wp-content/uploads/logo-daimler-truck.svg", width: 213, height: 17, alt: "Daimler Truck" },
    { src: "/wp-content/uploads/icon-bmw.svg", width: 56, height: 56, alt: "BMW" },
    { src: "/wp-content/uploads/duravit-logo.svg", width: 170, height: 40, alt: "Duravit" },
    { src: "/wp-content/uploads/logo-filtrox.png", width: 75, height: 75, alt: "Filtrox" },
    { src: "/wp-content/uploads/logo-hauser.png", width: 168, height: 29, alt: "Hauser" },
    { src: "/wp-content/uploads/logo-vopi.png", width: 80, height: 80, alt: "Volpi" },
  ],
  solutions: {
    heading: "Discover Our Industrial Workplace Solutions",
    items: [
      {
        title: "Enterprise Visitor Management",
        icon: { src: "/wp-content/uploads/icon-solutions-1.svg", width: 48, height: 49, alt: "Enterprise Visitor Management" },
        paragraphs: ["Prioritizing commercial security is vital when a diverse group of clients, partners, vendors, and employees may access production sites. Our system offers an end-to-end approach to ensuring compliance, mitigating breaches, and safeguarding manufacturing facilities."],
        features: ["Customizable workflows", "Invitations and notifications", "Registration forms", "Visitor logs and reporting"],
        action: { label: "Learn more", href: "/visitor-management-solution/" },
      },
      {
        title: "Badging, Identity, and Access Management",
        icon: { src: "/wp-content/uploads/icon-solutions-2.svg", width: 48, height: 49, alt: "Badging, Identity, and Access Management" },
        paragraphs: ["Companies often lack a dependable and adaptable badging system that integrates smoothly with centralized physical access management on the production floor. With our platform, you can reduce the risk of unauthorized access by enforcing zone- and role-based restrictions."],
        features: ["Temporary badges on thermal paper", "RFID cards", "Identity verification", "Biometrics and facial recognition"],
      },
      {
        title: "Workforce Time Management and Shift Planning",
        icon: { src: "/wp-content/uploads/icon-solutions-3.svg", width: 48, height: 49, alt: "Workforce Time Management and Shift Planning" },
        paragraphs: ["Whether managing permanent employees or collaborating with staffing vendors on contingent labor, deploying separate planning and time-tracking systems within your facilities can pose challenges. Our centralized solution helps you minimize time theft and ensure payroll accuracy based on real-time data."],
        features: ["Consolidated workforce data", "Shift planning", "Time clock and timesheets", "Reports for payroll and billing"],
        action: { label: "Learn more", href: "/multi-vendor-staffing-solution/" },
      },
      {
        title: "Digital Signage for Office Spaces and Production Floor",
        icon: { src: "/wp-content/uploads/icon-solutions-4-1.svg", width: 48, height: 48, alt: "Digital Signage for Office Spaces and Production Floor" },
        paragraphs: ["Our integrated solution guarantees instantaneous and clear communication from every screen on your production floor and in offices.", "From general announcements, schedules, and dashboards to emergency alerts and promotional videos, keep everyone informed at all times."],
        features: ["Content management", "Playback scheduling", "Remote device management"],
        action: { label: "Learn more", href: "/friendlyway-digital-signage/" },
      },
      {
        title: "Self-Service Solutions for the Modern Workforce",
        icon: { src: "/wp-content/uploads/icon-solutions-5.svg", width: 48, height: 49, alt: "Self-Service Solutions for the Modern Workforce" },
        paragraphs: ["We provide user-friendly software and hardware tailored to create self-service experiences for your workforce and visitors, safeguarding their activity within your corporate IT boundaries."],
        features: ["Grant access to corporate portals and HR systems", "Ensure secure, OSHA-compliant access", "Use your hardware or choose our reliable self-service kiosks"],
        action: { label: "SEE KIOSKS", href: "/kiosks-terminals-overview/" },
      },
      {
        title: "Emergency Mustering and Evacuation Tracking",
        icon: { src: "/wp-content/uploads/icon-solutions-6.svg", width: 48, height: 49, alt: "Emergency Mustering and Evacuation Tracking" },
        paragraphs: ["Our solution for manufacturing enables you to efficiently track employees and visitors in emergencies, providing intuitive guidance and autonomous registration in safety zones.", "Integrated with your workforce and physical access systems, it guarantees swift responses and precise headcounts for enhanced safety during critical events."],
        features: [],
        action: { label: "Learn more", href: "/emergency-mustering-evacuation-tracking/" },
      },
    ],
  },
  realLifeGallery: {
    heading: "What It Looks Like in Real Life",
    images: [
      { src: "/wp-content/uploads/fly-images/22681/looks-2-365x9999.webp", width: 365, height: 243, alt: "" },
      { src: "/wp-content/uploads/fly-images/22664/looks-3-365x9999.webp", width: 365, height: 243, alt: "" },
      { src: "/wp-content/uploads/fly-images/22665/looks-4-365x9999.webp", width: 365, height: 243, alt: "" },
      { src: "/wp-content/uploads/fly-images/22666/looks-5-365x9999.webp", width: 365, height: 243, alt: "" },
      { src: "/wp-content/uploads/fly-images/22667/looks-6-365x9999.webp", width: 365, height: 243, alt: "" },
      { src: "/wp-content/uploads/fly-images/22668/looks-7-365x9999.webp", width: 365, height: 243, alt: "" },
      { src: "/wp-content/uploads/fly-images/22669/looks-8-365x9999.webp", width: 365, height: 243, alt: "" },
      { src: "/wp-content/uploads/fly-images/22680/looks-1-365x9999.webp", width: 365, height: 243, alt: "" },
    ],
  },
  hardwareOptions: {
    heading: "Hardware Options from friendlyway and Our Partners",
    description: "As a single-source software and hardware supplier, we offer a range of industrial-grade proprietary kiosks and partner devices.",
    media: {
      src: "/wp-content/uploads/hardware-options.webp",
      width: 1136,
      height: 591,
      alt: "Hardware Options from friendlyway and Our Partners",
    },
  },
  demo: {
    heading: "Live demo and product consultation",
    description: "Experience friendlyway\u2019s solutions for the manufacturing industry in action",
    action: { label: "Request a Demo", href: "#block-feedback_details-form" },
  },
  challenges: {
    heading: "The Challenges We Address in Manufacturing Workforce Management",
    items: [
      {
        title: "Time and Attendance Tracking",
        icon: { src: "/wp-content/uploads/Time-tracking.svg", width: 50, height: 51, alt: "" },
        description: "Traditional methods may involve manual tracking of employee hours, which is time-consuming and prone to errors. Our digital system automates this process, ensuring accurate and efficient time capture at access points to help you manage payroll and labor costs more effectively.",
      },
      {
        title: "Access Control",
        icon: { src: "/wp-content/uploads/Turnstile.svg", width: 51, height: 51, alt: "" },
        description: "Ensuring that only authorized personnel can access certain areas within your facility is crucial for safety and security. friendlyway\u2019s automated access management system enforces restrictions based on shifts, zones, or specific job roles, reducing the risk of unauthorized access.",
      },
      {
        title: "Compliance Management",
        icon: { src: "/wp-content/uploads/Compliance.svg", width: 51, height: 51, alt: "" },
        description: "Manufacturing industries often have strict regulatory requirements regarding safety, labor laws, and environmental standards. Our integrated system helps ensure all workers have the necessary certifications and training by automating compliance checks and maintaining digital records.",
      },
      {
        title: "Labor Resource Allocation",
        icon: { src: "/wp-content/uploads/Shift-planning.svg", width: 50, height: 51, alt: "" },
        description: "Manual shift planning can be inefficient and inflexible. friendlyway\u2019s automated system enhances the ability to schedule labor based on real-time demand, worker availability, and skill requirements, which optimizes your workforce utilization and reduces operational bottlenecks.",
      },
      {
        title: "Real-Time Reporting and Analytics",
        icon: { src: "/wp-content/uploads/Combo-Chart.svg", width: 51, height: 51, alt: "" },
        description: "A lack of real-time data can hinder decision-making. Automated attendance and activity reports generated by our system provide immediate insights into your workforce performance, absenteeism, and other critical metrics, allowing for timely adjustments and improved productivity.",
      },
      {
        title: "Enhanced Communication",
        icon: { src: "/wp-content/uploads/Communication.svg", width: 51, height: 51, alt: "" },
        description: "friendlyway\u2019s solutions facilitate better communication between your workforce and management. For instance, instant approvals and notifications via digital platforms keep everyone informed and aligned with the operational goals.",
      },
      {
        title: "Safety and Emergency Management",
        icon: { src: "/wp-content/uploads/Emergency-Exit.svg", width: 50, height: 51, alt: "" },
        description: "In case of emergencies, it is crucial to know who is on-site and where. Our sophisticated access management system tracks the presence and location of workers in real time, enhancing your ability to respond effectively during emergencies.",
      },
    ],
  },
  testimonials: {
    heading: "See Why 500+ Customers Love friendlyway",
    items: [
      customerTestimonials.millennium,
      customerTestimonials.inprotec,
      customerTestimonials.baywa,
    ],
  },
  transformationJourney: {
    heading: "Our Clients' Transformation Journey",
    items: [
      {
        title: "Visitor Management at Millennium Print Group",
        rows: [
          { before: "Manual visitor registration", after: "Automated visitor registration" },
          { before: "No formal visit approval by the host", after: "The host receives a text/email for visitor approval" },
          { before: "Anonymized visitor badge", after: "Named badge with a photo automatically captured at a kiosk" },
          { before: "Paper-based visitor compliance forms and questionnaires", after: "Automated form signing and questionnaires at a kiosk" },
          { before: "No time limitations for a visit", after: "Time-limited restricted access" },
          { before: "Unknown visitor location on the premises", after: "Real-time visitor location tracking" },
        ],
      },
      {
        title: "Workforce Management at Millennium Print Group",
        rows: [
          { before: "Contingent labor roster in Excel", after: "Centralized database of contingent workers" },
          { before: "Manual shift planning", after: "Automated shift planning" },
          { before: "The worker can enter the facility at any time", after: "Shift/zone-restricted access" },
          { before: "Inconsistent time tracking for contingent labor", after: "Centralized time capture at turnstiles and access points" },
          { before: "No timesheet approval", after: "Digitalized timesheet management and approval" },
          { before: "No shift attendance reports", after: "Automated attendance reports" },
        ],
      },
      {
        title: "Visitor Management at a Global Consumer Goods Manufacturer",
        rows: [
          { before: "Paper- or email-based visit requests from business users", after: "Streamlined visit request creation in the friendlyway system" },
          { before: "Manual approval of access levels by security teams", after: "Automated safety level assignment for visitors and contractors" },
          { before: "Manual ID checks", after: "Automated ID verification and a photo-capturing option" },
          { before: "Manual paperwork", after: "Signing documents and compliance forms at a kiosk" },
          { before: "No tracking of access and time spent in different areas", after: "Automated time capturing at turnstiles/security access points through RFID badges" },
        ],
      },
      {
        title: "Truck Pass Authorization at a Global Consumer Goods Manufacturer",
        rows: [
          { before: "Paper-based information submission by truck drivers", after: "Registration, compliance forms, ID scanning, and photo capturing at a kiosk" },
          { before: "Inefficient site access approval process", after: "Security officers instantly receive notifications and approve visits in the system" },
          { before: "Manual access permissions assignment", after: "Automated badging/RFID card printing at a kiosk" },
          { before: "Manual identity checks for truck drivers", after: "Automated ID verification and photo approval at turnstiles" },
        ],
      },
    ],
  },
  whyFriendlyway: {
    heading: "Why Choose friendlyway?",
    description: [{ type: "paragraph", content: ["friendlyway combines 25+ years of domain expertise with the latest technologies to create best-in-class solutions"] }],
    tone: "inverse",
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
  statistics: {
    heading: "friendlyway Solutions by the Numbers",
    items: [
      { value: "300K+", description: "visits and shift clock-ins processed by our platform each month" },
      { value: "500+", description: "customers in 70 countries" },
      { value: "24/7", description: "uninterrupted, secure access to all locations" },
      { value: "< 1", unit: "min", description: "average wait time for visitors during ID check and badge issuing" },
      { value: "1,200", unit: "persons/hour", description: "turnstile throughput per lane for temporary workers at client facilities" },
      { value: "-40%", description: "reduced contingent workforce costs due to more accurate shift planning" },
    ],
  },
  customerStories: {
    heading: "Selected Customer Stories",
    stories: [
      {
        title: "Automated Contingent Labor Management and Visitor Registration for Millennium Print Group",
        image: { src: "/wp-content/uploads/fly-images/6457/mil-print2-min-357x241-c.jpg", width: 357, height: 241, alt: "" },
      },
      {
        title: "Visitor Registration at Manufacturing Facilities of Poly-clip System",
        image: { src: "/wp-content/uploads/fly-images/624/image-33-357x241-c.jpg", width: 357, height: 241, alt: "" },
      },
      {
        title: "Flawless Management of Visits and Truck Entrances for a Global FMCG Manufacturer",
        image: { src: "/wp-content/uploads/fly-images/22683/A-Global-FMCG-Manufacturer-357x241-c.png", width: 357, height: 241, alt: "A Global FMCG Manufacturer" },
      },
    ],
  },
  industries: {
    heading: "Industries and Sectors We Focus On",
    headingId: "industries-heading",
    description: "Our decades of work with manufacturing clients have provided us with expertise in all major sectors.",
    variant: "industries",
    items: [
      { icon: { src: "/wp-content/uploads/Digger-icon.svg", width: 24, height: 25, alt: "Heavy Industry" }, label: "Heavy Industry" },
      { icon: { src: "/wp-content/uploads/retail-icon.svg", width: 25, height: 25, alt: "Consumer Goods" }, label: "Consumer Goods" },
      { icon: { src: "/wp-content/uploads/Hi-Tech-icon.svg", width: 25, height: 25, alt: "High-Tech" }, label: "High-Tech" },
      { icon: { src: "/wp-content/uploads/Manufacturing-icon.svg", width: 24, height: 25, alt: "Process Industry" }, label: "Process Industry" },
      { icon: { src: "/wp-content/uploads/Materials-icon.svg", width: 25, height: 25, alt: "Materials" }, label: "Materials" },
      { icon: { src: "/wp-content/uploads/icon-energy-1.svg", width: 24, height: 24, alt: "Energy & Utilities" }, label: "Energy & Utilities" },
      { icon: { src: "/wp-content/uploads/Automotive-icon.svg", width: 24, height: 25, alt: "Automotive" }, label: "Automotive" },
      { icon: { src: "/wp-content/uploads/icon-heathcare.svg", width: 24, height: 24, alt: "Healthcare Devices & Pharmaceuticals" }, label: "Healthcare Devices & Pharmaceuticals" },
      { icon: { src: "/wp-content/uploads/Factory-icon.svg", width: 24, height: 25, alt: "Light Industry" }, label: "Light Industry" },
    ],
  },
  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "Why do manufacturers choose friendlyway?",
        answer: "friendlyway doesn't sell typical, one-for-all software that leaves you figuring out how to operate it in your specific environment. With our comprehensive Cloud Platform, proprietary hardware, and a partner network, we offer a complete solution tailored to your needs and integrated with all the relevant systems. We collaborate with the client at all stages, from the requirements analysis to onboarding and post-delivery support, as we care about each project's contribution to the client's long-term success in manufacturing workforce management.",
        content: [
          { type: "paragraph", content: ["friendlyway doesn\u2019t sell typical, one-for-all software that leaves you figuring out how to operate it in your specific environment. With our comprehensive Cloud Platform, proprietary hardware, and a partner network, we offer a complete solution tailored to your needs and integrated with all the relevant systems."] },
          { type: "paragraph", content: ["We collaborate with the client at all stages, from the requirements analysis to onboarding and post-delivery support, as we care about each project\u2019s contribution to the client\u2019s long-term success in manufacturing workforce management."] },
        ],
      },
      {
        question: "What is friendlyway Cloud Platform?",
        answer: "friendlyway Cloud Platform is a set of software modules and integrations we have developed over the years to streamline and automate our clients' operations. It allows us to implement the following core solutions mitigating multiple pain points across business teams and scenarios: Visitor management, Digital signage, Badging, compliance, and access management, Self-service kiosk solutions, Wayfinding and visitor guidance, Workforce management.",
        content: [
          {
            type: "paragraph",
            content: [
              { type: "link", label: "friendlyway Cloud Platform", href: "/friendlyway-cloud-platform/" },
              " is a set of software modules and integrations we have developed over the years to streamline and automate our clients\u2019 operations. It allows us to implement the following core solutions mitigating multiple pain points across business teams and scenarios:",
            ],
          },
          {
            type: "list",
            items: [
              ["Visitor management"],
              ["Digital signage"],
              ["Badging, compliance, and access management"],
              ["Self-service kiosk solutions"],
              ["Wayfinding and visitor guidance"],
              ["Workforce management"],
            ],
          },
        ],
      },
      {
        question: "What are the benefits of workforce management software for manufacturing?",
        answer: "Workforce management software can play a crucial role in helping manufacturing companies control labor costs by accurately tracking employee time and attendance, optimize automated scheduling processes, enhance visibility into workforce performance for better resource allocation and more informed decisions, improve employee satisfaction and productivity through self-service capabilities, and ensure compliance with labor laws and regulations.",
        content: [
          { type: "paragraph", content: ["Workforce management software can play a crucial role in helping manufacturing companies:"] },
          {
            type: "list",
            items: [
              ["Control labor costs by accurately tracking employee time and attendance."],
              ["Optimize automated scheduling processes."],
              ["Enhance visibility into workforce performance, thus enabling better resource allocation and more informed decisions."],
              ["Improve employee satisfaction and productivity by providing self-service capabilities."],
              ["Ensure compliance with labor laws and regulations."],
            ],
          },
        ],
      },
      {
        question: "Why is manufacturing time-tracking and scheduling software important?",
        answer: "Manual time-tracking and scheduling processes are prone to errors, leading to inefficient payroll and production planning. Software automates these processes, accurately capturing data and reducing the risk of such errors. Moreover, time-tracking software helps ensure compliance with strict labor regulations regarding work hours, breaks, absence, and overtime by applying relevant rules automatically and generating various reports. Finally, scheduling software with forecasting tools can help proactively plan staffing needs under changing production goals and fluctuating demands.",
        content: [
          { type: "paragraph", content: ["Manual time-tracking and scheduling processes are prone to errors, leading to inefficient payroll and production planning. Software automates these processes, accurately capturing data and reducing the risk of such errors."] },
          { type: "paragraph", content: ["Moreover, time-tracking software helps ensure compliance with strict labor regulations regarding work hours, breaks, absence, and overtime by applying relevant rules automatically and generating various reports."] },
          { type: "paragraph", content: ["Finally, scheduling software with forecasting tools can help proactively plan staffing needs under changing production goals and fluctuating demands."] },
        ],
      },
    ],
  },
  contact: {
    heading: "Contact Us",
    paragraphs: ["Please submit your question or request, and our team will contact you shortly."],
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
} as const satisfies ManufacturingContent;
