import type { ReactNode } from "react";

import { ConsentSettings } from "@/components/shared/forms/consent-settings";
import { SiteFooter } from "@/components/shared/shell/site-footer";
import { SiteHeader } from "@/components/shared/shell/site-header";
import { WelcomeBanner } from "@/components/shared/shell/welcome-banner";
import { siteContent } from "@/content/site";

import styles from "./app-shell.module.css";

export interface AppShellProps {
  readonly children: ReactNode;
  readonly currentPathname: string;
}

export function AppShell({ children, currentPathname }: AppShellProps) {
  return (
    <div className={styles.root} data-pathname={currentPathname}>
      <WelcomeBanner banner={siteContent.welcomeBanner} />
      <SiteHeader
        brand={siteContent.brand}
        phone={siteContent.phone}
        utilityLinks={siteContent.utilityLinks}
        locales={siteContent.locales}
        navigation={siteContent.navigation}
        contactCta={siteContent.contactCta}
        currentPathname={currentPathname}
      />
      <main>{children}</main>
      <SiteFooter footer={siteContent.footer} />
      <ConsentSettings />
    </div>
  );
}