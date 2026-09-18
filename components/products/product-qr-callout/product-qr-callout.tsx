import Image from "next/image";

import { SectionHeading } from "@/components/shared/typography/section-heading";
import type { ProductPageContent } from "@/components/products/types";

import styles from "./product-qr-callout.module.css";

export function ProductQrCallout({ callout }: { readonly callout: ProductPageContent["qrCallout"] }) {
  return (
    <div className={styles.root} id="qr-code">
      <div>
        <Image src={callout.qrCode.src} width={callout.qrCode.width} height={callout.qrCode.height} alt={callout.qrCode.alt} />
        <SectionHeading as="h2">{callout.heading}</SectionHeading>
        <p>{callout.description}</p>
      </div>
      <Image className={styles.deviceImage} src={callout.deviceImage.src} width={callout.deviceImage.width} height={callout.deviceImage.height} alt={callout.deviceImage.alt} />
    </div>
  );
}