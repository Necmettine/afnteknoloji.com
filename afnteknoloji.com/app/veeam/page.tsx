import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, CheckCircle, Award, Server, Database, Cloud } from "lucide-react";

const features = [
  { icon: Shield, title: "Veri Koruması", desc: "Fiziksel, sanal ve bulut ortamlarında kesintisiz yedekleme ve kurtarma çözümleri." },
  { icon: Server, title: "Hızlı Kurtarma", desc: "SLA gereksinimlerinizi karşılamak için dakikalar içinde sistem kurtarma imkânı." },
  { icon: Database, title: "Yedekleme Yönetimi", desc: "Merkezi konsol ile tüm yedekleme altyapınızı tek noktadan yönetin." },
  { icon: Cloud, title: "Bulut Entegrasyonu", desc: "Azure, AWS ve diğer bulut platformlarıyla sorunsuz entegrasyon." },
];

const products = [
  {
    name: "Veeam Backup & Replication",
    desc: "Sanal, fiziksel ve bulut ortamları için kapsamlı yedekleme, replikasyon ve kurtarma çözümü.",
    tags: ["VMware", "Hyper-V", "AWS", "Azure"],
  },
  {
    name: "Veeam ONE",
    desc: "BT altyapınızı gerçek zamanlı izleyin, raporlayın ve optimize edin.",
    tags: ["Monitoring", "Reporting", "Alerting"],
  },
  {
    name: "Veeam Backup for Microsoft 365",
    desc: "Exchange Online, SharePoint, OneDrive ve Teams verilerinizi koruyun.",
    tags: ["Exchange", "SharePoint", "Teams", "OneDrive"],
  },
  {
    name: "Veeam Backup for Nutanix AHV",
    desc: "Nutanix AHV sanallaştırma platformu için özel yedekleme çözümü.",
    tags: ["Nutanix", "AHV", "Enterprise"],
  },
];

export default function VeeamPage() {
  return (
    <main className="bg-[#0A0E1A] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#007DB8]/10 via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#007DB8]/10 border border-[#007DB8]/30 text-[#007DB8] text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Veeam Silver Partner
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Veeam ile <span className="text-[#007DB8]">Veri Koruması</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            AFN Teknoloji olarak Veeam Silver Partner sıfatıyla kurumsal veri yedekleme, replikasyon ve felaket kurtarma çözümleri sunuyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href="/iletisim" className="px-8 py-4 bg-[#007DB8] text-white font-bold rounded-xl hover:bg-[#0066a0] transition-all hover:shadow-lg hover:shadow-[#007DB8]/30">
              Teklif Al
            </a>
            <a href="/cozumlerimiz/veri-yedekleme-cozumleri" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-all">
              Yedekleme Çözümleri
            </a>
          </div>
        </div>
      </section>

      {/* Silver Partner Badge */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#007DB8]/10 to-[#007DB8]/5 border border-[#007DB8]/20 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-[#007DB8]/20 flex items-center justify-center flex-shrink-0">
              <Award className="w-10 h-10 text-[#007DB8]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Veeam Silver Partner Statüsü</h2>
              <p className="text-gray-400">
                AFN Teknoloji, Veeam'in resmi Silver Partner programına dahildir. Bu statü; teknik yetkinlik, satış uzmanlığı ve müşteri memnuniyeti kriterlerinde üst düzey performansı belgeler. Sertifikalı Veeam mühendislerimiz ile kurumunuza en uygun veri koruma stratejisini tasarlıyor ve hayata geçiriyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Neden Veeam?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-[#007DB8]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#007DB8]/15 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-[#007DB8]" />
                </div>
                <h3 className="text-white font-bold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Veeam Ürün Portföyü</h2>
          <p className="text-gray-400 text-center mb-12">AFN Teknoloji olarak lisans satışı, kurulum, yapılandırma ve teknik destek hizmetleri sunuyoruz.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((p) => (
              <div key={p.name} className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-[#007DB8]/30 transition-colors group">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-[#007DB8] flex-shrink-0 mt-0.5" />
                  <h3 className="text-white font-bold text-lg group-hover:text-[#007DB8] transition-colors">{p.name}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 pl-8">{p.desc}</p>
                <div className="flex flex-wrap gap-2 pl-8">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#007DB8]/10 border border-[#007DB8]/20 text-[#007DB8] text-xs rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-[#007DB8]/10 to-[#007DB8]/5 border border-[#007DB8]/20 rounded-3xl p-12">
          <h2 className="text-3xl font-black text-white mb-4">Veeam Çözümleri Hakkında Bilgi Alın</h2>
          <p className="text-gray-400 mb-8">Uzman ekibimiz ihtiyaçlarınıza en uygun Veeam lisans ve uygulama planını oluşturur.</p>
          <a href="/iletisim" className="inline-block px-10 py-4 bg-[#007DB8] text-white font-bold rounded-xl hover:bg-[#0066a0] transition-all hover:shadow-lg hover:shadow-[#007DB8]/30 text-lg">
            Bizimle İletişime Geçin
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
