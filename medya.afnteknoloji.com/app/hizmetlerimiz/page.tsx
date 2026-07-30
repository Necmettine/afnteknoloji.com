import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Code2, Globe, MessageCircleMore } from "lucide-react";

export const metadata = {
  title: "Hizmetlerimiz | AFN Medya",
  description: "AFN Medya'nin web tasarim, yazilim gelistirme ve sosyal medya yonetimi hizmetlerini inceleyin.",
};

const services = [
  {
    title: "Web Tasarim ve Kurumsal Web Sitesi",
    description:
      "Guven veren, sade ve teknolojik gorunen kurumsal siteler; hiz, mobil uyum ve teklif odakli sayfa akisi ile birlikte gelir.",
    href: "/hizmetlerimiz/web-tasarim",
    icon: Globe,
  },
  {
    title: "Yazilim Gelistirme",
    description:
      "Hazir sistemlere sikismadan, is akisiniza gore yonetim paneli, entegrasyon ve operasyon yazilimlari tasarliyoruz.",
    href: "/hizmetlerimiz/yazilim-gelistirme",
    icon: Code2,
  },
  {
    title: "Sosyal Medya Yonetimi",
    description:
      "Marka tonu, icerik planlamasi, gorsel akisi ve reklam destegiyle sosyal medya tarafini daha profesyonel hale getiriyoruz.",
    href: "/hizmetlerimiz/sosyal-medya-yonetimi",
    icon: MessageCircleMore,
  },
];

export default function HizmetlerPage() {
  return (
    <main className="bg-[#06101d]">
      <Header />

      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">Hizmetlerimiz</p>
            <h1 className="mt-4 font-display text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">
              Sadece gorunen degil, etki birakan dijital cozumler.
            </h1>
            <p className="mt-5 text-base leading-8 text-white/66">
              AFN Medya olarak hizmetleri birbirinden kopuk isler gibi degil, ayni marka etkisini besleyen tek bir sistem
              olarak planliyoruz.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group rounded-[32px] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-[var(--accent)]/45"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[var(--accent)]/14 text-[var(--accent)]">
                  <service.icon className="h-7 w-7" />
                </div>
                <h2 className="mt-6 text-2xl font-black text-white">{service.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/62">{service.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)]">
                  Ayrintilari Gor
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
