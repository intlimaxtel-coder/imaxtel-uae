export interface InHouseBrand {
  id: string;
  name: string;
  logo: string;
  category: "RICE" | "DAIRY" | "BEVERAGES" | "FOOD";
  description: string;
}

export const inHouseBrandsData: InHouseBrand[] = [
  {
    id: "asliyaa",
    name: "Asliyaa",
    logo: "/assets/inhouse-logos/asliyaa.png",
    category: "FOOD",
    description: "A brand dedicated to authentic and traditional food products with premium quality."
  },
  {
    id: "milky",
    name: "Milky",
    logo: "/assets/inhouse-logos/milky.png",
    category: "DAIRY",
    description: "A brand focused on dairy-related and milk-based products designed to deliver quality and freshness."
  },
  {
    id: "frutees",
    name: "Frutees",
    logo: "/assets/inhouse-logos/frutees.png",
    category: "BEVERAGES",
    description: "A refreshing brand offering a variety of fruit-flavoured drinks with great taste and quality."
  },
  {
    id: "harvester",
    name: "Harvester",
    logo: "/assets/inhouse-logos/harvester.png",
    category: "RICE",
    description: "A rice brand offering high-quality grains known for their purity, taste, and consistent quality."
  },
  {
    id: "royal-rice",
    name: "Royal Rice",
    logo: "/assets/inhouse-logos/royalrice.png",
    category: "RICE",
    description: "A premium rice brand delivering high-quality grains known for taste, aroma, and consistency."
  },
  {
    id: "sona-maria",
    name: "Sona Maria",
    logo: "/assets/inhouse-logos/sonamaria.png",
    category: "RICE",
    description: "A quality rice brand offering premium grains known for their taste and consistency."
  }
];
