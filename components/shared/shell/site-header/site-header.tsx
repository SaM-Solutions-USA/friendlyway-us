import { getActiveNavigationIds } from "@/lib/navigation";
import type { NavigationItem, SiteLink, SiteLocale } from "@/content/site";

import { DesktopNavigation } from "@/components/shared/shell/desktop-navigation";
import { LocaleSwitcher } from "@/components/shared/shell/locale-switcher";
import { MobileNavigation } from "@/components/shared/shell/mobile-navigation";

import styles from "./site-header.module.css";

export interface SiteHeaderProps {
  readonly brand: {
    readonly logo: { readonly src: string; readonly alt: string; readonly width: number; readonly height: number };
  };
  readonly phone: SiteLink;
  readonly utilityLinks: readonly SiteLink[];
    readonly locales: readonly SiteLocale[];
  readonly navigation: readonly NavigationItem[];
  readonly contactCta: SiteLink;
  readonly currentPathname: string;
}

function HeaderLink({ link }: { readonly link: SiteLink }) {
  return <a href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>{link.label}</a>;
}

export function SiteHeader({
  brand,
  phone,
  utilityLinks,
  locales,
  navigation,
  contactCta,
  currentPathname,
}: SiteHeaderProps) {
  const activeIds = getActiveNavigationIds(navigation, currentPathname);

  return (
    <header className={styles.root}>
      <div className={styles.utilityBand}>
        <div className={styles.container}>
          <div className={styles.utilityRow}>
            <a className={styles.phone} href={phone.href}>{phone.label}</a>
            <nav className={styles.utilityNavigation} aria-label="Utility">
              <ul>
                {utilityLinks.map((link) => <li key={link.href} className={link.primaryAction ? styles.utilityCta : undefined}><HeaderLink link={link} /></li>)}
                <li><LocaleSwitcher locales={locales} /></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={styles.primaryBand}>
        <div className={styles.container}>
          <div className={styles.primaryRow}>
            <a className={styles.logo} href="/" aria-label="friendlyway home">
              <img src={brand.logo.src} width={brand.logo.width} height={brand.logo.height} alt={brand.logo.alt} fetchPriority="high" decoding="async" />
            </a>
            <div className={styles.primaryNavigation}>
              <DesktopNavigation navigation={navigation} activeNavigationIds={[...activeIds]} />
              <a className={styles.contactCta} href={contactCta.href}>{contactCta.label} us</a>
              <MobileNavigation
                navigation={navigation}
                activeNavigationIds={[...activeIds]}
                currentPathname={currentPathname}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}