import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Building2, Mail, MapPin, Phone, Users } from "lucide-react";
import { NAP, PARENT_SITE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda | Otomasyon CRM — AFN Teknoloji",
  description:
    "Otomasyon CRM, 2010'dan beri kurumsal BT ve yazılım hizmeti veren AFN Teknoloji'nin satış süreci otomasyonu markasıdır. Maltepe/İstanbul merkezli, ISO 27001 sertifikalı.",
  alternates: {
    canonical: `${SITE_URL}/hakkimizda/`,
  },
};

const facts = [
  { icon: Building2, label: "2010'dan beri", text: "Kurumsal BT ve yazılım hizmeti" },
  { icon: Users, label: "500+ müşteri", text: "Farklı sektörlerde aktif kurum" },
  { icon: Award, label: "ISO 27001", text: "Bilgi güvenliği yönetim sistemi" },
];

export default function HakkimizdaPage() {
  return (
    <>
      <section className="hero-lines-bg relative overflow-hidden border-b border-ops-border/60">
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-extrabold">Hakkımızda</h1>
          <p className="mt-4 max-w-3xl text-lg text-ops-light/80">
            Otomasyon CRM, AFN Teknoloji'nin satış süreçleri otomasyonuna
            odaklanan markasıdır. Yazılım geliştiren ve aynı zamanda kurumsal BT
            işleten bir ekip olduğumuz için, kurduğumuz sistemleri sahada
            çalıştırmanın ne demek olduğunu biliyoruz.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {facts.map(({ icon: Icon, label, text }) => (
            <div
              key={label}
              className="rounded-2xl border border-ops-border bg-ops-card p-7 text-center"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-ops-emerald/15 text-ops-mint">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-4 text-lg font-bold">{label}</p>
              <p className="mt-1 text-sm text-ops-light/70">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-ops-border bg-ops-card p-8">
            <h2 className="text-2xl font-bold">Neden satış otomasyonuna odaklandık?</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-ops-light/75">
              <p>
                Müşterilerimizin BT altyapısını yönetirken aynı sorunu tekrar
                tekrar gördük: satış ekipleri müşteri bilgisini Excel'de, teklifi
                kişisel klasörde, takibi ise akılda tutuyor. Kişi değiştiğinde
                bilgi de gidiyor.
              </p>
              <p>
                Kendi CRM'imizi (AfnCrm) tam bu yüzden geliştirdik. Akınsoft Wolvox
                ERP verisi üzerine kurulan sistem, cari bakiye ve vade bilgisini
                satış ekibinin ekranına taşıyor; döviz kurunu günde birkaç kez
                otomatik güncelliyor ve muhasebenin elle yaptığı işi ortadan
                kaldırıyor.
              </p>
              <p>
                Bugün aynı yaklaşımı müşterilerimizin süreçlerine uyarlıyoruz.
                Amacımız yeni bir yazılım satmak değil; ekibin zaten yaptığı işi
                sistemin üstlenmesini sağlamak.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-ops-border bg-ops-card p-8">
              <h2 className="text-2xl font-bold">Nasıl çalışıyoruz?</h2>
              <ul className="mt-5 space-y-4 text-sm text-ops-light/75">
                <li>
                  <span className="font-semibold text-white">Küçük başlarız.</span>{" "}
                  Tüm süreci bir kerede değiştirmek yerine en çok zaman kaybettiren
                  tek akışla pilot yapar, sonucu ölçeriz.
                </li>
                <li>
                  <span className="font-semibold text-white">Mevcut sisteminizi
                  koruruz.</span>{" "}
                  ERP'nizi değiştirmenizi istemeyiz; üzerine entegre oluruz.
                </li>
                <li>
                  <span className="font-semibold text-white">Ekibi işin içine
                  alırız.</span>{" "}
                  Sahada kullanacak kişilerle konuşmadan akış tasarlamıyoruz;
                  kullanılmayan sistem çalışmayan sistemdir.
                </li>
                <li>
                  <span className="font-semibold text-white">Devrettiğimizde
                  bırakmayız.</span>{" "}
                  Devreye alma sonrası izleme, düzeltme ve geliştirme desteği
                  sürer.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-ops-border bg-ops-deep p-8">
              <h2 className="text-xl font-bold">Şirket bilgileri</h2>
              <p className="mt-3 text-sm text-ops-light/70">{NAP.legalName}</p>
              <ul className="mt-5 space-y-3 text-sm text-ops-light/80">
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
                  <a href={NAP.phoneHref} className="font-bold text-white hover:text-ops-mint">
                    {NAP.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-ops-mint" aria-hidden="true" />
                  <a href={`mailto:${NAP.email}`} className="hover:text-white">
                    {NAP.email}
                  </a>
                </li>
              </ul>
              <a
                href={PARENT_SITE}
                target="_blank"
                rel="noopener"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ops-mint hover:text-white"
              >
                afnteknoloji.com — kurumsal ana site
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/iletisim/"
            className="inline-flex items-center gap-2 rounded-xl bg-ops-emerald px-7 py-4 text-base font-bold text-white transition-colors hover:bg-ops-mint hover:text-ops-deep"
          >
            İletişime geçin
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
