export const siteConfig = {
  name: "Kashless Ventures",
  legalName: "Kashless Ventures Pvt. Ltd.",
  tagline: "Technology. Capital. Growth.",
  shortAbout:
    "Kashless Ventures operates at the intersection of practical technology solutions and strategic capital, helping organisations build resilient foundations and enduring value.",
  quote:
    "We build technology that enables businesses and deploy capital where we see the potential to build lasting value.",
  contact: {
    email: "care@kashless.in",
    location: "Gurugram, India",
    registeredOffice: "Kashless Ventures Pvt. Ltd., Gurugram, Haryana, India",
  },
};

export const navigation = [
  { label: "Home", href: "/" },
  {
    label: "Technology Solutions",
    href: "/technology-solutions",
    children: [
      {
        label: "Software & Digital Products",
        href: "/technology-solutions/software-digital-products",
        description: "Business applications and digital workflows built for scale.",
      },
      {
        label: "Cloud & Infrastructure",
        href: "/technology-solutions/cloud-infrastructure",
        description: "Reliable foundations for workloads, data, and connectivity.",
      },
      {
        label: "Cybersecurity",
        href: "/technology-solutions/cybersecurity",
        description: "Practical security measures that reduce risk and protect assets.",
      },
      {
        label: "Hardware & Workplace",
        href: "/technology-solutions/hardware-workplace",
        description: "Connected, productive devices and workplace setups.",
      },
      {
        label: "Licensing & Managed Services",
        href: "/technology-solutions/licensing-managed-services",
        description: "Clear licensing guidance and dependable ongoing support.",
      },
    ],
  },
  {
    label: "Capital & Strategic Investments",
    href: "/capital-strategic-investments",
    children: [
      {
        label: "Investment Approach",
        href: "/capital-strategic-investments/approach",
        description: "Our 5 assessment lenses for evaluating durable value.",
      },
      {
        label: "Focus Areas",
        href: "/capital-strategic-investments/focus-areas",
        description: "Indicative themes across technology-enabled businesses.",
      },
      {
        label: "For Founders & Businesses",
        href: "/capital-strategic-investments/founders-businesses",
        description: "A considered, confidential perspective for growth conversations.",
      },
    ],
  },
  { label: "Technology & Capital", href: "/technology-capital" },
  { label: "About", href: "/about" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const techSolutionsList = [
  {
    slug: "software-digital-products",
    title: "Software & Digital Products",
    href: "/technology-solutions/software-digital-products",
    headline: "Software that supports the way your business needs to work.",
    cardCopy:
      "Business-focused software and digital experiences designed around clearer workflows, usable information and scalable operations.",
    cta: "Discuss your software needs",
    whatWeHelpWith: [
      "Business applications and workflow solutions",
      "Web and customer-facing digital experiences",
      "Process mapping and requirements definition",
      "Integration and data-flow planning",
      "Modernisation of existing digital tools",
    ],
    approach:
      "We align recommendations to the needs of the organisation, the people who will use the solution and the realities of implementation. Where specialist products, vendors or delivery partners are involved, scope and responsibilities are agreed before work begins.",
    goodOutcome:
      "A solution direction that is easier to prioritise, implement and adopt - with the business objective kept in view.",
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    href: "/technology-solutions/cloud-infrastructure",
    headline: "Infrastructure built for continuity, performance and change.",
    cardCopy:
      "Reliable foundations for workloads, data and connectivity - planned with performance, continuity and future growth in mind.",
    cta: "Plan your infrastructure roadmap",
    whatWeHelpWith: [
      "Cloud strategy and migration planning",
      "Infrastructure assessment and upgrade roadmaps",
      "Data, backup and recovery considerations",
      "Network and connectivity requirements",
      "Scalability and continuity planning",
    ],
    approach:
      "We align recommendations to the needs of the organisation, the people who will use the solution and the realities of implementation. Where specialist products, vendors or delivery partners are involved, scope and responsibilities are agreed before work begins.",
    goodOutcome:
      "A more considered foundation for critical workloads and a clearer route from current state to the intended environment.",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    href: "/technology-solutions/cybersecurity",
    headline: "Security that supports confident business.",
    cardCopy:
      "Practical security measures that help reduce risk, improve visibility and support more confident operations.",
    cta: "Start a security conversation",
    whatWeHelpWith: [
      "Security posture and risk discussions",
      "Identity and access considerations",
      "Endpoint, network and cloud security planning",
      "Awareness and operational security practices",
      "Incident-readiness and continuity considerations",
    ],
    approach:
      "We align recommendations to the needs of the organisation, the people who will use the solution and the realities of implementation. Where specialist products, vendors or delivery partners are involved, scope and responsibilities are agreed before work begins.",
    goodOutcome:
      "A practical understanding of priorities and an action plan proportionate to the organisation’s risks and operating model.",
  },
  {
    slug: "hardware-workplace",
    title: "Hardware & Workplace Technology",
    href: "/technology-solutions/hardware-workplace",
    headline: "Workplace technology that keeps people connected and productive.",
    cardCopy:
      "Devices and workplace technology chosen to support productive, connected and dependable teams.",
    cta: "Talk about your workplace technology",
    whatWeHelpWith: [
      "Device and endpoint requirements",
      "Workplace setup and refresh planning",
      "Collaboration and productivity environments",
      "Hybrid-work technology considerations",
      "Procurement coordination and rollout planning",
    ],
    approach:
      "We align recommendations to the needs of the organisation, the people who will use the solution and the realities of implementation. Where specialist products, vendors or delivery partners are involved, scope and responsibilities are agreed before work begins.",
    goodOutcome:
      "Technology choices that are better aligned with your people, their work and the support your organisation can sustain.",
  },
  {
    slug: "licensing-managed-services",
    title: "Licensing & Managed Services",
    href: "/technology-solutions/licensing-managed-services",
    headline: "Less friction in day-to-day technology operations.",
    cardCopy:
      "Simpler technology operations through informed licensing guidance and ongoing support that keeps priorities visible.",
    cta: "Discuss ongoing technology support",
    whatWeHelpWith: [
      "Licensing assessment and renewal planning",
      "Vendor and subscription coordination",
      "Technology support models",
      "Monitoring and maintenance planning",
      "Service reviews and improvement priorities",
    ],
    approach:
      "We align recommendations to the needs of the organisation, the people who will use the solution and the realities of implementation. Where specialist products, vendors or delivery partners are involved, scope and responsibilities are agreed before work begins.",
    goodOutcome:
      "More visibility across recurring technology decisions and a support model designed around the business context.",
  },
];

export const investmentLenses = [
  {
    lens: "Business quality",
    copy: "Is there a clear proposition, credible operating foundation and meaningful path to sustainable value?",
  },
  {
    lens: "Market context",
    copy: "What is changing in the market, and where might the business have a right to win?",
  },
  {
    lens: "Technology relevance",
    copy: "Can technology improve resilience, reach, efficiency, insight or differentiation?",
  },
  {
    lens: "Leadership alignment",
    copy: "Is there clarity of purpose and a shared willingness to build thoughtfully?",
  },
  {
    lens: "Risk & responsibility",
    copy: "Are the risks understood, and can the opportunity be approached with appropriate care?",
  },
];

export const focusAreaThemes = [
  "Technology-enabled businesses and digital transformation opportunities",
  "Businesses strengthening operational foundations for their next phase",
  "Opportunities where technology can support efficiency, resilience or customer value",
  "Founder and leadership teams looking for a thoughtful strategic conversation",
];

export const howWeWork = [
  { step: "Discover", description: "Understand business goals and technology challenges" },
  { step: "Assess", description: "Analyze infrastructure, applications, security and cost" },
  { step: "Design", description: "Create the technical approach and roadmap" },
  { step: "Build", description: "Develop, migrate and implement" },
  { step: "Secure", description: "Protect users, applications, infrastructure and data" },
  { step: "Scale", description: "Continuously evolve as the business grows" },
];

export const valuesList = [
  {
    title: "Clarity over complexity",
    description: "We make decisions and solutions easier to understand.",
  },
  {
    title: "Long-term thinking",
    description: "We look beyond immediate activity to durable outcomes.",
  },
  {
    title: "Practical execution",
    description: "Strategy matters only when it can be carried into action.",
  },
  {
    title: "Partnership mindset",
    description: "The strongest work is built through aligned, respectful relationships.",
  },
  {
    title: "Responsible growth",
    description: "We pursue opportunity with discipline, integrity and sound judgement.",
  },
];

export const partnershipPrinciples = [
  "Complementary expertise and clear accountability",
  "Shared commitment to quality, integrity and client outcomes",
  "Open, practical communication",
  "A willingness to build relationships that can deepen over time",
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
    name: "Technology solutions",
    intro:
      "Tell us about the technology challenge, current environment and the outcome you are working toward.",
    formCta: "Talk to Technology",
    placeholderMessage:
      "Describe your technology environment, key priorities or the challenge you are looking to address...",
  },
  {
    id: "strategic",
    name: "Strategic opportunities",
    intro:
      "Share a short introduction to the business or opportunity and the conversation you would like to have.",
    formCta: "Discuss an Opportunity",
    placeholderMessage:
      "Tell us briefly about your business, the strategic opportunity or growth phase you are exploring...",
  },
  {
    id: "partnerships",
    name: "Partnerships",
    intro:
      "Tell us who you are, what you do and how you see a potential collaboration.",
    formCta: "Partner With Us",
    placeholderMessage:
      "Share details about your capabilities, coverage, and the kind of collaboration you envision...",
  },
  {
    id: "general",
    name: "General enquiries",
    intro:
      "For all other questions, send us a message and we will direct it appropriately.",
    formCta: "Send an Enquiry",
    placeholderMessage:
      "How can we assist you? Tell us about your enquiry...",
  },
];

export const seoMetadataMap = {
  home: {
    title: "Kashless Ventures | Technology. Capital. Growth.",
    description:
      "Kashless Ventures helps organisations build stronger technology foundations and explore strategic opportunities for long-term value.",
  },
  about: {
    title: "About Kashless Ventures | Technology & Strategic Thinking",
    description:
      "Learn how Kashless Ventures brings practical technology capability and long-term strategic thinking together.",
  },
  technologySolutions: {
    title: "Technology Solutions | Kashless Ventures",
    description:
      "Explore practical technology solutions across software, cloud, infrastructure, security, workplace technology and managed services.",
  },
  software: {
    title: "Software & Digital Products | Kashless Ventures",
    description:
      "Business-focused software and digital product thinking designed around clearer workflows and scalable operations.",
  },
  cloud: {
    title: "Cloud & Infrastructure | Kashless Ventures",
    description:
      "Plan reliable cloud and infrastructure foundations for performance, continuity and future change.",
  },
  cybersecurity: {
    title: "Cybersecurity | Kashless Ventures",
    description:
      "Practical cybersecurity thinking to support stronger visibility, resilience and confident business operations.",
  },
  hardware: {
    title: "Hardware & Workplace Technology | Kashless Ventures",
    description:
      "Devices and workplace technology chosen to support productive, connected and dependable teams.",
  },
  licensing: {
    title: "Licensing & Managed Services | Kashless Ventures",
    description:
      "Simpler technology operations through informed licensing guidance and ongoing support that keeps priorities visible.",
  },
  capital: {
    title: "Capital & Strategic Investments | Kashless Ventures",
    description:
      "Explore Kashless Ventures’ considered approach to select strategic opportunities and long-term value creation.",
  },
  investmentApproach: {
    title: "Investment Approach | Kashless Ventures",
    description:
      "A considered approach to strategic opportunities guided by commercial context, analytical discipline, and technology insight.",
  },
  focusAreas: {
    title: "Focus Areas | Kashless Ventures",
    description:
      "Interested in exploring opportunities where technology capability, commercial clarity and long-term thinking work together.",
  },
  foundersBusinesses: {
    title: "For Founders & Businesses | Kashless Ventures",
    description:
      "Bring the opportunity. We will bring a considered perspective for founders and business leaders exploring strategic next steps.",
  },
  technologyCapital: {
    title: "Technology & Capital | Kashless Ventures",
    description:
      "See how Kashless Ventures connects practical technology capability with a long-term strategic perspective.",
  },
  partnerships: {
    title: "Partnerships | Kashless Ventures",
    description:
      "Explore potential technology, delivery and strategic collaborations with Kashless Ventures.",
  },
  careers: {
    title: "Careers | Kashless Ventures",
    description:
      "Explore opportunities to build thoughtful, practical work at the intersection of technology and growth.",
  },
  contact: {
    title: "Contact Kashless Ventures",
    description:
      "Start a conversation about technology solutions, strategic opportunities or partnerships with Kashless Ventures.",
  },
  disclaimer: {
    title: "Legal & Investment Disclaimer | Kashless Ventures",
    description:
      "Important legal, regulatory and general disclaimers regarding website content, submissions, and technology services.",
  },
  privacyPolicy: {
    title: "Privacy Policy | Kashless Ventures",
    description:
      "Learn how Kashless Ventures Pvt. Ltd. collects, handles, and protects information submitted through this website.",
  },
  terms: {
    title: "Terms of Use | Kashless Ventures",
    description:
      "Terms and conditions governing the use of the Kashless Ventures Pvt. Ltd. public website.",
  },
  cookiePolicy: {
    title: "Cookie Notice | Kashless Ventures",
    description:
      "Information about cookie usage and privacy practices on the Kashless Ventures website.",
  },
};

export const serviceOptions = [
  "Software & Digital Products",
  "Cloud & Infrastructure",
  "Cybersecurity",
  "Hardware & Workplace Technology",
  "Licensing & Managed Services",
  "Strategic Opportunity",
  "Partnerships",
  "General Enquiry",
];

