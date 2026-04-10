import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/", // Hum nahi chahte ki bots hamare backend API routes ko crawl karein
    },
    sitemap: "https://syncrocode.in/sitemap.xml",
  };
}