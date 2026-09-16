import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import type { AboutUsMedia } from "@/content/about-us";
import styles from "./partner-grid.module.css";
export function PartnerGrid({ logos }: { readonly logos: readonly AboutUsMedia[] }) { return <section className={styles.root} aria-labelledby="partners"><SectionHeading as="h2" id="partners">Our Partners</SectionHeading><ul className={styles.grid}>{logos.map((logo) => <li className={styles.item} key={logo.src}><Image className={styles.image} src={logo.src} width={logo.width} height={logo.height} alt={logo.alt} /></li>)}</ul></section>; }