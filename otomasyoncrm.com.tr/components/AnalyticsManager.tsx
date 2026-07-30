"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const CONSENT_KEY = "otomasyoncrm-cookie-consent";
const CONSENT_EVENT = "otomasyoncrm-cookie-consent-changed";

interface AnalyticsManagerProps {
  measurementId: string;
}

export default function AnalyticsManager({ measurementId }: AnalyticsManagerProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      setEnabled(window.localStorage.getItem(CONSENT_KEY) === "accepted");
    };

    syncConsent();
    window.addEventListener("storage", syncConsent);
    window.addEventListener(CONSENT_EVENT, syncConsent as EventListener);

    return () => {
      window.removeEventListener("storage", syncConsent);
      window.removeEventListener(CONSENT_EVENT, syncConsent as EventListener);
    };
  }, []);

  if (!enabled || !measurementId || measurementId === "GA_PLACEHOLDER") {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${measurementId}');
      `}</Script>
    </>
  );
}
