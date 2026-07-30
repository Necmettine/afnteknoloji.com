import type { Metadata } from "next";
import "./globals.css";
import AnalyticsManager from "@/components/AnalyticsManager";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://turkiyebilisim.com.tr"),
  title: "Türkiye Bilişim | BT Destek ve Danışmanlık Hizmetleri",
  description:
    "Kurumsal BT altyapısı, sistem güvenliği, Microsoft, Huawei, VMware, Veeam ve Fortinet çözümleri için uzman danışmanlık ve destek hizmetleri.",
  keywords:
    "Türkiye Bilişim, BT destek, sistem danışmanlığı, Microsoft partner, Huawei partner, VMware, Veeam, Fortinet, ağ güvenliği",
  openGraph: {
    title: "Türkiye Bilişim | BT Destek ve Danışmanlık",
    description: "Kurumsal BT altyapısı, güvenlik, yedekleme ve operasyon sürekliliği hizmetleri.",
    url: "https://turkiyebilisim.com.tr",
    siteName: "Türkiye Bilişim",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/turkiyebilisim-logo.png", width: 1200, height: 630, alt: "Türkiye Bilişim" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Türkiye Bilişim",
    description: "Kurumsal BT altyapısı, güvenlik ve destek hizmetleri.",
    images: ["/turkiyebilisim-logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://turkiyebilisim.com.tr/#organization",
      "name": "Türkiye Bilişim",
      "url": "https://turkiyebilisim.com.tr",
      "logo": {
        "@type": "ImageObject",
        "url": "https://turkiyebilisim.com.tr/turkiyebilisim-logo.png",
      },
      "description": "Kurumsal BT altyapısı, sistem güvenliği, veri yedekleme ve ağ altyapısı alanlarında uzman danışmanlık ve destek hizmetleri.",
      "foundingDate": "2014",
      "knowsAbout": [
        "Sistem Danışmanlığı", "BT Güvenliği", "Veri Yedekleme",
        "Microsoft 365", "VMware", "Veeam", "Fortinet", "Huawei", "Ağ Altyapısı"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "telephone": "+90-216-572-50-40",
        "availableLanguage": ["Turkish", "English"],
        "url": "https://turkiyebilisim.com.tr/iletisim",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://turkiyebilisim.com.tr/#localbusiness",
      "name": "Türkiye Bilişim",
      "url": "https://turkiyebilisim.com.tr",
      "image": "https://turkiyebilisim.com.tr/turkiyebilisim-logo.png",
      "description": "Kurumsal BT altyapısı, sistem güvenliği ve veri yedekleme çözümleri.",
      "priceRange": "$$",
      "telephone": "+90-216-572-50-40",
      "email": "info@turkiyebilisim.com.tr",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Zümrütevler Mah. Hanımeli Cad. Tuna İş Merkezi No:13 K:3 D:6",
        "addressLocality": "Maltepe",
        "addressRegion": "İstanbul",
        "postalCode": "34852",
        "addressCountry": "TR",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.9358,
        "longitude": 29.1394,
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00",
        },
      ],
      "areaServed": "TR",
      "serviceType": [
        "BT Danışmanlığı", "Sistem Kurulum", "Ağ Güvenliği",
        "Veri Yedekleme", "Microsoft 365", "Teknik Destek"
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://turkiyebilisim.com.tr/#website",
      "url": "https://turkiyebilisim.com.tr",
      "name": "Türkiye Bilişim",
      "publisher": { "@id": "https://turkiyebilisim.com.tr/#organization" },
      "inLanguage": ["tr", "en"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0A0E1A] text-white antialiased">
        {children}
        <CookieBanner />
        <AnalyticsManager />
      </body>
    </html>
  );
}
