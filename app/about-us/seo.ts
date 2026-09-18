import type { Metadata } from "next";

import type { AboutUsSeo } from "./types";

const SITE_URL = "https://friendlyway.us";

export function getAboutUsMetadata(seo: AboutUsSeo): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.canonicalPath,
    },
    robots: seo.robots,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonicalPath,
      locale: seo.openGraph.locale,
      type: seo.openGraph.type,
      siteName: "friendlyway",
      modifiedTime: seo.openGraph.updatedTime,
      images: [{
        url: seo.socialImage.src,
        width: seo.socialImage.width,
        height: seo.socialImage.height,
        alt: seo.socialImage.alt,
        type: "image/png",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.socialImage.src],
    },
  };
}

export function getAboutUsStructuredData(seo: AboutUsSeo) {
  const url = new URL(seo.canonicalPath, SITE_URL).toString();
  const imageUrl = new URL(seo.socialImage.src, SITE_URL).toString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "About Us", item: url },
        ],
      },
      {
        "@type": "AboutPage",
        url,
        name: seo.title,
        description: seo.description,
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: imageUrl,
          width: seo.socialImage.width,
          height: seo.socialImage.height,
          caption: seo.socialImage.alt,
        },
      },
    ],
  } as const;
}