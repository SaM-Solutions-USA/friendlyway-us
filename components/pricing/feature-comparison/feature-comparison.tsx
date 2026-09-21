"use client";

import { useState } from "react";

import styles from "./feature-comparison.module.css";

type LicenseId = "starter" | "professional" | "enterprise";

const licenses = ["starter", "professional", "enterprise"] as const;
const collapseDuration = 250;

export interface FeatureComparisonProps {
  readonly heading: string;
  readonly categories: readonly { readonly title: string; readonly rows: readonly { readonly feature: string; readonly available: readonly LicenseId[] }[] }[];
}

export function FeatureComparison({ heading, categories }: FeatureComparisonProps) {
  const [openItems, setOpenItems] = useState<ReadonlySet<number>>(new Set([0]));
  const [closingItems, setClosingItems] = useState<ReadonlySet<number>>(new Set());
  const [openingItems, setOpeningItems] = useState<ReadonlySet<number>>(new Set());

  function toggleItem(index: number) {
    if (openItems.has(index)) {
      setClosingItems((currentItems) => new Set(currentItems).add(index));
      window.setTimeout(() => {
        setOpenItems((currentItems) => {
          const nextItems = new Set(currentItems);
          nextItems.delete(index);
          return nextItems;
        });
        setClosingItems((currentItems) => {
          const nextItems = new Set(currentItems);
          nextItems.delete(index);
          return nextItems;
        });
      }, collapseDuration);
      return;
    }

    setOpenItems((currentItems) => new Set(currentItems).add(index));
    setOpeningItems((currentItems) => new Set(currentItems).add(index));
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setOpeningItems((currentItems) => {
          const nextItems = new Set(currentItems);
          nextItems.delete(index);
          return nextItems;
        });
      });
    });
  }

  return (
    <section aria-labelledby="feature-comparison" className={styles.root}>
      <h2 className={styles.heading} id="feature-comparison">{heading}</h2>
      {categories.map((category, index) => (
        <details data-closing={closingItems.has(index) || undefined} data-opening={openingItems.has(index) || undefined} key={category.title} open={openItems.has(index)}>
          <summary onClick={(event) => { event.preventDefault(); toggleItem(index); }}>{category.title}</summary>
          <div className={styles.tableScroll}>
              <table>
                <thead>
                  <tr>
                    <th scope="col" />
                    {licenses.map((license) => <th key={license} scope="col">{license[0].toUpperCase() + license.slice(1)}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {category.rows.map((row) => (
                    <tr key={row.feature}>
                      <th scope="row">{row.feature}</th>
                      {licenses.map((license) => (
                        <td key={license}>
                          {row.available.includes(license) ? <span aria-label={`${license} included`}>✓</span> : null}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
        </details>
      ))}
    </section>
  );
}