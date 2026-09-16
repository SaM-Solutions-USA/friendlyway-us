import { AboutHero } from "@/components/about-hero";
import { CompanyIntro } from "@/components/company-intro";
import { ContentSection } from "@/components/content-section";
import { ContactPanel } from "@/components/contact-panel";
import { HubSpotForm } from "@/components/hubspot-form";
import { LogoMarquee } from "@/components/logo-marquee";
import { OfficeGrid } from "@/components/office-grid";
import { Paragraph } from "@/components/paragraph";
import { PartnerGrid } from "@/components/partner-grid";
import { ProductGrid } from "@/components/product-grid";
import { SectionHeading } from "@/components/section-heading";
import { SolutionCardGrid } from "@/components/solution-card-grid";
import { StructuredData } from "@/components/structured-data";
import { TeamGrid } from "@/components/team-grid";
import { TwoColumnSplit } from "@/components/two-column-split";
import type { AboutUsContent } from "@/content/about-us";
import { getAboutUsStructuredData } from "@/lib/about-us-seo";

import styles from "./about-us-page.module.css";

export interface AboutUsPageProps {
  readonly content: AboutUsContent;
}

export function AboutUsPage({ content }: AboutUsPageProps) {
  const structuredData = getAboutUsStructuredData(content.seo);

  return (
    <article className={styles.root}>
      <ContentSection as="div" paddingBlock="md">
        <AboutHero media={content.hero} />
      </ContentSection>
      <ContentSection gap="md" labelledBy="about-us-title" paddingBlock="md">
        <SectionHeading as="h1" id="about-us-title">{content.title}</SectionHeading>
        <CompanyIntro
          paragraphs={content.introduction.paragraphs}
          proofPoints={content.introduction.proofPoints}
        />
      </ContentSection>
      <ContentSection gap="md" labelledBy="clients-heading" paddingBlock="md">
        <SectionHeading as="h2" id="clients-heading">Our Clients</SectionHeading>
        <LogoMarquee logos={content.clientLogos} mode="scroll" />
      </ContentSection>
      {content.editorialSections.map((section, index) => {
        const headingId = `about-editorial-${index}`;

        return (
          <ContentSection gap="sm" key={section.heading} labelledBy={headingId} paddingBlock="md">
            <SectionHeading as="h2" id={headingId}>{section.heading}</SectionHeading>
            {section.paragraphs.map((paragraph) => <Paragraph key={paragraph}>{paragraph}</Paragraph>)}
          </ContentSection>
        );
      })}
      <ContentSection gap="md" labelledBy="team-heading" paddingBlock="md">
        <SectionHeading as="h2" id="team-heading">Meet Our Friendly Team</SectionHeading>
        {content.teams.map((team) => <TeamGrid key={team.description} {...team} />)}
      </ContentSection>
      <ContentSection gap="md" labelledBy="software-solutions" paddingBlock="md">
        <SectionHeading as="h2" id="software-solutions">friendlyway Software Solutions</SectionHeading>
        <SolutionCardGrid {...content.softwareSolutions} />
      </ContentSection>
      <ContentSection gap="md" labelledBy="hardware-offerings" paddingBlock="md">
        <SectionHeading as="h2" id="hardware-offerings">friendlyway Hardware Offerings</SectionHeading>
        <ProductGrid {...content.hardwareOfferings} />
      </ContentSection>
      <ContentSection gap="md" labelledBy="partners" paddingBlock="md">
        <SectionHeading as="h2" id="partners">Our Partners</SectionHeading>
        <PartnerGrid logos={content.partnerLogos} />
      </ContentSection>
      <ContentSection gap="md" labelledBy="offices" paddingBlock="md">
        <SectionHeading as="h2" id="offices">Our Offices</SectionHeading>
        <OfficeGrid offices={content.offices} />
      </ContentSection>
      <ContentSection gap="md" labelledBy="contact-us" paddingBlock="lg" tone="muted">
        <SectionHeading as="h2" id="contact-us">{content.contact.heading}</SectionHeading>
        <TwoColumnSplit>
          <ContactPanel
            paragraphs={content.contact.paragraphs}
            profile={content.contact.profile}
          />
          <HubSpotForm config={content.contact.form} />
        </TwoColumnSplit>
      </ContentSection>
      <StructuredData data={structuredData} />
    </article>
  );
}