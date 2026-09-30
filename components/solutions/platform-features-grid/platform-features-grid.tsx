import Image from "next/image";

import { SectionHeading } from "@/components/shared/typography/section-heading";

import styles from "./platform-features-grid.module.css";

export interface PlatformFeaturesGridItem {
  readonly icon: {
    readonly src: string;
    readonly width: number;
    readonly height: number;
    readonly alt: string;
  };
  readonly label: string;
}

export interface PlatformFeaturesGridProps {
  readonly heading: string;
  readonly headingId: string;
  readonly items: readonly PlatformFeaturesGridItem[];
}

export function PlatformFeaturesGrid({ heading, headingId, items }: PlatformFeaturesGridProps) {
  return (
    <div className={styles.root}>
      <SectionHeading as="h2" id={headingId}>{heading}</SectionHeading>
      <ul className={styles.grid}>
        {items.map((item) => (
          <li className={styles.item} key={item.label}>
            <span className={styles.picture}>
              <Image
                className={styles.icon}
                src={item.icon.src}
                width={item.icon.width}
                height={item.icon.height}
                alt={item.icon.alt}
              />
            </span>
            <span className={styles.label}>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
