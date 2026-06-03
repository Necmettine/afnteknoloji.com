"use client";
import { useState, useEffect } from "react";

export default function UnsubscribePage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const e = params.get("email");
    if (e) setEmail(decodeURIComponent(e));
  }, []);

  async function handleUnsubscribe() {
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/mailing-unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("done");
        setMessage("E-posta adresiniz listemizden çıkarıldı. Artık tanıtım maili almayacaksınız.");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Bir hata oluştu.");
      }
    } catch {
      setStatus("error");
      setMessage("Bağlantı hatası. Lütfen tekrar deneyin.");
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Arial, sans-serif" }}>
      <div style={{ background: "#fff", borderRadius: 16, padding: "40px 36px", maxWidth: 420, width: "100%", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/mailing/logo.png" alt="AFN Teknoloji" style={{ height: 40, width: "auto" }} />
        </div>

        {status === "done" ? (
          <div style={{ textAlign: "center" }}>
            <div style={{ width: 56, height: 56, background: "#dcfce7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 24 }}>✓</div>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>İşlem Tamamlandı</h2>
            <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.6 }}>{message}</p>
            <a href="https://afnteknoloji.com" style={{ display: "inline-block", marginTop: 20, color: "#f97316", fontSize: 13, textDecoration: "none", fontWeight: 600 }}>
              afnteknoloji.com →
            </a>
          </div>
        ) : (
          <>
            <h1 style={{ fontSize: 20, fontWeight: 800, color: "#0f172a", marginBottom: 8, textAlign: "center" }}>
              Listeden Çıkmak İstiyorum
            </h1>
            <p style={{ fontSize: 13, color: "#64748b", marginBottom: 24, textAlign: "center", lineHeight: 1.6 }}>
              Aşağıdaki e-posta adresi tanıtım mail listemizden çıkarılacaktır.
            </p>

            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: "12px 16px", marginBottom: 24, fontSize: 14, color: "#0f172a", fontWeight: 600 }}>
              {email || "E-posta adresi bulunamadı"}
            </div>

            {status === "error" && (
              <div style={{ background: "#fee2e2", border: "1px solid #fca5a5", borderRadius: 8, padding: "10px 14px", marginBottom: 16, fontSize: 13, color: "#b91c1c" }}>
                {message}
              </div>
            )}

            <button
              onClick={handleUnsubscribe}
              disabled={!email || status === "loading"}
              style={{
                width: "100%", padding: "13px 0", background: email ? "#0f172a" : "#e2e8f0",
                color: email ? "#fff" : "#94a3b8", border: "none", borderRadius: 8,
                fontSize: 14, fontWeight: 700, cursor: email ? "pointer" : "not-allowed",
                marginBottom: 12
              }}
            >
              {status === "loading" ? "İşleniyor..." : "Evet, Listeden Çıkar"}
            </button>

            <a href="https://afnteknoloji.com" style={{ display: "block", textAlign: "center", fontSize: 13, color: "#94a3b8", textDecoration: "none" }}>
              İptal — Siteye Dön
            </a>
          </>
        )}
      </div>
    </div>
  );
}
