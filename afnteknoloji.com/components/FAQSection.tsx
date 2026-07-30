"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

import { faqs } from "@/lib/faq-data";

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
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5A623]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#F5A623]/10 border border-[#F5A623]/20 rounded-full text-[#F5A623] text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4 inline mr-2" />
            Sıkça Sorulan Sorular
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Merak <span className="text-gradient">Edilenler</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            En sık sorulan soruların cevaplarını burada bulabilirsiniz.
            Sorunuzu bulamadıysanız bize ulaşın.
          </p>
        </div>

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

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <div className="w-12 h-12 rounded-full bg-[#F5A623]/10 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-[#F5A623]" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-white font-semibold">Sorunuzu bulamadınız mı?</h4>
              <p className="text-gray-400 text-sm">Uzman ekibimiz size yardımcı olmak için hazır</p>
            </div>
            <a
              href="/iletisim"
              className="px-6 py-3 bg-[#F5A623] text-[#0A0E1A] font-semibold rounded-full hover:bg-[#FFD700] transition-colors"
            >
              Bize Ulaşın
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
