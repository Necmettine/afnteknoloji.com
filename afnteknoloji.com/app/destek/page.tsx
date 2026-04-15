"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Headphones, Clock, Shield } from "lucide-react";

const categories = [
  "Sunucu / Donanim",
  "Ag / Internet",
  "Yazilim / Isletim Sistemi",
  "E-posta / Microsoft 365",
  "Guvenlik / Firewall",
  "Yedekleme / Kurtarma",
  "Sanallastirma",
  "Diger",
];

const priorities = [
  { value: "low", label: "Dusuk - Genel soru veya bilgi talebi", color: "text-green-400" },
  { value: "medium", label: "Orta - Calismayi etkiliyor ama gecici cozum var", color: "text-yellow-400" },
  { value: "high", label: "Yuksek - Onemli bir sistem calismiyor", color: "text-orange-400" },
  { value: "critical", label: "Kritik - Tum sistem/kullanicilar etkilendi", color: "text-red-400" },
];

export default function DestekPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    category: "", priority: "medium", subject: "", description: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/destek", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        if (typeof window !== "undefined" && (window as any).dataLayer) {
          (window as any).dataLayer.push({ event: "contact_form_submit", form_type: "destek" });
        }
        setStatus("success");
        setForm({ name: "", email: "", phone: "", company: "", category: "", priority: "medium", subject: "", description: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="bg-[#0A0E1A] text-white min-h-screen">
      <Header />

      <section className="pt-36 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-sm font-semibold mb-6">
            <Headphones className="w-4 h-4" /> 7/24 Teknik Destek
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Destek Talebi <span className="text-gradient">Olusturun</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Formu doldurun, ekibimiz en kisa surede sizinle iletisime gecsin.
          </p>
        </div>
      </section>

      <section className="pb-12 px-4">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-4">
          {[
            { icon: AlertCircle, color: "text-red-400", label: "Kritik", val: "< 1 saat" },
            { icon: Clock, color: "text-orange-400", label: "Yuksek", val: "< 4 saat" },
            { icon: Shield, color: "text-green-400", label: "Orta / Dusuk", val: "< 1 is gunu" },
          ].map((s) => (
            <div key={s.label} className="gradient-border rounded-xl p-4 flex items-center gap-3">
              <s.icon className={`w-6 h-6 flex-shrink-0 ${s.color}`} />
              <div>
                <div className="text-xs text-gray-400">{s.label} Oncelik</div>
                <div className="font-bold text-white text-sm">Ilk yanit {s.val}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          {status === "success" ? (
            <div className="gradient-border rounded-2xl p-12 text-center">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-3">Talebiniz Alindi!</h2>
              <p className="text-gray-400 mb-6">Destek ekibimiz onceliginize gore en kisa surede sizinle iletisime gececek.</p>
              <button onClick={() => setStatus("idle")}
                className="px-6 py-3 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all">
                Yeni Talep Olustur
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="gradient-border rounded-2xl p-8 space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white mb-4 pb-2 border-b border-white/10">Iletisim Bilgileri</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "name", label: "Ad Soyad *", type: "text", required: true },
                    { name: "email", label: "E-posta *", type: "email", required: true },
                    { name: "phone", label: "Telefon", type: "tel", required: false },
                    { name: "company", label: "Firma Adi", type: "text", required: false },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-sm text-gray-400 mb-1">{f.label}</label>
                      <input
                        type={f.type} name={f.name} value={(form as Record<string, string>)[f.name]}
                        onChange={handleChange} required={f.required}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#F5A623]/50 transition-colors text-sm"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-4 pb-2 border-b border-white/10">Talep Detaylari</h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Kategori *</label>
                    <select name="category" value={form.category} onChange={handleChange} required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#F5A623]/50 transition-colors text-sm">
                      <option value="" className="bg-[#0A0E1A]">Seciniz...</option>
                      {categories.map((c) => <option key={c} value={c} className="bg-[#0A0E1A]">{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Oncelik *</label>
                    <select name="priority" value={form.priority} onChange={handleChange} required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#F5A623]/50 transition-colors text-sm">
                      {priorities.map((p) => <option key={p.value} value={p.value} className="bg-[#0A0E1A]">{p.label}</option>)}
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-gray-400 mb-1">Konu *</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} required
                    placeholder="Sorunu kisaca ozetleyin"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#F5A623]/50 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Aciklama *</label>
                  <textarea name="description" value={form.description} onChange={handleChange} required rows={6}
                    placeholder="Sorunu detayli aciklayin. Hata mesajlari, etkilenen sistemler ve daha once denenmis cozumleri belirtin."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#F5A623]/50 transition-colors text-sm resize-none"
                  />
                </div>
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  Bir hata olustu. Lutfen tekrar deneyin veya <a href="tel:+902165725040" className="underline">0216 572 50 40</a>'i arayin.
                </div>
              )}

              <button type="submit" disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                {status === "sending" ? "Gonderiliyor..." : <><Send className="w-5 h-5" /> Destek Talebi Gonder</>}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
