import type { Metadata } from "next";

import { AboutUsPage } from "@/components/about-us/about-us-page";
import { aboutUsContent } from "./content";
import { createAboutUsPageProps } from "./presenter";
import { getAboutUsMetadata } from "./seo";

export const metadata: Metadata = getAboutUsMetadata(aboutUsContent.seo);

export default function AboutUsRoute() {
  return <AboutUsPage {...createAboutUsPageProps(aboutUsContent)} />;
}