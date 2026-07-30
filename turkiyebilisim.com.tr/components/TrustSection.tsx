import { BadgeCheck, ClipboardCheck, Headset, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Kurumsal güven odaklı yaklaşım",
    description: "Altyapı, güvenlik, yedekleme ve iş sürekliliği ihtiyaçlarını tek bir yol haritasında ele alıyoruz.",
  },
  {
    icon: BadgeCheck,
    title: "Marka ve teknoloji yetkinliği",
    description: "Microsoft, Huawei, VMware, Veeam, Fortinet ve Zimbra ekosistemlerinde proje ve destek deneyimi sunuyoruz.",
  },
  {
    icon: ClipboardCheck,
    title: "Süreçli teslim modeli",
    description: "Keşif, tasarım, kurulum, dokümantasyon ve destek adımlarını ölçülebilir şekilde planlıyoruz.",
  },
  {
    icon: Headset,
    title: "Satış sonrası sahiplenme",
    description: "Sadece ürün değil, operasyonel devamlılık için destek süreci, önceliklendirme ve geri dönüş disiplini sağlıyoruz.",
  },
];

const proofPoints = [
  "500+ kurumsal müşteri deneyimi",
  "2008'den beri BT danışmanlığı ve destek",
  "7/24 teknik destek ve talep yönetimi",
  "Maltepe ve Beylikdüzü ofislerinden operasyon",
];

export default function TrustSection() {
  return (
    <section className="section-shell py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Üst satır: başlık solda, proof points sağda */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 mb-12">
          <div className="lg:max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#06B6D4]">
              Neden Türkiye Bilişim
            </span>
            <h2 className="mt-3 text-4xl font-extrabold text-white">
              Proje teslimi ve operasyon sürekliliği için kurumsal BT ortağı
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-400">
              Kurumlar için önemli olan yalnızca teknoloji listesi değil, işin nasıl sahiplenildiğidir.
              Türkiye Bilişim olarak planlama, uygulama ve operasyonun sürdürülebilirliği sorumluluğunu birlikte ele alıyoruz.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:w-[420px] flex-shrink-0">
            {proofPoints.map((item) => (
              <div key={item} className="panel-surface rounded-2xl px-5 py-4 text-sm font-medium text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Alt alan: pillar kartları tam genişlikte 4 sütun */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="panel-surface rounded-[26px] p-6 transition-colors hover:border-[#06B6D4]/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#06B6D4]/10">
                <pillar.icon className="h-6 w-6 text-[#06B6D4]" />
              </div>
              <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{pillar.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
