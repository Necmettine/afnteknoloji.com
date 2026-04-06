import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Shield, Users, Award, Clock } from "lucide-react";

export const metadata = { title: "Hakkımızda | AFN Teknoloji" };

const values = [
  { icon: Shield, title: "Güvenilirlik", desc: "10+ yıllık deneyimimizle müşteri memnuniyeti odaklı hizmet anlayışı." },
  { icon: Users, title: "Uzman Ekip", desc: "Sertifikalı mühendisler ve teknik uzmanlardan oluşan deneyimli kadro." },
  { icon: Award, title: "Partner Sertifikaları", desc: "Microsoft, Huawei, Vmware, Veeam, Fortinet yetkili çözüm ortaklıkları." },
  { icon: Clock, title: "7/24 Destek", desc: "Kesintisiz teknik destek ile iş sürekliliğinizi güvence altına alıyoruz." },
];

export default function HakkimizdaPage() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-20 bg-[#0A0E1A] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Kimiz?</span>
            <h1 className="text-4xl font-extrabold mt-3 mb-4">Hakkımızda</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              AFN Teknoloji, 2008 yılından bu yana kurumsal BT altyapısı, sistem güvenliği ve teknoloji çözümleri alanında faaliyet gösteren, Türkiye'nin önde gelen BT hizmet şirketlerinden biridir.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Vizyonumuz</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Teknoloji dünyasında sürekli değişen dinamiklere ayak uydurarak, müşterilerimize en güncel ve güvenilir BT çözümlerini sunmayı hedefliyoruz. Kurumsal yapıların dijital dönüşüm süreçlerinde stratejik bir iş ortağı olmak temel misyonumuzdur.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Maltepe ve Beylikdüzü'ndeki ofislerimizden İstanbul genelinde ve tüm Türkiye'ye hizmet veriyoruz. 500'den fazla kurumsal müşterimize 7/24 teknik destek sağlıyoruz.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "2008", label: "Kuruluş Yılı" },
                { val: "500+", label: "Kurumsal Müşteri" },
                { val: "28+", label: "Partner Marka" },
                { val: "7/24", label: "Teknik Destek" },
              ].map((s) => (
                <div key={s.label} className="gradient-border rounded-2xl p-6 text-center">
                  <div className="text-3xl font-black text-[#F5A623]">{s.val}</div>
                  <div className="text-sm text-gray-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="glass rounded-2xl p-6 hover:border-[#F5A623]/30 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-[#F5A623]/10 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-[#F5A623]" />
                </div>
                <h3 className="font-bold text-white mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Sertifikalar & Partner Rozetleri */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Yetkili Çözüm Ortaklıkları</span>
              <h2 className="text-3xl font-bold text-white mt-3 mb-4">Sertifikalarımız & Partner Statülerimiz</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Dünyanın önde gelen teknoloji markalarının yetkili çözüm ortağı ve sertifikalı satıcısıyız.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  brand: "Microsoft",
                  level: "Microsoft Partner",
                  desc: "Microsoft 365, Azure, Windows Server ve Exchange çözümlerinde yetkili partner.",
                  color: "#00A4EF",
                  badge: "Partner",
                },
                {
                  brand: "Huawei",
                  level: "Huawei Partner",
                  desc: "Huawei Enterprise ağ, sunucu ve bulut altyapısı çözümlerinde yetkili distribütör.",
                  color: "#CF0A2C",
                  badge: "Enterprise Partner",
                },
                {
                  brand: "VMware",
                  level: "VMware Partner",
                  desc: "vSphere, vCenter ve NSX sanallaştırma platformlarında sertifikalı çözüm ortağı.",
                  color: "#607078",
                  badge: "Solution Partner",
                },
                {
                  brand: "Veeam",
                  level: "Veeam Silver Partner",
                  desc: "Yedekleme, replikasyon ve felaket kurtarma çözümlerinde Silver Partner statüsü.",
                  color: "#007DB8",
                  badge: "Silver Partner",
                },
                {
                  brand: "Fortinet",
                  level: "Fortinet Partner",
                  desc: "FortiGate güvenlik duvarı, FortiAnalyzer ve FortiManager yetkili satıcısı.",
                  color: "#EE3124",
                  badge: "Authorized Reseller",
                },
                {
                  brand: "Zimbra",
                  level: "Zimbra Türkiye Distribütörü",
                  desc: "Zimbra kurumsal e-posta çözümlerinde Türkiye resmi distribütörü.",
                  color: "#EC532B",
                  badge: "Official Distributor",
                },
              ].map((cert) => (
                <div key={cert.brand} className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-white/20 transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-black"
                      style={{ backgroundColor: cert.color + "20", color: cert.color }}>
                      {cert.brand.charAt(0)}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold border"
                      style={{ color: cert.color, borderColor: cert.color + "40", backgroundColor: cert.color + "15" }}>
                      {cert.badge}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#F5A623] transition-colors">{cert.brand}</h3>
                  <div className="text-xs font-semibold mb-3" style={{ color: cert.color }}>{cert.level}</div>
                  <p className="text-gray-500 text-sm leading-relaxed">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Yetki Belgesi */}
          <div className="mt-24 text-center">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Resmi Belge</span>
            <h2 className="text-3xl font-bold text-white mt-3 mb-4">Yetki Belgemiz</h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
              Resmi makamlar tarafından düzenlenen ISO/IEC 27001 yetki belgemiz ile güvenilir hizmet sunuyoruz.
            </p>
            <div className="inline-block rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 hover:border-[#F5A623]/30 transition-all">
              <Image
                src="https://afnteknoloji.com/wp-content/uploads/2023/02/Scan_20260314_121009-scaled.jpg"
                alt="AFN Teknoloji ISO 27001 Yetki Belgesi"
                width={800}
                height={1100}
                className="w-full max-w-2xl h-auto"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
