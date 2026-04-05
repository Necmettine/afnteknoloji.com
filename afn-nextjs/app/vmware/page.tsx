import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { CheckCircle, ArrowRight, Server, Cloud, Monitor, Shield } from "lucide-react";

const products = [
  {
    icon: Server,
    name: "VMware vSphere",
    desc: "Dünyanın en yaygın kullanılan sanallaştırma platformu. ESXi hypervisor ve vCenter Server ile fiziksel sunucularınızı sanal ortama taşıyın.",
    features: ["ESXi Hypervisor", "vCenter Server merkezi yönetim", "vMotion (sıfır kesintili taşıma)", "High Availability (HA)", "Distributed Resource Scheduler (DRS)"],
  },
  {
    icon: Cloud,
    name: "VMware vSAN",
    desc: "Sunucu disklerini bir araya getirerek yüksek performanslı, hiper-yakınsanmış paylaşımlı depolama altyapısı oluşturun.",
    features: ["Yazılım tabanlı depolama", "All-Flash ve hibrit konfigürasyon", "Veri tekrarlama ve sıkıştırma", "Anlık snapshot ve replikasyon", "vSphere ile tam entegrasyon"],
  },
  {
    icon: Monitor,
    name: "VMware Horizon (VDI)",
    desc: "Sanal masaüstü altyapısı ile çalışanlarınıza her yerden, her cihazdan güvenli masaüstü deneyimi sunun.",
    features: ["Sanal masaüstü (VDI)", "Uygulama sanallaştırma", "Bulut masaüstü hizmetleri", "PCoIP ve Blast protokolleri", "Merkezi masaüstü yönetimi"],
  },
  {
    icon: Shield,
    name: "VMware NSX",
    desc: "Yazılım tanımlı ağ ve güvenlik platformuyla mikro-segmentasyon, dağıtık firewall ve ağ otomasyonu uygulayın.",
    features: ["Mikro-segmentasyon", "Dağıtık firewall", "VPN ve yük dengeleme", "Ağ otomasyonu", "Zero Trust güvenlik mimarisi"],
  },
];

export default function VMwarePage() {
  return (
    <main className="bg-[#0A0E1A] text-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#607078]/20 via-transparent to-[#F5A623]/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#607078]/20 border border-[#607078]/30 text-gray-300 text-sm font-semibold mb-6">
                VMware Enterprise Solution Partner
              </span>
              <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                VMware ile<br />
                <span className="text-gradient">Sanallaştırma</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                AFN Teknoloji, VMware Enterprise Solution Partner olarak vSphere, vSAN, Horizon VDI ve NSX ürünlerinde satış, kurulum, yapılandırma ve teknik destek hizmetleri sunmaktadır.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/iletisim" className="flex items-center gap-2 px-7 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all">
                  Teklif Al <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/cozumlerimiz/sanallastirma" className="flex items-center gap-2 px-7 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                  Sanallaştırma Çözümleri
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white rounded-3xl p-12 shadow-2xl">
                <Image src="/logos/vmware.svg" alt="VMware" width={280} height={100} className="h-20 w-auto object-contain" unoptimized />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantajlar */}
      <section className="py-16 bg-[#080C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Donanım Bağımsızlığı", desc: "Mevcut sunucu yatırımlarınızı koruyarak sanallaştırın." },
              { title: "Maliyet Tasarrufu", desc: "Sunucu konsolidasyonuyla donanım ve enerji maliyetleri düşer." },
              { title: "Yüksek Erişilebilirlik", desc: "HA ve vMotion ile plansız kesinti süresini sıfıra indirin." },
              { title: "Sertifikalı Ekip", desc: "VCP sertifikalı mühendislerimiz projenizi uçtan uca yönetir." },
            ].map((item, i) => (
              <div key={i} className="gradient-border rounded-2xl p-6">
                <CheckCircle className="w-8 h-8 text-[#607078] mb-3" />
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ürünler */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Ürün Portföyü</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-4">VMware Çözüm Ailesi</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Sunucu sanallaştırmasından yazılım tanımlı ağa, VDI'dan hiper-yakınsanmış altyapıya kadar kapsamlı VMware portföyü.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {products.map((p) => (
              <div key={p.name} className="gradient-border rounded-2xl p-8 hover:border-[#607078]/50 transition-all hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#607078]/20 flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-gray-300" />
                  </div>
                  <h3 className="font-bold text-white">{p.name}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">{p.desc}</p>
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 text-gray-400" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Göç süreci */}
      <section className="py-24 bg-[#080C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">VMware Geçiş Süreci</h2>
          </div>
          <div className="grid sm:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Keşif", desc: "Mevcut fiziksel altyapınız analiz edilir, sanallaştırma uyumluluğu değerlendirilir." },
              { step: "02", title: "Tasarım", desc: "Kapasite planlaması, küme mimarisi ve lisans planı hazırlanır." },
              { step: "03", title: "Geçiş", desc: "P2V (fiziksel'den sanal'a) geçişi sıfır veri kaybı ile gerçekleştirilir." },
              { step: "04", title: "Optimizasyon", desc: "Performans izleme, DRS ve HA politikaları yapılandırılır." },
            ].map((s) => (
              <div key={s.step} className="gradient-border rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-[#607078]/40 mb-3">{s.step}</div>
                <h3 className="font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Sanallaştırma projenizi başlatalım</h2>
          <p className="text-gray-400 mb-8">VMware sertifikalı mühendislerimizden ücretsiz keşif raporu alın.</p>
          <a href="/iletisim" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all">
            Ücretsiz Keşif Talebi <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
