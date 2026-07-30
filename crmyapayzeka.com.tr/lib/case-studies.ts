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
    tag: "Kendi ürünümüz · Wolvox ERP",
    summary:
      "Akınsoft Wolvox ERP verisiyle çalışan kurumsal CRM. Cari yaşlandırma, otomatik döviz kuru senkronizasyonu, teklif ve mailing otomasyonu tek uygulamada.",
    intro:
      "AfnCrm, AFN Teknoloji'nin kendi geliştirdiği ve kendi operasyonunda kullandığı kurumsal CRM uygulamasıdır. Ayrı bir veri adası kurmak yerine doğrudan Akınsoft Wolvox ERP verisi üzerinde çalışır; cari, stok ve döviz tabloları kaynak kabul edilir, CRM bu verinin üzerine satış, teklif ve finans süreçlerini ekler. Böylece muhasebe ile satışın aynı rakamı görmesi sağlanır.",
    highlights: [
      "Cari yaşlandırma raporu: FIFO vade mahsubu ile hesaplanan bakiye analizi, ERP'nin kendi raporuyla birebir tutar. Hangi faturanın hangi tahsilatla kapandığı satır satır izlenebilir.",
      "Otomatik döviz kuru senkronizasyonu: Ziraat Bankası efektif satış kurları (USD ve EUR) günde beş kez çekilip doğrudan ERP'nin döviz tablolarına yazılır. Muhasebenin elle kur girmesine gerek kalmaz; gerekirse ekrandaki butonla anlık senkronizasyon da yapılabilir.",
      "Teklif ve mailing otomasyonu: Teklif hazırlama, müşteriye gönderim ve yanıt takibi ile toplu bilgilendirme kampanyaları uygulama içinden yürütülür.",
      "Merkezi yetkilendirme: Modül ve sayfa bazlı izin sistemi; rol varsayılanının üzerine kişiye özel izinler tanımlanabilir.",
      "Elektronik onay ve taahhütname akışı: Kurumsal belgelerin çalışanlara elektronik olarak onaylatılması, inceleme süresi ve kilitlenme kuralları ile birlikte yönetilir.",
    ],
    outcome:
      "Muhasebenin her gün elle yaptığı kur girişi ve bakiye kontrolü işi otomatikleşti; satış ve finans ekibi aynı, doğrulanabilir rakam üzerinden çalışmaya başladı.",
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
