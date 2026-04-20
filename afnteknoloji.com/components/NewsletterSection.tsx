"use client";

import { useState } from "react";
import { Bell, CheckCircle2, XCircle, AlertCircle } from "lucide-react";

type Mode = "subscribe" | "unsubscribe";
type Status = "idle" | "sending" | "success" | "error";

export default function NewsletterSection() {
  const [mode, setMode] = useState<Mode>("subscribe");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  // Unsubscribe onay adımı
  const [confirmStep, setConfirmStep] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === "unsubscribe" && !confirmStep) {
      setConfirmStep(true);
      return;
    }

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: mode, email: email.trim(), name: name.trim() || undefined }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setMessage(data.message || (mode === "subscribe" ? "Başarıyla abone oldunuz!" : "Aboneliğiniz iptal edildi."));
        setEmail("");
        setName("");
        setConfirmStep(false);
      } else {
        setStatus("error");
        setMessage(data.error || "Bir hata oluştu, lütfen tekrar deneyin.");
        setConfirmStep(false);
      }
    } catch {
      setStatus("error");
      setMessage("Bağlantı hatası, lütfen tekrar deneyin.");
      setConfirmStep(false);
    }
  };

  const reset = () => {
    setStatus("idle");
    setMessage("");
    setEmail("");
    setName("");
    setConfirmStep(false);
  };

  return (
    <section className="mt-16">
      <div className="gradient-border rounded-2xl p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#F5A623]/10">
            <Bell className="h-6 w-6 text-[#F5A623]" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">E-posta Bülteni</h2>
            <p className="text-sm text-gray-400">Teknoloji haberleri ve güncellemelerimizden haberdar olun.</p>
          </div>
        </div>

        {/* Sekme seçimi */}
        <div className="mb-6 flex gap-2">
          <button
            type="button"
            onClick={() => { setMode("subscribe"); reset(); }}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              mode === "subscribe"
                ? "bg-[#F5A623] text-black"
                : "bg-white/5 text-gray-300 hover:bg-white/10"
            }`}
          >
            Abone Ol
          </button>
          <button
            type="button"
            onClick={() => { setMode("unsubscribe"); reset(); }}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              mode === "unsubscribe"
                ? "bg-red-500 text-white"
                : "bg-white/5 text-gray-300 hover:bg-white/10"
            }`}
          >
            Abonelikten Çık
          </button>
        </div>

        {/* Başarı / Hata mesajı */}
        {status === "success" && (
          <div className="mb-4 flex items-center gap-3 rounded-xl bg-green-500/10 border border-green-500/20 p-4">
            <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-400" />
            <p className="text-sm text-green-300">{message}</p>
          </div>
        )}
        {status === "error" && (
          <div className="mb-4 flex items-center gap-3 rounded-xl bg-red-500/10 border border-red-500/20 p-4">
            <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-400" />
            <p className="text-sm text-red-300">{message}</p>
          </div>
        )}

        {/* Onay adımı (unsubscribe) */}
        {confirmStep && mode === "unsubscribe" && status === "idle" && (
          <div className="mb-4 rounded-xl bg-red-500/10 border border-red-500/20 p-4">
            <div className="flex items-center gap-3 mb-3">
              <XCircle className="h-5 w-5 flex-shrink-0 text-red-400" />
              <p className="text-sm text-red-300">
                <strong>{email}</strong> adresini bülten listemizden kaldırmak istediğinize emin misiniz?
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleSubmit as unknown as React.MouseEventHandler}
                className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 transition-colors"
              >
                Evet, çıkar
              </button>
              <button
                type="button"
                onClick={() => setConfirmStep(false)}
                className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-white/20 transition-colors"
              >
                İptal
              </button>
            </div>
          </div>
        )}

        {/* Form */}
        {!confirmStep && status !== "success" && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {mode === "subscribe" && (
              <input
                type="text"
                placeholder="Adınız (opsiyonel)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 min-w-[180px] rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-[#F5A623]/50 focus:ring-1 focus:ring-[#F5A623]/20 transition-colors"
              />
            )}
            <input
              type="email"
              required
              placeholder="E-posta adresiniz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 min-w-[200px] rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-[#F5A623]/50 focus:ring-1 focus:ring-[#F5A623]/20 transition-colors"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className={`rounded-xl px-6 py-3 text-sm font-semibold transition-all disabled:opacity-60 ${
                mode === "subscribe"
                  ? "bg-[#F5A623] text-black hover:bg-[#e09610]"
                  : "bg-red-500 text-white hover:bg-red-600"
              }`}
            >
              {status === "sending"
                ? "Gönderiliyor..."
                : mode === "subscribe"
                ? "Abone Ol"
                : "Abonelikten Çık"}
            </button>
          </form>
        )}

        {status === "success" && (
          <button
            type="button"
            onClick={reset}
            className="mt-2 text-sm text-gray-400 hover:text-white transition-colors underline"
          >
            Tekrar işlem yap
          </button>
        )}
      </div>
    </section>
  );
}
