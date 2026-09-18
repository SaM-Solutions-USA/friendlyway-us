import assert from "node:assert/strict";
import test from "node:test";

import { counter22Content } from "../content/products.ts";
import { getProductMetadata, getProductStructuredData } from "../lib/product-seo.ts";

test("Counter 22 SEO maps the editable legacy baseline to Next metadata", () => {
  const metadata = getProductMetadata(counter22Content.seo);
  const openGraphImages = metadata.openGraph?.images;
  const socialImage = Array.isArray(openGraphImages) ? openGraphImages[0] : openGraphImages;
  const socialImageUrl = typeof socialImage === "string" ? socialImage : socialImage instanceof URL ? socialImage.toString() : socialImage?.url;

  assert.equal(metadata.title, "friendlyway Counter 22 – Tablet Kiosk for Visitor Management");
  assert.equal(metadata.description, counter22Content.seo.description);
  assert.deepEqual(metadata.robots, { index: false, follow: false });
  assert.equal(metadata.alternates?.canonical, "/products/counter-22");
  assert.equal(socialImageUrl, counter22Content.seo.socialImage.src);
});

test("Counter 22 structured data has native breadcrumb and Product entries", () => {
  const structuredData = getProductStructuredData(counter22Content);

  assert.equal(structuredData["@graph"][0]["@type"], "BreadcrumbList");
  assert.equal(structuredData["@graph"][1]["@type"], "Product");
  assert.equal(structuredData["@graph"][1].sku, "fw-counter-22");
  assert.equal(structuredData["@graph"][1].offers.url, "https://friendlyway.us/products/counter-22");
});