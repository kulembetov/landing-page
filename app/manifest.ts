import type { MetadataRoute } from "next";
import { siteSeoConfig } from "@/lib/seo-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteSeoConfig.siteName} — нейросеть для презентаций`,
    short_name: siteSeoConfig.siteName,
    description: siteSeoConfig.defaultDescription,
    start_url: "/",
    display: "browser",
    background_color: "#fafaf7",
    theme_color: "#1e40af",
    lang: "ru",
    icons: [
      {
        src: "/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
