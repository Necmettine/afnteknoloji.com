import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BellRing,
  CalendarClock,
  FileText,
  Phone,
  RefreshCw,
  Repeat,
  UserPlus,
  Wallet,
} from "lucide-react";
import { NAP, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Otomasyon Senaryoları | Satış Süreci Otomasyonu — Otomasyon CRM",
  description:
    "Potansiyel müşteri kaydından tahsilat hatırlatmasına kadar CRM içinde kurduğumuz somut otomasyon senaryoları: teklif gönderimi, takip zinciri, görev atama, ERP senkronu ve otomatik raporlama.",
  alternates: {
    canonical: `${SITE_URL}/otomasyon-senaryolari/`,
  },
};

const scenarios = [
  {
    icon: UserPlus,
    title: "Potansiyel müşteri kaydının otomatik açılması",
    trigger: "Web sitesi formu, gelen e-posta veya santral çağrı kaydı",
    steps: [
      "Form veya çağrı bilgisi CRM'e potansiyel müşteri olarak düşer",
      "Kaynak (reklam, organik, referans) etiketi otomatik işlenir",
      "Bölge veya ürün grubuna göre satış temsilcisine atanır",
      "Temsilciye bildirim gider, ilk temas için görev oluşur",
    ],
    gain: "Formdan gelen talep kimsenin gelen kutusunda beklemiyor; kaynak bilgisi kaybolmadığı için hangi kanalın iş getirdiği ölçülebiliyor.",
  },
  {
    icon: FileText,
    title: "Teklif hazırlama ve gönderimi",
    trigger: "Fırsatın 'teklif' aşamasına taşınması",
    steps: [
      "Ürün ve fiyat bilgisi kayıttan çekilerek teklif oluşturulur",
      "Kurumsal şablonla PDF üretilir, teklif numarası verilir",
      "Müşteriye e-posta ile gönderilir, kayda kopyası eklenir",
      "Geçerlilik süresi ve revizyon geçmişi izlenir",
    ],
    gain: "Her teklif aynı formatta çıkıyor, fiyat ve iskonto elle yazılmadığı için hata payı düşüyor.",
  },
  {
    icon: BellRing,
    title: "Teklif sonrası hatırlatma zinciri",
    trigger: "Teklifin gönderilmesinden sonra geçen süre",
    steps: [
      "3. gün temsilciye 'ilk dönüş yapıldı mı' hatırlatması",
      "7. gün müşteriye nazik takip e-postası",
      "Geçerlilik bitimine 3 gün kalınca temsilciye uyarı",
      "Yanıt gelmezse fırsat 'beklemede' durumuna geçer, sebep sorulur",
    ],
    gain: "Takip edilmediği için kaybedilen teklif kalmıyor; hangi aşamada kaybedildiği kayda geçtiği için satış hattı gerçeği yansıtıyor.",
  },
  {
    icon: Repeat,
    title: "Aşama değişiminde görev ve onay",
    trigger: "Fırsatın satış hattında bir sonraki aşamaya taşınması",
    steps: [
      "Aşamaya özel kontrol listesi görevleri açılır",
      "Belirli tutarın üzerindeki iskonto yöneticiye onaya düşer",
      "Onay verilmeden sözleşme aşamasına geçiş engellenir",
      "Kim ne zaman onayladı kaydı tutulur",
    ],
    gain: "İskonto ve istisna kararları sözlü kalmıyor, denetlenebilir bir iz bırakıyor.",
  },
  {
    icon: CalendarClock,
    title: "Sözleşme ve abonelik yenileme uyarısı",
    trigger: "Sözleşme bitiş tarihine kalan gün sayısı",
    steps: [
      "60 ve 30 gün öncesinde temsilciye yenileme görevi açılır",
      "Müşterinin geçmiş kullanım ve destek kaydı göreve eklenir",
      "Yenileme teklifi taslak olarak hazırlanır",
      "Yenilenmeyen sözleşmeler kayıp analizine düşer",
    ],
    gain: "Yenileme dönemleri kaçmıyor; mevcut müşteriden gelen ciro takvimle güvenceye alınıyor.",
  },
  {
    icon: Wallet,
    title: "Vade ve tahsilat hatırlatması",
    trigger: "Fatura vade tarihi ve ERP'deki bakiye durumu",
    steps: [
      "Vadesi yaklaşan fatura için müşteriye bilgilendirme",
      "Vadesi geçen bakiye temsilciye ve mali işlere raporlanır",
      "Belirli gecikmede yeni sipariş onayı bekletilir",
      "Yaşlandırma tablosu güncel tutulur",
    ],
    gain: "Tahsilat takibi kişiye bağlı kalmıyor; satış ve mali işler aynı bakiye tablosuna bakıyor.",
  },
  {
    icon: RefreshCw,
    title: "ERP ile cari ve bakiye senkronu",
    trigger: "Zamanlayıcı (gün içinde belirli aralıklarla)",
    steps: [
      "Cari kartlar, bakiye ve vade bilgisi ERP'den okunur",
      "CRM kayıtlarıyla eşleştirilir, farklar işaretlenir",
      "Yeni cari açılışı iki sistemde tek kayda indirilir",
      "Döviz kuru gereken kayıtlarda güncel kur uygulanır",
    ],
    gain: "Satışın gördüğü bakiye ile muhasebenin gördüğü bakiye aynı; çifte veri girişi ortadan kalkıyor.",
  },
  {
    icon: Phone,
    title: "Dönemsel satış raporunun otomatik gönderimi",
    trigger: "Haftanın veya ayın belirli günü",
    steps: [
      "Satış hattı, kazanılan/kaybedilen fırsat ve hedef gerçekleşme derlenir",
      "Temsilci ve ürün grubu kırılımı hazırlanır",
      "Yönetime tablo olarak e-posta ile gönderilir",
      "Anormal sapmalar ayrı uyarı olarak işaretlenir",
    ],
    gain: "Rapor için kimse Excel'de saat harcamıyor; yönetim her pazartesi aynı formatta veriye bakıyor.",
  },
];

export default function OtomasyonSenaryolariPage() {
  return (
    <>
      <section className="hero-lines-bg relative overflow-hidden border-b border-ops-border/60">
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-extrabold">Otomasyon Senaryoları</h1>
          <p className="mt-4 max-w-3xl text-lg text-ops-light/80">
            Aşağıdaki senaryolar, satış ekiplerinin gününü en çok yiyen tekrarlı
            işlerden derlendi. Her biri bir tetikleyiciye bağlı çalışır; kurulum
            sırasında sizin süreç adımlarınıza göre uyarlanır.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {scenarios.map(({ icon: Icon, title, trigger, steps, gain }) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-ops-border bg-ops-card p-7"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ops-emerald/15 text-ops-mint">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-xl font-bold">{title}</h2>

              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-ops-muted">
                Tetikleyici
              </p>
              <p className="mt-1 text-sm text-ops-light/80">{trigger}</p>

              <ol className="mt-5 space-y-2 text-sm text-ops-light/80">
                {steps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ops-raise text-[11px] font-bold text-ops-mint">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <p className="mt-6 rounded-xl bg-ops-deep p-4 text-sm leading-relaxed text-ops-light/70">
                {gain}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-ops-border/60 bg-ops-deep">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h2 className="text-3xl font-extrabold">
            Hangi senaryodan başlayacağınızı birlikte seçelim
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-ops-light/80">
            Genelde tek bir akışla pilot yapıyoruz: en çok zaman kaybettiren
            işi otomatikleştirip sonucu ölçüyor, sonra yaygınlaştırıyoruz.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={NAP.phoneHref}
              className="flex items-center gap-2 rounded-xl bg-ops-emerald px-7 py-4 text-base font-bold text-white transition-colors hover:bg-ops-mint hover:text-ops-deep"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {NAP.phoneDisplay}
            </a>
            <Link
              href="/entegrasyonlar/"
              className="flex items-center gap-2 rounded-xl border border-ops-border px-7 py-4 text-base font-semibold text-ops-light transition-colors hover:bg-ops-card hover:text-white"
            >
              Entegrasyonları görün
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
