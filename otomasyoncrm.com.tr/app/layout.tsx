import type { Metadata } from "next";
import AnalyticsManager from "@/components/AnalyticsManager";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

// Yayına alınmadan önce gerçek GA4 ölçüm kimliğiyle değiştirin
const GA_MEASUREMENT_ID = "G-DE6RVSWSQ7";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Otomasyon CRM | Satış Süreci ve CRM Otomasyonu — AFN Teknoloji",
    template: "%s | Otomasyon CRM",
  },
  description:
    "Satış hattınızı CRM içinde otomatikleştirin: potansiyel müşteri kaydı, teklif üretimi ve PDF gönderimi, hatırlatma zincirleri, görev atama, vade ve sözleşme uyarıları, Wolvox/Netsis senkronu. Bir AFN Teknoloji markası.",
  keywords:
    "CRM otomasyonu, satış süreci otomasyonu, satış hattı yönetimi, pipeline otomasyonu, teklif takip otomasyonu, lead yakalama, Wolvox CRM entegrasyonu, Netsis CRM entegrasyonu, satış raporu otomasyonu, AFN Teknoloji",
  openGraph: {
    title: "Otomasyon CRM | Satış Süreçlerinizi CRM İçinde Otomatikleştirin",
    description:
      "Excel takibi, unutulan teklif takibi ve elle rapor hazırlama biter. Lead'den tahsilata kadar satış süreciniz CRM içinde kendiliğinden ilerler.",
    url: SITE_URL,
    siteName: "Otomasyon CRM",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Otomasyon CRM | Satış Süreci ve CRM Otomasyonu",
    description:
      "Lead yakalama, teklif üretimi, hatırlatma zinciri, görev atama ve ERP senkronu tek akışta.",
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
      <body className="bg-ops-base text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
