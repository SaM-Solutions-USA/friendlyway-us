import assert from "node:assert/strict";
import test from "node:test";

import { aboutUsContent } from "../content/about-us.ts";
import { getAboutUsMetadata, getAboutUsStructuredData } from "../lib/about-us-seo.ts";

test("About Us SEO maps the editable legacy baseline to Next metadata", () => {
  const metadata = getAboutUsMetadata(aboutUsContent.seo);
  const openGraphImages = metadata.openGraph?.images;
  const socialImage = Array.isArray(openGraphImages)
    ? openGraphImages[0]
    : openGraphImages;
  const socialImageUrl = typeof socialImage === "string"
    ? socialImage
    : socialImage instanceof URL
      ? socialImage.toString()
      : socialImage?.url;

  assert.equal(metadata.title, "About Us - friendlyway");
  assert.equal(metadata.description, aboutUsContent.seo.description);
  assert.deepEqual(metadata.robots, { index: false, follow: false });
  assert.equal(metadata.alternates?.canonical, "/about-us");
  assert.equal(socialImageUrl, aboutUsContent.seo.socialImage.src);
});

test("About Us structured data has native AboutPage and BreadcrumbList entries", () => {
  const structuredData = getAboutUsStructuredData(aboutUsContent.seo);

  assert.equal(structuredData["@graph"][0]["@type"], "BreadcrumbList");
  assert.equal(structuredData["@graph"][1]["@type"], "AboutPage");
  assert.equal(structuredData["@graph"][1].url, "https://friendlyway.us/about-us");
});