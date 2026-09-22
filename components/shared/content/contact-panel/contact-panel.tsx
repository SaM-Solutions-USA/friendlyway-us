import Image from "next/image";

import { Paragraph } from "@/components/shared/typography/paragraph";
import type { SharedMedia } from "../media";

import styles from "./contact-panel.module.css";

export interface ContactPanelProfile {
  readonly name: string;
  readonly role: string;
  readonly location: string;
  readonly portrait: SharedMedia;
}

export interface ContactPanelProps {
  readonly paragraphs: readonly string[];
  readonly profile: ContactPanelProfile;
}

export function ContactPanel({ paragraphs, profile }: ContactPanelProps) {
  return (
    <div className={styles.root}>
      <div className={styles.copy}>
        {paragraphs.map((paragraph) => <Paragraph key={paragraph}>{paragraph}</Paragraph>)}
      </div>
      <div className={styles.profile}>
        <Image
          className={styles.portrait}
          src={profile.portrait.src}
          width={profile.portrait.width}
          height={profile.portrait.height}
          alt={profile.portrait.alt}
        />
        <div>
          <p className={styles.name}>{profile.name}</p>
          <p className={styles.role}>{profile.role}</p>
          <p className={styles.location}>{profile.location}</p>
        </div>
      </div>
    </div>
  );
}