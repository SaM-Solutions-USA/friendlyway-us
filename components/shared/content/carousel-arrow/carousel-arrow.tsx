import type { ButtonHTMLAttributes } from "react";

import styles from "./carousel-arrow.module.css";

type CarouselArrowProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "type"> & {
  readonly direction: "previous" | "next";
  readonly "aria-label": string;
};

export function CarouselArrow({ className, direction, ...props }: CarouselArrowProps) {
  return (
    <button
      {...props}
      className={[styles.arrow, direction === "previous" && styles.previous, className].filter(Boolean).join(" ")}
      type="button"
    />
  );
}