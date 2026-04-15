"use client";
import { useEffect, useState } from "react";
import { ArrowRight, Shield, CheckCircle, Zap } from "lucide-react";
import ITInfraDiagram from "./ITInfraDiagram";

const headlines = [
  "Kurumsal BT Altyapisi",
  "Guvenli Ag Cozumleri",
  "Microsoft Silver Partner",
  "Veri Yedekleme Uzmani",
];

const features = [
  "ISO 27001 Sertifikalı",
  "Microsoft Silver Partner",
  "Ücretsiz Analiz",
];

export default function HeroSection() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % headlines.length),
      3000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero-tech relative min-h-screen flex items-center overflow-hidden">
      {/* Teknolojik arka plan image */}
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

      {/* Animated particles */}
      <div className="absolute inset-0 z-[2]">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-20 bg-gradient-to-b from-transparent via-[#F5A623]/30 to-transparent rounded-full animate-pulse"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Icerik */}
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20"
        style={{ zIndex: 10 }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Sol - metin */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-sm font-medium mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5A623] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5A623]"></span>
              </span>
              Turkiye&apos;nin Guvenilir BT Cozum Ortagi
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-white">Teknolojide</span>
              <br />
              <span className="text-gradient relative">
                {headlines[idx]}
                <Zap className="absolute -right-8 top-0 w-6 h-6 text-[#F5A623] animate-pulse hidden sm:block" />
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              Sistem danismanligindan BT guvenligine, veri yedeklemeden ag
              altyapisina kadar kurumsal teknoloji ihtiyaclarinizda yaninizdayiz.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                >
                  <CheckCircle className="w-4 h-4 text-[#F5A623]" />
                  {feature}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 max-w-md">
              <div className="relative">
                <div className="text-3xl sm:text-4xl font-black text-gradient">
                  500+
                </div>
                <div className="text-sm text-gray-400 mt-1">Mutlu Musteri</div>
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 h-8 w-px bg-white/10 hidden sm:block" />
              </div>
              <div className="relative">
                <div className="text-3xl sm:text-4xl font-black text-gradient">
                  10+
                </div>
                <div className="text-sm text-gray-400 mt-1">Yıl Deneyim</div>
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 h-8 w-px bg-white/10 hidden sm:block" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-gradient">
                  7/24
                </div>
                <div className="text-sm text-gray-400 mt-1">Teknik Destek</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#hizmetler"
                className="group flex items-center gap-2 px-7 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#FFD700] transition-all hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5 active:scale-95"
              >
                Hizmetlerimiz
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/iletisim"
                className="group flex items-center gap-2 px-7 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all hover:-translate-y-0.5 border border-white/10"
              >
                <Shield className="w-5 h-5 text-[#F5A623]" />
                Ucretsiz Analiz
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex items-center gap-4 pt-6 border-t border-white/5">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F5A623] to-[#FFD700] border-2 border-[#0A0E1A] flex items-center justify-center text-[#0A0E1A] text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="text-white font-medium">500+ firma</span>
                <span className="text-gray-400"> bizi tercih ediyor</span>
              </div>
            </div>
          </div>

          {/* Sag - IT Altyapi Semasi */}
          <div className="hidden lg:flex items-center justify-center relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#F5A623]/10 rounded-full blur-3xl scale-75" />
            <div className="relative z-10">
              <ITInfraDiagram />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-500 text-xs uppercase tracking-widest">
          Asagi Kaydir
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#F5A623] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
