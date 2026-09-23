export interface Division {
  id: string;
  number: string;
  name: string;
  role: string;
  personality: string;
  accentColor: string;
  hoverAccentColor: string;
  shortDesc: string;
  longDesc: string;
  focusAreas: string[];
  location: string;
  href?: string;
  stats?: { label: string; value: string }[];
  imagePlaceholder: string;
  logoPlaceholder: string;
}

export const divisionsData: Division[] = [
  {
    id: "imaxtel-import-distribution",
    number: "01",
    name: "IMAxtel Import & Distribution",
    role: "Parent Company & Core Import Operation",
    personality: "Corporate, International, Operational, Sophisticated",
    accentColor: "#009EE2", // Primary Sky Blue
    hoverAccentColor: "#0284C7",
    shortDesc: "The strategic core of the group managing global FMCG sourcing, imports, supply chain, and logistics across UAE and GCC markets.",
    longDesc: "IMAxtel Import & Distribution serves as the parent company and the structural backbone of the entire business group. Operating from Dubai, UAE, the division focuses on importing premium FMCG goods from leading international hubs including Europe, Philippines, Thailand, Vietnam, Singapore, India, and Poland. By managing critical supply chain operations and maintaining high international quality standards, it ensures a seamless flow of goods to wholesalers, retailers, and end-consumers.",
    focusAreas: [
      "Import Operations",
      "Global Sourcing",
      "FMCG Distribution",
      "Wholesale Distribution Channels",
      "Logistics Infrastructure",
      "Supply Chain Management"
    ],
    location: "Dubai, United Arab Emirates (HQ)",
    href: "/group/imaxtel-import-distribution",
    stats: [
      { label: "Sourcing Markets", value: "7+ Countries" },
      { label: "Storage Infrastructure", value: "2,250 sq. m" },
      { label: "Year Established", value: "2010" }
    ],
    imagePlaceholder: "division-imaxtel-01",
    logoPlaceholder: "imaxtel-import-distribution"
  },
  {
    id: "malabar-food-stuff",
    number: "02",
    name: "Malabar Food Stuff",
    role: "Wholesale & Bulk Supply Division",
    personality: "Energetic, Operational, Wholesale-focused, FMCG-driven",
    accentColor: "#0C805B", // Brand Green
    hoverAccentColor: "#0A6E4F",
    shortDesc: "A primary wholesale distribution hub supplying grocery, food stuff, and FMCG products to businesses and bulk buyers.",
    longDesc: "Malabar Food Stuff is the wholesale powerhouse of IMAxtel. Operating across the UAE and regional trade channels, it serves as the key supply node for local and regional grocery stores, supermarkets, restaurants, hotels, and catering companies (HORECA). Backed by a dedicated delivery fleet, it provides consistent supply and bulk distribution services, playing a critical role in market coverage.",
    focusAreas: [
      "Wholesale FMCG Distribution",
      "Grocery Bulk Supply",
      "Retailer & Co-op Supply",
      "HORECA Client Relations",
      "Dedicated Delivery Operations",
      "Cold Chain Storage Solutions"
    ],
    location: "Wholesale Hub, UAE & Regional GCC",
    href: "/group/malabar-food-stuff",
    stats: [
      { label: "Delivery Fleet", value: "5+ Vehicles" },
      { label: "HORECA Clients", value: "4,000+" },
      { label: "Key Channels", value: "Wholesale Hub" }
    ],
    imagePlaceholder: "division-malabar-01",
    logoPlaceholder: "malabar-food-stuff"
  },
  {
    id: "manila-supermarket",
    number: "03",
    name: "Manila Supermarket",
    role: "Retail & Consumer Division",
    personality: "Vibrant, Welcoming, Consumer-focused, Community-driven",
    accentColor: "#0284C7", // Sky Blue Shade
    hoverAccentColor: "#0369A1",
    shortDesc: "Vibrant community-focused retail supermarket specializing in imported Filipino goods and international FMCG products.",
    longDesc: "Manila Supermarket represents the group's direct-to-consumer retail presence. Serving regional consumer hubs across the UAE and GCC, it specializes in importing authentic Filipino foods, household brands, and specialized international goods. Manila Supermarket is committed to delivering a comfortable, accessible, and high-quality shopping experience for expatriates and international food lovers alike.",
    focusAreas: [
      "Retail Operations",
      "Authentic Filipino Specialty Goods",
      "International Grocery Items",
      "Direct Customer Service",
      "Community-Focused Shopping",
      "FMCG In-Store Merchandising"
    ],
    location: "Retail Operations, UAE & GCC",
    href: "https://www.manilahyper.com",
    stats: [
      { label: "Customer Experience", value: "Community Focused" },
      { label: "Product Portfolio", value: "1,000+ Items" },
      { label: "Division Type", value: "B2C Retail" }
    ],
    imagePlaceholder: "division-manila-01",
    logoPlaceholder: "manila-supermarket"
  },
  {
    id: "imaxclean",
    number: "04",
    name: "IMAXCLEAN",
    role: "Household & Cleaning Products Division",
    personality: "Clean, Fresh, Minimal, Modern, Product-focused",
    accentColor: "#0C4A6E", // Navy Blue
    hoverAccentColor: "#0F172A",
    shortDesc: "Dedicated division for premium household cleaning, disinfection, and hygiene products.",
    longDesc: "IMAXCLEAN is the group's specialized household and homecare division based in Dubai, UAE. It is dedicated to providing high-quality, reliable, and high-performance cleaning and sanitization solutions for homes and businesses. Sourced from certified international manufacturers, IMAXCLEAN products meet the highest standard of safety, efficiency, and hygiene, promoting healthy environments.",
    focusAreas: [
      "Household Cleaning Solutions",
      "Product Quality & Performance",
      "Hygiene & Sanitization Products",
      "Eco-Friendly Homecare Options",
      "B2B & B2C Commercial Cleaners",
      "Supply Chain Consistency"
    ],
    location: "Dubai, United Arab Emirates",
    href: "/group/imaxclean",
    stats: [
      { label: "Hygiene Standard", value: "Certified Quality" },
      { label: "Product Category", value: "Home Care" },
      { label: "Market Presence", value: "B2B & Retail" }
    ],
    imagePlaceholder: "division-imaxclean-01",
    logoPlaceholder: "imaxclean"
  },
  {
    id: "karak-spanish-cafe",
    number: "05",
    name: "Karak Spanish Cafe",
    role: "Cafe & Beverage Division",
    personality: "Warm, Inviting, Artisanal, Cafe-focused",
    accentColor: "#D97706", // Warm Amber / Cafe Gold
    hoverAccentColor: "#B45309",
    shortDesc: "A primary brand that offers a unique blend of Spanish and Karak tea culture.",
    longDesc: "Karak Spanish Cafe is the newest brand of IMAxtel. It is a cafe that offers a unique blend of Spanish and Karak tea culture.",
    focusAreas: [
      "Spanish & Karak Tea Culture",
      "Cafe & Restaurant Experience",
      "Product Quality & Performance",
      "Supply Chain Consistency",
      "Customer Service Excellence",
      "Fresh & Quality Ingredients"
    ],
    location: "Dubai, UAE & Regional GCC",
    href: "/group/karak-spanish-cafe",
    stats: [
      { label: "Specialty Teas", value: "Authentic Karak" },
      { label: "Cafe Concept", value: "Spanish Fusion" },
      { label: "Experience", value: "Premium Retail" }
    ],
    imagePlaceholder: "division-karak-spanish-cafe-01",
    logoPlaceholder: "karak-spanish-cafe"
  }
];
