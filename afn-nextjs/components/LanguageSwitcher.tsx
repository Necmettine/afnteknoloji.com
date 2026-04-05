"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Globe } from "lucide-react";

const languages = [
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(languages[0]);
  const ref = useRef<HTMLDivElement>(null);

  // Dışarı tıklayınca kapat
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const select = (lang: typeof languages[0]) => {
    setCurrent(lang);
    setOpen(false);
    if (lang.code !== "tr") {
      const url = `https://translate.google.com/translate?sl=tr&tl=${lang.code}&u=${encodeURIComponent(window.location.href)}`;
      window.open(url, "_blank");
    } else {
      window.location.reload();
    }
  };

  return (
    <div ref={ref} className="relative" style={{ zIndex: 1001 }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#F5A623]/30 transition-all text-sm text-gray-300 hover:text-white cursor-pointer"
      >
        <Globe className="w-3.5 h-3.5 text-[#F5A623]" />
        <span>{current.flag}</span>
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
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
