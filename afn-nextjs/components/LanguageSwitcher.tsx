"use client";
import { useState } from "react";
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

  const select = (lang: typeof languages[0]) => {
    setCurrent(lang);
    setOpen(false);

    // Google Translate widget varsa dili değiştir
    // Yoksa sayfayı translate.google.com ile aç
    if (lang.code !== "tr") {
      const url = `https://translate.google.com/translate?sl=tr&tl=${lang.code}&u=${encodeURIComponent(window.location.href)}`;
      window.open(url, "_blank");
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#F5A623]/30 transition-all text-sm text-gray-300 hover:text-white"
      >
        <Globe className="w-3.5 h-3.5 text-[#F5A623]" />
        <span>{current.flag}</span>
        <span className="hidden sm:inline">{current.label}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 w-40 bg-[#0D1220] border border-white/10 rounded-xl shadow-xl z-50 overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => select(lang)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left hover:bg-white/5 transition-colors ${
                  current.code === lang.code ? "text-[#F5A623]" : "text-gray-300"
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
