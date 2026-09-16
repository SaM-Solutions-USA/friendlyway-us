"use client";

import { useEffect, useRef, useState } from "react";

import {
  getBrowserLocalStorageConsentAdapter,
  subscribeToConsentSettings,
} from "@/lib/consent/browser-consent-adapter";

import styles from "./consent-settings.module.css";

export function ConsentSettings() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [functional, setFunctional] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const open = () => {
      const adapter = getBrowserLocalStorageConsentAdapter();
      setFunctional(adapter?.hasConsent("functional") ?? false);
      setMarketing(adapter?.hasConsent("marketing") ?? false);
      dialogRef.current?.showModal();
    };

    return subscribeToConsentSettings(open);
  }, []);

  const save = () => {
    const adapter = getBrowserLocalStorageConsentAdapter();
    adapter?.setConsent("functional", functional);
    adapter?.setConsent("marketing", marketing);
    dialogRef.current?.close();
  };

  return (
    <dialog aria-labelledby="consent-settings-title" className={styles.dialog} ref={dialogRef}>
      <form className={styles.form} method="dialog" onSubmit={(event) => event.preventDefault()}>
        <h2 id="consent-settings-title">Cookie Settings</h2>
        <p>Choose which optional services can run in your browser.</p>
        <label className={styles.option}>
          <input checked={functional} onChange={(event) => setFunctional(event.target.checked)} type="checkbox" />
          <span><strong>Functional</strong> Enables forms and other interactive services.</span>
        </label>
        <label className={styles.option}>
          <input checked={marketing} onChange={(event) => setMarketing(event.target.checked)} type="checkbox" />
          <span><strong>Marketing</strong> Enables optional marketing services.</span>
        </label>
        <div className={styles.actions}>
          <button type="button" onClick={() => dialogRef.current?.close()}>Cancel</button>
          <button type="button" onClick={save}>Save settings</button>
        </div>
      </form>
    </dialog>
  );
}