import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  Boxes,
  ChevronDown,
  ClipboardList,
  Cpu,
  DatabaseBackup,
  Gauge,
  HardDrive,
  Layers,
  Phone,
  Server,
  ServerCog,
  ShieldCheck,
  Terminal,
  Thermometer,
  Timer,
} from "lucide-react";
import { faqItems } from "@/lib/faq-data";
import { CONTACT_URL, NAP, SITE_URL, SLA_TIERS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sunucu Kurulum, Bakım ve Yönetimi | Kurumsal Sunucu Hizmetleri",
  description:
    "Fiziksel ve sanal sunucu altyapınız için kurulum, veri göçü, periyodik bakım, RAID ve depolama yönetimi, Veeam yedekleme doğrulaması ve 7/24 izleme. VMware vSphere, Windows Server ve Linux uzmanlığı; kritik arızada 2 saat müdahale.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
};

const services = [
  {
    icon: Server,
    title: "Sunucu Kurulumu ve Göç",
    description:
      "Kabin montajından iDRAC/iLO yapılandırmasına, eski sunucudan P2V/V2V göçe kadar uçtan uca kurulum. Rol ve bağımlılık analiziyle planlı geçiş.",
  },
  {
    icon: Layers,
    title: "Sanallaştırma",
    description:
      "VMware vSphere ve Hyper-V üzerinde ESXi kurulumu, vCenter yönetimi, HA/DRS kümesi ve vMotion ile kesintisiz bakım penceresi.",
  },
  {
    icon: DatabaseBackup,
    title: "Yedekleme ve Felaket Kurtarma",
    description:
      "Veeam ile 3-2-1 mimarisi, değiştirilemez depolama katmanı ve SureBackup ile geri yükleme doğrulaması. RPO/RTO hedefli kurtarma planı.",
  },
  {
    icon: HardDrive,
    title: "Depolama ve RAID",
    description:
      "RAID seviyesi tasarımı, denetleyici ve önbellek pili kontrolü, SSD aşınma takibi, SAN/NAS ve iSCSI yapılandırması.",
  },
  {
    icon: Terminal,
    title: "İşletim Sistemi Yönetimi",
    description:
      "Windows Server ve Linux kurulumu, sertleştirme, Active Directory, DNS/DHCP ile firmware ve yama yönetimi.",
  },
  {
    icon: Activity,
    title: "İzleme ve Kapasite",
    description:
      "7/24 eşik alarmlı izleme; CPU, bellek, IOPS, sıcaklık ve disk sağlığı takibi ile büyümeye dayalı kapasite raporu.",
  },
];

const techStack = [
  {
    heading: "Sunucu donanımı",
    items: "Dell PowerEdge · HPE ProLiant · Lenovo ThinkSystem · Huawei FusionServer",
  },
  {
    heading: "Sanallaştırma",
    items: "VMware vSphere / ESXi · vCenter · Microsoft Hyper-V · Proxmox VE",
  },
  {
    heading: "Yedekleme",
    items: "Veeam Backup & Replication · Veeam Agent · SureBackup doğrulaması",
  },
  {
    heading: "İşletim sistemi",
    items: "Windows Server 2016-2025 · Ubuntu Server · Red Hat Enterprise Linux · Debian",
  },
];

const maintenanceScope = [
  {
    icon: Thermometer,
    title: "Donanım sağlık kontrolü",
    description:
      "Fan, güç kaynağı, bellek ve sıcaklık sensörlerinin okunması; iDRAC/iLO uyarı günlüğünün incelenmesi.",
  },
  {
    icon: Cpu,
    title: "Firmware ve BIOS güncelleme",
    description:
      "Üretici sürüm matrisine göre BIOS, RAID denetleyici, HBA ve ağ kartı yazılımlarının planlı güncellenmesi.",
  },
  {
    icon: DatabaseBackup,
    title: "Yedek doğrulama testi",
    description:
      "Örnek dosya ve sanal makine geri yüklemesi; yedek zincirinin bütünlüğü ve saha dışı kopyanın kontrolü.",
  },
  {
    icon: HardDrive,
    title: "Disk ve RAID durumu",
    description:
      "Dizi sağlığı, yeniden yapılandırma geçmişi, yedek disk (hot spare) varlığı ve SSD aşınma yüzdesi.",
  },
  {
    icon: ClipboardList,
    title: "Log ve kaynak analizi",
    description:
      "Olay günlüklerinde tekrar eden hataların tespiti, servis çökme kayıtları, CPU/bellek/IOPS eğilimi.",
  },
  {
    icon: Gauge,
    title: "Kapasite raporu",
    description:
      "Depolama ve işlem gücü büyüme hızına göre doluluk tahmini, yenileme veya genişletme önerisi.",
  },
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="rack-bg relative overflow-hidden border-b border-srv-border/60">
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-srv-border bg-srv-card/70 px-4 py-1.5 text-sm font-medium text-srv-sand">
            <ShieldCheck className="h-4 w-4 text-srv-amber" aria-hidden="true" />
            Bir AFN Teknoloji markasıdır
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
            Sunucu Kurulum,{" "}
            <span className="text-gradient">Bakım ve Yönetimi</span>
          </h1>
          <div className="amber-rule mt-6 h-px w-32" aria-hidden="true" />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Sunucu, kurulduğu gün değil; her ay ölçüldüğü, güncellendiği ve
            yedeği geri döndüğü sürece güvenilirdir. Fiziksel donanımdan
            sanallaştırma katmanına, RAID dizisinden yedekleme zincirine kadar
            tüm sunucu altyapınızı tek elden işletiyoruz.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={NAP.phoneHref}
              className="flex items-center justify-center gap-2 rounded-xl bg-srv-amber px-6 py-3 text-base font-bold text-srv-deep transition-colors hover:bg-srv-gold"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {NAP.phoneDisplay}
            </a>
            <Link
              href="/bakim-paketleri/"
              className="flex items-center justify-center gap-2 rounded-xl border border-srv-border px-6 py-3 text-base font-semibold text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
            >
              <ClipboardList className="h-5 w-5" aria-hidden="true" />
              Bakım kapsamını inceleyin
            </Link>
          </div>

          <dl className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { term: "2 saat", detail: "Kritik arızada müdahale" },
              { term: "7/24", detail: "Eşik alarmlı sunucu izleme" },
              { term: "3-2-1", detail: "Yedekleme mimarisi standardı" },
              { term: "2010", detail: "Kurumsal bilişim deneyimi" },
            ].map((stat) => (
              <div
                key={stat.term}
                className="rounded-xl border border-srv-border bg-srv-card/60 px-5 py-4"
              >
                <dt className="text-2xl font-extrabold text-srv-gold">{stat.term}</dt>
                <dd className="mt-1 text-sm text-srv-muted">{stat.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Hizmetler */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-3xl font-bold">Sunucu hizmetlerimiz</h2>
        <p className="mt-3 max-w-2xl text-gray-400">
          Kurulumdan emekliliğe kadar sunucunun tüm yaşam döngüsünü kapsayan
          altı ana çalışma alanı.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-srv-border bg-srv-card p-6 transition-colors hover:border-srv-amber/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-srv-amber/20 bg-srv-amber/10 text-srv-gold">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
        <Link
          href="/hizmetlerimiz/"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-srv-gold hover:text-srv-sand"
        >
          Tüm hizmet detayları
          <ServerCog className="h-4 w-4" aria-hidden="true" />
        </Link>
      </section>

      {/* Teknoloji şeridi */}
      <section className="border-y border-srv-border/60 bg-srv-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold">Çalıştığımız donanım ve platformlar</h2>
          <p className="mt-3 max-w-2xl text-gray-400">
            Marka bağımsız çalışıyoruz; mevcut altyapınız hangi üreticiye aitse
            onun yönetim araçlarıyla ilerliyoruz.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {techStack.map((group) => (
              <div
                key={group.heading}
                className="rounded-xl border border-srv-border bg-srv-card/50 p-5"
              >
                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-srv-amber">
                  <Boxes className="h-4 w-4" aria-hidden="true" />
                  {group.heading}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">
                  {group.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bakım kapsamı özeti */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-3xl font-bold">Periyodik bakımda ne yapıyoruz?</h2>
        <p className="mt-3 max-w-2xl text-gray-400">
          Her bakım ziyareti aynı kontrol listesiyle yürütülür ve sonuçlar
          raporlanır; böylece sunucunun durumu tahmine değil ölçüme dayanır.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {maintenanceScope.map((item) => (
            <div
              key={item.title}
              className="panel rounded-2xl p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-srv-raise text-srv-gold">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-3 text-base font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {SLA_TIERS.map((tier) => (
            <div
              key={tier.level}
              className="rounded-2xl border border-srv-border bg-srv-card p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-bold uppercase tracking-wider text-srv-muted">
                  {tier.level}
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-srv-amber/[0.12] px-3 py-1 text-sm font-bold text-srv-gold">
                  <Timer className="h-4 w-4" aria-hidden="true" />
                  {tier.time}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {tier.scope}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SSS */}
      <section className="border-t border-srv-border/60 bg-srv-deep">
        <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
          <h2 className="text-center text-3xl font-bold">Sıkça Sorulan Sorular</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-400">
            Sunucu bakımı, göç, yedekleme ve lisanslama hakkında en çok
            karşılaştığımız sorular.
          </p>
          <div className="mt-10 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-srv-border bg-srv-card p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-srv-amber transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center md:py-20">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-srv-amber/25 bg-srv-amber/10 text-srv-gold">
          <ServerCog className="h-7 w-7" aria-hidden="true" />
        </span>
        <h2 className="mt-5 text-3xl font-bold">
          Sunucularınızın durumunu birlikte ölçelim
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-400">
          Ücretsiz sunucu sağlık kontrolüyle başlıyoruz: donanım durumu, RAID
          dizisi, yedek doğrulaması ve kapasite eğilimini raporluyor, ardından
          ihtiyacınıza göre bakım kapsamı öneriyoruz.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={NAP.phoneHref}
            className="flex items-center gap-2 rounded-xl bg-srv-amber px-6 py-3 text-base font-bold text-srv-deep transition-colors hover:bg-srv-gold"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {NAP.phoneDisplay}
          </a>
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 rounded-xl border border-srv-border px-6 py-3 text-base font-semibold text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
          >
            <ClipboardList className="h-5 w-5" aria-hidden="true" />
            Teklif formu — afnteknoloji.com
          </a>
        </div>
      </section>
    </>
  );
}
