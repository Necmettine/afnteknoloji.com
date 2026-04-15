"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, CheckCircle, Send, Users, Briefcase } from "lucide-react";

const certifications = ["MCT", "MCSE", "VCP", "CISSP", "NSE7", "PMP", "ITIL", "Azure", "AWS", "Prince2"];

const positions = [
  "Sistem Mühendisi",
  "Ağ Mühendisi",
  "Siber Güvenlik Uzmanı",
  "BT Destek Uzmanı",
  "Proje Yöneticisi",
  "Yazılım Geliştirici",
  "Satış & Çözüm Uzmanı",
  "Diğer",
];

const benefits = [
  "Microsoft, Huawei, VMware, Fortinet teknolojileriyle çalışma fırsatı",
  "Sürekli eğitim ve sertifikasyon desteği",
  "Esnek çalışma modeli — Maltepe & Beylikdüzü ofisleri",
  "500+ kurumsal müşteriye gerçek proje deneyimi",
  "Güçlü ve uzman bir ekiple çalışma ortamı",
  "Kariyer gelişimi ve mentor desteği",
];

export default function KariyerPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", position: "", experience: "", linkedin: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/kariyer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", position: "", experience: "", linkedin: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="bg-[#0A0E1A] min-h-screen text-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 text-[#F5A623] text-sm font-medium mb-6">
            <Briefcase className="w-4 h-4" />
            Kariyer
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="text-white">Ekibimize</span>{" "}
            <span className="text-gradient">Katılın</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Türkiye&apos;nin önde gelen kurumsal müşterileriyle çalışın. Sürekli gelişin, uzmanlaşın ve kariyer hedeflerinize ulaşın.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "25+", label: "Uzman Kadro" },
            { value: "100+", label: "Sertifika" },
            { value: "500+", label: "Kurumsal Müşteri" },
            { value: "10+", label: "Yıllık Deneyim" },
          ].map((s) => (
            <div key={s.label} className="text-center p-4 rounded-xl border border-white/5 bg-white/[0.02]">
              <div className="text-2xl font-bold text-gradient">{s.value}</div>
              <div className="text-gray-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Ana içerik */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

          {/* Sol — bilgi */}
          <div className="space-y-6">
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
              {/* MVP */}
              <div className="flex items-center gap-2 mb-5 p-3 bg-[#0078D4]/10 border border-[#0078D4]/30 rounded-xl">
                <span className="text-xl">🏆</span>
                <div>
                  <div className="text-[#4FC3F7] font-semibold text-sm">Microsoft MVP</div>
                  <div className="text-gray-400 text-xs">Most Valuable Professional</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span key={cert} className="px-3 py-1 bg-[#F5A623]/10 border border-[#F5A623]/20 rounded-lg text-[#F5A623] text-xs font-semibold">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Neden AFN */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-[#F5A623]" />
                <h4 className="text-white font-bold">Neden AFN Teknoloji?</h4>
              </div>
              <div className="space-y-3">
                {benefits.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#F5A623] mt-0.5 shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sağ — form */}
          <div className="rounded-2xl border border-white/10 bg-[#0d1221] p-8">
            <h2 className="text-white font-bold text-2xl mb-2">İş Başvurusu</h2>
            <p className="text-gray-400 text-sm mb-6">Formu doldurun, en kısa sürede sizi arayalım.</p>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle className="w-20 h-20 text-green-400 mb-4" />
                <h3 className="text-white font-bold text-2xl mb-2">Başvurunuz Alındı!</h3>
                <p className="text-gray-400">En kısa sürede sizinle iletişime geçeceğiz.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Ad Soyad *</label>
                    <input
                      required type="text" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Adınız Soyadınız"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#F5A623]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Telefon *</label>
                    <input
                      required type="tel" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="05XX XXX XX XX"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#F5A623]/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">E-posta *</label>
                  <input
                    required type="email" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="email@ornek.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#F5A623]/50 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Başvurulan Pozisyon *</label>
                    <select
                      required value={form.position}
                      onChange={(e) => setForm({ ...form, position: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#F5A623]/50 transition-colors"
                    >
                      <option value="" disabled className="bg-[#0d1221]">Seçiniz</option>
                      {positions.map((p) => (
                        <option key={p} value={p} className="bg-[#0d1221]">{p}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Deneyim (yıl)</label>
                    <input
                      type="text" value={form.experience}
                      onChange={(e) => setForm({ ...form, experience: e.target.value })}
                      placeholder="Örn: 3 yıl"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#F5A623]/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">LinkedIn Profili</label>
                  <input
                    type="url" value={form.linkedin}
                    onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
                    placeholder="https://linkedin.com/in/..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#F5A623]/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">Ön Yazı / Mesaj</label>
                  <textarea
                    rows={4} value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Kendinizden kısaca bahsedin..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#F5A623]/50 transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">Bir hata oluştu. Lütfen tekrar deneyin.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#F5A623] text-[#0A0E1A] font-bold rounded-xl hover:bg-[#e6951a] transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <span className="w-5 h-5 border-2 border-[#0A0E1A] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <><Send className="w-4 h-4" /> Başvuruyu Gönder</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
