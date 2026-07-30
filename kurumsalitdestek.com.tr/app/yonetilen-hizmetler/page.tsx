import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  DatabaseBackup,
  FileBarChart,
  Laptop,
  Phone,
  ShieldCheck,
  ShoppingCart,
  UserRoundCog,
} from "lucide-react";
import { NAP, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Yönetilen Hizmetler | Kurumsal BT Destek — Kapsam ve İçerik",
  description:
    "Yönetilen BT hizmetimizin kapsamı: kullanıcı ve cihaz yönetimi, hesap açma-kapatma süreçleri, Microsoft 365 lisans yönetimi, yedekleme denetimi, güvenlik yönetimi, envanter ve garanti takibi, tedarik danışmanlığı ve aylık BT sağlık raporu.",
  alternates: {
    canonical: `${SITE_URL}/yonetilen-hizmetler/`,
  },
};

const services = [
  {
    icon: Laptop,
    title: "Kullanıcı ve cihaz yönetimi",
    scope: [
      "Bilgisayar, dizüstü ve mobil cihazların kurulumu ve standart yapılandırması",
      "Yazılım kurulumları ve güncelleme yönetimi",
      "Arıza durumunda uzaktan müdahale, gerektiğinde yerinde servis",
      "Yedek cihaz planlaması ve cihaz yenileme takvimi",
    ],
    value:
      "Çalışanın bilgisayarı bozulduğunda kimin ne yapacağı belirsiz kalmıyor; iş durmuyor.",
  },
  {
    icon: UserRoundCog,
    title: "Hesap açma ve kapatma süreçleri",
    scope: [
      "İşe giren personel için gerekli hesap, erişim ve lisansların açılması",
      "Görev değişiminde yetkilerin yeniden düzenlenmesi",
      "Ayrılan personelin tüm erişimlerinin aynı gün kapatılması",
      "Zimmet ve cihaz iade takibi",
    ],
    value:
      "Ayrılan çalışanın hesabı açık kalmıyor — denetimlerde en sık karşılaşılan bulgu ortadan kalkıyor.",
  },
  {
    icon: BadgeCheck,
    title: "Lisans ve abonelik yönetimi",
    scope: [
      "Microsoft 365 abonelik planlarının ihtiyaca göre düzenlenmesi",
      "Kullanılmayan lisansların tespiti ve iptali",
      "Yenileme tarihlerinin takibi ve öncesinde bilgilendirme",
      "Lisans envanterinin güncel tutulması",
    ],
    value:
      "Kullanılmayan lisansa ödeme yapılmıyor; yenileme tarihleri sürpriz olmuyor.",
  },
  {
    icon: DatabaseBackup,
    title: "Yedekleme denetimi",
    scope: [
      "Yedekleme kapsamının belirlenmesi (sunucu, dosya, e-posta, veritabanı)",
      "Yedek işlerinin günlük kontrolü ve hata durumunda müdahale",
      "Periyodik geri dönüş (restore) testi",
      "Saklama süresi ve dış kopya politikası",
    ],
    value:
      "Yedek almak yetmiyor; geri dönüp dönmediği test edilmediği sürece güvence sayılmıyor.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenlik yönetimi",
    scope: [
      "Güvenlik duvarı kural ve güncelleme yönetimi",
      "Uç nokta koruma yazılımının izlenmesi ve uyarı takibi",
      "E-posta güvenliği ve oltalama filtreleri",
      "Erişim yetkilerinin dönemsel gözden geçirilmesi",
    ],
    value:
      "Güvenlik bir ürün satın alma işi değil; kuralların güncel tutulması ve uyarıların takip edilmesi işidir.",
  },
  {
    icon: FileBarChart,
    title: "Envanter ve garanti takibi",
    scope: [
      "Tüm donanım ve yazılımın kayıtlı envanteri",
      "Garanti ve destek sözleşmesi bitiş tarihleri",
      "Cihaz yaşı ve yenileme önceliği",
      "Kimde hangi cihaz var kaydı",
    ],
    value:
      "Bütçe planlamasında hangi cihazın ne zaman değişeceği tahmin değil, veri oluyor.",
  },
  {
    icon: ShoppingCart,
    title: "Tedarik danışmanlığı",
    scope: [
      "İhtiyaç analizi ve doğru ürün/kapasite seçimi",
      "Alternatif markaların karşılaştırması",
      "Kurumsal iş ortaklıklarımız üzerinden tedarik",
      "Kurulum ve devreye alma dahil teslim",
    ],
    value:
      "Gereğinden büyük veya yetersiz donanıma para harcanmıyor; kurulum de aynı elden yürüyor.",
  },
  {
    icon: FileBarChart,
    title: "Aylık BT sağlık raporu",
    scope: [
      "Açılan ve çözülen talep sayısı, ortalama çözüm süresi",
      "Yedekleme ve güvenlik uyarılarının özeti",
      "Öne çıkan riskler ve önerilen aksiyonlar",
      "Yaklaşan yenileme ve bütçe kalemleri",
    ],
    value:
      "BT'nin ne yaptığı görünür oluyor; yönetim harcamayı sonuçla birlikte değerlendiriyor.",
  },
];

export default function YonetilenHizmetlerPage() {
  return (
    <>
      <section className="hero-rule-bg relative overflow-hidden border-b border-mit-border">
        <div className="hero-warm-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-extrabold">Yönetilen Hizmetler</h1>
          <p className="mt-4 max-w-3xl text-lg text-mit-sand/80">
            Sözleşme kapsamımız aşağıdaki başlıklardan oluşur. Kapsam her kurum
            için birlikte belirlenir; ihtiyacınız olmayan bir başlık için ödeme
            yapmazsınız.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, scope, value }) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-mit-border bg-mit-card p-7"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mit-gold/15 text-mit-amber">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-xl font-bold">{title}</h2>
              <ul className="mt-5 space-y-2 text-sm text-mit-sand/80">
                {scope.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mit-amber"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl bg-mit-deep p-4 text-sm leading-relaxed text-mit-sand/70">
                {value}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-mit-border bg-mit-deep">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h2 className="text-3xl font-extrabold">
            Kapsamı birlikte belirleyelim
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-mit-sand/80">
            Ücretsiz BT envanteri ve risk analiziyle başlıyoruz. Mevcut
            durumunuzu gördükten sonra hangi başlıkların gerçekten gerekli
            olduğunu birlikte kararlaştırıyoruz.
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
              href="/nasil-basliyoruz/"
              className="flex items-center gap-2 rounded-xl border border-mit-border px-7 py-4 text-base font-semibold text-mit-sand transition-colors hover:bg-mit-card hover:text-white"
            >
              Geçiş süreci nasıl işliyor?
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
