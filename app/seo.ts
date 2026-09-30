import type { Metadata } from "next";

import type { HomeSeo } from "./types";

const siteUrl = "https://friendlyway.us";

export function getHomeMetadata(seo: HomeSeo): Metadata {
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
      locale: "en_US",
      type: "website",
      siteName: "friendlyway",
      images: [{ url: seo.socialImage.src, width: seo.socialImage.width, height: seo.socialImage.height, alt: seo.socialImage.alt, type: "image/jpeg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.socialImage.src],
    },
  };
}

export function getHomeStructuredData(seo: HomeSeo) {
  const url = new URL(seo.canonicalPath, siteUrl).toString();
  const imageUrl = new URL(seo.socialImage.src, siteUrl).toString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${url}#organization`, name: "friendlyway", url },
      { "@type": "WebSite", "@id": `${url}#website`, url, name: "friendlyway", publisher: { "@id": `${url}#organization` }, inLanguage: "en-US" },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: seo.title,
        description: seo.description,
        isPartOf: { "@id": `${url}#website` },
        about: { "@id": `${url}#organization` },
        primaryImageOfPage: { "@type": "ImageObject", url: imageUrl, width: seo.socialImage.width, height: seo.socialImage.height, caption: seo.socialImage.alt },
        inLanguage: "en-US",
      },
    ],
  } as const;
}