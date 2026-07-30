import type { Metadata } from "next";
import AnalyticsManager from "@/components/AnalyticsManager";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

// Yayına alınmadan önce gerçek GA4 ölçüm kimliğiyle değiştirin
const GA_MEASUREMENT_ID = "G-4QD7554ZML";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Yapay Zeka Flow | İş Akışı ve Onay Süreci Otomasyonu — AFN Teknoloji",
    template: "%s | Yapay Zeka Flow",
  },
  description:
    "Departmanlar arası iş akışlarını uçtan uca otomatikleştirin: talep-onay zincirleri, doküman akışları, ERP ve e-posta sistemleri arasında veri köprüleri. Bir AFN Teknoloji markası.",
  keywords:
    "iş akışı otomasyonu, onay süreci otomasyonu, workflow otomasyonu, satın alma onay akışı, doküman akışı, ERP entegrasyonu, süreç dijitalleştirme, yapay zeka belge okuma, AFN Teknoloji",
  openGraph: {
    title: "Yapay Zeka Flow | İş Akışı ve Onay Süreci Otomasyonu",
    description:
      "Talep, onay, aksiyon ve kayıt adımlarını tek akışta birleştirin. ERP, e-posta ve dosya sistemlerinizle konuşan iş akışı otomasyonu.",
    url: SITE_URL,
    siteName: "Yapay Zeka Flow",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Yapay Zeka Flow | İş Akışı ve Onay Süreci Otomasyonu",
    description:
      "Departmanlar arası talep ve onay süreçlerini uçtan uca otomatikleştiren iş akışı çözümleri.",
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
      <body className="bg-flow-base text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
