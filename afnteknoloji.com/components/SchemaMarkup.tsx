export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AFN Teknoloji",
    alternateName: "AFN Technology",
    url: "https://afnteknoloji.com",
    logo: "https://afnteknoloji.com/logo.png",
    description:
      "Kurumsal BT altyapısı, sistem güvenliği, Microsoft, Huawei, VMware, Veeam ve Fortinet çözümleri için uzman danışmanlık ve destek hizmetleri.",
    foundingDate: "2010",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 20,
      maxValue: 50,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Zümrütevler Mah. Hanımeli Cad. Tuna İş Merkezi No:13 K:3 D:6",
      addressLocality: "Maltepe",
      addressRegion: "İstanbul",
      postalCode: "34852",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.9358,
      longitude: 29.1394,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+90-216-572-50-40",
        contactType: "customer service",
        availableLanguage: ["Turkish", "English"],
        areaServed: "TR",
      },
      {
        "@type": "ContactPoint",
        telephone: "+90-216-572-50-40",
        contactType: "technical support",
        availableLanguage: ["Turkish", "English"],
        areaServed: "TR",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/afn-teknoloji-bili%C5%9Fim-destek-ve-dan%C4%B1%C5%9Fmanl%C4%B1k-hizmetleri/",
      "https://twitter.com/afnteknoloji",
      "https://www.facebook.com/afnteknoloji",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "ISO 27001",
      recognizedBy: {
        "@type": "Organization",
        name: "ISO",
      },
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://afnteknoloji.com/#localbusiness",
    name: "AFN Teknoloji",
    image: "https://afnteknoloji.com/logo.png",
    telephone: "+90-216-572-50-40",
    email: "info@afnteknoloji.com",
    url: "https://afnteknoloji.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Zümrütevler Mah. Hanımeli Cad. Tuna İş Merkezi No:13 K:3 D:6",
      addressLocality: "Maltepe",
      addressRegion: "İstanbul",
      postalCode: "34852",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.9358,
      longitude: 29.1394,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "IT Consulting and Support",
    provider: {
      "@type": "Organization",
      name: "AFN Teknoloji",
      url: "https://afnteknoloji.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Turkey",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "BT Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Siber Güvenlik Çözümleri",
            description:
              "Fortinet, firewall, IPS/IDS ve endpoint güvenlik çözümleri",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bulut Bilişim",
            description: "Microsoft 365, Azure ve hibrit bulut çözümleri",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Veri Yedekleme",
            description: "Veeam ve felaket kurtarma çözümleri",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Network Altyapısı",
            description: "Huawei switch, router ve network çözümleri",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sanallaştırma",
            description: "VMware vSphere ve sanallaştırma çözümleri",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sunucu ve Depolama",
            description: "Dell, HPE, IBM/Lenovo, Huawei kurumsal sunucu ve depolama çözümleri",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ağ Altyapısı ve Kablosuz Ağ",
            description: "Cisco, Zyxel, Aruba switch, router ve Wi-Fi çözümleri",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Yazılım Lisanslama",
            description: "Adobe Creative Cloud, AutoCAD, Zimbra kurumsal yazılım lisans satışı",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Endpoint Güvenlik",
            description: "Sophos, Kaspersky endpoint güvenlik, XDR ve antivirus çözümleri",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AFN Teknoloji",
    url: "https://afnteknoloji.com",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
