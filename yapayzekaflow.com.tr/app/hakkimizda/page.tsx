import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Building2, Mail, MapPin, Phone, Users } from "lucide-react";
import { NAP, PARENT_SITE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda | Yapay Zeka Flow — AFN Teknoloji",
  description:
    "Yapay Zeka Flow, 2010'dan beri kurumsal BT ve yazılım hizmeti veren AFN Teknoloji'nin iş akışı otomasyonu markasıdır. Maltepe/İstanbul merkezli, ISO 27001 sertifikalı.",
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
      <section className="relative overflow-hidden border-b border-flow-border/60">
        <div className="flow-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-extrabold">Hakkımızda</h1>
          <p className="mt-4 max-w-3xl text-lg text-flow-light/80">
            Yapay Zeka Flow, AFN Teknoloji'nin şirket içi iş akışlarını
            otomatikleştirmeye odaklanan markasıdır. Hem yazılım geliştiren hem
            kurumsal BT işleten bir ekip olduğumuz için, bir sürecin kâğıt
            üzerinde değil sahada nasıl yürüdüğünü biliyoruz.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {facts.map(({ icon: Icon, label, text }) => (
            <div
              key={label}
              className="rounded-2xl border border-flow-border bg-flow-card p-7 text-center"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-flow-cyan/15 text-flow-cyan">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-4 text-lg font-bold">{label}</p>
              <p className="mt-1 text-sm text-flow-light/70">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-flow-border bg-flow-card p-8">
            <h2 className="text-2xl font-bold">Neden iş akışlarına odaklandık?</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-flow-light/75">
              <p>
                Müşterilerimizin BT altyapısını yönetirken şunu gördük: şirketler
                genelde yazılım eksikliğinden değil, sistemler arasındaki
                boşluktan zaman kaybediyor. Talep bir yerde açılıyor, onay
                e-postayla alınıyor, kayıt başka bir sisteme elle giriliyor.
              </p>
              <p>
                Bu boşluğu kapatmak için akış katmanı kurmaya başladık. Örneğin
                aydınlatma sektöründe faaliyet gösteren bir üreticide, dış
                ticaret ekibinin ürün ve alt reçete taleplerini ERP stoğuyla
                kontrol edip onay sonrası tedarikçiye otomatik ileten bir akış
                kurdurduk. Daha önce aynı süreç e-posta ve Excel arasında
                yürüyordu.
              </p>
              <p>
                Kendi işimizde de aynı yaklaşımı uyguluyoruz: geliştirdiğimiz
                CRM'de döviz kuru senkronu, mailing gönderimi ve onay kapıları
                otomatik çalışıyor.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-flow-border bg-flow-card p-8">
              <h2 className="text-2xl font-bold">Çalışma ilkelerimiz</h2>
              <ul className="mt-5 space-y-4 text-sm text-flow-light/75">
                <li>
                  <span className="font-semibold text-white">Süreci sahada
                  anlarız.</span>{" "}
                  Akışı kullanacak kişiyle konuşmadan tasarlamıyoruz; kullanılmayan
                  akış çalışmayan akıştır.
                </li>
                <li>
                  <span className="font-semibold text-white">Mevcut sisteminizi
                  değiştirmeyiz.</span>{" "}
                  ERP veya e-posta altyapınızı korur, üzerine bağlanırız.
                </li>
                <li>
                  <span className="font-semibold text-white">İzlenebilirlik
                  şarttır.</span>{" "}
                  Kim ne zaman ne onayladı sorusunun cevabı her zaman kayıtlıdır.
                </li>
                <li>
                  <span className="font-semibold text-white">Yapay zeka karar
                  vermez.</span>{" "}
                  Belge okuma ve sınıflandırma gibi işlerde kullanırız; onay
                  gerektiren adımlar insanda kalır.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-flow-border bg-flow-deep p-8">
              <h2 className="text-xl font-bold">Şirket bilgileri</h2>
              <p className="mt-3 text-sm text-flow-light/70">{NAP.legalName}</p>
              <ul className="mt-5 space-y-3 text-sm text-flow-light/80">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-flow-cyan" aria-hidden="true" />
                  <span>
                    {NAP.street}
                    <br />
                    {NAP.district}/{NAP.city} {NAP.postalCode}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-flow-cyan" aria-hidden="true" />
                  <a href={NAP.phoneHref} className="font-bold text-white hover:text-flow-cyan">
                    {NAP.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-flow-cyan" aria-hidden="true" />
                  <a href={`mailto:${NAP.email}`} className="hover:text-white">
                    {NAP.email}
                  </a>
                </li>
              </ul>
              <a
                href={PARENT_SITE}
                target="_blank"
                rel="noopener"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-flow-cyan hover:text-white"
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
            className="inline-flex items-center gap-2 rounded-xl bg-flow-cyan px-7 py-4 text-base font-bold text-flow-deep transition-colors hover:bg-flow-mint"
          >
            İletişime geçin
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
