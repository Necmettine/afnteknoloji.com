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
      "Kurumsal BT Destek | Yönetilen BT Hizmetleri ve BT Dış Kaynak — AFN Teknoloji",
    template: "%s | Kurumsal BT Destek",
  },
  description:
    "Şirketinizin BT departmanını sözleşmeyle biz yönetelim: kullanıcı ve cihaz yönetimi, lisans takibi, yedekleme denetimi, güvenlik ve aylık yönetim raporu. Sabit aylık bütçe, yazılı SLA. Bir AFN Teknoloji markası.",
  keywords:
    "yönetilen BT hizmetleri, BT dış kaynak, IT outsourcing, dış kaynak BT departmanı, managed IT services Türkiye, BT envanter yönetimi, Microsoft 365 lisans yönetimi, BT sağlık raporu, SLA, AFN Teknoloji",
  openGraph: {
    title: "Kurumsal BT Destek | Yönetilen BT Hizmetleri ve BT Dış Kaynak",
    description:
      "BT departmanınızın işletilmesini sözleşmeli uzman ekibe devredin. Sabit aylık maliyet, yazılı hizmet seviyesi, aylık yönetim raporu.",
    url: SITE_URL,
    siteName: "Kurumsal BT Destek",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kurumsal BT Destek | Yönetilen BT Hizmetleri ve BT Dış Kaynak",
    description:
      "BT departmanınızın işletilmesini sözleşmeli uzman ekibe devredin. Sabit aylık maliyet, yazılı SLA, aylık yönetim raporu.",
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
      <body className="bg-mit-graphite text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
