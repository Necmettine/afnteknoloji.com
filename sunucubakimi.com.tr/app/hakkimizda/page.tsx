import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import { NAP, PARENT_SITE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda | AFN Teknoloji Sunucu Hizmetleri",
  description:
    "Sunucu Bakımı, AFN Teknoloji Bilişim Destek ve Danışmanlık Hizmetleri Tic. Ltd. Şti.'nin sunucu kurulum, bakım ve yönetim hizmetlerine odaklanan markasıdır. Maltepe/İstanbul merkezli, 2010'dan beri kurumsal bilişim.",
  alternates: {
    canonical: `${SITE_URL}/hakkimizda/`,
  },
};

const principles = [
  {
    icon: ShieldCheck,
    title: "Ölçmeden müdahale etmeyiz",
    description:
      "Her işe envanter ve ölçümle başlıyoruz: hangi sunucu hangi rolü taşıyor, kaynak doygunluğu nerede, yedek gerçekten geri dönüyor mu. Öneri, tahmine değil rapora dayanır.",
  },
  {
    icon: Wrench,
    title: "Marka bağımsız çalışırız",
    description:
      "Dell, HPE, Lenovo ve Huawei sunucularının kendi yönetim araçlarıyla çalışıyoruz. Amacımız donanım satmak değil, mevcut yatırımınızdan en uzun ömrü almanızı sağlamak.",
  },
  {
    icon: Users,
    title: "Bakımı yazılı kayda geçiririz",
    description:
      "Yapılan her kontrolün sonucu, uygulanan firmware sürümü ve tespit edilen risk rapora işlenir. Böylece sunucunun geçmişi kişiye değil kayda bağlı kalır.",
  },
];

const history = [
  {
    year: "2010",
    text: "AFN Teknoloji kuruldu; kurumsal bilişim destek ve danışmanlık hizmetleri vermeye başladı.",
  },
  {
    year: "Bugün",
    text: "Sunucu, sanallaştırma, yedekleme, ağ ve güvenlik alanlarında 500'ün üzerinde kuruma hizmet veriyoruz.",
  },
  {
    year: "Uzmanlık",
    text: "VMware vSphere, Veeam Backup & Replication, Windows Server, Linux ve kurumsal sunucu donanımı.",
  },
  {
    year: "Kapsama",
    text: "Merkez Maltepe/İstanbul; yerinde hizmet İstanbul geneli, uzaktan yönetim Türkiye geneli.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <section className="rack-bg border-b border-srv-border/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-extrabold">Hakkımızda</h1>
          <div className="amber-rule mt-5 h-px w-32" aria-hidden="true" />
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-300">
            Sunucu Bakımı, AFN Teknoloji&apos;nin sunucu kurulum, bakım ve
            yönetim hizmetlerine odaklanan markasıdır. Kurumların en kritik
            varlığı olan sunucu altyapısını; ölçülebilir, raporlanabilir ve
            öngörülebilir bir disiplinle işletiyoruz.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-3xl font-bold">AFN Teknoloji</h2>
        <div className="mt-5 space-y-4 text-base leading-relaxed text-gray-300">
          <p>
            AFN Teknoloji Bilişim Destek ve Danışmanlık Hizmetleri Tic. Ltd.
            Şti., 2010 yılından bu yana kurumsal bilişim altyapıları kuran ve
            işleten bir teknoloji şirketidir. Merkezi Maltepe/İstanbul&apos;dadır.
            Sunucu ve sanallaştırma, yedekleme ve felaket kurtarma, ağ ve
            güvenlik ile son kullanıcı desteği başlıca çalışma alanlarımızdır.
          </p>
          <p>
            Bu mikrosite, sunucu tarafındaki hizmetlerimizi tek başlık altında
            toplamak için hazırlandı. Sunucu altyapısı, diğer IT bileşenlerinden
            farklı bir disiplin gerektirir: donanım yaşam döngüsü, firmware
            uyumluluk matrisleri, RAID ve depolama davranışı, sanallaştırma
            kaynak yönetimi ve yedekleme zincirinin bütünlüğü ayrı ayrı
            izlenmesi gereken konulardır. Ekibimiz bu alanlarda saha deneyimine
            sahip mühendislerden oluşur.
          </p>
          <p>
            Kurumsal IT destek, son kullanıcı yardım masası ve bakım anlaşması
            hizmetlerimiz için kardeş markamız{" "}
            <a
              href="https://itdestekistanbul.com.tr"
              target="_blank"
              rel="noopener"
              className="font-semibold text-srv-gold hover:text-srv-sand"
            >
              itdestekistanbul.com.tr
            </a>{" "}
            adresine, tüm kurumsal hizmet yelpazemiz için{" "}
            <a
              href={PARENT_SITE}
              target="_blank"
              rel="noopener"
              className="font-semibold text-srv-gold hover:text-srv-sand"
            >
              afnteknoloji.com
            </a>{" "}
            adresine bakabilirsiniz.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {principles.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-srv-border bg-srv-card p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-srv-amber/20 bg-srv-amber/10 text-srv-gold">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {history.map((row) => (
            <div
              key={row.year}
              className="panel rounded-2xl p-5"
            >
              <span className="text-sm font-bold uppercase tracking-wider text-srv-amber">
                {row.year}
              </span>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">
                {row.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* NAP */}
      <section className="border-t border-srv-border/60 bg-srv-deep">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="flex items-center gap-3 text-3xl font-bold">
            <Building2 className="h-7 w-7 text-srv-amber" aria-hidden="true" />
            Kurumsal bilgiler
          </h2>
          <div className="mt-8 rounded-2xl border border-srv-border bg-srv-card p-7">
            <p className="text-lg font-bold text-white">{NAP.legalName}</p>
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
              <li className="flex items-center gap-3">
                <ExternalLink className="h-5 w-5 shrink-0 text-srv-amber" aria-hidden="true" />
                <a
                  href={PARENT_SITE}
                  target="_blank"
                  rel="noopener"
                  className="font-semibold hover:text-white"
                >
                  afnteknoloji.com
                </a>
              </li>
            </ul>
            <p className="mt-6 border-t border-srv-border/60 pt-5 text-sm text-srv-muted">
              Çalışma saatleri: Hafta içi 09:00 – 18:00. Bakım anlaşmalı
              müşterilerimiz için kritik sunucu arızalarında mesai dışı ve hafta
              sonu destek sağlanır.
            </p>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/iletisim/"
              className="inline-flex items-center gap-2 rounded-xl bg-srv-amber px-6 py-3 text-base font-bold text-srv-deep transition-colors hover:bg-srv-gold"
            >
              İletişim sayfasına gidin
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
