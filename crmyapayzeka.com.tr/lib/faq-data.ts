// SSS içeriği — hem ana sayfadaki SSS bölümü hem de FAQPage JSON-LD
// bu diziden beslenir; içerik birebir aynı kalmalıdır.
export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Yapay zeka ile CRM ne işe yarar?",
    answer:
      "Yapay zeka destekli bir CRM, sadece müşteri kaydı tutmaz; ERP'nizdeki gerçek veriyi işleyerek bakiye, vade, teklif ve sipariş durumunu anlamlandırır. Teklif metni ve müşteri e-postası taslağı üretir, riskli cari hesapları öne çıkarır, tekrar eden veri girişini ortadan kaldırır. Kısacası ekibinizin ekrana bakıp elle yaptığı işlerin önemli bölümünü sistem üstlenir; insan yalnızca karar verir ve onaylar.",
  },
  {
    question: "Mevcut ERP'mizle (Wolvox, Netsis) entegre olur mu?",
    answer:
      "Evet. Geliştirdiğimiz sistemler doğrudan ERP veritabanı üzerinde çalışacak şekilde tasarlanıyor. Akınsoft Wolvox ve Netsis ile canlı ortamda çalışan entegrasyonlarımız var: Wolvox'ta cari, stok, döviz ve hareket tablolarıyla; Netsis'te ürün kartı, stok ve sipariş verisiyle çift yönlü çalışıyoruz. Amaç ERP'yi değiştirmek değil, üzerine ekibin gerçekten kullanacağı bir katman koymak.",
  },
  {
    question: "İş akışı otomasyonu ne kadar sürede kurulur?",
    answer:
      "Tek bir akış (örneğin talep formu → onay → tedarikçiye e-posta) genellikle 2-4 hafta içinde pilot olarak çalışır hale gelir. Çok modüllü bir CRM veya portal projesi ise keşif dahil 2-3 ayda devreye alınır ve sonrasında modül modül büyütülür. Baştan büyük bir proje yerine, ilk gün ölçülebilir fayda veren küçük bir akışla başlamayı tercih ediyoruz.",
  },
  {
    question: "Verilerimiz nerede tutuluyor?",
    answer:
      "Varsayılan olarak veriniz sizin altyapınızda kalır: kendi sunucunuzda veya seçtiğiniz veri merkezinde. ERP veritabanınız yerinde çalışmaya devam eder, uygulama da aynı ağ içinde konumlanır. Yapay zeka özellikleri için dışarıya veri gönderilmesi gerektiğinde bunu açıkça belirtir, hangi alanların gönderileceğini sizinle birlikte sınırlandırırız; istenirse bu özellikler tamamen kapatılabilir.",
  },
  {
    question: "Küçük işletme için de mantıklı mı?",
    answer:
      "Evet, hatta çoğu zaman etkisi daha büyüktür. Küçük ekiplerde tek bir kişinin her gün 1-2 saatini alan kur girişi, teklif hazırlama veya bakiye kontrolü gibi işler vardır; bunlar otomatikleştiğinde kazanç anında görülür. Bu tür işletmelerde tek bir akışla başlayıp, işe yaradığını gördükçe genişletmeyi öneriyoruz.",
  },
  {
    question: "Hazır bir CRM satın almakla sizinle çalışmak arasındaki fark ne?",
    answer:
      "Hazır CRM'ler kendi veri modelini dayatır; ERP'nizle uyumu genellikle dışarıdan yazılan aktarımlarla sağlanır ve süreçlerinizi yazılıma uydurmanız beklenir. Biz tersini yapıyoruz: mevcut ERP verinizi kaynak kabul edip süreçlerinize göre modül geliştiriyoruz. AfnCrm ve ShamashAi gibi kendi ürünlerimizi de aynı yöntemle geliştirdiğimiz için, ürettiğimiz sistemi biz de her gün kullanıyoruz.",
  },
  {
    question: "Yapay zeka verdiği çıktılarda hata yaparsa ne oluyor?",
    answer:
      "Kurduğumuz akışlarda yapay zeka son karar mercii değildir. Üretilen teklif metni, e-posta taslağı veya sınıflandırma her zaman bir kullanıcı onayından geçer; finansal etkisi olan işlemler (kur yazma, sipariş oluşturma) ise kural tabanlı çalışır ve kaynağı doğrulanabilir. Böylece hız yapay zekadan, doğruluk kuraldan ve insan onayından gelir.",
  },
  {
    question: "Projeye nasıl başlıyorsunuz?",
    answer:
      "Dört adımlı ilerliyoruz: keşif (mevcut süreç, ERP ve veri yapısının çıkarılması), pilot (tek bir akışın gerçek veriyle çalışır hale getirilmesi), entegrasyon (ERP ve diğer sistemlerle bağlantı, yetkilendirme, raporlama) ve devreye alma (eğitim, canlıya geçiş ve iyileştirme). Her adımın sonunda çalışan bir çıktı olur; sunum değil, kullanılabilir bir ekran.",
  },
  {
    question: "Devreye aldıktan sonra destek veriyor musunuz?",
    answer:
      "Evet. Geliştirdiğimiz sistemler bizim tarafımızdan güncelleniyor ve izleniyor; ERP sürüm değişiklikleri, yeni modül talepleri ve hata düzeltmeleri destek kapsamında ilerliyor. AFN Teknoloji aynı zamanda kurumsal BT destek hizmeti verdiği için, uygulamanın altındaki sunucu ve ağ tarafını da tek elden yönetebiliyoruz.",
  },
];
