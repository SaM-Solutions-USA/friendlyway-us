import Image from "next/image";
import type { ContentMedia } from "@/content/types";
import styles from "./partner-grid.module.css";
export function PartnerGrid({ logos }: { readonly logos: readonly ContentMedia[] }) { return <div className={styles.root}><ul className={styles.grid}>{logos.map((logo) => <li className={styles.item} key={logo.src}><Image className={styles.image} src={logo.src} width={logo.width} height={logo.height} alt={logo.alt} /></li>)}</ul></div>; }