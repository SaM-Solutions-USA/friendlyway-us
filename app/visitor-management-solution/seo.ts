import type { Metadata } from "next";

import type { visitorManagementContent } from "./content";

export function getVisitorManagementMetadata(seo: typeof visitorManagementContent.seo): Metadata {
  return {
    title: seo.title,
    robots: seo.robots,
  };
}