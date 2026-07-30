// SSS içeriği — hem ana sayfadaki SSS bölümü hem de FAQPage JSON-LD
// bu diziden beslenir; içerik birebir aynı kalmalıdır.
export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "İstanbul'da IT destek fiyatları nasıl belirlenir?",
    answer:
      "IT destek fiyatları; kullanıcı sayısı, sunucu ve network altyapısının büyüklüğü, istenen SLA süresi ve yerinde/uzaktan destek oranına göre belirlenir. AFN Teknoloji olarak ücretsiz keşif sonrasında ihtiyaca özel sabit aylık bakım anlaşması fiyatı sunuyoruz; böylece bütçeniz öngörülebilir kalır.",
  },
  {
    question: "Yerinde destek hangi ilçelere veriliyor?",
    answer:
      "Yerinde IT destek hizmetini İstanbul'un tüm ilçelerine veriyoruz. Merkezimiz Maltepe'de olduğu için Anadolu Yakası'nda (Maltepe, Kartal, Pendik, Kadıköy, Ataşehir, Ümraniye, Tuzla) müdahale süremiz özellikle kısadır; Avrupa Yakası'ndaki müşterilerimize de planlı ve acil yerinde destek sağlıyoruz.",
  },
  {
    question: "Bakım anlaşması neleri kapsar?",
    answer:
      "Standart bakım anlaşmamız; sınırsız uzaktan destek, planlı yerinde bakım ziyaretleri, sunucu ve network izleme, yedekleme kontrolü, güncelleme ve yama yönetimi, antivirüs/güvenlik takibi ile envanter raporlamasını kapsar. Kapsam, şirketinizin altyapısına göre özelleştirilir.",
  },
  {
    question: "Acil bir arızada müdahale süreniz nedir?",
    answer:
      "Bakım anlaşmalı müşterilerimize 7/24 telefon ve uzaktan destek sağlıyoruz. Uzaktan müdahale çoğunlukla dakikalar içinde başlar; yerinde müdahale gerektiren kritik arızalarda İstanbul içinde 2 saat müdahale SLA'sı sunuyoruz.",
  },
  {
    question: "Uzaktan destek nasıl çalışıyor, güvenli mi?",
    answer:
      "Uzaktan destek, sizin onayınızla kurulan şifreli bağlantı üzerinden yapılır. Her oturum kayıt altına alınır ve yalnızca yetkili mühendislerimiz erişebilir. AFN Teknoloji ISO 27001 bilgi güvenliği yönetim sistemi sertifikasına sahiptir; tüm süreçler bu standarda göre işletilir.",
  },
  {
    question: "Kaç kullanıcılı şirketlere hizmet veriyorsunuz?",
    answer:
      "5 kullanıcılı ofislerden 500+ kullanıcılı kurumsal yapılara kadar her ölçekte şirkete hizmet veriyoruz. Küçük ekipler için uygun maliyetli paketlerimiz, büyük yapılar için sunucu, sanallaştırma ve network yönetimini de içeren kapsamlı anlaşmalarımız mevcuttur.",
  },
  {
    question: "Sunucu ve network yönetimi de yapıyor musunuz?",
    answer:
      "Evet. Fiziksel ve sanal sunucu kurulumu (VMware, Hyper-V), Microsoft 365 ve Exchange yönetimi, firewall (Fortinet) yapılandırması, switch/kablosuz ağ kurulumu, yedekleme (Veeam) ve felaket kurtarma planlaması hizmetlerimizin parçasıdır.",
  },
  {
    question: "Bakım anlaşması olmadan tek seferlik destek alabilir miyim?",
    answer:
      "Evet, tek seferlik arıza müdahalesi ve proje bazlı hizmet de veriyoruz. Ancak düzenli bakım anlaşması; öncelikli SLA, sabit maliyet ve proaktif izleme avantajları sayesinde uzun vadede hem daha ekonomik hem de daha güvenlidir.",
  },
  {
    question: "Neden AFN Teknoloji'yi tercih etmeliyim?",
    answer:
      "2010'dan beri kurumsal bilişim alanında hizmet veriyoruz; 500'den fazla müşteriye ulaştık. ISO 27001 sertifikalı süreçlerimiz, 7/24 erişilebilir destek ekibimiz ve İstanbul içi 2 saat müdahale SLA'mız ile IT altyapınızı tek elden, ölçülebilir bir kaliteyle yönetiyoruz.",
  },
];
