"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

interface AnalyticsManagerProps {
  gtmId: string;
}

export default function AnalyticsManager({ gtmId }: AnalyticsManagerProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      setEnabled(window.localStorage.getItem("afn-cookie-consent") === "accepted");
    };

    syncConsent();
    window.addEventListener("storage", syncConsent);
    window.addEventListener("afn-cookie-consent-changed", syncConsent as EventListener);

    return () => {
      window.removeEventListener("storage", syncConsent);
      window.removeEventListener("afn-cookie-consent-changed", syncConsent as EventListener);
    };
  }, []);

  if (!enabled) {
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
