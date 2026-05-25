import type { Metadata } from "next";
import { pageTitle, siteSeoConfig } from "@/lib/seo-config";

type LegalMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createLegalMetadata({ title, description, path }: LegalMetadataInput): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${siteSeoConfig.productionUrl}${canonicalPath}`;
  const fullTitle = pageTitle(title);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
    },
    twitter: {
      title: fullTitle,
      description,
    },
  };
}
