import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Shield, Users, Award, Clock, CheckCircle2 } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://turkiyebilisim.com.tr/hakkimizda",
    languages: {
      tr: "https://turkiyebilisim.com.tr/hakkimizda",
      en: "https://turkiyebilisim.com.tr/en/hakkimizda",
    },
  },
  title: "Hakkımızda | Türkiye Bilişim",
};

const values = [
  {
    icon: Shield,
    title: "Güvenilir hizmet modeli",
    desc: "Kurumsal müşteriler için planlı, ölçülebilir ve sürdürülebilir BT hizmeti sunuyoruz.",
  },
  {
    icon: Users,
    title: "Uzman teknik ekip",
    desc: "Sertifikalı mühendislerimizle altyapı, güvenlik ve destek süreçlerini birlikte yönetiyoruz.",
  },
  {
    icon: Award,
    title: "Yetkili çözüm ortaklıkları",
    desc: "Microsoft, Huawei, VMware, Veeam, Fortinet ve Zimbra ekosistemlerinde güçlü yetkinliğe sahibiz.",
  },
  {
    icon: Clock,
    title: "7/24 operasyon desteği",
    desc: "Kritik sistemleriniz için hızlı müdahale ve kesintisiz destek yaklaşımıyla çalışıyoruz.",
  },
];

const partnerCards = [
  {
    brand: "Microsoft",
    level: "Microsoft Partner",
    desc: "Microsoft 365, Azure, Windows Server ve Exchange çözümlerinde yetkili partner.",
    color: "#00A4EF",
    badge: "Partner",
  },
  {
    brand: "Huawei",
    level: "Huawei Partner",
    desc: "Huawei Enterprise ağ, sunucu ve bulut altyapısı çözümlerinde yetkili iş ortağı.",
    color: "#CF0A2C",
    badge: "Enterprise Partner",
  },
  {
    brand: "VMware",
    level: "VMware Partner",
    desc: "vSphere, vCenter ve sanallaştırma projelerinde sertifikalı çözüm desteği sunuyoruz.",
    color: "#607078",
    badge: "Solution Partner",
  },
  {
    brand: "Veeam",
    level: "Veeam Silver Partner",
    desc: "Yedekleme, replikasyon ve felaket kurtarma çözümlerinde Silver Partner statüsündeyiz.",
    color: "#007DB8",
    badge: "Silver Partner",
  },
  {
    brand: "Fortinet",
    level: "Fortinet Partner",
    desc: "FortiGate güvenlik duvarı ve güvenlik operasyonlarında yetkili çözüm ortağıyız.",
    color: "#EE3124",
    badge: "Authorized Reseller",
  },
  {
    brand: "Zimbra",
    level: "Zimbra Türkiye",
    desc: "Kurumsal e-posta ve iletişim altyapısında Zimbra çözümleri sunuyoruz.",
    color: "#EC532B",
    badge: "Official Distributor",
  },
];

export default function HakkimizdaPage() {
  return (
    <main>
      <Header />
      <section className="section-shell min-h-screen pb-20 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#06B6D4]">Kurumsal Profil</span>
            <h1 className="mt-3 text-4xl font-extrabold text-white lg:text-5xl">Türkiye Bilişim Hakkında</h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
              Türkiye Bilişim, 2008&apos;den bu yana kurumsal BT altyapısı, sistem güvenliği, veri
              yedekleme ve teknik destek alanlarında işletmelere sürdürülebilir çözümler sunar.
            </p>
          </div>

          <div className="mb-20 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="panel-surface rounded-[32px] p-8 lg:p-10">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#06B6D4]">Yaklaşımımız</span>
              <h2 className="mt-4 text-3xl font-bold text-white">Teknolojiyi iş sürekliliğine dönüştürüyoruz</h2>
              <p className="mt-5 text-base leading-8 text-slate-400">
                Kurumların BT yatırımlarında yalnızca ürün tedariki değil, doğru planlama, doğru
                uygulama ve operasyonun sürdürülebilirliği kritik önemdedir. Türkiye Bilişim olarak
                bu üç alanı birlikte ele alıyor, satın alma ve yönetim ekiplerinin karar süreçlerini
                kolaylaştırıyoruz.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-400">
                Maltepe ve Beylikdüzü ofislerimizden İstanbul geneline ve Türkiye çapında birçok
                kuruma hizmet veriyor; altyapı, güvenlik ve destek operasyonlarını tek merkezden
                yönetilebilir hale getiriyoruz.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Kurumsal altyapı ve güvenlik projeleri",
                  "7/24 teknik destek ve talep yönetimi",
                  "Yetkili partner ekosistemi",
                  "Ölçülebilir teslim ve dokümantasyon",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-slate-200">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#67E8F9]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "2008", label: "Kuruluş yılı" },
                { val: "500+", label: "Kurumsal müşteri" },
                { val: "25+", label: "Partner marka" },
                { val: "7/24", label: "Teknik destek" },
              ].map((item) => (
                <div key={item.label} className="panel-surface rounded-[28px] px-6 py-8 text-center">
                  <div className="text-4xl font-black text-[#67E8F9]">{item.val}</div>
                  <div className="mt-2 text-sm text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="panel-surface rounded-[28px] p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#06B6D4]/10">
                  <value.icon className="h-6 w-6 text-[#06B6D4]" />
                </div>
                <h3 className="text-lg font-bold text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{value.desc}</p>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <div className="mb-12 text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#06B6D4]">Yetkili Partnerlikler</span>
              <h2 className="mt-3 text-3xl font-bold text-white">Sertifikalarımız ve çözüm ortaklıklarımız</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
                Dünyanın önde gelen teknoloji markalarıyla kurduğumuz iş ortaklıkları sayesinde
                kurumunuza doğru ürünü, doğru kapsam ve doğru destek modeliyle sunuyoruz.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {partnerCards.map((card) => (
                <div key={card.brand} className="panel-surface rounded-[28px] p-6">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-black"
                      style={{ backgroundColor: `${card.color}20`, color: card.color }}
                    >
                      {card.brand.charAt(0)}
                    </div>
                    <span
                      className="rounded-full border px-3 py-1 text-xs font-bold"
                      style={{ color: card.color, borderColor: `${card.color}40`, backgroundColor: `${card.color}15` }}
                    >
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{card.brand}</h3>
                  <div className="mt-1 text-xs font-semibold" style={{ color: card.color }}>
                    {card.level}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#06B6D4]">Resmi Belge</span>
            <h2 className="mt-3 text-3xl font-bold text-white">Yetki belgemiz</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
              Kurumsal güven yaklaşımımızı destekleyen resmi belgelerimiz ve standartlara uyumumuzla
              hizmet kalitemizi güvence altına alıyoruz.
            </p>
            <div className="mx-auto mt-10 max-w-md overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-4">
              <Image
                src="/iso-27001.jpg"
                alt="Türkiye Bilişim ISO 27001 Yetki Belgesi"
                width={800}
                height={1100}
                className="h-auto w-full rounded-[24px]"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
