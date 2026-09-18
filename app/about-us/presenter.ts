import type { AboutUsPageProps } from "@/components/about-us/about-us-page";

import { getAboutUsStructuredData } from "./seo";
import type { AboutUsContent } from "./types";

export function createAboutUsPageProps(content: AboutUsContent): AboutUsPageProps {
  return {
    content,
    structuredData: getAboutUsStructuredData(content.seo),
  };
}
