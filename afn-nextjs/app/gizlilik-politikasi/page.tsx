import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Veri Sorumlusu",
    content: `Bu Gizlilik Politikası, AFN Teknoloji Bilişim Hizmetleri A.Ş. (bundan böyle "AFN Teknoloji" veya "Şirket" olarak anılacaktır) tarafından hazırlanmıştır. Şirketimiz, Maltepe ve Beylikdüzü, İstanbul adresinde faaliyet göstermektedir.`,
  },
  {
    title: "2. Toplanan Veriler",
    content: `Web sitemizi ziyaret ettiğinizde veya hizmetlerimizi kullandığınızda aşağıdaki kişisel veriler toplanabilir:\n\n• Ad, soyad ve unvan bilgileri\n• E-posta adresi ve telefon numarası\n• Şirket adı ve pozisyon bilgileri\n• IP adresi ve tarayıcı bilgileri\n• İletişim formları aracılığıyla iletilen mesajlar\n• Çerezler ve oturum verileri`,
  },
  {
    title: "3. Verilerin İşlenme Amaçları",
    content: `Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:\n\n• Talep ettiğiniz hizmetlerin sunulması\n• Teknik destek ve müşteri hizmetleri\n• Teklif hazırlama ve satış süreçleri\n• Yasal yükümlülüklerin yerine getirilmesi\n• Hizmet kalitesinin iyileştirilmesi\n• Güvenlik ve dolandırıcılık önleme`,
  },
  {
    title: "4. Verilerin Saklanması ve Güvenliği",
    content: `Kişisel verileriniz, ilgili mevzuat çerçevesinde belirlenen süreler boyunca güvenli sunucularda saklanmaktadır. Verilerinizin güvenliği için SSL şifreleme, güvenli erişim kontrolleri ve düzenli güvenlik denetimleri uygulanmaktadır.`,
  },
  {
    title: "5. Üçüncü Taraflarla Paylaşım",
    content: `Kişisel verileriniz; yasal zorunluluklar, iş ortakları ile hizmet sunumu, ödeme işlemcileri ve kanunen yetkili kurum ve kuruluşlar haricinde üçüncü taraflarla paylaşılmamaktadır. Google Analytics gibi analitik araçlar anonim veriler toplamaktadır.`,
  },
  {
    title: "6. Çerez Politikası",
    content: `Web sitemiz, kullanıcı deneyimini iyileştirmek amacıyla çerezler kullanmaktadır. Zorunlu çerezler (oturum yönetimi), analitik çerezler (Google Analytics) ve tercih çerezleri kullanılmaktadır. Tarayıcı ayarlarınızdan çerezleri yönetebilirsiniz.`,
  },
  {
    title: "7. KVKK Kapsamındaki Haklarınız",
    content: `6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aşağıdaki haklara sahipsiniz:\n\n• Kişisel verilerinizin işlenip işlenmediğini öğrenme\n• İşlenmişse buna ilişkin bilgi talep etme\n• İşlenme amacını öğrenme ve amacına uygun kullanılıp kullanılmadığını öğrenme\n• Eksik veya yanlış işlenmesi halinde düzeltilmesini isteme\n• Kanunda öngörülen hallerde silinmesini veya yok edilmesini isteme\n• İşlemenin kısıtlanmasını talep etme\n• Veri taşınabilirliği hakkı`,
  },
  {
    title: "8. İletişim",
    content: `Gizlilik politikamız hakkında sorularınız veya KVKK kapsamında talepleriniz için:\n\nE-posta: info@afnteknoloji.com\nTelefon: +90 216 572 50 40\nAdres: Maltepe / Beylikdüzü, İstanbul`,
  },
  {
    title: "9. Politika Güncellemeleri",
    content: `Bu Gizlilik Politikası zaman zaman güncellenebilir. Önemli değişiklikler web sitemizde duyurulacaktır. Son güncelleme tarihi: Ocak 2024.`,
  },
];

export default function GizlilikPolitikasiPage() {
  return (
    <main className="bg-[#0A0E1A] min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-black text-white mb-4">Gizlilik Politikası</h1>
          <p className="text-gray-400 mb-12">Son güncelleme: Ocak 2024</p>

          <div className="prose prose-invert max-w-none space-y-8">
            {sections.map((s) => (
              <div key={s.title} className="bg-white/3 border border-white/8 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-3">{s.title}</h2>
                <p className="text-gray-400 leading-relaxed whitespace-pre-line text-sm">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
