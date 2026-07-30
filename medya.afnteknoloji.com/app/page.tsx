import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBg from "@/components/HeroBg";
import { ArrowRight, Code2, Globe, LineChart, MessageCircleMore, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AFN Medya | Web Tasarım, Yazılım Geliştirme ve Sosyal Medya Yönetimi",
  description:
    "AFN Medya; kurumsal web sitesi tasarımı, özel yazılım geliştirme ve sosyal medya yönetimi ile markanızı dijitalde büyütür. AFN Teknoloji güvencesiyle.",
  alternates: {
    canonical: "https://medya.afnteknoloji.com/",
  },
};

const services = [
  {
    title: "Web Tasarim ve Kurumsal Web Sitesi",
    text: "Markanizi profesyonel gosteren, hizli acilan ve teklif toplama odakli web siteleri tasarliyoruz.",
    href: "/hizmetlerimiz/web-tasarim",
    icon: Globe,
  },
  {
    title: "Yazilim Gelistirme",
    text: "Sirketinizin is akisina uygun yonetim panelleri, otomasyonlar ve ozel yazilimlar gelistiriyoruz.",
    href: "/hizmetlerimiz/yazilim-gelistirme",
    icon: Code2,
  },
  {
    title: "Sosyal Medya Yonetimi",
    text: "Marka dili, icerik akisi, reklam destekleri ve raporlama ile sosyal tarafta daha net bir gorunum kuruyoruz.",
    href: "/hizmetlerimiz/sosyal-medya-yonetimi",
    icon: MessageCircleMore,
  },
];

const highlights = [
  "Karisik degil, net ve guven veren dijital deneyim",
  "Marka imajini guclendiren tasarim ve icerik dili",
  "Teklif ve iletisim ureten, is odakli sayfa kurgusu",
];

export default function HomePage() {
  return (
    <main className="bg-[#06101d]">
      <Header />

      <section className="relative overflow-hidden pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#08101b_0%,#06101d_60%,#050a13_100%)]" />
        <HeroBg />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="pt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">AFN Medya</p>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-black leading-[1.02] tracking-[-0.05em] text-white md:text-7xl">
              Markaniza teknoloji hissi veren, net ve etkileyici bir dijital vitrin kuruyoruz.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              Web sitesi, yazilim ve sosyal medya tarafini tek tek parcalara bolmeden; birbirini tamamlayan guclu bir
              dijital sistem olarak kurguluyoruz. Sonuc sadece guzel gorunmek degil, guven vermek ve is getirmek oluyor.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-7 py-4 text-sm font-bold text-black transition hover:translate-y-[-1px]"
              >
                Projeyi Konusalim
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/hizmetlerimiz"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Hizmetleri Incele
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item} className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
                  <Sparkles className="h-5 w-5 text-[var(--accent)]" />
                  <p className="mt-3 text-sm leading-7 text-white/72">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pt-10">
            <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.11),rgba(255,255,255,0.04))] p-6 shadow-[0_35px_100px_rgba(0,0,0,0.35)] backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] border border-cyan-400/20 bg-[#0a1727] p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/12 text-cyan-300">
                    <LineChart className="h-6 w-6" />
                  </div>
                  <p className="mt-4 text-2xl font-black text-white">Strateji + Tasarim + Uygulama</p>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    Ayrik isler yerine tek elde ilerleyen, hizli karar aldiran bir uretim modeli.
                  </p>
                </div>

                <div className="rounded-[28px] border border-orange-300/20 bg-[#15111d] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-200/70">Odak</p>
                  <p className="mt-4 text-4xl font-black text-white">3</p>
                  <p className="mt-2 text-sm leading-7 text-white/60">Ana hizmet etrafinda sade ama guclu bir konumlama.</p>
                </div>
              </div>

              <div className="mt-4 rounded-[32px] border border-white/10 bg-black/20 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/45">Neden boyle?</p>
                <p className="mt-4 text-2xl font-black leading-tight text-white">
                  Cunku karisik siteler etkilemez. Net mesaj, guclu tasarim ve hizli iletisim ise akilda kalir.
                </p>
                <div className="mt-6 grid gap-3">
                  {["Telefon tiklanabilir", "WhatsApp Business baglantili", "Satis ve bilgi mailleri hazir"].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-white/72">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050a13] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">Hizmet Alanlari</p>
            <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
              Her hizmet, ayni markaya ait tek bir guclu his uretmeli.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-7 transition hover:-translate-y-1 hover:border-[var(--accent)]/45"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[var(--accent)]/14 text-[var(--accent)]">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-black text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{service.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)]">
                  Detayi Gor
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-[linear-gradient(135deg,#0a1627_0%,#0b2237_45%,#ff9a3c_160%)] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.26em] text-white/50">Birlikte Netlestirelim</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                Medya sitesi, yazilim talebi ya da sosyal medya yonetimi. Ihtiyaciniza en uygun kurguyu birlikte cikaralim.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">
                Siz neye ihtiyac duydugunuzu anlatin; biz size gereksiz kalabalik olmadan, dogru yapida ve uygulanabilir bir yol sunalim.
              </p>
            </div>

            <a
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition hover:translate-y-[-1px]"
            >
              Hemen Iletisime Gec
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
