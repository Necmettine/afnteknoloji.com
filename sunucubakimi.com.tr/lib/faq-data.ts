// SSS içeriği — hem ana sayfadaki SSS bölümü hem de FAQPage JSON-LD
// bu diziden beslenir; içerik birebir aynı kalmalıdır.
export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Sunucu bakımı ne sıklıkla yapılmalı?",
    answer:
      "Uzaktan izleme sürekli çalışmalı; donanım sağlık kontrolü, disk/RAID durumu ve yedek doğrulaması aylık, firmware-BIOS ve sürücü güncellemeleri ile kapasite raporu üç ayda bir yapılmalıdır. Yılda bir kez de fiziksel bakım öneriyoruz: fan ve toz temizliği, kablo düzeni, UPS akü testi ve sunucu odası sıcaklık ölçümü. Kritik iş yükü taşıyan sunucularda aylık periyodu iki haftaya çekiyoruz.",
  },
  {
    question: "Bakım sırasında sistem kapanır mı?",
    answer:
      "Periyodik bakım kalemlerinin büyük bölümü sistem açıkken yapılır: izleme verisi analizi, log incelemesi, yedek doğrulama, disk ve RAID sağlık raporu, antivirüs ve kaynak kullanım kontrolü kesinti gerektirmez. Yalnızca firmware/BIOS güncellemesi, RAID denetleyici yazılımı ve bazı Windows Server yamaları yeniden başlatma ister. Bunlar önceden onayınızla mesai dışı bakım penceresine planlanır; sanallaştırılmış ortamlarda vMotion ile sanal makineler başka host'a taşınarak kesintisiz yürütülür.",
  },
  {
    question: "Eski sunucudan yeniye veri göçü nasıl yapılır?",
    answer:
      "Önce envanter ve bağımlılık analizi yapılır: hangi rol, uygulama, veritabanı ve paylaşım hangi sunucuda çalışıyor, kim bağlanıyor. Ardından hedef mimari kurulur ve göç yöntemi seçilir — fiziksel sunucular için P2V dönüşümü, sanaldan sanala V2V, dosya sunucuları için ACL koruyarak Robocopy/DFS, Active Directory için ek DC kurup FSMO rollerinin devri, veritabanları için yedek-geri yükleme veya log shipping. Göç öncesi tam yedek alınır, hafta sonu bakım penceresinde geçiş yapılır ve geri dönüş (rollback) planı hazır tutulur.",
  },
  {
    question: "Yedeklerimin çalıştığından nasıl emin olurum?",
    answer:
      "Yedekleme işinin 'başarılı' raporu tek başına yeterli değildir; yedek ancak geri döndüğünde yedektir. Veeam SureBackup ile yedekler izole bir test ortamında otomatik açılıp işletim sistemi, uygulama ve veritabanı seviyesinde doğrulanır. Buna ek olarak periyodik bakımda örnek dosya ve sanal makine geri yükleme testi yapıp sonucu raporluyoruz. 3-2-1 kuralını uyguluyoruz: en az üç kopya, iki farklı ortam, biri saha dışı; fidye yazılımına karşı değiştirilemez (immutable) yedek katmanı öneriyoruz.",
  },
  {
    question: "Fiziksel sunucu mu sanallaştırma mı?",
    answer:
      "Tek bir uygulama çalıştıran, çok yüksek G/Ç isteyen veya lisans nedeniyle özel donanıma bağlı iş yükleri dışında sanallaştırma neredeyse her zaman avantajlıdır. VMware vSphere veya Hyper-V ile aynı donanım üzerinde birden çok sunucu rolü izole çalışır; anlık görüntü, yedekleme, taşıma ve felaket kurtarma çok daha kolaydır. İki host ve paylaşımlı depolama ile kurulan bir küme, tek fiziksel sunucudan hem daha yüksek erişilebilirlik hem de daha iyi kaynak verimliliği sağlar. Doğru karar için mevcut CPU, RAM, IOPS ve büyüme eğiliminizi ölçerek öneri sunuyoruz.",
  },
  {
    question: "Sunucu arızasında müdahale süresi nedir?",
    answer:
      "Bakım anlaşmalı müşterilerimizde önceliğe göre çalışıyoruz: sunucunun tamamen durduğu kritik arızalarda 2 saat, yedekliliğin kaybolduğu (disk arızası, güç kaynağı arızası, başarısız yedekleme) yüksek öncelikli durumlarda 4 saat, tek kullanıcıyı etkileyen veya planlı taleplerde 8 saat içinde müdahale ediyoruz. Uzaktan müdahale çoğu vakada dakikalar içinde başlar; yerinde gerekiyorsa İstanbul içinde saha ekibimiz yönlendirilir. Kritik sunucular için yedek parça (disk, güç kaynağı, bellek) bulundurma planı da anlaşmaya eklenebilir.",
  },
  {
    question: "Windows Server lisansı dahil mi?",
    answer:
      "Hayır, işletim sistemi ve sanallaştırma lisansları hizmet bedeline dahil değildir; bunlar müşteri adına satın alınır ve müşteriye ait olur. Buna karşılık lisans planlamasını biz yapıyoruz: Windows Server Standard mı Datacenter mı gerektiği, fiziksel çekirdek sayısına göre kaç çekirdek lisansı alınacağı, CAL türü (kullanıcı veya cihaz) ve VMware vSphere sürüm seçimi konusunda maliyet karşılaştırmalı öneri sunuyoruz. Lisansı bizden veya başka bir kanaldan temin edebilirsiniz; kurulum ve etkinleştirme hizmet kapsamındadır.",
  },
  {
    question: "Uzaktan mı yerinde mi destek veriyorsunuz?",
    answer:
      "İkisini birlikte veriyoruz. Sunucu yönetiminin büyük bölümü — izleme, yama, log analizi, yedek doğrulama, yapılandırma — uzaktan güvenli ve kayıt altındaki bağlantıyla yapılır. Donanım değişimi, yeni sunucu kurulumu, kablolama, sunucu odası ve UPS kontrolü gibi işler için İstanbul genelinde yerinde geliyoruz. Merkezimiz Maltepe'de olduğundan Anadolu Yakası'nda müdahale süremiz özellikle kısadır; sunucu bulunmayan lokasyonlar için de iDRAC/iLO gibi uzaktan yönetim kartları üzerinden fiziksel erişim olmadan müdahale edebiliyoruz.",
  },
  {
    question: "Sunucumuz kaç yıl kullanılabilir, ne zaman yenilemeliyiz?",
    answer:
      "Kurumsal sunucularda üretici garantisi tipik olarak 3 yıl, uzatmalarla 5 yıla çıkar. 5. yıldan sonra yedek parça tedariki zorlaşır, güç verimliliği düşer ve arıza olasılığı belirgin artar. Yenileme kararını yaşa değil verilere dayandırıyoruz: CPU ve bellek doygunluğu, disk yazma aşınması (SSD wear), destek durumu, işletim sistemi desteğinin bitiş tarihi ve arıza geçmişi. Kapasite raporumuz bu göstergeleri izler ve yenileme ihtiyacını genellikle 6-12 ay öncesinden bildirir.",
  },
  {
    question: "Sunucu odası için hangi ortam koşulları gerekli?",
    answer:
      "Sunucu odası sıcaklığı 18-27 °C, bağıl nem %40-60 aralığında tutulmalı; kabin önü soğuk, arkası sıcak koridor düzeni korunmalıdır. Kesintisiz güç kaynağı, sunucuların düzenli kapanmasına yetecek süreyi (en az 10-15 dakika) sağlamalı ve aküleri yılda en az bir kez test edilmelidir. Ayrıca toz kontrolü, kilitli kabin, yangın algılama ve ortam sıcaklığı için alarmlı sensör öneriyoruz. Bakım ziyaretlerinde bu kalemleri ölçüp raporluyoruz.",
  },
];
