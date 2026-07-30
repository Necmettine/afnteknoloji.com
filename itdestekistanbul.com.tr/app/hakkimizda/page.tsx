import type { Metadata } from "next";
import {
  Award,
  Building2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Timer,
  Users,
} from "lucide-react";
import { NAP, PARENT_SITE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda | AFN Teknoloji — IT Destek İstanbul",
  description:
    "IT Destek İstanbul, AFN Teknoloji Bilişim Destek ve Danışmanlık Hizmetleri Tic. Ltd. Şti. markasıdır. 2010'dan beri İstanbul'da kurumsal IT destek, bakım ve danışmanlık; 500+ müşteri, ISO 27001 sertifikası.",
  alternates: {
    canonical: `${SITE_URL}/hakkimizda/`,
  },
};

const stats = [
  { icon: Building2, value: "2010", label: "Kuruluş yılı" },
  { icon: Users, value: "500+", label: "Müşteri" },
  { icon: Award, value: "ISO 27001", label: "Bilgi güvenliği sertifikası" },
  { icon: Clock, value: "7/24", label: "Destek erişimi" },
  { icon: Timer, value: "2 saat", label: "Yerinde müdahale SLA" },
];

export default function HakkimizdaPage() {
  return (
    <>
      <section className="hero-grid-bg border-b border-it-border/60">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold">Hakkımızda</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            IT Destek İstanbul, AFN Teknoloji&apos;nin İstanbul&apos;a odaklanan
            kurumsal IT destek markasıdır.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-2xl font-bold">AFN Teknoloji kimdir?</h2>
        <div className="mt-4 space-y-4 leading-relaxed text-gray-300">
          <p>
            <strong className="text-white">{NAP.legalName}</strong>, 2010 yılından
            bu yana İstanbul merkezli olarak kurumsal bilişim hizmetleri
            sunmaktadır. Sistem ve network altyapısı, sunucu ve sanallaştırma
            projeleri, bilgi güvenliği, Microsoft 365 ve yedekleme çözümleri
            alanlarında 500&apos;den fazla müşteriye hizmet vermiş deneyimli bir
            ekibiz.
          </p>
          <p>
            ISO 27001 bilgi güvenliği yönetim sistemi sertifikamız, tüm destek ve
            bakım süreçlerimizin uluslararası standartlara göre işletildiğinin
            güvencesidir. Fortinet, Microsoft, VMware, Veeam ve Huawei gibi
            üreticilerin çözümlerinde uzmanlaşmış mühendis kadromuzla
            çalışıyoruz.
          </p>
          <p>
            IT Destek İstanbul markası; İstanbul&apos;daki şirketlerin yerinde
            destek, uzaktan destek ve bakım anlaşması ihtiyaçlarına hızlı,
            ölçülebilir ve tek muhataplı bir çözüm sunmak amacıyla kurulmuştur.
            Kurumsal web sitemiz{" "}
            <a
              href={PARENT_SITE}
              target="_blank"
              rel="noopener"
              className="font-semibold text-it-sky hover:text-it-light"
            >
              afnteknoloji.com
            </a>{" "}
            üzerinden tüm hizmetlerimizi inceleyebilirsiniz.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-it-border bg-it-card p-5 text-center"
            >
              <item.icon className="mx-auto h-6 w-6 text-it-sky" aria-hidden="true" />
              <p className="mt-2 text-xl font-extrabold text-white">{item.value}</p>
              <p className="mt-1 text-xs text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NAP bloğu */}
      <section className="border-t border-it-border/60 bg-it-deep">
        <div className="mx-auto max-w-4xl px-4 py-14">
          <h2 className="text-center text-2xl font-bold">İletişim Bilgilerimiz</h2>
          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-it-border bg-it-card p-7">
            <p className="text-base font-bold text-white">{NAP.legalName}</p>
            <ul className="mt-5 space-y-4 text-sm text-gray-300">
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
                <a href={NAP.phoneHref} className="font-semibold hover:text-white">
                  {NAP.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-it-sky" aria-hidden="true" />
                <a href={`mailto:${NAP.email}`} className="font-semibold hover:text-white">
                  {NAP.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
