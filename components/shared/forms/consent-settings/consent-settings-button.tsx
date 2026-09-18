"use client";

import { openConsentSettings } from "@/components/shared/forms/consent/browser-consent-adapter";

import styles from "./consent-settings-button.module.css";

export function ConsentSettingsButton() {
  return <button className={styles.root} type="button" onClick={openConsentSettings}>Cookie Settings</button>;
}