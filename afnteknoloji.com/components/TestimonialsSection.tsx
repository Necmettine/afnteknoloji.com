"use client";

import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    position: "IT Direktörü",
    company: "Derlüks Yatırım Holding A.Ş.",
    sector: "Yatırım",
    content:
      "AFN Teknoloji ile çalıştığımızdan bu yana BT altyapımızda ciddi bir iyileşme yaşadık. Özellikle VMware ve Veeam çözümleri sayesinde sistem kesintilerimiz neredeyse sıfıra indi. Profesyonel ve çözüm odaklı yaklaşımlarından çok memnunuz.",
    rating: 5,
  },
  {
    id: 2,
    position: "Genel Müdür",
    company: "Sigma Telecom ve Haberleşme Tic. Ltd. Şti.",
    sector: "Telekomünikasyon",
    content:
      "Microsoft 365 geçişimizi AFN Teknoloji ile gerçekleştirdik. Tüm süreç çok sorunsuz ilerledi ve eğitim destekleri sayesinde çalışanlarımız yeni sisteme hızla adapte oldu. 7/24 destek hizmetleri ile her zaman yanımızdalar.",
    rating: 5,
  },
  {
    id: 3,
    position: "Bilgi İşlem Müdürü",
    company: "iHealth Sağlık Ürünleri ve İlaç San. Tic. A.Ş.",
    sector: "Sağlık",
    content:
      "Sağlık sektöründe veri güvenliği çok kritik. AFN Teknoloji'nin Fortinet güvenlik çözümleri ve ISO 27001 uyumlu altyapısı ile hasta verilerimiz tam güvenlik altında. Hızlı müdahale ve profesyonel destek için teşekkürler.",
    rating: 5,
  },
  {
    id: 4,
    position: "Genel Müdür",
    company: "Malkara Birlik Süt ve Süt Mamülleri A.Ş.",
    sector: "Gıda",
    content:
      "Huawei network altyapısı ve Zimbra e-posta çözümleri ile operasyonel verimliliğimizi önemli ölçüde artırdık. AFN Teknoloji ekibi her zaman ulaşılabilir ve çözüm odaklı. Kesinlikle tavsiye ediyorum.",
    rating: 5,
  },
  {
    id: 5,
    position: "İşletme Sahibi",
    company: "Bülent Börekçilik",
    sector: "Gıda & Perakende",
    content:
      "Tüm BT altyapımızı buluta taşıma kararı aldığımızda doğru iş ortağını bulduk. AFN Teknoloji, süreç boyunca teknik uzmanlığı ve kesintisiz desteğiyle yanımızda oldu. Migrasyon sorunsuz tamamlandı, operasyonel verimliliğimiz belirgin şekilde arttı.",
    rating: 5,
  },
  {
    id: 6,
    position: "Yönetim Kurulu Üyesi",
    company: "Aytav Tavukçuluk",
    sector: "Tarım & Gıda",
    content:
      "Üretim tesislerimizin ağ altyapısı ve sunucu sistemlerini AFN Teknoloji ile yeniledik. Önceki çözümlerle kıyaslanamayacak bir stabilite ve güvenilirlik elde ettik.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-[#0A0E1A] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F5A623]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F5A623]/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#F5A623]/10 border border-[#F5A623]/20 rounded-full text-[#F5A623] text-sm font-medium mb-4">
            Müşterilerimizin Görüşleri
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-gradient">500+</span> Mutlu Müşteri
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Türkiye&apos;nin önde gelen kuruluşlarından güvenilir çözüm ortağı olarak aldığımız geri bildirimler
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="glass rounded-2xl p-8 md:p-12 relative">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-[#F5A623] rounded-xl flex items-center justify-center">
                <Quote className="w-6 h-6 text-[#0A0E1A]" />
              </div>

              <div className="mt-4">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F5A623] text-[#F5A623]" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-white text-lg md:text-xl leading-relaxed mb-8 min-h-[120px]">
                  &ldquo;{current.content}&rdquo;
                </p>

                {/* Author — sadece firma ve pozisyon */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F5A623] to-[#FFD700] flex items-center justify-center text-[#0A0E1A] font-bold text-xl shrink-0">
                    {current.company.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{current.company}</h4>
                    <p className="text-gray-400">{current.position}</p>
                  </div>
                  <div className="ml-auto hidden md:block">
                    <span className="px-3 py-1 bg-[#F5A623]/10 border border-[#F5A623]/20 rounded-full text-[#F5A623] text-sm">
                      {current.sector}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={goToPrev}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#F5A623] hover:border-[#F5A623] hover:text-[#0A0E1A] transition-all duration-300"
                aria-label="Önceki yorum"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => { setIsAutoPlaying(false); setCurrentIndex(index); }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-[#F5A623] w-8" : "bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Yorum ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={goToNext}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#F5A623] hover:border-[#F5A623] hover:text-[#0A0E1A] transition-all duration-300"
                aria-label="Sonraki yorum"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { value: "500+", label: "Mutlu Müşteri" },
            { value: "%99.9", label: "Uptime Garantisi" },
            { value: "2 Saat", label: "Ort. Cevap Süresi" },
            { value: "10+", label: "Yıllık Deneyim" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 rounded-xl border border-white/5 bg-white/[0.02]">
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
