import type { Metadata } from "next";
import Script from "next/script";
import FloatingContact from "@/components/FloatingContact";
import "./globals.css";

const GTM_ID = "GTM-PQ4Q42NH";

export const metadata: Metadata = {
  title: "AFN Teknoloji | BT Destek ve Danışmanlık Hizmetleri",
  description: "Kurumsal BT altyapısı, sistem güvenliği, Microsoft Silver Partner, Huawei, VMware, Veeam, Fortinet çözüm ortağı. 7/24 teknik destek.",
  keywords: "AFN Teknoloji, BT destek, sistem danışmanlığı, Microsoft partner, Huawei partner, VMware, Veeam, Fortinet, ağ güvenliği",
  verification: {
    google: "YR6nYotIr_Y8s4AONKXqLpH363XcM3CS1jM1VZp8dTA",
    other: {
      "msvalidate.01": "40d49c55206d4cd5803fb74c6874224e",
      "yandex-verification": "31371aa12ddb503f",
    },
  },
  openGraph: {
    title: "AFN Teknoloji | BT Destek ve Danışmanlık",
    description: "15+ yıllık deneyimle kurumsal BT çözümleri. Microsoft, Huawei, VMware, Veeam, Fortinet yetkili iş ortağı.",
    url: "https://afnteknoloji.com",
    siteName: "AFN Teknoloji",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}</Script>
      </head>
      <body className="bg-[#0A0E1A] text-white antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0" width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
