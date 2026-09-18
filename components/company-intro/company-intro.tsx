import Image from "next/image";

import { Paragraph } from "@/components/paragraph";
import type { ContentProofPoint } from "@/content/types";

import styles from "./company-intro.module.css";

export interface CompanyIntroProps {
  readonly paragraphs: readonly string[];
  readonly proofPoints: readonly ContentProofPoint[];
}

export function CompanyIntro({ paragraphs, proofPoints }: CompanyIntroProps) {
  return (
    <div className={styles.root}>
      <div className={styles.copy}>
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
    </div>
  );
}