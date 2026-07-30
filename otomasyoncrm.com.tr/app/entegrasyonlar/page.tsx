import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Database,
  FileSpreadsheet,
  Globe2,
  Mail,
  MessageCircle,
  Phone,
  Receipt,
} from "lucide-react";
import { NAP, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Entegrasyonlar | CRM'in Bağlandığı Sistemler — Otomasyon CRM",
  description:
    "CRM otomasyonunun bağlandığı sistemler: Akınsoft Wolvox ve Netsis ERP, Microsoft 365 e-posta ve takvim, web sitesi formları, e-fatura ve muhasebe tarafı, santral ve WhatsApp kayıtları.",
  alternates: {
    canonical: `${SITE_URL}/entegrasyonlar/`,
  },
};

const integrations = [
  {
    icon: Database,
    name: "ERP — Akınsoft Wolvox",
    flow: [
      "Cari kartlar, bakiye ve vade bilgisi ERP'den CRM'e akar",
      "Satışta oluşan sipariş ERP tarafına aktarılır",
      "Döviz kuru gerektiren kayıtlarda güncel kur uygulanır",
      "Yaşlandırma verisi satış ekibinin ekranına düşer",
    ],
    note: "AFN Teknoloji kendi CRM'ini (AfnCrm) Wolvox verisi üzerine kurdu; günlük kur senkronu ve cari yaşlandırma raporu bu entegrasyonun çalışan örneğidir.",
  },
  {
    icon: Database,
    name: "ERP — Logo Netsis",
    flow: [
      "Ürün ve stok bilgisi talep anında sorgulanır",
      "Teklif kalemleri gerçek stok durumuyla eşleştirilir",
      "Sipariş ve talepler ERP kayıtlarıyla ilişkilendirilir",
      "Fiyat listesi tek kaynaktan okunur",
    ],
    note: "Üretim yapan firmalarda ürün ve alt reçete kontrolü bu bağlantı üzerinden yürütülür.",
  },
  {
    icon: Mail,
    name: "Microsoft 365 — e-posta ve takvim",
    flow: [
      "Müşteriyle yapılan yazışma ilgili kayda otomatik bağlanır",
      "Teklif ve hatırlatma e-postaları kurumsal adresten çıkar",
      "Görüşme randevuları takvime yazılır, hatırlatma kurulur",
      "Ekip üyeleri arasında müsaitlik görünür",
    ],
    note: "Yazışma geçmişi kişinin gelen kutusunda değil, müşteri kaydında birikir.",
  },
  {
    icon: Globe2,
    name: "Web sitesi formları",
    flow: [
      "İletişim, teklif ve destek formları CRM'e potansiyel müşteri açar",
      "Hangi sayfadan ve hangi kampanyadan geldiği etiketlenir",
      "Yanıt süresi ölçülür, geciken talep uyarı üretir",
      "Tekrarlayan başvurular mevcut kayda eklenir",
    ],
    note: "Reklam harcamasının hangi formu, hangi formun hangi satışı getirdiği izlenebilir hale gelir.",
  },
  {
    icon: Receipt,
    name: "E-fatura ve muhasebe tarafı",
    flow: [
      "Kesilen fatura bilgisi ilgili fırsata bağlanır",
      "Tahsilat durumu satış ekranında görünür",
      "Vadesi geçen bakiye için hatırlatma zinciri tetiklenir",
      "Dönemsel ciro raporu tek kaynaktan üretilir",
    ],
    note: "Satışın kapattığı işin gerçekten tahsil edilip edilmediği aynı ekranda görünür.",
  },
  {
    icon: MessageCircle,
    name: "Santral ve WhatsApp kayıtları",
    flow: [
      "Gelen çağrı numarası mevcut müşteriyle eşleştirilir",
      "Eşleşmeyen numara için yeni kayıt önerisi çıkar",
      "Görüşme notu kayda işlenir, takip görevi açılır",
      "Yanıtlanmayan çağrılar geri arama listesine düşer",
    ],
    note: "Telefonla gelen talepler de dijital kanallar gibi ölçülebilir hale gelir.",
  },
];

const principles = [
  {
    title: "Tek yönlü mü, iki yönlü mü?",
    text: "Her alan için ayrı karar veriyoruz. Bakiye gibi muhasebenin sahibi olduğu veriler CRM'e yalnızca okunur akar; sipariş gibi satışın ürettiği veriler ERP'ye yazılır. Böylece hangi sistemin hangi bilginin kaynağı olduğu belirsiz kalmaz.",
  },
  {
    title: "Bağlantı nasıl kuruluyor?",
    text: "Sistemin sunduğu API varsa onu, yoksa veritabanı üzerinden okuma katmanı kullanıyoruz. Yazma işlemleri her zaman kontrollü ve kayıtlıdır; hangi kaydın hangi akışla değiştiği izlenebilir.",
  },
  {
    title: "Bağlantı koparsa ne olur?",
    text: "Akış hata verdiğinde işlem sessizce kaybolmaz: yeniden denenir, çözülemezse sorumluya bildirim gider ve kayıt bekleyen işler listesinde kalır.",
  },
];

export default function EntegrasyonlarPage() {
  return (
    <>
      <section className="hero-lines-bg relative overflow-hidden border-b border-ops-border/60">
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-extrabold">Entegrasyonlar</h1>
          <p className="mt-4 max-w-3xl text-lg text-ops-light/80">
            Otomasyonun değeri, CRM'in şirketteki diğer sistemlerle konuşmasıyla
            ortaya çıkıyor. Aşağıda hangi sisteme bağlandığımızı ve o bağlantıda
            tam olarak neyin aktığını bulacaksınız.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {integrations.map(({ icon: Icon, name, flow, note }) => (
            <article
              key={name}
              className="flex flex-col rounded-2xl border border-ops-border bg-ops-card p-7"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ops-emerald/15 text-ops-mint">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-xl font-bold">{name}</h2>
              <ul className="mt-5 space-y-2 text-sm text-ops-light/80">
                {flow.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ops-mint"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl bg-ops-deep p-4 text-sm leading-relaxed text-ops-light/70">
                {note}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-ops-border/60 bg-ops-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-3xl font-extrabold">
            Entegrasyon yaklaşımımız
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {principles.map(({ title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-ops-border bg-ops-card p-7"
              >
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ops-light/70">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-ops-border bg-ops-card p-8">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-xl">
                <h3 className="flex items-center gap-2 text-xl font-bold">
                  <FileSpreadsheet className="h-5 w-5 text-ops-mint" aria-hidden="true" />
                  Excel'den geçiş yapıyorsanız
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ops-light/70">
                  Mevcut müşteri ve fırsat listelerinizi Excel'den aktarıyoruz.
                  Aktarım öncesi tekrarlayan kayıtları temizliyor, alan eşleşmesini
                  sizinle birlikte doğruluyoruz.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={NAP.phoneHref}
                  className="flex items-center gap-2 rounded-xl bg-ops-emerald px-6 py-3 text-base font-bold text-white transition-colors hover:bg-ops-mint hover:text-ops-deep"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Görüşelim
                </a>
                <Link
                  href="/otomasyon-senaryolari/"
                  className="flex items-center gap-2 rounded-xl border border-ops-border px-6 py-3 text-base font-semibold text-ops-light transition-colors hover:bg-ops-raise hover:text-white"
                >
                  Senaryolar
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
