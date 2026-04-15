import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AnalyticsManager from "@/components/AnalyticsManager";
import CookieBanner from "@/components/CookieBanner";
import FloatingContact from "@/components/FloatingContact";
import "./globals.css";

const GTM_ID = "GTM-PQ4Q42NH";

export const metadata: Metadata = {
  metadataBase: new URL("https://afnteknoloji.com"),
  title: "AFN Teknoloji | BT Destek ve Danışmanlık Hizmetleri",
  description:
    "Kurumsal BT altyapısı, sistem güvenliği, Microsoft, Huawei, VMware, Veeam ve Fortinet çözümleri için uzman danışmanlık ve destek hizmetleri.",
  keywords:
    "AFN Teknoloji, BT destek, sistem danışmanlığı, Microsoft partner, Huawei partner, VMware, Veeam, Fortinet, ağ güvenliği",
  verification: {
    google: "YR6nYotIr_Y8s4AONKXqLpH363XcM3CS1jM1VZp8dTA",
    other: {
      "msvalidate.01": "40d49c55206d4cd5803fb74c6874224e",
      "yandex-verification": "31371aa12ddb503f",
    },
  },
  openGraph: {
    title: "AFN Teknoloji | BT Destek ve Danışmanlık",
    description: "Kurumsal BT altyapısı, güvenlik, yedekleme ve operasyon sürekliliği hizmetleri.",
    url: "https://afnteknoloji.com",
    siteName: "AFN Teknoloji",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "AFN Teknoloji" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AFN Teknoloji",
    description: "Kurumsal BT altyapısı, güvenlik ve destek hizmetleri.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <AnalyticsManager gtmId={GTM_ID} />
      </head>
      <body className="bg-[#0A0E1A] text-white antialiased">
        {children}
        <FloatingContact />
        <CookieBanner />
        <SpeedInsights />
      </body>
    </html>
  );
}
