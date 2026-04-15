import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight, Smartphone, Shield, Wifi, Settings } from "lucide-react";

export const metadata = { title: "Mobil Çözümler | AFN Teknoloji" };

const solutions = [
  {
    icon: Shield,
    name: "Mobil Cihaz Yönetimi (MDM)",
    color: "#0078D4",
    desc: "Microsoft Intune ve diğer MDM platformlarıyla kurumsal mobil cihazları merkezi olarak yönetin, politika uygulayın ve güvenliği sağlayın.",
    features: [
      "iOS, Android ve Windows cihaz yönetimi",
      "Uzaktan cihaz silme (Remote Wipe)",
      "Uygulama dağıtımı ve kısıtlama",
      "Cihaz uyumluluk politikaları",
      "Koşullu erişim (Conditional Access)",
      "Kurumsal ve kişisel veri ayrımı (BYOD)",
    ],
  },
  {
    icon: Wifi,
    name: "Mobil VPN ve Güvenli Erişim",
    color: "#EE3124",
    desc: "Çalışanlarınızın mobil cihazlarından kurumsal kaynaklara güvenli uzak erişimi için FortiClient VPN ve ZTNA çözümleri.",
    features: [
      "SSL VPN mobil istemci",
      "Zero Trust Network Access (ZTNA)",
      "Cihaz kimlik doğrulama",
      "Şifreli tünel üzerinden erişim",
      "Split tunneling yapılandırması",
      "MFA entegrasyonu",
    ],
  },
  {
    icon: Smartphone,
    name: "Kurumsal Mobil Uygulama Yönetimi (MAM)",
    color: "#107C10",
    desc: "Çalışanların kişisel cihazlarında kurumsal uygulamaları yönetin. Kurumsal veriler korunurken kişisel veriler dokunulmaz kalır.",
    features: [
      "Microsoft 365 mobil uygulama koruması",
      "Uygulama bazlı VPN",
      "Uygulama veri şifreleme",
      "Kopyala-yapıştır kısıtlaması",
      "Ekran görüntüsü engelleme",
      "Uzaktan uygulama silme",
    ],
  },
  {
    icon: Settings,
    name: "Mobil E-posta ve İletişim",
    color: "#6264A7",
    desc: "Exchange Online ve Microsoft Teams'i mobil cihazlarda güvenle kullanın. Kurumsal e-posta ve iletişim her yerden erişilebilir.",
    features: [
      "Exchange ActiveSync yapılandırması",
      "Outlook Mobile kurumsal politikalar",
      "Teams mobil güvenlik ayarları",
      "S/MIME e-posta şifrelemesi",
      "Mobil takvim ve kişi senkronizasyonu",
      "Push bildirim yönetimi",
    ],
  },
];

export default function MobilCozumlerPage() {
  return (
    <main className="bg-[#0A0E1A] text-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0078D4]/8 via-transparent to-[#F5A623]/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0078D4]/10 border border-[#0078D4]/20 text-[#0078D4] text-sm font-semibold mb-6">
              Enterprise Mobility
            </span>
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              Kurumsal<br />
              <span className="text-gradient">Mobil Çözümler</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
              Çalışanlarınızın mobil cihazlarını güvenle yönetin. MDM, MAM, mobil VPN ve kurumsal mobil uygulama çözümleriyle iş gücünüzü her yerden güvenli ve verimli tutun.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/iletisim" className="flex items-center gap-2 px-7 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all hover:shadow-xl hover:shadow-orange-500/25">
                Teklif Al <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/microsoft-365" className="flex items-center gap-2 px-7 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                Microsoft 365 Çözümleri
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BYOD vs COPE */}
      <section className="py-16 bg-[#080C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="gradient-border rounded-2xl p-6">
              <div className="text-2xl font-black text-[#F5A623] mb-2">BYOD</div>
              <h3 className="font-bold text-white mb-2">Kendi Cihazını Getir</h3>
              <p className="text-gray-400 text-sm">Çalışanların kişisel cihazlarını kurumsal amaçla güvenle kullanmasını sağlar. MAM ile kişisel veriler korunur.</p>
            </div>
            <div className="gradient-border rounded-2xl p-6 border-[#F5A623]/30">
              <div className="text-2xl font-black text-[#F5A623] mb-2">COPE</div>
              <h3 className="font-bold text-white mb-2">Kurumsal Sahip, Kişisel Aktif</h3>
              <p className="text-gray-400 text-sm">Kurum cihazları satın alır, çalışanlar kişisel ve kurumsal amaçla kullanır. Tam MDM kontrolü sağlanır.</p>
            </div>
            <div className="gradient-border rounded-2xl p-6">
              <div className="text-2xl font-black text-[#F5A623] mb-2">COBO</div>
              <h3 className="font-bold text-white mb-2">Yalnızca Kurumsal Kullanım</h3>
              <p className="text-gray-400 text-sm">Kurum cihazları sadece iş amaçlı kilitlenir. Kiosk modu, saha çalışanları ve özel görev cihazları için idealdir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Çözümler */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Çözüm Portföyü</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-4">Kurumsal Mobil Güvenlik</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Cihaz yönetiminden uygulama güvenliğine, mobil VPN'den kurumsal iletişime kadar tam kapsamlı mobil çözümler.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {solutions.map((s) => (
              <div key={s.name} className="gradient-border rounded-2xl p-8 hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${s.color}18` }}>
                    <s.icon className="w-6 h-6" style={{ color: s.color }} />
                  </div>
                  <h3 className="font-bold text-white">{s.name}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: s.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Süreç */}
      <section className="py-24 bg-[#080C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Uygulama Süreci</h2>
          </div>
          <div className="grid sm:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Envanter & Analiz", desc: "Mevcut cihaz parkı, işletim sistemi dağılımı ve güvenlik ihtiyaçları değerlendirilir." },
              { step: "02", title: "Platform Seçimi", desc: "Microsoft Intune, Jamf veya diğer MDM platformlarından kurumunuza en uygun seçilir." },
              { step: "03", title: "Politika Tasarımı", desc: "Güvenlik politikaları, uygulama kısıtlamaları ve erişim kuralları tasarlanır." },
              { step: "04", title: "Devreye Alma", desc: "Pilot grup ile başlanır, tam kuruluma geçilir ve kullanıcı eğitimi verilir." },
            ].map((s) => (
              <div key={s.step} className="gradient-border rounded-2xl p-6 text-center">
                <div className="text-3xl font-black text-[#0078D4]/40 mb-2">{s.step}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{s.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Mobil iş gücünüzü güvende tutun</h2>
          <p className="text-gray-400 mb-8">Uzman ekibimiz kurumunuza özel mobil güvenlik stratejisi belirler ve uygular.</p>
          <a href="/iletisim" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all">
            Ücretsiz Danışmanlık <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
