import { NAP, PARENT_SITE, SITE_NAME, SITE_URL } from "@/lib/site";

export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: NAP.legalName,
    url: SITE_URL,
    description:
      "İstanbul genelinde kurumsal IT destek, yerinde ve uzaktan teknik destek, bakım anlaşması, sunucu ve network yönetimi hizmetleri. AFN Teknoloji markasıdır.",
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
        contactType: "customer service",
        availableLanguage: ["Turkish", "English"],
        areaServed: "TR",
      },
    ],
    sameAs: [
      PARENT_SITE,
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
      "@type": "City",
      name: "İstanbul",
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
    serviceType: "IT Support Services",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "City",
      name: "İstanbul",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kurumsal IT Destek Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Yerinde IT Destek",
            description:
              "İstanbul'un tüm ilçelerinde yerinde teknik destek; kritik arızalarda 2 saat müdahale SLA'sı",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Uzaktan Destek",
            description:
              "Şifreli ve kayıt altında uzaktan bağlantı ile dakikalar içinde teknik müdahale, 7/24 erişim",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IT Bakım Anlaşması",
            description:
              "Sabit aylık ücretle sınırsız uzaktan destek, planlı yerinde bakım, izleme, yedekleme ve güncelleme yönetimi",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sunucu ve Network Yönetimi",
            description:
              "Fiziksel/sanal sunucu kurulumu, Microsoft 365, firewall, switch ve kablosuz ağ yönetimi, yedekleme ve felaket kurtarma",
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
