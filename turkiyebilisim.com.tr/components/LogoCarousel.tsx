"use client";

const logos = [
  { name: "Fortinet",    src: "/logos/fortinet.svg",    local: true,  bg: true  },
  { name: "Huawei",      src: "/logos/huawei.svg",      local: true,  bg: true  },
  { name: "VMware",      src: "/logos/vmware.svg",      local: true,  bg: true  },
  { name: "Veeam",       src: "/logos/veeam.svg",       local: true,  bg: true  },
  { name: "Microsoft",   src: "/logos/microsoft.svg",                          local: true,  bg: true  },
  { name: "Kaspersky",   src: "https://cdn.simpleicons.org/kaspersky/ffffff",  local: false, bg: false },
  { name: "Dell",        src: "https://cdn.simpleicons.org/dell/ffffff",        local: false, bg: false },
  { name: "HP",          src: "https://cdn.simpleicons.org/hp/ffffff",          local: false, bg: false },
  { name: "Lenovo",      src: "https://cdn.simpleicons.org/lenovo/ffffff",      local: false, bg: false },
  { name: "Samsung",     src: "https://cdn.simpleicons.org/samsung/ffffff",     local: false, bg: false },
  { name: "Sophos",      src: "/logos/sophos.svg",                              local: true,  bg: true  },
  { name: "Cisco",       src: "https://cdn.simpleicons.org/cisco/ffffff",       local: false, bg: false },
  { name: "Seagate",     src: "https://cdn.simpleicons.org/seagate/ffffff",     local: false, bg: false },
  { name: "Adobe",       src: "/logos/adobe.svg",                               local: true,  bg: true  },
  { name: "Apple",       src: "https://cdn.simpleicons.org/apple/ffffff",       local: false, bg: false },
];

export default function LogoCarousel() {
  const doubled = [...logos, ...logos];

  return (
    <section className="section-shell overflow-hidden border-y border-white/5 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="text-[#06B6D4] text-sm font-semibold tracking-widest uppercase">Partner Olduğumuz Markalar</span>
        <h2 className="text-3xl font-extrabold mt-3">Dünya Markalarıyla Çalışıyoruz</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          Güvenlikten altyapıya, buluttan son kullanıcı çözümlerine kadar güçlü teknoloji markalarıyla çalışıyoruz.
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-scroll gap-8 w-max">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="panel-surface group flex h-24 w-40 flex-shrink-0 cursor-default flex-col items-center justify-center gap-2 rounded-[24px] px-3 transition-all hover:-translate-y-1 hover:border-[#06B6D4]/30"
            >
              <div className={`flex items-center justify-center ${logo.bg ? "bg-white rounded-lg px-2 py-1" : ""}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  className={logo.bg ? "h-7 w-auto max-w-[90px] object-contain" : "h-6 w-auto max-w-[80px] object-contain opacity-50 transition-opacity group-hover:opacity-80"}
                />
              </div>
              <span className="text-[11px] font-medium text-slate-300 transition-colors group-hover:text-white">{logo.name}</span>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-24 bg-gradient-to-r from-[#080d18] to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-24 bg-gradient-to-l from-[#080d18] to-transparent" />
      </div>
    </section>
  );
}
