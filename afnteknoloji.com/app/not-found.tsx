import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ background: "#0A0E1A", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 24px 80px",
        }}
      >
        {/* Dekoratif arka plan halkasi */}
        <div
          style={{
            position: "absolute",
            width: 480,
            height: 480,
            borderRadius: "50%",
            border: "1px solid rgba(245,166,35,0.08)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 320,
            height: 320,
            borderRadius: "50%",
            border: "1px solid rgba(245,166,35,0.12)",
            pointerEvents: "none",
          }}
        />

        {/* 404 Rakamı */}
        <div
          style={{
            fontSize: "clamp(100px, 20vw, 180px)",
            fontWeight: 900,
            color: "#F5A623",
            lineHeight: 1,
            letterSpacing: "-4px",
            textShadow: "0 0 80px rgba(245,166,35,0.25)",
            position: "relative",
            zIndex: 1,
          }}
        >
          404
        </div>

        {/* Ayırıcı çizgi */}
        <div
          style={{
            width: 80,
            height: 3,
            background: "linear-gradient(90deg, transparent, #F5A623, transparent)",
            borderRadius: 2,
            margin: "20px auto 28px",
            position: "relative",
            zIndex: 1,
          }}
        />

        {/* Başlık */}
        <h1
          style={{
            fontSize: "clamp(22px, 4vw, 32px)",
            fontWeight: 700,
            color: "#fff",
            margin: "0 0 12px",
            position: "relative",
            zIndex: 1,
          }}
        >
          Aradığınız sayfa bulunamadı
        </h1>

        {/* Alt metin */}
        <p
          style={{
            fontSize: 16,
            color: "#9ca3af",
            maxWidth: 420,
            lineHeight: 1.7,
            margin: "0 0 40px",
            position: "relative",
            zIndex: 1,
          }}
        >
          Sayfa taşınmış, silinmiş ya da hiç var olmamış olabilir.
          Ana sayfaya dönerek devam edebilirsiniz.
        </p>

        {/* Butonlar */}
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "13px 32px",
              background: "#F5A623",
              color: "#000",
              fontWeight: 700,
              fontSize: 15,
              borderRadius: 10,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
          >
            Anasayfaya Dön
          </Link>

          <Link
            href="/iletisim"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "13px 32px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#d1d5db",
              fontWeight: 600,
              fontSize: 15,
              borderRadius: 10,
              textDecoration: "none",
            }}
          >
            İletişime Geç
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
