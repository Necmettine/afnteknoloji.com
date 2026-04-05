"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

// ─── MEGA MENU YAPISI ───────────────────────────────────────
const megaMenus = {
  kurumsal: {
    label: "Kurumsal",
    href: "/hakkimizda",
    cols: [
      {
        title: "Biz Kimiz",
        items: [
          { label: "Hakkımızda", href: "/hakkimizda", icon: "🏢" },
          { label: "İş Ortaklarımız", href: "/is-ortaklarimiz", icon: "🤝" },
          { label: "Referanslarımız", href: "/referanslarimiz", icon: "⭐" },
          { label: "Blog", href: "/blog", icon: "📝" },
        ],
      },
    ],
  },
  hizmetlerimiz: {
    label: "Hizmetlerimiz",
    href: "/hizmetlerimiz",
    cols: [
      {
        title: "Danışmanlık",
        items: [
          { label: "Sistem Danışmanlığı", href: "/hizmetlerimiz/sistem-danismanligi", icon: "⚙️" },
          { label: "Ağ ve Güvenlik Danışmanlığı", href: "/hizmetlerimiz/ag-ve-guvenlik-danismanligi", icon: "🌐" },
          { label: "Olağanüstü Durum Danışmanlığı", href: "/hizmetlerimiz/olaganustu-durum-danismanligi", icon: "🚨" },
          { label: "İşletim ve Yönetim", href: "/hizmetlerimiz/isletim-ve-yonetim-hizmetleri", icon: "📊" },
        ],
      },
      {
        title: "Destek & Güvenlik",
        items: [
          { label: "BT Güvenlik Bakım Destek", href: "/hizmetlerimiz/bt-guvenlik-sistemleri-bakim-destek", icon: "🛡️" },
          { label: "PC-Sunucu Bakım Destek", href: "/hizmetlerimiz/pc-sunucu-bakim-destek", icon: "🖥️" },
          { label: "Ağ Bakım Destek", href: "/hizmetlerimiz/ag-bakim-destek", icon: "🔌" },
          { label: "Yazılım Bakım Destek", href: "/hizmetlerimiz/yazilim-bakim-destek", icon: "💻" },
          { label: "Yardım Masası", href: "/hizmetlerimiz/yardim-masasi", icon: "📞" },
          { label: "Virüs Koruma / EDR & XDR", href: "/guvenlik-yazilimlari", icon: "🔒" },
        ],
      },
    ],
  },
  cozumlerimiz: {
    label: "Çözümlerimiz",
    href: "/cozumlerimiz",
    cols: [
      {
        title: "Altyapı",
        items: [
          { label: "Sanallaştırma", href: "/cozumlerimiz/sanallastirma", icon: "☁️" },
          { label: "Sunucu Kurulum ve Bakım", href: "/cozumlerimiz/sunucu-kurulum-ve-bakim", icon: "🖥️" },
          { label: "Yerel Alan Ağları (LAN)", href: "/cozumlerimiz/yerel-alan-aglari-lan", icon: "🔗" },
          { label: "Geniş Alan Ağları (WAN)", href: "/cozumlerimiz/genis-alan-aglari-wan", icon: "🌍" },
          { label: "Yapısal Kablolama", href: "/cozumlerimiz/yapisal-kablolama", icon: "🔌" },
          { label: "Mobil Çözümler", href: "/cozumlerimiz/mobil-cozumler", icon: "📱" },
        ],
      },
      {
        title: "Güvenlik & Uyumluluk",
        items: [
          { label: "Ağ ve İnternet Güvenliği", href: "/cozumlerimiz/ag-ve-internet-guvenligi-cozumleri", icon: "🔒" },
          { label: "Uzak Erişim Çözümleri", href: "/cozumlerimiz/uzak-erisim-cozumleri", icon: "🔑" },
          { label: "Felaket Koruma", href: "/cozumlerimiz/felaket-koruma-senaryolari", icon: "🚨" },
          { label: "5651 Loglama", href: "/cozumlerimiz/5651-loglama", icon: "📋" },
          { label: "Arşivleme", href: "/cozumlerimiz/arsivleme", icon: "📁" },
        ],
      },
      {
        title: "Bulut & Veri",
        items: [
          { label: "Veri Yedekleme", href: "/cozumlerimiz/veri-yedekleme-cozumleri", icon: "💾" },
          { label: "Veri Depolama", href: "/cozumlerimiz/veri-depolama-cozumleri", icon: "🗄️" },
          { label: "Veri Tekilleştirme", href: "/cozumlerimiz/veri-tekillestirme", icon: "🔂" },
          { label: "Microsoft 365", href: "/microsoft-365", icon: "🪟" },
          { label: "Video Konferans", href: "/cozumlerimiz/video-konferans-cozumleri", icon: "📹" },
          { label: "Zimbra Türkiye", href: "/zimbra", icon: "📧" },
        ],
      },
    ],
  },
  markalar: {
    label: "Markalar",
    href: "/is-ortaklarimiz",
    cols: [
      {
        title: "Güvenlik",
        items: [
          { label: "Fortinet", href: "/fortinet", icon: "🔴" },
          { label: "Kaspersky / Bitdefender", href: "/guvenlik-yazilimlari", icon: "🛡️" },
        ],
      },
      {
        title: "Altyapı & Bulut",
        items: [
          { label: "Huawei", href: "/huawei", icon: "🔴" },
          { label: "VMware", href: "/vmware", icon: "🌐" },
          { label: "Veeam", href: "/veeam", icon: "💚" },
          { label: "Microsoft 365", href: "/microsoft-365", icon: "🪟" },
          { label: "Zimbra", href: "/zimbra", icon: "📧" },
        ],
      },
    ],
  },
};

type MegaKey = keyof typeof megaMenus;

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<MegaKey | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Dışarı tıklayınca mega menüyü kapat
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Mobil menü için açık/kapalı gruplar
  const mobileGroups = Object.values(megaMenus);

  return (
    <>
      <style>{`
        #hmb-toggle { display: none; }
        .hmb-close { display: none; }
        .mobile-nav-css { display: none; position: fixed; top: 80px; left: 0; right: 0; bottom: 0; z-index: 998; background: #0D1220; overflow-y: auto; }
        #hmb-toggle:checked ~ .mobile-nav-css { display: block; }
        #hmb-toggle:checked ~ header .hmb-open  { display: none; }
        #hmb-toggle:checked ~ header .hmb-close { display: block; }
        @media (min-width: 1024px) { .hmb-label { display: none !important; } .mobile-nav-css { display: none !important; } }
      `}</style>

      <input type="checkbox" id="hmb-toggle" />

      <header
        className={`fixed top-0 left-0 right-0 z-[999] transition-colors duration-300 ${
          scrolled ? "bg-[#0A0E1A] border-b border-white/10 shadow-lg" : "bg-[#0A0E1A]/90"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
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
            <nav ref={navRef} className="hidden lg:flex items-center gap-0.5">

              {/* Anasayfa */}
              <a href="/"
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-[#F5A623] transition-colors rounded-lg hover:bg-white/5 whitespace-nowrap">
                Anasayfa
              </a>

              {/* Mega menu grupları */}
              {(Object.keys(megaMenus) as MegaKey[]).map((key) => {
                const menu = megaMenus[key];
                const isActive = activeMenu === key;
                const colCount = menu.cols.length;
                return (
                  <div
                    key={key}
                    className="relative"
                    onMouseEnter={() => setActiveMenu(key)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    {/* Tıkla VEYA hover ile menü açılır */}
                    <button
                      onClick={() => setActiveMenu(isActive ? null : key)}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg whitespace-nowrap cursor-pointer ${
                        isActive ? "text-[#F5A623] bg-white/5" : "text-gray-300 hover:text-[#F5A623] hover:bg-white/5"
                      }`}
                    >
                      {menu.label}
                      <ChevronDown className={`w-3 h-3 opacity-60 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`} />
                    </button>

                    {/* Mega dropdown */}
                    {isActive && (
                      <div
                        className="absolute top-full mt-0 bg-[#0D1220] border border-white/10 rounded-2xl shadow-2xl z-[1000] p-5"
                        style={{
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: colCount === 1 ? 220 : colCount === 2 ? 460 : 680,
                          minWidth: colCount === 1 ? 180 : undefined,
                        }}
                      >
                        {/* Başlık sayfasına git linki */}
                        <a
                          href={menu.href}
                          className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#F5A623] mb-3 transition-colors"
                        >
                          Tüm {menu.label} →
                        </a>
                        <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${colCount}, 1fr)` }}>
                          {menu.cols.map((col) => (
                            <div key={col.title}>
                              <div className="text-xs font-bold text-[#F5A623] tracking-widest uppercase mb-3 pb-2 border-b border-white/10">
                                {col.title}
                              </div>
                              <ul className="space-y-0.5">
                                {col.items.map((item) => (
                                  <li key={item.href}>
                                    <a href={item.href}
                                      className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm text-gray-300 hover:text-[#F5A623] hover:bg-white/5 transition-colors group">
                                      <span className="text-base leading-none">{item.icon}</span>
                                      <span>{item.label}</span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Destek */}
              <a href="/destek"
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-[#F5A623] transition-colors rounded-lg hover:bg-white/5 whitespace-nowrap">
                Destek
              </a>

              {/* Teklif Al */}
              <a href="/iletisim"
                className="ml-2 px-5 py-2 bg-[#F5A623] text-black text-sm font-bold rounded-lg hover:bg-[#e6951a] transition-all whitespace-nowrap">
                İletişim
              </a>

              {/* Dil seçici */}
              <div className="ml-2">
                <LanguageSwitcher />
              </div>
            </nav>

            {/* Hamburger */}
            <label
              htmlFor="hmb-toggle"
              className="hmb-label"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: 52, height: 52,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 10, cursor: "pointer", color: "#fff",
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

      {/* Mobil menü */}
      <div className="mobile-nav-css">
        <div style={{ padding: "16px 20px" }}>

          <a href="/" style={{ display: "block", padding: "14px 0", color: "#fff", fontWeight: 700, fontSize: 16, borderBottom: "1px solid rgba(255,255,255,0.06)", textDecoration: "none" }}>
            🏠 Anasayfa
          </a>

          {mobileGroups.map((menu) => (
            <div key={menu.label}>
              <a href={menu.href} style={{ display: "block", padding: "14px 0", color: "#F5A623", fontWeight: 700, fontSize: 16, borderBottom: "1px solid rgba(255,255,255,0.06)", textDecoration: "none" }}>
                {menu.label}
              </a>
              <div style={{ paddingLeft: 12, borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                {menu.cols.map((col) => (
                  <div key={col.title}>
                    <div style={{ padding: "8px 0 4px", color: "#6b7280", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      {col.title}
                    </div>
                    {col.items.map((item) => (
                      <a key={item.href} href={item.href}
                        style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 0", color: "#d1d5db", fontSize: 14, textDecoration: "none" }}>
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <a href="/destek" style={{ display: "block", padding: "14px 0", color: "#d1d5db", fontWeight: 600, fontSize: 16, borderBottom: "1px solid rgba(255,255,255,0.06)", textDecoration: "none" }}>
            🎧 Destek Talebi
          </a>

          <a href="/iletisim"
            style={{ display: "block", marginTop: 20, padding: "14px", background: "#F5A623", color: "#000", fontWeight: 700, textAlign: "center", borderRadius: 12, textDecoration: "none", fontSize: 16 }}>
            İletişim / Teklif Al
          </a>
        </div>
      </div>
    </>
  );
}
