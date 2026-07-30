import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Phone,
  Target,
} from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { NAP, PARENT_SITE, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vaka Çalışmaları | AfnCrm, Netsis Sipariş Portalı, ShamashAi",
  description:
    "Canlı ortamda çalışan projelerimiz: Wolvox ERP üzerine kurulan AfnCrm, aydınlatma üreticisi için Netsis entegre sipariş ve reçete talep portalı, ShamashAi BT izleme platformu ve AfnRiskScan risk tarama servisi.",
  alternates: {
    canonical: `${SITE_URL}/vaka-calismalari/`,
  },
};

const PAGE_URL = `${SITE_URL}/vaka-calismalari/`;

export default function VakaCalismalariPage() {
  const articleSchemas = caseStudies.map((item) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${PAGE_URL}#${item.slug}`,
    headline: item.title,
    description: item.summary,
    articleBody: [item.intro, ...item.highlights, item.outcome].join(" "),
    inLanguage: "tr-TR",
    isPartOf: {
      "@type": "WebPage",
      "@id": PAGE_URL,
      name: "Vaka Çalışmaları",
      url: PAGE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": PAGE_URL,
    },
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: NAP.legalName,
      url: PARENT_SITE,
    },
  }));

  return (
    <>
      {articleSchemas.map((schema) => (
        <script
          key={schema["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="hero-grid-bg relative overflow-hidden border-b border-ai-border/60">
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold">Vaka Çalışmaları</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Aşağıdaki dört sistem canlı ortamda çalışıyor. Üçünü kendi
            ihtiyacımız için geliştirdik ve her gün kullanıyoruz; biri müşteri
            projesi olarak devreye alındı.
          </p>
          <nav aria-label="Vaka listesi" className="mt-8 flex flex-wrap justify-center gap-3">
            {caseStudies.map((item) => (
              <a
                key={item.slug}
                href={`#${item.slug}`}
                className="rounded-full border border-ai-border bg-ai-card/60 px-4 py-1.5 text-sm font-medium text-ai-light transition-colors hover:border-ai-teal/60 hover:text-white"
              >
                {item.short}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="space-y-10">
          {caseStudies.map((item) => (
            <article
              key={item.slug}
              id={item.slug}
              className="scroll-mt-28 rounded-2xl border border-ai-border bg-ai-card p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-ai-teal">
                {item.tag}
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-snug">{item.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-300">
                {item.intro}
              </p>

              <h3 className="mt-7 text-sm font-bold uppercase tracking-wider text-ai-indigo">
                Öne çıkanlar
              </h3>
              <ul className="mt-4 space-y-3">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-sm leading-relaxed text-gray-300">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-ai-teal"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex items-start gap-3 rounded-xl border border-ai-teal/25 bg-ai-teal/5 p-5">
                <Target className="mt-0.5 h-5 w-5 shrink-0 text-ai-teal" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-white">Sonuç</p>
                  <p className="mt-1 text-sm leading-relaxed text-gray-300">
                    {item.outcome}
                  </p>
                </div>
              </div>

              {item.externalUrl ? (
                <a
                  href={item.externalUrl}
                  target="_blank"
                  rel="noopener"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ai-indigo hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  {item.externalLabel ?? item.externalUrl}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-ai-border/60 bg-ai-deep">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h2 className="text-3xl font-bold">Benzer bir ihtiyacınız mı var?</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            Yukarıdaki projelerin hepsi tek bir akışla başladı. Sizin de her gün
            elle tekrarladığınız bir süreç varsa, onunla başlayabiliriz.
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
              href="/hizmetlerimiz/"
              className="flex items-center gap-2 rounded-xl border border-ai-border px-6 py-3 text-base font-semibold text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
            >
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              Hizmetlerimiz
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
