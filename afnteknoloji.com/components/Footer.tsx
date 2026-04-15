"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const linksTr: Record<string, { label: string; href: string }[]> = {
  "Site Haritasi": [
    { label: "Anasayfa", href: "/" },
    { label: "Hakkimizda", href: "/hakkimizda" },
    { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
    { label: "Cozumlerimiz", href: "/cozumlerimiz" },
    { label: "Referanslarimiz", href: "/referanslarimiz" },
    { label: "Blog", href: "/blog" },
    { label: "Destek Talebi", href: "/destek" },
    { label: "Iletisim", href: "/iletisim" },
  ],
  Cozumlerimiz: [
    { label: "Sanallastirma", href: "/cozumlerimiz/sanallastirma" },
    { label: "Veri Yedekleme", href: "/cozumlerimiz/veri-yedekleme-cozumleri" },
    { label: "Ag Guvenligi", href: "/cozumlerimiz/ag-ve-internet-guvenligi-cozumleri" },
    { label: "Felaket Koruma", href: "/cozumlerimiz/felaket-koruma-senaryolari" },
    { label: "Veri Tekillestirme", href: "/cozumlerimiz/veri-tekillestirme" },
    { label: "Mobil Cozumler", href: "/cozumlerimiz/mobil-cozumler" },
    { label: "Zimbra Turkiye", href: "/zimbra" },
    { label: "5651 Loglama", href: "/cozumlerimiz/5651-loglama" },
  ],
  Hizmetlerimiz: [
    { label: "Sistem Danismanligi", href: "/hizmetlerimiz/sistem-danismanligi" },
    { label: "BT Guvenlik", href: "/hizmetlerimiz/bt-guvenlik-sistemleri-bakim-destek" },
    { label: "PC-Sunucu Destek", href: "/hizmetlerimiz/pc-sunucu-bakim-destek" },
    { label: "Yardim Masasi", href: "/hizmetlerimiz/yardim-masasi" },
    { label: "Ag Guvenligi", href: "/hizmetlerimiz/ag-ve-guvenlik-danismanligi" },
    { label: "Virus Koruma / EDR & XDR", href: "/guvenlik-yazilimlari" },
  ],
};

const linksEn: Record<string, { label: string; href: string }[]> = {
  "Site Map": [
    { label: "Home", href: "/en" },
    { label: "About Us", href: "/en/hakkimizda" },
    { label: "Services", href: "/en/hizmetlerimiz" },
    { label: "Solutions", href: "/en/cozumlerimiz" },
    { label: "References", href: "/en/referanslarimiz" },
    { label: "Blog", href: "/blog" },
    { label: "Support Request", href: "/destek" },
    { label: "Contact", href: "/en/iletisim" },
  ],
  Solutions: [
    { label: "Virtualization", href: "/en/cozumlerimiz/sanallastirma" },
    { label: "Data Backup", href: "/en/cozumlerimiz/veri-yedekleme-cozumleri" },
    { label: "Network Security", href: "/en/cozumlerimiz/ag-ve-internet-guvenligi-cozumleri" },
    { label: "Disaster Protection", href: "/en/cozumlerimiz/felaket-koruma-senaryolari" },
    { label: "Data Deduplication", href: "/en/cozumlerimiz/veri-tekillestirme" },
    { label: "Mobile Solutions", href: "/en/cozumlerimiz/mobil-cozumler" },
    { label: "Zimbra Turkey", href: "/zimbra" },
    { label: "5651 Logging", href: "/en/cozumlerimiz/5651-loglama" },
  ],
  Services: [
    { label: "System Consulting", href: "/en/hizmetlerimiz/sistem-danismanligi" },
    { label: "IT Security", href: "/en/hizmetlerimiz/bt-guvenlik-sistemleri-bakim-destek" },
    { label: "PC-Server Support", href: "/en/hizmetlerimiz/pc-sunucu-bakim-destek" },
    { label: "Help Desk", href: "/en/hizmetlerimiz/yardim-masasi" },
    { label: "Network Security", href: "/en/hizmetlerimiz/ag-ve-guvenlik-danismanligi" },
    { label: "Antivirus / EDR & XDR", href: "/en/guvenlik-yazilimlari" },
  ],
};

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/AfnTeknolojiBilsimDestek",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "https://twitter.com/AfnTeknoloji",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/afn-teknoloji-biliim-destek-ve-danmanlk-hizmetleri/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/afn_teknoloji/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Afnteknoloji",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const pathname = usePathname() || "/";
  const isEn = pathname.startsWith("/en");
  const links = isEn ? linksEn : linksTr;

  return (
    <footer className="bg-[#060810] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="AFN Teknoloji Logo"
                width={150}
                height={56}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              {isEn
                ? "We deliver enterprise IT infrastructure, system security, and technology solutions with 10+ years of experience."
                : "Kurumsal BT altyapisi, sistem guvenligi ve teknoloji cozumlerinde 10+ yillik deneyimle hizmetinizdeyiz."}
            </p>
            <div className="space-y-3 mb-6">
              <a href="tel:+902165725040" className="flex items-center gap-3 text-gray-400 hover:text-[#F5A623] transition-colors text-sm">
                <Phone className="w-4 h-4 text-[#F5A623]" /> +90 216 572 50 40
              </a>
              <a href="mailto:info@afnteknoloji.com" className="flex items-center gap-3 text-gray-400 hover:text-[#F5A623] transition-colors text-sm">
                <Mail className="w-4 h-4 text-[#F5A623]" /> info@afnteknoloji.com
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#F5A623] mt-0.5 flex-shrink-0" /> {isEn ? "Maltepe / Beylikduzu, Istanbul" : "Maltepe / Beylikduzu, Istanbul"}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  aria-label={social.name}
                  className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-xs text-gray-400 hover:text-[#F5A623] hover:border-[#F5A623]/40 transition-all"
                >
                  {social.icon}
                  <span className="hidden sm:inline">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-bold text-white mb-4 text-sm tracking-wide">{title}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-gray-500 hover:text-[#F5A623] transition-colors text-sm">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            {isEn ? "© 2026 AFN Technology. All rights reserved." : "© 2026 AFN Teknoloji. Tum haklari saklidir."}
          </p>
          <div className="flex items-center gap-4">
            <a href="/gizlilik-politikasi" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              {isEn ? "Privacy Policy" : "Gizlilik Politikasi"}
            </a>
            <div className="flex items-center gap-2 text-xs text-gray-700">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {isEn ? "Contact and support channels active" : "Iletisim ve destek kanallari aktif"}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
