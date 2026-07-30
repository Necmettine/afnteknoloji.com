import { NAP, PARENT_SITE, SITE_NAME, SITE_URL } from "@/lib/site";

export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: NAP.legalName,
    url: SITE_URL,
    description:
      "Şirketlerin bilgi teknolojileri departmanını sözleşmeli olarak dışarıdan yöneten yönetilen BT hizmeti (BT dış kaynak) sağlayıcısı. Kullanıcı ve cihaz yönetimi, lisans ve abonelik takibi, yedekleme denetimi, güvenlik yönetimi, envanter ve aylık yönetim raporlaması. AFN Teknoloji markasıdır.",
    parentOrganization: {
      "@type": "Organization",
      name: "AFN Teknoloji",
      url: PARENT_SITE,
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "ISO/IEC 27001 Bilgi Güvenliği Yönetim Sistemi Sertifikası",
      recognizedBy: {
        "@type": "Organization",
        name: "ISO/IEC 27001",
      },
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
        email: NAP.email,
        contactType: "customer service",
        availableLanguage: ["Turkish", "English"],
        areaServed: "TR",
      },
    ],
    sameAs: [
      PARENT_SITE,
      "https://itdestekistanbul.com.tr",
      "https://sunucubakimi.com.tr",
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
    areaServed: [
      { "@type": "City", name: "İstanbul" },
      { "@type": "Country", name: "Türkiye" },
    ],
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
    serviceType: "Managed IT Services / BT Dış Kaynak",
    name: "Yönetilen BT Hizmetleri",
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
      name: "Yönetilen BT Hizmet Kataloğu",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kullanıcı ve Cihaz Yönetimi",
            description:
              "Çalışan bilgisayarlarının kurulum standardı, işe giriş ve çıkış süreçlerinde hesap açma/kapatma, yetki devri ve cihaz teslim kaydı yönetimi.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Lisans ve Abonelik Yönetimi",
            description:
              "Microsoft 365 ve diğer yazılım aboneliklerinde plan optimizasyonu, kullanılmayan lisansların iptali, yenileme takvimi ve maliyet raporlaması.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Yedekleme Denetimi ve Geri Dönüş Testi",
            description:
              "Yedekleme işlerinin günlük doğrulanması, başarısız işlerin aynı gün müdahalesi ve periyodik geri dönüş (restore) tatbikatı.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Güvenlik Yönetimi",
            description:
              "Güvenlik duvarı kural yönetimi, uç nokta koruma, e-posta güvenliği ve oltalama filtreleme, çok faktörlü kimlik doğrulama ve yetki gözden geçirmesi.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "BT Envanteri ve Garanti Takibi",
            description:
              "Tüm donanım ve yazılım varlıklarının kaydı, garanti ve destek bitiş tarihlerinin izlenmesi, yaşam döngüsü ve yenileme planlaması.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tedarik Danışmanlığı",
            description:
              "Donanım ve yazılım alımlarında ihtiyaç analizi, teknik şartname hazırlığı, teklif karşılaştırması ve satın alma sonrası kurulum planı.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Aylık BT Sağlık Raporu",
            description:
              "SLA uyum oranı, talep istatistikleri, kök neden analizi, yedekleme ve güvenlik göstergeleri ile bütçe önerilerini içeren yönetim raporu.",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: "kurumsalitdestek.com.tr",
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
