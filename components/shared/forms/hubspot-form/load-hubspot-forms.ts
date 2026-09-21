interface HubSpotForms {
  create(config: {
    readonly portalId: string;
    readonly formId: string;
    readonly region?: string;
    readonly target: string;
    readonly onFormReady?: (form: unknown) => void;
  }): void;
}

declare global {
  interface Window {
    hbspt?: { forms?: HubSpotForms };
  }
}

const SCRIPT_ID = "friendlyway-hubspot-forms";
const SCRIPT_SRC = "https://js.hsforms.net/forms/embed/v2.js";
let loadingForms: Promise<HubSpotForms> | undefined;

function getForms(): HubSpotForms | undefined {
  return window.hbspt?.forms;
}

export function loadHubSpotForms(): Promise<HubSpotForms> {
  const forms = getForms();

  if (forms) {
    return Promise.resolve(forms);
  }

  loadingForms ??= new Promise<HubSpotForms>((resolve, reject) => {
    const existingScript = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    const script = existingScript ?? document.createElement("script");

    const finishLoading = () => {
      const loadedForms = getForms();

      if (loadedForms) {
        resolve(loadedForms);
      } else {
        reject(new Error("HubSpot forms API was unavailable after script loading."));
      }
    };
    script.addEventListener("load", finishLoading, { once: true });
    script.addEventListener("error", () => reject(new Error("HubSpot forms script failed to load.")), { once: true });

    if (!existingScript) {
      script.id = SCRIPT_ID;
      script.async = true;
      script.src = SCRIPT_SRC;
      document.head.append(script);
    }
  }).catch((error: unknown) => {
    loadingForms = undefined;
    throw error;
  });

  return loadingForms;
}