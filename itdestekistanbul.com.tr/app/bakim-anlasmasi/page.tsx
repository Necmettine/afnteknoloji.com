import type { Metadata } from "next";
import {
  Banknote,
  BellRing,
  CheckCircle2,
  ClipboardList,
  FileCheck,
  LineChart,
  Phone,
  ShieldCheck,
  Timer,
} from "lucide-react";
import { CONTACT_URL, NAP, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "IT Bakım Anlaşması | Kapsam, Avantajlar ve SLA",
  description:
    "İstanbul'da kurumsal IT bakım anlaşması: sınırsız uzaktan destek, planlı yerinde bakım, 7/24 izleme, yedekleme ve güncelleme yönetimi, 2 saat müdahale SLA. Sabit aylık ücretle öngörülebilir IT bütçesi.",
  alternates: {
    canonical: `${SITE_URL}/bakim-anlasmasi/`,
  },
};

const scopeItems = [
  {
    icon: BellRing,
    title: "Sınırsız Uzaktan Destek",
    description:
      "Mesai saatleri içinde sınırsız uzaktan müdahale; kritik sistemler için 7/24 destek hattı. Sorunların büyük kısmı dakikalar içinde çözülür.",
  },
  {
    icon: ClipboardList,
    title: "Planlı Yerinde Bakım",
    description:
      "Aylık veya haftalık periyotlarla düzenli yerinde bakım ziyaretleri: donanım kontrolü, temizlik, kullanıcı ihtiyaçları ve iyileştirme önerileri.",
  },
  {
    icon: LineChart,
    title: "Sunucu ve Network İzleme",
    description:
      "Sunucular, network cihazları ve kritik servisler 7/24 izlenir. Disk doluluğu, servis kesintisi gibi sorunlara siz fark etmeden müdahale edilir.",
  },
  {
    icon: ShieldCheck,
    title: "Yedekleme ve Güvenlik Takibi",
    description:
      "Yedekleme işlerinin günlük kontrolü, düzenli geri dönüş testleri, antivirüs/EDR takibi ve güvenlik uyarılarının yönetimi.",
  },
  {
    icon: FileCheck,
    title: "Güncelleme ve Yama Yönetimi",
    description:
      "İşletim sistemi ve uygulama güncellemeleri planlı şekilde, iş saatlerini aksatmadan uygulanır; sürüm ve lisans takibi yapılır.",
  },
  {
    icon: ClipboardList,
    title: "Envanter ve Raporlama",
    description:
      "Donanım/yazılım envanteri güncel tutulur; yapılan işler, açılan talepler ve sistem sağlığı aylık raporla paylaşılır.",
  },
];

const benefits = [
  {
    icon: Timer,
    title: "2 saat müdahale SLA",
    description:
      "Kritik arızalarda İstanbul içinde 2 saat yerinde müdahale garantisi. Anlaşmalı müşteriler her zaman önceliklidir.",
  },
  {
    icon: Banknote,
    title: "Öngörülebilir maliyet",
    description:
      "Sabit aylık ücret; sürpriz fatura yok. Tam zamanlı IT personeli maliyetinin çok altında, uzman bir ekip.",
  },
  {
    icon: ShieldCheck,
    title: "Proaktif yaklaşım",
    description:
      "Arıza çıktıktan sonra değil, çıkmadan önce müdahale. İzleme ve düzenli bakım sayesinde kesintiler en aza iner.",
  },
];

const steps = [
  {
    step: "1",
    title: "Ücretsiz keşif",
    description:
      "Mevcut altyapınızı yerinde inceliyor, kullanıcı sayısı ve sistemlerinizi çıkarıyoruz.",
  },
  {
    step: "2",
    title: "Kapsam ve teklif",
    description:
      "İhtiyacınıza göre kapsamı netleştirip sabit aylık ücretli teklifimizi sunuyoruz.",
  },
  {
    step: "3",
    title: "Devreye alma",
    description:
      "İzleme araçlarını kuruyor, envanteri çıkarıyor ve destek süreçlerini başlatıyoruz.",
  },
];

export default function BakimAnlasmasiPage() {
  return (
    <>
      <section className="hero-grid-bg border-b border-it-border/60">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold">IT Bakım Anlaşması</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Şirketinizin tüm IT altyapısı sabit aylık ücretle, tek muhataptan,
            ölçülebilir hizmet seviyeleriyle yönetilsin.
          </p>
        </div>
      </section>

      {/* Kapsam */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold">Anlaşma Neleri Kapsar?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-400">
          Kapsam, altyapınıza ve ihtiyaçlarınıza göre özelleştirilir; standart
          bakım anlaşmamız aşağıdaki başlıkları içerir.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {scopeItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-it-border bg-it-card p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-it-blue/15 text-it-sky">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Avantajlar */}
      <section className="border-y border-it-border/60 bg-it-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-3xl font-bold">
            Bakım Anlaşmasının Avantajları
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {benefits.map((item) => (
              <div key={item.title} className="glass rounded-2xl p-6 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-it-blue/15 text-it-sky">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Süreç */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold">Nasıl Başlıyoruz?</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-it-border bg-it-card p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-it-blue text-base font-extrabold text-white">
                {item.step}
              </span>
              <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <ul className="mx-auto mt-10 max-w-2xl space-y-2">
          {[
            "Sözleşmelerde gizlilik ve bilgi güvenliği taahhüdü (ISO 27001 uyumlu)",
            "Kullanıcı sayısı değiştikçe kapsam esnek şekilde güncellenir",
            "Anlaşma dışı proje işlerinde anlaşmalı müşteriye özel fiyat",
          ].map((line) => (
            <li key={line} className="flex items-start gap-2 text-sm text-gray-300">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-it-sky" aria-hidden="true" />
              {line}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="border-t border-it-border/60 bg-it-deep">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center">
          <h2 className="text-2xl font-bold">Ücretsiz keşif randevusu alın</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            Altyapınızı değerlendirelim, şirketinize özel bakım anlaşması
            teklifimizi aynı hafta içinde sunalım.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={NAP.phoneHref}
              className="flex items-center gap-2 rounded-xl bg-it-blue px-6 py-3 text-base font-bold text-white transition-colors hover:bg-it-sky"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {NAP.phoneDisplay}
            </a>
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener"
              className="rounded-xl border border-it-border px-6 py-3 text-base font-semibold text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
            >
              İletişim Formu
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
