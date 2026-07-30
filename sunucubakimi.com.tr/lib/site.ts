// Site geneli sabitler — NAP (Name, Address, Phone) tek kaynaktan yönetilir
export const SITE_URL = "https://sunucubakimi.com.tr";
export const SITE_NAME = "Sunucu Bakımı";

export const NAP = {
  legalName:
    "AFN Teknoloji Bilişim Destek ve Danışmanlık Hizmetleri Tic. Ltd. Şti.",
  brandName: "AFN Teknoloji",
  street: "Zümrütevler Mah. Hanımeli Cad. Tuna İş Merkezi No:13 K:3 D:6",
  district: "Maltepe",
  city: "İstanbul",
  postalCode: "34852",
  phoneDisplay: "+90 216 572 50 40",
  phoneHref: "tel:+902165725040",
  phoneSchema: "+90-216-572-50-40",
  email: "info@afnteknoloji.com",
  geo: { latitude: 40.9358, longitude: 29.1394 },
} as const;

export const PARENT_SITE = "https://afnteknoloji.com";
export const CONTACT_URL = "https://afnteknoloji.com/iletisim";

// Müdahale süreleri — SLA metinleri birden çok sayfada kullanıldığı için tek kaynak
export const SLA_TIERS = [
  {
    level: "Kritik",
    time: "2 saat",
    scope:
      "Sunucu ayakta değil, sanallaştırma host'u kapalı, RAID dizisi çevrimdışı veya tüm kullanıcılar erişemiyor.",
  },
  {
    level: "Yüksek",
    time: "4 saat",
    scope:
      "Servis çalışıyor ancak yedeklilik kaybolmuş: disk arızası, güç kaynağı arızası, yedekleme işi başarısız, performans ciddi düşmüş.",
  },
  {
    level: "Standart",
    time: "8 saat",
    scope:
      "Tek kullanıcıyı etkileyen sorunlar, yapılandırma değişikliği, kapasite artışı, planlı bakım ve raporlama talepleri.",
  },
] as const;
