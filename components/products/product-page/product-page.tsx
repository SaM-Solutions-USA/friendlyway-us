import { ContactPanel } from "@/components/shared/content/contact-panel";
import { ContentSection } from "@/components/shared/layout/content-section";
import { Faq } from "@/components/products/faq/faq";
import { HubSpotForm } from "@/components/shared/forms/hubspot-form";
import { ProductHero } from "@/components/products/product-hero/product-hero";
import { ProductApplications } from "@/components/products/product-applications/product-applications";
import { ProductDetail } from "@/components/products/product-detail/product-detail";
import { ProductFeatures } from "@/components/products/product-features/product-features";
import { ProductIndustries } from "@/components/products/product-industries/product-industries";
import { ProductPlatform } from "@/components/products/product-platform/product-platform";
import { ProductGrid } from "@/components/shared/content/product-grid";
import { ProductQrCallout } from "@/components/products/product-qr-callout/product-qr-callout";
import { SectionHeading } from "@/components/shared/typography/section-heading";
import { StructuredData } from "@/components/shared/content/structured-data";
import { TwoColumnSplit } from "@/components/shared/layout/two-column-split";
import type { ProductPageContent } from "@/components/products/types";

export interface ProductPageProps {
  readonly content: ProductPageContent;
  readonly structuredData: unknown;
}

export function ProductPage({ content, structuredData }: ProductPageProps) {
  return (
    <article>
      <ContentSection as="div" paddingBlock="lg">
        <ProductHero hero={content.hero} />
      </ContentSection>

      <ProductFeatures features={content.features} />

      <ContentSection as="div" paddingBlock="lg">
        <ProductQrCallout callout={content.qrCallout} />
      </ContentSection>

      <ContentSection as="div" paddingBlock="lg" tone="sand">
        <ProductApplications applications={content.applications} />
      </ContentSection>

      <ContentSection as="div" paddingBlock="xl">
        <ProductPlatform platform={content.platform} />
      </ContentSection>

      <ContentSection labelledBy="industries-heading" paddingBlock="lg">
        <ProductIndustries industries={content.industries} />
      </ContentSection>

      <ContentSection labelledBy="product-detail-heading" paddingBlock="xl" tone="sand">
        <ProductDetail detail={content.productDetail} />
      </ContentSection>

      <ContentSection gap="md" labelledBy="contact-us" paddingBlock="lg">
        <SectionHeading as="h2" id="contact-us">{content.contact.heading}</SectionHeading>
        <TwoColumnSplit>
          <ContactPanel paragraphs={content.contact.paragraphs} profile={content.contact.profile} />
          {content.contact.form ? <HubSpotForm config={content.contact.form} id="block-feedback_details-form" /> : null}
        </TwoColumnSplit>
      </ContentSection>

      <ContentSection gap="md" labelledBy="faq-heading" paddingBlock="lg" tone="sand">
        <SectionHeading as="h2" id="faq-heading">Frequently Asked Questions</SectionHeading>
        <Faq items={content.faq} />
      </ContentSection>

      <ContentSection gap="md" labelledBy="related-products-heading" paddingBlock="xl">
        <SectionHeading as="h2" id="related-products-heading">{content.relatedProducts.heading}</SectionHeading>
        <ProductGrid cards={content.relatedProducts.cards} cta={content.relatedProducts.cta} />
      </ContentSection>
      <StructuredData data={structuredData} />
    </article>
  );
}