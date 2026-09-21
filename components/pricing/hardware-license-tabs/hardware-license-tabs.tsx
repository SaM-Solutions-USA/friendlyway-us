"use client";

import { useRef, useState } from "react";

import styles from "./hardware-license-tabs.module.css";

type LicenseId = "starter" | "professional" | "enterprise";

export interface HardwareLicenseTabsProps {
  readonly heading: string;
  readonly note: string;
  readonly tabs: readonly { readonly id: LicenseId; readonly label: string; readonly products: readonly { readonly name: string; readonly href?: string; readonly price: string; readonly image: { readonly src: string; readonly srcSet: string; readonly width: number; readonly height: number; readonly alt: string } }[] }[];
}

export function HardwareLicenseTabs({ heading, note, tabs }: HardwareLicenseTabsProps) {
  const [activeTab, setActiveTab] = useState<LicenseId>(tabs[0].id);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeProducts = tabs.find((tab) => tab.id === activeTab)?.products ?? [];
  return <div className={styles.root}>
    <div className={styles.headers}><h2 className={styles.heading} id="hardware-comparison">{heading}</h2></div>
    <div className={styles.tabList} role="tablist" aria-label="License type">{tabs.map((tab, index) => <button key={tab.id} ref={(element) => { tabRefs.current[index] = element; }} role="tab" id={`hardware-tab-${tab.id}`} aria-controls={`hardware-panel-${tab.id}`} aria-selected={activeTab === tab.id} tabIndex={activeTab === tab.id ? 0 : -1} onClick={() => setActiveTab(tab.id)} onKeyDown={(event) => { const offset = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : event.key === "Home" ? -index : event.key === "End" ? tabs.length - index - 1 : 0; if (!offset) return; event.preventDefault(); const next = (index + offset + tabs.length) % tabs.length; setActiveTab(tabs[next].id); tabRefs.current[next]?.focus(); }}>{tab.label}</button>)}</div>
    <div role="tabpanel" id={`hardware-panel-${activeTab}`} aria-labelledby={`hardware-tab-${activeTab}`} className={styles.grid}>{activeProducts.map((product) => <article key={product.name} className={styles.card}>
      <div className={styles.picture}>{product.href ? <a href={product.href} target="_blank" rel="noreferrer"><img {...product.image} /></a> : <img {...product.image} />}</div>
      <div className={styles.content}><h3 className={styles.title}>{product.href ? <a href={product.href}>{product.name}</a> : product.name}</h3><p className={styles.price}>{product.price}</p><div className={styles.cta}><a className={styles.button} href="#block-formback_view">Request a quote</a></div></div>
    </article>)}</div>
    <p className={styles.note}>{note}</p>
  </div>;
}