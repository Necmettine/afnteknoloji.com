import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ExternalLink, Globe, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { CONTACT_URL, NAP, PARENT_SITE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim | Otomasyon CRM — AFN Teknoloji",
  description:
    "Otomasyon CRM iletişim: +90 216 572 50 40, info@afnteknoloji.com. Zümrütevler Mah. Hanımeli Cad. Tuna İş Merkezi No:13 K:3 D:6 Maltepe/İstanbul. Satış otomasyonu görüşmesi için ulaşın.",
  alternates: {
    canonical: `${SITE_URL}/iletisim/`,
  },
};

const talkingPoints = [
  "Satış ekibinizin bugün hangi araçları kullandığı (CRM, Excel, e-posta)",
  "Teklif hazırlama ve takip sürecinin bugün nasıl yürüdüğü",
  "Kullandığınız ERP ve muhasebe programı",
  "Ekip büyüklüğü ve aylık ortalama teklif/fırsat sayısı",
];

export default function IletisimPage() {
  return (
    <>
      <section className="hero-lines-bg relative overflow-hidden border-b border-ops-border/60">
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold">İletişim</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ops-light/80">
            Satış süreçlerinizi konuşmak, mevcut CRM'inizi değerlendirmek veya
            entegrasyon sormak için bize ulaşın.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-ops-border bg-ops-card p-7">
            <h2 className="text-xl font-bold">İletişim Bilgileri</h2>
            <p className="mt-2 text-sm text-ops-muted">{NAP.legalName}</p>
            <ul className="mt-6 space-y-5 text-sm text-ops-light/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-ops-mint" aria-hidden="true" />
                <span>
                  {NAP.street}
                  <br />
                  {NAP.district}/{NAP.city} {NAP.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-ops-mint" aria-hidden="true" />
                <a
                  href={NAP.phoneHref}
                  className="text-base font-bold text-white hover:text-ops-mint"
                >
                  {NAP.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-ops-mint" aria-hidden="true" />
                <a href={`mailto:${NAP.email}`} className="font-semibold hover:text-white">
                  {NAP.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-ops-mint" aria-hidden="true" />
                <span>
                  Hafta içi 09:00 – 18:00
                  <br />
                  <span className="text-ops-muted">
                    Demo ve proje görüşmeleri randevu ile yapılabilir.
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="mt-0.5 h-5 w-5 shrink-0 text-ops-mint" aria-hidden="true" />
                <span>
                  Hizmet bölgesi: Türkiye geneli
                  <br />
                  <span className="text-ops-muted">
                    Uzaktan çalışıyoruz; İstanbul içinde yerinde görüşme mümkün.
                  </span>
                </span>
              </li>
            </ul>

            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener"
              className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-ops-emerald px-6 py-3 text-base font-bold text-white transition-colors hover:bg-ops-mint hover:text-ops-deep"
            >
              <ExternalLink className="h-5 w-5" aria-hidden="true" />
              İletişim Formu — afnteknoloji.com
            </a>
          </div>

          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-ops-border bg-ops-card p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ops-emerald/15 text-ops-mint">
                <MessageSquare className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-xl font-bold">İlk görüşmede ne konuşuyoruz?</h2>
              <p className="mt-3 text-sm leading-relaxed text-ops-light/70">
                İlk görüşme ürün sunumu değil; süreçlerinizi anlamaya yönelik bir
                sohbettir. Genellikle şu başlıklar üzerinden konuşuruz:
              </p>
              <ul className="mt-5 space-y-3 text-sm text-ops-light/80">
                {talkingPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ops-mint"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-ops-border bg-ops-deep p-7">
              <h2 className="text-xl font-bold">AFN Teknoloji ekosistemi</h2>
              <p className="mt-3 text-sm leading-relaxed text-ops-light/70">
                Otomasyon CRM bir AFN Teknoloji markasıdır. Diğer hizmet
                alanlarımız için:
              </p>
              <ul className="mt-5 space-y-2 text-sm text-ops-light/80">
                <li>
                  <a href={PARENT_SITE} target="_blank" rel="noopener" className="hover:text-white">
                    afnteknoloji.com — kurumsal ana site
                  </a>
                </li>
                <li>
                  <a
                    href="https://crmyapayzeka.com.tr"
                    target="_blank"
                    rel="noopener"
                    className="hover:text-white"
                  >
                    crmyapayzeka.com.tr — yapay zeka ve CRM projeleri
                  </a>
                </li>
                <li>
                  <a
                    href="https://itdestekistanbul.com.tr"
                    target="_blank"
                    rel="noopener"
                    className="hover:text-white"
                  >
                    itdestekistanbul.com.tr — kurumsal IT destek
                  </a>
                </li>
              </ul>
              <Link
                href="/otomasyon-senaryolari/"
                className="mt-6 inline-block text-sm font-semibold text-ops-mint hover:text-white"
              >
                Önce otomasyon senaryolarına bakın →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
