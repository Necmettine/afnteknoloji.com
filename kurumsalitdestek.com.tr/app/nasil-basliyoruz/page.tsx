import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  FileSearch,
  HandshakeIcon,
  KeyRound,
  LineChart,
  MonitorCheck,
  Phone,
} from "lucide-react";
import { NAP, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nasıl Başlıyoruz | BT Dış Kaynak Geçiş Süreci — Kurumsal BT Destek",
  description:
    "Yönetilen BT hizmetine geçiş süreci: ücretsiz BT envanteri ve risk analizi, kapsam ve SLA belirleme, devir teslim, izleme kurulumu, ilk 90 gün iyileştirme planı ve düzenli gözden geçirme toplantıları.",
  alternates: {
    canonical: `${SITE_URL}/nasil-basliyoruz/`,
  },
};

const phases = [
  {
    icon: FileSearch,
    step: "1",
    title: "Ücretsiz BT envanteri ve risk analizi",
    duration: "1–2 hafta",
    items: [
      "Sunucu, ağ cihazı, bilgisayar ve yazılım envanterinin çıkarılması",
      "Yedekleme ve güvenlik durumunun tespiti",
      "Lisans ve abonelik envanteri, gereksiz harcamaların işaretlenmesi",
      "Öncelikli risklerin yazılı raporlanması",
    ],
    note: "Bu aşama taahhüt gerektirmez. Rapor sizde kalır; devam etmeseniz de mevcut durumunuzun fotoğrafını elde etmiş olursunuz.",
  },
  {
    icon: ClipboardCheck,
    step: "2",
    title: "Kapsam ve hizmet seviyesi belirleme",
    duration: "1 hafta",
    items: [
      "Hangi başlıkların sözleşmeye gireceğinin kararlaştırılması",
      "Müdahale sürelerinin (SLA) yazılı tanımlanması",
      "Kullanıcı ve cihaz sayısına göre aylık bedelin netleştirilmesi",
      "Kapsam dışı işlerin nasıl fiyatlanacağının önceden belirlenmesi",
    ],
    note: "Sürpriz fatura olmaması için kapsam dışı kalan işler de baştan yazılı hale getirilir.",
  },
  {
    icon: KeyRound,
    step: "3",
    title: "Devir teslim",
    duration: "1–2 hafta",
    items: [
      "Yönetici şifrelerinin ve erişim bilgilerinin güvenli şekilde devralınması",
      "Alan adı, hosting, lisans ve abonelik hesaplarının kurum adına doğrulanması",
      "Mevcut dokümantasyonun teslim alınması, eksiklerin tamamlanması",
      "Önceki hizmet sağlayıcıyla düzenli geçiş",
    ],
    note: "En kritik aşama budur. Şifre ve hesapların kurumun kendi adına kayıtlı olduğunu doğrulamak, ileride yaşanabilecek en büyük riski ortadan kaldırır.",
  },
  {
    icon: MonitorCheck,
    step: "4",
    title: "İzleme kurulumu",
    duration: "1 hafta",
    items: [
      "Sunucu, yedekleme ve ağ izlemesinin devreye alınması",
      "Uyarı eşiklerinin belirlenmesi",
      "Talep yönetimi sisteminin açılması ve kullanıcı bilgilendirmesi",
      "İletişim kanallarının duyurulması",
    ],
    note: "Arızayı sizden önce görmek, hizmet kalitesinin en somut göstergesidir.",
  },
  {
    icon: LineChart,
    step: "5",
    title: "İlk 90 gün iyileştirme planı",
    duration: "3 ay",
    items: [
      "Risk raporundaki kritik maddelerin sırayla kapatılması",
      "Yedeklerin geri dönüş testinin yapılması",
      "Gereksiz lisansların iptali ve maliyet düzeltmesi",
      "Standart kurulum ve yetkilendirme düzeninin oturtulması",
    ],
    note: "İlk üç ay devralınan ortamın toparlanma dönemidir; kazanımlar aylık raporda somut olarak görünür.",
  },
  {
    icon: HandshakeIcon,
    step: "6",
    title: "Düzenli gözden geçirme",
    duration: "Sürekli",
    items: [
      "Aylık BT sağlık raporunun sunulması",
      "Üç aylık yönetim değerlendirme toplantısı",
      "Yıllık bütçe ve yenileme planlaması",
      "Kapsamın değişen ihtiyaca göre güncellenmesi",
    ],
    note: "Hizmet sözleşmeyle bitmiyor; ihtiyacınız değiştikçe kapsam da birlikte gözden geçiriliyor.",
  },
];

const concerns = [
  {
    title: "Mevcut BT firmamızla aramız bozulur mu?",
    text: "Geçişi düzenli yürütmek bizim de yararımıza. Devir teslimi mümkün olduğunca önceki sağlayıcıyla birlikte yapıyor, eksik bilgi kalmamasını sağlıyoruz. Amacımız kimseyi kötülemek değil, kesintisiz devralmak.",
  },
  {
    title: "Kendi BT personelimiz varsa ne oluyor?",
    text: "Yerini almıyoruz, yükünü paylaşıyoruz. Rutin işleri ve 7/24 kapsamı biz üstlenirken, kurum içi personel iş süreçlerine ve projelere odaklanabiliyor. Uzmanlık gerektiren konularda arkasında bir ekip oluyor.",
  },
  {
    title: "Verilerimiz ve şifrelerimiz kimde duruyor?",
    text: "Tüm hesaplar kurumun kendi adına kayıtlıdır; biz yetkili kullanıcı olarak çalışırız. Şifreler kurumsal parola kasasında saklanır, erişim kayıtları tutulur. Sözleşme sona erdiğinde tüm erişimler devredilir.",
  },
];

export default function NasilBasliyoruzPage() {
  return (
    <>
      <section className="hero-rule-bg relative overflow-hidden border-b border-mit-border">
        <div className="hero-warm-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-extrabold">Nasıl Başlıyoruz</h1>
          <p className="mt-4 max-w-3xl text-lg text-mit-sand/80">
            BT yönetimini dışarıya vermek güven işidir. Bu yüzden süreci
            adım adım, her aşamada ne yapıldığı görünür olacak şekilde
            yürütüyoruz.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="space-y-6">
          {phases.map(({ icon: Icon, step, title, duration, items, note }) => (
            <article
              key={step}
              className="rounded-2xl border border-mit-border bg-mit-card p-7"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mit-gold/15 text-mit-amber">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-mit-amber">
                    Adım {step} · {duration}
                  </p>
                  <h2 className="mt-1 text-xl font-bold">{title}</h2>
                </div>
              </div>

              <ul className="mt-5 grid gap-2 text-sm text-mit-sand/80 sm:grid-cols-2">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mit-amber"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 rounded-xl bg-mit-deep p-4 text-sm leading-relaxed text-mit-sand/70">
                {note}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-mit-border bg-mit-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-3xl font-extrabold">
            En sık sorulan endişeler
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {concerns.map(({ title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-mit-border bg-mit-card p-7"
              >
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mit-sand/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h2 className="text-3xl font-extrabold">Envanter çalışmasıyla başlayalım</h2>
        <p className="mx-auto mt-4 max-w-2xl text-mit-sand/80">
          İlk adım size hiçbir yükümlülük getirmiyor. Mevcut BT ortamınızın
          durumunu yazılı raporla görün, kararı sonra verin.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={NAP.phoneHref}
            className="flex items-center gap-2 rounded-xl bg-mit-gold px-7 py-4 text-base font-bold text-mit-deep transition-colors hover:bg-mit-amber"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {NAP.phoneDisplay}
          </a>
          <Link
            href="/iletisim/"
            className="flex items-center gap-2 rounded-xl border border-mit-border px-7 py-4 text-base font-semibold text-mit-sand transition-colors hover:bg-mit-card hover:text-white"
          >
            İletişim bilgileri
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
