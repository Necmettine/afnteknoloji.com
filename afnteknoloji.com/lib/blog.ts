import { kvGet } from "@/lib/redis";

const KV_KEY = "blog:posts";

export interface BlogPost {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content?: string;
  author?: string;
  createdAt?: string;
}

// Make.com üzerinden gelen yazılar Vercel KV üzerinde tutuluyor.
export async function getDynamicPosts(): Promise<BlogPost[]> {
  try {
    const posts = await kvGet<BlogPost[]>(KV_KEY);
    return posts ?? [];
  } catch {
    return [];
  }
}

export const staticPosts: BlogPost[] = [
  {
    slug: "kurumsal-bt-altyapisi-nasil-planlanir",
    title: "Kurumsal BT Altyapısı Nasıl Planlanır?",
    excerpt:
      "Küçük ve orta ölçekli işletmelerden büyük kurumlara kadar doğru BT altyapısı planlaması için dikkat edilmesi gereken kritik adımlar.",
    category: "BT Yönetimi",
    date: "15 Mart 2024",
    readTime: "5 dk",
    content: `## Kurumsal BT Altyapısı Planlamasına Giriş

Doğru planlanmış bir BT altyapısı, kurumunuzun verimliliği, güvenliği ve sürekliliği için temel rol oynar. Sunucu, ağ, depolama, lisans ve güvenlik katmanları birlikte ele alınmalıdır.

## 1. Mevcut durumu analiz edin

- Sunucu, istemci ve ağ cihazlarınızın envanterini çıkarın.
- Yazılım lisanslarınızı ve sürüm durumlarını kontrol edin.
- Darboğaz oluşturan performans ve güvenlik risklerini belirleyin.

## 2. İş hedeflerini netleştirin

- Kaç kullanıcı sisteme aynı anda bağlanıyor?
- Hangi uygulamalar kesintisiz çalışmalı?
- Uzak erişim, bulut kullanım ve yedekleme beklentiniz nedir?

## 3. Ölçeklenebilir mimari kurun

Bugünü değil, önümüzdeki 3 ila 5 yılı düşünen bir yapı kurmak gerekir. Modüler, genişleyebilir ve hibrit bulutla uyumlu altyapılar uzun vadede daha sağlıklıdır.

## 4. Güvenlik ve yedekleme katmanını unutmayın

- Firewall, MFA ve erişim yönetimini standart hale getirin.
- Yedekleri farklı ortamlarda ve düzenli test ederek saklayın.
- RTO ve RPO hedeflerini belirleyin.

## Sonuç

Kurumunuzun ihtiyacına uygun bir BT altyapısı; maliyeti dengeler, verimliliği artırır ve riskleri azaltır. AFN Teknoloji olarak planlama, kurulum ve optimizasyon süreçlerinde kurumlara uçtan uca destek veriyoruz.`,
  },
  {
    slug: "zero-trust-guvenlik-modeli",
    title: "Zero Trust Güvenlik Modeli Nedir?",
    excerpt:
      "Geleneksel ağ güvenliği anlayışını değiştiren Zero Trust yaklaşımı ve kurumunuzda nasıl uygulanabileceği.",
    category: "Siber Güvenlik",
    date: "28 Şubat 2024",
    readTime: "7 dk",
    content: `## Zero Trust yaklaşımına kısa bakış

Zero Trust modeli, ağ içinde ya da dışında olsun hiçbir kullanıcıya veya cihaza varsayılan güven verilmemesi esasına dayanır.

## Temel ilkeler

- Her erişim talebinde kimliği doğrulayın.
- En az ayrıcalık ilkesiyle yetki verin.
- İhlal olmuş olabilir varsayımıyla hareket edin.

## Kurumlarda nasıl uygulanır?

- MFA ve koşullu erişim politikalarını devreye alın.
- Cihaz uyumluluk kontrolleri kullanın.
- Ağı segmentlere ayırarak yanal hareketi sınırlandırın.
- Loglama ve SIEM ile sürekli izleme yapın.

## Sonuç

Zero Trust bir ürün değil, bir güvenlik stratejisidir. Doğru planlandığında hem iç hem de dış tehditlere karşı dayanıklılığı ciddi biçimde artırır.`,
  },
  {
    slug: "microsoft-365-kurumsal-kullanim-ipuclari",
    title: "Microsoft 365 Kurumsal Kullanım İpuçları",
    excerpt:
      "Teams, SharePoint ve OneDrive tarafında daha düzenli, güvenli ve verimli bir çalışma düzeni kurmak için pratik öneriler.",
    category: "Microsoft",
    date: "10 Şubat 2024",
    readTime: "6 dk",
    content: `## Microsoft 365'i sadece e-posta olarak görmeyin

Microsoft 365, doğru kurgulandığında kurumsal iletişim, dosya yönetimi ve güvenlik süreçlerini tek merkezde toplar.

## Verimi artıran uygulamalar

- Teams kanal yapısını departman ve proje bazlı standardize edin.
- SharePoint ile belge yönetimini merkezi hale getirin.
- OneDrive yedekleme politikalarını aktif edin.

## Güvenlik ayarları

- MFA'yı tüm kullanıcılar için zorunlu hale getirin.
- Dış paylaşım izinlerini sınırlandırın.
- Hassas veri çıkışını DLP kurallarıyla kontrol edin.

## Sonuç

Doğru lisanslama ve doğru yapılandırma ile Microsoft 365, kurumsal operasyonların temel verimlilik araçlarından biri haline gelir.`,
  },
  {
    slug: "veeam-ile-felaket-kurtarma-stratejisi",
    title: "Veeam ile Felaket Kurtarma Stratejisi Oluşturma",
    excerpt:
      "Veri kaybını önlemek ve iş sürekliliğini korumak için Veeam tabanlı felaket kurtarma planı nasıl kurulur?",
    category: "Yedekleme",
    date: "25 Ocak 2024",
    readTime: "8 dk",
    content: `## Neden felaket kurtarma planı gerekiyor?

Siber saldırılar, donanım arızaları ve insan hataları her kurum için risk oluşturur. Yedek almak tek başına yeterli değildir; geri dönüş senaryosu da net olmalıdır.

## Veeam ile temel yaklaşım

- 3-2-1 yedekleme kuralını uygulayın.
- Kritik sistemler için replikasyon planlayın.
- Instant Recovery senaryolarını test edin.

## Mutlaka ölçülmesi gereken iki kavram

- RPO: Kabul edilebilir veri kaybı süresi
- RTO: Sistemin yeniden çalışır hale gelme süresi

## Sonuç

Veeam tabanlı doğru bir strateji, kurumunuzun kriz anında dakikalar içinde toparlanmasını sağlayabilir.`,
  },
  {
    slug: "5651-kanunu-log-yonetimi",
    title: "5651 Sayılı Kanun ve Log Yönetimi",
    excerpt:
      "İnternet erişimi sağlayan kurumlar için 5651 kapsamında log toplama, saklama ve raporlama süreçlerine yönelik özet rehber.",
    category: "Uyumluluk",
    date: "12 Ocak 2024",
    readTime: "6 dk",
    content: `## 5651 kapsamında log yönetimi neden önemlidir?

İnternet erişimi sunan kurumlar, belirli trafik verilerini mevzuata uygun şekilde kaydetmek ve gerektiğinde sunabilmek zorundadır.

## Kaydedilmesi gereken başlıklar

- IP bilgileri
- Erişim zamanı
- Kaynak ve hedef adresleri
- URL ve alan adı verileri

## Teknik gereksinimler

- Güvenilir zaman damgası
- Değiştirilemez log saklama yapısı
- Yeterli depolama ve raporlama altyapısı

## Sonuç

5651 uyumlu bir log yönetimi, hem hukuki riskleri azaltır hem de olay inceleme süreçlerinde kurumunuza ciddi avantaj sağlar.`,
  },
  {
    slug: "vmware-vsphere-best-practices",
    title: "VMware vSphere Best Practices",
    excerpt:
      "Sanallaştırma ortamınızın performansını ve sürekliliğini artırmak için uygulanabilecek temel VMware vSphere önerileri.",
    category: "Sanallaştırma",
    date: "5 Ocak 2024",
    readTime: "9 dk",
    content: `## vSphere ortamlarında verimlilik

Doğru kaynak planlaması, güncel VMware Tools kullanımı ve dengeli cluster yapısı, sanallaştırma ortamının sağlıklı çalışması için kritik öneme sahiptir.

## Dikkat edilmesi gerekenler

- Host BIOS ve performans ayarlarını optimize edin.
- vMotion ve depolama trafiklerini ayrı planlayın.
- Snapshot'ları yedekleme yerine kullanmayın.
- HA ve DRS kurallarını kurum ihtiyacına göre ayarlayın.

## Sonuç

vSphere ortamı ancak düzenli izleme ve doğru kapasite planlaması ile uzun süre stabil kalır. AFN Teknoloji bu alanda kurulum ve optimizasyon desteği sunar.`,
  },
];

export async function getAllPosts(): Promise<BlogPost[]> {
  const dynamicPosts = await getDynamicPosts();
  return [...dynamicPosts, ...staticPosts];
}
