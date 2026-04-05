import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight, Database, HardDrive, Zap, BarChart } from "lucide-react";

export const metadata = { title: "Veri Tekilleştirme | AFN Teknoloji" };

const features = [
  {
    icon: Database,
    title: "Depolama Tasarrufu",
    desc: "Tekrarlayan veri bloklarını tespit ederek %60-95 oranında depolama alanı tasarrufu sağlar.",
  },
  {
    icon: Zap,
    title: "Hızlı Yedekleme",
    desc: "Sadece değişen ve yeni bloklar aktarıldığı için yedekleme ve replikasyon süreleri dramatik biçimde kısalır.",
  },
  {
    icon: HardDrive,
    title: "Bant Genişliği Optimizasyonu",
    desc: "WAN üzerinden veri aktarımında bant genişliği tüketimini minimize eder.",
  },
  {
    icon: BarChart,
    title: "Maliyet Optimizasyonu",
    desc: "Daha az depolama donanımı ve daha az bulut depolama maliyetiyle aynı veri hacmi korunabilir.",
  },
];

const useCases = [
  {
    title: "Yedekleme Ortamları",
    desc: "Veeam, Commvault gibi yedekleme çözümlerinde inline veya post-process deduplication ile yedekleme havuzlarının boyutunu küçültün.",
    items: ["Günlük tam yedeklemede tekrar eden VM snapshot verileri", "E-posta arşivlerindeki aynı ekler", "Veritabanı yedeklerindeki değişmeyen bloklar"],
  },
  {
    title: "Birincil Depolama",
    desc: "All-flash ve hibrit depolama sistemlerinde (Huawei OceanStor, NetApp vb.) inline deduplication ile daha fazla veri aynı donanımda saklanır.",
    items: ["VDI (Sanal Masaüstü) ortamlarında OS disk tekilleştirmesi", "Dev/Test ortamlarında aynı VM şablonları", "Paylaşılan belge sunucuları"],
  },
  {
    title: "Nesne Depolama (Object Storage)",
    desc: "Huawei OceanStor Pacific ve S3 uyumlu nesne depolama sistemlerinde büyük ölçekli arşiv tekilleştirmesi.",
    items: ["Medya ve içerik arşivleri", "Log ve telemetri verileri", "Uzun süreli uyumluluk arşivleri"],
  },
];

export default function VeriTekilleştirmePage() {
  return (
    <main className="bg-[#0A0E1A] text-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/8 via-transparent to-blue-500/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-sm font-semibold mb-6">
            Veri Optimizasyonu
          </span>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Veri Tekilleştirme<br />
            <span className="text-gradient">(Deduplication) Çözümleri</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
            Tekrarlayan veri bloklarını otomatik olarak tespit eden ve tek kopya halinde saklayan veri tekilleştirme teknolojisiyle depolama maliyetlerinizi dramatik biçimde düşürün.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/iletisim" className="flex items-center gap-2 px-7 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all hover:shadow-xl hover:shadow-orange-500/25">
              Teklif Al <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/cozumlerimiz/veri-depolama-cozumleri" className="flex items-center gap-2 px-7 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
              Depolama Çözümleri
            </a>
          </div>
        </div>
      </section>

      {/* İstatistik */}
      <section className="py-12 bg-[#080C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { val: "%60-95", label: "Depolama Tasarrufu" },
              { val: "10x", label: "Daha Az Yedek Boyutu" },
              { val: "%80", label: "WAN Bant Genişliği Azalması" },
              { val: "3x", label: "Yedekleme Hızı Artışı" },
            ].map((s, i) => (
              <div key={i} className="gradient-border rounded-2xl p-6">
                <div className="text-3xl font-black text-[#F5A623] mb-1">{s.val}</div>
                <div className="text-sm text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Özellikler */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Neden Veri Tekilleştirme?</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Kurumsal verilerde ortalama %60-80 oranında tekrarlayan blok bulunur. Bu blokların yalnızca bir kopyasını saklayarak büyük tasarruf elde edin.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="gradient-border rounded-2xl p-6 hover:-translate-y-1 transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#F5A623]/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-[#F5A623]" />
                </div>
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kullanım Alanları */}
      <section className="py-24 bg-[#080C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Kullanım Alanları</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {useCases.map((u, i) => (
              <div key={i} className="gradient-border rounded-2xl p-8 hover:-translate-y-1 transition-all">
                <h3 className="font-bold text-white text-lg mb-3">{u.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{u.desc}</p>
                <ul className="space-y-2">
                  {u.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-[#F5A623] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Depolama maliyetlerinizi düşürelim</h2>
          <p className="text-gray-400 mb-8">Mevcut altyapınızda ne kadar tasarruf edebileceğinizi ücretsiz analiz ediyoruz.</p>
          <a href="/iletisim" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all">
            Ücretsiz Analiz <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
