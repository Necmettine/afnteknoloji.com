import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hizmetler } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://turkiyebilisim.com.tr/hizmetlerimiz",
    languages: {
      "tr": "https://turkiyebilisim.com.tr/hizmetlerimiz",
      "en": "https://turkiyebilisim.com.tr/en/hizmetlerimiz",
    },
  }, title: "Hizmetlerimiz | Türkiye Bilişim" };

export default function HizmetlerPage() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-20 bg-[#0A0E1A] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#06B6D4] text-sm font-semibold tracking-widest uppercase">Ne Yapıyoruz?</span>
            <h1 className="text-4xl font-extrabold mt-3 mb-4">Hizmetlerimiz</h1>
            <p className="text-gray-400 max-w-xl mx-auto">Kurumsal BT altyapınızı güçlendirmek için kapsamlı hizmet portföyümüzle yanınızdayız.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(hizmetler).map(([slug, item]) => (
              <a key={slug} href={`/hizmetlerimiz/${slug}`}
                className="gradient-border rounded-2xl p-6 hover:border-[#06B6D4]/50 transition-all hover:-translate-y-1 group">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h2 className="font-bold text-white mb-2 group-hover:text-[#06B6D4] transition-colors">{item.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                <span className="flex items-center gap-1 text-[#06B6D4] text-sm font-semibold">
                  Detaylar <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
