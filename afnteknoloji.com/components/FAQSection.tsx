"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    category: "Genel",
    questions: [
      {
        q: "AFN Teknoloji hangi hizmetleri sunuyor?",
        a: "BT altyapi cozumleri, siber guvenlik, bulut bilisim, veri yedekleme, network guvenlik, Microsoft 365 lisanslama, VMware virtualizasyon ve 7/24 teknik destek hizmetleri sunuyoruz. Kurumsal firmalar icin uctan uca BT cozum ortakligı yapiyoruz.",
      },
      {
        q: "Hangi sektorlere hizmet veriyorsunuz?",
        a: "Finans, saglik, uretim, lojistik, egitim ve kamu sektorleri basda olmak uzere her olcekteki kurumsal firmaya hizmet veriyoruz. 500'den fazla aktif musterimiz bulunmaktadir.",
      },
      {
        q: "Hizmet verdiginiz cografi bolge neresi?",
        a: "Turkiye genelinde hizmet veriyoruz. Istanbul merkezli olup, uzaktan destek ve gerektiginde yerinde mudahale ile tum Turkiye'ye ulasiyoruz. Ayrica yurt disi projelerde de yer aliyoruz.",
      },
    ],
  },
  {
    category: "Teknik Destek",
    questions: [
      {
        q: "Teknik destek hizmetiniz nasil calisir?",
        a: "7/24 telefon, e-posta ve uzaktan baglanti ile destek sagliyoruz. Kritik sorunlarda 2 saat icinde mudahale garantisi veriyoruz. Ayrica proaktif izleme ile sorunlari siz farketmeden cozuyoruz.",
      },
      {
        q: "Acil durumlarda mudahale sureniz nedir?",
        a: "Kritik seviye sorunlarda 2 saat, yuksek oncelikli sorunlarda 4 saat, standart taleplerde 8 saat icinde mudahale ediyoruz. SLA sozlesmelerimizde bu sureler garanti altindadir.",
      },
      {
        q: "Uzaktan destek guvenli mi?",
        a: "Evet, tum uzaktan baglantlarimiz sifrelı VPN tunelleri uzerinden gerceklestirilir. Baglanti kayitlari tutulur ve ISO 27001 standartlarina uygun sekilde islem yapilir.",
      },
    ],
  },
  {
    category: "Fiyatlandirma",
    questions: [
      {
        q: "Fiyatlandirma nasil yapiliyor?",
        a: "Her proje icin ucretsiz ihtiyac analizi yapiyoruz. Firma buyuklugu, kullanici sayisi ve ihtiyac duyulan hizmetlere gore ozel fiyat teklifi hazirliyoruz. Aylik veya yillik sozlesme secenekleri mevcuttur.",
      },
      {
        q: "Ucretsiz deneme sureci var mi?",
        a: "Bazi cozumlerimizde 14-30 gunluk ucretsiz deneme sureci sunuyoruz. Ayrica ilk gorusmede ucretsiz BT altyapi analizi yapiyoruz.",
      },
      {
        q: "Odeme secenekleri nelerdir?",
        a: "Kredi karti, banka havale/EFT ve vadeli odeme secenekleri mevcuttur. Kurumsal musferilerimize ozel odeme planlari sunuyoruz.",
      },
    ],
  },
  {
    category: "Guvenlik",
    questions: [
      {
        q: "ISO 27001 sertifikaniz var mi?",
        a: "Evet, ISO 27001 Bilgi Guvenligi Yonetim Sistemi sertifikasina sahibiz. Tum sureclerimiz bu standartlara uygun sekilde yurutulmektedir.",
      },
      {
        q: "Veri guvenligi nasil saglaniyor?",
        a: "Cok katmanli guvenlik yaklasimi ile calişiyoruz: Firewall, IPS/IDS, antiviurs, e-posta guvenligi, veri siifreleme ve duzenli guvenlik denetimleri uyguluyoruz.",
      },
    ],
  },
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("Genel");
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const toggleQuestion = (question: string) => {
    setOpenQuestions((prev) =>
      prev.includes(question)
        ? prev.filter((q) => q !== question)
        : [...prev, question]
    );
  };

  const currentFaqs =
    faqs.find((f) => f.category === activeCategory)?.questions || [];

  return (
    <section className="py-20 bg-[#0d1221] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5A623]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#F5A623]/10 border border-[#F5A623]/20 rounded-full text-[#F5A623] text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4 inline mr-2" />
            Sikca Sorulan Sorular
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Merak <span className="text-gradient">Edilenler</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            En sik sorulan sorularin cevaplarini burada bulabilirsiniz.
            Sorunuzu bulamadıysanız bize ulasin.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {faqs.map((faq) => (
            <button
              key={faq.category}
              onClick={() => setActiveCategory(faq.category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === faq.category
                  ? "bg-[#F5A623] text-[#0A0E1A]"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {faq.category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {currentFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#0A0E1A] border border-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#F5A623]/20"
            >
              <button
                onClick={() => toggleQuestion(faq.q)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-white font-medium pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#F5A623] flex-shrink-0 transition-transform duration-300 ${
                    openQuestions.includes(faq.q) ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openQuestions.includes(faq.q)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 pt-0">
                  <div className="h-px bg-white/5 mb-4" />
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <div className="w-12 h-12 rounded-full bg-[#F5A623]/10 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-[#F5A623]" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-white font-semibold">
                Sorunuzu bulamadınız mi?
              </h4>
              <p className="text-gray-400 text-sm">
                Uzman ekibimiz size yardimci olmak icin hazir
              </p>
            </div>
            <a
              href="/iletisim"
              className="px-6 py-3 bg-[#F5A623] text-[#0A0E1A] font-semibold rounded-full hover:bg-[#FFD700] transition-colors"
            >
              Bize Ulasin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
