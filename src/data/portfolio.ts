export interface CareerMilestone {
  year: string;
  role: string;
  scale?: string;
  description: string;
  highlight?: boolean;
}

export interface ExpertiseArea {
  id: string;
  title: string;
  scopeTag: string;
  description: string;
  responsibilities: string[];
  isPrimary?: boolean;
}

export interface RecognitionItem {
  id: string;
  title: string;
  period: string;
  description: string;
}

export interface QualificationItem {
  id: string;
  title: string;
  subTitle?: string;
  accreditedBy?: string;
  category: "Professional Credential" | "Specialised Certification";
}

export interface KeyFact {
  numeric: string;
  label: string;
  detail: string;
}

export interface PortfolioData {
  identity: {
    fullName: string;
    designation: string;
    subDesignation: string;
    sectorLabel: string;
    experienceYears: number;
    sinceYear: number;
    employerDisplayMode: "neutral" | "explicit";
    neutralSectorName: string;
    explicitBankName?: string;
  };
  portrait: {
    assetPath: string;
    altText: string;
    hasRealPhoto: boolean;
  };
  hero: {
    eyebrow: string;
    headline: string;
    supportingParagraph: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  profile: {
    sectionLabel: string;
    heading: string;
    paragraphs: string[];
    guidingPrinciples: {
      title: string;
      description: string;
    }[];
  };
  facts: KeyFact[];
  expertise: {
    sectionLabel: string;
    heading: string;
    supportingText: string;
    areas: ExpertiseArea[];
  };
  career: {
    sectionLabel: string;
    heading: string;
    supportingText: string;
    milestones: CareerMilestone[];
  };
  leadership: {
    sectionLabel: string;
    heading: string;
    narrative: string[];
    themes: {
      title: string;
      eyebrow: string;
      description: string;
    }[];
    watermarkWord: string;
  };
  recognition: {
    sectionLabel: string;
    heading: string;
    supportingText: string;
    items: RecognitionItem[];
  };
  qualifications: {
    sectionLabel: string;
    heading: string;
    supportingText: string;
    items: QualificationItem[];
  };
  closing: {
    headline: string;
    supportingText: string;
    ctaLabel: string;
  };
  footer: {
    disclaimer: string;
    attribution: string;
  };
}

export const portfolioData: PortfolioData = {
  identity: {
    fullName: "Swati Singh",
    designation: "Chief Manager",
    subDesignation: "Banking Professional",
    sectorLabel: "Public-Sector Banking",
    experienceYears: 16,
    sinceYear: 2010,
    employerDisplayMode: "neutral",
    neutralSectorName: "Public-Sector Banking",
  },
  portrait: {
    assetPath: "/images/swati-singh-portrait.jpg",
    altText: "Portrait of Swati Singh, Chief Manager & Banking Professional",
    hasRealPhoto: true,
  },
  hero: {
    eyebrow: "BANKING • CREDIT • ASSET QUALITY",
    headline: "Sound judgement. Steady leadership. Enduring trust.",
    supportingParagraph:
      "Bringing approximately 16 years of banking experience across branch leadership, credit-related responsibilities, and institutional operations. Currently focused on Recovery, Planning and Development across three districts.",
    primaryCtaLabel: "Explore Professional Journey",
    secondaryCtaLabel: "Discover Areas of Expertise",
  },
  profile: {
    sectionLabel: "01 / PROFESSIONAL PROFILE",
    heading: "A career built on responsibility.",
    paragraphs: [
      "Swati Singh is a banking professional with approximately 16 years of experience, progressing from her initial appointment as a Probationary Officer in 2010 to her current role as Chief Manager.",
      "Her professional journey includes experience across semi-urban and urban branches, retail credit processing, branch leadership, and wider operational responsibilities.",
      "Her current professional responsibilities encompass Recovery, Planning and Development across three districts, while Credit and Asset Quality remain her identified areas of expertise.",
    ],
    guidingPrinciples: [
      {
        title: "Rigorous Evaluation",
        description: "Sound credit discipline grounded in systematic appraisal and asset quality stewardship.",
      },
      {
        title: "Operational Discipline",
        description: "Maintaining strict institutional adherence, audit integrity, and regulatory governance.",
      },
      {
        title: "Public Accountability",
        description: "Committed stewardship across diverse communities in semi-urban and urban banking ecosystems.",
      },
    ],
  },
  facts: [
    {
      numeric: "16",
      label: "YEARS OF BANKING EXPERIENCE",
      detail: "Career beginning in 2010",
    },
    {
      numeric: "10",
      label: "YEARS IN BRANCH HEAD ROLES",
      detail: "2016–2026 across branch networks",
    },
    {
      numeric: "03",
      label: "DISTRICTS UNDER RESPONSIBILITY",
      detail: "Current scope in Recovery & Planning",
    },
    {
      numeric: "07",
      label: "BRANCH TEAM MEMBERS MANAGED",
      detail: "Direct operational leadership",
    },
  ],
  expertise: {
    sectionLabel: "02 / PROFESSIONAL EXPERTISE",
    heading: "Experience across the work that matters.",
    supportingText:
      "A professional background spanning credit, asset quality, branch leadership, and operational responsibilities.",
    areas: [
      {
        id: "credit-asset-quality",
        title: "Credit & Asset Quality",
        scopeTag: "Core Specialisation",
        description:
          "Core professional areas of expertise, supported by experience across credit-related responsibilities and banking operations.",
        responsibilities: [
          "Retail credit processing and rigorous underwriting standards",
          "Comprehensive appraisal and post-disbursement monitoring",
          "Continuous asset quality assessment and early stress mitigation",
          "Ensuring regulatory adherence and prudential norms",
        ],
        isPrimary: true,
      },
      {
        id: "recovery",
        title: "Recovery",
        scopeTag: "Multi-District Mandate",
        description:
          "Part of the current professional scope, involving responsibilities across a wider multi-district banking environment.",
        responsibilities: [
          "Supervision of recovery mechanisms across three districts",
          "Structured resolution strategies for non-performing accounts",
          "Coordination with institutional legal and administrative bodies",
          "Systematic monitoring of stressed asset accounts",
        ],
      },
      {
        id: "planning-development",
        title: "Planning & Development",
        scopeTag: "Institutional Coordination",
        description:
          "Current departmental responsibilities extending across three districts.",
        responsibilities: [
          "Resource allocation and operational target planning",
          "Multi-district developmental coordination and review",
          "Alignment of administrative priorities with institutional directives",
          "Cross-branch performance monitoring and milestone tracking",
        ],
      },
      {
        id: "branch-leadership",
        title: "Branch Leadership & Operations",
        scopeTag: "Operational Leadership",
        description:
          "Experience as Branch Head across semi-urban and urban branches, with responsibility for managing the diverse demands of branch operations.",
        responsibilities: [
          "Tenure as Branch Head (2016–2026) across urban and semi-urban centres",
          "Direct management of branch personnel and staff development",
          "Overall branch banking operations, customer service, and compliance",
          "Execution of institutional business targets with operational rigor",
        ],
      },
    ],
  },
  career: {
    sectionLabel: "03 / CAREER JOURNEY",
    heading: "Progression shaped by experience.",
    supportingText:
      "From an initial appointment in banking to broader branch leadership and multi-district responsibilities.",
    milestones: [
      {
        year: "2010",
        role: "Probationary Officer",
        scale: "Scale I",
        description: "Began her banking career as a Probationary Officer.",
      },
      {
        year: "2012",
        role: "Promotion to Scale II",
        scale: "Scale II",
        description: "Progressed to Scale II in 2012.",
      },
      {
        year: "2016–2026",
        role: "Branch Head Responsibilities",
        scale: "Branch Leadership",
        description:
          "Worked in different capacities, including Assistant Manager, Deputy Manager and Branch Head, with branch leadership experience across semi-urban and urban locations.",
        highlight: true,
      },
      {
        year: "2020",
        role: "Promotion to Scale III",
        scale: "Scale III",
        description: "Progressed to Scale III in 2020.",
      },
      {
        year: "2026",
        role: "Promotion to Scale IV — Chief Manager",
        scale: "Scale IV",
        description:
          "Progressed to Scale IV in 2026. Her current professional profile identifies her as Chief Manager, with responsibilities encompassing Recovery, Planning and Development across three districts.",
        highlight: true,
      },
    ],
  },
  leadership: {
    sectionLabel: "04 / LEADERSHIP",
    heading: "Leadership through accountability.",
    narrative: [
      "Branch leadership requires the coordination of people, processes, customer service, and operational responsibilities.",
      "Swati Singh's professional experience includes approximately ten years in Branch Head roles and managing a branch team of seven employees, alongside the practical demands of banking operations in semi-urban and urban branches.",
      "Her professional journey reflects sustained responsibility across different banking roles and operating environments.",
    ],
    themes: [
      {
        title: "Accountability",
        eyebrow: "FOUNDATION OF LEADERSHIP",
        description:
          "Acknowledge the broad operational responsibility associated with branch leadership and multi-district oversight.",
      },
      {
        title: "Operational Breadth",
        eyebrow: "MULTIFACETED CAPABILITY",
        description:
          "Reflect her experience working across several banking functions and diverse operating environments from semi-urban to urban.",
      },
      {
        title: "Customer Service",
        eyebrow: "INSTITUTIONAL INTEGRITY",
        description:
          "Reflect her stated emphasis on diligent service and the importance of effective customer service in maintaining institutional trust.",
      },
    ],
    watermarkWord: "RESPONSIBILITY",
  },
  recognition: {
    sectionLabel: "05 / RECOGNITION",
    heading: "Recognition associated with performance.",
    supportingText:
      "Professional recognition recorded during two consecutive financial years.",
    items: [
      {
        id: "zm-club",
        title: "ZM Club Membership",
        period: "FY 2021–22",
        description:
          "Recorded recognition associated with professional performance during the financial year.",
      },
      {
        id: "md-ceo-club",
        title: "MD & CEO Club Membership",
        period: "FY 2022–23",
        description:
          "Recorded recognition associated with professional performance during the financial year.",
      },
    ],
  },
  qualifications: {
    sectionLabel: "06 / PROFESSIONAL DEVELOPMENT",
    heading: "A foundation in professional learning.",
    supportingText:
      "Professional banking qualifications and specialised development form part of the career record.",
    items: [
      {
        id: "jaiib",
        title: "JAIIB",
        subTitle: "Junior Associate of the Indian Institute of Bankers",
        accreditedBy: "Indian Institute of Banking & Finance (IIBF)",
        category: "Professional Credential",
      },
      {
        id: "caiib",
        title: "CAIIB",
        subTitle: "Certified Associate of the Indian Institute of Bankers",
        accreditedBy: "Indian Institute of Banking & Finance (IIBF)",
        category: "Professional Credential",
      },
      {
        id: "moodys-credit",
        title: "Certificate Course in Commercial Credit",
        subTitle: "Advanced Credit Appraisal & Commercial Risk Analysis",
        accreditedBy: "Moody's Analytics",
        category: "Specialised Certification",
      },
    ],
  },
  closing: {
    headline: "Experience brings perspective. Responsibility earns trust.",
    supportingText:
      "A professional journey shaped by banking experience, branch leadership, credit-related responsibilities, and continued career progression.",
    ctaLabel: "Return to Overview",
  },
  footer: {
    disclaimer:
      "Personal professional portfolio. This website is not an official bank website and does not represent an institutional endorsement.",
    attribution: "Executive Portfolio of Swati Singh, Chief Manager",
  },
};

