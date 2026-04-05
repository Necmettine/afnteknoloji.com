import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { notFound } from "next/navigation";

const posts: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}> = {
  "kurumsal-bt-altyapisi-nasil-planlanir": {
    title: "Kurumsal BT Altyapısı Nasıl Planlanır?",
    excerpt: "Küçük ve orta ölçekli işletmelerden büyük kurumlara kadar doğru BT altyapısı planlaması için dikkat edilmesi gereken kritik adımlar.",
    category: "BT Yönetimi",
    date: "15 Mart 2024",
    readTime: "5 dk",
    content: `
## Kurumsal BT Altyapısı Planlamasına Giriş

Bir işletmenin dijital omurgasını oluşturan BT altyapısı; sunucular, ağ cihazları, depolama sistemleri, yazılımlar ve bu bileşenleri bir arada tutan yönetim süreçlerinden oluşur. Doğru planlanmış bir BT altyapısı; verimlilik, güvenlik ve iş sürekliliği açısından kritik öneme sahiptir.

## 1. Mevcut Durumu Analiz Edin

Planlamaya başlamadan önce sahip olduğunuz altyapıyı eksiksiz değerlendirin:

- **Donanım envanteri:** Sunucular, PC'ler, ağ cihazları ve çevre birimleri
- **Yazılım lisansları:** İşletim sistemleri, kurumsal uygulamalar, güvenlik yazılımları
- **Ağ topolojisi:** LAN, WAN, Wi-Fi altyapısı ve bağlantı hızları
- **Güvenlik durumu:** Mevcut güvenlik önlemleri ve açıklar

## 2. İş Gereksinimlerini Belirleyin

BT altyapısı iş hedefleriyle uyumlu olmalıdır:

- Kaç kullanıcı sisteme eş zamanlı bağlanacak?
- Hangi kritik uygulamalar kesintisiz çalışmalı?
- Veri saklama ve arşivleme gereksinimleri neler?
- Uzaktan çalışma ihtiyacı var mı?

## 3. Ölçeklenebilirlik Planlaması

Günümüzde işletmeler hızla büyüyor. Altyapınızı tasarlarken:

- 3-5 yıllık büyüme projeksiyonlarını göz önüne alın
- Modüler ve genişletilebilir sistemler tercih edin
- Bulut ve hibrit mimari seçeneklerini değerlendirin

## 4. Güvenlik ve Uyumluluk

Altyapı planlamasında güvenlik sonradan düşünülecek bir unsur değil, temel bir gereksinimdir:

- **Ağ güvenliği:** Firewall, IPS/IDS, ağ segmentasyonu
- **Uç nokta güvenliği:** EDR/XDR çözümleri
- **Kimlik yönetimi:** Active Directory, MFA
- **Yasal uyumluluk:** KVKK, 5651 log yönetimi

## 5. Felaket Kurtarma ve Yedekleme

İş sürekliliği planınızda mutlaka şunlar yer almalı:

- Otomatik ve düzenli yedekleme politikası
- Yedekleme test prosedürleri
- RTO (Recovery Time Objective) ve RPO (Recovery Point Objective) hedefleri
- Alternatif site veya bulut DR çözümü

## 6. Bütçe ve ROI Analizi

BT yatırımlarını iş değeriyle ilişkilendirin:

- **CapEx vs OpEx:** Donanım satın alma mı, bulut aboneliği mi?
- **TCO hesabı:** Toplam sahip olma maliyeti (lisans, bakım, enerji, insan kaynağı)
- **Risk maliyeti:** Kesinti durumunda saatlik iş kaybı

## Profesyonel Destek Alın

Doğru BT altyapısı planlaması uzmanlık gerektiren bir süreçtir. AFN Teknoloji olarak 15+ yıllık deneyimimizle işletmenizin ihtiyaçlarını analiz ediyor, bütçenize ve büyüme hedeflerinize uygun altyapı çözümleri tasarlıyoruz.
    `,
  },
  "zero-trust-guvenlik-modeli": {
    title: "Zero Trust Güvenlik Modeli Nedir?",
    excerpt: "Geleneksel ağ güvenliği anlayışını kökten değiştiren Zero Trust yaklaşımı ve kurumunuzda nasıl uygulayabileceğiniz.",
    category: "Siber Güvenlik",
    date: "28 Şubat 2024",
    readTime: "7 dk",
    content: `
## Zero Trust: "Güven Yok, Her Zaman Doğrula"

Geleneksel ağ güvenliği anlayışı "iç ağdaki her şey güvenlidir" varsayımına dayanırdı. Siber tehditlerin gelişmesiyle bu yaklaşım yetersiz kalmıştır. Zero Trust modeli ise şu ilkeyi benimser: **Ağın içinde ya da dışında olsun, hiçbir kullanıcıya, cihaza veya uygulamaya varsayılan güven verilmez.**

## Zero Trust'ın Temel İlkeleri

### 1. Kimliği Her Zaman Doğrula
Her erişim talebinde kullanıcı kimliği, cihaz sağlığı ve bağlam bilgisi değerlendirilir. MFA (Çok Faktörlü Kimlik Doğrulama) vazgeçilmez bir unsurdur.

### 2. En Az Ayrıcalık İlkesi (Least Privilege)
Kullanıcılara yalnızca görevlerini yerine getirmek için gereken minimum erişim hakkı tanınır. Aşırı yetkiler saldırı yüzeyini genişletir.

### 3. İhlal Varsayımı (Assume Breach)
Ağın zaten ele geçirilmiş olabileceği varsayımıyla hareket edilir. Lateral movement (yanal hareket) engellemek için mikro-segmentasyon uygulanır.

## Zero Trust Mimarisinin Bileşenleri

**Kimlik ve Erişim Yönetimi (IAM)**
- Azure Active Directory / Okta
- Koşullu erişim politikaları
- Privileged Identity Management (PIM)

**Cihaz Güvenliği**
- MDM/EMM çözümleri (Microsoft Intune)
- Cihaz uyumluluk politikaları
- EDR/XDR uç nokta koruması

**Ağ Segmentasyonu**
- Mikro-segmentasyon (VMware NSX, Fortinet)
- ZTNA (Zero Trust Network Access)
- Software-Defined Perimeter

**Veri Koruma**
- Veri sınıflandırma ve etiketleme
- DLP (Veri Kaybı Önleme)
- Şifreleme (iletimde ve beklemede)

## Kurumunuzda Nasıl Uygularsınız?

1. **Kritik varlıkları belirleyin** — Önce hangi veri ve sistemlerin korunması gerektiğini tanımlayın
2. **Kimlik altyapısını modernize edin** — MFA ve SSO'yu zorunlu hale getirin
3. **Ağ segmentasyonunu uygulayın** — Yanal hareketi kısıtlayın
4. **Görünürlüğü artırın** — SIEM/XDR ile tüm trafiği izleyin
5. **Sürekli izleme yapın** — Anomali tespiti ve otomatik müdahale

## Sonuç

Zero Trust bir ürün değil, bir strateji ve kültür değişimidir. AFN Teknoloji olarak Fortinet, Microsoft ve Kaspersky çözümleriyle kurumunuza özel Zero Trust mimarisi tasarlıyor ve uyguluyoruz.
    `,
  },
  "microsoft-365-kurumsal-kullanim-ipuclari": {
    title: "Microsoft 365 Kurumsal Kullanım İpuçları",
    excerpt: "Microsoft 365'in gücünü tam anlamıyla kullanmak için Teams, SharePoint ve OneDrive entegrasyon stratejileri.",
    category: "Microsoft",
    date: "10 Şubat 2024",
    readTime: "6 dk",
    content: `
## Microsoft 365'ten Maksimum Verim

Microsoft 365, yalnızca e-posta ve Office uygulamalarından ibaret değildir. Doğru yapılandırıldığında kurumsal iş birliğini, güvenliği ve verimliliği kökten dönüştürebilir.

## Microsoft Teams: Merkezi İş Birliği

### Kanal Yapısını Doğru Kurun
- Her proje veya departman için ayrı kanal oluşturun
- Genel, Duyurular ve Proje kanallarını standart hale getirin
- Özel kanalları hassas projeler için kullanın

### Teams + SharePoint Entegrasyonu
Her Teams kanalının arkasında bir SharePoint sitesi otomatik oluşur. Bu yapıyı şu şekilde optimize edin:
- Kanal dosyalarını SharePoint'te organize edin
- Belge kitaplıklarına meta veri ekleyin
- Sürüm geçmişini aktif tutun

### Toplantı Verimliliği
- Toplantı notları için OneNote entegrasyonunu kullanın
- Kayıt ve transkript özelliğini aktif edin
- Toplantı özeti için Copilot'tan yararlanın (M365 Copilot lisansı gerekir)

## OneDrive: Akıllı Dosya Yönetimi

### Klasör Yapısını Standartlaştırın
Kurumsal OneDrive kullanımında kaos önlemek için:
- Departman bazlı klasör şablonları oluşturun
- Paylaşım politikalarını merkezi yönetin
- Dış paylaşım için expiry (son kullanma tarihi) ayarlayın

### Bilinen Klasörler Yedekleme
Windows'taki Masaüstü, Belgeler ve Resimler klasörlerini OneDrive'a otomatik yedekleyin. PC arızası durumunda veri kaybını önler.

## SharePoint: Kurumsal İntranet

### Modern İntranet Portalı
- Ana sayfa: Duyurular, hızlı bağlantılar, haberler
- Departman siteleri: Her birimin kendi içerik alanı
- Süreç sayfaları: İK prosedürleri, formlar, yönergeler

### SharePoint ile İş Akışı Otomasyonu
Power Automate entegrasyonu ile:
- Onay süreçlerini dijitalleştirin
- Form doldurmayı otomatik e-postaya bağlayın
- SharePoint listeleri ile basit veritabanı oluşturun

## Güvenlik: En Sık Atlanan Ayarlar

### MFA'yı Zorunlu Kılın
Tüm kullanıcılar için Çok Faktörlü Kimlik Doğrulamayı Conditional Access ile zorunlu hale getirin.

### Dış Paylaşımı Kısıtlayın
- OneDrive/SharePoint dış paylaşım politikasını "Yalnızca davet edilen kişiler" olarak ayarlayın
- Misafir erişim süresini sınırlayın

### DLP Politikaları
TC kimlik numarası, kredi kartı gibi hassas verilerin e-posta veya Teams üzerinden dışarı çıkmasını önleyin.

## AFN Teknoloji ile Microsoft 365

Microsoft Silver Partner olarak kurumunuzun Microsoft 365 altyapısını en verimli şekilde yapılandırıyor, kullanıcı eğitimi veriyor ve 7/24 teknik destek sağlıyoruz.
    `,
  },
  "veeam-ile-felaket-kurtarma-stratejisi": {
    title: "Veeam ile Felaket Kurtarma Stratejisi Oluşturma",
    excerpt: "Veri kaybını önlemek ve iş sürekliliğini sağlamak için kapsamlı bir felaket kurtarma planı nasıl hazırlanır.",
    category: "Yedekleme",
    date: "25 Ocak 2024",
    readTime: "8 dk",
    content: `
## Neden Felaket Kurtarma Planı Şart?

Araştırmalar, veri kaybı yaşayan işletmelerin %60'ının 6 ay içinde kapandığını ortaya koymaktadır. Doğal afetler, siber saldırılar, donanım arızaları veya insan hataları her an gerçekleşebilir. Veeam Backup & Replication, bu risklere karşı sektörün lider çözümünü sunar.

## Temel Kavramlar: RPO ve RTO

**RPO (Recovery Point Objective — Kurtarma Noktası Hedefi)**
Kabul edilebilir maksimum veri kaybı süresi. RPO = 1 saat ise en fazla 1 saatlik veri kaybedilebilir demektir.

**RTO (Recovery Time Objective — Kurtarma Süresi Hedefi)**
Sistemin yeniden çalışır hale gelmesi için gereken maksimum süre. RTO = 4 saat ise felaket sonrası 4 saat içinde sisteme kavuşulmalıdır.

## Veeam ile 3-2-1 Kuralı

Altın kural: **3 kopya, 2 farklı medya, 1 harici lokasyon**

- **3 kopya:** Birincil üretim + yerel yedek + uzak yedek
- **2 farklı medya:** Örneğin disk + bulut veya disk + bant
- **1 harici lokasyon:** Farklı fiziksel konum (felaket bölgesi etkisinden korunmak için)

Veeam bu yapıyı otomatik olarak yönetmenizi sağlar.

## Veeam Backup & Replication ile DR Kurulumu

### Yedekleme Politikaları
- **Tam yedekleme:** Haftalık (haftasonu gece)
- **Artımlı yedekleme:** Günlük (iş saatleri dışında)
- **Saatlik snapshot:** Kritik sistemler için

### Replikasyon
Veeam Replication ile sanal makinelerinizin canlı kopyasını uzak siteye sürekli aktarın. Felaket anında VM'i dakikalar içinde uzak sitede ayağa kaldırın.

### Instant Recovery (Anında Kurtarma)
Veeam'in en güçlü özelliği: Yedek dosyasından VM'i doğrudan çalıştırın. Gerçek kurtarma süreci arka planda devam ederken sistem anında ayağa kalkar.

### SureBackup ile Yedek Doğrulama
Yedeklerinizin gerçekten çalışıp çalışmadığını otomatik test edin. İzole sandbox ortamında yedek VM'leri başlatır, uygulamaların ayağa kalktığını doğrular.

## Bulut DR: Veeam + Azure/AWS

On-premise'e ek olarak bulut DR senaryosu:
- Veeam Cloud Tier ile yedekleri Azure Blob veya AWS S3'e gönderin
- Felaket anında bulut VM olarak başlatın
- Aylık maliyet yüzlerce dolara kadar düşebilir (ikinci veri merkezi maliyetiyle kıyaslandığında)

## DR Tatbikatı: En Sık Atlanan Adım

Yedek almak yeterli değildir — **düzenli tatbikat yapın:**
1. Yılda en az 2 kez tam DR tatbikatı
2. Kurtarma sürelerini ölçün ve RTO hedeflerinizle kıyaslayın
3. Tatbikat raporlarını yönetimle paylaşın

AFN Teknoloji, Veeam Silver Partner olarak yedekleme altyapısı kurulumu, DR planı hazırlama ve tatbikat hizmetleri sunmaktadır.
    `,
  },
  "5651-kanunu-log-yonetimi": {
    title: "5651 Sayılı Kanun ve Log Yönetimi",
    excerpt: "İnternet ortamındaki hukuki yükümlülüklerinizi yerine getirmek için 5651 log kayıt ve saklama gereksinimleri rehberi.",
    category: "Uyumluluk",
    date: "12 Ocak 2024",
    readTime: "6 dk",
    content: `
## 5651 Sayılı Kanun Nedir?

5651 sayılı "İnternet Ortamında Yapılan Yayınların Düzenlenmesi ve Bu Yayınlar Yoluyla İşlenen Suçlarla Mücadele Edilmesi Hakkında Kanun", işyerlerinde internet erişimi sağlayan tüm kurumları kapsar.

## Kimler Yükümlü?

- İnternet erişimi sağlayan tüm şirketler ve kurumlar
- Ortak kullanım alanı sunan işletmeler (kafe, otel, AVM vb.)
- Kamu kurumları ve üniversiteler

## Ne Kaydedilmeli?

Kanun kapsamında kaydedilmesi gereken log bilgileri:
- Kullanıcı IP adresleri
- Ziyaret edilen URL ve alan adları
- Erişim tarihi ve saati
- Kaynak ve hedef port bilgileri
- Protokol bilgisi

## Saklama Süreleri

- **Trafik logları:** Minimum 2 yıl (bazı yorumlara göre 1 yıl)
- **Kayıtlar:** Değiştirilemez formatta saklanmalı
- **Talep:** İlgili makamlarca istendiğinde 24 saat içinde sunulabilmeli

## Teknik Gereksinimler

### Donanım/Yazılım
- **UTM/Firewall:** Fortinet FortiGate, Check Point, Palo Alto
- **Log yönetim sistemi:** SIEM veya özel log sunucusu
- **Zaman damgası:** NTP sunucusu ile senkronize saat

### Önemli Özellikler
- Loglar şifreli ve değiştirilemez formatta saklanmalı
- Zaman damgası güvenilir olmalı
- Yeterli depolama kapasitesi planlanmalı

## Yaptırımlar

Kanuna uymayan işletmelere:
- **İdari para cezası:** 10.000 TL'den başlayan cezalar
- **İnternet erişiminin durdurulması** tehdidi
- **Hukuki sorumluluk:** Suistimal durumunda cezai sorumluluk

## AFN Teknoloji Log Çözümleri

Fortinet FortiGate ve FortiAnalyzer çözümleriyle 5651 uyumlu log sistemi kuruyoruz:
- Otomatik log toplama ve arşivleme
- Şifreli ve değiştirilemez log depolama
- Yetkili makam talep raporları
- Kullanıcı bazlı internet erişim raporları
    `,
  },
  "vmware-vsphere-best-practices": {
    title: "VMware vSphere Best Practices",
    excerpt: "Sanallaştırma ortamınızın performansını ve güvenilirliğini artırmak için VMware vSphere yapılandırma önerileri.",
    category: "Sanallaştırma",
    date: "5 Ocak 2024",
    readTime: "9 dk",
    content: `
## VMware vSphere Neden Bu Kadar Yaygın?

vSphere, dünyanın en çok kullanılan kurumsal sanallaştırma platformudur. Yüzde seksenin üzerinde veri merkezinde yer alan bu platform, doğru yapılandırıldığında inanılmaz performans ve güvenilirlik sunar. İşte deneyimlerimizden derlediğimiz en iyi uygulamalar:

## ESXi Host Yapılandırması

### BIOS/UEFI Ayarları
- **Hyper-Threading:** Etkin bırakın (çoğu iş yükü için faydalıdır)
- **Power Management:** "High Performance" moduna alın (C-states'i devre dışı bırakın)
- **NUMA:** Mimarisini anlayın, VM'leri NUMA node sınırlarını aşmayacak şekilde boyutlandırın

### Ağ Yapılandırması
- Yönetim trafiği için ayrı vmkernel adapter kullanın
- vMotion için en az 10GbE bağlantı ayırın
- vSAN için ayrı ağ segmenti oluşturun
- NIC Teaming ile yük dengeleme ve failover sağlayın

### Depolama
- VMFS 6 kullanın (otomatik space reclaim desteği)
- Raw Device Mapping (RDM) yerine VMDK tercih edin
- Storage I/O Control (SIOC) ile depolama QoS uygulayın

## vCenter Server Best Practices

### Boyutlandırma
- vCenter için yeterli RAM ve CPU ayırın (büyük ortamlarda 16+ vCPU, 32+ GB RAM)
- vCenter'ı yönettiği ESXi cluster dışında çalıştırın
- VCSA (Appliance) kullanın, Windows vCenter kullanmayın

### vCenter HA
Production ortamları için vCenter High Availability mutlaka yapılandırın:
- Active, Passive ve Witness node
- RPO: ~5 dakika, RTO: ~5-10 dakika

## VM Yapılandırma Önerileri

### Donanım Versiyonu
- Desteklenen en yüksek VM hardware versiyonunu kullanın
- Eski versiyonlar yeni özelliklerden (NVMe, vTPM) yararlanamaz

### VMware Tools
- VMware Tools her VM'de güncel ve çalışır olmalı
- Tools olmadan vMotion, snapshot ve guest OS bilgileri çalışmaz

### Snapshot Yönetimi
- **Snapshot ≠ yedek!** Bu kritik yanılgıyı not edin
- Snapshot'ları 24-48 saatten uzun tutmayın
- Production'da birden fazla snapshot zinciri oluşturmayın
- Snapshot consolidation işlemini düzenli çalıştırın

## Cluster Yapılandırması

### High Availability (HA)
- Admission Control'ü etkin bırakın
- En az %25 cluster kapasitesini HA için ayırın
- Isolation response: "Power off" değil "Leave powered on" seçin

### Distributed Resource Scheduler (DRS)
- DRS'i "Fully Automated" modunda tutun
- Migration threshold'u 3 (orta seviye) olarak ayarlayın
- DRS kurallarıyla anti-affinity groupları yapılandırın (kritik VM'ler aynı host'ta olmasın)

### vSphere Update Manager
- ESXi host'ları düzenli güncelleyin
- Maintenance Mode + vMotion ile kesintisiz güncelleme yapın
- Baseline'ları cluster genelinde uygulayın

## İzleme ve Kapasite Planlaması

- vRealize Operations (vROps) ile proaktif izleme yapın
- CPU/RAM/Disk I/O metriklerini haftalık gözden geçirin
- %85 kullanım eşiğine yaklaşıldığında kapasite planlamasını başlatın

## Sonuç

VMware vSphere ortamınızı doğru yapılandırmak performansı artırır, maliyeti düşürür ve güvenilirliği önemli ölçüde yükseltir. AFN Teknoloji, VCP sertifikalı mühendisleriyle vSphere tasarım, kurulum ve optimizasyon hizmetleri sunmaktadır.
    `,
  },
};

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    if (line.startsWith("## ")) {
      elements.push(<h2 key={key++} className="text-2xl font-bold text-white mt-10 mb-4">{line.replace("## ", "")}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={key++} className="text-xl font-bold text-[#F5A623] mt-6 mb-3">{line.replace("### ", "")}</h3>);
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={key++} className="flex items-start gap-2 text-gray-300 mb-1">
          <span className="text-[#F5A623] mt-1 flex-shrink-0">▸</span>
          <span dangerouslySetInnerHTML={{ __html: line.replace("- ", "").replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
        </li>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(<p key={key++} className="font-bold text-white mt-4 mb-1">{line.replace(/\*\*/g, "")}</p>);
    } else if (line.trim() !== "") {
      elements.push(
        <p key={key++} className="text-gray-400 leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
      );
    }
  }

  return elements;
}

import { getDynamicPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Önce hardcoded, sonra dinamik yazılarda ara
  const dynamicPosts = getDynamicPosts();
  const dynamicPost = dynamicPosts.find((p) => p.slug === params.slug);
  const post = posts[params.slug] ?? (dynamicPost ? { ...dynamicPost } : null);
  if (!post) notFound();

  const relatedPosts = Object.entries(posts)
    .filter(([slug]) => slug !== params.slug)
    .slice(0, 3);

  return (
    <main className="bg-[#0A0E1A] text-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <a href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#F5A623] transition-colors mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" /> Blog'a Dön
          </a>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-[#F5A623]/10 text-[#F5A623] text-xs rounded-full font-semibold flex items-center gap-1">
              <Tag className="w-3 h-3" /> {post.category}
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-xs">
              <Calendar className="w-3 h-3" /> {post.date}
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-xs">
              <Clock className="w-3 h-3" /> {post.readTime} okuma
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">{post.title}</h1>
          <p className="text-gray-400 text-lg">{post.excerpt}</p>
        </div>
      </section>

      {/* Ayırıcı görsel */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <div className="h-2 rounded-full bg-gradient-to-r from-[#F5A623] via-[#F5A623]/50 to-transparent" />
      </div>

      {/* İçerik */}
      <article className="max-w-4xl mx-auto px-4 pb-20">
        <ul className="list-none p-0 m-0">
          {renderMarkdown(post.content)}
        </ul>

        {/* CTA kutusu */}
        <div className="mt-16 gradient-border rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-3">Bu konuda destek almak ister misiniz?</h3>
          <p className="text-gray-400 text-sm mb-6">AFN Teknoloji uzmanları kurumunuza özel çözüm sunar.</p>
          <a href="/iletisim"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all">
            Bize Ulaşın →
          </a>
        </div>
      </article>

      {/* İlgili Yazılar */}
      <section className="py-16 bg-[#080C18]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8">Diğer Makaleler</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map(([slug, p]) => (
              <a key={slug} href={`/blog/${slug}`}
                className="gradient-border rounded-2xl p-6 hover:border-[#F5A623]/30 transition-all hover:-translate-y-1 group">
                <span className="px-2 py-1 bg-[#F5A623]/10 text-[#F5A623] text-xs rounded-md font-medium">{p.category}</span>
                <h3 className="font-bold text-white mt-3 mb-2 group-hover:text-[#F5A623] transition-colors text-sm leading-snug">{p.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{p.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
