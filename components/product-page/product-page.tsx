import { ContactPanel } from "@/components/contact-panel";
import { ContentSection } from "@/components/content-section";
import { Faq } from "@/components/faq/faq";
import { HubSpotForm } from "@/components/hubspot-form";
import { ProductHero } from "@/components/product-hero/product-hero";
import { ProductApplications } from "@/components/product-applications/product-applications";
import { ProductDetail } from "@/components/product-detail/product-detail";
import { ProductFeatures } from "@/components/product-features/product-features";
import { ProductIndustries } from "@/components/product-industries/product-industries";
import { ProductPlatform } from "@/components/product-platform/product-platform";
import { ProductGrid } from "@/components/product-grid";
import { ProductQrCallout } from "@/components/product-qr-callout/product-qr-callout";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { TwoColumnSplit } from "@/components/two-column-split";
import type { ProductContent } from "@/content/products";
import { getProductStructuredData } from "@/lib/product-seo";

export interface ProductPageProps {
  readonly content: ProductContent;
}

export function ProductPage({ content }: ProductPageProps) {
  const structuredData = getProductStructuredData(content);

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