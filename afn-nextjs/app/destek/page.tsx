"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Headphones, Clock, Shield } from "lucide-react";

const categories = [
  "Sunucu / Donanım",
  "Ağ / İnternet",
  "Yazılım / İşletim Sistemi",
  "E-posta / Microsoft 365",
  "Güvenlik / Firewall",
  "Yedekleme / Kurtarma",
  "Sanallaştırma",
  "Diğer",
];

const priorities = [
  { value: "low", label: "Düşük — Genel soru veya bilgi talebi", color: "text-green-400" },
  { value: "medium", label: "Orta — Çalışmayı etkiliyor ama geçici çözüm var", color: "text-yellow-400" },
  { value: "high", label: "Yüksek — Önemli bir sistem çalışmıyor", color: "text-orange-400" },
  { value: "critical", label: "Kritik — Tüm sistem/kullanıcılar etkilendi", color: "text-red-400" },
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

      {/* Hero */}
      <section className="pt-36 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-sm font-semibold mb-6">
            <Headphones className="w-4 h-4" /> 7/24 Teknik Destek
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Destek Talebi <span className="text-gradient">Oluşturun</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Formu doldurun, ekibimiz en kısa sürede sizinle iletişime geçsin.
          </p>
        </div>
      </section>

      {/* SLA bilgisi */}
      <section className="pb-12 px-4">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-4">
          {[
            { icon: AlertCircle, color: "text-red-400", label: "Kritik", val: "< 1 saat" },
            { icon: Clock, color: "text-orange-400", label: "Yüksek", val: "< 4 saat" },
            { icon: Shield, color: "text-green-400", label: "Orta / Düşük", val: "< 1 iş günü" },
          ].map((s) => (
            <div key={s.label} className="gradient-border rounded-xl p-4 flex items-center gap-3">
              <s.icon className={`w-6 h-6 flex-shrink-0 ${s.color}`} />
              <div>
                <div className="text-xs text-gray-400">{s.label} Öncelik</div>
                <div className="font-bold text-white text-sm">İlk yanıt {s.val}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          {status === "success" ? (
            <div className="gradient-border rounded-2xl p-12 text-center">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-3">Talebiniz Alındı!</h2>
              <p className="text-gray-400 mb-6">Destek ekibimiz önceliğinize göre en kısa sürede sizinle iletişime geçecek.</p>
              <button onClick={() => setStatus("idle")}
                className="px-6 py-3 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all">
                Yeni Talep Oluştur
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="gradient-border rounded-2xl p-8 space-y-6">
              {/* Kişisel bilgiler */}
              <div>
                <h2 className="text-lg font-bold text-white mb-4 pb-2 border-b border-white/10">İletişim Bilgileri</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "name", label: "Ad Soyad *", type: "text", required: true },
                    { name: "email", label: "E-posta *", type: "email", required: true },
                    { name: "phone", label: "Telefon", type: "tel", required: false },
                    { name: "company", label: "Firma Adı", type: "text", required: false },
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

              {/* Talep detayları */}
              <div>
                <h2 className="text-lg font-bold text-white mb-4 pb-2 border-b border-white/10">Talep Detayları</h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Kategori *</label>
                    <select name="category" value={form.category} onChange={handleChange} required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#F5A623]/50 transition-colors text-sm">
                      <option value="" className="bg-[#0A0E1A]">Seçiniz...</option>
                      {categories.map((c) => <option key={c} value={c} className="bg-[#0A0E1A]">{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Öncelik *</label>
                    <select name="priority" value={form.priority} onChange={handleChange} required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#F5A623]/50 transition-colors text-sm">
                      {priorities.map((p) => <option key={p.value} value={p.value} className="bg-[#0A0E1A]">{p.label}</option>)}
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-gray-400 mb-1">Konu *</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} required
                    placeholder="Sorunu kısaca özetleyin"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#F5A623]/50 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Açıklama *</label>
                  <textarea name="description" value={form.description} onChange={handleChange} required rows={6}
                    placeholder="Sorunu detaylı açıklayın. Hata mesajları, etkilenen sistemler ve daha önce denenen çözümleri belirtin."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#F5A623]/50 transition-colors text-sm resize-none"
                  />
                </div>
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  Bir hata oluştu. Lütfen tekrar deneyin veya <a href="tel:+902165725040" className="underline">0216 572 50 40</a>'ı arayın.
                </div>
              )}

              <button type="submit" disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                {status === "sending" ? "Gönderiliyor..." : <><Send className="w-5 h-5" /> Destek Talebi Gönder</>}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
