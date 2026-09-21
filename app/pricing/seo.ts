import type { Metadata } from "next";

import type { PricingContent } from "./types";

const siteUrl = "https://friendlyway.us";

export function getPricingMetadata(seo: PricingContent["seo"]): Metadata {
  return { metadataBase: new URL(siteUrl), title: seo.title, description: seo.description, alternates: { canonical: seo.canonicalPath }, robots: seo.robots, openGraph: { title: seo.title, description: seo.description, url: seo.canonicalPath, locale: "en_US", type: "article", siteName: "friendlyway", images: [{ url: seo.socialImage.src, width: seo.socialImage.width, height: seo.socialImage.height, alt: seo.socialImage.alt, type: "image/png" }] }, twitter: { card: "summary_large_image", title: seo.title, description: seo.description, images: [seo.socialImage.src] } };
}

export function getPricingStructuredData(content: PricingContent) {
  const url = new URL(content.seo.canonicalPath, siteUrl).toString();
  return { "@context": "https://schema.org", "@graph": [{ "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: content.seo.title, item: url }] }, { "@type": "WebPage", url, name: content.seo.title, description: content.seo.description, primaryImageOfPage: new URL(content.seo.socialImage.src, siteUrl).toString() }] } as const;
}