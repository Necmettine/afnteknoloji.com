import type { Metadata } from "next";
import Link from "next/link";
import {
  BrainCircuit,
  ChevronDown,
  Database,
  FileSignature,
  GitBranch,
  Lightbulb,
  Phone,
  Rocket,
  Search,
  Send,
  Sparkles,
  Workflow,
} from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { faqItems } from "@/lib/faq-data";
import { CONTACT_URL, NAP, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Yapay Zeka ile CRM ve İş Akışı Otomasyonu | CRM Yapay Zeka",
  description:
    "ERP verinizin üzerinde çalışan yapay zeka destekli CRM, Wolvox ve Netsis entegrasyonu, iş akışı ve teklif otomasyonu. Kendi ürünlerini yapay zekayla geliştiren AFN Teknoloji yazılım ekibi.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
};

const services = [
  {
    icon: BrainCircuit,
    title: "Yapay Zeka Destekli CRM",
    description:
      "ERP verinizi kaynak alan, süreçlerinize göre modüllenen kurumsal CRM. Hazır paket değil, kullandığınız iş akışına göre kurulur.",
  },
  {
    icon: Database,
    title: "ERP Entegrasyonu",
    description:
      "Wolvox ve Netsis ile canlı ortamda çalışan entegrasyonlar: cari, stok, döviz, sipariş ve reçete verisiyle çift yönlü bağlantı.",
  },
  {
    icon: Workflow,
    title: "İş Akışı Otomasyonu",
    description:
      "Talep, onay, bildirim ve raporlama adımlarını tek akışa taşıyoruz. E-posta ve Excel'de kaybolan süreçler izlenebilir hale gelir.",
  },
  {
    icon: FileSignature,
    title: "Doküman ve Teklif Otomasyonu",
    description:
      "Teklif, sözleşme ve müşteri e-postası taslakları yapay zeka desteğiyle üretilir; onay ve gönderim akışına bağlanır.",
  },
];

const processSteps = [
  {
    icon: Search,
    step: "01",
    title: "Keşif",
    description:
      "Mevcut süreci, ERP'nizi ve veri yapısını yerinde çıkarıyoruz. Hangi işin gerçekten otomatikleşmeye değer olduğunu birlikte belirliyoruz.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Pilot",
    description:
      "Tek bir akışı gerçek veriyle çalışır hale getiriyoruz. Sunum değil, ekibin ilk günden kullanabileceği bir ekran çıkıyor.",
  },
  {
    icon: GitBranch,
    step: "03",
    title: "Entegrasyon",
    description:
      "ERP ve diğer sistemlerle bağlantı, yetkilendirme, raporlama ve bildirim katmanı kuruluyor; akış kurumsal ortama uygun hale getiriliyor.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Devreye Alma",
    description:
      "Eğitim, canlıya geçiş ve kullanım sonrası iyileştirme. Sonrasında yeni modüller aynı yapının üzerine ekleniyor.",
  },
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="hero-grid-bg relative overflow-hidden">
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 text-center md:py-28">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-ai-border bg-ai-card/60 px-4 py-1.5 text-sm font-medium text-ai-light">
            <Sparkles className="h-4 w-4 text-ai-teal" aria-hidden="true" />
            Bir AFN Teknoloji markasıdır
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl">
            Yapay Zeka ile{" "}
            <span className="text-gradient">CRM ve İş Akışı Otomasyonu</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Jenerik bir ajans değiliz. Kendi CRM&apos;imizi, kendi güvenlik izleme
            platformumuzu ve kendi risk tarama servisimizi yazan bir yazılım
            ekibiyiz. Aynı yaklaşımla, ERP verinizin üzerinde gerçekten çalışan
            sistemler kuruyoruz.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={NAP.phoneHref}
              className="flex items-center gap-2 rounded-xl bg-ai-violet px-6 py-3 text-base font-bold text-white transition-colors hover:bg-ai-indigo"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {NAP.phoneDisplay}
            </a>
            <Link
              href="/vaka-calismalari/"
              className="rounded-xl border border-ai-border px-6 py-3 text-base font-semibold text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
            >
              Vaka Çalışmalarını İnceleyin
            </Link>
          </div>
        </div>
      </section>

      {/* Hizmet kartları */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold">Ne Yapıyoruz?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-400">
          Tek bir onay akışından çok modüllü kurumsal CRM&apos;e kadar, mevcut
          sisteminizin üzerine ekibinizin günlük olarak kullanacağı katmanı
          kuruyoruz.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-ai-border bg-ai-card p-6 transition-colors hover:border-ai-violet/70"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ai-violet/20 text-ai-indigo">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/hizmetlerimiz/"
            className="text-sm font-semibold text-ai-teal hover:text-ai-light"
          >
            Tüm hizmet detaylarını inceleyin →
          </Link>
        </div>
      </section>

      {/* Vaka çalışmaları özeti */}
      <section className="border-y border-ai-border/60 bg-ai-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-3xl font-bold">
            Gerçekten Çalışan Sistemler
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-gray-400">
            Anlattığımız her şey canlı ortamda çalışıyor. Aşağıdaki dört sistemin
            üçünü kendi ihtiyacımız için yazdık ve her gün kullanıyoruz.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {caseStudies.map((item) => (
              <article
                key={item.slug}
                className="flex flex-col rounded-2xl border border-ai-border bg-ai-card p-6 transition-colors hover:border-ai-teal/50"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-ai-teal">
                  {item.tag}
                </p>
                <h3 className="mt-3 text-lg font-bold leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400">
                  {item.summary}
                </p>
                <Link
                  href={`/vaka-calismalari/#${item.slug}`}
                  className="mt-5 text-sm font-semibold text-ai-indigo hover:text-white"
                >
                  Vakayı okuyun →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Süreç */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold">Nasıl İlerliyoruz?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-400">
          Aylarca süren analiz raporları yerine, her adımın sonunda çalışan bir
          çıktı bırakan dört aşamalı bir yöntem izliyoruz.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.step} className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ai-teal/15 text-ai-teal">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="text-2xl font-extrabold text-white/10">
                  {step.step}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SSS */}
      <section className="border-t border-ai-border/60 bg-ai-deep">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="text-center text-3xl font-bold">Sıkça Sorulan Sorular</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-400">
            Yapay zeka destekli CRM ve otomasyon projeleri hakkında en çok merak
            edilenler.
          </p>
          <div className="mt-10 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-ai-border bg-ai-card p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-ai-teal transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-ai-border/60">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-ai-violet/20 text-ai-indigo">
            <BrainCircuit className="h-7 w-7" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-3xl font-bold">
            Hangi işi otomatikleştirelim?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            Ekibinizin her gün elle tekrarladığı bir iş varsa, muhtemelen
            otomatikleştirilebilir. Ücretsiz keşif görüşmesi için bizi arayın
            veya AFN Teknoloji iletişim sayfasından yazın.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={NAP.phoneHref}
              className="flex items-center gap-2 rounded-xl bg-ai-violet px-6 py-3 text-base font-bold text-white transition-colors hover:bg-ai-indigo"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {NAP.phoneDisplay}
            </a>
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 rounded-xl border border-ai-border px-6 py-3 text-base font-semibold text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
            >
              <Send className="h-5 w-5" aria-hidden="true" />
              İletişim Formu — afnteknoloji.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
