import assert from "node:assert/strict";
import test from "node:test";

import { getHomeMetadata, getHomeStructuredData } from "../app/seo.ts";

const seo = {
  title: "friendlyway: Visitor Management, Digital Signage & Self-Service",
  description: "Best practices of self-service and digital content management, furnished into one cloud platform, fully integrated with kiosks and hardware solutions.",
  canonicalPath: "/",
  robots: { index: false, follow: false },
  socialImage: { src: "/wp-content/uploads/1200x630-min-9.jpg", width: 1200, height: 630, alt: "Why friendlyway" },
};

test("homepage metadata preserves legacy title, description, robots and social image", () => {
  const metadata = getHomeMetadata(seo);

  assert.equal(metadata.title, "friendlyway: Visitor Management, Digital Signage & Self-Service");
  assert.equal(metadata.description, "Best practices of self-service and digital content management, furnished into one cloud platform, fully integrated with kiosks and hardware solutions.");
  assert.equal(metadata.alternates?.canonical, "/");
  assert.deepEqual(metadata.robots, { index: false, follow: false });
  assert.deepEqual(metadata.openGraph, {
    title: seo.title,
    description: seo.description,
    url: "/",
    locale: "en_US",
    type: "website",
    siteName: "friendlyway",
    images: [{ url: "/wp-content/uploads/1200x630-min-9.jpg", width: 1200, height: 630, alt: "Why friendlyway", type: "image/jpeg" }],
  });
  assert.deepEqual(metadata.twitter, {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.socialImage.src],
  });
});

test("homepage schema describes the site and page without a nonfunctional search action", () => {
  const graph = getHomeStructuredData(seo)["@graph"];

  assert.deepEqual(graph.map((node) => node["@type"]), ["Organization", "WebSite", "WebPage"]);
  assert.equal(graph[1].url, "https://friendlyway.us/");
  assert.equal(graph[2].url, "https://friendlyway.us/");
  assert.equal(JSON.stringify(graph).includes("SearchAction"), false);
});