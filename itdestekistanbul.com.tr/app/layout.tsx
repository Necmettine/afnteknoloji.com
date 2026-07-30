import type { Metadata } from "next";
import AnalyticsManager from "@/components/AnalyticsManager";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

// Yayına alınmadan önce gerçek GTM container kimliğiyle değiştirin
const GA_MEASUREMENT_ID = "G-F5Q60D696R";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "IT Destek İstanbul | Kurumsal IT Destek ve Bakım — AFN Teknoloji",
    template: "%s | IT Destek İstanbul",
  },
  description:
    "İstanbul'da kurumsal IT destek: yerinde ve uzaktan teknik destek, bakım anlaşması, sunucu ve network yönetimi. 2010'dan beri, ISO 27001 sertifikalı, 2 saat müdahale SLA. Bir AFN Teknoloji markası.",
  keywords:
    "IT destek İstanbul, bilgisayar destek İstanbul, kurumsal IT destek, IT bakım anlaşması, yerinde teknik destek, uzaktan destek, sunucu bakımı, network yönetimi, AFN Teknoloji",
  openGraph: {
    title: "IT Destek İstanbul | Kurumsal IT Destek ve Bakım",
    description:
      "İstanbul genelinde yerinde ve uzaktan IT destek, bakım anlaşması, sunucu ve network yönetimi. 7/24 destek, 2 saat müdahale SLA.",
    url: SITE_URL,
    siteName: "IT Destek İstanbul",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "IT Destek İstanbul | Kurumsal IT Destek ve Bakım",
    description:
      "İstanbul genelinde yerinde ve uzaktan IT destek, bakım anlaşması, sunucu ve network yönetimi.",
  },
  robots: {
    index: true,
    follow: true,
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
        <AnalyticsManager measurementId={GA_MEASUREMENT_ID} />
        <SchemaMarkup />
      </head>
      <body className="bg-it-navy text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
