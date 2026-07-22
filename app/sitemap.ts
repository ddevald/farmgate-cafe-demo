import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/menu", "/events", "/about", "/contact", "/privacy", "/terms"];

  return routes.map((route) => ({
    url: `${siteConfig.seo.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/events" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/menu" ? 0.9 : 0.6,
  }));
}
