import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { CheckCircle, ArrowRight, Server, Cloud, Database, Wifi, HardDrive, RefreshCw, GitBranch, Archive, LayoutGrid, Move } from "lucide-react";

const services = [
  {
    icon: Database,
    name: "Object Storage (OBS)",
    color: "#CF0A2C",
    desc: "Huawei OceanStor Pacific nesne depolama sistemi ile petabayt ölçeğinde yapılandırılmamış veri saklama. S3 uyumlu API ile bulut geçişi kolaylaşır.",
    features: [
      "S3/OpenStack Swift API uyumluluğu",
      "Sınırsız ölçeklenebilir kapasite",
      "Veri tekilleştirme ve sıkıştırma",
      "Çok bölgeli veri replikasyonu",
      "Yaşam döngüsü politikaları",
      "WORM (değişmez depolama) desteği",
    ],
  },
  {
    icon: HardDrive,
    name: "Sanal Makine Yedekleme",
    color: "#0A6ECF",
    desc: "Huawei altyapısı üzerinde çalışan sanal makinelerin uygulama tutarlı, tam ve artımlı yedeklenmesi. VMware ve Hyper-V entegrasyonu ile eksiksiz koruma.",
    features: [
      "Uygulama tutarlı (VSS/quiesce) yedekleme",
      "Tam, artımlı ve fark yedekleme",
      "VMware vSphere ve Hyper-V entegrasyonu",
      "Anında kurtarma (Instant Recovery)",
      "Yedek doğrulama ve test ortamı",
      "Merkezi yedek yönetim konsolu",
    ],
  },
  {
    icon: Archive,
    name: "Bare Metal / Boot Yedekleme",
    color: "#107C10",
    desc: "Fiziksel sunucuların işletim sistemi dahil tüm disk imajını yedekleyin. Donanım arızasında veya siber saldırı sonrasında sistemi dakikalar içinde ayağa kaldırın.",
    features: [
      "İşletim sistemi dahil tam disk imajı",
      "BMR (Bare Metal Recovery) desteği",
      "Farklı donanıma geri yükleme (dissimilar hardware)",
      "Önyükleme ortamı (WinPE/Linux) ile kurtarma",
      "Zamanlı otomatik yedekleme",
      "Şifreli yedek transferi",
    ],
  },
  {
    icon: Move,
    name: "On-Premise Migrasyon",
    color: "#F5A623",
    desc: "Mevcut fiziksel veya sanal altyapınızı Huawei platformuna kesinti minimumda tutarak taşıyın. P2V, V2V ve V2P senaryolarında uzman geçiş hizmeti.",
    features: [
      "P2V (Fiziksel → Sanal) geçiş",
      "V2V (Sanal → Sanal) platform geçişi",
      "Canlı migrasyon (minimal kesinti)",
      "Geçiş öncesi uyumluluk analizi",
      "Geri alma (rollback) planı",
      "Geçiş sonrası performans doğrulama",
    ],
  },
  {
    icon: GitBranch,
    name: "Cluster (Kümeleme) Çözümleri",
    color: "#8B5CF6",
    desc: "Yüksek erişilebilirlik gerektiren kritik iş uygulamaları için Huawei sunucu kümeleme çözümleri. Tek nokta arızası olmayan, kesintisiz hizmet altyapısı.",
    features: [
      "Active-Active ve Active-Passive küme",
      "Otomatik yük devretme (failover)",
      "Heartbeat ve quorum disk yönetimi",
      "Oracle RAC, SQL Server FCI desteği",
      "Coğrafi dağıtık küme (Geo-Cluster)",
      "Küme sağlık izleme ve uyarı",
    ],
  },
  {
    icon: Server,
    name: "FusionServer Sunucular",
    color: "#CF0A2C",
    desc: "Rack, blade ve yüksek yoğunluklu sunucu modelleriyle kurumsal iş yüklerini taşıyın. Intel Xeon ve Kunpeng işlemcili geniş model yelpazesi.",
    features: [
      "Rack (1U/2U/4U) ve Blade sunucu",
      "Intel Xeon Scalable & Kunpeng işlemci",
      "iBMC uzak yönetim",
      "NVMe ve SAS/SATA depolama seçenekleri",
      "Yüksek erişilebilirlik (HA) tasarımı",
      "Akıllı soğutma ve enerji yönetimi",
    ],
  },
  {
    icon: Database,
    name: "OceanStor Depolama",
    color: "#0A6ECF",
    desc: "All-Flash ve hibrit depolama sistemleriyle kritik iş yüklerinizde düşük gecikme, yüksek IOPS ve kurumsal güvenilirlik.",
    features: [
      "All-Flash NVMe ve hibrit modeller",
      "NFS, CIFS, iSCSI, FC protokolleri",
      "Otomatik depolama katmanlandırma",
      "Anlık snapshot ve uzak replikasyon",
      "Depolama ince sağlama (thin provisioning)",
      "5 yıldıza kadar garanti edilmiş güvenilirlik",
    ],
  },
  {
    icon: Wifi,
    name: "CloudEngine Ağ Anahtarları",
    color: "#107C10",
    desc: "Veri merkezi ve kampüs ağı için yüksek kapasiteli, yazılım tanımlı CloudEngine anahtarlar. SDN ve VXLAN desteğiyle geleceğe hazır ağ altyapısı.",
    features: [
      "10G / 25G / 40G / 100G bağlantı",
      "VXLAN ve SDN desteği",
      "iMaster NCE otomatik yönetim",
      "PoE+ ve PoE++ desteği",
      "EVPN ve BGP yönlendirme",
      "Sıfır dokunuşlu kurulum (ZTP)",
    ],
  },
  {
    icon: Cloud,
    name: "FusionCloud Özel Bulut",
    color: "#8B5CF6",
    desc: "Kendi veri merkezinizde AWS/Azure deneyimi yaşatın. FusionSphere ve FusionAccess ile sanal sunucu, VDI ve bulut yönetim platformu.",
    features: [
      "FusionSphere sanallaştırma platformu",
      "FusionAccess sanal masaüstü (VDI)",
      "Kaynak havuzu ve self-servis portal",
      "Çok kiracılı mimari",
      "OpenStack uyumluluğu",
      "Hibrit bulut entegrasyonu",
    ],
  },
  {
    icon: LayoutGrid,
    name: "HCI (Hiper-Yakınsanmış Altyapı)",
    color: "#F5A623",
    desc: "FusionCube ile sunucu, depolama ve ağı tek bir kutuda birleştirin. Kolay kurulum, merkezi yönetim ve doğrusal ölçekleme.",
    features: [
      "FusionCube hiper-yakınsanmış platform",
      "Compute + Storage + Network tek kutuda",
      "Node ekleyerek doğrusal ölçekleme",
      "Dahili NVMe depolama havuzu",
      "Merkezi yönetim arayüzü",
      "3 node'dan başlayan küçük başlangıç",
    ],
  },
  {
    icon: RefreshCw,
    name: "Felaket Kurtarma (DR)",
    color: "#0A6ECF",
    desc: "Birincil veri merkezinizin çökmesi durumunda RPO ve RTO hedeflerinize ulaşmak için Huawei DR çözümleri ile iş sürekliliğinizi güvenceye alın.",
    features: [
      "Eşzamanlı ve eşzamansız replikasyon",
      "RPO: saniyeler, RTO: dakikalar",
      "Otomatik DR tatbikatı ve test",
      "Coğrafi uzak site replikasyonu",
      "HyperReplication ile sürekli koruma",
      "DR planı dokümantasyonu ve演练",
    ],
  },
];

const stats = [
  { val: "Elite", label: "Partner Seviyesi" },
  { val: "HCIA/HCIP/HCIE", label: "Sertifika Seviyeleri" },
  { val: "100+", label: "Tamamlanan Proje" },
  { val: "7/24", label: "Teknik Destek" },
];

export default function HuaweiPage() {
  return (
    <main className="bg-[#0A0E1A] text-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#CF0A2C]/10 via-transparent to-[#0A6ECF]/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CF0A2C]/10 border border-[#CF0A2C]/20 text-[#CF0A2C] text-sm font-semibold mb-6">
                Huawei Elite Partner
              </span>
              <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                Huawei ile Uçtan Uca<br />
                <span className="text-gradient">Akıllı Altyapı</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Object storage'dan bare metal yedeklemeye, on-premise migrasyondan kümeleme çözümlerine kadar Huawei'nin tüm kurumsal portföyünü satış, kurulum ve 7/24 bakım desteğiyle sunuyoruz.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/iletisim" className="flex items-center gap-2 px-7 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all hover:shadow-xl hover:shadow-orange-500/25">
                  Teklif Al <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/iletisim" className="flex items-center gap-2 px-7 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                  Ücretsiz Analiz
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white rounded-3xl p-12 shadow-2xl">
                <Image src="/logos/huawei.svg" alt="Huawei" width={280} height={100} className="h-20 w-auto object-contain" unoptimized />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#080C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="gradient-border rounded-2xl p-6 text-center">
                <div className="text-2xl font-black text-[#CF0A2C] mb-1">{s.val}</div>
                <div className="text-sm text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tüm Hizmetler */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Hizmetlerimiz</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-4">Sunduğumuz Huawei Çözümleri</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Donanım satışından yazılım lisansına, proje tasarımından 7/24 bakım desteğine kadar Huawei ekosisteminin tamamında hizmet veriyoruz.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.name}
                className="gradient-border rounded-2xl p-7 hover:-translate-y-1 transition-all group"
                style={{ borderColor: `${s.color}15` }}
              >
                {/* İkon + başlık */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${s.color}18` }}>
                    <s.icon className="w-6 h-6" style={{ color: s.color }} />
                  </div>
                  <h3 className="font-bold text-white leading-tight">{s.name}</h3>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">{s.desc}</p>

                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: s.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proje süreci */}
      <section className="py-24 bg-[#080C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Nasıl Çalışıyoruz</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-4">Proje Sürecimiz</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Keşif & Analiz", desc: "Mevcut altyapı, iş gereksinimleri ve büyüme hedefleri değerlendirilir." },
              { step: "02", title: "Çözüm Tasarımı", desc: "İhtiyaca özel Huawei mimarisi, kapasite planı ve maliyet analizi hazırlanır." },
              { step: "03", title: "Teklif & Onay", desc: "Ayrıntılı teknik ve ticari teklif sunulur, proje planı netleştirilir." },
              { step: "04", title: "Kurulum & Devreye Alma", desc: "Sertifikalı mühendislerimiz kurulum, yapılandırma ve entegrasyonu tamamlar." },
              { step: "05", title: "Bakım & Destek", desc: "7/24 izleme, proaktif bakım ve öncelikli arıza müdahalesi sağlanır." },
            ].map((s) => (
              <div key={s.step} className="gradient-border rounded-2xl p-5 text-center">
                <div className="text-3xl font-black text-[#CF0A2C]/30 mb-2">{s.step}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{s.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Huawei altyapınızı birlikte tasarlayalım</h2>
          <p className="text-gray-400 mb-8">
            Object storage, VM yedekleme, migrasyon veya kümeleme konularında sertifikalı mühendislerimizden ücretsiz teknik danışmanlık alın.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/iletisim" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all hover:shadow-xl hover:shadow-orange-500/25">
              Teklif Al <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:+902165725040" className="inline-flex items-center gap-2 px-8 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
              Hemen Ara: 0216 572 50 40
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
