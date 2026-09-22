import assert from "node:assert/strict";
import test from "node:test";

import { emergencyMusteringContent } from "../app/emergency-mustering-evacuation-tracking/content.ts";
import { getEmergencyMusteringMetadata, getEmergencyMusteringStructuredData } from "../app/emergency-mustering-evacuation-tracking/seo.ts";

test("emergency mustering SEO preserves the legacy canonical, robots, and social image", () => {
  const metadata = getEmergencyMusteringMetadata(emergencyMusteringContent.seo);
  const images = metadata.openGraph?.images;
  const socialImage = Array.isArray(images) ? images[0] : images;
  const socialImageUrl = typeof socialImage === "string"
    ? socialImage
    : socialImage instanceof URL
      ? socialImage.toString()
      : socialImage?.url;

  assert.equal(metadata.title, "Emergency Mustering & Evacuation Tracking Software | friendlyway");
  assert.equal(metadata.alternates?.canonical, "/emergency-mustering-evacuation-tracking");
  assert.deepEqual(metadata.robots, { index: false, follow: false, noarchive: true, nosnippet: true });
  assert.equal(socialImageUrl, "/wp-content/uploads/fw-rich-snippet-VM.png");
});

test("emergency mustering structured data has native breadcrumb and FAQ entries", () => {
  const structuredData = getEmergencyMusteringStructuredData(emergencyMusteringContent);
  const breadcrumb = structuredData["@graph"][0];
  const faq = structuredData["@graph"][1];

  assert.equal(breadcrumb["@type"], "BreadcrumbList");
  assert.equal(breadcrumb.itemListElement[1].item, "https://friendlyway.us/emergency-mustering-evacuation-tracking");
  assert.equal(faq["@type"], "FAQPage");
  assert.equal(faq.mainEntity.length, 5);
  assert.equal(faq.mainEntity[0].name, emergencyMusteringContent.faq.items[0].question);
  assert.equal(faq.mainEntity[0].acceptedAnswer.text, emergencyMusteringContent.faq.items[0].answer);
});