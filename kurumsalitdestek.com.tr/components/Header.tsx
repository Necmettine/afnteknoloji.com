import Link from "next/link";
import { Briefcase, Phone } from "lucide-react";
import { NAP } from "@/lib/site";

const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/yonetilen-hizmetler/", label: "Yönetilen Hizmetler" },
  { href: "/nasil-basliyoruz/", label: "Nasıl Başlıyoruz" },
  { href: "/hakkimizda/", label: "Hakkımızda" },
  { href: "/iletisim/", label: "İletişim" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-mit-border bg-mit-graphite/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center border border-mit-gold/40 bg-mit-gold/10 text-mit-amber">
            <Briefcase className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="text-base font-bold leading-tight tracking-tight text-white">
            Kurumsal <span className="text-mit-amber">BT Destek</span>
          </span>
        </Link>

        <nav aria-label="Ana menü" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-mit-amber"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={NAP.phoneHref}
          className="flex items-center gap-2 bg-mit-gold px-4 py-2 text-sm font-bold text-mit-deep transition-colors hover:bg-mit-amber"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">{NAP.phoneDisplay}</span>
          <span className="sm:hidden">Ara</span>
        </a>
      </div>

      {/* Mobil menü — JS gerektirmeyen yatay kaydırmalı bağlantılar */}
      <nav
        aria-label="Mobil menü"
        className="flex gap-5 overflow-x-auto border-t border-mit-border/60 px-4 py-2 lg:hidden"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap text-sm font-medium text-gray-300 transition-colors hover:text-mit-amber"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
