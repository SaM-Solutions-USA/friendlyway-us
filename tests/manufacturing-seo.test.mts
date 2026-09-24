import assert from "node:assert/strict";
import test from "node:test";

import { manufacturingContent } from "../app/solutions-for-manufacturing/content.ts";
import { getManufacturingMetadata, getManufacturingStructuredData } from "../app/solutions-for-manufacturing/seo.ts";

test("manufacturing SEO preserves the canonical, full robots policy, and social image", () => {
  const metadata = getManufacturingMetadata(manufacturingContent.seo);
  const images = metadata.openGraph?.images;
  const socialImage = Array.isArray(images) ? images[0] : images;
  const socialImageUrl = typeof socialImage === "string"
    ? socialImage
    : socialImage instanceof URL
      ? socialImage.toString()
      : socialImage?.url;

  assert.equal(metadata.title, "friendlyway Solutions for Manufacturing - friendlyway");
  assert.equal(metadata.description, manufacturingContent.seo.description);
  assert.equal(metadata.alternates?.canonical, "/solutions-for-manufacturing");
  assert.deepEqual(metadata.robots, { index: false, follow: false, noarchive: true, nosnippet: true });
  assert.equal(socialImageUrl, "/wp-content/uploads/fw-rich-snippet-Manufacturing-1.png");
});

test("manufacturing structured data includes the breadcrumb chain and every visible FAQ answer", () => {
  const structuredData = getManufacturingStructuredData(manufacturingContent);
  const breadcrumb = structuredData["@graph"][0];
  const faq = structuredData["@graph"][1];

  assert.equal(breadcrumb["@type"], "BreadcrumbList");
  assert.deepEqual(breadcrumb.itemListElement, [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://friendlyway.us/" },
    { "@type": "ListItem", position: 2, name: "Solutions", item: "https://friendlyway.us/solutions" },
    { "@type": "ListItem", position: 3, name: "friendlyway Solutions for Manufacturing", item: "https://friendlyway.us/solutions-for-manufacturing" },
  ]);
  assert.equal(faq["@type"], "FAQPage");
  assert.deepEqual(
    faq.mainEntity.map((item) => ({ question: item.name, answer: item.acceptedAnswer.text })),
    manufacturingContent.faq.items.map((item) => ({ question: item.question, answer: item.answer })),
  );
});