"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const linksTr: Record<string, { label: string; href: string }[]> = {
  "Site Haritası": [
    { label: "Anasayfa", href: "/" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
    { label: "Çözümlerimiz", href: "/cozumlerimiz" },
    { label: "Referanslarımız", href: "/referanslarimiz" },
    { label: "Blog", href: "/blog" },
    { label: "Destek Talebi", href: "/destek" },
    { label: "İletişim", href: "/iletisim" },
  ],
  "Çözümlerimiz": [
    { label: "Sanallaştırma", href: "/cozumlerimiz/sanallastirma" },
    { label: "Veri Yedekleme", href: "/cozumlerimiz/veri-yedekleme-cozumleri" },
    { label: "Ağ Güvenliği", href: "/cozumlerimiz/ag-ve-internet-guvenligi-cozumleri" },
    { label: "Felaket Koruma", href: "/cozumlerimiz/felaket-koruma-senaryolari" },
    { label: "Veri Tekilleştirme", href: "/cozumlerimiz/veri-tekillestirme" },
    { label: "Mobil Çözümler", href: "/cozumlerimiz/mobil-cozumler" },
    { label: "Zimbra Türkiye", href: "/zimbra" },
    { label: "5651 Loglama", href: "/cozumlerimiz/5651-loglama" },
  ],
  Hizmetlerimiz: [
    { label: "Sistem Danışmanlığı", href: "/hizmetlerimiz/sistem-danismanligi" },
    { label: "BT Güvenlik", href: "/hizmetlerimiz/bt-guvenlik-sistemleri-bakim-destek" },
    { label: "PC-Sunucu Destek", href: "/hizmetlerimiz/pc-sunucu-bakim-destek" },
    { label: "Yardım Masası", href: "/hizmetlerimiz/yardim-masasi" },
    { label: "Ağ Güvenliği", href: "/hizmetlerimiz/ag-ve-guvenlik-danismanligi" },
    { label: "Virüs Koruma / EDR & XDR", href: "/guvenlik-yazilimlari" },
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

export default function Footer() {
  const pathname = usePathname() || "/";
  const isEn = pathname.startsWith("/en");
  const links = isEn ? linksEn : linksTr;

  return (
    <footer className="border-t border-white/5 bg-[#060810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/turkiyebilisim-logo.png"
                alt="Türkiye Bilişim Logo"
                width={150}
                height={56}
                className="h-12 w-auto object-contain" style={{filter:"brightness(0) saturate(100%) invert(62%) sepia(80%) saturate(500%) hue-rotate(155deg) brightness(100%) contrast(100%)"}}
              />
            </div>
            <p className="mb-6 max-w-sm text-sm leading-7 text-slate-400">
              {isEn
                ? "We deliver enterprise IT infrastructure, system security, and technology solutions with 10+ years of experience."
                : "Kurumsal BT altyapısı, sistem güvenliği ve teknoloji çözümlerinde 10+ yıllık deneyimle hizmetinizdeyiz."}
            </p>
            <div className="panel-surface mb-6 space-y-3 rounded-[26px] p-5">
              <a href="tel:+902165725040" className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-[#06B6D4]">
                <Phone className="w-4 h-4 text-[#06B6D4]" /> +90 216 572 50 40
              </a>
              <a href="mailto:info@turkiyebilisim.com.tr" className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-[#06B6D4]">
                <Mail className="w-4 h-4 text-[#06B6D4]" /> info@turkiyebilisim.com.tr
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-[#06B6D4] mt-0.5 flex-shrink-0" /> {isEn ? "Maltepe / Beylikduzu, Istanbul" : "Maltepe / Beylikdüzü, İstanbul"}
              </div>
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-bold tracking-wide text-white">{title}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-sm text-slate-500 transition-colors hover:text-[#06B6D4]">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            {isEn ? "© 2026 Türkiye Bilişim. All rights reserved." : "© 2026 Türkiye Bilişim. Tüm hakları saklıdır."}
          </p>
          <div className="flex items-center gap-4">
            <a href="/gizlilik-politikasi" className="text-xs text-slate-500 transition-colors hover:text-slate-300">
              {isEn ? "Privacy Policy" : "Gizlilik Politikası"}
            </a>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {isEn ? "Contact and support channels active" : "İletişim ve destek kanalları aktif"}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
