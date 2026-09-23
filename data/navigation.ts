export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Brands", href: "#brands" },
  { label: "Contact", href: "#contact" }
];

export const megaMenuDivisions = [
  {
    id: "imaxtel-import-distribution",
    number: "01",
    name: "IMAxtel Import & Distribution",
    role: "Parent Company / Logistics Core",
    description: "Global FMCG sourcing, warehousing, and distribution infrastructure.",
    href: "/group/imaxtel-import-distribution",
    logoPlaceholder: "division-imaxtel-logo"
  },
  {
    id: "malabar-food-stuff",
    number: "02",
    name: "Malabar Food Stuff",
    role: "Wholesale & HORECA Supply",
    description: "Bulk supply network serving grocery retail and food services.",
    href: "/group/malabar-food-stuff",
    logoPlaceholder: "division-malabar-logo"
  },
  {
    id: "manila-supermarket",
    number: "03",
    name: "Manila Supermarket",
    role: "Retail & Consumer Division",
    description: "Vibrant shopping experience specializing in Filipino and international products.",
    href: "https://www.manilahyper.com",
    logoPlaceholder: "division-manila-logo"
  },
  {
    id: "imaxclean",
    number: "04",
    name: "IMAXCLEAN",
    role: "Household & Hygiene Care",
    description: "Premium household cleaners, hygiene, and everyday homecare solutions.",
    href: "https://imaxclean.com/",
    logoPlaceholder: "division-imaxclean-logo"
  }
];
