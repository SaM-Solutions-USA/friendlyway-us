"use client";

import { openConsentSettings } from "@/lib/consent/browser-consent-adapter";

import styles from "./consent-settings-button.module.css";

export function ConsentSettingsButton() {
  return <button className={styles.root} type="button" onClick={openConsentSettings}>Cookie Settings</button>;
}