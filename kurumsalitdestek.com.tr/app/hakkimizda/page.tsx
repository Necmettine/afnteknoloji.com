import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Building2, Handshake, Mail, MapPin, Phone, Users } from "lucide-react";
import { NAP, PARENT_SITE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda | Kurumsal BT Destek — AFN Teknoloji",
  description:
    "2010'dan beri kurumsal BT hizmeti veren AFN Teknoloji, 500+ müşteriye ISO 27001 standartlarında yönetilen BT hizmeti sunar. Microsoft, Fortinet, VMware, Veeam ve Huawei iş ortağı.",
  alternates: {
    canonical: `${SITE_URL}/hakkimizda/`,
  },
};

const facts = [
  { icon: Building2, label: "2010'dan beri", text: "Kurumsal BT hizmeti" },
  { icon: Users, label: "500+ müşteri", text: "Aktif kurumsal referans" },
  { icon: Award, label: "ISO 27001", text: "Bilgi güvenliği yönetim sistemi" },
];

const partners = [
  "Microsoft — bulut ve lisanslama",
  "Fortinet — ağ güvenliği",
  "VMware — sanallaştırma",
  "Veeam — yedekleme ve felaket kurtarma",
  "Huawei — ağ ve sunucu altyapısı",
];

export default function HakkimizdaPage() {
  return (
    <>
      <section className="hero-rule-bg relative overflow-hidden border-b border-mit-border">
        <div className="hero-warm-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-extrabold">Hakkımızda</h1>
          <p className="mt-4 max-w-3xl text-lg text-mit-sand/80">
            AFN Teknoloji, 2010'dan bu yana kurumların bilgi teknolojileri
            altyapısını kuran ve işleten bir bilişim şirketidir. Kurumsal BT
            Destek, şirketlerin BT yönetimini sözleşmeli olarak üstlendiğimiz
            hizmet markamızdır.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {facts.map(({ icon: Icon, label, text }) => (
            <div
              key={label}
              className="rounded-2xl border border-mit-border bg-mit-card p-7 text-center"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-mit-gold/15 text-mit-amber">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-4 text-lg font-bold">{label}</p>
              <p className="mt-1 text-sm text-mit-sand/70">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-mit-border bg-mit-card p-8">
            <h2 className="text-2xl font-bold">Neden yönetilen hizmet?</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-mit-sand/75">
              <p>
                Orta ölçekli şirketlerin çoğunda BT, bir kişinin sorumluluğunda
                yürüyor. O kişi izne çıktığında, işten ayrıldığında veya
                uzmanlığı dışında bir konu geldiğinde süreç duruyor. Sunucu,
                güvenlik, ağ, bulut ve lisanslama gibi başlıkların hepsinde
                derinlik beklemek de gerçekçi değil.
              </p>
              <p>
                Yönetilen hizmet modelinde bu yükü bir ekip üstleniyor. Rutin
                işler ve 7/24 kapsam bizde; kurum içindeki BT sorumlusu varsa da
                arkasında uzmanlık desteği oluyor.
              </p>
              <p>
                Bu modeli 2010'dan beri farklı sektörlerde uyguluyoruz. Kendi
                geliştirdiğimiz izleme ve risk tarama araçlarını (ShamashAi,
                AfnRiskScan) müşterilerimizin ortamında kullanıyoruz — yani
                kullandığımız araçları biz yazıyoruz.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-mit-border bg-mit-card p-8">
              <h2 className="flex items-center gap-2 text-2xl font-bold">
                <Handshake className="h-6 w-6 text-mit-amber" aria-hidden="true" />
                İş ortaklıklarımız
              </h2>
              <p className="mt-3 text-sm text-mit-sand/70">
                Kurumsal üretici iş ortaklıklarımız sayesinde lisans ve donanım
                tedarikini doğrudan yürütür, teknik destek kanallarına doğrudan
                erişiriz.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-mit-sand/80">
                {partners.map((partner) => (
                  <li key={partner} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mit-amber"
                      aria-hidden="true"
                    />
                    <span>{partner}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-mit-border bg-mit-deep p-8">
              <h2 className="text-xl font-bold">Şirket bilgileri</h2>
              <p className="mt-3 text-sm text-mit-sand/70">{NAP.legalName}</p>
              <ul className="mt-5 space-y-3 text-sm text-mit-sand/80">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-mit-amber" aria-hidden="true" />
                  <span>
                    {NAP.street}
                    <br />
                    {NAP.district}/{NAP.city} {NAP.postalCode}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-mit-amber" aria-hidden="true" />
                  <a href={NAP.phoneHref} className="font-bold text-white hover:text-mit-amber">
                    {NAP.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-mit-amber" aria-hidden="true" />
                  <a href={`mailto:${NAP.email}`} className="hover:text-white">
                    {NAP.email}
                  </a>
                </li>
              </ul>
              <a
                href={PARENT_SITE}
                target="_blank"
                rel="noopener"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-mit-amber hover:text-white"
              >
                afnteknoloji.com — kurumsal ana site
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/nasil-basliyoruz/"
            className="inline-flex items-center gap-2 rounded-xl bg-mit-gold px-7 py-4 text-base font-bold text-mit-deep transition-colors hover:bg-mit-amber"
          >
            Geçiş sürecini inceleyin
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
