// Site geneli sabitler — NAP (Name, Address, Phone) tek kaynaktan yönetilir
export const SITE_URL = "https://kurumsalitdestek.com.tr";
export const SITE_NAME = "Kurumsal BT Destek";

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
  emailHref: "mailto:info@afnteknoloji.com",
  geo: { latitude: 40.9358, longitude: 29.1394 },
} as const;

export const PARENT_SITE = "https://afnteknoloji.com";
export const CONTACT_URL = "https://afnteknoloji.com/iletisim";

// Kardeş markalar — footer ve llms.txt bağlantıları
export const SISTER_SITES = [
  {
    url: "https://itdestekistanbul.com.tr",
    label: "itdestekistanbul.com.tr",
    note: "İstanbul'da yerinde ve uzaktan BT destek",
  },
  {
    url: "https://sunucubakimi.com.tr",
    label: "sunucubakimi.com.tr",
    note: "Sunucu bakımı ve izleme",
  },
] as const;
