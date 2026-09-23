import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.imaxtelglobal.ae";

  const routes = [
    "",
    "/about",
    "/brands",
    "/contact",
    "/distribution-logistics",
    "/group",
    "/products-services",
    "/group/imaxtel-import-distribution",
    "/group/malabar-food-stuff",
    "/group/manila-supermarket",
    "/group/imaxclean",
    "/group/karak-spanish-cafe",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
