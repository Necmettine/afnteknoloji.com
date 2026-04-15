import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { CheckCircle, ArrowRight, Shield, Network, Lock, Eye } from "lucide-react";

const products = [
  {
    icon: Shield,
    name: "FortiGate Firewall",
    desc: "Kurumsal ağ güvenliğinin temeli olan FortiGate NGFW; IPS, uygulama kontrolü, web filtreleme ve VPN özelliklerini tek cihazda sunar.",
    features: ["Next-Generation Firewall (NGFW)", "SSL/IPSec VPN", "Intrusion Prevention System (IPS)", "Uygulama görünürlüğü ve kontrolü", "Yüksek erişilebilirlik (HA) desteği"],
  },
  {
    icon: Eye,
    name: "FortiAnalyzer",
    desc: "Ağ güvenliği olaylarını merkezi olarak toplayan, analiz eden ve raporlayan güvenlik yönetim platformu.",
    features: ["Merkezi log yönetimi", "Güvenlik olayı korelasyonu", "Uyumluluk raporları", "Gerçek zamanlı tehdit görünürlüğü", "Uzun süreli log arşivleme"],
  },
  {
    icon: Network,
    name: "FortiSwitch",
    desc: "FortiGate ile entegre çalışan, merkezi yönetilebilir kurumsal ağ anahtarlama çözümü.",
    features: ["FortiLink entegrasyonu", "VLAN ve port güvenliği", "PoE+ desteği", "Merkezi yönetim", "Yüksek bant genişliği"],
  },
  {
    icon: Lock,
    name: "FortiClient EMS",
    desc: "Uç nokta güvenlik yönetim sistemi; VPN, tehdit koruması ve cihaz uyumluluk kontrolünü merkezi yönetir.",
    features: ["Zero Trust Network Access (ZTNA)", "Endpoint DLP", "Web filtreleme", "Uygulama güvenlik duvarı", "Uzaktan VPN yönetimi"],
  },
];

export default function FortinetPage() {
  return (
    <main className="bg-[#0A0E1A] text-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EE3124]/10 via-transparent to-[#F5A623]/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EE3124]/10 border border-[#EE3124]/20 text-[#EE3124] text-sm font-semibold mb-6">
                Fortinet Yetkili Çözüm Ortağı
              </span>
              <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                Fortinet ile<br />
                <span className="text-gradient">Ağ Güvenliği</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                AFN Teknoloji, Fortinet'in yetkili çözüm ortağı olarak FortiGate, FortiAnalyzer, FortiSwitch ve FortiClient ürünlerinin satış, kurulum ve bakım hizmetlerini sunmaktadır.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/iletisim" className="flex items-center gap-2 px-7 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all">
                  Teklif Al <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/hizmetlerimiz/ag-ve-guvenlik-danismanligi" className="flex items-center gap-2 px-7 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                  Güvenlik Danışmanlığı
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white rounded-3xl p-12 shadow-2xl">
                <Image src="/logos/fortinet.svg" alt="Fortinet" width={280} height={100} className="h-20 w-auto object-contain" unoptimized />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Fortinet */}
      <section className="py-16 bg-[#080C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Sektör Lideri", desc: "Gartner Magic Quadrant'ta yıllardır lider konumda." },
              { title: "Entegre Platform", desc: "FortiOS ile tüm ürünler tek ekrandan yönetilir." },
              { title: "Yüksek Performans", desc: "Özel ASIC işlemcilerle hat hızında güvenlik." },
              { title: "Yetkili Servis", desc: "Sertifikalı ekibimizle kurulum ve bakım desteği." },
            ].map((item, i) => (
              <div key={i} className="gradient-border rounded-2xl p-6">
                <CheckCircle className="w-8 h-8 text-[#EE3124] mb-3" />
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
            <h2 className="text-4xl font-extrabold mt-3 mb-4">Fortinet Çözüm Ailesi</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Ağ güvenliğinden uç nokta korumasına, log yönetiminden anahtarlama çözümlerine kadar kapsamlı Fortinet portföyü.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {products.map((p) => (
              <div key={p.name} className="gradient-border rounded-2xl p-8 hover:border-[#EE3124]/30 transition-all hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EE3124]/10 flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-[#EE3124]" />
                  </div>
                  <h3 className="font-bold text-white">{p.name}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">{p.desc}</p>
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 text-[#EE3124]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmetlerimiz */}
      <section className="py-24 bg-[#080C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Fortinet Hizmetlerimiz</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Satış & Lisanslama", desc: "Kurumunuza en uygun FortiGate modelini ve lisans paketini belirliyoruz." },
              { title: "Kurulum & Yapılandırma", desc: "Cihaz kurulumu, politika yapılandırması ve ağ entegrasyonunu gerçekleştiriyoruz." },
              { title: "Bakım & Destek", desc: "Yıllık bakım anlaşmalarıyla 7/24 teknik destek ve firmware güncellemeleri." },
            ].map((s, i) => (
              <div key={i} className="gradient-border rounded-2xl p-6 text-center">
                <div className="text-3xl font-black text-[#EE3124]/30 mb-3">0{i + 1}</div>
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
          <h2 className="text-3xl font-extrabold mb-4">Ağ güvenliğinizi güçlendirelim</h2>
          <p className="text-gray-400 mb-8">Fortinet uzmanlarımız ihtiyaçlarınıza en uygun çözümü sunar.</p>
          <a href="/iletisim" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all">
            Ücretsiz Değerlendirme <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
