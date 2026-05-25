import type { MetadataRoute } from "next";
import { siteSeoConfig } from "@/lib/seo-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/login", "/app/"],
      },
    ],
    sitemap: `${siteSeoConfig.productionUrl}/sitemap.xml`,
    host: siteSeoConfig.productionUrl,
  };
}
