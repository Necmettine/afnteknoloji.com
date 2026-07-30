import type { Metadata } from "next";
import Link from "next/link";
import {
  AlarmClock,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Boxes,
  CalendarClock,
  ChevronDown,
  ClipboardList,
  FileSignature,
  KeyRound,
  Layers,
  LifeBuoy,
  Phone,
  ShieldCheck,
  UserCog,
  Wallet,
} from "lucide-react";
import { faqItems } from "@/lib/faq-data";
import { NAP, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Şirketinizin BT Departmanını Biz Yönetelim | Yönetilen BT Hizmetleri",
  description:
    "BT departmanınızın işletilmesini sözleşmeyle devredin: kullanıcı ve cihaz yönetimi, lisans takibi, yedekleme denetimi, güvenlik ve aylık BT sağlık raporu. Sabit aylık bütçe, kritik taleplerde 2 saat yanıt SLA'sı.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
};

const scopeCards = [
  {
    icon: UserCog,
    title: "Kullanıcı ve Cihaz Yönetimi",
    description:
      "İşe giren çalışanın bilgisayarı, hesabı ve yetkileri ilk gün hazır olur; ayrılan çalışanın erişimi aynı gün kapatılır. Süreç kişiye değil, yazılı kurala bağlıdır.",
  },
  {
    icon: Layers,
    title: "Lisans ve Abonelik Yönetimi",
    description:
      "Microsoft 365 ve diğer yazılım aboneliklerinde kim hangi planı kullanıyor izlenir. Boşta duran lisanslar iptal edilir, yenileme tarihleri sürprize dönüşmez.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenlik ve Uyumluluk",
    description:
      "Güvenlik duvarı kuralları, uç nokta koruma, e-posta filtreleme ve çok faktörlü doğrulama tek elden yönetilir; yetkiler dönemsel olarak gözden geçirilir.",
  },
  {
    icon: Boxes,
    title: "Envanter ve Yaşam Döngüsü",
    description:
      "Her cihazın kimde olduğu, garantisinin ne zaman bittiği ve ne zaman yenilenmesi gerektiği kayıt altındadır. Yenileme kararları veriyle alınır.",
  },
  {
    icon: LifeBuoy,
    title: "Yedekleme Denetimi",
    description:
      "Yedeklerin alınması yeterli değildir; geri dönebildiğinin kanıtlanması gerekir. İşler günlük doğrulanır, geri dönüş tatbikatı periyodik olarak yapılır.",
  },
  {
    icon: BarChart3,
    title: "Raporlama ve Bütçe Planlaması",
    description:
      "Ayda bir yönetime hitap eden BT sağlık raporu, üç ayda bir gözden geçirme toplantısı ve yıllık BT bütçesi için önceliklendirilmiş yatırım listesi.",
  },
];

const comparisonRows = [
  {
    criterion: "Maliyet öngörülebilirliği",
    inHouse:
      "Maaş, SGK, yan haklar, eğitim ve araç giderleri; yıl içinde zam ve ek işe alım baskısı.",
    outsourced:
      "Sözleşmeye bağlı sabit aylık bedel. Bütçe kaleminiz baştan bellidir, sürpriz kalem çıkmaz.",
  },
  {
    criterion: "İzin, rapor ve istifa riski",
    inHouse:
      "Tek kişiye bağımlılık. Yıllık izin, hastalık veya ani ayrılışta bilgi de şirketten çıkar.",
    outsourced:
      "Ekip devamlılığı sözleşmenin konusudur. Dokümantasyon şirketinizde kalır, kişiye bağımlılık ortadan kalkar.",
  },
  {
    criterion: "Uzmanlık genişliği",
    inHouse:
      "Bir kişinin ağ, sunucu, güvenlik, bulut ve yedeklemede aynı anda uzman olması beklenir.",
    outsourced:
      "Her başlıkta ayrı uzman. İhtiyaç duyduğunuz alanda deneyimli mühendis aynı sözleşme kapsamında devreye girer.",
  },
  {
    criterion: "Mesai dışı ve 7/24 kapsam",
    inHouse:
      "Akşam, hafta sonu ve resmî tatillerde kapsam genellikle iyi niyete kalır.",
    outsourced:
      "Kapsam ve yanıt süreleri yazılıdır; mesai dışı nöbet düzeni sözleşmede tanımlanır.",
  },
  {
    criterion: "Ölçülebilirlik",
    inHouse:
      "Performans genellikle algıya dayanır; kaç talep geldiği, ne kadarının çözüldüğü kayıtlı değildir.",
    outsourced:
      "Her talep kayıt altındadır. SLA uyumu, çözüm süresi ve tekrar eden sorunlar aylık raporda ölçülür.",
  },
];

const slaRows = [
  {
    level: "Kritik",
    definition:
      "Şirket genelinde iş duruyor: sunucu, internet, e-posta veya üretim uygulaması erişilemez durumda.",
    response: "2 saat",
    coverage: "7/24",
  },
  {
    level: "Yüksek",
    definition:
      "Bir departman veya kritik bir kullanıcı çalışamıyor; geçici çözüm mevcut değil.",
    response: "4 saat",
    coverage: "Hafta içi 08:00–20:00",
  },
  {
    level: "Standart",
    definition:
      "Tek kullanıcıyı etkileyen sorun, yeni kurulum, yetki değişikliği veya bilgi talebi.",
    response: "8 saat",
    coverage: "Hafta içi 09:00–18:00",
  },
];

const reportItems = [
  "Açılan, çözülen ve devreden talep sayısı; ortalama çözüm süresi",
  "SLA uyum oranı ve aşılan taleplerin gerekçeleri",
  "Tekrar eden sorunların kök neden analizi ve kalıcı çözüm önerisi",
  "Yedekleme başarı yüzdesi ve son geri dönüş testinin sonucu",
  "Güvenlik olayları, engellenen oltalama girişimleri, açık kalan yetkiler",
  "Lisans kullanımı, garanti ve sözleşme bitiş takvimi",
  "Önümüzdeki çeyrek için önceliklendirilmiş yatırım ve bütçe önerisi",
];

const trustStats = [
  { value: "2010", label: "Kuruluşundan bu yana" },
  { value: "500+", label: "Hizmet verilen şirket" },
  { value: "ISO 27001", label: "Bilgi güvenliği sertifikası" },
  { value: "2 saat", label: "Kritik talepte yanıt SLA'sı" },
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
      <section className="relative overflow-hidden border-b border-mit-border">
        <div className="hero-warm-glow absolute inset-0" aria-hidden="true" />
        <div className="hero-rule-bg absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 lg:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-mit-amber">
            Yönetilen BT Hizmetleri · BT Dış Kaynak
          </p>
          <div className="rule-accent mt-4 h-px w-24" />
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Şirketinizin BT Departmanını{" "}
            <span className="text-gold-gradient">Biz Yönetelim</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Bilgi teknolojileri, çoğu şirkette yönetilmesi zor ama vazgeçilmez bir
            gider kalemidir. Biz bu kalemi sözleşmeye bağlıyoruz: kullanıcı
            hesaplarından lisanslara, yedeklemeden güvenliğe kadar tüm BT
            işletmesini üstleniyor, her ay ne yaptığımızı ölçülebilir bir raporla
            yönetime sunuyoruz.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-400">
            Sonuç: tahmin edilebilir bir aylık bütçe, kişiye bağımlı olmayan bir
            BT yapısı ve karar alırken güvenebileceğiniz veri.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={NAP.phoneHref}
              className="inline-flex items-center gap-2 bg-mit-gold px-6 py-3 text-base font-bold text-mit-deep transition-colors hover:bg-mit-amber"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Ücretsiz BT envanteri talep edin
            </a>
            <Link
              href="/yonetilen-hizmetler/"
              className="inline-flex items-center gap-2 border border-mit-border px-6 py-3 text-base font-semibold text-gray-200 transition-colors hover:border-mit-gold/60 hover:text-white"
            >
              Hizmet kapsamını inceleyin
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <dl className="mt-14 grid gap-px border border-mit-border bg-mit-border sm:grid-cols-2 lg:grid-cols-4">
            {trustStats.map((stat) => (
              <div key={stat.label} className="bg-mit-graphite px-5 py-6">
                <dt className="text-xs uppercase tracking-wider text-gray-500">
                  {stat.label}
                </dt>
                <dd className="mt-2 text-2xl font-extrabold text-mit-amber">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Yönetilen hizmet kapsamı */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-extrabold tracking-tight">
          Devraldığımız sorumluluk alanları
        </h2>
        <div className="rule-accent mt-4 h-px w-24" />
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-400">
          Yönetilen hizmet, arıza başına fatura kesilen bir model değildir.
          Aşağıdaki başlıkların tamamı sözleşme kapsamındadır ve sonucundan biz
          sorumluyuz.
        </p>

        <div className="mt-10 grid gap-px border border-mit-border bg-mit-border md:grid-cols-2 lg:grid-cols-3">
          {scopeCards.map((card) => (
            <article key={card.title} className="bg-mit-card p-7">
              <span className="flex h-10 w-10 items-center justify-center border border-mit-gold/35 bg-mit-gold/10 text-mit-amber">
                <card.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {card.description}
              </p>
            </article>
          ))}
        </div>

        <Link
          href="/yonetilen-hizmetler/"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-mit-amber hover:text-mit-sand"
        >
          Kapsamın tamamını ve nelerin dâhil olmadığını görün
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </section>

      {/* Karşılaştırma */}
      <section className="border-y border-mit-border bg-mit-deep">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Kendi BT personeli mi, dış kaynak mı?
          </h2>
          <div className="rule-accent mt-4 h-px w-24" />
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-400">
            Bu bir tercih değil, bir hesap sorusudur. Aşağıdaki tabloda iki modeli
            şirket sahibinin ve mali işlerin baktığı yerden karşılaştırdık. Doğru
            cevap şirketinizin ölçeğine göre değişir; 150 kullanıcının üzerindeki
            yapılarda genellikle karma model önerdiğimizi de belirtelim.
          </p>

          <div className="mt-10 overflow-x-auto border border-mit-border">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <caption className="sr-only">
                Şirket içi BT personeli ile yönetilen BT hizmetinin karşılaştırması
              </caption>
              <thead>
                <tr className="bg-mit-card">
                  <th scope="col" className="border-b border-mit-border p-4 font-bold text-white">
                    Kriter
                  </th>
                  <th scope="col" className="border-b border-mit-border p-4 font-bold text-gray-300">
                    Şirket içi BT personeli
                  </th>
                  <th scope="col" className="border-b border-mit-border p-4 font-bold text-mit-amber">
                    Yönetilen BT hizmeti
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.criterion} className="align-top">
                    <th
                      scope="row"
                      className="border-b border-mit-border/70 bg-mit-graphite p-4 font-semibold text-white"
                    >
                      {row.criterion}
                    </th>
                    <td className="border-b border-mit-border/70 p-4 leading-relaxed text-gray-400">
                      {row.inHouse}
                    </td>
                    <td className="border-b border-mit-border/70 bg-mit-gold/[0.04] p-4 leading-relaxed text-gray-300">
                      {row.outsourced}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex items-start gap-3 border-l-2 border-mit-gold bg-mit-card p-5">
            <Wallet className="mt-0.5 h-5 w-5 shrink-0 text-mit-amber" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-gray-300">
              <span className="font-semibold text-white">Pratik ölçüt:</span> tam
              zamanlı bir BT personelinin şirkete yıllık toplam maliyetini
              hesaplayın; ardından aynı bütçeyle kaç uzmanlık alanına, kaç saatlik
              kapsama ve hangi yazılı taahhüde eriştiğinizi karşılaştırın.
              Envanter çalışmamızda bu hesabı sizin rakamlarınızla birlikte
              çıkarıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* SLA */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-extrabold tracking-tight">
          Hizmet seviyesi (SLA) taahhüdümüz
        </h2>
        <div className="rule-accent mt-4 h-px w-24" />
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-400">
          Bir talebin önceliğini keyfî değil, iş üzerindeki etkisine göre
          belirliyoruz. Aşağıdaki yanıt süreleri sözleşmenin ekidir ve aylık
          raporda uyum oranıyla birlikte ölçülür.
        </p>

        <div className="mt-10 overflow-x-auto border border-mit-border">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <caption className="sr-only">
              Öncelik seviyelerine göre yanıt süresi ve kapsam tablosu
            </caption>
            <thead>
              <tr className="bg-mit-card">
                <th scope="col" className="border-b border-mit-border p-4 font-bold text-white">
                  Öncelik
                </th>
                <th scope="col" className="border-b border-mit-border p-4 font-bold text-white">
                  Tanım
                </th>
                <th scope="col" className="border-b border-mit-border p-4 font-bold text-white">
                  Yanıt süresi
                </th>
                <th scope="col" className="border-b border-mit-border p-4 font-bold text-white">
                  Kapsam
                </th>
              </tr>
            </thead>
            <tbody>
              {slaRows.map((row) => (
                <tr key={row.level} className="align-top">
                  <th
                    scope="row"
                    className="border-b border-mit-border/70 bg-mit-graphite p-4 font-bold text-mit-amber"
                  >
                    {row.level}
                  </th>
                  <td className="border-b border-mit-border/70 p-4 leading-relaxed text-gray-400">
                    {row.definition}
                  </td>
                  <td className="whitespace-nowrap border-b border-mit-border/70 p-4 font-semibold text-white">
                    {row.response}
                  </td>
                  <td className="border-b border-mit-border/70 p-4 text-gray-400">
                    {row.coverage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-gray-500">
          <AlarmClock className="mt-0.5 h-4 w-4 shrink-0 text-mit-gold" aria-hidden="true" />
          Yanıt süresi, talebin kayda geçmesinden bir mühendisin çalışmaya
          başlamasına kadar geçen azami süredir. Çözüm süresi sorunun niteliğine
          göre değişir ve her talepte ayrıca bildirilir.
        </p>
      </section>

      {/* Raporlama */}
      <section className="border-y border-mit-border bg-mit-deep">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Her ay yönetim masasına gelen tek sayfa
            </h2>
            <div className="rule-accent mt-4 h-px w-24" />
            <p className="mt-5 text-base leading-relaxed text-gray-400">
              BT'nin en büyük sorunu görünmez olmasıdır. Bir şey çalışmadığında
              fark edilir, çalıştığında hiç konuşulmaz. Aylık BT sağlık raporumuz
              bu görünmezliği ortadan kaldırır: teknik jargon yerine karar almanızı
              sağlayacak dille yazılır.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-400">
              Üç ayda bir yapılan gözden geçirme toplantısında raporu birlikte
              okuyor, gelecek dönemin önceliklerini ve bütçesini masaya
              yatırıyoruz.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/nasil-basliyoruz/"
                className="inline-flex items-center gap-2 border border-mit-border px-5 py-2.5 text-sm font-semibold text-gray-200 transition-colors hover:border-mit-gold/60 hover:text-white"
              >
                Geçiş sürecini görün
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="border border-mit-border bg-mit-card p-7">
            <div className="flex items-center gap-3">
              <ClipboardList className="h-5 w-5 text-mit-amber" aria-hidden="true" />
              <h3 className="text-lg font-bold">Aylık BT sağlık raporu içeriği</h3>
            </div>
            <ul className="mt-6 space-y-4">
              {reportItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-mit-gold" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="mx-auto max-w-4xl px-4 py-20">
        <h2 className="text-3xl font-extrabold tracking-tight">
          Sıkça sorulan sorular
        </h2>
        <div className="rule-accent mt-4 h-px w-24" />
        <p className="mt-5 text-base leading-relaxed text-gray-400">
          Yönetilen BT hizmetine geçmeyi değerlendiren şirket sahiplerinin ve
          mali işler yöneticilerinin bize en sık sorduğu sorular.
        </p>

        <div className="mt-10 divide-y divide-mit-border border border-mit-border">
          {faqItems.map((item) => (
            <details key={item.question} className="group bg-mit-card">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 text-base font-semibold text-white transition-colors hover:text-mit-amber">
                <span>{item.question}</span>
                <ChevronDown
                  className="mt-0.5 h-5 w-5 shrink-0 text-mit-gold transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-gray-400">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-mit-border bg-mit-deep">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <FileSignature className="mx-auto h-8 w-8 text-mit-amber" aria-hidden="true" />
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight">
            Önce envanter, sonra teklif
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-400">
            Rakam vermeden önce ne yönettiğimizi bilmek isteriz. Ücretsiz BT
            envanteri ve risk analizi çalışmamız yaklaşık yarım gün sürer;
            sonunda mevcut durumunuzu ve risklerinizi gösteren bir rapor
            alırsınız. Bu raporu kullanmak için bizimle çalışmak zorunda
            değilsiniz.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={NAP.phoneHref}
              className="inline-flex items-center gap-2 bg-mit-gold px-6 py-3 text-base font-bold text-mit-deep transition-colors hover:bg-mit-amber"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {NAP.phoneDisplay}
            </a>
            <a
              href={NAP.emailHref}
              className="inline-flex items-center gap-2 border border-mit-border px-6 py-3 text-base font-semibold text-gray-200 transition-colors hover:border-mit-gold/60 hover:text-white"
            >
              {NAP.email}
            </a>
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-500">
            <KeyRound className="h-3.5 w-3.5 text-mit-gold" aria-hidden="true" />
            Görüşmelerimiz gizlilik taahhüdü altındadır; ISO 27001 sertifikalı
            süreçlerle çalışıyoruz.
          </p>
          <p className="mt-2 flex items-center justify-center gap-2 text-xs text-gray-500">
            <CalendarClock className="h-3.5 w-3.5 text-mit-gold" aria-hidden="true" />
            Hafta içi 09:00–18:00 arası ulaşabilirsiniz; sözleşmeli müşterilerimiz
            için kritik talep hattı 7/24 açıktır.
          </p>
        </div>
      </section>
    </>
  );
}
