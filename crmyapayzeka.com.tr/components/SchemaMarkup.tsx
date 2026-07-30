import { NAP, PARENT_SITE, SITE_NAME, SITE_URL } from "@/lib/site";

export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: NAP.legalName,
    url: SITE_URL,
    description:
      "Yapay zeka destekli CRM kurulumu, ERP entegrasyonu (Wolvox, Netsis), iş akışı ve doküman otomasyonu ile yapay zeka danışmanlığı. AFN Teknoloji markasıdır.",
    parentOrganization: {
      "@type": "Organization",
      name: "AFN Teknoloji",
      url: PARENT_SITE,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.street,
      addressLocality: NAP.district,
      addressRegion: NAP.city,
      postalCode: NAP.postalCode,
      addressCountry: "TR",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: NAP.phoneSchema,
        contactType: "sales",
        availableLanguage: ["Turkish", "English"],
        areaServed: "TR",
      },
    ],
    sameAs: [
      PARENT_SITE,
      "https://itdestekistanbul.com.tr",
      "https://medya.afnteknoloji.com",
      "https://www.linkedin.com/company/afn-teknoloji-bili%C5%9Fim-destek-ve-dan%C4%B1%C5%9Fmanl%C4%B1k-hizmetleri/",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    legalName: NAP.legalName,
    telephone: NAP.phoneSchema,
    email: NAP.email,
    url: SITE_URL,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.street,
      addressLocality: NAP.district,
      addressRegion: NAP.city,
      postalCode: NAP.postalCode,
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: NAP.geo.latitude,
      longitude: NAP.geo.longitude,
    },
    areaServed: {
      "@type": "Country",
      name: "Türkiye",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI-Powered CRM and Business Process Automation",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Türkiye",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Yapay Zeka, CRM ve Otomasyon Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Yapay Zeka Destekli CRM Kurulumu",
            description:
              "ERP verisi üzerinde çalışan, süreçlerinize göre modüllenen kurumsal CRM geliştirme ve devreye alma",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ERP Entegrasyonu (Wolvox, Netsis)",
            description:
              "Akınsoft Wolvox ve Netsis ERP veritabanlarıyla cari, stok, döviz ve sipariş düzeyinde çift yönlü entegrasyon",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "İş Akışı Otomasyonu",
            description:
              "Talep, onay, bildirim ve raporlama adımlarının tek akışta izlenebilir hale getirilmesi",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Doküman ve Teklif Otomasyonu",
            description:
              "Teklif, sözleşme ve e-posta içeriklerinin yapay zeka desteğiyle üretilmesi, onay ve gönderim akışına bağlanması",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Yapay Zeka Danışmanlığı",
            description:
              "Süreç keşfi, uygulanabilir yapay zeka senaryolarının belirlenmesi, veri ve güvenlik sınırlarının tanımlanması",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "tr-TR",
    publisher: {
      "@type": "Organization",
      name: NAP.legalName,
      url: PARENT_SITE,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
