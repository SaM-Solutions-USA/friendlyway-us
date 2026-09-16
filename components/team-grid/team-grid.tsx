import Image from "next/image";
import type { AboutUsTeamMember } from "@/content/about-us";
import styles from "./team-grid.module.css";
export function TeamGrid({ description, members }: { readonly description: string; readonly members: readonly AboutUsTeamMember[] }) {
  return <div className={styles.root}><p className={styles.description}>{description}</p><ul className={styles.grid}>{members.map((member) => <li className={styles.member} key={member.name}><Image className={styles.portrait} src={member.portrait.src} width={member.portrait.width} height={member.portrait.height} alt="" /><div><div className={styles.name}>{member.name}</div><p className={styles.role}>{member.role}</p></div></li>)}</ul></div>;
}