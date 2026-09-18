import type { Metadata } from "next";

import type { ProductContent, ProductSeo } from "@/content/products";

const SITE_URL = "https://friendlyway.us";

export function getProductMetadata(seo: ProductSeo): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
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

export function getProductStructuredData(content: ProductContent) {
  const url = new URL(content.seo.canonicalPath, SITE_URL).toString();
  const productImage = new URL(content.productDetail.schema.image.src, SITE_URL).toString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: content.productDetail.name, item: url },
        ],
      },
      {
        "@type": "Product",
        name: content.productDetail.name,
        productID: content.productDetail.schema.productId,
        sku: content.productDetail.schema.sku,
        description: content.hero.description,
        image: productImage,
        brand: { "@type": "Brand", name: "friendlyway" },
        offers: {
          "@type": "Offer",
          url,
          priceCurrency: content.productDetail.schema.offer.priceCurrency,
          availability: content.productDetail.schema.offer.availability,
          itemCondition: content.productDetail.schema.offer.itemCondition,
        },
      },
    ],
  } as const;
}