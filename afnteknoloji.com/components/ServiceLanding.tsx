import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, LucideIcon } from "lucide-react";

type ServiceLandingProps = {
  eyebrow: string;
  title: string;
  description: string;
  heroNote: string;
  icon: LucideIcon;
  benefits: string[];
  sections: Array<{
    title: string;
    text: string;
  }>;
  process: string[];
};

export default function ServiceLanding({
  eyebrow,
  title,
  description,
  heroNote,
  icon: Icon,
  benefits,
  sections,
  process,
}: ServiceLandingProps) {
  return (
    <main>
      <Header />

      <section className="relative overflow-hidden bg-[var(--bg)] pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,106,61,0.16),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(255,211,92,0.08),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="section-eyebrow">{eyebrow}</p>
              <h1 className="font-display mt-4 text-5xl font-black tracking-[-0.05em] text-white md:text-6xl">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--soft)]">{description}</p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/iletisim"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-7 py-4 text-sm font-bold text-black transition hover:translate-y-[-1px]"
                >
                  Teklif Al
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/hizmetlerimiz"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Tum Hizmetler
                </a>
              </div>
            </div>

            <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[var(--accent)]/14 text-[var(--accent)]">
                <Icon className="h-7 w-7" />
              </div>
              <p className="mt-6 text-2xl font-bold text-white">{heroNote}</p>
              <div className="mt-6 space-y-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 rounded-2xl bg-black/20 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--accent)]" />
                    <p className="text-sm leading-7 text-[var(--soft)]">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-6"
              >
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{section.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-[36px] border border-white/10 bg-white/[0.03] p-6 lg:p-8">
            <div className="max-w-3xl">
              <p className="section-eyebrow">Calisma sureci</p>
              <h2 className="font-display mt-4 text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
                Sureci karistirmadan, net adimlarla ilerliyoruz.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {process.map((item, index) => (
                <article key={item} className="rounded-[28px] border border-white/10 bg-black/20 p-6">
                  <p className="font-display text-4xl font-black text-[var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[var(--soft)]">{item}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16 overflow-hidden rounded-[40px] border border-white/10 bg-[linear-gradient(135deg,#ff6a3d_0%,#ff9b54_55%,#ffd35c_100%)] px-6 py-12 text-black sm:px-10 lg:px-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-black/60">Hazirsaniz baslayalim</p>
                <h2 className="font-display mt-4 max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
                  Bu hizmet sizin markaniza nasil uyarlanir, birlikte netlestirelim.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-black/75">
                  Ihtiyacinizi dinleyip size uygun yapiyi, teslim mantigini ve yol haritasini birlikte cikarabiliriz.
                </p>
              </div>

              <a
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-bold text-white transition hover:translate-y-[-1px]"
              >
                Iletisime Gec
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
