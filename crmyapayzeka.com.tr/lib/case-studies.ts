// Vaka çalışmaları — ana sayfadaki özet kartlar, /vaka-calismalari/ detay
// bölümleri ve Article JSON-LD aynı kaynaktan beslenir.
export interface CaseStudy {
  /** Sayfa içi bağlantı hedefi */
  slug: string;
  title: string;
  /** Sayfa içi gezinme bağlantılarında kullanılan kısa ad */
  short: string;
  /** Kart üstünde görünen kısa etiket */
  tag: string;
  /** Ana sayfadaki özet kart metni */
  summary: string;
  /** Detay sayfasındaki giriş paragrafı */
  intro: string;
  /** Detay sayfasındaki maddeler */
  highlights: string[];
  /** Sonuç vurgusu */
  outcome: string;
  /** Varsa dış bağlantı */
  externalUrl?: string;
  externalLabel?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "afncrm",
    short: "AfnCrm",
    title: "AfnCrm — Wolvox ERP üzerine kurulan kurumsal CRM",
    tag: "Kendi ürünümüz · Wolvox ERP · GPT-4o",
    summary:
      "Akınsoft Wolvox ERP verisiyle çalışan, 25'ten fazla modülden oluşan kurumsal CRM. El yazısı servis formlarını yapay zekayla okur, döviz kurunu ERP'ye kendi yazar, teklif ve tahsilat takibini otomatikleştirir.",
    intro:
      "AfnCrm, AFN Teknoloji'nin kendi geliştirdiği ve her gün kendi operasyonunda kullandığı kurumsal CRM uygulamasıdır. Ayrı bir veri adası kurmak yerine doğrudan Akınsoft Wolvox ERP verisi üzerinde çalışır; cari, stok ve döviz tabloları kaynak kabul edilir, CRM bu verinin üzerine satış, teklif, saha ve finans süreçlerini ekler. .NET tabanlı uygulama bugün müşteri yönetimi, teklif hazırlama ve e-onay, servis/ziyaret takibi, iş takibi, fatura eşleştirme, tahsilat hatırlatma, izin yönetimi, periyodik hizmet, haftalık plan ve raporlama modüllerini tek çatı altında toplar. Yapay zeka bu akışların içine gömülüdür: ayrı bir 'AI özelliği' değil, günlük işin parçasıdır.",
    highlights: [
      "El yazısı servis formunu yapay zeka okuyor: Teknisyenin sahada doldurduğu ziyaret/iş takip formunun fotoğrafı sisteme yüklendiğinde GPT-4o görüntüyü okur; ziyaret tarihi, giriş–çıkış saatleri ve yapılan iş açıklaması otomatik çıkarılıp kayda işlenir. Model 'emin olmadığın alanı boş bırak' talimatıyla çalışır — uydurma veri üretmez, okunamayan alan boş kalır ve insana sorulur. Soluk, sararmış veya el yazısı formlar da desteklenir (JPG, PNG, WEBP).",
      "Yapay zeka destekli kurumsal e-posta üretimi: Blog içeriklerinden veya satışçının yazdığı kısa yönlendirmeden, kurumsal şablona uygun tanıtım e-postası (başlık, giriş, problem tanımı, üç özellik bloğu, kapanış, CTA) JSON olarak üretilir. Alıcı ile gönderen ayrımı prompt düzeyinde korunur; her çıktı gönderilmeden önce insan onayından geçer.",
      "Cari yaşlandırma raporu: FIFO vade mahsubu ile hesaplanan bakiye analizi, ERP'nin kendi raporuyla birebir tutar. Hangi faturanın hangi tahsilatla kapandığı satır satır izlenebilir; TL ve döviz hesaplar ayrı ayrı doğru hesaplanır.",
      "Otomatik döviz kuru senkronizasyonu: Ziraat Bankası efektif satış kurları (USD ve EUR) gün içinde beş ayrı saatte çekilip doğrudan ERP'nin döviz kartı ve hareket tablolarına yazılır. Muhasebenin elle kur girmesine gerek kalmaz; gerekirse ekrandaki butonla anlık senkronizasyon da yapılabilir.",
      "Teklif hattı ve elektronik onay: Talep Outlook'tan, lisans yenileme uyarısından veya elle açılır; satışçıya atanır, hazırlanan teklif müşteriye gönderilir ve müşterinin onay/ret yanıtı sisteme geri işlenir. Yanıt değişirse ilgililere bildirim gider. Teklif PDF'leri SharePoint'te klasörlenir, tutar bilgisi PDF'ten otomatik okunur.",
      "Lisans ve tahsilat hatırlatmaları: Süresi 30 güne inen lisans için sistem kendiliğinden teklif talebi açar. Vadesi geçen bakiyeler için TL ve USD eşik değerine göre hatırlatma e-postaları planlanır; aynı gün mükerrer gönderimi kalıcı kilit engeller.",
      "Ulaşılamayan alıcı taraması: Gönderilen toplu e-postaların dönüş kutuları taranır, ulaşılamayan adresler metinden ayıklanıp listeden düşülür — böylece kampanya listesi kendi kendini temizler.",
      "Merkezi yetkilendirme ve güvenlik: Modül/sayfa bazlı izin katalogu üzerinden dinamik yetki politikaları üretilir; rol varsayılanının üzerine kişiye özel izin tanımlanır. Çok adımlı doğrulama (TOTP) desteklenir.",
      "Elektronik taahhütname kapısı: Kurumsal belgeler çalışanlara elektronik olarak onaylatılır; inceleme süresi dolduğunda uygulama erişimi kilitlenir. Onay kimin, ne zaman verdiğiyle birlikte kayıt altındadır.",
      "Microsoft 365 entegrasyonu: Outlook üzerinden gelen talepler CRM'e düşer, dosyalar Graph API ile SharePoint/OneDrive'a yazılır; teklif, servis formu ve görev ekleri kurumsal depolamada düzenli klasörlenir.",
    ],
    outcome:
      "Muhasebenin her gün elle yaptığı kur girişi ve bakiye kontrolü otomatikleşti; sahadan gelen el yazısı formlar fotoğrafla birlikte dijital kayda dönüştü; satış, finans ve teknik ekip aynı doğrulanabilir veriye bakar hale geldi.",
  },
  {
    slug: "netsis-siparis-recete-portali",
    short: "Netsis Sipariş Portalı",
    title:
      "Aydınlatma üreticisi için sipariş ve reçete (BOM) talep akışı — Netsis entegrasyonu",
    tag: "Müşteri projesi · Netsis ERP",
    summary:
      "Dış ticaret ekibinin sipariş ve alt reçete taleplerini yönettiği portal. Talep → Netsis kontrolü → stok eşleşmesi → onay → tedarikçiye otomatik e-posta.",
    intro:
      "Aydınlatma sektöründe faaliyet gösteren bir üretici için, dış ticaret ekibinin sipariş ve alt reçete (BOM) taleplerini uçtan uca yönettiği bir portal geliştirdik. Talepler daha önce e-posta ve Excel dosyaları arasında ilerliyordu; kimin neyi ne zaman istediği ve talebin hangi aşamada olduğu takip edilemiyordu.",
    highlights: [
      "Talep formu: Dış ticaret ekibi sipariş veya alt reçete talebini tek bir form üzerinden açar.",
      "Netsis kontrolü: Talep edilen ürünün Netsis ERP'de tanımlı olup olmadığı otomatik olarak kontrol edilir; tanımlı değilse süreç ürün kartı açılışına yönlendirilir.",
      "Güncel stokla eşleştirme: Ürün, Netsis'teki güncel stok bilgisiyle eşleştirilir ve talep sahibi stok görünümü üzerinden seçim yapar.",
      "Onay akışı: Talep ilgili yöneticinin onayına düşer; onay ve ret adımları kayıt altındadır.",
      "Tedarikçiye otomatik e-posta: Onaylanan talep için tedarikçiye otomatik talep e-postası oluşturulur ve gönderilir.",
      "Tek akışta iki tür talep: Hem bitmiş ürün siparişleri hem de yurt dışından hammadde/yarı mamul talepleri aynı akışta yönetilir.",
    ],
    outcome:
      "E-posta ve Excel'de dağınık ilerleyen talep süreci tek akışta izlenebilir hale geldi; her talebin hangi aşamada olduğu ve kimin onayında beklediği anlık olarak görülüyor.",
  },
  {
    slug: "shamashai",
    short: "ShamashAi",
    title: "ShamashAi — BT görünürlüğü ve güvenlik izleme platformu",
    tag: "Kendi ürünümüz · BT görünürlüğü",
    summary:
      "Orta ölçekli işletmeler için BT envanteri ve hafif SIEM platformu: dosya bütünlüğü izleme, yama ve zafiyet takibi, kimlik hijyeni, uzaktan müdahale.",
    intro:
      "ShamashAi, AFN Teknoloji'nin orta ölçekli işletmeler için geliştirdiği BT envanteri ve hafif SIEM platformudur. Büyük kurumsal güvenlik ürünlerinin karmaşıklığı ve maliyeti olmadan, bir işletmenin sunucu, istemci ve ağ cihazlarından oluşan dağınık ortamını tek ekranda görünür kılmayı hedefler.",
    highlights: [
      "Dosya bütünlüğü izleme (FIM): Kritik dizin ve dosyalardaki değişikliklerin tespiti.",
      "Yama yönetimi: Eksik güncellemelerin envanter üzerinden takibi.",
      "Zafiyet takibi: Bilinen zafiyetlerin ve kullanım ömrü dolmuş (EOL) işletim sistemlerinin raporlanması.",
      "Kimlik hijyeni denetimi: Hesap, yetki ve parola politikası uyumsuzluklarının çıkarılması.",
      "Ağ cihazı yapılandırma yedekleme: Switch, firewall ve benzeri cihaz yapılandırmalarının düzenli yedeklenmesi.",
      "İmzalı komutlarla uzaktan müdahale kanalı: Uç noktalarda yalnızca imzalanmış ve yetkilendirilmiş komutların çalıştırılabildiği kontrollü müdahale yolu.",
      "Microsoft 365 denetim kaydı takibi: Bulut tarafındaki oturum ve yönetim olaylarının izlenmesi.",
    ],
    outcome:
      "Dağınık BT ortamı tek ekrandan izlenebilir hale geldi; riskli değişiklikler oluştuğu anda fark ediliyor.",
  },
  {
    slug: "afnriskscan",
    short: "AfnRiskScan",
    title: "AfnRiskScan — kurumsal risk tarama servisi",
    tag: "Kendi ürünümüz · Risk taraması",
    summary:
      "Kurumların dış yüzeyindeki ve Microsoft 365 ortamındaki riskleri tarayıp raporlayan servis. Haftalar süren manuel denetim, otomatik rapora dönüşüyor.",
    intro:
      "AfnRiskScan, kurumların internete açık dış yüzeyindeki ve Microsoft 365 ortamındaki riskleri tarayıp anlaşılır bir rapora dönüştüren servistir. Amaç, bir güvenlik denetimi için teknik ekibin haftalarca elle yaptığı kontrol listesini tekrarlanabilir ve ölçülebilir bir sürece çevirmektir.",
    highlights: [
      "Dış yüzey taraması: Kurumun internete açık servis ve yapılandırmalarındaki risklerin tespiti.",
      "Microsoft 365 ortam kontrolü: Bulut kiracısındaki yapılandırma ve kimlik risklerinin taranması.",
      "Raporlama: Bulguların önceliklendirilmiş, aksiyona dönüştürülebilir bir rapor olarak sunulması.",
    ],
    outcome:
      "Teknik ekibin haftalar süren manuel denetim işi otomatik rapora dönüştü; aynı kontrol düzenli aralıklarla tekrarlanabiliyor.",
    externalUrl: "https://risktarama.com.tr",
    externalLabel: "risktarama.com.tr",
  },
];
