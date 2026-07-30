"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const CONSENT_KEY = "itdestek-cookie-consent";
const CONSENT_EVENT = "itdestek-cookie-consent-changed";

interface AnalyticsManagerProps {
  gtmId: string;
}

export default function AnalyticsManager({ gtmId }: AnalyticsManagerProps) {
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

  // GTM kimliği tanımlanana kadar veya onay verilmeden hiçbir şey yükleme
  if (!enabled || !gtmId || gtmId === "GTM-XXXXXXX") {
    return null;
  }

  return (
    <Script id="gtm" strategy="afterInteractive">{`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');
    `}</Script>
  );
}
