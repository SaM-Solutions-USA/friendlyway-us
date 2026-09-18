import { AboutHero } from "@/components/about-us/about-hero";
import { CompanyIntro } from "@/components/about-us/company-intro";
import { ContentSection } from "@/components/shared/layout/content-section";
import { ContactPanel } from "@/components/shared/content/contact-panel";
import { HubSpotForm } from "@/components/shared/forms/hubspot-form";
import { LogoMarquee } from "@/components/shared/content/logo-marquee";
import { OfficeGrid } from "@/components/about-us/office-grid";
import { Paragraph } from "@/components/shared/typography/paragraph";
import { PartnerGrid } from "@/components/about-us/partner-grid";
import { ProductGrid } from "@/components/shared/content/product-grid";
import { SectionHeading } from "@/components/shared/typography/section-heading";
import { SolutionCardGrid } from "@/components/about-us/solution-card-grid";
import { StructuredData } from "@/components/shared/content/structured-data";
import { TeamGrid } from "@/components/about-us/team-grid";
import { TwoColumnSplit } from "@/components/shared/layout/two-column-split";

import styles from "./about-us-page.module.css";

export interface AboutUsPageContent {
  readonly title: string;
  readonly hero: { readonly src: string; readonly width: number; readonly height: number; readonly alt: string };
  readonly introduction: { readonly paragraphs: readonly string[]; readonly proofPoints: readonly { readonly icon: { readonly src: string; readonly width: number; readonly height: number; readonly alt: string }; readonly label: string }[] };
  readonly editorialSections: readonly { readonly heading: string; readonly paragraphs: readonly string[] }[];
  readonly teams: readonly { readonly description: string; readonly members: readonly { readonly name: string; readonly role: string; readonly portrait: { readonly src: string; readonly width: number; readonly height: number; readonly alt: string } }[] }[];
  readonly softwareSolutions: { readonly cards: readonly { readonly title: string; readonly description?: string; readonly href?: string }[]; readonly cta: { readonly label: string; readonly href: string } };
  readonly hardwareOfferings: { readonly cards: readonly { readonly title: string; readonly href?: string; readonly image?: { readonly src: string; readonly width: number; readonly height: number; readonly alt: string } }[]; readonly cta: { readonly label: string; readonly href: string } };
  readonly clientLogos: readonly { readonly src: string; readonly width: number; readonly height: number; readonly alt: string }[];
  readonly partnerLogos: readonly { readonly src: string; readonly width: number; readonly height: number; readonly alt: string }[];
  readonly offices: readonly { readonly name: string; readonly address: string; readonly telephone?: { readonly display: string; readonly href: string } }[];
  readonly contact: { readonly heading: string; readonly paragraphs: readonly string[]; readonly profile: { readonly name: string; readonly role: string; readonly location: string; readonly portrait: { readonly src: string; readonly width: number; readonly height: number; readonly alt: string } }; readonly form: { readonly portalId: string; readonly formId: string; readonly region?: string; readonly formName: string; readonly consentCategory: "functional" | "marketing" } };
}

export interface AboutUsPageProps {
  readonly content: AboutUsPageContent;
  readonly structuredData: unknown;
}

export function AboutUsPage({ content, structuredData }: AboutUsPageProps) {
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