import Image from "next/image";

import { Paragraph } from "@/components/paragraph";
import { SectionHeading } from "@/components/section-heading";
import type { AboutUsProofPoint } from "@/content/about-us";

import styles from "./company-intro.module.css";

export interface CompanyIntroProps {
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly proofPoints: readonly AboutUsProofPoint[];
}

export function CompanyIntro({ title, paragraphs, proofPoints }: CompanyIntroProps) {
  return (
    <section className={styles.root} aria-labelledby="about-us-title">
      <div className={styles.copy}>
        <SectionHeading as="h1" id="about-us-title">{title}</SectionHeading>
        {paragraphs.map((paragraph) => <Paragraph key={paragraph}>{paragraph}</Paragraph>)}
      </div>
      <ul className={styles.proofPoints}>
        {proofPoints.map((proofPoint) => (
          <li className={styles.proofPoint} key={proofPoint.label}>
            <Image
              className={styles.icon}
              src={proofPoint.icon.src}
              width={proofPoint.icon.width}
              height={proofPoint.icon.height}
              alt={proofPoint.icon.alt}
            />
            <span>{proofPoint.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}