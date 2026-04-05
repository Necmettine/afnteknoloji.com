import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight, Shield, Cloud, Users, Mail, HardDrive, Share2 } from "lucide-react";

const products = [
  {
    icon: Users,
    name: "Microsoft Teams",
    color: "#6264A7",
    desc: "Ekip iletişimi, video konferans, dosya paylaşımı ve proje yönetimini tek platformda birleştiren iş birliği çözümü.",
    features: ["Sınırsız video toplantı", "Ekip kanalları ve sohbet", "Dosya paylaşımı ve ortak düzenleme", "3rd parti uygulama entegrasyonu", "Mobil uygulama desteği"],
  },
  {
    icon: HardDrive,
    name: "OneDrive",
    color: "#0364B8",
    desc: "Kurumsal bulut depolama çözümüyle dosyalarınıza her yerden, her cihazdan güvenle erişin.",
    features: ["1 TB kişisel bulut depolama", "Otomatik yedekleme", "Sürüm geçmişi", "Çevrimdışı erişim", "Gelişmiş paylaşım izinleri"],
  },
  {
    icon: Share2,
    name: "SharePoint",
    color: "#038387",
    desc: "Kurumsal intranet, belge yönetimi ve iş birliği portalı oluşturmak için güçlü platform.",
    features: ["Özelleştirilebilir intranet portalı", "Merkezi belge yönetimi", "İş akışı otomasyonu", "Rol tabanlı erişim kontrolü", "Teams ile tam entegrasyon"],
  },
  {
    icon: Mail,
    name: "Exchange Online",
    color: "#0078D4",
    desc: "Kurumsal e-posta, takvim ve kişiler yönetimi için güvenilir ve ölçeklenebilir bulut çözümü.",
    features: ["50 GB posta kutusu", "Gelişmiş spam ve kötü amaçlı yazılım koruması", "Paylaşılan takvim ve kişiler", "Mobil cihaz yönetimi", "E-posta arşivleme"],
  },
  {
    icon: Cloud,
    name: "Azure Active Directory",
    color: "#0078D4",
    desc: "Kimlik ve erişim yönetimi platformuyla kullanıcılarınızı ve kaynaklarınızı merkezi olarak yönetin.",
    features: ["Tek oturum açma (SSO)", "Çok faktörlü kimlik doğrulama (MFA)", "Koşullu erişim politikaları", "Kullanıcı yaşam döngüsü yönetimi", "Kurumsal uygulama entegrasyonu"],
  },
  {
    icon: Shield,
    name: "Microsoft 365 Güvenlik",
    color: "#D83B01",
    desc: "Defender, Intune ve Purview ile uçtan uca kurumsal güvenlik, uyumluluk ve cihaz yönetimi.",
    features: ["Microsoft Defender for Business", "Intune ile cihaz yönetimi", "Veri kaybı önleme (DLP)", "Bilgi koruma etiketleri", "Güvenlik skoru izleme"],
  },
];

const plans = [
  {
    name: "Microsoft 365 Business Basic",
    price: "Uygun fiyatlı başlangıç",
    color: "#0078D4",
    features: ["Exchange Online", "Teams", "SharePoint & OneDrive", "Web & mobil Office uygulamaları", "1 TB OneDrive depolama"],
    recommended: false,
  },
  {
    name: "Microsoft 365 Business Standard",
    price: "En popüler plan",
    color: "#F5A623",
    features: ["Business Basic'teki her şey", "Masaüstü Office uygulamaları", "Teams webinar özelliği", "Müşteri rezervasyon uygulaması", "Gelişmiş güvenlik özellikleri"],
    recommended: true,
  },
  {
    name: "Microsoft 365 Business Premium",
    price: "Tam koruma",
    color: "#107C10",
    features: ["Business Standard'daki her şey", "Azure AD Premium P1", "Microsoft Intune", "Microsoft Defender for Business", "Azure Information Protection"],
    recommended: false,
  },
];

export default function Microsoft365Page() {
  return (
    <main className="bg-[#0A0E1A] text-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0078D4]/10 via-transparent to-[#F5A623]/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0078D4]/10 border border-[#0078D4]/20 text-[#0078D4] text-sm font-semibold mb-6">
              Microsoft Silver Partner
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Microsoft 365<br />
              <span className="text-gradient">Kurumsal Çözümleri</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              AFN Teknoloji olarak Microsoft Silver Partner sıfatıyla işletmeniz için en uygun Microsoft 365 lisansını temin ediyor, kurulum, yapılandırma ve teknik destek hizmetleri sunuyoruz.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/iletisim" className="flex items-center gap-2 px-7 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all hover:shadow-xl hover:shadow-orange-500/30">
                Teklif Al <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/is-ortaklarimiz" className="flex items-center gap-2 px-7 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                Microsoft Ortaklığımız
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Neden AFN ile Microsoft 365 */}
      <section className="py-16 bg-[#080C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Yetkili Satış", desc: "Microsoft Silver Partner olarak resmi lisans satışı yapıyoruz." },
              { title: "Hızlı Kurulum", desc: "Tenant oluşturma ve geçişleri 24-48 saat içinde tamamlıyoruz." },
              { title: "Veri Güvenliği", desc: "Tüm geçişlerde sıfır veri kaybı garantisiyle çalışıyoruz." },
              { title: "7/24 Destek", desc: "Microsoft 365 konusunda kesintisiz teknik destek sunuyoruz." },
            ].map((item, i) => (
              <div key={i} className="gradient-border rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-[#0078D4]/20 flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-[#0078D4]" />
                </div>
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
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Ürünler ve Hizmetler</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-4">Microsoft 365 Uygulama Ailesi</h2>
            <p className="text-gray-400 max-w-xl mx-auto">İşletmenizin ihtiyaçlarına göre en doğru Microsoft 365 uygulamalarını seçiyor, yapılandırıyor ve destekliyoruz.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.name} className="gradient-border rounded-2xl p-8 hover:border-[#F5A623]/30 transition-all group hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${p.color}20` }}>
                    <p.icon className="w-5 h-5" style={{ color: p.color }} />
                  </div>
                  <h3 className="font-bold text-white">{p.name}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">{p.desc}</p>
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: p.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planlar */}
      <section className="py-24 bg-[#080C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Lisans Planları</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-4">İşletmenize Uygun Planı Seçin</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Tüm planlar kullanıcı başına aylık lisans modeliyle sunulmaktadır. En uygun planı birlikte belirleyelim.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name}
                className={`gradient-border rounded-2xl p-8 relative transition-all hover:-translate-y-1 ${plan.recommended ? "border-[#F5A623]/40" : ""}`}>
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#F5A623] text-black text-xs font-bold rounded-full whitespace-nowrap">
                    EN POPÜLER
                  </div>
                )}
                <div className="mb-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: `${plan.color}20`, color: plan.color }}>
                    {plan.price}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mt-3 mb-6">{plan.name}</h3>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: plan.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/iletisim"
                  className="block text-center py-3 rounded-xl font-semibold transition-all"
                  style={{ backgroundColor: `${plan.color}20`, color: plan.color, border: `1px solid ${plan.color}30` }}>
                  Teklif İste
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmet süreci */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Nasıl Çalışıyoruz</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-4">Microsoft 365 Kurulum Süreci</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Analiz", desc: "Mevcut altyapınızı ve ihtiyaçlarınızı değerlendiriyoruz." },
              { step: "02", title: "Lisans", desc: "En uygun planı belirliyoruz ve lisansları temin ediyoruz." },
              { step: "03", title: "Kurulum", desc: "Tenant yapılandırması, kullanıcı aktarımı ve entegrasyonları gerçekleştiriyoruz." },
              { step: "04", title: "Eğitim & Destek", desc: "Kullanıcı eğitimi verilir, 7/24 teknik destek başlar." },
            ].map((s) => (
              <div key={s.step} className="gradient-border rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-[#F5A623]/30 mb-3">{s.step}</div>
                <h3 className="font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#080C18]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Microsoft 365'e geçmeye hazır mısınız?</h2>
          <p className="text-gray-400 mb-8">Uzman ekibimiz ihtiyaçlarınızı analiz ederek en uygun planı ve geçiş stratejisini belirler.</p>
          <a href="/iletisim" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all hover:shadow-xl hover:shadow-orange-500/30">
            Ücretsiz Danışmanlık Al <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
