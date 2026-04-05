import { BadgeCheck, ClipboardCheck, Headset, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Kurumsal guven odakli yaklasim",
    description: "Altyapi, guvenlik, yedekleme ve is surekliligi ihtiyaclarini tek bir yol haritasinda ele aliyoruz.",
  },
  {
    icon: BadgeCheck,
    title: "Marka ve teknoloji yetkinligi",
    description: "Microsoft, Huawei, VMware, Veeam, Fortinet ve Zimbra ekosistemlerinde proje ve destek deneyimi sunuyoruz.",
  },
  {
    icon: ClipboardCheck,
    title: "Surecli teslim modeli",
    description: "Kesif, tasarim, kurulum, dokumantasyon ve destek adimlarini olculebilir sekilde planliyoruz.",
  },
  {
    icon: Headset,
    title: "Satis sonrasi sahiplenme",
    description: "Sadece urun degil, operasyonel devamlilik icin destek sureci, onceliklendirme ve geri donus disiplini sagliyoruz.",
  },
];

const proofPoints = [
  "500+ kurumsal musteri deneyimi",
  "2008'den beri BT danismanligi ve destek",
  "7/24 teknik destek ve talep yonetimi",
  "Maltepe ve Beylikduzu ofislerinden operasyon",
];

export default function TrustSection() {
  return (
    <section className="bg-[#080C18] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#F5A623]">
              Neden AFN Teknoloji
            </span>
            <h2 className="mt-3 text-4xl font-extrabold text-white">
              Proje teslimi ve operasyon surekliligi icin kurumsal BT ortagi
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-400">
              Bilişim danışmanlığı sitesinde en kritik konu sadece teknoloji listesi vermek degil, kuruma nasil yaklastiginizi gostermektir.
              AFN Teknoloji olarak projeyi planlama, uygulama ve sonrasinda ayakta tutma sorumlulugunu birlikte ele aliyoruz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {proofPoints.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-gray-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-[#F5A623]/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5A623]/10">
                  <pillar.icon className="h-6 w-6 text-[#F5A623]" />
                </div>
                <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
