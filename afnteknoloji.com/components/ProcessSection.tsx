"use client";

import { Search, BarChart3, Settings, HeadphonesIcon, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Kesif ve Analiz",
    description:
      "Mevcut BT altyapinizi ve ihtiyaclarinizi detayli olarak analiz ediyoruz. Sistemlerinizi inceleyerek en uygun cozumu belirliyoruz.",
    details: ["Altyapi Auditi", "Ihtiyac Analizi", "Risk Degerlendirmesi"],
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Planlama ve Tasarim",
    description:
      "Size ozel cozum mimarisini tasarliyor, proje planini ve zaman cizelgesini hazirliyoruz. Butce ve kaynak optimizasyonu yapiyoruz.",
    details: ["Cozum Mimarisi", "Proje Plani", "Maliyet Analizi"],
  },
  {
    number: "03",
    icon: Settings,
    title: "Kurulum ve Entegrasyon",
    description:
      "Onaylanan cozumu titizlikle kuruyoruz. Mevcut sistemlerinizle sorunsuz entegrasyon sagliyoruz. Kesintisiz gecis garantisi veriyoruz.",
    details: ["Sistem Kurulumu", "Veri Gocusu", "Test ve Dogrulama"],
  },
  {
    number: "04",
    icon: HeadphonesIcon,
    title: "Destek ve Izleme",
    description:
      "7/24 teknik destek ve proaktif izleme hizmetleri sunuyoruz. Sistemlerinizi surekli optimize ediyor, guvenliginizi sagliyoruz.",
    details: ["7/24 Destek", "Proaktif Izleme", "Surekli Optimizasyon"],
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-[#0d1221] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F5A623]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#F5A623]/10 border border-[#F5A623]/20 rounded-full text-[#F5A623] text-sm font-medium mb-4">
            Calisma Surecimiz
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Nasil <span className="text-gradient">Calisiyoruz?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Projelerinizi basariyla hayata gecirmek icin takip ettigimiz
            sistematik ve kanıtlanmis surec
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line - Only between cards */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-[2px] z-0">
                  <div className="h-full bg-gradient-to-r from-[#F5A623]/40 to-[#F5A623]/10" />
                  <ArrowRight className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F5A623]/40" />
                </div>
              )}

              {/* Card */}
              <div className="relative bg-[#0A0E1A] border border-white/5 rounded-2xl p-6 h-full transition-all duration-300 hover:border-[#F5A623]/30 hover:shadow-[0_0_30px_rgba(245,166,35,0.1)] group-hover:-translate-y-1">
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#F5A623] rounded-full flex items-center justify-center text-[#0A0E1A] font-bold text-sm">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#F5A623]/10 border border-[#F5A623]/20 flex items-center justify-center mb-4 group-hover:bg-[#F5A623]/20 transition-colors">
                  <step.icon className="w-7 h-7 text-[#F5A623]" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/iletisim"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5A623] text-[#0A0E1A] font-semibold rounded-full hover:bg-[#FFD700] transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,166,35,0.3)]"
          >
            Ucretsiz Analiz Isteyin
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
