import type { Metadata } from "next";
import AnalyticsManager from "@/components/AnalyticsManager";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

// Yayına alınmadan önce gerçek GA4 ölçüm kimliğiyle değiştirin
const GA_MEASUREMENT_ID = "GA_PLACEHOLDER";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Sunucu Bakımı | Sunucu Kurulum, Bakım ve Yönetimi — AFN Teknoloji",
    template: "%s | Sunucu Bakımı",
  },
  description:
    "Kurumsal sunucu kurulumu, periyodik bakımı ve yönetimi: Dell, HPE, Lenovo ve Huawei donanımı, VMware vSphere sanallaştırma, Veeam yedekleme, RAID ve depolama, Windows Server ile Linux işletimi. Kritik arızada 2 saat müdahale. Bir AFN Teknoloji markası.",
  keywords:
    "sunucu bakımı, sunucu kurulumu, sunucu yönetimi, periyodik sunucu bakımı, VMware vSphere, Veeam yedekleme, RAID yönetimi, Windows Server bakım, Linux sunucu yönetimi, sunucu göçü, AFN Teknoloji",
  openGraph: {
    title: "Sunucu Kurulum, Bakım ve Yönetimi | Sunucu Bakımı",
    description:
      "Fiziksel ve sanal sunucu altyapınız için kurulum, göç, periyodik bakım, yedekleme doğrulaması ve 7/24 izleme. Kritik arızada 2 saat müdahale.",
    url: SITE_URL,
    siteName: "Sunucu Bakımı",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sunucu Kurulum, Bakım ve Yönetimi | Sunucu Bakımı",
    description:
      "Kurumsal sunucu kurulumu, periyodik bakımı ve yönetimi. VMware, Veeam, Windows Server ve Linux uzmanlığı.",
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
      <body className="bg-srv-base text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
