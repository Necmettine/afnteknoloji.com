import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CalendarClock,
  Database,
  FileSearch,
  KeyRound,
  Mail,
  Phone,
  Plug,
  Rocket,
  ScrollText,
  Users,
  Zap,
} from "lucide-react";
import { NAP, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nasıl Çalışır | İş Akışı Otomasyonu Teknik Yaklaşım — Yapay Zeka Flow",
  description:
    "İş akışı otomasyonunu nasıl kuruyoruz: mevcut sistemlere API ve veritabanı bağlantısı, tetikleyici türleri, onay ve yetkilendirme katmanı, denetim kaydı, hata yönetimi ve devreye alma adımları.",
  alternates: {
    canonical: `${SITE_URL}/nasil-calisir/`,
  },
};

const connections = [
  {
    icon: Plug,
    title: "API üzerinden",
    text: "Sistemin sunduğu resmî arayüz varsa öncelikle onu kullanırız. Güncellemelerden en az etkilenen, en güvenli yöntem budur.",
  },
  {
    icon: Database,
    title: "Veritabanı okuma katmanı",
    text: "API bulunmayan sistemlerde yalnızca okuma yetkili, sınırlı kapsamlı bir katman kurarız. Yazma işlemi asla doğrudan tabloya yapılmaz.",
  },
  {
    icon: Mail,
    title: "E-posta ve dosya köprüsü",
    text: "Bazı süreçler hâlâ e-posta eki veya paylaşılan klasörle yürüyor. Bu kaynakları da akışa dahil eder, gelen belgeyi işleyip ilgili kayda bağlarız.",
  },
];

const triggers = [
  { icon: FileSearch, label: "Form gönderimi", text: "Talep, başvuru veya bildirim formunun doldurulması" },
  { icon: Mail, label: "Gelen e-posta", text: "Belirli bir adrese düşen mesaj veya ek dosya" },
  { icon: CalendarClock, label: "Zamanlayıcı", text: "Belirli gün ve saatte ya da tarih yaklaştığında" },
  { icon: Zap, label: "Sistem olayı", text: "ERP'de kayıt değişimi, stok düşüşü, durum güncellemesi" },
];

const steps = [
  {
    icon: FileSearch,
    title: "1. Keşif",
    text: "Süreci bugün kimin nasıl yürüttüğünü yerinde konuşuruz. Hangi sistemler devrede, hangi bilgi nerede tutuluyor, kararı kim veriyor — bunları çıkarmadan akış tasarlamıyoruz.",
  },
  {
    icon: ScrollText,
    title: "2. Akış tasarımı",
    text: "Tetikleyici, koşullar, onay kademeleri ve bildirimler yazılı olarak tanımlanır. Sizin onayınızdan geçmeden geliştirmeye başlamıyoruz.",
  },
  {
    icon: Rocket,
    title: "3. Pilot",
    text: "Tek bir departmanda, gerçek veriyle çalıştırırız. Bu aşamada eski yöntem de paralel devam eder; sonuçlar karşılaştırılır.",
  },
  {
    icon: Users,
    title: "4. Yaygınlaştırma",
    text: "Pilotta ortaya çıkan düzeltmeler yapıldıktan sonra diğer birimlere açılır, kullanıcı eğitimi verilir, izleme kurulur.",
  },
];

const guarantees = [
  {
    icon: KeyRound,
    title: "Onay ve yetkilendirme",
    text: "Her adımda kimin görebileceği ve kimin onaylayabileceği ayrı tanımlanır. Yetki, kişiye değil role bağlanır; personel değiştiğinde akış bozulmaz. Tutar veya risk eşiklerine göre onay kademesi otomatik değişebilir.",
  },
  {
    icon: ScrollText,
    title: "Denetim kaydı",
    text: "Hangi kaydı kimin ne zaman değiştirdiği, hangi onayın kim tarafından verildiği ve akışın hangi kolundan geçtiği kayıt altına alınır. Denetim veya itiraz durumunda süreç geriye doğru izlenebilir.",
  },
  {
    icon: AlertTriangle,
    title: "Hata durumunda ne olur?",
    text: "Bir adım başarısız olursa işlem sessizce kaybolmaz. Akış belirli aralıklarla yeniden dener; çözülemezse sorumluya bildirim gider ve kayıt bekleyen işler listesinde görünür kalır. Yarım kalmış işlem tespit edilebilir durumdadır.",
  },
];

const aiRoles = [
  "Gelen belgeden bilgi çıkarma (tedarikçi, tutar, tarih, belge numarası)",
  "Serbest metinli talebi doğru kategoriye ve ekibe yönlendirme",
  "Uzun yazışma veya rapor zincirinden özet çıkarma",
  "Eksik veya tutarsız bilgiyi işaretleyip insana sorma",
];

export default function NasilCalisirPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-flow-border/60">
        <div className="flow-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-extrabold">Nasıl Çalışır</h1>
          <p className="mt-4 max-w-3xl text-lg text-flow-light/80">
            İş akışı otomasyonu yeni bir program satın almak değil; mevcut
            sistemlerinizin arasına bir işleyiş katmanı koymaktır. Aşağıda bu
            katmanı nasıl kurduğumuzu teknik ayrıntısıyla anlattık.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-extrabold">Mevcut sistemlere nasıl bağlanıyoruz?</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {connections.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-flow-border bg-flow-card p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-flow-cyan/15 text-flow-cyan">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-flow-light/70">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-flow-border/60 bg-flow-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-extrabold">Tetikleyici türleri</h2>
          <p className="mt-3 max-w-2xl text-flow-light/70">
            Her akış bir olayla başlar. Aynı akış birden fazla tetikleyiciye de
            bağlanabilir.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {triggers.map(({ icon: Icon, label, text }) => (
              <div key={label} className="rounded-2xl border border-flow-border bg-flow-card p-6">
                <Icon className="h-6 w-6 text-flow-sky" aria-hidden="true" />
                <p className="mt-3 font-bold">{label}</p>
                <p className="mt-1 text-sm text-flow-light/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-extrabold">Güvence katmanları</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {guarantees.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-flow-border bg-flow-card p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-flow-cyan/15 text-flow-cyan">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-flow-light/70">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-flow-cyan/40 bg-flow-panel p-8">
          <h3 className="text-xl font-bold">Yapay zeka nerede devreye giriyor?</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-flow-light/75">
            Yapay zeka akışın karar vericisi değil, yardımcısıdır. Finansal
            etkisi olan veya onay gerektiren adımlar kural tabanlı çalışır ve
            insan onayından geçer. Yapay zekayı şu işlerde kullanıyoruz:
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {aiRoles.map((role) => (
              <li key={role} className="flex items-start gap-2 text-sm text-flow-light/80">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-flow-mint"
                  aria-hidden="true"
                />
                <span>{role}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-flow-border/60 bg-flow-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-extrabold">Devreye alma adımları</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-flow-border bg-flow-card p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-flow-sky/15 text-flow-sky">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-flow-light/70">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href={NAP.phoneHref}
              className="flex items-center gap-2 rounded-xl bg-flow-cyan px-7 py-4 text-base font-bold text-flow-deep transition-colors hover:bg-flow-mint"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {NAP.phoneDisplay}
            </a>
            <Link
              href="/akis-ornekleri/"
              className="flex items-center gap-2 rounded-xl border border-flow-border px-7 py-4 text-base font-semibold text-flow-light transition-colors hover:bg-flow-card hover:text-white"
            >
              Akış örneklerine dönün
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
