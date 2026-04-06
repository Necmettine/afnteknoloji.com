"use client";

const logos = [
  { name: "Fortinet",    src: "/logos/fortinet.svg",    bg: true  },
  { name: "Huawei",      src: "/logos/huawei.svg",      bg: true  },
  { name: "VMware",      src: "/logos/vmware.svg",      bg: true  },
  { name: "Veeam",       src: "/logos/veeam.svg",       bg: true  },
  { name: "Microsoft",   src: "https://cdn.simpleicons.org/microsoft/ffffff", bg: false },
  { name: "Kaspersky",   src: "https://cdn.simpleicons.org/kaspersky/ffffff", bg: false },
  { name: "Dell",        src: "https://cdn.simpleicons.org/dell/ffffff",       bg: false },
  { name: "HP",          src: "https://cdn.simpleicons.org/hp/ffffff",         bg: false },
  { name: "Lenovo",      src: "https://cdn.simpleicons.org/lenovo/ffffff",     bg: false },
  { name: "Samsung",     src: "https://cdn.simpleicons.org/samsung/ffffff",    bg: false },
  { name: "Sophos",      src: "https://cdn.simpleicons.org/sophos/ffffff",     bg: false },
  { name: "Cisco",       src: "https://cdn.simpleicons.org/cisco/ffffff",      bg: false },
  { name: "Seagate",     src: "https://cdn.simpleicons.org/seagate/ffffff",    bg: false },
  { name: "Adobe",       src: "https://cdn.simpleicons.org/adobe/ffffff",      bg: false },
  { name: "Apple",       src: "https://cdn.simpleicons.org/apple/ffffff",      bg: false },
];

export default function LogoCarouselEn() {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-20 bg-[#080C18] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Partner Brands</span>
        <h2 className="text-3xl font-extrabold mt-3">We Work with Global Brands</h2>
      </div>
      <div className="relative">
        <div className="flex animate-scroll gap-8 w-max">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-36 h-20 glass rounded-xl flex flex-col items-center justify-center gap-2 hover:border-[#F5A623]/40 transition-all group cursor-default px-3"
            >
              <div className={`flex items-center justify-center ${logo.bg ? "bg-white rounded-lg px-2 py-1" : ""}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  className={logo.bg ? "h-7 w-auto max-w-[90px] object-contain" : "h-6 w-auto max-w-[80px] object-contain opacity-50 group-hover:opacity-80 transition-opacity"}
                />
              </div>
              <span className="text-[10px] font-medium text-gray-300 group-hover:text-white transition-colors">{logo.name}</span>
            </div>
          ))}
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080C18] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080C18] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
