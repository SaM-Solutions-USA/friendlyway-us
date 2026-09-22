import Image from "next/image";

import type { SharedMedia } from "../media";

import styles from "./logo-marquee.module.css";

export type LogoMarqueeLogo = SharedMedia;

export interface LogoMarqueeProps {
  readonly logos: readonly LogoMarqueeLogo[];
  readonly mode?: "static" | "scroll";
}

export function LogoMarquee({ logos, mode = "static" }: LogoMarqueeProps) {
  const renderLogos = (decorative = false) => logos.map((logo) => (
    <li className={styles.item} key={logo.src}>
      <Image
        className={styles.image}
        src={logo.src}
        width={logo.width}
        height={logo.height}
        alt={decorative ? "" : logo.alt}
      />
    </li>
  ));

  return (
    <div className={styles.root} data-mode={mode}>
      {mode === "scroll" ? (
        <div className={styles.viewport} tabIndex={0} aria-label="Client logos">
          <div className={styles.track}>
            <ul className={styles.scrollList}>{renderLogos()}</ul>
            <ul className={styles.scrollList} aria-hidden="true">{renderLogos(true)}</ul>
          </div>
        </div>
      ) : <ul className={styles.list}>{renderLogos()}</ul>}
    </div>
  );
}