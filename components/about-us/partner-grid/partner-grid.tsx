import Image from "next/image";
import styles from "./partner-grid.module.css";
export interface PartnerGridProps {
	readonly logos: readonly { readonly src: string; readonly width: number; readonly height: number; readonly alt: string }[];
}
export function PartnerGrid({ logos }: PartnerGridProps) { return <div className={styles.root}><ul className={styles.grid}>{logos.map((logo) => <li className={styles.item} key={logo.src}><Image className={styles.image} src={logo.src} width={logo.width} height={logo.height} alt={logo.alt} /></li>)}</ul></div>; }