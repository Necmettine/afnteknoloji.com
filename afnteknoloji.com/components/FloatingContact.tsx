"use client";

import { useState, useEffect } from "react";
import { Phone, X, MessageCircle, Send } from "lucide-react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPulse(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "902165725040";
    const defaultMessage = message || "Merhaba, bilgi almak istiyorum.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, "_blank");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`fixed bottom-24 right-6 z-[999] w-80 transition-all duration-300 ${
          isOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0A0E1A] shadow-2xl">
          <div className="bg-[#25D366] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">AFN Teknoloji</h3>
                <p className="flex items-center gap-1 text-sm text-white/80">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                  Çevrimiçi - Hemen cevap veriyoruz
                </p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 transition-colors hover:text-white" aria-label="Kapat">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="bg-[#0d1221] p-4">
            <div className="mb-4 flex gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#25D366]">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <div className="max-w-[85%] rounded-2xl rounded-tl-none border border-white/10 bg-white/5 p-3">
                <p className="text-sm text-white">
                  Merhaba. Size nasıl yardımcı olabiliriz? BT altyapısı, siber güvenlik veya bulut çözümleri hakkında bilgi almak için mesajınızı yazın.
                </p>
                <span className="mt-1 block text-xs text-white/40">Şimdi</span>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleWhatsAppClick()}
                placeholder="Mesajınızı yazın..."
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white transition-colors placeholder:text-white/40 focus:border-[#25D366]/50 focus:outline-none"
              />
              <button onClick={handleWhatsAppClick} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] transition-colors hover:bg-[#20BD5A]" aria-label="Mesaj gönder">
                <Send className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>

          <div className="border-t border-white/5 bg-[#0d1221] px-4 py-2">
            <p className="text-center text-xs text-white/40">WhatsApp üzerinden bağlantı kurulacaktır</p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-[998] flex flex-col gap-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
          style={{ backgroundColor: "#25D366", WebkitTapHighlightColor: "transparent" }}
          aria-label="WhatsApp ile iletişime geç"
        >
          {showPulse && !isOpen && (
            <>
              <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
              <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" style={{ animationDelay: "0.5s" }} />
            </>
          )}

          <div className={`transition-transform duration-300 ${isOpen ? "rotate-90 scale-0" : "rotate-0 scale-100"}`}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>

          <div className={`absolute transition-transform duration-300 ${isOpen ? "rotate-0 scale-100" : "rotate-90 scale-0"}`}>
            <X className="h-6 w-6 text-white" />
          </div>

          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 animate-bounce items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              1
            </span>
          )}
        </button>

        <a
          href="tel:+902165725040"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F5A623] shadow-lg transition-transform hover:scale-110 active:scale-95"
          style={{ WebkitTapHighlightColor: "transparent" }}
          aria-label="Telefon ile iletişime geç"
        >
          <Phone className="h-6 w-6 text-black" />
        </a>
      </div>

      {!isOpen && (
        <div className="fixed bottom-28 right-24 z-[997] hidden animate-pulse md:block">
          <div className="relative rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-lg">
            Size nasıl yardımcı olabiliriz?
            <div className="absolute top-1/2 -right-2 h-0 w-0 -translate-y-1/2 transform border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-white" />
          </div>
        </div>
      )}
    </>
  );
}
