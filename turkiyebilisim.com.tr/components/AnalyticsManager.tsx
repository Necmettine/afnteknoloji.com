"use client";

import { useEffect } from "react";
import Script from "next/script";

const GA_ID = "G-5LBWTJSQCF";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default function AnalyticsManager() {
  useEffect(() => {
    // Consent durumunu sync et
    const applyConsent = () => {
      const consent = window.localStorage.getItem("turkiyebilisim-cookie-consent");
      if (typeof window.gtag === "function") {
        window.gtag("consent", "update", {
          analytics_storage: consent === "accepted" ? "granted" : "denied",
        });
      }
    };

    applyConsent();
    window.addEventListener("turkiyebilisim-cookie-consent-changed", applyConsent);
    return () => window.removeEventListener("turkiyebilisim-cookie-consent-changed", applyConsent);
  }, []);

  return (
    <>
      {/* GA4 her zaman yüklenir — veri toplama consent'e göre açılır/kapanır */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}

        // Varsayılan: veri toplamayı kapat (KVKK uyumlu)
        gtag('consent', 'default', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          wait_for_update: 500
        });

        gtag('js', new Date());
        gtag('config', '${GA_ID}', { anonymize_ip: true });

        // Daha önce kabul edilmişse hemen aç
        (function(){
          try {
            if(localStorage.getItem('turkiyebilisim-cookie-consent') === 'accepted'){
              gtag('consent', 'update', { analytics_storage: 'granted' });
            }
          } catch(e){}
        })();
      `}</Script>
    </>
  );
}
