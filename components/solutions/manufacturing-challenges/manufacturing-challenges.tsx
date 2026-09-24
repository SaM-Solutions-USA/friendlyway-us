"use client";

import Image from "next/image";
import { useEffect, useId, useState, useSyncExternalStore } from "react";

import type { SharedMedia } from "@/components/shared/content/media";
import { SectionHeading } from "@/components/shared/typography/section-heading";

import styles from "./manufacturing-challenges.module.css";

export interface ManufacturingChallenge {
  readonly title: string;
  readonly description: string;
  readonly icon: SharedMedia;
}

export interface ManufacturingChallengesProps {
  readonly heading: string;
  readonly items: readonly ManufacturingChallenge[];
}

function subscribeToColumns(onChange: () => void) {
  const mobile = window.matchMedia("(max-width: 575px)");
  const tablet = window.matchMedia("(max-width: 991px)");
  const onBreakpointChange = () => {
    const focused = document.activeElement;
    const triggerId = focused instanceof HTMLButtonElement && focused.dataset.challengeTrigger ? focused.id : null;
    onChange();
    if (triggerId) {
      window.requestAnimationFrame(() => {
        if (document.activeElement === document.body) document.getElementById(triggerId)?.focus();
      });
    }
  };
  mobile.addEventListener("change", onBreakpointChange);
  tablet.addEventListener("change", onBreakpointChange);
  return () => {
    mobile.removeEventListener("change", onBreakpointChange);
    tablet.removeEventListener("change", onBreakpointChange);
  };
}

function getColumns() {
  if (window.matchMedia("(max-width: 575px)").matches) return 1;
  if (window.matchMedia("(max-width: 991px)").matches) return 2;
  return 3;
}

export function ManufacturingChallenges({ heading, items }: ManufacturingChallengesProps) {
  const columns = useSyncExternalStore(subscribeToColumns, getColumns, () => 3);
  const [openItems, setOpenItems] = useState<ReadonlySet<number>>(new Set());
  const id = useId();

  useEffect(() => {
    if (columns > 1) {
      setOpenItems((current) => current.size > 1 ? new Set([...current].slice(0, 1)) : current);
    }
  }, [columns]);

  function toggleItem(index: number) {
    setOpenItems((current) => {
      if (current.has(index)) {
        const next = new Set(current);
        next.delete(index);
        return next;
      }
      return columns === 1 ? new Set([...current, index]) : new Set([index]);
    });
  }

  const rows = Array.from({ length: Math.ceil(items.length / columns) }, (_, rowIndex) => {
    const start = rowIndex * columns;
    return { start, items: items.slice(start, start + columns) };
  });

  return (
    <div className={styles.root}>
      <div className={styles.intro}>
        <SectionHeading as="h2" id="manufacturing-challenges-heading">{heading}</SectionHeading>
      </div>
      <div className={styles.grid} data-active={openItems.size > 0 || undefined}>
        {rows.map((row) => {
          const activeIndex = row.items.findIndex((_, offset) => openItems.has(row.start + offset));
          const expandedIndex = activeIndex < 0 ? -1 : row.start + activeIndex;

          return (
            <div className={styles.row} key={row.start}>
              {row.items.map((item, offset) => {
                const index = row.start + offset;
                const expanded = index === expandedIndex;

                return (
                  <div className={styles.tile} data-expanded={expanded || undefined} key={item.title}>
                    <button
                      aria-controls={`${id}-panel-${index}`}
                      aria-expanded={expanded}
                      aria-label={item.title}
                      className={styles.trigger}
                      data-challenge-trigger="true"
                      id={`${id}-trigger-${index}`}
                      onClick={() => toggleItem(index)}
                      type="button"
                    >
                      <Image alt="" className={styles.icon} height={item.icon.height} src={item.icon.src} width={item.icon.width} />
                      <span className={styles.name}>{item.title}</span>
                    </button>
                  </div>
                );
              })}
              {row.items.map((item, offset) => {
                const index = row.start + offset;
                return (
                  <div aria-labelledby={`${id}-trigger-${index}`} className={styles.panel} hidden={index !== expandedIndex} id={`${id}-panel-${index}`} key={item.title} role="region">
                    <h3 className={styles.panelTitle}>{item.title}</h3>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}