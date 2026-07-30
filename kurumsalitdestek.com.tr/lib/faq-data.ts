// SSS içeriği — hem ana sayfadaki SSS bölümü hem de FAQPage JSON-LD
// bu diziden beslenir; iki yerdeki metin birebir aynı kalmalıdır.
export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Yönetilen BT hizmeti nedir, dış kaynak ne demek?",
    answer:
      "Yönetilen BT hizmeti, şirketinizin bilgi teknolojileri departmanının işletilmesini sözleşmeli bir dış uzman ekibe devretmenizdir. Arıza çıktığında adam çağırmak yerine; kullanıcı hesapları, cihaz envanteri, lisanslar, yedekleme, güvenlik ve raporlama sürekli olarak bizim sorumluluğumuzda yürür. Siz hizmet seviyesini ve bütçeyi belirlersiniz, biz sonucu taahhüt ederiz. Dış kaynak (outsourcing) bu devrin sözleşmeye bağlanmış hâlidir.",
  },
  {
    question: "Kendi BT personelimiz varsa yine de gerekir mi?",
    answer:
      "Evet, çoğu şirkette birlikte çalışma modeli daha verimlidir. İç personeliniz iş birimlerine yakın duran, süreçleri bilen kişidir; biz ise güvenlik, sanallaştırma, yedekleme ve ağ gibi uzmanlık gerektiren başlıkları, gece/hafta sonu kapsamını ve izin dönemlerini üstleniriz. Bu modelde iç personeliniz operasyonel yükten kurtulup şirkete değer katan projelere zaman ayırır.",
  },
  {
    question: "Aylık maliyet nasıl belirleniyor?",
    answer:
      "Fiyat; aktif kullanıcı sayısı, yönetilecek sunucu ve ağ cihazı adedi, seçtiğiniz hizmet seviyesi (SLA) ve kapsama mesai dışı desteğin dâhil olup olmadığına göre hesaplanır. Ücretsiz envanter çalışmasının ardından sabit aylık bir bedel sunuyoruz; yıl içinde kullanıcı sayınız değişirse bedel kademeli olarak güncellenir. Amaç, BT giderinizi tahmin edilebilir tek bir kaleme indirmektir.",
  },
  {
    question: "Sözleşme süresi ne kadar, çıkış hakkımız var mı?",
    answer:
      "Standart sözleşmelerimiz 12 aylıktır ve 30 gün önceden yazılı bildirimle feshedilebilir. Cezai şart uygulamıyoruz. Ayrılma kararı verirseniz tüm şifre kasası, dokümantasyon, lisans kayıtları ve envanter dosyaları eksiksiz biçimde size veya devralacak firmaya teslim edilir. Müşterinin kilitli kalmasını iş modelimizin parçası saymıyoruz.",
  },
  {
    question: "Mevcut BT firmamızdan geçiş nasıl oluyor?",
    answer:
      "Geçişi dört adımda yürütüyoruz: mevcut altyapının envanteri ve risk analizi, kapsam ile hizmet seviyesinin yazılı hâle getirilmesi, devir teslim (şifreler, lisanslar, alan adı ve e-posta yönetimi, dokümantasyon) ve izleme kurulumu. Devir teslim sırasında önceki firmanızla iletişimi biz yürütebiliriz. Kullanıcıların günlük işini kesintiye uğratmadan, çoğu şirkette 2-4 hafta içinde tamamlanır.",
  },
  {
    question: "Şifrelerimiz ve verilerimiz kimde duruyor?",
    answer:
      "Tüm yönetim şifreleri, şirketinize ait olan ve size de erişim verilen kurumsal bir şifre kasasında saklanır; kişisel not defterlerinde veya bireysel hesaplarda tutulmaz. Verileriniz sizin sistemlerinizde kalır, biz yalnızca yönetim erişimine sahibiz. Erişim kayıtları tutulur, personel değişikliğinde yetkiler aynı gün kapatılır. AFN Teknoloji ISO 27001 bilgi güvenliği yönetim sistemi sertifikasına sahiptir.",
  },
  {
    question: "Kaç kullanıcıdan itibaren mantıklı?",
    answer:
      "Pratikte 10 kullanıcıdan itibaren anlamlı hâle gelir. 10-25 kullanıcı bandındaki şirketler tam zamanlı BT personeli istihdam etmenin maliyetine katlanmadan kurumsal seviyede yönetim alır. 25-150 kullanıcı bandı en yaygın müşteri profilimizdir. Daha büyük yapılarda ise genellikle iç BT ekibini destekleyen karma model kurgulanır.",
  },
  {
    question: "Hangi raporları alıyoruz?",
    answer:
      "Her ay yönetime hitap eden bir BT sağlık raporu iletiyoruz: açılan ve kapanan talep sayısı, SLA'ya uyum oranı, tekrar eden sorunların kök neden analizi, yedekleme başarı yüzdesi, güvenlik olayları, lisans ve garanti bitiş takvimi ile önümüzdeki dönem için yatırım önerileri. Rapor teknik jargon yerine karar almanızı sağlayacak dille yazılır ve üç ayda bir yüz yüze gözden geçirilir.",
  },
];
