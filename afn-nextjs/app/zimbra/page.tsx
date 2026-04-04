import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Shield, Server, Globe, ArrowRight } from "lucide-react";

export const metadata = { title: "Zimbra Türkiye | AFN Teknoloji" };

const features = [
  { icon: Mail, title: "Kurumsal E-posta", desc: "Güçlü ve güvenilir kurumsal e-posta altyapısı. Spam koruması ve şifreleme dahil." },
  { icon: Shield, title: "Güvenlik", desc: "End-to-end şifreleme, anti-spam ve anti-virüs koruması ile verileriniz güvende." },
  { icon: Server, title: "On-Premise veya Cloud", desc: "Kendi sunucunuzda veya bulutta esnek dağıtım seçenekleri." },
  { icon: Globe, title: "Zimbra Türkiye Distribütörü", desc: "AFN Teknoloji olarak Zimbra'nın Türkiye yetkili distribütörüyüz." },
];

export default function ZimbraPage() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-20 bg-[#0A0E1A] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#E84025] flex items-center justify-center text-white font-black">Z</div>
              <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Zimbra Türkiye</span>
            </div>
            <h1 className="text-4xl font-extrabold mt-3 mb-4">Zimbra Kurumsal E-posta Çözümleri</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              AFN Teknoloji olarak Zimbra'nın Türkiye yetkili distribütörüyüz. Kurumsal e-posta, takvim ve işbirliği çözümleri sunuyoruz.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((f) => (
              <div key={f.title} className="gradient-border rounded-2xl p-6 hover:border-[#F5A623]/40 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-[#F5A623]/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-[#F5A623]" />
                </div>
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="gradient-border rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-4">Zimbra Lisansı ve Kurulum Teklifi</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">Kurumunuz için en uygun Zimbra paketini belirleyelim. Ücretsiz demo ve fiyat teklifi için bizimle iletişime geçin.</p>
            <a href="/iletisim" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all hover:shadow-lg hover:shadow-orange-500/30">
              Teklif Al <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
