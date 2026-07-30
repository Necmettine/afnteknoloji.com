import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Headset,
  MapPin,
  Network,
  Phone,
  Server,
  ShieldCheck,
  Wifi,
} from "lucide-react";
import { CONTACT_URL, NAP, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "IT Destek Hizmetleri | Yerinde, Uzaktan, Sunucu ve Network",
  description:
    "İstanbul'da kurumsal IT destek hizmet detayları: yerinde teknik destek, uzaktan destek, sunucu kurulumu ve yönetimi, network altyapısı, Microsoft 365, firewall ve yedekleme çözümleri.",
  alternates: {
    canonical: `${SITE_URL}/hizmetler/`,
  },
};

const serviceDetails = [
  {
    icon: MapPin,
    title: "Yerinde IT Destek",
    intro:
      "Uzaktan çözülemeyen donanım ve altyapı sorunları için uzman ekibimiz ofisinize gelir. İstanbul'un tüm ilçelerine hizmet veriyoruz; bakım anlaşmalı müşterilerimizde kritik arızalar için 2 saat müdahale SLA'sı uygulanır.",
    items: [
      "Bilgisayar, yazıcı ve çevre birimi arıza müdahalesi",
      "Donanım değişimi, yükseltme ve yeni kullanıcı kurulumu",
      "Sunucu odası ve kabinet düzenleme",
      "Planlı periyodik yerinde bakım ziyaretleri",
      "Taşınma ve yeni ofis IT altyapı kurulumu",
    ],
  },
  {
    icon: Headset,
    title: "Uzaktan Destek",
    intro:
      "Sorunların büyük bölümü uzaktan, dakikalar içinde çözülür. Onayınızla kurulan şifreli bağlantı üzerinden müdahale eder, her oturumu kayıt altına alırız. Bakım anlaşmalı müşterilerimiz 7/24 destek hattımıza erişebilir.",
    items: [
      "Windows, Office ve iş uygulamaları sorun çözümü",
      "E-posta (Microsoft 365, Exchange, Zimbra) destek",
      "Virüs/zararlı yazılım temizliği",
      "Kullanıcı hesabı ve yetkilendirme işlemleri",
      "Anlık izleme ile proaktif sorun tespiti",
    ],
  },
  {
    icon: Server,
    title: "Sunucu Kurulumu ve Yönetimi",
    intro:
      "Fiziksel ve sanal sunucu altyapınızı kurar, izler ve yönetiriz. VMware ve Hyper-V sanallaştırma, Veeam ile yedekleme ve felaket kurtarma planlaması dahil uçtan uca sunucu hizmeti sunuyoruz.",
    items: [
      "Windows Server kurulum, yapılandırma ve sıkılaştırma",
      "Active Directory, DNS, DHCP, dosya sunucusu yönetimi",
      "VMware / Hyper-V sanallaştırma projeleri",
      "Veeam ile yedekleme ve felaket kurtarma senaryoları",
      "Kaynak izleme, kapasite planlama ve raporlama",
    ],
  },
  {
    icon: Network,
    title: "Network Altyapısı ve Güvenlik",
    intro:
      "Ağ altyapınızı güvenli, hızlı ve izlenebilir hale getiriyoruz. Fortinet firewall çözümleri, yönetilebilir switch yapılandırması ve kurumsal kablosuz ağ projelerinde deneyimli ekibimizle yanınızdayız.",
    items: [
      "Fortinet firewall kurulumu ve kural yönetimi",
      "Switch, VLAN ve ağ segmentasyonu",
      "Kurumsal Wi-Fi kapsama ve erişim noktası projeleri",
      "VPN ile güvenli uzaktan çalışma altyapısı",
      "Ağ izleme, performans ve güvenlik raporları",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Güvenlik ve Yedekleme",
    intro:
      "ISO 27001 sertifikalı süreçlerimizle veri güvenliğinizi kurumsal standartlara taşıyoruz. Uç nokta korumasından yedekleme stratejisine kadar bütünsel bir güvenlik yaklaşımı uyguluyoruz.",
    items: [
      "Kurumsal antivirüs / EDR kurulumu ve takibi",
      "Yedekleme stratejisi tasarımı ve düzenli test",
      "E-posta güvenliği ve spam koruması",
      "Güncelleme ve yama yönetimi",
      "Temel güvenlik farkındalığı yönlendirmeleri",
    ],
  },
  {
    icon: Wifi,
    title: "Microsoft 365 ve Bulut",
    intro:
      "Microsoft 365 geçişi, lisans optimizasyonu ve günlük yönetimi tek elden yürütüyoruz. Yerel sunucudan buluta geçiş projelerinde kesintisiz taşıma sağlıyoruz.",
    items: [
      "Microsoft 365 kurulum ve e-posta taşıma",
      "Teams, SharePoint ve OneDrive yapılandırması",
      "Lisans danışmanlığı ve maliyet optimizasyonu",
      "Çok faktörlü doğrulama (MFA) ve güvenlik politikaları",
      "Hibrit (yerel + bulut) senaryo tasarımı",
    ],
  },
];

export default function HizmetlerPage() {
  return (
    <>
      <section className="hero-grid-bg border-b border-it-border/60">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold">IT Destek Hizmetlerimiz</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            İstanbul genelinde, tek arıza müdahalesinden uçtan uca IT
            yönetimine kadar tüm kurumsal bilişim ihtiyaçlarınız için tek
            muhatap.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {serviceDetails.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-it-border bg-it-card p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-it-blue/15 text-it-sky">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-xl font-bold">{service.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {service.intro}
              </p>
              <ul className="mt-4 space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-it-sky"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-it-border/60 bg-it-deep">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center">
          <h2 className="text-2xl font-bold">
            Hangi hizmete ihtiyacınız olduğundan emin değil misiniz?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            Ücretsiz keşifle mevcut altyapınızı değerlendirip size uygun modeli
            önerelim. Düzenli ihtiyaçlar için{" "}
            <Link href="/bakim-anlasmasi/" className="font-semibold text-it-sky hover:text-it-light">
              bakım anlaşması
            </Link>{" "}
            sayfamıza da göz atabilirsiniz.
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
