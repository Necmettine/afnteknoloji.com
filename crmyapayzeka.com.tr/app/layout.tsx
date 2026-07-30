import type { Metadata } from "next";
import AnalyticsManager from "@/components/AnalyticsManager";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

// Yayına alınmadan önce gerçek GA4 ölçüm kimliğiyle değiştirin
const GA_MEASUREMENT_ID = "G-LB5MPW3MVL";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "CRM Yapay Zeka | Yapay Zeka ile CRM ve İş Akışı Otomasyonu — AFN Teknoloji",
    template: "%s | CRM Yapay Zeka",
  },
  description:
    "Yapay zeka destekli CRM kurulumu, Wolvox ve Netsis ERP entegrasyonu, iş akışı ve teklif otomasyonu. Kendi ürünlerini yapay zekayla geliştiren yazılım ekibi. Bir AFN Teknoloji markası.",
  keywords:
    "yapay zeka CRM, CRM otomasyonu, iş akışı otomasyonu, ERP entegrasyonu, Wolvox CRM, Netsis entegrasyonu, teklif otomasyonu, yapay zeka danışmanlığı, AFN Teknoloji",
  openGraph: {
    title: "CRM Yapay Zeka | Yapay Zeka ile CRM ve İş Akışı Otomasyonu",
    description:
      "ERP verinizin üzerinde çalışan yapay zeka destekli CRM ve otomasyon sistemleri. Wolvox ve Netsis entegrasyonu, teklif ve doküman otomasyonu.",
    url: SITE_URL,
    siteName: "CRM Yapay Zeka",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "CRM Yapay Zeka | Yapay Zeka ile CRM ve İş Akışı Otomasyonu",
    description:
      "ERP verinizin üzerinde çalışan yapay zeka destekli CRM ve otomasyon sistemleri.",
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
      <body className="bg-ai-night text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
