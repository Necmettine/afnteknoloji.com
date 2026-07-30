import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Building2,
  ChevronDown,
  Clock,
  FileCheck,
  Headset,
  MapPin,
  MonitorSmartphone,
  Network,
  Phone,
  ShieldCheck,
  Timer,
  Users,
  Wrench,
} from "lucide-react";
import { faqItems } from "@/lib/faq-data";
import { CONTACT_URL, NAP, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "İstanbul'da Kurumsal IT Destek | Yerinde ve Uzaktan Teknik Destek",
  description:
    "İstanbul'un tüm ilçelerinde kurumsal IT destek: yerinde destek, uzaktan destek, bakım anlaşması, sunucu ve network yönetimi. 2010'dan beri 500+ müşteri, ISO 27001, 7/24 destek, 2 saat müdahale SLA.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
};

const services = [
  {
    icon: MapPin,
    title: "Yerinde IT Destek",
    description:
      "İstanbul'un tüm ilçelerinde ofisinize gelen uzman ekip. Kritik arızalarda 2 saat içinde yerinde müdahale.",
  },
  {
    icon: Headset,
    title: "Uzaktan Destek",
    description:
      "Şifreli ve kayıt altındaki bağlantıyla dakikalar içinde müdahale. 7/24 erişilebilir destek hattı.",
  },
  {
    icon: FileCheck,
    title: "Bakım Anlaşması",
    description:
      "Sabit aylık ücretle sınırsız uzaktan destek, planlı yerinde bakım, izleme ve raporlama.",
  },
  {
    icon: Network,
    title: "Sunucu & Network",
    description:
      "Fiziksel/sanal sunucu, Microsoft 365, firewall, switch ve kablosuz ağ kurulumu ile yönetimi.",
  },
];

const whyItems = [
  {
    icon: Building2,
    title: "2010'dan beri",
    description: "15+ yıllık kurumsal bilişim deneyimi",
  },
  {
    icon: Users,
    title: "500+ müşteri",
    description: "Her ölçekten şirkete kesintisiz hizmet",
  },
  {
    icon: Award,
    title: "ISO 27001",
    description: "Sertifikalı bilgi güvenliği yönetim sistemi",
  },
  {
    icon: Clock,
    title: "7/24 destek",
    description: "Telefon ve uzaktan bağlantıyla her an erişim",
  },
  {
    icon: Timer,
    title: "2 saat SLA",
    description: "İstanbul içi yerinde müdahale garantisi",
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
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-it-border bg-it-card/60 px-4 py-1.5 text-sm font-medium text-it-light">
            <ShieldCheck className="h-4 w-4 text-it-sky" aria-hidden="true" />
            Bir AFN Teknoloji markasıdır
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
            İstanbul&apos;da <span className="text-gradient">Kurumsal IT Destek</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Yerinde ve uzaktan teknik destek, bakım anlaşması, sunucu ve network
            yönetimi. 2010&apos;dan beri İstanbul&apos;un her ilçesinde, 2 saat müdahale
            SLA&apos;sı ile şirketinizin IT altyapısını kesintisiz çalıştırıyoruz.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={NAP.phoneHref}
              className="flex items-center gap-2 rounded-xl bg-it-blue px-6 py-3 text-base font-bold text-white transition-colors hover:bg-it-sky"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {NAP.phoneDisplay}
            </a>
            <Link
              href="/bakim-anlasmasi/"
              className="rounded-xl border border-it-border px-6 py-3 text-base font-semibold text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
            >
              Bakım Anlaşması Detayları
            </Link>
          </div>
        </div>
      </section>

      {/* Hizmet kartları */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold">IT Destek Hizmetlerimiz</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-400">
          Tek arıza müdahalesinden kapsamlı bakım anlaşmasına kadar, İstanbul
          genelinde uçtan uca IT hizmeti.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-it-border bg-it-card p-6 transition-colors hover:border-it-blue/60"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-it-blue/15 text-it-sky">
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
            href="/hizmetler/"
            className="text-sm font-semibold text-it-sky hover:text-it-light"
          >
            Tüm hizmet detaylarını inceleyin →
          </Link>
        </div>
      </section>

      {/* Neden AFN */}
      <section className="border-y border-it-border/60 bg-it-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-3xl font-bold">
            Neden AFN Teknoloji?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-gray-400">
            IT Destek İstanbul, AFN Teknoloji&apos;nin İstanbul&apos;a özel kurumsal
            destek hizmetidir.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {whyItems.map((item) => (
              <div key={item.title} className="glass rounded-2xl p-5 text-center">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-it-blue/15 text-it-sky">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-base font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold">Sıkça Sorulan Sorular</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-gray-400">
          İstanbul&apos;da IT destek hizmetleri hakkında en çok merak edilenler.
        </p>
        <div className="mt-10 space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-it-border bg-it-card p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-it-sky transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* İletişim CTA */}
      <section className="border-t border-it-border/60 bg-it-deep">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-it-blue/15 text-it-sky">
            <MonitorSmartphone className="h-7 w-7" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-3xl font-bold">
            IT altyapınız için hemen görüşelim
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            Ücretsiz keşif ve fiyat teklifi için bizi arayın veya AFN Teknoloji
            iletişim sayfasından yazın. Aynı gün dönüş yapıyoruz.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={NAP.phoneHref}
              className="flex items-center gap-2 rounded-xl bg-it-blue px-6 py-3 text-base font-bold text-white transition-colors hover:bg-it-sky"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {NAP.phoneDisplay}
            </a>
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 rounded-xl border border-it-border px-6 py-3 text-base font-semibold text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
            >
              <Wrench className="h-5 w-5" aria-hidden="true" />
              İletişim Formu — afnteknoloji.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
