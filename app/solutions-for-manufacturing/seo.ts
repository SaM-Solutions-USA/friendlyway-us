import type { Metadata } from "next";

import type { ManufacturingContent } from "./types";

const siteUrl = "https://friendlyway.us";

export function getManufacturingMetadata(seo: ManufacturingContent["seo"]): Metadata {
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

export function getManufacturingStructuredData(content: ManufacturingContent) {
  const url = new URL(content.seo.canonicalPath, siteUrl).toString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Solutions", item: `${siteUrl}/solutions` },
          { "@type": "ListItem", position: 3, name: content.hero.title, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: content.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  } as const;
}
