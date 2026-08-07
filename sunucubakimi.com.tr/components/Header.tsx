import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { NAP } from "@/lib/site";

const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetlerimiz/", label: "Hizmetlerimiz" },
  { href: "/bakim-paketleri/", label: "Bakım Paketleri" },
  { href: "/hakkimizda/", label: "Hakkımızda" },
  { href: "/iletisim/", label: "İletişim" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-srv-border/70 bg-srv-base/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="AFN Teknoloji"
            width={36}
            height={36}
            priority
            className="h-9 w-9 rounded-lg object-contain"
          />
          <span className="text-base font-bold leading-tight text-white">
            Sunucu <span className="text-srv-gold">Bakımı</span>
          </span>
        </Link>

        <nav aria-label="Ana menü" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-srv-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={NAP.phoneHref}
          className="flex items-center gap-2 rounded-xl bg-srv-amber px-4 py-2 text-sm font-bold text-srv-deep transition-colors hover:bg-srv-gold"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">{NAP.phoneDisplay}</span>
          <span className="sm:hidden">Ara</span>
        </a>
      </div>

      {/* Mobil menü — JS gerektirmeyen basit yatay kaydırmalı bağlantılar */}
      <nav
        aria-label="Mobil menü"
        className="flex gap-4 overflow-x-auto border-t border-srv-border/50 px-4 py-2 md:hidden"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap text-sm font-medium text-gray-300 transition-colors hover:text-srv-gold"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
