"use client";
import Image from "next/image";

const partners = [
  {
    name: "Fortinet",
    badge: "Solution Partner",
    color: "#EE3124",
    desc: "Authorized Fortinet solution partner for firewall, VPN, and network security.",
    logo: "/logos/fortinet.svg",
    href: "/fortinet",
    logoClass: "h-7 w-auto max-w-[120px]",
  },
  {
    name: "Huawei",
    badge: "Elite Partner",
    color: "#CF0A2C",
    desc: "Huawei Elite partner for cloud, compute, and storage solutions.",
    logo: "/logos/huawei.svg",
    href: "/huawei",
    logoClass: "h-12 w-auto",
  },
  {
    name: "VMware",
    badge: "Enterprise Solution Partner",
    color: "#607078",
    desc: "VMware Enterprise partner for virtualization and cloud infrastructure.",
    logo: "/logos/vmware.svg",
    href: "/vmware",
    logoClass: "h-10 w-auto",
  },
  {
    name: "Veeam",
    badge: "Silver Partner",
    color: "#007DB8",
    desc: "Veeam Silver partner for backup and disaster recovery solutions.",
    logo: "/logos/veeam.svg",
    href: "/veeam",
    logoClass: "h-10 w-auto",
  },
];

export default function PartnerCardsEn() {
  return (
    <section id="partners" className="py-24 bg-[#080C18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Authorized Partners</span>
          <h2 className="text-4xl font-extrabold mt-3 mb-4">Trusted Partner of Global Brands</h2>
          <p className="text-gray-400 max-w-xl mx-auto">We deliver reliable, up-to-date solutions through strategic partnerships with leading technology brands.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((p) => (
            <a key={p.name} href={p.href}
              className="relative group gradient-border rounded-2xl p-8 hover:border-[#F5A623]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 overflow-hidden block">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle at 50% 0%, ${p.color}10, transparent 70%)` }} />
              <div className="relative">
                <div className="h-16 mb-5 flex items-center">
                  <div className="bg-white rounded-xl px-4 py-2 inline-flex items-center justify-center">
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
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
