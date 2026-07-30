import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { NAP, PARENT_SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-ai-border/60 bg-ai-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        {/* NAP */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-ai-teal">
            CRM Yapay Zeka
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            {NAP.legalName}
          </p>
          <ul className="mt-4 space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ai-indigo" aria-hidden="true" />
              <span>
                {NAP.street}, {NAP.district}/{NAP.city} {NAP.postalCode}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-ai-indigo" aria-hidden="true" />
              <a href={NAP.phoneHref} className="hover:text-white">
                {NAP.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-ai-indigo" aria-hidden="true" />
              <a href={`mailto:${NAP.email}`} className="hover:text-white">
                {NAP.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Sayfalar */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-ai-teal">
            Sayfalar
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/hizmetlerimiz/" className="hover:text-white">
                Hizmetlerimiz
              </Link>
            </li>
            <li>
              <Link href="/vaka-calismalari/" className="hover:text-white">
                Vaka Çalışmaları
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
          <h2 className="text-sm font-bold uppercase tracking-wider text-ai-teal">
            AFN Teknoloji
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            Bu site bir <span className="font-semibold text-gray-200">AFN Teknoloji</span>{" "}
            markasıdır.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
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
            <li>
              <a
                href="https://itdestekistanbul.com.tr"
                target="_blank"
                rel="noopener"
                className="hover:text-white"
              >
                itdestekistanbul.com.tr
              </a>
            </li>
            <li>
              <a
                href="https://medya.afnteknoloji.com"
                target="_blank"
                rel="noopener"
                className="hover:text-white"
              >
                medya.afnteknoloji.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ai-border/40 py-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {NAP.legalName} Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
