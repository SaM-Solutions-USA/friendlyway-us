import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { siteContent } from "@/content/site";

import styles from "./app-shell.module.css";

export interface AppShellProps {
  readonly children: ReactNode;
  readonly currentPathname: string;
}

export function AppShell({ children, currentPathname }: AppShellProps) {
  return (
    <div className={styles.root} data-pathname={currentPathname}>
      <main>{children}</main>
      <SiteFooter footer={siteContent.footer} />
    </div>
  );
}