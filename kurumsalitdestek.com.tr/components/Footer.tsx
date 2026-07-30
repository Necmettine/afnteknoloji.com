import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { NAP, PARENT_SITE, SISTER_SITES } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-mit-border bg-mit-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        {/* NAP */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-mit-amber">
            Kurumsal BT Destek
          </h2>
          <div className="rule-accent mt-3 h-px w-16" />
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            {NAP.legalName}
          </p>
          <ul className="mt-5 space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-mit-gold" aria-hidden="true" />
              <span>
                {NAP.street}, {NAP.district}/{NAP.city} {NAP.postalCode}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-mit-gold" aria-hidden="true" />
              <a href={NAP.phoneHref} className="hover:text-white">
                {NAP.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-mit-gold" aria-hidden="true" />
              <a href={NAP.emailHref} className="hover:text-white">
                {NAP.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Sayfalar */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-mit-amber">
            Sayfalar
          </h2>
          <div className="rule-accent mt-3 h-px w-16" />
          <ul className="mt-5 space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/yonetilen-hizmetler/" className="hover:text-white">
                Yönetilen Hizmet Kapsamı
              </Link>
            </li>
            <li>
              <Link href="/nasil-basliyoruz/" className="hover:text-white">
                Nasıl Başlıyoruz
              </Link>
            </li>
            <li>
              <Link href="/hakkimizda/" className="hover:text-white">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/iletisim/" className="hover:text-white">
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        {/* AFN ekosistemi */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-mit-amber">
            AFN Teknoloji
          </h2>
          <div className="rule-accent mt-3 h-px w-16" />
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Bir <span className="font-semibold text-gray-200">AFN Teknoloji</span>{" "}
            markasıdır.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-gray-300">
            <li>
              <a
                href={PARENT_SITE}
                target="_blank"
                rel="noopener"
                className="hover:text-white"
              >
                afnteknoloji.com
              </a>
            </li>
            {SISTER_SITES.map((site) => (
              <li key={site.url}>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-white"
                >
                  {site.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-mit-border/60 py-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {NAP.legalName} Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
