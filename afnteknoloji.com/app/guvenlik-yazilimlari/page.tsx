import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight, Shield, Eye, Zap, Lock, AlertTriangle, Activity } from "lucide-react";

const brands = [
  {
    name: "Kaspersky",
    color: "#006C68",
    bgColor: "#006C6810",
    borderColor: "#006C6820",
    badge: "Yetkili Satış & Destek",
    desc: "Kaspersky XDR ve EDR çözümleriyle uç noktalardan ağ trafiğine, e-postadan bulut iş yüklerine kadar tüm saldırı yüzeyini tek platformdan izleyin ve koruyun.",
    products: [
      {
        icon: Shield,
        name: "Kaspersky EDR Optimum",
        desc: "KOBİ ve orta ölçekli işletmeler için tasarlanmış, makine öğrenmesi tabanlı uç nokta tehdit tespiti ve müdahale platformu.",
        features: [
          "Davranış tabanlı tehdit tespiti",
          "Otomatik olay müdahalesi (playbook)",
          "Kök neden analizi (Root Cause Analysis)",
          "Şüpheli süreç ve dosya izolasyonu",
          "MITRE ATT&CK framework eşleştirmesi",
          "Merkezi yönetim konsolu (KSC)",
        ],
      },
      {
        icon: Eye,
        name: "Kaspersky XDR Expert",
        desc: "Uç nokta, ağ, e-posta ve bulut telemetrisini birleştirerek APT ve gelişmiş tehditleri erken aşamada tespit eden genişletilmiş platform.",
        features: [
          "Çoklu katman telemetri korelasyonu",
          "Tehdit avı (Threat Hunting)",
          "SOC iş akışı ve vaka yönetimi",
          "Sandbox (derinlemesine dosya analizi)",
          "SIEM / SOAR entegrasyonu",
          "Proaktif tehdit istihbaratı (TI)",
        ],
      },
      {
        icon: Activity,
        name: "Kaspersky Endpoint Security",
        desc: "Windows, Mac, Linux ve mobil cihazlar için kapsamlı uç nokta güvenlik platformu. Anti-malware, firewall, web/uygulama kontrolü.",
        features: [
          "Anti-malware ve anti-ransomware",
          "Uygulama, web ve cihaz kontrolü",
          "Şifreleme (FDE / FLE)",
          "Güvenlik açığı ve yama yönetimi",
          "VPN ve parola yöneticisi",
          "Merkezi politika yönetimi",
        ],
      },
    ],
  },
  {
    name: "Bitdefender",
    color: "#ED1C24",
    bgColor: "#ED1C2410",
    borderColor: "#ED1C2420",
    badge: "Yetkili Satış & Destek",
    desc: "Bitdefender GravityZone ile EDR ve XDR çözümlerini bir arada kullanarak sektörün en yüksek tespit oranlarından yararlanın. NSS Labs, AV-TEST ve AV-Comparatives ödüllü platform.",
    products: [
      {
        icon: Shield,
        name: "Bitdefender GravityZone EDR",
        desc: "Gerçek zamanlı davranış analizi ile bilinmeyen tehditleri, fidye yazılımlarını ve dosyasız saldırıları uç noktada tespit eden EDR çözümü.",
        features: [
          "Gerçek zamanlı süreç ve bellek analizi",
          "HyperDetect makine öğrenmesi motoru",
          "Fidye yazılımı koruması ve geri alma",
          "Dosyasız saldırı tespiti",
          "Olay zaman çizelgesi ve görselleştirme",
          "Otomatik ve rehberli müdahale",
        ],
      },
      {
        icon: Eye,
        name: "Bitdefender XDR",
        desc: "Uç nokta, ağ, kimlik, e-posta ve üretkenlik uygulamalarındaki sinyalleri birleştirerek kör noktaları ortadan kaldıran genişletilmiş tespit ve müdahale platformu.",
        features: [
          "Uç nokta + ağ + kimlik + e-posta korelasyonu",
          "MITRE ATT&CK tabanlı tehdit haritalama",
          "Yönetilen tehdit avı (MDR desteği)",
          "Microsoft 365 ve Google Workspace entegrasyonu",
          "Otomatik incident timeline",
          "SIEM/SOAR entegrasyonu",
        ],
      },
      {
        icon: Zap,
        name: "Bitdefender GravityZone Business Security Enterprise",
        desc: "EDR, risk yönetimi, ağ saldırı sensörü ve e-posta güvenliğini tek lisansta birleştiren tam kapsamlı kurumsal güvenlik paketi.",
        features: [
          "EDR + Risk Yönetimi + Ağ Sensörü",
          "E-posta güvenliği (anti-spam/anti-phishing)",
          "Web tehdit koruması",
          "Güvenlik açığı değerlendirmesi",
          "Şifreleme yönetimi (BitLocker/FileVault)",
          "Bulut ve karma ortam desteği",
        ],
      },
    ],
  },
];

const whyUs = [
  { icon: Shield, title: "Yetkili Satış Ortağı", desc: "Hem Kaspersky hem de Bitdefender için yetkili satış ve destek lisansına sahibiz." },
  { icon: Zap, title: "Hızlı Kurulum", desc: "Pilot kurulum dahil tam devreye alma 1-3 iş günü içinde tamamlanır." },
  { icon: Lock, title: "Lisans Yönetimi", desc: "Kurumsal toplu lisans alımı, yenileme takibi ve maliyet optimizasyonu." },
  { icon: AlertTriangle, title: "Olay Müdahalesi", desc: "Güvenlik ihlali sonrası acil müdahale ve adli bilişim analizi desteği." },
  { icon: Activity, title: "SOC Entegrasyonu", desc: "Mevcut SIEM/SOAR altyapınıza EDR/XDR entegrasyonu tasarlayıp uyguluyoruz." },
  { icon: Eye, title: "7/24 Destek", desc: "Kritik güvenlik olaylarında 7/24 teknik destek ve eskalasyon hattı." },
];

export default function GuvenlikYazilimlariPage() {
  return (
    <main className="bg-[#0A0E1A] text-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ED1C24]/8 via-transparent to-[#006C68]/8" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-sm font-semibold mb-6">
              Yetkili Satış & Teknik Destek
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Virüs Koruma,<br />
              <span className="text-gradient">EDR & XDR Çözümleri</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
              Kaspersky ve Bitdefender'ın yetkili satış ve destek ortağı olarak uç nokta güvenliği, genişletilmiş tehdit tespiti ve müdahale çözümlerini kurumunuza uçtan uca sunuyoruz.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/iletisim" className="flex items-center gap-2 px-7 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all hover:shadow-xl hover:shadow-orange-500/25">
                Teklif Al <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#kaspersky" className="flex items-center gap-2 px-7 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                Ürünleri İncele
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EDR vs XDR fark */}
      <section className="py-16 bg-[#080C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="gradient-border rounded-2xl p-6">
              <div className="text-2xl font-black text-[#F5A623] mb-2">AV</div>
              <h3 className="font-bold text-white mb-2">Antivirüs</h3>
              <p className="text-gray-400 text-sm">Bilinen imza tabanlı tehditleri engeller. Temel koruma katmanı.</p>
            </div>
            <div className="gradient-border rounded-2xl p-6 border-[#F5A623]/30">
              <div className="text-2xl font-black text-[#F5A623] mb-2">EDR</div>
              <h3 className="font-bold text-white mb-2">Endpoint Detection & Response</h3>
              <p className="text-gray-400 text-sm">Uç noktalarda davranış analizi, tehdit tespiti ve olay müdahalesi.</p>
            </div>
            <div className="gradient-border rounded-2xl p-6">
              <div className="text-2xl font-black text-[#F5A623] mb-2">XDR</div>
              <h3 className="font-bold text-white mb-2">Extended Detection & Response</h3>
              <p className="text-gray-400 text-sm">Uç nokta + ağ + e-posta + kimlik sinyallerini birleştiren kapsamlı platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Markalar */}
      {brands.map((brand) => (
        <section key={brand.name} id={brand.name.toLowerCase()} className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Marka başlık */}
            <div className="flex items-center gap-6 mb-12">
              <div className="flex-1 h-px bg-white/10" />
              <div className="flex items-center gap-4">
                <div className="px-6 py-3 rounded-2xl font-black text-2xl tracking-tight"
                  style={{ backgroundColor: brand.bgColor, color: brand.color, border: `2px solid ${brand.borderColor}` }}>
                  {brand.name}
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: brand.bgColor, color: brand.color }}>
                  {brand.badge}
                </span>
              </div>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12 text-lg leading-relaxed">{brand.desc}</p>

            <div className="grid lg:grid-cols-3 gap-6">
              {brand.products.map((p) => (
                <div key={p.name} className="gradient-border rounded-2xl p-7 hover:-translate-y-1 transition-all"
                  style={{ borderColor: brand.borderColor }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: brand.bgColor }}>
                      <p.icon className="w-6 h-6" style={{ color: brand.color }} />
                    </div>
                    <h3 className="font-bold text-white text-sm leading-tight">{p.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{p.desc}</p>
                  <ul className="space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: brand.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a href="/iletisim"
                      className="block text-center py-2.5 rounded-xl text-sm font-semibold transition-all"
                      style={{ backgroundColor: brand.bgColor, color: brand.color, border: `1px solid ${brand.borderColor}` }}>
                      Teklif İste
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Neden AFN */}
      <section className="py-24 bg-[#080C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Neden AFN Teknoloji</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-4">Güvenlik Çözümlerinde Fark</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((w, i) => (
              <div key={i} className="gradient-border rounded-2xl p-6 hover:-translate-y-1 transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#F5A623]/10 flex items-center justify-center mb-4">
                  <w.icon className="w-6 h-6 text-[#F5A623]" />
                </div>
                <h3 className="font-bold text-white mb-2">{w.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Kurumunuzu siber tehditlere karşı koruyalım</h2>
          <p className="text-gray-400 mb-8">
            Kaspersky veya Bitdefender — hangisinin kurumunuza daha uygun olduğunu belirlemek için ücretsiz teknik değerlendirme yapıyoruz.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/iletisim" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all hover:shadow-xl hover:shadow-orange-500/25">
              Ücretsiz Güvenlik Değerlendirmesi <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:+902165725040" className="inline-flex items-center gap-2 px-8 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
              0216 572 50 40
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
