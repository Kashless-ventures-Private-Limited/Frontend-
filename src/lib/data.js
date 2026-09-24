export const siteConfig = {
  name: "Kashless Ventures",
  legalName: "Kashless Ventures Pvt. Ltd.",
  tagline:
    "Technology Solutions. Business Consultation. Strategic Partnerships.",
  positioning:
    "Technology Solutions. Business Consultation. Strategic Partnerships.",
  shortAbout:
    "Kashless Ventures Pvt. Ltd. is a technology and business solutions company focused on helping organizations solve challenges, improve the way they operate and create opportunities for sustainable growth.",
  quote:
    "Kashless Ventures brings technology, business thinking and strategic collaboration together to help businesses move forward.",
  contact: {
    email: "care@kashless.in",
    location: "Gurugram, India",
    registeredOffice: "Kashless Ventures Pvt. Ltd., Gurugram, Haryana, India",
  },
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Technology Solutions", href: "/technology-solutions" },
  {
    label: "Business Consultation",
    href: "/business-consultation",
    children: [
      { label: "Strategic Partnerships", href: "/strategic-partnerships" },
    ],
  },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const techSolutionsList = [
  {
    slug: "software-digital-products",
    title: "Software & Web Development",
    href: "/technology-solutions/software-digital-products",
    headline: "Software designed around real business requirements.",
    cardCopy:
      "Custom websites, web applications, business software, APIs, automation and digital products designed around your requirements.",
    whatWeHelpWith: [
      "Custom websites and web applications",
      "Business software and APIs",
      "Automation and digital products",
      "Integration and data-flow planning",
      "Modernisation of existing digital tools",
    ],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    href: "/technology-solutions/cloud-infrastructure",
    headline:
      "Infrastructure planned for continuity, performance and change.",
    cardCopy:
      "Cloud consulting, migration, infrastructure planning, optimization, servers, storage, networking and workplace IT solutions.",
    whatWeHelpWith: [
      "Cloud consulting and migration",
      "Infrastructure planning and optimization",
      "Servers, storage and networking",
      "Backup and recovery considerations",
      "Workplace IT infrastructure",
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    href: "/technology-solutions/cybersecurity",
    headline: "Practical security that helps reduce technology risk.",
    cardCopy:
      "Security assessments, network and endpoint protection, data protection and practical security management.",
    whatWeHelpWith: [
      "Security assessments",
      "Network and endpoint protection",
      "Data protection",
      "Security management",
      "Practical risk reduction",
    ],
  },
  {
    slug: "hardware-workplace",
    title: "Hardware & IT Infrastructure",
    href: "/technology-solutions/hardware-workplace",
    headline: "Technology infrastructure for modern workplaces.",
    cardCopy:
      "Business hardware, servers, storage, networking, endpoints and complete IT infrastructure support for modern workplaces.",
    whatWeHelpWith: [
      "Business hardware and endpoints",
      "Servers and storage",
      "Networking requirements",
      "Workplace IT infrastructure",
      "Infrastructure support",
    ],
  },
  {
    slug: "licensing-managed-services",
    title: "Software Licensing & Managed IT",
    href: "/technology-solutions/licensing-managed-services",
    headline: "Clearer technology operations and ongoing support.",
    cardCopy:
      "Licensing guidance, procurement support, license management, monitoring, maintenance, helpdesk and technology support.",
    whatWeHelpWith: [
      "Software licensing guidance",
      "Procurement and renewal support",
      "License management",
      "Monitoring and maintenance",
      "Helpdesk and technology support",
    ],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    href: "/technology-solutions/digital-transformation",
    headline: "Modernize processes and improve how work gets done.",
    cardCopy:
      "Process automation, workflow improvement, data-driven decision support and technology modernization to improve business efficiency.",
    whatWeHelpWith: [
      "Process automation",
      "Workflow improvement",
      "Technology modernization",
      "Data-driven decision support",
      "Digital capability planning",
    ],
  },
];

export const howWeWork = [
  {
    step: "Understand",
    description:
      "Listen, clarify the challenge and understand the business context.",
  },
  {
    step: "Plan",
    description:
      "Define priorities, requirements and a practical path forward.",
  },
  {
    step: "Build",
    description:
      "Develop, configure or implement the agreed solution.",
  },
  {
    step: "Secure",
    description:
      "Address security, data protection and operational risk.",
  },
  {
    step: "Deploy",
    description:
      "Put the solution into operation with the right people and process.",
  },
  {
    step: "Support",
    description:
      "Maintain, monitor and improve the solution as needs evolve.",
  },
  {
    step: "Scale",
    description:
      "Extend capabilities as the business grows and priorities change.",
  },
];

export const consultationServices = [
  {
    title: "Business Process Improvement",
    description:
      "Review existing processes, identify inefficiencies and create practical improvement opportunities.",
  },
  {
    title: "Technology & Digital Strategy",
    description:
      "Connect business objectives with practical technology choices, priorities and implementation plans.",
  },
  {
    title: "Workflow & SOP Design",
    description:
      "Structure workflows, documentation and standard operating procedures to create consistency and improve execution.",
  },
  {
    title: "Operational Planning",
    description:
      "Translate business requirements into clear plans, responsibilities, timelines and execution priorities.",
  },
  {
    title: "Growth & Opportunity Assessment",
    description:
      "Evaluate business challenges and opportunities to identify realistic areas for improvement, expansion or collaboration.",
  },
  {
    title: "Implementation Support",
    description:
      "Stay involved beyond recommendations by helping teams coordinate actions, track progress and move from plan to execution.",
  },
];

export const valuesList = [
  {
    title: "Clarity",
    description:
      "We believe good decisions start with understanding the real problem.",
  },
  {
    title: "Practicality",
    description:
      "We focus on solutions that can be implemented and used in the real world.",
  },
  {
    title: "Collaboration",
    description:
      "We bring the right people and capabilities together around shared outcomes.",
  },
  {
    title: "Integrity",
    description:
      "We communicate clearly and approach execution responsibly.",
  },
  {
    title: "Continuous Learning",
    description:
      "We keep improving our understanding, methods and capabilities.",
  },
  {
    title: "Long-Term Value",
    description:
      "We build relationships and solutions with durable outcomes in mind.",
  },
];

export const partnershipPrinciples = [
  "Complementary capabilities and clear accountability",
  "Shared commitment to quality, integrity and outcomes",
  "Open, practical communication",
  "Relationships that can deepen over time",
];

export const careersValues = [
  "Curiosity and a willingness to keep learning",
  "Ownership, reliability and sound judgement",
  "Clear communication and respect for different perspectives",
  "Practical problem-solving over unnecessary complexity",
  "Commitment to responsible, high-quality work",
];

export const enquiryRoutes = [
  {
    id: "technology",
    name: "Technology Requirement",
    intro:
      "Tell us about the technology challenge, current environment and outcome you are working toward.",
    placeholderMessage:
      "Describe your technology environment, priorities or the challenge you are looking to address...",
  },
  {
    id: "consultation",
    name: "Business Consultation",
    intro:
      "Tell us about the business challenge, process or decision where you need practical support.",
    placeholderMessage:
      "Describe the business challenge, process or decision you would like to discuss...",
  },
  {
    id: "partnerships",
    name: "Strategic Partnership",
    intro:
      "Tell us who you are, what you do and where you see a potential collaboration.",
    placeholderMessage:
      "Share your capabilities and the kind of collaboration you would like to explore...",
  },
  {
    id: "general",
    name: "General Business Enquiry",
    intro:
      "For all other questions, send us a message and we will direct it appropriately.",
    placeholderMessage: "Tell us how we can help...",
  },
];

/*
 * SEO metadata keys intentionally match the route/page concepts used
 * throughout the application.
 *
 * Technology solution pages:
 *   /technology-solutions/software-digital-products
 *   /technology-solutions/cloud-infrastructure
 *   /technology-solutions/cybersecurity
 *   /technology-solutions/hardware-workplace
 *   /technology-solutions/licensing-managed-services
 *   /technology-solutions/digital-transformation
 */
export const siteUrl = "https://www.kashless.in";

export function createSeoMetadata(key, canonicalPath) {
  const seo = seoMetadataMap[key];
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${siteUrl}${canonicalPath}`,
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary",
      title: seo.title,
      description: seo.description,
    },
  };
}

export const seoMetadataMap = {
  home: {
    title:
      "Technology Solutions & Business Consultation",
    description:
      "Technology solutions, business consultation and strategic partnerships for businesses looking to build, improve and grow.",
  },

  about: {
    title: "About Us",
    description:
      "Learn how Kashless Ventures combines practical technology, business thinking and collaboration to help organizations move forward.",
  },

  technologySolutions: {
    title: "Technology Solutions",
    description:
      "Software, cloud, infrastructure, cybersecurity, licensing, managed IT and digital transformation solutions for businesses.",
  },

  softwareDigitalProducts: {
    title: "Software & Web Development",
    description:
      "Custom websites, web applications, business software, APIs, automation and digital products designed around real business requirements.",
  },

  cloudInfrastructure: {
    title: "Cloud & Infrastructure",
    description:
      "Cloud consulting, migration, infrastructure planning, optimization, servers, storage, networking and workplace IT solutions for businesses.",
  },

  cybersecurity: {
    title: "Cybersecurity",
    description:
      "Security assessments, network and endpoint protection, data protection and practical cybersecurity management for businesses.",
  },

  hardwareWorkplace: {
    title: "Hardware & IT Infrastructure",
    description:
      "Business hardware, servers, storage, networking, endpoints and IT infrastructure support for modern workplaces.",
  },

  licensingManagedServices: {
    title: "Software Licensing & Managed IT",
    description:
      "Software licensing guidance, procurement support, license management, monitoring, maintenance, helpdesk and managed IT support.",
  },

  digitalTransformation: {
    title: "Digital Transformation",
    description:
      "Process automation, workflow improvement, technology modernization and data-driven solutions designed to improve business efficiency.",
  },

  consultation: {
    title: "Business Consultation",
    description:
      "Practical business consultation covering process improvement, technology strategy, workflow design, operational planning and implementation support.",
  },

  partnerships: {
    title: "Strategic Partnerships",
    description:
      "Strategic business and technology partnerships that combine complementary capabilities to create meaningful opportunities and long-term value.",
  },

  contact: {
    title: "Contact",
    description:
      "Start a conversation about technology requirements, business consultation, strategic partnerships or a general business enquiry.",
  },

  insights: {
    title: "Insights",
    description:
      "Practical perspectives on technology trends, process improvement, digital transformation, cybersecurity and business strategy.",
  },

  careers: {
    title: "Careers",
    description:
      "Explore opportunities to build thoughtful, practical work at Kashless Ventures.",
  },

  disclaimer: {
    title: "Website Disclaimer",
    description: "Website disclaimer for Kashless Ventures Pvt. Ltd.",
  },

  privacyPolicy: {
    title: "Privacy Policy",
    description:
      "Privacy practices for the Kashless Ventures website.",
  },

  terms: {
    title: "Terms of Use",
    description:
      "Terms governing use of the Kashless Ventures website.",
  },

  cookiePolicy: {
    title: "Cookie Notice",
    description:
      "Cookie and privacy information for the Kashless Ventures website.",
  },
};

export const serviceOptions = [
  "Technology Requirement",
  "Business Consultation",
  "Strategic Partnership",
  "General Business Enquiry",
];