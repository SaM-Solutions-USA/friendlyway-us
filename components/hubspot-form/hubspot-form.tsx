"use client";

import { useEffect, useId, useRef, useState } from "react";

import type { ConsentAdapter, ConsentCategory } from "@/lib/consent";
import { getBrowserConsentAdapter } from "@/lib/consent/browser-consent-adapter";

import { loadHubSpotForms } from "./load-hubspot-forms";
import styles from "./hubspot-form.module.css";

export interface HubSpotFormConfig {
  readonly portalId: string;
  readonly formId: string;
  readonly region?: string;
  readonly formName: string;
  readonly consentCategory: ConsentCategory;
}

export interface HubSpotFormProps {
  readonly config: HubSpotFormConfig;
  readonly consentAdapter?: ConsentAdapter;
}

type FormStatus = "checking" | "blocked" | "loading" | "ready" | "error";

export function HubSpotForm({ config, consentAdapter }: HubSpotFormProps) {
  const reactId = useId();
  const targetId = `hubspot-form-${reactId.replace(/:/g, "")}`;
  const mountRef = useRef<HTMLDivElement>(null);
  const [adapter, setAdapter] = useState<ConsentAdapter | undefined>(consentAdapter);
  const [hasConsent, setHasConsent] = useState(false);
  const [status, setStatus] = useState<FormStatus>("checking");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    setAdapter(consentAdapter ?? getBrowserConsentAdapter());
  }, [consentAdapter]);

  useEffect(() => {
    if (!adapter) {
      return;
    }

    const updateConsent = () => setHasConsent(adapter.hasConsent(config.consentCategory));
    updateConsent();

    return adapter.subscribe(updateConsent);
  }, [adapter, config.consentCategory]);

  useEffect(() => {
    const mount = mountRef.current;

    if (!adapter || !hasConsent) {
      mount?.replaceChildren();
      setStatus(adapter ? "blocked" : "checking");
      return;
    }

    let active = true;
    setStatus("loading");

    loadHubSpotForms()
      .then((forms) => {
        if (!active || !mountRef.current) {
          return;
        }

        mountRef.current.replaceChildren();
        forms.create({
          portalId: config.portalId,
          formId: config.formId,
          region: config.region,
          target: `#${targetId}`,
        });
        setStatus("ready");
      })
      .catch(() => {
        if (active) {
          setStatus("error");
        }
      });

    return () => {
      active = false;
      mountRef.current?.replaceChildren();
    };
  }, [adapter, config.formId, config.portalId, config.region, hasConsent, retryCount, targetId]);

  return (
    <section aria-busy={status === "checking" || status === "loading"} aria-label={config.formName} className={styles.root}>
      {status === "checking" || status === "loading" ? <p className={styles.message}>Loading form...</p> : null}
      {status === "blocked" ? (
        <div className={styles.message}>
          <p>Cookie consent is required to display this form.</p>
          <button type="button" onClick={() => adapter?.openSettings()}>Cookie settings</button>
        </div>
      ) : null}
      {status === "error" ? (
        <div className={styles.message}>
          <p>We could not load the form.</p>
          <button type="button" onClick={() => setRetryCount((count) => count + 1)}>Try again</button>
        </div>
      ) : null}
      <div className={styles.mount} hidden={status !== "ready"} id={targetId} ref={mountRef} />
    </section>
  );
}