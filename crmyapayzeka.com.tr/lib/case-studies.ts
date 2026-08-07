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
    short: "Sipariş & BOM Portalı",
    title:
      "Üretici firmalar için sipariş ve reçete (BOM) talep portalı — Netsis/ERP entegrasyonu",
    tag: "Çözüm kapsamımız · Netsis / ERP",
    summary:
      "Üretim yapan firmalarda dış ticaret, satın alma ve üretimin ortak kullandığı talep portalı: talep → ERP ürün ve stok kontrolü → reçete kırılımı → onay kademesi → tedarikçiye otomatik e-posta → termin ve evrak takibi.",
    intro:
      "Üretim yapan firmalarda sipariş ve alt reçete (BOM) talepleri çoğunlukla e-posta ve Excel dosyaları arasında yürür: kimin neyi ne zaman istediği, talebin hangi aşamada olduğu ve ERP'de gerçekten karşılığı olup olmadığı takip edilemez. Bu süreci uçtan uca yöneten portalı kuruyoruz. AfnCrm'de yıllardır çalıştırdığımız yapı taşlarını — ERP veritabanı üzerinde canlı çalışma, çok kademeli onay, otomatik e-posta, SharePoint dosya düzeni, rol bazlı yetkilendirme ve denetim izi — Netsis tarafına uyarlıyoruz. Aşağıda böyle bir portalın kapsayabildiği başlıklar var; hangilerinin devreye alınacağı keşif çalışmasında birlikte belirlenir.",
    highlights: [
      "Tek talep formu: Dış ticaret veya satın alma; bitmiş ürün, hammadde ve yarı mamul talebini aynı formdan açar. Ürün kodu, adet, hedef termin ve serbest metinli teknik açıklama tek yerde toplanır.",
      "ERP ürün kartı doğrulama: Talep edilen kalemin Netsis'te tanımlı olup olmadığı anında sorgulanır. Tanımlı değilse süreç ürün kartı açma talebine dallanır; mükerrer kart açılmasının ve kod standardının bozulmasının önüne geçilir.",
      "Güncel stokla eşleştirme: Kalem, ERP'deki güncel stok bakiyesiyle eşleştirilir; talep sahibi stok görünümü üzerinden seçim yapar. Stok yeterliyse rezerve edilir, yetersiz kalan miktar tedarik talebine dönüşür.",
      "Üretici kodu ↔ ERP stok kodu eşleştirme: Üreticinin kendi ürün kodları ve detaylı ürün açıklamaları, firmanın ERP stok kodlarıyla eşleştirilir. Kesin eşleşme bulunamadığında yakın adaylar listelenir ve doğru kart insana seçtirilir.",
      "Alt reçete (BOM) kırılımı: Üretilecek ürünün ağacı açılır; hangi bileşenin stoktan karşılanacağı, hangisinin dışarıdan tedarik edileceği talep anında görünür hale gelir.",
      "Yurt içi ve yurt dışı sipariş ayrımı: Para birimi, teslim şekli ve gereken evrak farkları akışa gömülür; ithalat talebi ile yurt içi tedarik talebi aynı hatta, kendi kurallarıyla yürür.",
      "Çok kademeli onay: Talep tutara, kaleme veya birime göre belirlenen onay kademelerine düşer. Onay ve ret gerekçesiyle birlikte kayıt altına alınır; yetki kişiye değil role bağlanır.",
      "Tedarikçiye otomatik talep e-postası: Onaylanan talep için ürün kodu, adet ve teknik açıklamayı içeren e-posta kurumsal hesaptan otomatik oluşturulup gönderilir; gönderim kaydı talebe iliştirilir.",
      "Termin, teslim ve evrak takibi: Tedarikçi dönüşü, teslim tarihi ve ilgili belgeler talebin üzerinde toplanır. Dosyalar SharePoint'te sipariş bazlı klasör düzeninde saklanır.",
      "Fatura ve sipariş eşleştirme: Gelen faturanın hangi talep ve siparişe ait olduğu eşleştirilir; tutar ve miktar farkları işaretlenip sorumluya bildirilir.",
      "Rol bazlı yetkilendirme ve denetim izi: Kim talep açar, kim onaylar, kim yalnız görüntüler ayrı ayrı tanımlanır. Hangi kaydı kimin ne zaman değiştirdiği ve talebin hangi koldan geçtiği izlenebilir kalır.",
      "Microsoft 365 entegrasyonu: Kurumsal hesapla oturum açma, Outlook üzerinden bildirim ve SharePoint dosya yönetimi; ayrı bir kullanıcı/şifre yönetimi gerekmez.",
      "Yapay zeka desteği: Serbest metinli talebin doğru ürün grubuna yönlendirilmesi, tedarikçiden gelen belge ve proforma içeriğinin okunup kaleme bağlanması, eksik veya tutarsız bilginin işaretlenip insana sorulması. Onay ve finansal etkisi olan adımlar kural tabanlı çalışır; karar insanda kalır.",
    ],
    outcome:
      "Hedef: e-posta ve Excel'de dağınık ilerleyen talep sürecinin tek akışa taşınması; her talebin hangi aşamada olduğunun, kimin onayında beklediğinin ve ERP'de gerçek karşılığı bulunup bulunmadığının anlık görülmesi.",
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
