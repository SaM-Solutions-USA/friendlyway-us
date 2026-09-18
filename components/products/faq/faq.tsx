"use client";

import { useState } from "react";

import styles from "./faq.module.css";

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface FaqProps {
  readonly items: readonly FaqItem[];
}

const collapseDuration = 250;

export function Faq({ items }: FaqProps) {
  const [openItems, setOpenItems] = useState<ReadonlySet<number>>(new Set());
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
    <div className={styles.root}>
      {items.map((item, index) => (
        <details data-closing={closingItems.has(index) || undefined} data-opening={openingItems.has(index) || undefined} key={item.question} open={openItems.has(index)}>
          <summary onClick={(event) => { event.preventDefault(); toggleItem(index); }}>{item.question}</summary>
          <div className={styles.answer}><p>{item.answer}</p></div>
        </details>
      ))}
    </div>
  );
}