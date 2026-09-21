import assert from "node:assert/strict";
import test from "node:test";

import { pricingContent } from "../app/pricing/content.ts";
import { getPricingMetadata, getPricingStructuredData } from "../app/pricing/seo.ts";

test("pricing SEO preserves the legacy canonical, robots, and social image", () => {
  const metadata = getPricingMetadata(pricingContent.seo);
  const images = metadata.openGraph?.images;
  const socialImage = Array.isArray(images) ? images[0] : images;
  const socialImageUrl = typeof socialImage === "string" ? socialImage : socialImage instanceof URL ? socialImage.toString() : socialImage?.url;

  assert.equal(metadata.title, "Pricing Plans for Visitor Management - friendlyway");
  assert.deepEqual(metadata.robots, { index: false, follow: false });
  assert.equal(metadata.alternates?.canonical, "/pricing");
  assert.equal(socialImageUrl, pricingContent.seo.socialImage.src);
});

test("pricing structured data has native breadcrumb and WebPage entries", () => {
  const structuredData = getPricingStructuredData(pricingContent);

  assert.equal(structuredData["@graph"][0]["@type"], "BreadcrumbList");
  assert.equal(structuredData["@graph"][1]["@type"], "WebPage");
  assert.equal(structuredData["@graph"][1].url, "https://friendlyway.us/pricing");
});