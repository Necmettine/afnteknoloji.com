"use client";

import { Award, Users, CheckCircle } from "lucide-react";

const certifications = ["MCT", "MCSE", "VCP", "CISSP", "NSE7", "PMP", "ITIL", "Azure", "AWS", "Prince2"];

export default function TeamSection() {
  return (
    <section className="py-20 bg-[#0A0E1A] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0d1221] to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 bg-[#F5A623]/10 border border-[#F5A623]/20 rounded-full text-[#F5A623] text-sm font-medium mb-4">
            Ekibimiz
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-gradient">Uzman</span> Kadromuz
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sektörün en iyi uzmanlarından oluşan ekibimizle projelerinizi başarıyla hayata geçiriyoruz
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-4 mb-10">
          <div className="flex items-center gap-3 px-6 py-4 bg-white/[0.03] border border-white/10 rounded-2xl">
            <Users className="w-6 h-6 text-[#F5A623] shrink-0" />
            <div>
              <div className="text-2xl font-bold text-gradient">25+</div>
              <div className="text-gray-400 text-sm">Uzman Kadro</div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-6 py-4 bg-white/[0.03] border border-white/10 rounded-2xl">
            <Award className="w-6 h-6 text-[#F5A623] shrink-0" />
            <div>
              <div className="text-2xl font-bold text-gradient">100+</div>
              <div className="text-gray-400 text-sm">Sertifika</div>
            </div>
          </div>
        </div>

        {/* Uzmanlık + kariyer yan yana */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Uzmanlık kartı */}
          <div className="rounded-2xl border border-[#F5A623]/20 bg-[#F5A623]/5 p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5A623] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-[#0A0E1A]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Sektör Uzmanlığı</h3>
                <p className="text-gray-300 text-sm mt-1">
                  15+ yıllık BT sektörü deneyimi. Microsoft, VMware ve Fortinet sertifikalı.
                </p>
              </div>
            </div>
            {/* MVP Badge */}
            <div className="flex items-center gap-2 mb-5 p-3 bg-[#0078D4]/10 border border-[#0078D4]/30 rounded-xl">
              <span className="text-xl">🏆</span>
              <div>
                <div className="text-[#4FC3F7] font-semibold text-sm">Microsoft MVP</div>
                <div className="text-gray-400 text-xs">Most Valuable Professional</div>
              </div>
            </div>
            {/* Sertifikalar */}
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1 bg-[#F5A623]/10 border border-[#F5A623]/20 rounded-lg text-[#F5A623] text-xs font-semibold"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Kariyer CTA */}
          <div className="rounded-2xl border border-white/10 bg-[#0d1221] p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-white font-bold text-xl mb-2">Ekibimize Katılın</h3>
              <p className="text-gray-400 text-sm mb-5">
                Türkiye&apos;nin önde gelen kurumsal müşterileriyle çalışma fırsatı. Sürekli eğitim, sertifikasyon desteği ve güçlü bir ekip sizi bekliyor.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Microsoft, Huawei, VMware, Fortinet teknolojileriyle çalışma",
                  "Sürekli eğitim ve sertifikasyon desteği",
                  "Maltepe & Beylikdüzü ofisleri",
                  "Gerçek kurumsal proje deneyimi",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#F5A623] mt-0.5 shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="/kariyer"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#F5A623] text-[#0A0E1A] font-bold rounded-xl hover:bg-[#e6951a] transition-all hover:-translate-y-0.5 text-center"
            >
              💼 Kariyer Başvurusu Yap
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
