import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Check,
  DatabaseBackup,
  HardDrive,
  Layers,
  Phone,
  Server,
  Terminal,
} from "lucide-react";
import { NAP, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sunucu Hizmetlerimiz | Kurulum, Sanallaştırma, Yedekleme, İzleme",
  description:
    "Sunucu kurulumu ve veri göçü, VMware vSphere sanallaştırma, Veeam yedekleme ve felaket kurtarma, depolama ve RAID yönetimi, Windows Server ile Linux güncelleme yönetimi, 7/24 izleme ve kapasite planlama hizmetleri.",
  alternates: {
    canonical: `${SITE_URL}/hizmetlerimiz/`,
  },
};

const serviceBlocks = [
  {
    id: "kurulum-ve-goc",
    icon: Server,
    title: "Sunucu kurulumu ve göç",
    intro:
      "Yeni sunucu alımından üretime geçişe kadar tüm adımları planlı yürütüyoruz. Kurulum, donanımı rafa yerleştirmekle bitmez; kapasite hesabı, güç ve soğutma uygunluğu, uzaktan yönetim erişimi ve geri dönüş planı işin parçasıdır.",
    points: [
      "Yük analizine dayalı donanım ölçekleme: çekirdek sayısı, bellek, disk türü ve IOPS ihtiyacının hesaplanması",
      "Kabin montajı, çift güç kaynağı beslemesi, ağ ve yönetim kablolamasının etiketlenmesi",
      "iDRAC, iLO, XClarity veya iBMC uzaktan yönetim kartlarının yapılandırılması ve izlemeye bağlanması",
      "Fiziksel sunucudan sanala (P2V) ve sanaldan sanala (V2V) dönüşüm; uygulama uyumluluk testi",
      "Dosya sunucusu göçünde izinlerin (ACL) korunması, DFS ad alanı ve paylaşım yollarının değişmeden taşınması",
      "Active Directory'de ek etki alanı denetleyicisi kurulumu, FSMO rollerinin devri ve eski sunucunun düşürülmesi",
      "Göç öncesi tam yedek, hafta sonu bakım penceresi ve saat bazlı rollback planı",
    ],
  },
  {
    id: "sanallastirma",
    icon: Layers,
    title: "Sanallaştırma — VMware vSphere",
    intro:
      "Tek sunucuya sıkışmış iş yüklerini sanallaştırarak hem kaynak verimliliği hem de erişilebilirlik kazanırsınız. VMware vSphere ana platformumuz; Hyper-V ve Proxmox VE ortamlarını da yönetiyoruz.",
    points: [
      "ESXi kurulumu, host sertleştirmesi ve vCenter Server ile merkezi yönetim",
      "HA (yüksek erişilebilirlik) ve DRS kümesi kurulumu; host arızasında sanal makinelerin otomatik ayağa kalkması",
      "vMotion ve Storage vMotion ile çalışır durumdaki sanal makinelerin taşınması — bakım kesintisiz yapılır",
      "Kaynak havuzu, rezervasyon ve limit tanımlarıyla gürültülü komşu etkisinin önlenmesi",
      "Sanal makine şablonu ve standart disk/CPU profilleriyle tekrarlanabilir kurulum",
      "vSwitch, dağıtık switch, VLAN ve VMkernel trafiğinin (yönetim, vMotion, iSCSI) ayrıştırılması",
      "Anlık görüntü (snapshot) disiplini: süre sınırı, disk büyümesi takibi ve otomatik temizlik",
    ],
  },
  {
    id: "yedekleme",
    icon: DatabaseBackup,
    title: "Yedekleme ve felaket kurtarma — Veeam",
    intro:
      "Yedeklemenin amacı kopya üretmek değil, ölçülebilir sürede geri dönebilmektir. Önce RPO (kabul edilebilir veri kaybı) ve RTO (kabul edilebilir kesinti) hedeflerini belirliyor, mimariyi bu hedeflere göre kuruyoruz.",
    points: [
      "Veeam Backup & Replication kurulumu; sanal makine, fiziksel sunucu (Agent) ve veritabanı yedekleme işleri",
      "3-2-1 kuralı: en az üç kopya, iki farklı ortam, bir kopya saha dışı veya bulutta",
      "Fidye yazılımına karşı değiştirilemez (immutable) yedek deposu ve yedek sunucusunun etki alanından ayrıştırılması",
      "SureBackup ile izole test ortamında otomatik geri yükleme doğrulaması ve rapor",
      "Uygulama farkındalıklı yedekleme: SQL Server ve Exchange için tutarlı anlık görüntü, log kesme (truncate) yönetimi",
      "Replikasyon ile ikinci lokasyona sıcak kopya; felaket senaryosunda devreye alma prosedürü",
      "Yılda en az bir kez masa başı felaket kurtarma tatbikatı ve kurtarma süresinin ölçülmesi",
    ],
  },
  {
    id: "depolama-raid",
    icon: HardDrive,
    title: "Depolama ve RAID yönetimi",
    intro:
      "Sunucu arızalarının önemli bölümü diskten başlar. Doğru RAID seviyesi, çalışan bir yedek disk ve düzenli izleme; tek disk arızasının veri kaybına dönüşmesini engeller.",
    points: [
      "İş yüküne göre RAID seviyesi seçimi: veritabanı için RAID 10, kapasite odaklı arşiv için RAID 6",
      "RAID denetleyici firmware'i, önbellek pili/kapasitörü ve yazma önbelleği politikasının kontrolü",
      "Hot spare disk bulundurma ve dizi yeniden yapılandırma (rebuild) süresinin ölçülmesi",
      "SMART verileri ve SSD yazma aşınma yüzdesinin izlenmesi; arıza öncesi disk değişimi",
      "SAN/NAS bağlantıları, iSCSI çoklu yol (multipath) yapılandırması ve LUN kapasite yönetimi",
      "Depolama katmanlaması: sıcak veri için NVMe/SSD, soğuk veri için yüksek kapasiteli SAS diskler",
      "Kritik modeller için yedek disk ve güç kaynağı stoklama planı",
    ],
  },
  {
    id: "isletim-sistemi",
    icon: Terminal,
    title: "İşletim sistemi ve güncelleme yönetimi",
    intro:
      "Güncellenmemiş bir sunucu, açık kapı bırakılmış bir sunucudur. Yamaları rastgele değil; test, sıralama ve geri alma planı olan bir bakım penceresiyle uyguluyoruz.",
    points: [
      "Windows Server 2016-2025 kurulumu, rol/özellik yapılandırması ve güvenlik sertleştirmesi",
      "Linux tarafında Ubuntu Server, Red Hat Enterprise Linux ve Debian kurulumu, servis ve güvenlik duvarı yapılandırması",
      "Active Directory, DNS, DHCP, dosya ve yazdırma servislerinin sağlıklı işletimi",
      "Yama yönetimi: kritik güvenlik yamalarının hızlı, işlevsel güncellemelerin test sonrası uygulanması",
      "Firmware, BIOS, RAID denetleyici ve ağ kartı sürücülerinin üretici uyumluluk matrisine göre güncellenmesi",
      "Yerel yönetici hesaplarının, servis hesaplarının ve parola politikasının düzenlenmesi",
      "Sertifika, lisans ve destek bitiş tarihlerinin envanterde takibi",
    ],
  },
  {
    id: "izleme",
    icon: Activity,
    title: "İzleme ve kapasite planlama",
    intro:
      "Sorunları kullanıcı bildirmeden önce görmek, bakımın en değerli kısmıdır. Eşik alarmlarıyla donanım ve servis göstergelerini sürekli izliyoruz.",
    points: [
      "CPU, bellek, disk doluluk, IOPS ve gecikme (latency) metriklerinin eşik alarmlı takibi",
      "Donanım sağlığı: fan devri, sıcaklık, güç kaynağı durumu ve RAID dizisi uyarılarının merkezi toplanması",
      "Servis izleme: kritik Windows servisleri, Linux daemon'ları, veritabanı ve web servisi erişilebilirliği",
      "Yedekleme işlerinin başarı/başarısızlık durumunun izlemeye dahil edilmesi",
      "Kesintisiz güç kaynağı (UPS) durumu, akü sağlığı ve düzenli kapatma (shutdown) betiklerinin doğrulanması",
      "Aylık trend raporu: büyüme hızına göre disk doluluk tahmini ve genişletme zamanlaması",
      "Yenileme öngörüsü: destek bitişi, arıza geçmişi ve doygunluk verisiyle 6-12 ay önceden uyarı",
    ],
  },
];

export default function HizmetlerimizPage() {
  return (
    <>
      <section className="rack-bg border-b border-srv-border/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-extrabold">Sunucu Hizmetlerimiz</h1>
          <div className="amber-rule mt-5 h-px w-32" aria-hidden="true" />
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-300">
            Sunucu altyapısının altı temel katmanını uçtan uca yönetiyoruz:
            donanım, sanallaştırma, yedekleme, depolama, işletim sistemi ve
            izleme. Her katmanın kendi kontrol listesi, ölçütü ve raporu var.
          </p>
          <nav aria-label="Hizmet bölümleri" className="mt-8 flex flex-wrap gap-3">
            {serviceBlocks.map((block) => (
              <a
                key={block.id}
                href={`#${block.id}`}
                className="rounded-full border border-srv-border bg-srv-card/60 px-4 py-1.5 text-sm text-gray-300 transition-colors hover:border-srv-amber/40 hover:text-srv-gold"
              >
                {block.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="space-y-8">
          {serviceBlocks.map((block) => (
            <section
              key={block.id}
              id={block.id}
              className="scroll-mt-24 rounded-2xl border border-srv-border bg-srv-card p-7"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-srv-amber/20 bg-srv-amber/10 text-srv-gold">
                  <block.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-2xl font-bold">{block.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">
                    {block.intro}
                  </p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {block.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-srv-amber"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed text-gray-400">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-srv-amber/25 bg-srv-amber/[0.06] p-7 text-center">
          <h2 className="text-2xl font-bold">
            Hangi hizmetin size gerekli olduğundan emin değil misiniz?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-300">
            Mevcut sunucularınızın envanterini çıkarıp donanım durumu, yedekleme
            sağlığı ve kapasite eğilimini raporluyoruz. Rapor sonrası hangi
            başlıkların öncelikli olduğunu birlikte belirliyoruz.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={NAP.phoneHref}
              className="flex items-center gap-2 rounded-xl bg-srv-amber px-6 py-3 text-base font-bold text-srv-deep transition-colors hover:bg-srv-gold"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {NAP.phoneDisplay}
            </a>
            <Link
              href="/bakim-paketleri/"
              className="flex items-center gap-2 rounded-xl border border-srv-border px-6 py-3 text-base font-semibold text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
            >
              Bakım kapsamına bakın
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
