import type { Metadata } from "next";

import { AboutUsPage } from "@/components/about-us-page";
import { aboutUsContent } from "@/content/about-us";
import { getAboutUsMetadata } from "@/lib/about-us-seo";

export const metadata: Metadata = getAboutUsMetadata(aboutUsContent.seo);

export default function AboutUsRoute() {
  return <AboutUsPage content={aboutUsContent} />;
}