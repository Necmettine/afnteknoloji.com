import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Bell,
  Boxes,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Database,
  FileScan,
  FileSignature,
  GitBranch,
  LifeBuoy,
  Phone,
  PlayCircle,
  ScrollText,
  Sparkles,
  Tags,
  UserPlus,
  Zap,
} from "lucide-react";
import { faqItems } from "@/lib/faq-data";
import { CONTACT_URL, NAP, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "İş Akışı Otomasyonu | Talep, Onay ve Süreç Akışlarının Dijitalleşmesi",
  description:
    "Satın alma talebi, izin ve masraf onayı, personel giriş-çıkış, sipariş ve reçete talepleri, gelen evrak kaydı: departmanlar arası iş akışlarını uçtan uca otomatikleştiriyoruz. ERP ve e-posta sistemlerinizle çalışır.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
};

const flowExamples = [
  {
    icon: ClipboardList,
    title: "Satın alma talebi ve onay zinciri",
    description:
      "Talep formu bütçe koduyla açılır, tutara göre onaycılar sırayla devreye girer, onaylanan talep satın alma ekibine düşer.",
  },
  {
    icon: CheckCircle2,
    title: "İzin, masraf ve avans onayı",
    description:
      "Çalışan talebi açar, yönetici mobilden onaylar, sonuç bordro ve muhasebe tarafına kayıt olarak yazılır.",
  },
  {
    icon: UserPlus,
    title: "Personel giriş-çıkış akışı",
    description:
      "İşe başlayan için hesap, e-posta, yetki ve donanım talepleri tek tetikle açılır; ayrılışta aynı liste kapatma yönünde işler.",
  },
  {
    icon: Boxes,
    title: "Sipariş ve reçete (BOM) talebi",
    description:
      "Talep edilen ürün ERP'de aranır, stokla eşleştirilir, eksik kalemler onaydan sonra tedarikçiye otomatik iletilir.",
  },
  {
    icon: FileScan,
    title: "Gelen fatura ve irsaliye kaydı",
    description:
      "E-postayla düşen belge okunur, alanları çıkarılır, ilgili sipariş veya cari kayda bağlanır; eşleşmeyenler kontrol kuyruğuna alınır.",
  },
  {
    icon: LifeBuoy,
    title: "Servis ve arıza talebi yönlendirmesi",
    description:
      "Serbest metinle gelen talep kategorilendirilir, doğru ekibe atanır, süre aşımında bir üst kademeye yükseltilir.",
  },
  {
    icon: FileSignature,
    title: "Sözleşme ve belge yenileme takibi",
    description:
      "Bitiş tarihi yaklaşan sözleşme, sigorta veya sertifika için sorumluya önceden hatırlatma ve yenileme talebi açılır.",
  },
  {
    icon: ScrollText,
    title: "Periyodik rapor üretimi",
    description:
      "Belirlenen gün ve saatte veriler toplanır, rapor hazırlanır, ilgili dağıtım listesine kendiliğinden gönderilir.",
  },
];

const flowAnatomy = [
  {
    icon: PlayCircle,
    step: "01",
    title: "Tetikleyici",
    description:
      "Akışı başlatan olay: doldurulan bir form, gelen bir e-posta, saat 08:00 zamanlayıcısı veya ERP'de oluşan yeni bir kayıt.",
  },
  {
    icon: GitBranch,
    step: "02",
    title: "Koşul",
    description:
      "Verinin hangi yoldan gideceğine karar veren kural: tutar eşiği, departman, ürün grubu, stok durumu, talep tipi.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Aksiyon",
    description:
      "İşin fiilen yapıldığı adım: ERP'de kayıt oluşturma, stok sorgulama, tedarikçiye e-posta, dosya taşıma, hesap açma.",
  },
  {
    icon: Bell,
    step: "04",
    title: "Bildirim",
    description:
      "Doğru kişiye doğru anda haber: onay isteme, sonucu bildirme, süre aşımında hatırlatma ve bir üst kademeye yükseltme.",
  },
  {
    icon: Database,
    step: "05",
    title: "Kayıt",
    description:
      "Her adımın kim tarafından ne zaman yapıldığının değiştirilemez şekilde saklanması; sonradan raporlanabilir iz.",
  },
];

const aiRoles = [
  {
    icon: FileScan,
    title: "Belge okuma",
    description:
      "PDF fatura, irsaliye, teklif ve taranmış evraktan alan çıkarma: numara, tarih, tutar, vergi, kalem satırları. Çıkan değerler akışın kural adımlarına veri olarak girer.",
  },
  {
    icon: Tags,
    title: "Sınıflandırma",
    description:
      "Serbest metinle yazılmış talebin konusunu ve aciliyetini anlayıp doğru kategori ve ekibe yönlendirme. \"Yazıcı çalışmıyor\" ile \"fatura kesilemiyor\" farklı yollara gider.",
  },
  {
    icon: Sparkles,
    title: "Özetleme",
    description:
      "Uzun e-posta zincirini, teknik açıklamayı veya toplantı notunu onaycının okuyacağı birkaç satıra indirme. Onay ekranında karar için gereken bilgi öne çıkar.",
  },
  {
    icon: AlertTriangle,
    title: "Eksik bilgi tespiti",
    description:
      "Talepte olması gereken ama girilmemiş alanları, birbiriyle çelişen değerleri ve alışılmışın dışındaki tutarları yakalayıp talep sahibine geri sorma.",
  },
];

const outcomes = [
  {
    value: "Tek yer",
    label: "Talep, onay ve sonuç aynı akışta; e-posta arşivinde arama biter.",
  },
  {
    value: "Bekleme ölçülür",
    label: "Hangi adımda kaç gün beklendiği rakamla görünür hale gelir.",
  },
  {
    value: "Kural sabit",
    label: "Onay kimde, hangi tutarda ne olur — kişiye değil kurala bağlı.",
  },
  {
    value: "İz kalır",
    label: "Kim ne zaman ne yaptı sorusunun cevabı kayıtta durur.",
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

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-flow-border/60">
        <div className="absolute inset-0 flow-dots opacity-40" aria-hidden="true" />
        <div className="absolute inset-0 flow-glow" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <span className="flow-badge inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            <Workflowish />
            Departmanlar arası süreç otomasyonu
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
            İş Akışlarınızı{" "}
            <span className="text-flow-gradient">Uçtan Uca Otomatikleştirin</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Bir talep doğduğu anda başlar, doğru kişilerden onay alır, ERP ve
            e-posta sistemlerinizle konuşur, sonucu kaydeder. Arada kimsenin
            &quot;bu talep ne oldu&quot; diye sorması gerekmez. Yapay Zeka Flow,
            şirket içi operasyonunuzdaki talep-onay-aksiyon zincirlerini tek bir
            akışta birleştiren AFN Teknoloji markasıdır.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/akis-ornekleri/"
              className="inline-flex items-center gap-2 rounded-xl bg-flow-cyan px-6 py-3 text-base font-bold text-flow-deep transition-colors hover:bg-flow-mint"
            >
              Akış örneklerini inceleyin
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={NAP.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl border border-flow-border px-6 py-3 text-base font-semibold text-slate-200 transition-colors hover:border-flow-cyan/50 hover:text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {NAP.phoneDisplay}
            </a>
          </div>

          {/* Mini akış şeridi — sadece CSS */}
          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item) => (
              <div
                key={item.value}
                className="flow-card flow-edge rounded-xl px-5 py-4 pl-6"
              >
                <p className="text-sm font-bold text-flow-cyan">{item.value}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AKIŞ ÖRNEKLERİ */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Hangi akışlar otomatikleşiyor?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Kurumların büyük kısmında zaman, işin kendisinde değil işin bir
            kişiden diğerine geçmesinde kaybolur. Aşağıdaki akışların hepsi bu
            geçiş noktalarını hedefler.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {flowExamples.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="flow-card flow-card-hover rounded-2xl p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-flow-cyan/25 bg-flow-cyan/10 text-flow-cyan">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10">
          <Link
            href="/akis-ornekleri/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-flow-cyan transition-colors hover:text-flow-mint"
          >
            Sekiz akışın adım adım kurgusu
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* BİR AKIŞ NASIL KURULUR */}
      <section className="relative border-y border-flow-border/60 bg-flow-deep/60">
        <div className="absolute inset-0 flow-rails opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Bir akış nasıl kurulur?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Karmaşık görünen her süreç, aslında beş yapı taşının
              tekrarlanmasından oluşur. Akış tasarımını bu beş adım üzerinden
              konuşuyoruz; böylece süreç sahibi de teknik ekip de aynı şeyi
              anlıyor.
            </p>
          </div>

          <div className="flow-track mt-12 grid gap-6 md:grid-cols-5">
            {flowAnatomy.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="relative">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-flow-cyan/30 bg-flow-base text-flow-cyan">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="mt-4 text-xs font-bold tracking-widest text-flow-sky/70">
                    {item.step}
                  </p>
                  <h3 className="mt-1 text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Somut örnek */}
          <div className="flow-card mt-14 rounded-2xl p-7">
            <p className="text-xs font-bold uppercase tracking-wider text-flow-cyan">
              Beş adım tek bir örnekte
            </p>
            <h3 className="mt-2 text-xl font-bold text-white">
              Bir satın alma talebinin yolculuğu
            </h3>
            <ol className="flow-chain mt-6 text-sm">
              <li>
                <p className="font-semibold text-white">
                  Tetikleyici — talep formu gönderilir
                </p>
                <p className="mt-1 leading-relaxed text-slate-400">
                  Depo sorumlusu, ürün adı, miktar, ihtiyaç tarihi ve bütçe kodu
                  ile talebi açar. Akış aynı saniyede başlar.
                </p>
              </li>
              <li>
                <p className="font-semibold text-white">
                  Koşul — tutar ve stok kontrol edilir
                </p>
                <p className="mt-1 leading-relaxed text-slate-400">
                  Ürün ERP&apos;de sorgulanır. Yeterli stok varsa talep depo
                  çıkışına döner; stok yoksa satın alma yoluna girer. Tutar
                  eşiğine göre onay basamağı belirlenir.
                </p>
              </li>
              <li>
                <p className="font-semibold text-white">
                  Aksiyon — onay sonrası talep iletilir
                </p>
                <p className="mt-1 leading-relaxed text-slate-400">
                  Onaylanan kalem için ilgili tedarikçilere fiyat talebi
                  e-postası gider, ERP tarafında talep kaydı oluşturulur.
                </p>
              </li>
              <li>
                <p className="font-semibold text-white">
                  Bildirim — taraflar bilgilendirilir
                </p>
                <p className="mt-1 leading-relaxed text-slate-400">
                  Talep sahibi sonucu görür, onaycıya 24 saat içinde
                  dokunulmayan talepler için hatırlatma gider, gecikirse bir üst
                  kademeye yükseltilir.
                </p>
              </li>
              <li>
                <p className="font-semibold text-white">
                  Kayıt — iz bırakılır
                </p>
                <p className="mt-1 leading-relaxed text-slate-400">
                  Talebin açılışından kapanışına kadar her hareket, kullanıcı ve
                  zaman damgasıyla saklanır; ay sonunda ortalama onay süresi
                  raporlanabilir.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* YAPAY ZEKANIN ROLÜ */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Yapay zeka akışın neresinde?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Akışın omurgası kurallardır; kurallar öngörülebilir ve
            denetlenebilirdir. Yapay zekayı yalnızca kural yazmanın zor olduğu
            noktalarda, dar ve tanımlı görevlerle kullanıyoruz. Ürettiği her
            çıktı bir öneridir ve bağlayıcı adımlar insan onayından geçer.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {aiRoles.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="flow-card flow-card-hover flow-edge rounded-2xl p-7 pl-8"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-flow-cyan/25 bg-flow-cyan/10 text-flow-cyan">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="flow-card mt-8 rounded-2xl border-l-2 border-l-flow-cyan p-6">
          <p className="text-sm leading-relaxed text-slate-300">
            <span className="font-bold text-white">Sınır nerede:</span> Yapay
            zeka bir tutarı kendi başına onaylamaz, tedarikçiye kendi başına
            sipariş geçmez, bir kaydı kendi başına silmez. Okur, ayırır,
            özetler, eksiği söyler. Kararı veren kural veya insandır; modelin ne
            önerdiği de denetim kaydına yazılır.
          </p>
        </div>
      </section>

      {/* SSS */}
      <section
        id="sss"
        className="border-y border-flow-border/60 bg-flow-deep/60"
      >
        <div className="mx-auto max-w-4xl px-4 py-20">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Sıkça sorulan sorular
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            İş akışı otomasyonu projelerinde en çok sorulan sekiz soru.
          </p>

          <div className="mt-10 space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="flow-card group rounded-xl p-5 open:border-flow-cyan/40"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold text-white">
                  <span>{item.question}</span>
                  <ChevronDown
                    className="mt-0.5 h-5 w-5 shrink-0 text-flow-cyan transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 flow-dots opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center">
          <CalendarClock
            className="mx-auto h-10 w-10 text-flow-cyan"
            aria-hidden="true"
          />
          <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">
            En çok e-posta yaratan sürecinizi konuşalım
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
            Kısa bir keşif görüşmesinde mevcut sürecinizi olduğu gibi
            haritalıyoruz; hangi adımın otomatikleşebileceğini ve neyin insanda
            kalması gerektiğini birlikte belirliyoruz. Tek bir pilot akışla
            başlamak, en hızlı sonuç veren yol.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={NAP.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl bg-flow-cyan px-6 py-3 text-base font-bold text-flow-deep transition-colors hover:bg-flow-mint"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {NAP.phoneDisplay}
            </a>
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-flow-border px-6 py-3 text-base font-semibold text-slate-200 transition-colors hover:border-flow-cyan/50 hover:text-white"
            >
              AFN Teknoloji iletişim formu
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// Rozet içindeki küçük akış işareti — ayrı ikon dosyası gerektirmez
function Workflowish() {
  return (
    <span className="flex items-center gap-1" aria-hidden="true">
      <span className="h-1.5 w-1.5 rounded-full bg-flow-cyan" />
      <span className="h-px w-2 bg-flow-cyan/60" />
      <span className="h-1.5 w-1.5 rounded-full bg-flow-sky" />
    </span>
  );
}
