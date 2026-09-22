import type { Metadata } from "next";

import type { EmergencyMusteringContent } from "./types";

const siteUrl = "https://friendlyway.us";

export function getEmergencyMusteringMetadata(seo: EmergencyMusteringContent["seo"]): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: seo.title,
    description: seo.description,
    alternates: { canonical: seo.canonicalPath },
    robots: seo.robots,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonicalPath,
      locale: seo.openGraph.locale,
      type: seo.openGraph.type,
      siteName: "friendlyway",
      modifiedTime: seo.openGraph.updatedTime,
      images: [{ url: seo.socialImage.src, width: seo.socialImage.width, height: seo.socialImage.height, alt: seo.socialImage.alt, type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.socialImage.src],
    },
  };
}