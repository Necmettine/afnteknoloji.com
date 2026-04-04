import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Referanslarımız | AFN Teknoloji" };

const sectors = [
  { name: "Finans & Bankacılık", count: "50+", icon: "🏦" },
  { name: "Sağlık", count: "40+", icon: "🏥" },
  { name: "Üretim & Sanayi", count: "80+", icon: "🏭" },
  { name: "Perakende & E-ticaret", count: "60+", icon: "🛍️" },
  { name: "Kamu & Belediye", count: "30+", icon: "🏛️" },
  { name: "Eğitim", count: "45+", icon: "🎓" },
  { name: "Lojistik", count: "35+", icon: "🚛" },
  { name: "Hizmet Sektörü", count: "100+", icon: "💼" },
];

export default function ReferanslarimizPage() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-20 bg-[#0A0E1A] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Müşterilerimiz</span>
            <h1 className="text-4xl font-extrabold mt-3 mb-4">Referanslarımız</h1>
            <p className="text-gray-400 max-w-xl mx-auto">500'den fazla kurumsal müşterimize güvenilir BT hizmetleri sunuyoruz.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {sectors.map((s) => (
              <div key={s.name} className="gradient-border rounded-2xl p-6 text-center hover:border-[#F5A623]/40 transition-all hover:-translate-y-1">
                <div className="text-4xl mb-3">{s.icon}</div>
                <div className="text-3xl font-black text-[#F5A623] mb-1">{s.count}</div>
                <div className="text-sm text-gray-300 font-medium">{s.name}</div>
                <div className="text-xs text-gray-600 mt-1">Müşteri</div>
              </div>
            ))}
          </div>
          <div className="glass rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-3">Siz de Referanslarımız Arasına Katılın</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">Kurumsal BT ihtiyaçlarınız için bizimle iletişime geçin.</p>
            <a href="/iletisim" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all">
              İletişime Geç
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
