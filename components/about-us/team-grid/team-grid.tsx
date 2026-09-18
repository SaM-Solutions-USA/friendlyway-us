import Image from "next/image";
import styles from "./team-grid.module.css";
export interface TeamGridProps {
  readonly description: string;
  readonly members: readonly { readonly name: string; readonly role: string; readonly portrait: { readonly src: string; readonly width: number; readonly height: number; readonly alt: string } }[];
}
export function TeamGrid({ description, members }: TeamGridProps) {
  return <div className={styles.root}><p className={styles.description}>{description}</p><ul className={styles.grid}>{members.map((member) => <li className={styles.member} key={member.name}><Image className={styles.portrait} src={member.portrait.src} width={member.portrait.width} height={member.portrait.height} alt="" /><div><div className={styles.name}>{member.name}</div><p className={styles.role}>{member.role}</p></div></li>)}</ul></div>;
}