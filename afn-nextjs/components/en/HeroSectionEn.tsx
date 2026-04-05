"use client";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const headlines = [
  "Enterprise IT Infrastructure",
  "Secure Network Solutions",
  "Microsoft Silver Partner",
  "Data Backup Specialist",
];

export default function HeroSectionEn() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % headlines.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero-tech relative min-h-screen flex items-center overflow-hidden">
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20" style={{ zIndex: 10 }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse" />
              Turkey's trusted IT solutions partner
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-white">Technology that powers</span><br />
              <span className="text-gradient">{headlines[idx]}</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
              From system consulting to IT security, from data backup to network infrastructure, we are here for your
              enterprise technology needs.
            </p>

            <div className="flex gap-8 mb-10">
              <div><div className="text-3xl font-black text-[#F5A623]">500+</div><div className="text-sm text-gray-400 mt-1">Happy Clients</div></div>
              <div><div className="text-3xl font-black text-[#F5A623]">15+</div><div className="text-sm text-gray-400 mt-1">Years Experience</div></div>
              <div><div className="text-3xl font-black text-[#F5A623]">7/24</div><div className="text-sm text-gray-400 mt-1">Technical Support</div></div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#services" className="flex items-center gap-2 px-7 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5 active:scale-95">
                Our Services <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/en/iletisim" className="flex items-center gap-2 px-7 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all hover:-translate-y-0.5">
                Get a Quote
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <Image
              src="/hero-globe.svg"
              alt="Global Network"
              width={560}
              height={560}
              className="w-full max-w-[560px] drop-shadow-2xl"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
