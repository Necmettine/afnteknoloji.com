import { NAP, PARENT_SITE, SITE_NAME, SITE_URL } from "@/lib/site";

export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: NAP.legalName,
    url: SITE_URL,
    description:
      "Sunucu kurulumu, periyodik bakımı ve yönetimi: fiziksel sunucu donanımı, VMware vSphere sanallaştırma, Veeam yedekleme, RAID ve depolama, Windows Server ile Linux işletimi. AFN Teknoloji markasıdır.",
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
        contactType: "technical support",
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
    serviceType: "Server Installation, Maintenance and Management",
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
      name: "Sunucu Kurulum, Bakım ve Yönetim Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sunucu Kurulumu ve Göç",
            description:
              "Dell PowerEdge, HPE ProLiant, Lenovo ThinkSystem ve Huawei FusionServer kurulumu, kabin montajı, iDRAC/iLO yapılandırması, eski sunucudan P2V/V2V veri göçü ve Active Directory rol devri.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sanallaştırma (VMware vSphere)",
            description:
              "vSphere/ESXi kurulumu, vCenter yönetimi, HA ve DRS küme yapılandırması, vMotion ile kesintisiz bakım, kaynak havuzu ve sanal makine standartlaştırma.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Yedekleme ve Felaket Kurtarma (Veeam)",
            description:
              "Veeam Backup & Replication kurulumu, 3-2-1 yedekleme mimarisi, değiştirilemez (immutable) depolama, SureBackup ile otomatik geri yükleme doğrulaması, RPO/RTO hedefli felaket kurtarma planı.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Depolama ve RAID Yönetimi",
            description:
              "RAID seviyesi tasarımı, denetleyici ve önbellek pili kontrolü, SSD aşınma takibi, SAN/NAS ve iSCSI bağlantı yapılandırması, disk arıza öngörüsü ve yedek parça planlaması.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "İşletim Sistemi ve Güncelleme Yönetimi",
            description:
              "Windows Server ve Linux (Ubuntu, Red Hat, Debian) kurulumu ve sertleştirilmesi, Active Directory, DNS/DHCP, firmware-BIOS ve yama yönetimi, planlı bakım penceresi ile güncelleme.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "İzleme ve Kapasite Planlama",
            description:
              "7/24 sunucu izleme, CPU/RAM/disk/IOPS eşik alarmları, donanım sağlık ve sıcaklık takibi, büyüme trendine göre kapasite raporu ve yenileme öngörüsü.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Periyodik Sunucu Bakımı",
            description:
              "Donanım sağlık kontrolü, firmware/BIOS güncelleme, yedek doğrulama testi, disk ve RAID durumu, log ve kaynak analizi ile kapasite raporu; kritik arızada 2 saat müdahale.",
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
      name: NAP.brandName,
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
