import type { Metadata } from "next";
import Link from "next/link";
import {
  BrainCircuit,
  CheckCircle2,
  Compass,
  Database,
  FileSignature,
  Phone,
  Send,
  Workflow,
} from "lucide-react";
import { CONTACT_URL, NAP, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Yapay Zeka CRM, ERP Entegrasyonu ve Otomasyon",
  description:
    "Yapay zeka destekli CRM kurulumu, Wolvox ve Netsis ERP entegrasyonu, iş akışı otomasyonu, doküman ve teklif otomasyonu, yapay zeka danışmanlığı. AFN Teknoloji yazılım ekibi.",
  alternates: {
    canonical: `${SITE_URL}/hizmetlerimiz/`,
  },
};

const serviceDetails = [
  {
    icon: BrainCircuit,
    title: "Yapay Zeka Destekli CRM Kurulumu",
    intro:
      "Hazır bir CRM paketini şirketinize uydurmaya çalışmak yerine, mevcut ERP verinizi kaynak alan ve süreçlerinize göre modüllenen bir CRM kuruyoruz. AfnCrm'i kendi operasyonumuz için bu yöntemle geliştirdik; aynı mimariyi müşteri projelerinde de kullanıyoruz.",
    items: [
      "Cari, teklif, sipariş ve görüşme kayıtlarının tek ekranda toplanması",
      "ERP'deki gerçek bakiye ve vade verisiyle çalışan finans görünümü",
      "Modül ve sayfa bazlı merkezi yetkilendirme; rol varsayılanı üzerine kişiye özel izinler",
      "Teklif hazırlama, gönderim ve yanıt takibi",
      "Toplu bilgilendirme ve mailing kampanyalarının uygulama içinden yürütülmesi",
      "Yapay zeka destekli metin üretimi — her çıktı kullanıcı onayından geçer",
    ],
  },
  {
    icon: Database,
    title: "ERP Entegrasyonu (Wolvox, Netsis)",
    intro:
      "Entegrasyon bizim için gecelik dosya aktarımı değil, ERP veritabanı üzerinde canlı çalışmak demek. Akınsoft Wolvox ve Netsis ile üretim ortamında çalışan entegrasyonlarımız var; ERP'yi değiştirmeden üzerine yeni yetenek ekliyoruz.",
    items: [
      "Wolvox: cari, stok, döviz ve hareket tabloları üzerinde okuma ve yazma",
      "Netsis: ürün kartı, güncel stok ve sipariş verisiyle çalışma",
      "Otomatik döviz kuru senkronizasyonu — kurların doğrudan ERP tablolarına yazılması",
      "ERP raporlarıyla birebir tutan bakiye ve yaşlandırma hesaplamaları",
      "Ürünün ERP'de tanımlı olup olmadığının akış içinde otomatik kontrolü",
      "ERP sürüm ve veritabanı taşıma süreçlerinde entegrasyonun güncellenmesi",
    ],
  },
  {
    icon: Workflow,
    title: "İş Akışı Otomasyonu",
    intro:
      "Şirketlerdeki süreçlerin çoğu yazılımda değil, e-posta zincirlerinde ve Excel dosyalarında yürür. Bu akışları tek bir izlenebilir sürece taşıyoruz: talebi kim açtı, hangi kontrolden geçti, kimin onayında bekliyor, sonucunda ne oldu.",
    items: [
      "Talep formu, kontrol adımları ve çok kademeli onay akışları",
      "Onay ve ret adımlarının kayıt altına alınması, geçmişin izlenebilmesi",
      "Otomatik e-posta ve bildirim gönderimi (tedarikçi, müşteri, iç ekip)",
      "Stok, ürün ve cari verisiyle akış içinde otomatik doğrulama",
      "Bekleyen işlerin ve darboğazların ekran üzerinden raporlanması",
      "Zamanlanmış görevler ile periyodik veri senkronizasyonu",
    ],
  },
  {
    icon: FileSignature,
    title: "Doküman ve Teklif Otomasyonu",
    intro:
      "Teklif, sözleşme, bilgilendirme e-postası ve kurumsal belgeler tekrar eden içeriklerdir. Bu içerikleri yapay zeka desteğiyle üretip onay ve gönderim akışına bağlıyoruz; sonuç, elle yazılan metinlerden hem daha hızlı hem de daha tutarlı oluyor.",
    items: [
      "Teklif metni ve müşteri e-postası taslaklarının otomatik üretilmesi",
      "Kurumsal belgelerin elektronik onaya sunulması, inceleme süresi ve kilitlenme kuralları",
      "Onay sonrası otomatik gönderim ve yanıt takibi",
      "Belge sürümleme ve kimin ne zaman onayladığının kaydı",
      "İnsan onayı zorunlu — yapay zeka çıktısı doğrudan müşteriye gitmez",
    ],
  },
  {
    icon: Compass,
    title: "Yapay Zeka Danışmanlığı",
    intro:
      "Her sürece yapay zeka koymak gerekmiyor. Önce nerede gerçek fayda olduğunu, hangi verinin kullanılabileceğini ve hangi sınırların çizilmesi gerektiğini belirliyoruz. Uygulanabilir olmayan senaryoyu baştan söylemeyi tercih ediyoruz.",
    items: [
      "Mevcut süreç ve veri yapısının keşfi",
      "Uygulanabilir yapay zeka senaryolarının önceliklendirilmesi",
      "Hangi verinin nerede işleneceğinin ve dışarı çıkmayacak alanların tanımlanması",
      "Pilot kapsamının belirlenmesi ve başarı ölçütlerinin netleştirilmesi",
      "Ekip için kullanım ve doğrulama pratiklerinin aktarılması",
    ],
  },
];

export default function HizmetlerimizPage() {
  return (
    <>
      <section className="hero-grid-bg relative overflow-hidden border-b border-ai-border/60">
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold">Hizmetlerimiz</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Yapay zeka destekli CRM kurulumundan ERP entegrasyonuna, iş akışı
            otomasyonundan doküman üretimine kadar; hepsi mevcut sisteminizin
            üzerine kurulur.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="space-y-8">
          {serviceDetails.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-ai-border bg-ai-card p-7"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ai-violet/20 text-ai-indigo">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-xl font-bold">{service.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">
                    {service.intro}
                  </p>
                </div>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-ai-teal"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-ai-border bg-ai-deep p-7 text-center">
          <h2 className="text-xl font-bold">Bu hizmetler nerede çalışıyor?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-400">
            Yukarıdaki başlıkların hepsi, canlı ortamda kullandığımız projelerden
            çıktı. AfnCrm, Netsis entegre sipariş portalı, ShamashAi ve
            AfnRiskScan üzerinden nasıl uyguladığımızı vaka çalışmalarımızda
            okuyabilirsiniz.
          </p>
          <Link
            href="/vaka-calismalari/"
            className="mt-6 inline-block rounded-xl border border-ai-border px-6 py-3 text-sm font-semibold text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
          >
            Vaka Çalışmaları →
          </Link>
        </div>
      </section>

      <section className="border-t border-ai-border/60 bg-ai-deep">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h2 className="text-3xl font-bold">Süreçlerinizi birlikte inceleyelim</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            Ücretsiz keşif görüşmesinde mevcut ERP&apos;nizi ve akışlarınızı
            konuşalım; otomatikleştirmeye değer olanı birlikte belirleyelim.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={NAP.phoneHref}
              className="flex items-center gap-2 rounded-xl bg-ai-violet px-6 py-3 text-base font-bold text-white transition-colors hover:bg-ai-indigo"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {NAP.phoneDisplay}
            </a>
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 rounded-xl border border-ai-border px-6 py-3 text-base font-semibold text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
            >
              <Send className="h-5 w-5" aria-hidden="true" />
              İletişim Formu — afnteknoloji.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
