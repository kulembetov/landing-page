import type { MetadataRoute } from "next";
import { siteSeoConfig } from "@/lib/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteSeoConfig.productionUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteSeoConfig.productionUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${siteSeoConfig.productionUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${siteSeoConfig.productionUrl}/refunds`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${siteSeoConfig.productionUrl}/payment-details`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteSeoConfig.productionUrl}/marketing-consent`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
