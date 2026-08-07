import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  FileCheck2,
  FileInput,
  Package,
  Phone,
  Receipt,
  ShieldCheck,
  UserCog,
  Wrench,
} from "lucide-react";
import { NAP, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Akış Örnekleri | İş Akışı Otomasyonu — Yapay Zeka Flow",
  description:
    "Satın alma onayı, izin ve masraf akışı, personel giriş-çıkış, sipariş ve reçete talebi, gelen fatura okuma, servis talebi yönlendirme, sözleşme yenileme ve otomatik raporlama akışlarının adım adım anlatımı.",
  alternates: {
    canonical: `${SITE_URL}/akis-ornekleri/`,
  },
};

const flows = [
  {
    icon: Package,
    id: "satin-alma",
    title: "Satın alma talebi ve onay zinciri",
    trigger: "Departman çalışanının talep formunu doldurması",
    steps: [
      "Talep bütçe kalemi ve tutarla birlikte kaydedilir",
      "Tutara göre onay kademesi otomatik belirlenir (birim yöneticisi → mali işler → genel müdür)",
      "Onaylanan talep satın almaya, ret durumunda gerekçesiyle talep sahibine döner",
      "Sipariş verildiğinde teslim takibi ve fatura eşleştirmesi aynı kayıttan izlenir",
    ],
    gain: "Kimin neyi hangi bütçeden onayladığı kayıtlı; talepler e-posta zincirlerinde kaybolmuyor.",
  },
  {
    icon: Receipt,
    id: "izin-masraf",
    title: "İzin ve masraf onayı",
    trigger: "Personelin izin veya masraf talebi girmesi",
    steps: [
      "Kalan izin hakkı otomatik kontrol edilir, çakışan izinler uyarı üretir",
      "Masraf fişi/faturası eklenir, tutar ve kategori doğrulanır",
      "Yöneticiye onaya düşer, onay sonrası bordro veya muhasebeye iletilir",
      "Aylık özet rapor İnsan Kaynakları ve mali işlere gönderilir",
    ],
    gain: "İzin çakışmaları planlama aşamasında görülüyor; masraf belgesi kaybolmuyor.",
  },
  {
    icon: UserCog,
    id: "personel-giris-cikis",
    title: "Yeni personel giriş ve çıkış akışı",
    trigger: "İnsan Kaynakları'nın işe giriş/çıkış kaydı açması",
    steps: [
      "Göreve göre gereken hesaplar, lisanslar ve erişimler listelenir",
      "BT'ye hesap açma, cihaz teslimi ve kurulum görevleri düşer",
      "Zimmet kaydı oluşturulur, imzalı teslim belgesi kayda bağlanır",
      "Çıkışta aynı liste tersine işler: erişim kapatma, cihaz iadesi, lisans iptali",
    ],
    gain: "Ayrılan personelin açık kalan hesabı ve iade edilmeyen cihazı kalmıyor; denetimde tek listeyle gösterilebiliyor.",
  },
  {
    icon: FileCheck2,
    id: "siparis-recete",
    title: "Sipariş ve reçete (BOM) talebinin ERP ile kontrolü",
    trigger: "Dış ticaret veya satış ekibinin ürün ya da hammadde talebi",
    steps: [
      "Talep tek formdan açılır: ürün kodu, adet, hedef termin ve serbest metinli teknik açıklama",
      "Talep edilen ürünün ERP'de (Netsis) tanımlı olup olmadığı anında sorgulanır",
      "Tanımlıysa güncel stok bakiyesiyle eşleştirilir; talep sahibi stok görünümü üzerinden seçim yapar",
      "Tanımlı değilse süreç ürün kartı açma talebine dallanır, ilgili birime düşer",
      "Talep yöneticinin onayına gider; onay ve ret gerekçesiyle kayıt altına alınır",
      "Onaylanan talep için tedarikçiye ürün kodu ve teknik açıklamayla otomatik e-posta oluşturulur",
      "Talebin bulunduğu aşama, bekleyen onay ve tedarikçi dönüşü tek ekrandan izlenir",
    ],
    gain: "Üretim yapan bir sanayi kuruluşunda kurduğumuz akış: bitmiş ürün siparişleri ile yurt dışından gelen hammadde ve yarı mamul talepleri aynı hatta yürür. Üretici hem kendi ürettiği ürünü hem dışarıdan tedarik ettiği bileşeni aynı formdan talep edebilir; ERP'de karşılığı olmayan kalem sisteme sızmaz.",
    highlight: true,
  },
  {
    icon: FileCheck2,
    id: "stok-uygunluk",
    title: "Stok uygunluk ve ürün kartı doğrulama",
    trigger: "Sipariş veya üretim talebinin kaydedilmesi",
    steps: [
      "Talepteki her kalem için ERP'de ürün kartı aranır (kod ve açıklama birlikte)",
      "Benzer kodlar eşleşmediğinde yakın adaylar listelenir, doğru kart insana seçtirilir",
      "Stok yeterliyse rezerve, yetersizse eksik miktar tedarik talebine dönüşür",
      "Mükerrer ürün kartı açılmasının önüne geçilir, kod standardı korunur",
    ],
    gain: "Aynı ürünün farklı kodlarla iki kez açılması ve 'stokta var sanılıp' üretimin durması gibi klasik hatalar akış seviyesinde engelleniyor.",
  },
  {
    icon: FileInput,
    id: "gelen-belge",
    title: "Gelen fatura ve irsaliyenin okunup kayda bağlanması",
    trigger: "Muhasebe adresine düşen e-posta eki veya taranan belge",
    steps: [
      "Belge okunur; tedarikçi, tarih, tutar ve belge numarası çıkarılır",
      "Mevcut sipariş veya cari kayıtla eşleştirilir",
      "Tutar farkı veya eksik bilgi varsa işaretlenip sorumluya bildirilir",
      "Eşleşen belge ilgili kayda eklenir, arşiv düzeni otomatik korunur",
    ],
    gain: "Belge girişinde elle yazım hatası azalıyor; eşleşmeyen faturalar gözden kaçmıyor.",
  },
  {
    icon: Wrench,
    id: "servis-talebi",
    title: "Servis ve arıza talebinin yönlendirilmesi",
    trigger: "Müşteri veya çalışanın destek talebi açması",
    steps: [
      "Talep konusuna göre sınıflandırılır ve önceliklendirilir",
      "İlgili ekibe veya teknisyene atanır, süre taahhüdü başlar",
      "Süre aşımında bir üst kademeye otomatik yükseltilir",
      "Kapanışta çözüm notu ve memnuniyet sorusu kaydedilir",
    ],
    gain: "Talepler sırasını bekliyor, aciller öne geçiyor; hangi konunun ne kadar sürdüğü ölçülebiliyor.",
  },
  {
    icon: CalendarCheck,
    id: "sozlesme-belge",
    title: "Sözleşme ve belge yenileme takibi",
    trigger: "Belge geçerlilik tarihine kalan gün sayısı",
    steps: [
      "Sözleşme, sigorta, lisans ve sertifika bitiş tarihleri izlenir",
      "60/30/7 gün öncesinde sorumluya hatırlatma gider",
      "Yenileme süreci bir onay akışı olarak açılır",
      "Yenilenmeyen belgeler risk listesinde görünür kalır",
    ],
    gain: "Süresi dolan lisans veya sertifika sürpriz olmuyor; yenileme kimseye bağlı kalmıyor.",
  },
  {
    icon: ShieldCheck,
    id: "periyodik-rapor",
    title: "Periyodik rapor üretimi",
    trigger: "Zamanlayıcı (haftalık, aylık veya dönem sonu)",
    steps: [
      "Farklı sistemlerden veri toplanır ve birleştirilir",
      "Şablona göre tablo ve özet hazırlanır",
      "İlgili yöneticilere e-posta ile gönderilir",
      "Beklenen aralık dışındaki değerler ayrıca uyarı olarak işaretlenir",
    ],
    gain: "Rapor hazırlamak için harcanan saatler ortadan kalkıyor; herkes aynı formatta veriye bakıyor.",
  },
];

export default function AkisOrnekleriPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Sipariş ve reçete talebinin ERP ile kontrol edilerek tedarikçiye iletilmesi",
    description:
      "Ürün veya hammadde talebinin ERP'de kontrol edilip, stokla eşleştirilip, onay sonrası tedarikçiye otomatik iletilmesini sağlayan iş akışı.",
    totalTime: "PT5M",
    step: flows
      .find((flow) => flow.id === "siparis-recete")!
      .steps.map((text, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: `Adım ${index + 1}`,
        text,
      })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <section className="relative overflow-hidden border-b border-flow-border/60">
        <div className="flow-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-extrabold">Akış Örnekleri</h1>
          <p className="mt-4 max-w-3xl text-lg text-flow-light/80">
            Aşağıdaki akışlar farklı departmanlarda en sık kurduğumuz
            otomasyonlar. Her biri bir tetikleyiciyle başlar, koşullara göre
            ilerler ve arkasında denetlenebilir bir kayıt bırakır.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {flows.map(({ icon: Icon, id, title, trigger, steps, gain, highlight }) => (
            <article
              key={id}
              id={id}
              className={`flex flex-col rounded-2xl border p-7 ${
                highlight
                  ? "border-flow-cyan/50 bg-flow-panel"
                  : "border-flow-border bg-flow-card"
              }`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-flow-cyan/15 text-flow-cyan">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-xl font-bold">{title}</h2>

              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-flow-light/50">
                Tetikleyici
              </p>
              <p className="mt-1 text-sm text-flow-light/80">{trigger}</p>

              <ol className="mt-5 space-y-2 text-sm text-flow-light/80">
                {steps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-flow-panel text-[11px] font-bold text-flow-cyan">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <p className="mt-6 rounded-xl bg-flow-deep p-4 text-sm leading-relaxed text-flow-light/70">
                {gain}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-flow-border/60 bg-flow-deep">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h2 className="text-3xl font-extrabold">
            Kendi akışınızı tasarlayalım
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-flow-light/80">
            Süreçler her şirkette farklı yürür. Tek bir akışı pilot olarak
            kurup çalıştığını gördükten sonra diğerlerine geçiyoruz.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={NAP.phoneHref}
              className="flex items-center gap-2 rounded-xl bg-flow-cyan px-7 py-4 text-base font-bold text-flow-deep transition-colors hover:bg-flow-mint"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {NAP.phoneDisplay}
            </a>
            <Link
              href="/nasil-calisir/"
              className="flex items-center gap-2 rounded-xl border border-flow-border px-7 py-4 text-base font-semibold text-flow-light transition-colors hover:bg-flow-card hover:text-white"
            >
              Nasıl çalıştığını okuyun
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
