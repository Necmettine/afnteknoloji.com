import type { Metadata } from "next";
import AnalyticsManager from "@/components/AnalyticsManager";
import CookieBanner from "@/components/CookieBanner";
import FloatingContact from "@/components/FloatingContact";
import SchemaMarkup from "@/components/SchemaMarkup";
import "./globals.css";

const GTM_ID = "GTM-M2FWGJ8Q";

export const metadata: Metadata = {
  metadataBase: new URL("https://medya.afnteknoloji.com"),
  title: "AFN Medya | Web Tasarım, Yazılım ve Sosyal Medya",
  description:
    "AFN Medya; web tasarım, yazılım geliştirme ve sosyal medya yönetimi ile markanıza dijitalde daha güçlü bir görünüm kazandırır.",
  keywords:
    "AFN Medya, medya.afnteknoloji.com, web tasarım, kurumsal web sitesi, yazılım geliştirme, sosyal medya yönetimi",
  verification: {
    google: "YR6nYotIr_Y8s4AONKXqLpH363XcM3CS1jM1VZp8dTA",
  },
  openGraph: {
    title: "AFN Medya",
    description: "Web tasarım, yazılım ve sosyal medya tarafında markalara daha güçlü bir dijital yapı kuruyoruz.",
    url: "https://medya.afnteknoloji.com",
    siteName: "AFN Medya",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "AFN Medya" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AFN Medya",
    description: "Web tasarım, yazılım ve sosyal medya hizmetleri.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
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
        <SchemaMarkup />
      </head>
      <body className="bg-[#06101d] text-white antialiased">
        {children}
        <FloatingContact />
        <CookieBanner />
      </body>
    </html>
  );
}
