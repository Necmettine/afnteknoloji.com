export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AFN Medya",
    alternateName: "AFN Medya Dijital Ajans",
    url: "https://medya.afnteknoloji.com",
    logo: "https://medya.afnteknoloji.com/logo.png",
    description:
      "Web tasarım, yazılım geliştirme ve sosyal medya yönetimi hizmetleri sunan dijital ajans. AFN Teknoloji markasıdır.",
    parentOrganization: {
      "@type": "Organization",
      name: "AFN Teknoloji",
      url: "https://afnteknoloji.com",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Zümrütevler Mah. Hanımeli Cad. Tuna İş Merkezi No:13 K:3 D:6",
      addressLocality: "Maltepe",
      addressRegion: "İstanbul",
      postalCode: "34852",
      addressCountry: "TR",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+90-216-572-50-40",
        contactType: "customer service",
        availableLanguage: ["Turkish", "English"],
        areaServed: "TR",
      },
    ],
    sameAs: [
      "https://afnteknoloji.com",
      "https://www.linkedin.com/company/afn-teknoloji-bili%C5%9Fim-destek-ve-dan%C4%B1%C5%9Fmanl%C4%B1k-hizmetleri/",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://medya.afnteknoloji.com/#localbusiness",
    name: "AFN Medya",
    image: "https://medya.afnteknoloji.com/logo.png",
    telephone: "+90-216-572-50-40",
    email: "info@afnteknoloji.com",
    url: "https://medya.afnteknoloji.com",
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
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Digital Agency Services",
    provider: {
      "@type": "Organization",
      name: "AFN Medya",
      url: "https://medya.afnteknoloji.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Turkey",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dijital Ajans Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Tasarım",
            description:
              "Kurumsal web sitesi, e-ticaret ve açılış sayfası tasarımı; hızlı, mobil uyumlu ve SEO dostu modern web siteleri",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Yazılım Geliştirme",
            description:
              "Next.js ve modern teknolojilerle özel web uygulamaları, CRM ve iş akışı otomasyonu geliştirme",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sosyal Medya Yönetimi",
            description:
              "İçerik üretimi, hesap yönetimi, reklam kampanyaları ve marka görünürlüğü yönetimi",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AFN Medya",
    url: "https://medya.afnteknoloji.com",
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
