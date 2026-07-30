import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Clock,
  Code2,
  Layers,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import { NAP, PARENT_SITE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda | AFN Teknoloji Yazılım ve Yapay Zeka Ekibi",
  description:
    "AFN Teknoloji, kendi CRM, güvenlik izleme ve risk tarama ürünlerini geliştiren bir yazılım ekibidir. Wolvox ve Netsis ERP entegrasyonları, iş akışı otomasyonu ve yapay zeka projeleri. Maltepe/İstanbul.",
  alternates: {
    canonical: `${SITE_URL}/hakkimizda/`,
  },
};

const principles = [
  {
    icon: Code2,
    title: "Kendi ürünümüzü kendimiz kullanıyoruz",
    description:
      "AfnCrm, ShamashAi ve AfnRiskScan bizim ürünlerimiz ve kendi operasyonumuzda çalışıyor. Bir özelliğin işe yarayıp yaramadığını demo ortamında değil, kendi günlük işimizde görüyoruz.",
  },
  {
    icon: Layers,
    title: "Mevcut sisteminizi değiştirmiyoruz",
    description:
      "ERP'nizi kaynak veri olarak kabul ediyoruz. Wolvox ya da Netsis yerinde çalışmaya devam ederken, üzerine ekibinizin kullanacağı katmanı ekliyoruz.",
  },
  {
    icon: ShieldCheck,
    title: "Yapay zeka karar vermez, hızlandırır",
    description:
      "Metin üretimi ve sınıflandırma gibi işleri yapay zekaya bırakıyoruz; finansal etkisi olan adımlar kural tabanlı çalışıyor ve insan onayından geçiyor.",
  },
  {
    icon: Building2,
    title: "Yazılımın altındaki altyapıyı da biliyoruz",
    description:
      "AFN Teknoloji aynı zamanda kurumsal BT destek hizmeti veriyor. Sunucu, ağ ve güvenlik tarafını da yönettiğimiz için uygulama tek elden ayakta kalıyor.",
  },
];

const facts = [
  { icon: Users, title: "Kurumsal odak", description: "KOBİ ve orta ölçekli işletmeler" },
  { icon: Layers, title: "4 canlı sistem", description: "3'ü kendi ürünümüz, 1'i müşteri projesi" },
  { icon: Clock, title: "Hafta içi 09:00–18:00", description: "Destek ve proje görüşmeleri" },
  { icon: MapPin, title: "Maltepe / İstanbul", description: "Türkiye geneline uzaktan hizmet" },
];

export default function HakkimizdaPage() {
  return (
    <>
      <section className="hero-grid-bg relative overflow-hidden border-b border-ai-border/60">
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold">Hakkımızda</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            CRM Yapay Zeka, AFN Teknoloji&apos;nin yazılım ve yapay zeka
            hizmetlerini bir araya getirdiği markasıdır.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-2xl font-bold">Kendi ürünlerini yazan bir ekip</h2>
        <div className="mt-5 space-y-4 text-sm leading-relaxed text-gray-300">
          <p>
            AFN Teknoloji Bilişim Destek ve Danışmanlık Hizmetleri Tic. Ltd.
            Şti., İstanbul Maltepe merkezli bir bilişim şirketidir. Kurumsal BT
            destek hizmetlerinin yanında, kendi yazılım ürünlerini geliştiren bir
            ekibe sahiptir. CRM Yapay Zeka bu ekibin yaptığı işi anlatır.
          </p>
          <p>
            Bir yazılım ekibinin gerçekten ne yapabildiğini anlamanın en dürüst
            yolu, kendi ihtiyacı için ne yazdığına bakmaktır. Biz Akınsoft Wolvox
            ERP üzerine kurumsal CRM&apos;imizi (AfnCrm), orta ölçekli işletmeler
            için BT görünürlüğü ve güvenlik izleme platformumuzu (ShamashAi) ve
            kurumsal risk tarama servisimizi (AfnRiskScan) geliştirdik. Bu
            sistemler her gün kendi operasyonumuzda çalışıyor.
          </p>
          <p>
            Müşteri projelerinde de aynı yaklaşımı izliyoruz. Aydınlatma
            sektöründe faaliyet gösteren bir üretici için dış ticaret ekibinin
            sipariş ve reçete taleplerini Netsis ERP ile entegre şekilde yöneten
            bir portal kurduk. Hazır bir paketi zorlamak yerine, ekibin fiilen
            yaptığı işi yazılıma taşıdık.
          </p>
          <p>
            Yapay zekayı bir pazarlama etiketi olarak değil, belirli işleri
            hızlandıran bir araç olarak kullanıyoruz: metin üretimi, taslak
            hazırlama, sınıflandırma ve özetleme. Parayla ilgili her adım kural
            tabanlı çalışır, kaynağı doğrulanabilir ve bir insanın onayından
            geçer.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {principles.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-ai-border bg-ai-card p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ai-violet/20 text-ai-indigo">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-ai-border/60 bg-ai-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.title} className="glass rounded-2xl p-5 text-center">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-ai-teal/15 text-ai-teal">
                  <fact.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-base font-bold">{fact.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAP */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-2xl font-bold">Kurumsal Bilgiler</h2>
        <div className="mt-6 rounded-2xl border border-ai-border bg-ai-card p-7">
          <p className="text-base font-bold text-white">{NAP.legalName}</p>
          <ul className="mt-6 space-y-5 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-ai-indigo" aria-hidden="true" />
              <span>
                {NAP.street}
                <br />
                {NAP.district}/{NAP.city} {NAP.postalCode}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-ai-indigo" aria-hidden="true" />
              <a
                href={NAP.phoneHref}
                className="text-base font-bold text-white hover:text-ai-light"
              >
                {NAP.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-ai-indigo" aria-hidden="true" />
              <a href={`mailto:${NAP.email}`} className="font-semibold hover:text-white">
                {NAP.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-5 w-5 shrink-0 text-ai-indigo" aria-hidden="true" />
              <span>Hafta içi 09:00 – 18:00</span>
            </li>
          </ul>
          <p className="mt-6 border-t border-ai-border/60 pt-5 text-sm text-gray-400">
            CRM Yapay Zeka bir{" "}
            <a
              href={PARENT_SITE}
              target="_blank"
              rel="noopener"
              className="font-semibold text-ai-teal hover:text-white"
            >
              AFN Teknoloji
            </a>{" "}
            markasıdır.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/vaka-calismalari/"
            className="rounded-xl bg-ai-violet px-6 py-3 text-center text-base font-bold text-white transition-colors hover:bg-ai-indigo"
          >
            Vaka Çalışmaları
          </Link>
          <Link
            href="/iletisim/"
            className="rounded-xl border border-ai-border px-6 py-3 text-center text-base font-semibold text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
          >
            İletişime Geçin
          </Link>
        </div>
      </section>
    </>
  );
}
