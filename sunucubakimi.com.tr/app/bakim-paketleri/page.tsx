import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  ClipboardList,
  Cpu,
  DatabaseBackup,
  FileBarChart,
  Gauge,
  HardDrive,
  Headset,
  MapPin,
  Phone,
  ScrollText,
  Thermometer,
  Timer,
} from "lucide-react";
import { CONTACT_URL, NAP, SITE_URL, SLA_TIERS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bakım Paketleri | Periyodik Sunucu Bakımı Kapsamı ve Müdahale Süreleri",
  description:
    "Periyodik sunucu bakımı kapsamı: donanım sağlık kontrolü, firmware ve BIOS güncelleme, yedek doğrulama testi, disk ve RAID durumu, log ve kaynak analizi, kapasite raporu. Kritik 2 saat, yüksek 4 saat, standart 8 saat müdahale; uzaktan ve yerinde destek.",
  alternates: {
    canonical: `${SITE_URL}/bakim-paketleri/`,
  },
};

const scopeItems = [
  {
    icon: Thermometer,
    title: "Donanım sağlık kontrolü",
    summary:
      "Sunucunun fiziksel bileşenleri, arıza belirtisi verdiği anda tespit edilir.",
    details: [
      "iDRAC / iLO / XClarity / iBMC uyarı günlüklerinin okunması ve temizlenmesi",
      "Fan devirleri, giriş-çıkış hava sıcaklıkları ve termal alarm eşikleri",
      "Çift güç kaynağının ikisinin de beslendiğinin ve yük dengesinin doğrulanması",
      "Bellek hata sayaçları (correctable ECC) ve işlemci sıcaklık geçmişi",
      "Yerinde ziyaretlerde toz temizliği, kabin kablo düzeni ve etiket kontrolü",
    ],
  },
  {
    icon: Cpu,
    title: "Firmware ve BIOS güncelleme",
    summary:
      "Üreticinin uyumluluk matrisine göre, geri alma planıyla ve bakım penceresinde uygulanır.",
    details: [
      "BIOS/UEFI, BMC, RAID denetleyici, HBA ve ağ kartı yazılım sürümlerinin envanteri",
      "Kritik güvenlik ve veri bütünlüğü düzeltmelerinin önceliklendirilmesi",
      "Sanallaştırma host'larında güncelleme öncesi sanal makinelerin vMotion ile taşınması",
      "Güncelleme sonrası donanım ve servis doğrulama testi",
      "Uygulanan sürümlerin envanter kaydına işlenmesi",
    ],
  },
  {
    icon: DatabaseBackup,
    title: "Yedek doğrulama testi",
    summary:
      "Yedekleme raporunun 'başarılı' demesi yetmez; geri dönüş fiilen denenir.",
    details: [
      "Rastgele seçilmiş dosya ve klasörlerin izinleriyle birlikte geri yüklenmesi",
      "Bir sanal makinenin izole test ağında açılıp işletim sistemi seviyesinde doğrulanması",
      "Veeam SureBackup işlerinin sonuç raporunun incelenmesi",
      "Yedek zinciri bütünlüğü, saha dışı kopyanın güncelliği ve saklama süresi kontrolü",
      "Değiştirilemez (immutable) depolama ayarlarının ve yedek deposu erişim izinlerinin gözden geçirilmesi",
    ],
  },
  {
    icon: HardDrive,
    title: "Disk ve RAID durumu",
    summary:
      "Disk arızası tek başına sorun değildir; yedeklilik kaybı sorundur.",
    details: [
      "RAID dizisi durumu, degrade/rebuild geçmişi ve tamamlanma süresi",
      "Hot spare diskin varlığı ve dizinin gerçekten devralabildiğinin doğrulanması",
      "SMART verileri, yeniden atanmış sektörler ve SSD yazma aşınma yüzdesi",
      "Denetleyici önbellek pili/kapasitör sağlığı ve yazma önbelleği politikası",
      "Birim doluluk oranları ve eşik aşımına kalan tahmini süre",
    ],
  },
  {
    icon: ScrollText,
    title: "Log ve kaynak analizi",
    summary:
      "Tekrar eden hatalar, ileride yaşanacak kesintinin erken habercisidir.",
    details: [
      "Windows olay günlüklerinde ve Linux syslog kayıtlarında yinelenen kritik hataların ayıklanması",
      "Beklenmedik yeniden başlatma, servis çökmesi ve mavi ekran kayıtlarının kök neden takibi",
      "CPU, bellek, disk kuyruğu ve IOPS eğilimlerinin dönem karşılaştırması",
      "Zamanlanmış görevlerin, veritabanı bakım planlarının ve log kesme işlerinin çalıştığının doğrulanması",
      "Güvenlik tarafında başarısız oturum açma denemeleri ve yönetici hesabı hareketleri",
    ],
  },
  {
    icon: Gauge,
    title: "Kapasite raporu",
    summary:
      "Bir sonraki yatırımın ne zaman gerekeceğini tahminle değil veriyle söylüyoruz.",
    details: [
      "Depolama büyüme hızına göre doluluk tahmini ve genişletme takvimi",
      "İşlem gücü ve bellek doygunluğu; sanallaştırma yoğunluk (consolidation) oranı",
      "Yedekleme deposu büyüme eğilimi ve saklama politikasına etkisi",
      "Donanım destek/garanti bitiş tarihleri ve işletim sistemi destek sonu takvimi",
      "Yenileme veya genişletme önerisi ve öngörülen zamanlama",
    ],
  },
];

const deliveryModes = [
  {
    icon: Headset,
    title: "Uzaktan destek",
    description:
      "İzleme, yama yönetimi, log analizi, yedek doğrulama ve yapılandırma değişikliklerinin büyük bölümü uzaktan yapılır. Bağlantı şifrelidir, oturumlar kayıt altına alınır ve yalnızca yetkili mühendisler erişir. Uzaktan yönetim kartları (iDRAC/iLO) sayesinde sunucu kapalıyken bile fiziksel erişim olmadan müdahale edilebilir.",
  },
  {
    icon: MapPin,
    title: "Yerinde destek",
    description:
      "Donanım değişimi, yeni sunucu kurulumu, kablolama, kabin düzeni, UPS ve sunucu odası kontrolü için İstanbul genelinde yerinde geliyoruz. Merkezimiz Maltepe'de olduğu için Anadolu Yakası'nda müdahale süremiz özellikle kısadır; planlı bakım ziyaretleri önceden takvime bağlanır.",
  },
];

const rhythm = [
  {
    period: "Sürekli",
    work: "Eşik alarmlı 7/24 izleme; donanım, servis ve yedekleme işi uyarılarının anlık takibi.",
  },
  {
    period: "Aylık",
    work: "Donanım sağlık kontrolü, disk/RAID durumu, yedek doğrulama testi, log ve kaynak analizi.",
  },
  {
    period: "Üç aylık",
    work: "Firmware/BIOS ve sürücü güncellemeleri, kapasite raporu, güvenlik yapılandırması gözden geçirme.",
  },
  {
    period: "Yıllık",
    work: "Yerinde fiziksel bakım, UPS akü testi, sunucu odası ölçümü ve felaket kurtarma tatbikatı.",
  },
];

export default function BakimPaketleriPage() {
  return (
    <>
      <section className="rack-bg border-b border-srv-border/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-extrabold">Bakım Paketleri</h1>
          <div className="amber-rule mt-5 h-px w-32" aria-hidden="true" />
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-300">
            Periyodik sunucu bakımı, aynı kontrol listesinin düzenli aralıklarla
            uygulanması ve sonucunun yazılı raporlanmasıdır. Aşağıda kapsamın
            tamamını, müdahale sürelerini ve çalışma ritmini bulacaksınız.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-xl border border-srv-amber/25 bg-srv-amber/[0.07] px-4 py-2.5 text-sm text-srv-sand">
            <ClipboardList className="h-4 w-4 shrink-0 text-srv-amber" aria-hidden="true" />
            Kapsam sabit değildir; sunucu sayısı, sanallaştırma katmanı ve kritiklik
            düzeyine göre ihtiyaca göre teklif hazırlıyoruz.
          </p>
        </div>
      </section>

      {/* Kapsam */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-3xl font-bold">Periyodik bakım kapsamı</h2>
        <p className="mt-3 max-w-2xl text-gray-400">
          Altı başlığın her biri her bakım döneminde ayrı ayrı yürütülür ve
          bulgular rapora işlenir.
        </p>
        <div className="mt-10 space-y-6">
          {scopeItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-srv-border bg-srv-card p-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-srv-amber/20 bg-srv-amber/10 text-srv-gold">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300">
                    {item.summary}
                  </p>
                </div>
              </div>
              <ul className="mt-5 grid gap-2.5 md:grid-cols-2">
                {item.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-srv-amber"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed text-gray-400">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Müdahale süreleri */}
      <section className="border-y border-srv-border/60 bg-srv-deep">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-3xl font-bold">Müdahale süreleri</h2>
          <p className="mt-3 max-w-2xl text-gray-400">
            Arıza bildirimi alındıktan sonra çalışmanın başlama süresidir.
            Önceliği etkinin büyüklüğü belirler; yedekliliğin kaybolduğu durumlar
            sistem çalışıyor olsa bile yüksek öncelikli sayılır.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {SLA_TIERS.map((tier) => (
              <div
                key={tier.level}
                className="rounded-2xl border border-srv-border bg-srv-card p-6"
              >
                <span className="flex items-center gap-2 text-3xl font-extrabold text-srv-gold">
                  <Timer className="h-6 w-6 text-srv-amber" aria-hidden="true" />
                  {tier.time}
                </span>
                <h3 className="mt-3 text-sm font-bold uppercase tracking-wider text-srv-muted">
                  {tier.level} öncelik
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {tier.scope}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-srv-muted">
            Uzaktan müdahale çoğu vakada bu sürelerin çok altında, dakikalar
            içinde başlar. Kritik sunucular için yedek parça (disk, güç kaynağı,
            bellek) bulundurma ve donanım üreticisinin ertesi iş günü destek
            paketiyle uyumlu çalışma planı anlaşmaya eklenebilir.
          </p>
        </div>
      </section>

      {/* Çalışma ritmi */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-3xl font-bold">Bakım takvimi</h2>
        <p className="mt-3 max-w-2xl text-gray-400">
          Kritik iş yükü taşıyan sunucularda aylık periyot iki haftaya çekilir.
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left">
            <thead>
              <tr className="border-b border-srv-border">
                <th className="py-3 pr-4 text-sm font-bold uppercase tracking-wider text-srv-amber">
                  Periyot
                </th>
                <th className="py-3 text-sm font-bold uppercase tracking-wider text-srv-amber">
                  Yapılan iş
                </th>
              </tr>
            </thead>
            <tbody>
              {rhythm.map((row) => (
                <tr key={row.period} className="border-b border-srv-border/50">
                  <td className="py-4 pr-4 align-top text-sm font-bold text-white">
                    {row.period}
                  </td>
                  <td className="py-4 align-top text-sm leading-relaxed text-gray-400">
                    {row.work}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Destek biçimi */}
      <section className="border-t border-srv-border/60 bg-srv-deep">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-3xl font-bold">Uzaktan ve yerinde destek</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {deliveryModes.map((mode) => (
              <div
                key={mode.title}
                className="rounded-2xl border border-srv-border bg-srv-card p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-srv-amber/20 bg-srv-amber/10 text-srv-gold">
                  <mode.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{mode.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {mode.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Raporlama + teklif */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-srv-amber/25 bg-srv-amber/10 text-srv-gold">
          <FileBarChart className="h-7 w-7" aria-hidden="true" />
        </span>
        <h2 className="mt-5 text-3xl font-bold">İhtiyaca göre teklif</h2>
        <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-gray-400">
          Bakım bedeli; sunucu sayısı, sanallaştırma host'u ve sanal makine
          adedi, yedeklenen veri hacmi, istenen müdahale süresi ile yerinde
          ziyaret sıklığına göre belirlenir. Bu nedenle liste fiyatı
          yayımlamıyoruz. Ücretsiz sunucu sağlık kontrolünün ardından kapsamı
          netleştirip size özel teklif hazırlıyoruz.
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
        <p className="mt-6 text-sm text-srv-muted">
          Hangi hizmetlerin kapsama girdiğini{" "}
          <Link href="/hizmetlerimiz/" className="font-semibold text-srv-gold hover:text-srv-sand">
            hizmetlerimiz sayfasında
          </Link>{" "}
          ayrıntılı olarak inceleyebilirsiniz.
        </p>
      </section>
    </>
  );
}
