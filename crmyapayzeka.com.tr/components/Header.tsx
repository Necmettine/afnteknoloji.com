import Link from "next/link";
import { BrainCircuit, Phone } from "lucide-react";
import { NAP } from "@/lib/site";

const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetlerimiz/", label: "Hizmetlerimiz" },
  { href: "/vaka-calismalari/", label: "Vaka Çalışmaları" },
  { href: "/hakkimizda/", label: "Hakkımızda" },
  { href: "/iletisim/", label: "İletişim" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ai-border/60 bg-ai-night/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ai-violet/20 text-ai-indigo">
            <BrainCircuit className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-base font-bold leading-tight text-white">
            CRM <span className="text-ai-teal">Yapay Zeka</span>
          </span>
        </Link>

        <nav aria-label="Ana menü" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={NAP.phoneHref}
          className="flex items-center gap-2 rounded-xl bg-ai-violet px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-ai-indigo"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">{NAP.phoneDisplay}</span>
          <span className="sm:hidden">Ara</span>
        </a>
      </div>

      {/* Mobil menü — JS gerektirmeyen basit yatay kaydırmalı bağlantılar */}
      <nav
        aria-label="Mobil menü"
        className="flex gap-4 overflow-x-auto border-t border-ai-border/40 px-4 py-2 md:hidden"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
