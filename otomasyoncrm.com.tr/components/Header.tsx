import Link from "next/link";
import { Phone, Workflow } from "lucide-react";
import { NAP } from "@/lib/site";

const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/otomasyon-senaryolari/", label: "Otomasyon Senaryoları" },
  { href: "/entegrasyonlar/", label: "Entegrasyonlar" },
  { href: "/hakkimizda/", label: "Hakkımızda" },
  { href: "/iletisim/", label: "İletişim" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ops-border/70 bg-ops-base/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ops-emerald/15 text-ops-mint">
            <Workflow className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-base font-bold leading-tight text-white">
            Otomasyon <span className="text-ops-mint">CRM</span>
          </span>
        </Link>

        <nav aria-label="Ana menü" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ops-light/80 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={NAP.phoneHref}
          className="flex items-center gap-2 rounded-xl bg-ops-emerald px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-ops-mint hover:text-ops-deep"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">{NAP.phoneDisplay}</span>
          <span className="sm:hidden">Ara</span>
        </a>
      </div>

      {/* Mobil menü — JS gerektirmeyen yatay kaydırmalı bağlantılar */}
      <nav
        aria-label="Mobil menü"
        className="flex gap-4 overflow-x-auto border-t border-ops-border/50 px-4 py-2 lg:hidden"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap text-sm font-medium text-ops-light/80 transition-colors hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
