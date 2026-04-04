"use client";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  {
    label: "Hizmetlerimiz", href: "/hizmetlerimiz",
    sub: [
      { label: "Sistem Danışmanlığı", href: "/hizmetlerimiz/sistem-danismanligi" },
      { label: "BT Güvenlik Bakım Destek", href: "/hizmetlerimiz/bt-guvenlik-sistemleri-bakim-destek" },
      { label: "PC-Sunucu Bakım Destek", href: "/hizmetlerimiz/pc-sunucu-bakim-destek" },
      { label: "Yardım Masası", href: "/hizmetlerimiz/yardim-masasi" },
      { label: "Ağ ve Güvenlik Danışmanlığı", href: "/hizmetlerimiz/ag-ve-guvenlik-danismanligi" },
      { label: "Ağ Bakım Destek", href: "/hizmetlerimiz/ag-bakim-destek" },
      { label: "Yazılım Bakım Destek", href: "/hizmetlerimiz/yazilim-bakim-destek" },
      { label: "Olağanüstü Durum Danışmanlığı", href: "/hizmetlerimiz/olaganustu-durum-danismanligi" },
      { label: "İşletim ve Yönetim Hizmetleri", href: "/hizmetlerimiz/isletim-ve-yonetim-hizmetleri" },
    ],
  },
  {
    label: "Çözümlerimiz", href: "/cozumlerimiz",
    sub: [
      { label: "Sanallaştırma", href: "/cozumlerimiz/sanallastirma" },
      { label: "Veri Yedekleme", href: "/cozumlerimiz/veri-yedekleme-cozumleri" },
      { label: "Veri Depolama", href: "/cozumlerimiz/veri-depolama-cozumleri" },
      { label: "Ağ ve İnternet Güvenliği", href: "/cozumlerimiz/ag-ve-internet-guvenligi-cozumleri" },
      { label: "Uzak Erişim Çözümleri", href: "/cozumlerimiz/uzak-erisim-cozumleri" },
      { label: "Video Konferans", href: "/cozumlerimiz/video-konferans-cozumleri" },
      { label: "Sunucu Kurulum ve Bakım", href: "/cozumlerimiz/sunucu-kurulum-ve-bakim" },
      { label: "Yerel Alan Ağları (LAN)", href: "/cozumlerimiz/yerel-alan-aglari-lan" },
      { label: "Geniş Alan Ağları (WAN)", href: "/cozumlerimiz/genis-alan-aglari-wan" },
      { label: "Felaket Koruma", href: "/cozumlerimiz/felaket-koruma-senaryolari" },
      { label: "Arşivleme", href: "/cozumlerimiz/arsivleme" },
      { label: "5651 Loglama", href: "/cozumlerimiz/5651-loglama" },
      { label: "Yapısal Kablolama", href: "/cozumlerimiz/yapisal-kablolama" },
      { label: "Zimbra Türkiye", href: "/cozumlerimiz/zimbra-turkiye" },
    ],
  },
  { label: "İş Ortaklarımız", href: "/is-ortaklarimiz" },
  { label: "Zimbra Türkiye", href: "/zimbra" },
  { label: "Referanslarımız", href: "/referanslarimiz" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* CSS-only hamburger trick — JavaScript gerekmez, iOS dahil her cihazda çalışır */}
      <style>{`
        #hmb-toggle { display: none; }
        .hmb-close { display: none; }
        .mobile-nav-css { display: none; position: fixed; top: 80px; left: 0; right: 0; bottom: 0; z-index: 998; background: #0D1220; overflow-y: auto; }
        #hmb-toggle:checked ~ .mobile-nav-css { display: block; }
        #hmb-toggle:checked ~ header .hmb-open  { display: none; }
        #hmb-toggle:checked ~ header .hmb-close { display: block; }
        @media (min-width: 1024px) { .hmb-label { display: none !important; } .mobile-nav-css { display: none !important; } }
      `}</style>

      {/* Checkbox — hiçbir zaman görünmez, label aracılığıyla toggle edilir */}
      <input type="checkbox" id="hmb-toggle" />

      <header className={`fixed top-0 left-0 right-0 z-[999] transition-colors duration-300 ${
        scrolled ? "bg-[#0A0E1A] border-b border-white/10 shadow-lg" : "bg-[#0A0E1A]/90"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex-shrink-0">
              <Image
                src="https://afnteknoloji.com/wp-content/uploads/2023/01/logo.png"
                alt="AFN Teknoloji Logo"
                width={160} height={60}
                className="h-12 w-auto object-contain"
                priority unoptimized
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative"
                  onMouseEnter={() => item.sub && setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}>
                  <a href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-[#F5A623] transition-colors rounded-lg hover:bg-white/5 whitespace-nowrap">
                    {item.label}
                    {item.sub && <ChevronDown className="w-3 h-3 opacity-60" />}
                  </a>
                  {item.sub && activeMenu === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-60 bg-[#0D1220] border border-white/10 rounded-xl py-2 shadow-xl z-50">
                      {item.sub.map((s) => (
                        <a key={s.href} href={s.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-[#F5A623] hover:bg-white/5 transition-colors">
                          {s.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href="/iletisim" className="ml-2 px-5 py-2 bg-[#F5A623] text-black text-sm font-bold rounded-lg hover:bg-[#e6951a] transition-all whitespace-nowrap">
                Teklif Al
              </a>
            </nav>

            {/* Hamburger label — label for checkbox, JavaScript yok */}
            <label
              htmlFor="hmb-toggle"
              className="hmb-label"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 52,
                height: 52,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 10,
                cursor: "pointer",
                color: "#fff",
                WebkitTapHighlightColor: "transparent",
              }}
              aria-label="Menü"
            >
              <span className="hmb-open">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </span>
              <span className="hmb-close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </span>
            </label>
          </div>
        </div>
      </header>

      {/* Mobil menü — CSS ile kontrol edilir */}
      <div className="mobile-nav-css">
        <div style={{ padding: "16px 20px" }}>
          {navItems.map((item) => (
            <div key={item.label}>
              <a
                href={item.href}
                style={{ display: "block", padding: "14px 0", color: "#d1d5db", fontWeight: 600, fontSize: 16, borderBottom: "1px solid rgba(255,255,255,0.06)", textDecoration: "none" }}
              >
                {item.label}
              </a>
              {item.sub && (
                <div style={{ paddingLeft: 16, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  {item.sub.map((s) => (
                    <a key={s.href} href={s.href}
                      style={{ display: "block", padding: "10px 0", color: "#9ca3af", fontSize: 14, textDecoration: "none" }}>
                      › {s.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="/iletisim"
            style={{ display: "block", marginTop: 20, padding: "14px", background: "#F5A623", color: "#000", fontWeight: 700, textAlign: "center", borderRadius: 12, textDecoration: "none" }}>
            Teklif Al
          </a>
        </div>
      </div>
    </>
  );
}
