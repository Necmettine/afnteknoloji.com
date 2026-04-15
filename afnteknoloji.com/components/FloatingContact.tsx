"use client";
import { useState, useEffect } from "react";
import { Phone, X, MessageCircle, Send } from "lucide-react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const [message, setMessage] = useState("");

  // 5 saniye sonra pulse animasyonunu goster
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
      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-[999] w-80 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-[#0A0E1A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#25D366] p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold">AFN Teknoloji</h3>
                <p className="text-white/80 text-sm flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  Cevrimici - Hemen Cevap Veriyoruz
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#0d1221]">
            {/* Bot Message */}
            <div className="flex gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-3 max-w-[85%]">
                <p className="text-white text-sm">
                  Merhaba! Size nasil yardimci olabiliriz? BT altyapisi, siber
                  guvenlik veya bulut cozumleri hakkinda bilgi almak icin
                  mesajinizi yazin.
                </p>
                <span className="text-white/40 text-xs mt-1 block">Simdi</span>
              </div>
            </div>

            {/* Input Area */}
            <div className="flex gap-2 mt-4">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleWhatsAppClick()}
                placeholder="Mesajinizi yazin..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#25D366]/50 transition-colors"
              />
              <button
                onClick={handleWhatsAppClick}
                className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:bg-[#20BD5A] transition-colors"
                aria-label="Mesaj gonder"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 py-2 bg-[#0d1221] border-t border-white/5">
            <p className="text-white/40 text-xs text-center">
              WhatsApp uzerinden baglanti kurulacaktir
            </p>
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-[998] flex flex-col gap-3">
        {/* WhatsApp Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group"
          style={{
            backgroundColor: "#25D366",
            WebkitTapHighlightColor: "transparent",
          }}
          aria-label="WhatsApp ile iletisime gec"
        >
          {/* Pulse Animation */}
          {showPulse && !isOpen && (
            <>
              <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
              <span
                className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"
                style={{ animationDelay: "0.5s" }}
              />
            </>
          )}

          {/* Icon */}
          <div
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-90 scale-0" : "rotate-0 scale-100"
            }`}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>

          <div
            className={`absolute transition-transform duration-300 ${
              isOpen ? "rotate-0 scale-100" : "rotate-90 scale-0"
            }`}
          >
            <X className="w-6 h-6 text-white" />
          </div>

          {/* Notification Badge */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce">
              1
            </span>
          )}
        </button>

        {/* Phone Button */}
        <a
          href="tel:+902165725040"
          className="w-14 h-14 rounded-full bg-[#F5A623] flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
          style={{ WebkitTapHighlightColor: "transparent" }}
          aria-label="Telefon ile iletisime gec"
        >
          <Phone className="w-6 h-6 text-black" />
        </a>
      </div>

      {/* Tooltip - Sadece mobilde gosterme */}
      {!isOpen && (
        <div className="fixed bottom-28 right-24 z-[997] hidden md:block animate-pulse">
          <div className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm font-medium relative">
            Size nasil yardimci olabiliriz?
            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white" />
          </div>
        </div>
      )}
    </>
  );
}
