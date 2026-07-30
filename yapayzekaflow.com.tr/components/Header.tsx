import Link from "next/link";
import { Phone, Workflow } from "lucide-react";
import { NAP } from "@/lib/site";

const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/akis-ornekleri/", label: "Akış Örnekleri" },
  { href: "/nasil-calisir/", label: "Nasıl Çalışır" },
  { href: "/hakkimizda/", label: "Hakkımızda" },
  { href: "/iletisim/", label: "İletişim" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-flow-border/60 bg-flow-base/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-flow-cyan/25 bg-flow-cyan/10 text-flow-cyan">
            <Workflow className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-base font-bold leading-tight text-white">
            Yapay Zeka <span className="text-flow-cyan">Flow</span>
          </span>
        </Link>

        <nav aria-label="Ana menü" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={NAP.phoneHref}
          className="flex items-center gap-2 rounded-xl bg-flow-cyan px-4 py-2 text-sm font-bold text-flow-deep transition-colors hover:bg-flow-mint"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">{NAP.phoneDisplay}</span>
          <span className="sm:hidden">Ara</span>
        </a>
      </div>

      {/* Mobil menü — JS gerektirmeyen yatay kaydırmalı bağlantılar */}
      <nav
        aria-label="Mobil menü"
        className="flex gap-4 overflow-x-auto border-t border-flow-border/40 px-4 py-2 md:hidden"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
