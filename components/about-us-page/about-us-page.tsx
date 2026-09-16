import { AboutHero } from "@/components/about-hero";
import { CompanyIntro } from "@/components/company-intro";
import { LogoMarquee } from "@/components/logo-marquee";
import { OfficeGrid } from "@/components/office-grid";
import { Paragraph } from "@/components/paragraph";
import { PartnerGrid } from "@/components/partner-grid";
import { ProductGrid } from "@/components/product-grid";
import { SectionHeading } from "@/components/section-heading";
import { SolutionCardGrid } from "@/components/solution-card-grid";
import { TeamGrid } from "@/components/team-grid";
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
      <AboutHero media={content.hero} />
      <CompanyIntro
        title={content.title}
        paragraphs={content.introduction.paragraphs}
        proofPoints={content.introduction.proofPoints}
      />
      <LogoMarquee logos={content.clientLogos} mode="scroll" />
      <div className={styles.editorialSections}>
        {content.editorialSections.map((section) => (
          <section className={styles.editorialSection} key={section.heading}>
            <SectionHeading as="h2">{section.heading}</SectionHeading>
            {section.paragraphs.map((paragraph) => <Paragraph key={paragraph}>{paragraph}</Paragraph>)}
          </section>
        ))}
      </div>
      <section aria-labelledby="team-heading">
        <div className={styles.sectionHeading}><SectionHeading as="h2" id="team-heading">Meet Our Friendly Team</SectionHeading></div>
        {content.teams.map((team) => <TeamGrid key={team.description} {...team} />)}
      </section>
      <SolutionCardGrid {...content.softwareSolutions} />
      <ProductGrid {...content.hardwareOfferings} />
      <PartnerGrid logos={content.partnerLogos} />
      <OfficeGrid offices={content.offices} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
    </article>
  );
}