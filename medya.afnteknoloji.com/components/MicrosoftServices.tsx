"use client";

// Gerçek Microsoft ürün ikonları (SVG inline)
const MsIcons: Record<string, React.FC<{ size?: number }>> = {
  Teams: ({ size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 2228.833 2073.333" xmlns="http://www.w3.org/2000/svg">
      <path d="M1554.637 777.5h575.713c54.391 0 98.483 44.092 98.483 98.483v524.398c0 199.901-162.051 361.952-361.952 361.952h-1.711c-199.901.028-361.975-162.024-361.975-361.924V828.971c0-28.427 23.044-51.471 51.442-51.471z" fill="#5059C9"/>
      <circle cx="1943.75" cy="440.583" r="233.25" fill="#5059C9"/>
      <circle cx="1218.083" cy="336.917" r="336.917" fill="#7B83EB"/>
      <path d="M1667.323 777.5H717.01c-53.743 1.33-96.257 45.931-94.927 99.675v598.105c-7.825 322.197 247.353 590.367 569.55 598.192 322.196-7.825 577.375-275.995 569.55-598.192V877.175c1.33-53.744-41.184-98.345-94.86-99.675z" fill="#7B83EB"/>
      <path d="M1243 777.5v838.145c-.31 44.149-27.083 83.865-68.086 101.12a106.095 106.095 0 01-38.977 7.513H630.496a429.227 429.227 0 01-8.413-80.958V877.195c-1.33-53.764 41.185-98.374 94.928-99.695H1243z" fill="url(#teams_a)" fillOpacity=".5"/>
      <path d="M1218 777.5v864.069a106.214 106.214 0 01-7.513 38.981c-17.255 41.003-56.971 67.776-101.12 68.086H667.318c-11.056-26.158-19.806-53.27-26.218-80.958a429.227 429.227 0 01-8.414-80.958V877.195c-1.33-53.764 41.185-98.374 94.928-99.695H1218z" fill="url(#teams_b)" fillOpacity=".5"/>
      <path d="M1193 777.5v864.069c-.31 44.149-27.083 83.865-68.086 101.12a106.159 106.159 0 01-38.977 7.513H649.868a491.862 491.862 0 01-27.55-80.958 429.227 429.227 0 01-8.414-80.958V877.195c-1.33-53.764 41.185-98.374 94.928-99.695H1193z" fill="url(#teams_c)" fillOpacity=".5"/>
      <path d="M1168.083 777.5H709.001c-54.391 0-98.483 44.092-98.483 98.483v524.398c0 199.901 162.051 361.952 361.952 361.952h1.711c199.901.028 361.975-162.024 361.975-361.924V877.175c-.001-54.971-44.163-99.52-99.073-99.675z" fill="#4B53BC"/>
      <path d="M1243 509.581v253.478c-13.5.772-27.167 1.222-40.917 1.222-14.528 0-28.889-.5-43.083-1.472V509.581c0-23.598 19.125-42.748 42.723-42.748s42.277 19.15 42.277 42.748z" fill="url(#teams_d)" fillOpacity=".5"/>
      <defs>
        <linearGradient id="teams_a" x1="1263" y1="777.5" x2="1263" y2="1724.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff"/>
          <stop offset="1" stopColor="#fff" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="teams_b" x1="942.75" y1="777.5" x2="942.75" y2="1749.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff"/>
          <stop offset="1" stopColor="#fff" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="teams_c" x1="900.75" y1="777.5" x2="900.75" y2="1750.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff"/>
          <stop offset="1" stopColor="#fff" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="teams_d" x1="1202.083" y1="466.833" x2="1202.083" y2="764.281" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff"/>
          <stop offset="1" stopColor="#fff" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  ),

  OneDrive: ({ size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.438 8.3c.572-.636 1.374-1.025 2.228-1.025 1.571 0 2.887 1.142 3.126 2.695C21.059 10.299 22 11.42 22 12.75c0 1.519-1.23 2.75-2.75 2.75H6.75C5.231 15.5 4 14.27 4 12.75c0-.95.48-1.79 1.21-2.29A4.979 4.979 0 0 1 5 9.25C5 6.903 6.903 5 9.25 5c1.624 0 3.044.878 3.814 2.184.396-.556.982-.934 1.374-.884z" fill="#0078D4"/>
      <path d="M10.5 9.25a3.744 3.744 0 0 0-1.25-.25 3.754 3.754 0 0 0-3.5 2.373A2.751 2.751 0 0 0 4 13.75c0 1.519 1.232 2.75 2.75 2.75h12.5c1.519 0 2.75-1.231 2.75-2.75 0-1.131-.683-2.105-1.665-2.53A3.756 3.756 0 0 0 16.75 9.5c-.72 0-1.394.204-1.965.556A4.98 4.98 0 0 0 10.5 9.25z" fill="#1490DF"/>
    </svg>
  ),

  SharePoint: ({ size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="17.5" cy="6.5" r="4.5" fill="#036C70"/>
      <circle cx="17.5" cy="6.5" r="2.5" fill="#1A9BA1"/>
      <path d="M11 7a6 6 0 1 0 0 12 6 6 0 0 0 0-12z" fill="#1A9BA1"/>
      <circle cx="11" cy="13" r="4" fill="#37C6D0"/>
      <path d="M5.5 9A4.5 4.5 0 1 0 5.5 18 4.5 4.5 0 0 0 5.5 9z" fill="#37C6D0"/>
      <circle cx="5.5" cy="13.5" r="2.5" fill="#fff"/>
    </svg>
  ),

  Exchange: ({ size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" fill="#0078D4"/>
      <path d="M7 8h10v2H7V8zm0 3h8v2H7v-2zm0 3h6v2H7v-2z" fill="#fff"/>
    </svg>
  ),

  AzurePC: ({ size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="20" height="14" rx="2" fill="#0078D4"/>
      <path d="M8 21h8M12 17v4" stroke="#0078D4" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 7l3 4 2-2 3 4 3-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  AzureAD: ({ size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#0078D4" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  AzureVM: ({ size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="13" rx="2" fill="#0078D4"/>
      <rect x="5" y="6" width="14" height="9" rx="1" fill="#50E6FF"/>
      <path d="M8 20h8M12 17v3" stroke="#0078D4" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 10l2 2 4-4" stroke="#0078D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
};

const services = [
  { name: "Teams", icon: "Teams", desc: "Video konferans ve kurumsal iletişim" },
  { name: "OneDrive", icon: "OneDrive", desc: "Kurumsal bulut depolama ve dosya paylaşımı" },
  { name: "SharePoint", icon: "SharePoint", desc: "Ekip işbirliği ve içerik yönetimi" },
  { name: "Exchange Mail", icon: "Exchange", desc: "Kurumsal e-posta ve takvim yönetimi" },
  { name: "Azure PC", icon: "AzurePC", desc: "Bulut tabanlı sanal masaüstü çözümleri" },
  { name: "Azure AD", icon: "AzureAD", desc: "Kimlik doğrulama ve erişim yönetimi" },
  { name: "Azure VM", icon: "AzureVM", desc: "Esnek ve ölçeklenebilir sanal makineler" },
];

export default function MicrosoftServices() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #050810 0%, #0D1525 50%, #050810 100%)" }}>
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#0078D4] flex items-center justify-center text-sm font-black text-white">M</div>
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Microsoft Silver Partner</span>
          </div>
          <h2 className="text-4xl font-extrabold mb-4">Microsoft Silver Partner <span className="text-gradient">Hizmetlerimiz</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Microsoft 365, CSP Exchange, SharePoint, OneDrive, Azure Yedekleme ve daha fazlası için lisans, kurulum ve destek hizmeti.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.slice(0, 4).map((s) => (
            <ServiceCard key={s.name} {...s} />
          ))}
        </div>
        <div className="grid sm:grid-cols-3 gap-5 mt-5 max-w-3xl mx-auto">
          {services.slice(4).map((s) => (
            <ServiceCard key={s.name} {...s} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <a href="/iletisim" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0078D4] hover:bg-[#006cbd] text-white font-bold rounded-xl transition-all hover:shadow-xl hover:shadow-blue-900/30">
            Microsoft Lisansı Teklifi Al
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ name, icon, desc }: { name: string; icon: string; desc: string }) {
  const Icon = MsIcons[icon];
  return (
    <div className="glass rounded-2xl p-6 hover:border-[#0078D4]/40 transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
      <div className="mb-4 group-hover:scale-110 transition-transform w-10 h-10">
        {Icon ? <Icon size={40} /> : null}
      </div>
      <h3 className="font-bold text-white mb-2">{name}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
