import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cozumler } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export const metadata = { title: "Çözümlerimiz | AFN Teknoloji" };

export default function CozumlerPage() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-20 bg-[#0A0E1A] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Teknoloji Çözümleri</span>
            <h1 className="text-4xl font-extrabold mt-3 mb-4">Çözümlerimiz</h1>
            <p className="text-gray-400 max-w-xl mx-auto">Ağ güvenliğinden veri yedeklemeye, sanallaştırmadan arşivlemeye geniş çözüm portföyümüz.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(cozumler).map(([slug, item]) => (
              <a key={slug} href={`/cozumlerimiz/${slug}`}
                className="gradient-border rounded-2xl p-6 hover:border-[#F5A623]/50 transition-all hover:-translate-y-1 group">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h2 className="font-bold text-white mb-2 group-hover:text-[#F5A623] transition-colors">{item.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                <span className="flex items-center gap-1 text-[#F5A623] text-sm font-semibold">
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
