import styles from "./solution-card-grid.module.css";
export interface SolutionCardGridProps {
	readonly cards: readonly { readonly title: string; readonly description?: string; readonly href?: string }[];
	readonly cta: { readonly label: string; readonly href: string };
}
export function SolutionCardGrid({ cards, cta }: SolutionCardGridProps) { return <div className={styles.root}><ul className={styles.grid}>{cards.map((card) => <li className={styles.card} key={card.title}><div className={styles.title}>{card.href ? <a className={styles.link} href={card.href}>{card.title}</a> : card.title}</div><p className={styles.description}>{card.description}</p></li>)}</ul><a className={styles.cta} href={cta.href}>{cta.label}</a></div>; }