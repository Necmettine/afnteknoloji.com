import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Veri Sorumlusu",
    content:
      'Bu Gizlilik Politikasi, AFN Teknoloji Bilisim Hizmetleri A.S. tarafindan hazirlanmistir. Sirketimiz Maltepe ve Beylikduzu, Istanbul adreslerinde faaliyet gostermektedir.',
  },
  {
    title: "2. Toplanan Veriler",
    content:
      "Web sitemizi ziyaret ettiginizde veya formlarimizi kullandiginizda asagidaki veriler islenebilir:\n\n• Ad, soyad ve unvan bilgileri\n• E-posta adresi ve telefon numarasi\n• Sirket adi ve pozisyon bilgileri\n• Iletisim ve destek formlari araciligiyla iletilen mesajlar\n• IP adresi, cihaz ve tarayici bilgileri\n• Cerez tercihleri ve temel kullanim verileri",
  },
  {
    title: "3. Verilerin Islenme Amaclari",
    content:
      "Kisisel verileriniz asagidaki amaclarla islenebilir:\n\n• Talep ettiginiz hizmetlerin sunulmasi\n• Teknik destek ve musteri hizmetleri\n• Teklif hazirlama ve satis surecleri\n• Yasal yukumluluklerin yerine getirilmesi\n• Hizmet kalitesinin iyilestirilmesi\n• Guvenlik ve kotuye kullanim onleme",
  },
  {
    title: "4. Verilerin Saklanmasi ve Guvenligi",
    content:
      "Kisisel verileriniz ilgili mevzuat cercevesinde gerekli sure boyunca guvenli sekilde saklanir. Verilerin korunmasi icin erisim kontrolu, sinirli yetkilendirme ve duzenli guvenlik onlemleri uygulanir.",
  },
  {
    title: "5. Ucuncu Taraflarla Paylasim",
    content:
      "Kisisel verileriniz; yasal yukumlulukler, form taleplerinin operasyonel yonetimi ve acik rizanizla izin verdiginiz olcumleme araclari disinda ucuncu taraflarla paylasilmaz. Zorunlu durumlarda yetkili kurum ve kuruluslarla paylasim yapilabilir.",
  },
  {
    title: "6. Cerez Politikasi",
    content:
      "Web sitemizde cerez tercihlerinizi yonetebilmeniz icin bir onay mekanizmasi bulunur. Olcumleme ve etiket yonetimi amacli araclar yalnizca onay vermeniz halinde devreye alinir. Tarayici ayarlarinizdan cerezleri silebilir veya engelleyebilirsiniz.",
  },
  {
    title: "7. KVKK Kapsamindaki Haklariniz",
    content:
      "6698 sayili Kisisel Verilerin Korunmasi Kanunu kapsaminda; verilerinizin islenip islenmedigini ogrenme, bilgi talep etme, duzeltme isteme, silme veya yok edilmesini talep etme ve ilgili diger haklarinizi kullanabilirsiniz.",
  },
  {
    title: "8. Iletisim",
    content:
      "Gizlilik politikamiz hakkinda sorulariniz veya KVKK kapsamindaki talepleriniz icin:\n\nE-posta: info@afnteknoloji.com\nTelefon: +90 216 572 50 40\nAdres: Maltepe / Beylikduzu, Istanbul",
  },
  {
    title: "9. Politika Guncellemeleri",
    content:
      "Bu Gizlilik Politikasi zaman zaman guncellenebilir. Onemli degisiklikler web sitemizde duyurulur. Son guncelleme tarihi: Nisan 2026.",
  },
];

export default function GizlilikPolitikasiPage() {
  return (
    <main className="bg-[#0A0E1A] min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-black text-white mb-4">Gizlilik Politikasi</h1>
          <p className="text-gray-400 mb-12">Son guncelleme: Nisan 2026</p>

          <div className="prose prose-invert max-w-none space-y-8">
            {sections.map((section) => (
              <div key={section.title} className="bg-white/3 border border-white/8 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-3">{section.title}</h2>
                <p className="text-gray-400 leading-relaxed whitespace-pre-line text-sm">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
