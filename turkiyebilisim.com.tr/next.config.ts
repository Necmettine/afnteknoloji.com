import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "turkiyebilisim.com.tr",
      },
    ],
  },
  async redirects() {
    return [
      // Eski WordPress archive URL'leri
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/2025", destination: "/blog", permanent: true },
      { source: "/2025/", destination: "/blog", permanent: true },
      { source: "/2025/:month", destination: "/blog", permanent: true },
      { source: "/2025/:month/", destination: "/blog", permanent: true },
      { source: "/2025/:month/:day", destination: "/blog", permanent: true },
      { source: "/2025/:month/:day/", destination: "/blog", permanent: true },
      // Silinmiş blog yazıları
      { source: "/blog/zero-trust-guvenlik-modeli", destination: "/blog", permanent: true },
      { source: "/blog/kurumsal-bt-altyapisi-nasil-planlanir", destination: "/blog", permanent: true },
      { source: "/blog/microsoft-365-kurumsal-kullanim-ipuclari", destination: "/blog", permanent: true },
      { source: "/blog/vmware-vsphere-best-practices", destination: "/blog", permanent: true },
      { source: "/blog/veeam-ile-felaket-kurtarma-stratejisi", destination: "/blog", permanent: true },
      { source: "/blog/5651-kanunu-log-yonetimi", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
