"use client";

import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Anasayfa", href: "/" },
  { label: "Hizmetler", href: "/hizmetlerimiz" },
  { label: "Web Tasarim", href: "/hizmetlerimiz/web-tasarim" },
  { label: "Yazilim Gelistirme", href: "/hizmetlerimiz/yazilim-gelistirme" },
  { label: "Sosyal Medya Yonetimi", href: "/hizmetlerimiz/sosyal-medya-yonetimi" },
  { label: "Iletisim", href: "/iletisim" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#050a13]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <Image
            src="/logo.png"
            alt="AFN Teknoloji Logo"
            width={156}
            height={56}
            className="h-12 w-auto object-contain brightness-0 invert"
          />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/62">
            AFN Medya, web tasarim, ozel yazilim ve sosyal medya yonetimini tek bir stratejide bulusturarak markalarin
            dijitalde daha guclu, daha net ve daha profesyonel gorunmesini saglar.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--accent)]">Hizli Erisim</h3>
          <div className="mt-5 space-y-3">
            {quickLinks.map((item) => (
              <a key={item.href} href={item.href} className="block text-sm text-white/68 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--accent)]">Iletisim</h3>
          <div className="mt-5 space-y-4 text-sm text-white/68">
            <a href="tel:+902165725040" className="flex items-center gap-3 transition hover:text-white">
              <Phone className="h-4 w-4 text-[var(--accent)]" />
              +90 216 572 50 40
            </a>
            <a href="mailto:info@afnteknoloji.com" className="flex items-center gap-3 transition hover:text-white">
              <Mail className="h-4 w-4 text-[var(--accent)]" />
              info@afnteknoloji.com
            </a>
            <a href="mailto:satis@afnteknoloji.com" className="flex items-center gap-3 transition hover:text-white">
              <Mail className="h-4 w-4 text-[var(--accent)]" />
              satis@afnteknoloji.com
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-[var(--accent)]" />
              <span>Maltepe / Istanbul</span>
            </div>
            <a
              href="https://wa.me/905304431807"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 font-semibold text-white transition hover:bg-white/10"
            >
              WhatsApp Business ile Yaz
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-white/45 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 AFN Medya. Tum haklari saklidir.</p>
          <p>medya.afnteknoloji.com ana siteden bagimsiz olarak yonetilir.</p>
        </div>
      </div>
    </footer>
  );
}
