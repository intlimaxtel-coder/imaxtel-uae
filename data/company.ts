export interface StatItem {
  label: string;
  value: string;
  description: string;
  universe: number;
  coverage: number;
  coveragePercent: string;
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface OfficeLocation {
  id: string;
  name: string;
  country: string;
  isHeadquarters?: boolean;
  address: string[];
  mapUrl?: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  established: string;
  description: string;
  mission: string;
  vision: string;
  values: CoreValue[];
  stats: StatItem[];
  offices: OfficeLocation[];
  contact: {
    address: string[];
    kuwaitAddress: string[];
    phones: string[];
    emails: string[];
    infoEmail: string;
    careersEmail: string;
    website: string;
  };
}

export const companyData: CompanyInfo = {
  name: "IMAXTEL GOODS WHOLESALERS CO. L.L.C",
  tagline: "Connecting Global Products with UAE & Regional Markets",
  established: "2010",
  description: "IMAxtel Goods Wholesalers Co. L.L.C is a premier FMCG business group in the UAE & GCC specializing in the import, global sourcing, and regional distribution of high-quality Fast-Moving Consumer Goods. Sourcing directly from international hubs, we connect global suppliers with UAE and GCC markets through structured wholesale, retail, and logistics networks.",
  mission: "To source premium products from trusted global suppliers and distribute them efficiently through a robust supply network across the UAE and GCC, maintaining the highest standards of quality, reliability, and client satisfaction.",
  vision: "To become a leading global trading company in the FMCG sector based out of the UAE & GCC, recognized for delivering top-tier consumer products, dependable supply chain services, and innovative distribution solutions.",
  values: [
    {
      title: "Integrity",
      description: "Conducting business with absolute transparency, honesty, and maintaining ethical standards across all partnerships and client operations."
    },
    {
      title: "Quality",
      description: "Ensuring that every product sourced and distributed meets stringent international standards and exceeds customer expectations."
    },
    {
      title: "Innovation",
      description: "Embracing modern supply chain technologies, automated inventory systems, and innovative distribution methodologies."
    },
    {
      title: "Sustainability",
      description: "Promoting responsible product choices, eco-friendly supply chain operations, and reducing environmental impact where possible."
    }
  ],
  stats: [
    {
      label: "Grocery (DTS)",
      value: "3,000+",
      description: "Neighbourhood grocery stores and retail outlets supplied with essential goods.",
      universe: 3000,
      coverage: 1750,
      coveragePercent: "58%"
    },
    {
      label: "Hypermarkets (OT)",
      value: "50",
      description: "Large-scale modern trade hypermarkets with structured shelf listings.",
      universe: 50,
      coverage: 24,
      coveragePercent: "48%"
    },
    {
      label: "HORECA",
      value: "4,000+",
      description: "Hotels, restaurants, and catering businesses serviced with reliable supply chain systems.",
      universe: 4000,
      coverage: 2158,
      coveragePercent: "54%"
    },
    {
      label: "Supermarkets (FS)",
      value: "150",
      description: "Cooperative societies and local retail supermarkets with high consumer traffic.",
      universe: 150,
      coverage: 83,
      coveragePercent: "55%"
    },
    {
      label: "Wholesale (WS)",
      value: "20",
      description: "Major wholesale hubs and trade distributors handling bulk quantities.",
      universe: 20,
      coverage: 20,
      coveragePercent: "100%"
    }
  ],
  offices: [
    {
      id: "uae-hq",
      name: "UAE Corporate Headquarters",
      country: "United Arab Emirates",
      isHeadquarters: true,
      address: [
        "Muteena Street, Burj Nahar Mall",
        "M2 Floor, Office No. A30",
        "Dubai, United Arab Emirates"
      ],
      mapUrl: "https://maps.google.com/?q=Burj+Nahar+Mall+Muteena+Street+Dubai+UAE"
    },
    {
      id: "kuwait-office",
      name: "Kuwait Regional Office",
      country: "Kuwait",
      isHeadquarters: false,
      address: [
        "Office No-6, 2nd Floor, Al Zibin Complex",
        "Salem Al Mubraak Street, Block 9",
        "Salmiya, Kuwait"
      ],
      mapUrl: "https://maps.google.com/?q=Al+Zibin+Complex+Salem+Al+Mubarak+Street+Salmiya+Kuwait"
    }
  ],
  contact: {
    address: [
      "Muteena Street, Burj Nahar Mall",
      "M2 Floor, Office No. A30",
      "Dubai, United Arab Emirates"
    ],
    kuwaitAddress: [
      "Office No-6, 2nd Floor, Al Zibin Complex",
      "Salem Al Mubraak Street, Block 9",
      "Salmiya, Kuwait"
    ],
    phones: [
      "+971 588 179166",
      "+971 043 381870"
    ],
    emails: [
      "info@imaxtelintl.ae",
      "hr@imaxtelintl.ae"
    ],
    infoEmail: "info@imaxtelintl.ae",
    careersEmail: "hr@imaxtelintl.ae",
    website: "www.imaxtelintl.ae"
  }
};
