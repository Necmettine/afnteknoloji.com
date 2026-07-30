import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { NAP, PARENT_SITE } from "@/lib/site";

const pageLinks = [
  { href: "/otomasyon-senaryolari/", label: "Otomasyon Senaryoları" },
  { href: "/entegrasyonlar/", label: "Entegrasyonlar" },
  { href: "/hakkimizda/", label: "Hakkımızda" },
  { href: "/iletisim/", label: "İletişim" },
];

const networkLinks = [
  { href: PARENT_SITE, label: "afnteknoloji.com" },
  { href: "https://crmyapayzeka.com.tr", label: "crmyapayzeka.com.tr" },
  { href: "https://itdestekistanbul.com.tr", label: "itdestekistanbul.com.tr" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ops-border/70 bg-ops-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        {/* NAP */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-ops-mint">
            Otomasyon CRM
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ops-muted">
            {NAP.legalName}
          </p>
          <ul className="mt-4 space-y-3 text-sm text-ops-light/85">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ops-mint" aria-hidden="true" />
              <span>
                {NAP.street}, {NAP.district}/{NAP.city} {NAP.postalCode}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-ops-mint" aria-hidden="true" />
              <a href={NAP.phoneHref} className="hover:text-white">
                {NAP.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-ops-mint" aria-hidden="true" />
              <a href={`mailto:${NAP.email}`} className="hover:text-white">
                {NAP.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Sayfalar */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-ops-mint">
            Sayfalar
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-ops-light/85">
            {pageLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* AFN ekosistemi */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-ops-mint">
            AFN Teknoloji
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ops-muted">
            Bu site bir{" "}
            <span className="font-semibold text-ops-light">AFN Teknoloji</span>{" "}
            markasıdır.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ops-light/85">
            {networkLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ops-border/50 py-5 text-center text-xs text-ops-muted">
        © {new Date().getFullYear()} {NAP.legalName} Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
