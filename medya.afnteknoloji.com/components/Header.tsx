"use client";

import Image from "next/image";
import { Menu, X, ChevronDown, Globe, Code2, Share2, Palette } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const hizmetlerItems = [
  {
    label: "Web Tasarim",
    href: "/hizmetlerimiz/web-tasarim",
    icon: Palette,
    desc: "Modern, dönüsüm odakli web siteleri",
  },
  {
    label: "Yazilim Gelistirme",
    href: "/hizmetlerimiz/yazilim-gelistirme",
    icon: Code2,
    desc: "Özel yazilim & otomasyon çözümleri",
  },
  {
    label: "Sosyal Medya",
    href: "/hizmetlerimiz/sosyal-medya-yonetimi",
    icon: Share2,
    desc: "Marka bilinirligini büyüt, hedef kitleye ulas",
  },
];

const navItems = [
  { label: "Anasayfa", href: "/" },
  { label: "Hizmetler", href: "/hizmetlerimiz", hasDropdown: true },
  { label: "Hakkimizda", href: "/hakkimizda" },
  { label: "Iletisim", href: "/iletisim" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hizmetlerOpen, setHizmetlerOpen] = useState(false);
  const [mobileHizmetlerOpen, setMobileHizmetlerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileHizmetlerOpen(false);
    setHizmetlerOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setHizmetlerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isHizmetlerActive =
    pathname === "/hizmetlerimiz" || hizmetlerItems.some((i) => pathname === i.href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-[#07111f]/92 backdrop-blur-xl shadow-lg shadow-black/20"
          : "border-transparent bg-[#07111f]/78 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="AFN Teknoloji"
            width={158}
            height={54}
            className="h-11 w-auto object-contain transition-opacity group-hover:opacity-90"
            priority
          />
          <div className="hidden sm:block">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
              AFN Medya
            </p>
            <p className="text-xs text-white/60">Web, Yazilim ve Growth Studio</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive =
              item.hasDropdown ? isHizmetlerActive : pathname === item.href;

            if (item.hasDropdown) {
              return (
                <div key={item.href} ref={dropdownRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setHizmetlerOpen((v) => !v)}
                    onMouseEnter={() => setHizmetlerOpen(true)}
                    className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-white/12 text-white"
                        : "text-white/85 hover:bg-white/8 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <motion.span
                      animate={{ rotate: hizmetlerOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex"
                    >
                      <ChevronDown className="h-3.5 w-3.5" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {hizmetlerOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        onMouseLeave={() => setHizmetlerOpen(false)}
                        className="absolute left-1/2 top-full mt-2 w-72 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0d1b2e] p-2 shadow-2xl shadow-black/40"
                      >
                        <a
                          href="/hizmetlerimiz"
                          className="mb-1 flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold uppercase tracking-widest text-white/40 hover:text-white/60 transition"
                        >
                          Tüm Hizmetler
                          <Globe className="h-3.5 w-3.5" />
                        </a>
                        <div className="h-px bg-white/8 mb-2" />
                        {hizmetlerItems.map((sub) => {
                          const Icon = sub.icon;
                          const subActive = pathname === sub.href;
                          return (
                            <a
                              key={sub.href}
                              href={sub.href}
                              className={`group flex items-start gap-3 rounded-xl px-3 py-3 transition-all duration-150 ${
                                subActive
                                  ? "bg-white/10 text-white"
                                  : "text-white/70 hover:bg-white/6 hover:text-white"
                              }`}
                            >
                              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)]/15 text-[var(--accent)] transition-all group-hover:bg-[var(--accent)]/25">
                                <Icon className="h-3.5 w-3.5" />
                              </span>
                              <span>
                                <span className="block text-sm font-medium leading-tight">
                                  {sub.label}
                                </span>
                                <span className="block text-xs text-white/45 mt-0.5">
                                  {sub.desc}
                                </span>
                              </span>
                            </a>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white/12 text-white"
                    : "text-white/85 hover:bg-white/8 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--accent)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}

          <a
            href="/iletisim"
            className="ml-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#F5A623] to-[#FFD700] px-5 py-2.5 text-sm font-bold text-black shadow-lg shadow-[#F5A623]/30 ring-1 ring-[#F5A623]/40 transition-all duration-200 hover:shadow-[#F5A623]/50 hover:brightness-110 hover:-translate-y-px active:translate-y-0 active:brightness-95"
          >
            Teklif Al
          </a>
        </nav>

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
          aria-label={menuOpen ? "Menuyu kapat" : "Menuyu ac"}
          aria-expanded={menuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="h-5 w-5" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu className="h-5 w-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-[#07111f] lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              <a
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  pathname === "/"
                    ? "bg-white/10 text-white"
                    : "text-white/75 hover:bg-white/6 hover:text-white"
                }`}
              >
                Anasayfa
              </a>

              {/* Hizmetler accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileHizmetlerOpen((v) => !v)}
                  className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isHizmetlerActive
                      ? "bg-white/10 text-white"
                      : "text-white/75 hover:bg-white/6 hover:text-white"
                  }`}
                >
                  Hizmetler
                  <motion.span
                    animate={{ rotate: mobileHizmetlerOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {mobileHizmetlerOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-1 flex flex-col gap-1 pl-4">
                        <a
                          href="/hizmetlerimiz"
                          onClick={() => setMenuOpen(false)}
                          className={`rounded-xl px-4 py-2.5 text-sm transition ${
                            pathname === "/hizmetlerimiz"
                              ? "bg-white/10 text-white"
                              : "text-white/60 hover:bg-white/6 hover:text-white"
                          }`}
                        >
                          Tüm Hizmetler
                        </a>
                        {hizmetlerItems.map((sub) => {
                          const Icon = sub.icon;
                          return (
                            <a
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setMenuOpen(false)}
                              className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm transition ${
                                pathname === sub.href
                                  ? "bg-white/10 text-white"
                                  : "text-white/60 hover:bg-white/6 hover:text-white"
                              }`}
                            >
                              <Icon className="h-4 w-4 text-[var(--accent)]" />
                              {sub.label}
                            </a>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="/hakkimizda"
                onClick={() => setMenuOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  pathname === "/hakkimizda"
                    ? "bg-white/10 text-white"
                    : "text-white/75 hover:bg-white/6 hover:text-white"
                }`}
              >
                Hakkimizda
              </a>
              <a
                href="/iletisim"
                onClick={() => setMenuOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  pathname === "/iletisim"
                    ? "bg-white/10 text-white"
                    : "text-white/75 hover:bg-white/6 hover:text-white"
                }`}
              >
                Iletisim
              </a>

              <a
                href="/iletisim"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#F5A623] to-[#FFD700] px-5 py-3 text-sm font-bold text-black shadow-lg shadow-[#F5A623]/30 ring-1 ring-[#F5A623]/40 transition hover:brightness-110 active:brightness-95"
              >
                Teklif Al
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
