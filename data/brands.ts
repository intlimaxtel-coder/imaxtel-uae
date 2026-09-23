export interface InHouseBrand {
  id: string;
  name: string;
  category: "food" | "non-food";
  description: string;
  logoPlaceholder: string;
}

export interface PartnerBrand {
  id: string;
  name: string;
  logo: string;
}

export const inHouseBrands: InHouseBrand[] = [
  {
    id: "milky",
    name: "Milky",
    category: "food",
    description: "A brand focused on dairy-related and milk-based products designed to deliver quality and freshness.",
    logoPlaceholder: "brand-milky"
  },
  {
    id: "fruitees",
    name: "Fruitees",
    category: "food",
    description: "A refreshing brand offering a variety of fruit-flavored drinks with great taste and quality.",
    logoPlaceholder: "brand-fruitees"
  },
  {
    id: "asliyaa",
    name: "Asliyaa",
    category: "food",
    description: "A brand dedicated to authentic and traditional food products with premium quality.",
    logoPlaceholder: "brand-asliyaa"
  },
  {
    id: "sona-mariya",
    name: "Sona Mariya",
    category: "food",
    description: "A quality rice brand offering premium grains known for their taste and consistency.",
    logoPlaceholder: "brand-sona-mariya"
  },
  {
    id: "harvester",
    name: "Harvester",
    category: "food",
    description: "A rice brand offering high-quality grains known for their purity, taste, and consistent quality.",
    logoPlaceholder: "brand-harvester"
  },
  {
    id: "royal-rice",
    name: "Royal Rice",
    category: "food",
    description: "A premium rice brand delivering high-quality grains known for taste, aroma, and consistency.",
    logoPlaceholder: "brand-royal-rice"
  }
];

const partnerFiles = [
  "Screenshot_2026-09-01_171521-removebg-preview.png",
  "Screenshot_2026-09-01_171526-removebg-preview.png",
  "Screenshot_2026-09-01_171531-removebg-preview.png",
  "Screenshot_2026-09-01_171538-removebg-preview.png",
  "Screenshot_2026-09-01_171544-removebg-preview.png",
  "Screenshot_2026-09-01_171548-removebg-preview.png",
  "Screenshot_2026-09-01_171554-removebg-preview.png",
  "Screenshot_2026-09-01_171559-removebg-preview.png",
  "Screenshot_2026-09-01_171603-removebg-preview.png",
  "Screenshot_2026-09-01_171607-removebg-preview.png",
  "Screenshot_2026-09-01_171610-removebg-preview.png",
  "Screenshot_2026-09-01_171614-removebg-preview.png",
  "Screenshot_2026-09-01_171619-removebg-preview.png",
  "Screenshot_2026-09-01_171624-removebg-preview.png",
  "Screenshot_2026-09-01_171629-removebg-preview.png",
  "Screenshot_2026-09-01_171632-removebg-preview.png",
  "Screenshot_2026-09-01_171635-removebg-preview.png",
  "Screenshot_2026-09-01_171639-removebg-preview.png",
  "Screenshot_2026-09-01_171642-removebg-preview.png"
];

export const partnerBrands: PartnerBrand[] = partnerFiles.map((file, i) => ({
  id: `partner-${i + 1}`,
  name: `Partner Brand ${i + 1}`,
  logo: `/assets/partner-brands/${file}`
}));
