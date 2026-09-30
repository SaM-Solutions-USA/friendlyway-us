"use client";

import Image from "next/image";
import { useId, useState } from "react";

import { SectionHeading } from "@/components/shared/typography/section-heading";

import styles from "./scenario-list.module.css";

export interface ScenarioListFeatureIcon {
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
}

export interface ScenarioListFeature {
  readonly label: string;
  readonly icon: ScenarioListFeatureIcon;
}

export interface ScenarioListItem {
  readonly title: string;
  readonly features: readonly ScenarioListFeature[];
}

export interface ScenarioListProps {
  readonly heading: string;
  readonly headingId?: string;
  readonly items: readonly ScenarioListItem[];
}

export function ScenarioList({ heading, headingId, items }: ScenarioListProps) {
  const id = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={styles.root}>
      <div className={styles.intro}>
        <SectionHeading as="h2" id={headingId}>{heading}</SectionHeading>
      </div>
      <div className={styles.rows}>
        {items.map((item, index) => {
          const expanded = index === openIndex;

          return (
            <div className={styles.row} key={item.title}>
              <h3 className={styles.title}>
                <span className={styles.staticTitle}>{item.title}</span>
                <button
                  aria-controls={`${id}-panel-${index}`}
                  aria-expanded={expanded}
                  className={styles.trigger}
                  onClick={() => setOpenIndex(expanded ? -1 : index)}
                  type="button"
                >
                  {item.title}
                </button>
              </h3>
              <ul className={styles.features} data-expanded={expanded || undefined} id={`${id}-panel-${index}`}>
                {item.features.map((feature) => (
                  <li className={styles.feature} key={feature.label}>
                    <span className={styles.iconView}>
                      <Image
                        alt={feature.icon.alt}
                        height={feature.icon.height}
                        src={feature.icon.src}
                        width={feature.icon.width}
                      />
                    </span>
                    <p className={styles.featureLabel}>{feature.label}</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
