"use client";
import Image from "next/image";

const partners = [
  {
    name: "Fortinet",
    badge: "Solution Partner",
    color: "#EE3124",
    desc: "Kurumsal firewall, SD-WAN ve sıfır güven mimarisi projelerinde Fortinet yetkili çözüm ortağı.",
    logo: "/logos/fortinet.svg",
    href: "/fortinet",
    logoClass: "h-7 w-auto max-w-[120px]",
  },
  {
    name: "Huawei",
    badge: "Elite Partner",
    color: "#CF0A2C",
    desc: "Sunucu, depolama ve kurumsal ağ altyapısı projelerinde Huawei Elite iş ortağı.",
    logo: "/logos/huawei.svg",
    href: "/huawei",
    logoClass: "h-12 w-auto",
  },
  {
    name: "VMware",
    badge: "Enterprise Solution Partner",
    color: "#607078",
    desc: "vSphere, vCenter ve hibrit bulut altyapısı kurulum ve yönetiminde VMware Enterprise ortağı.",
    logo: "/logos/vmware.svg",
    href: "/vmware",
    logoClass: "h-10 w-auto",
  },
  {
    name: "Veeam",
    badge: "Silver Partner",
    color: "#007DB8",
    desc: "Kurumsal veri yedekleme, hızlı kurtarma ve iş sürekliliği çözümlerinde Veeam Silver ortağı.",
    logo: "/logos/veeam.svg",
    href: "/veeam",
    logoClass: "h-10 w-auto",
  },
];

export default function PartnerCards() {
  return (
    <section id="ortaklar" className="section-shell py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#06B6D4] text-sm font-semibold tracking-widest uppercase">Yetkili İş Ortaklarımız</span>
          <h2 className="text-4xl font-extrabold mt-3 mb-4">Sektörün Lider Markalarıyla Çalışıyoruz</h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-400">
            Dünya çapında güvenilen teknoloji markaları ile kurduğumuz yetkili ortaklıklar sayesinde
            kurumunuza en doğru çözümü daha hızlı ve daha güvenli şekilde sunuyoruz.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((p) => (
            <a key={p.name} href={p.href}
              className="panel-surface group relative block overflow-hidden rounded-[28px] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#06B6D4]/40 hover:shadow-2xl hover:shadow-cyan-950/25">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle at 50% 0%, ${p.color}10, transparent 70%)` }} />
              <div className="absolute inset-x-6 top-0 h-20 rounded-full bg-[#06B6D4]/6 blur-2xl" />
              <div className="relative">
                <div className="h-16 mb-5 flex items-center">
                  <div className="inline-flex items-center justify-center rounded-2xl border border-slate-200/60 bg-white px-4 py-2 shadow-sm">
                    <Image
                      src={p.logo}
                      alt={p.name + " logo"}
                      width={160}
                      height={52}
                      className={`${p.logoClass} object-contain`}
                      unoptimized
                    />
                  </div>
                </div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                  style={{ background: `${p.color}20`, color: p.color, border: `1px solid ${p.color}30` }}>
                  {p.badge}
                </span>
                <p className="text-sm leading-7 text-slate-400">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
