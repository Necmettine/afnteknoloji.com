import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const links: Record<string, { label: string; href: string }[]> = {
  "Site Haritası": [
    { label: "Anasayfa", href: "/" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
    { label: "Çözümlerimiz", href: "/cozumlerimiz" },
    { label: "Referanslarımız", href: "/referanslarimiz" },
    { label: "Blog", href: "/blog" },
    { label: "İletişim", href: "/iletisim" },
  ],
  "Çözümlerimiz": [
    { label: "Sanallaştırma", href: "/cozumlerimiz/sanallastirma" },
    { label: "Veri Yedekleme", href: "/cozumlerimiz/veri-yedekleme-cozumleri" },
    { label: "Ağ Güvenliği", href: "/cozumlerimiz/ag-ve-internet-guvenligi-cozumleri" },
    { label: "Felaket Koruma", href: "/cozumlerimiz/felaket-koruma-senaryolari" },
    { label: "Zimbra Türkiye", href: "/zimbra" },
    { label: "5651 Loglama", href: "/cozumlerimiz/5651-loglama" },
  ],
  "Hizmetlerimiz": [
    { label: "Sistem Danışmanlığı", href: "/hizmetlerimiz/sistem-danismanligi" },
    { label: "BT Güvenlik", href: "/hizmetlerimiz/bt-guvenlik-sistemleri-bakim-destek" },
    { label: "PC-Sunucu Destek", href: "/hizmetlerimiz/pc-sunucu-bakim-destek" },
    { label: "Yardım Masası", href: "/hizmetlerimiz/yardim-masasi" },
    { label: "Ağ Güvenliği", href: "/hizmetlerimiz/ag-ve-guvenlik-danismanligi" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#060810] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="https://afnteknoloji.com/wp-content/uploads/2023/01/logo.png"
                alt="AFN Teknoloji Logo"
                width={150}
                height={56}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Kurumsal BT altyapısı, sistem güvenliği ve teknoloji çözümlerinde 15 yıllık deneyimle hizmetinizdeyiz.
            </p>
            <div className="space-y-3">
              <a href="tel:+902165725040" className="flex items-center gap-3 text-gray-400 hover:text-[#F5A623] transition-colors text-sm">
                <Phone className="w-4 h-4 text-[#F5A623]" /> +90 216 572 50 40
              </a>
              <a href="mailto:info@afnteknoloji.com" className="flex items-center gap-3 text-gray-400 hover:text-[#F5A623] transition-colors text-sm">
                <Mail className="w-4 h-4 text-[#F5A623]" /> info@afnteknoloji.com
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#F5A623] mt-0.5 flex-shrink-0" /> Maltepe / Beylikdüzü, İstanbul
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-bold text-white mb-4 text-sm tracking-wide">{title}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-gray-500 hover:text-[#F5A623] transition-colors text-sm">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">© 2025 AFN Teknoloji. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-4">
            <a href="/gizlilik-politikasi" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Gizlilik Politikası</a>
            <div className="flex items-center gap-2 text-xs text-gray-700">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Tüm sistemler çalışıyor
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
