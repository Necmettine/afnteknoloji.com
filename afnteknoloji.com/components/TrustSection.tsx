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
    title: "Sürekli teslim modeli",
    description: "Keşif, tasarım, kurulum, dokümantasyon ve destek adımlarını ölçülebilir şekilde planlıyoruz.",
  },
  {
    icon: Headset,
    title: "Satış sonrası sahiplenme",
    description: "Sadece ürün değil, operasyonel devamlılık için destek süreci, önceliklendirme ve geri dönüş disiplini sağlıyoruz.",
  },
];

const proofPoints = [
  { value: "500+", label: "Kurumsal müşteri deneyimi" },
  { value: "2008", label: "BT danışmanlığı ve destek" },
  { value: "7/24", label: "Teknik destek ve talep yönetimi" },
  { value: "2 Ofis", label: "Maltepe ve Beylikdüzü" },
];

export default function TrustSection() {
  return (
    <section className="bg-[#080C18] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Üst — tam genişlik metin */}
        <div className="mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#F5A623]">
            Neden AFN Teknoloji
          </span>
          <div className="mt-4 grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-4xl xl:text-5xl font-extrabold text-white leading-tight">
              Proje teslimi ve operasyon sürekliliği için kurumsal BT ortağı
            </h2>
            <p className="text-base leading-relaxed text-gray-400">
              Bilişim danışmanlığında en kritik konu sadece teknoloji listesi vermek değil, kuruma nasıl yaklaştığınızı göstermektir.
              AFN Teknoloji olarak projeyi planlama, uygulama ve sonrasında ayakta tutma sorumluluğunu birlikte ele alıyoruz.
            </p>
          </div>
        </div>

        {/* Rakamlar — 4'lü yatay şerit */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {proofPoints.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-center hover:border-[#F5A623]/30 transition-colors"
            >
              <div className="text-3xl font-black text-[#F5A623]">{item.value}</div>
              <div className="mt-1 text-xs text-gray-400 leading-snug">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Alt — 4 özellik kutusu 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-[#F5A623]/30 flex gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5A623]/10 shrink-0">
                <pillar.icon className="h-6 w-6 text-[#F5A623]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{pillar.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-400">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
