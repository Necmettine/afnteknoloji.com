"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
};

type AnalyticsWindow = Window & {
  dataLayer?: Array<Record<string, string>>;
};

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/iletisim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setForm(emptyForm);
      const analyticsWindow = window as AnalyticsWindow;
      if (analyticsWindow.dataLayer) {
        analyticsWindow.dataLayer.push({ event: "contact_form_submit", form_type: "iletisim" });
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="panel-surface rounded-[28px] p-8">
      <h2 className="mb-2 text-xl font-bold text-white">Mesaj Gönderin</h2>
      <p className="mb-6 text-sm leading-6 text-slate-400">
        Talebinizi kısa ve net biçimde iletin, ekibimiz size en kısa sürede dönüş sağlasın.
      </p>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Adınız Soyadınız *</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Adınız Soyadınız"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#06B6D4]/50 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">E-posta *</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="email@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#06B6D4]/50 transition-colors"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Telefon</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+90 5xx xxx xx xx"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#06B6D4]/50 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Firma</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Firma adınız"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#06B6D4]/50 transition-colors"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Konu</label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Konu başlığı"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#06B6D4]/50 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Mesajınız *</label>
          <textarea
            rows={5}
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            placeholder="İhtiyacınızı, proje kapsamını veya talebinizi yazın..."
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#06B6D4]/50 transition-colors resize-none"
          />
        </div>

        {status === "success" && (
          <div className="flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-300">
            <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
            Mesajınız kaydedildi. Ekibimiz en kısa sürede sizinle iletişime geçecek.
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
            Mesaj gönderilirken bir sorun oluştu. Lütfen tekrar deneyin veya bizi arayın.
          </div>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full inline-flex items-center justify-center gap-2 py-4 bg-[#06B6D4] text-black font-bold rounded-xl hover:bg-[#0891B2] transition-all hover:shadow-lg hover:shadow-cyan-500/30 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Send className="h-5 w-5" />
          {status === "sending" ? "Gönderiliyor..." : "Mesajı Gönder"}
        </button>
      </form>
    </div>
  );
}
