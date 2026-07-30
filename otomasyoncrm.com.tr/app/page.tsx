import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BellRing,
  CalendarClock,
  ChevronDown,
  ClipboardList,
  FileSpreadsheet,
  FileText,
  GitBranch,
  Inbox,
  Layers,
  Phone,
  PlugZap,
  Repeat,
  Search,
  Settings2,
  Timer,
  UserPlus,
  Wallet,
  XCircle,
} from "lucide-react";
import { faqItems } from "@/lib/faq-data";
import { CONTACT_URL, NAP, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Satış Süreçlerinizi CRM İçinde Otomatikleştirin | Otomasyon CRM",
  description:
    "Lead kaydından tahsilat hatırlatmasına kadar satış hattınız CRM içinde kendiliğinden ilerlesin. Teklif üretimi, hatırlatma zinciri, görev atama, Wolvox/Netsis senkronu ve otomatik satış raporu. AFN Teknoloji.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
};

const scenarios = [
  {
    icon: UserPlus,
    title: "Talep geldiği anda kayıt açılır",
    description:
      "Web formu, telefon veya e-posta ile gelen her talep CRM'de potansiyel müşteri kaydına dönüşür ve nöbetteki temsilciye atanır. Hiçbir talep gelen kutusunda kalmaz.",
  },
  {
    icon: FileText,
    title: "Teklif şablondan üretilir",
    description:
      "Fırsata bağlı ürün ve fiyat satırlarından teklif PDF'i oluşturulur, numaralandırılır ve müşteriye gönderilir. Kopyala-yapıştır ile fiyat hatası yapılmaz.",
  },
  {
    icon: BellRing,
    title: "Teklif sonrası takip kendiliğinden işler",
    description:
      "Gönderimin ardından 3., 7. ve 14. günde hatırlatma zinciri devreye girer. Müşteri yanıt verdiği anda zincir durur, temsilciye bildirim düşer.",
  },
  {
    icon: GitBranch,
    title: "Aşama değişince görev açılır",
    description:
      "Fırsat bir sonraki aşamaya geçtiğinde sorumluya görev, yöneticiye bildirim, gerekirse teknik ekibe keşif talebi otomatik oluşturulur.",
  },
  {
    icon: CalendarClock,
    title: "Yenileme ve vade önceden uyarır",
    description:
      "Sözleşme bitişi, bakım yenilemesi ve ödeme vadesi tarihleri önceden alarm üretir. Yenileme fırsatı süresi dolduktan sonra fark edilmez.",
  },
  {
    icon: Wallet,
    title: "Tahsilat takibi satışın parçası olur",
    description:
      "ERP'deki bakiye ve vade bilgisi CRM'e akar; geciken cariler listelenir, sorumlu temsilciye hatırlatma görevi açılır.",
  },
];

const eliminated = [
  {
    icon: FileSpreadsheet,
    title: "Excel'de tutulan satış takibi",
    problem:
      "Herkesin kendi dosyası, farklı sürümler, kimin hangi müşteriyle görüştüğü belli değil. Dosya kapandığı anda bilgi kayboluyor.",
    solution:
      "Tek bir satış hattı: her fırsatın aşaması, sorumlusu, tutarı ve son teması aynı ekranda. Sürüm karmaşası ortadan kalkar.",
  },
  {
    icon: Inbox,
    title: "Unutulan teklif takibi",
    problem:
      "Teklif gönderiliyor, sonra yoğunlukta unutuluyor. Müşteri aramayınca iş kapanmış sayılıyor; oysa çoğu teklif sadece hatırlatma bekliyor.",
    solution:
      "Her teklife otomatik takip zinciri bağlanır. Yanıt gelmezse temsilciye görev düşer, gecikmiş teklifler yöneticinin ekranında görünür.",
  },
  {
    icon: ClipboardList,
    title: "Elle hazırlanan aylık rapor",
    problem:
      "Ay sonunda saatler süren veri derleme; rakamlar toplandığında zaten geç kalınmış oluyor ve kimse doğruluğundan emin olamıyor.",
    solution:
      "Haftalık ve aylık satış, pipeline ve tahsilat raporu belirlenen gün ve saatte otomatik e-postayla dağıtılır. Kaynak tek ve canlıdır.",
  },
  {
    icon: Repeat,
    title: "İki sistem arasında çift veri girişi",
    problem:
      "Müşteri hem ERP'ye hem CRM'e ayrı ayrı açılıyor; unvan, vergi no ve bakiye bilgileri sistemler arasında tutmuyor.",
    solution:
      "Cari kart, bakiye ve fatura verisi ERP ile senkron çalışır. Bir yerde güncellenen bilgi diğerine akar, mükerrer kayıt engellenir.",
  },
];

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Süreç keşfi",
    description:
      "Satış ekibinizle oturup mevcut akışı adım adım çıkarıyoruz: talep nereden geliyor, teklif nasıl hazırlanıyor, takip kimde kalıyor, rapor nasıl toplanıyor.",
  },
  {
    icon: Layers,
    step: "02",
    title: "Satış hattı tasarımı",
    description:
      "Fırsat aşamaları, zorunlu alanlar, sorumluluk kuralları ve aşama geçiş koşulları tanımlanır. Sadeleştirmeye öncelik veririz.",
  },
  {
    icon: PlugZap,
    step: "03",
    title: "Entegrasyon ve veri aktarımı",
    description:
      "ERP, e-posta/takvim ve web formları bağlanır. Excel'deki müşteri, fırsat ve açık teklif verisi mükerrer temizliğiyle aktarılır.",
  },
  {
    icon: Settings2,
    step: "04",
    title: "Otomasyon kurallarının yazımı",
    description:
      "Hatırlatma zincirleri, görev atama kuralları, vade uyarıları ve rapor gönderim saatleri kurulur; test verisiyle uçtan uca denenir.",
  },
  {
    icon: Timer,
    step: "05",
    title: "Devreye alma ve ince ayar",
    description:
      "Eğitim verilir, ilk 30 gün gerçek kullanım izlenir. Fazla gürültü üreten kurallar kısılır, eksik kalan adımlar tamamlanır.",
  },
];

const metrics = [
  { value: "3-6 hafta", label: "Tipik kurulum süresi" },
  { value: "0", label: "Elle hazırlanan dönemsel rapor" },
  { value: "Tek", label: "Satış verisi kaynağı" },
  { value: "2010", label: "AFN Teknoloji kuruluş yılı" },
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
      <section className="hero-lines-bg relative overflow-hidden border-b border-ops-border/60">
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="inline-flex items-center gap-2 rounded-full border border-ops-border bg-ops-card/70 px-4 py-1.5 text-sm font-medium text-ops-light">
            <Workflowish />
            Bir AFN Teknoloji markasıdır
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl">
            Satış Süreçlerinizi{" "}
            <span className="text-gradient">CRM İçinde Otomatikleştirin</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ops-light/85">
            Talep kaydından teklife, teklif takibinden tahsilat hatırlatmasına
            kadar satış hattınızın her adımı CRM içinde kendiliğinden ilerlesin.
            Satış temsilcisi veri girmekle değil, görüşmeyle uğraşsın.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={NAP.phoneHref}
              className="flex items-center justify-center gap-2 rounded-xl bg-ops-emerald px-6 py-3 text-base font-bold text-white transition-colors hover:bg-ops-mint hover:text-ops-deep"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {NAP.phoneDisplay}
            </a>
            <Link
              href="/otomasyon-senaryolari/"
              className="flex items-center justify-center gap-2 rounded-xl border border-ops-border px-6 py-3 text-base font-semibold text-ops-light transition-colors hover:bg-white/5 hover:text-white"
            >
              Otomasyon senaryolarını görün
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>

          {/* Akış şeridi */}
          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Talep",
              "Nitelendirme",
              "Teklif",
              "Takip",
              "Sipariş & Tahsilat",
            ].map((stage, index) => (
              <div
                key={stage}
                className="rounded-xl border border-ops-border bg-ops-card/70 px-4 py-3"
              >
                <div className="stage-rail mb-3 h-1 w-full rounded-full" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-wider text-ops-mint">
                  Aşama {index + 1}
                </p>
                <p className="mt-1 text-sm font-semibold text-white">{stage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Otomasyon senaryoları */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Satış hattında ne otomatikleşir?</h2>
        <p className="mt-3 max-w-2xl text-ops-light/75">
          Otomasyon soyut bir vaat değil, tek tek tanımlanmış kurallardır.
          Aşağıdakiler en sık kurduğumuz altı senaryodur.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scenarios.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-ops-border bg-ops-card p-6 transition-colors hover:border-ops-mint/60"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ops-emerald/15 text-ops-mint">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ops-light/75">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/otomasyon-senaryolari/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ops-mint hover:text-ops-light"
          >
            Sekiz senaryonun tamamını inceleyin
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Neyi ortadan kaldırıyoruz */}
      <section className="border-y border-ops-border/60 bg-ops-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold">Neyi ortadan kaldırıyoruz?</h2>
          <p className="mt-3 max-w-2xl text-ops-light/75">
            Bir CRM projesinin başarısı hangi özelliği eklediğiyle değil, hangi
            günlük yükü kaldırdığıyla ölçülür.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {eliminated.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-ops-border bg-ops-card p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ops-emerald/15 text-ops-mint">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
                <div className="mt-5 space-y-4 text-sm leading-relaxed">
                  <div className="flex gap-3">
                    <XCircle
                      className="mt-0.5 h-4 w-4 shrink-0 text-red-400/80"
                      aria-hidden="true"
                    />
                    <p className="text-ops-muted">{item.problem}</p>
                  </div>
                  <div className="flex gap-3 rounded-xl border border-ops-border/70 bg-ops-raise/50 p-4">
                    <ArrowRight
                      className="mt-0.5 h-4 w-4 shrink-0 text-ops-mint"
                      aria-hidden="true"
                    />
                    <p className="text-ops-light/90">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Süreç adımları */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Kurulum nasıl ilerliyor?</h2>
        <p className="mt-3 max-w-2xl text-ops-light/75">
          Beş adımlık, sonu belli bir çalışma. Her adımın çıktısı sizinle
          yazılı olarak paylaşılır.
        </p>
        <ol className="mt-10 space-y-4">
          {steps.map((item) => (
            <li
              key={item.step}
              className="flex flex-col gap-4 rounded-2xl border border-ops-border bg-ops-card p-6 sm:flex-row sm:items-start"
            >
              <div className="flex items-center gap-4 sm:w-56 sm:shrink-0">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ops-emerald/15 text-ops-mint">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold tracking-widest text-ops-mint">
                    {item.step}
                  </p>
                  <h3 className="text-base font-bold">{item.title}</h3>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-ops-light/75">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Metrikler */}
      <section className="border-y border-ops-border/60 bg-ops-deep">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="panel rounded-2xl p-6 text-center">
              <p className="text-2xl font-extrabold text-ops-mint">{metric.value}</p>
              <p className="mt-2 text-sm text-ops-light/75">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SSS */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold">Sıkça Sorulan Sorular</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-ops-light/75">
          Satış süreci ve CRM otomasyonu hakkında en çok sorulanlar.
        </p>
        <div className="mt-10 space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-ops-border bg-ops-card p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-ops-mint transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ops-light/85">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-ops-border/60 bg-ops-deep">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h2 className="text-3xl font-bold">
            Satış sürecinizi bir saatte haritalayalım
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ops-light/75">
            Ücretsiz keşif görüşmesinde mevcut akışınızı adım adım çıkarıyor,
            hangi adımların bugünkü sisteminizle bile otomatikleşebileceğini
            söylüyoruz. Sonrasında yazılı kapsam ve fiyat teklifi paylaşıyoruz.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={NAP.phoneHref}
              className="flex items-center gap-2 rounded-xl bg-ops-emerald px-6 py-3 text-base font-bold text-white transition-colors hover:bg-ops-mint hover:text-ops-deep"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {NAP.phoneDisplay}
            </a>
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 rounded-xl border border-ops-border px-6 py-3 text-base font-semibold text-ops-light transition-colors hover:bg-white/5 hover:text-white"
            >
              İletişim formu — afnteknoloji.com
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Workflowish() {
  return (
    <span
      className="flex h-2 w-2 rounded-full bg-ops-mint"
      aria-hidden="true"
    />
  );
}
