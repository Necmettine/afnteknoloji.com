"use client";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const headlines = [
  "Güvenli Operasyon",
  "Maliyet Kontrolü",
  "Kesintisiz Süreklilik",
  "Hızlı Müdahale",
];

export default function HeroSection() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % headlines.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero-tech relative flex min-h-screen items-center overflow-hidden">
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/hero-bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
          opacity: 1,
        }}
      />

      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_55%)]" />
      <div className="absolute left-1/2 top-24 z-[2] h-32 w-[78%] -translate-x-1/2 rounded-full bg-[#06B6D4]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="lg:-mt-12">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#06B6D4]/20 bg-[#06B6D4]/10 px-4 py-2 text-sm font-semibold text-[#67E8F9] shadow-[0_0_0_1px_rgba(6,182,212,0.06)]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#06B6D4]" />
              Kurumsal BT Çözümlerinde Güvenilir Ortağınız
            </div>

            <div className="space-y-6">
              <h1 className="max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                <span className="text-white/95">Kurumsal BT için</span>
                <br />
                <span className="text-gradient">{headlines[idx]}</span>
              </h1>

              <p className="max-w-2xl text-base leading-7 text-slate-300 lg:text-lg">
                Satın alma, idari işler ve yönetim ekipleri için altyapı, güvenlik,
                yedekleme ve teknik destek süreçlerini tek noktadan yönetiyoruz.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="panel-surface rounded-2xl px-5 py-5">
                <div className="text-3xl font-black text-[#67E8F9]">1000+</div>
                <div className="mt-1 text-sm text-slate-400">Tamamlanan proje</div>
              </div>
              <div className="panel-surface rounded-2xl px-5 py-5">
                <div className="text-3xl font-black text-[#67E8F9]">10+</div>
                <div className="mt-1 text-sm text-slate-400">Yıl tecrübe</div>
              </div>
              <div className="panel-surface rounded-2xl px-5 py-5">
                <div className="text-3xl font-black text-[#67E8F9]">7/24</div>
                <div className="mt-1 text-sm text-slate-400">Teknik destek</div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#hizmetler"
                className="flex items-center gap-2 rounded-2xl bg-[#06B6D4] px-7 py-4 font-bold text-black transition-all hover:-translate-y-0.5 hover:bg-[#22D3EE] hover:shadow-xl hover:shadow-cyan-500/25 active:scale-95"
              >
                Hizmetlerimiz <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="/iletisim"
                className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-[#06B6D4]/30 hover:bg-white/[0.08]"
              >
                Teklif Al
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
              {headlines.map((headline) => (
                <span
                  key={headline}
                  className={`rounded-full border px-4 py-2 transition-all ${
                    headline === headlines[idx]
                      ? "border-[#06B6D4]/40 bg-[#06B6D4]/12 text-[#67E8F9]"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  {headline}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-400">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">Siber güvenlik</span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">Sunucu ve ağ altyapısı</span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">Bulut ve yedekleme</span>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="panel-surface soft-grid relative overflow-hidden rounded-[32px] p-6">
              <div className="absolute inset-x-8 top-0 h-24 rounded-full bg-[#06B6D4]/10 blur-3xl" />
              <div className="relative rounded-[26px] border border-white/10 bg-[#07111f]/90 p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.28em] text-[#67E8F9]">Operasyon görünümü</div>
                    <div className="mt-2 text-2xl font-bold text-white">Kurumsal BT merkezi</div>
                  </div>
                  <div className="rounded-2xl border border-[#06B6D4]/20 bg-[#06B6D4]/10 px-3 py-2 text-right">
                    <div className="text-xs text-slate-400">Destek SLA</div>
                    <div className="text-lg font-bold text-[#67E8F9]">7/24 Aktif</div>
                  </div>
                </div>

                <div className="mb-6 rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-4">
                  <Image
                    src="/hero-it.svg"
                    alt="Kurumsal IT Altyapısı"
                    width={560}
                    height={560}
                    className="w-full drop-shadow-2xl"
                    priority
                    unoptimized
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Odak alanı</div>
                    <div className="mt-2 text-lg font-bold text-white">Altyapı + Güvenlik</div>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Ağ, sunucu, bulut ve yedekleme katmanlarını birlikte ele alıyoruz.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Teslim modeli</div>
                    <div className="mt-2 text-lg font-bold text-white">Kurulumdan desteğe</div>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Planlama, devreye alma, dokümantasyon ve operasyon takibi tek çatı altında.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
