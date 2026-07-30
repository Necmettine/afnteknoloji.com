import type { Metadata } from "next";
import {
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { CONTACT_URL, NAP, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim | IT Destek İstanbul — AFN Teknoloji",
  description:
    "IT Destek İstanbul iletişim: +90 216 572 50 40, info@afnteknoloji.com. Zümrütevler Mah. Hanımeli Cad. Tuna İş Merkezi No:13 K:3 D:6 Maltepe/İstanbul. Teklif ve keşif talepleri için hemen arayın.",
  alternates: {
    canonical: `${SITE_URL}/iletisim/`,
  },
};

export default function IletisimPage() {
  return (
    <>
      <section className="hero-grid-bg border-b border-it-border/60">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold">İletişim</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Arıza bildirimi, keşif randevusu veya bakım anlaşması teklifi için
            bize ulaşın; aynı gün dönüş yapıyoruz.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* NAP */}
          <div className="rounded-2xl border border-it-border bg-it-card p-7">
            <h2 className="text-xl font-bold">İletişim Bilgileri</h2>
            <p className="mt-2 text-sm text-gray-400">{NAP.legalName}</p>
            <ul className="mt-6 space-y-5 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-it-sky" aria-hidden="true" />
                <span>
                  {NAP.street}
                  <br />
                  {NAP.district}/{NAP.city} {NAP.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-it-sky" aria-hidden="true" />
                <a href={NAP.phoneHref} className="text-base font-bold text-white hover:text-it-light">
                  {NAP.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-it-sky" aria-hidden="true" />
                <a href={`mailto:${NAP.email}`} className="font-semibold hover:text-white">
                  {NAP.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-it-sky" aria-hidden="true" />
                <span>
                  Ofis: Hafta içi 09:00 – 18:00
                  <br />
                  Bakım anlaşmalı müşteriler için 7/24 destek hattı
                </span>
              </li>
            </ul>

            <div className="mt-8 rounded-xl border border-it-border bg-it-navy p-5">
              <p className="text-sm leading-relaxed text-gray-300">
                Yazılı talepleriniz ve teklif formu için AFN Teknoloji kurumsal
                iletişim sayfasını kullanabilirsiniz:
              </p>
              <a
                href={CONTACT_URL}
                target="_blank"
                rel="noopener"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-it-blue px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-it-sky"
              >
                afnteknoloji.com/iletisim
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Harita placeholder */}
          <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-it-border bg-it-card p-7 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-it-blue/15 text-it-sky">
              <MapPin className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-lg font-bold">Ofisimiz — Maltepe / İstanbul</h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-400">
              Zümrütevler Mahallesi, Tuna İş Merkezi. Harita entegrasyonu yayın
              öncesinde eklenecektir.
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${NAP.geo.latitude},${NAP.geo.longitude}`}
              target="_blank"
              rel="noopener"
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-it-border px-5 py-2.5 text-sm font-semibold text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
            >
              Google Haritalar&apos;da aç
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
