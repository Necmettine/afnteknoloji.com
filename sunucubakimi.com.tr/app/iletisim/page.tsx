import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Timer,
} from "lucide-react";
import { CONTACT_URL, NAP, PARENT_SITE, SITE_URL, SLA_TIERS } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim | Sunucu Arıza Bildirimi ve Teklif Talebi",
  description:
    "Sunucu Bakımı iletişim: +90 216 572 50 40, info@afnteknoloji.com. Zümrütevler Mah. Hanımeli Cad. Tuna İş Merkezi No:13 K:3 D:6, Maltepe/İstanbul 34852. Sunucu arıza bildirimi, sağlık kontrolü ve bakım teklifi için ulaşın.",
  alternates: {
    canonical: `${SITE_URL}/iletisim/`,
  },
};

const beforeCalling = [
  "Etkilenen sunucunun adı, markası ve modeli (biliniyorsa seri numarası)",
  "Sorunun ne zaman başladığı ve öncesinde yapılan değişiklik (güncelleme, elektrik kesintisi, donanım eklemesi)",
  "Etkinin kapsamı: tek kullanıcı mı, bir uygulama mı, tüm şirket mi erişemiyor",
  "Ekranda veya yönetim kartında görünen hata kodu ya da uyarı ışığı",
  "Sunucuya uzaktan erişim yolu (VPN, iDRAC/iLO, uzak masaüstü) ve yetkili kişi",
];

export default function IletisimPage() {
  return (
    <>
      <section className="rack-bg border-b border-srv-border/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-extrabold">İletişim</h1>
          <div className="amber-rule mt-5 h-px w-32" aria-hidden="true" />
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-300">
            Sunucu arıza bildirimi, ücretsiz sunucu sağlık kontrolü veya bakım
            teklifi için bize ulaşın. Arıza bildirimlerinde telefon en hızlı
            yoldur; teklif ve keşif taleplerine aynı gün dönüş yapıyoruz.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* NAP */}
          <div className="rounded-2xl border border-srv-border bg-srv-card p-7">
            <h2 className="text-xl font-bold">İletişim Bilgileri</h2>
            <p className="mt-2 text-sm text-srv-muted">{NAP.legalName}</p>
            <ul className="mt-6 space-y-5 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-srv-amber" aria-hidden="true" />
                <span>
                  {NAP.street}
                  <br />
                  {NAP.district}/{NAP.city} {NAP.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-srv-amber" aria-hidden="true" />
                <a
                  href={NAP.phoneHref}
                  className="text-base font-bold text-white hover:text-srv-gold"
                >
                  {NAP.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-srv-amber" aria-hidden="true" />
                <a
                  href={`mailto:${NAP.email}`}
                  className="font-semibold hover:text-white"
                >
                  {NAP.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-srv-amber" aria-hidden="true" />
                <span>
                  Hafta içi 09:00 – 18:00
                  <br />
                  <span className="text-srv-muted">
                    Bakım anlaşmalı müşteriler için kritik sunucu arızalarında
                    mesai dışı ve hafta sonu destek
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Navigation className="mt-0.5 h-5 w-5 shrink-0 text-srv-amber" aria-hidden="true" />
                <span>
                  Hizmet bölgesi: yerinde destek İstanbul geneli (Maltepe merkezli,
                  Anadolu Yakası&apos;nda daha kısa müdahale süresi); uzaktan sunucu
                  yönetimi Türkiye geneli.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <ExternalLink className="h-5 w-5 shrink-0 text-srv-amber" aria-hidden="true" />
                <a
                  href={CONTACT_URL}
                  target="_blank"
                  rel="noopener"
                  className="font-semibold hover:text-white"
                >
                  İletişim formu — afnteknoloji.com
                </a>
              </li>
            </ul>
          </div>

          {/* Arıza bildirimi */}
          <div className="rounded-2xl border border-srv-border bg-srv-card p-7">
            <h2 className="flex items-center gap-2 text-xl font-bold">
              <AlertTriangle className="h-5 w-5 text-srv-amber" aria-hidden="true" />
              Arıza bildirirken hazır olsun
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Aşağıdaki bilgiler elinizdeyse ilk aramada teşhise çok daha hızlı
              ulaşırız.
            </p>
            <ul className="mt-6 space-y-3">
              {beforeCalling.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-srv-amber"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-7 rounded-xl border border-srv-amber/25 bg-srv-amber/[0.07] p-4">
              <p className="text-sm leading-relaxed text-srv-sand">
                Sunucu tamamen durduysa cihazı tekrar tekrar açıp kapatmayın;
                RAID dizisi yeniden yapılandırma sırasındaysa kesinti veri kaybına
                yol açabilir. Önce bizi arayın.
              </p>
            </div>
          </div>
        </div>

        {/* Müdahale süreleri hatırlatma */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {SLA_TIERS.map((tier) => (
            <div
              key={tier.level}
              className="flex items-center gap-3 rounded-2xl border border-srv-border bg-srv-card/60 px-5 py-4"
            >
              <Timer className="h-5 w-5 shrink-0 text-srv-amber" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold text-white">
                  {tier.level} öncelik
                </p>
                <p className="text-sm text-srv-muted">
                  {tier.time} içinde müdahale
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-srv-border bg-srv-deep p-7 text-center">
          <h2 className="text-2xl font-bold">Ücretsiz sunucu sağlık kontrolü</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-400">
            Mevcut sunucularınızın donanım durumunu, RAID dizisini, yedekleme
            sağlığını ve kapasite eğilimini ücretsiz olarak inceleyip
            raporluyoruz. Rapor sonrası bakım kapsamını ihtiyacınıza göre
            belirliyoruz.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={NAP.phoneHref}
              className="flex items-center gap-2 rounded-xl bg-srv-amber px-6 py-3 text-base font-bold text-srv-deep transition-colors hover:bg-srv-gold"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {NAP.phoneDisplay}
            </a>
            <Link
              href="/bakim-paketleri/"
              className="flex items-center gap-2 rounded-xl border border-srv-border px-6 py-3 text-base font-semibold text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
            >
              Bakım kapsamını inceleyin
            </Link>
          </div>
          <p className="mt-6 text-xs text-srv-muted">
            Bir <a href={PARENT_SITE} target="_blank" rel="noopener" className="font-semibold text-srv-gold hover:text-srv-sand">AFN Teknoloji</a>{" "}
            markasıdır.
          </p>
        </div>
      </section>
    </>
  );
}
