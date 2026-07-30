import { NAP, PARENT_SITE, SITE_NAME, SITE_URL } from "@/lib/site";

export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: NAP.legalName,
    url: SITE_URL,
    description:
      "Satış süreci ve CRM otomasyonu: potansiyel müşteri kaydı, teklif üretimi, hatırlatma zincirleri, görev atama, tahsilat takibi ve ERP entegrasyonu. AFN Teknoloji markasıdır.",
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
      "https://crmyapayzeka.com.tr",
      "https://itdestekistanbul.com.tr",
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
    serviceType: "Sales Process and CRM Automation",
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
      name: "Satış ve CRM Otomasyonu Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Satış Hattı (Pipeline) Kurulumu",
            description:
              "Fırsat aşamalarının tanımlanması, aşama geçiş kurallarının yazılması, aşama değişiminde otomatik görev ve bildirim üretilmesi",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Teklif Üretimi ve Takip Otomasyonu",
            description:
              "Şablondan teklif oluşturma, PDF üretimi ve e-posta gönderimi, teklif sonrası hatırlatma zinciri ve yanıt takibi",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Potansiyel Müşteri (Lead) Yakalama",
            description:
              "Web sitesi formlarından, telefon santralinden ve e-postadan gelen taleplerin CRM'de otomatik kayıt açması ve temsilciye atanması",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ERP ve Muhasebe Entegrasyonu",
            description:
              "Akınsoft Wolvox ve Logo Netsis ile cari kart, bakiye, fatura ve tahsilat senkronu; vade ve yaşlandırma verisinin CRM'e taşınması",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Otomatik Satış Raporlaması",
            description:
              "Haftalık ve aylık satış, pipeline ve tahsilat raporlarının belirlenen saatte otomatik olarak e-postayla dağıtılması",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sözleşme Yenileme ve Vade Hatırlatması",
            description:
              "Sözleşme bitiş, bakım yenileme ve ödeme vadesi tarihlerinin önceden uyarı üretmesi ve sorumluya görev açması",
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
