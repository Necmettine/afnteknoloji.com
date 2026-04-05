"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Globe } from "lucide-react";

const languages = [
  { code: "tr", label: "Turkce" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "ar", label: "Arabic" },
];

const enSupported = new Set([
  "/",
  "/iletisim",
  "/hakkimizda",
  "/hizmetlerimiz",
  "/cozumlerimiz",
  "/referanslarimiz",
  "/microsoft-365",
  "/guvenlik-yazilimlari",
]);

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(languages[0]);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname() || "/";

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const navigateTo = (url: string) => {
    window.location.assign(url);
  };

  const select = (lang: typeof languages[0]) => {
    setCurrent(lang);
    setOpen(false);

    if (lang.code === "tr") {
      if (pathname.startsWith("/en")) {
        const nextPath = pathname.replace(/^\/en/, "") || "/";
        navigateTo(nextPath);
        return;
      }
      navigateTo(pathname);
      return;
    }

    if (lang.code === "en") {
      if (pathname.startsWith("/en")) {
        navigateTo(pathname);
        return;
      }

      if (
        pathname.startsWith("/hizmetlerimiz/") ||
        pathname.startsWith("/cozumlerimiz/") ||
        pathname === "/microsoft-365" ||
        pathname === "/guvenlik-yazilimlari"
      ) {
        navigateTo(`/en${pathname}`);
        return;
      }

      if (enSupported.has(pathname)) {
        const target = pathname === "/" ? "/en" : `/en${pathname}`;
        navigateTo(target);
        return;
      }

      navigateTo("/en");
      return;
    }

    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      window.alert("Google Translate cannot access localhost. English preview is available at /en.");
      return;
    }

    const url = `https://translate.google.com/translate?sl=tr&tl=${lang.code}&u=${encodeURIComponent(window.location.href)}`;
    window.open(url, "_blank");
  };

  return (
    <div ref={ref} className="relative" style={{ zIndex: 1001 }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#F5A623]/30 transition-all text-sm text-gray-300 hover:text-white cursor-pointer"
      >
        <Globe className="w-3.5 h-3.5 text-[#F5A623]" />
        <span className="hidden sm:inline">{current.label}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 w-40 bg-[#0D1220] border border-white/10 rounded-xl shadow-xl overflow-hidden"
          style={{ zIndex: 1002 }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => select(lang)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left hover:bg-white/5 transition-colors cursor-pointer ${
                current.code === lang.code ? "text-[#F5A623]" : "text-gray-300"
              }`}
            >
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
