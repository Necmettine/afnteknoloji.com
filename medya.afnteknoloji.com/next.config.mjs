/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "afnteknoloji.com",
      },
    ],
  },

  async redirects() {
    return [
      // Eski WordPress'ten kalan sayfa URL'leri → yeni Next.js karşılıkları
      {
        source: "/yazilim-gelistirme",
        destination: "/hizmetlerimiz/yazilim-gelistirme",
        permanent: true,
      },
      {
        source: "/yazilim-gelistirme/",
        destination: "/hizmetlerimiz/yazilim-gelistirme",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home/",
        destination: "/",
        permanent: true,
      },
      // Eski WordPress dosya yolları → ana sayfa (Google indexten temizlesin)
      { source: "/wp-admin/:path*",    destination: "/", permanent: true },
      { source: "/wp-content/:path*",  destination: "/", permanent: true },
      { source: "/wp-includes/:path*", destination: "/", permanent: true },
      { source: "/wp-json/:path*",     destination: "/", permanent: true },
      { source: "/sosyal-medya-yonetimi",  destination: "/hizmetlerimiz/sosyal-medya-yonetimi", permanent: true },
      { source: "/sosyal-medya-yonetimi/", destination: "/hizmetlerimiz/sosyal-medya-yonetimi", permanent: true },
      { source: "/danismanlik",         destination: "/hizmetlerimiz", permanent: true },
      { source: "/danismanlik/",        destination: "/hizmetlerimiz", permanent: true },
      { source: "/wp-login.php",        destination: "/", permanent: true },
      { source: "/wp-cron.php",         destination: "/", permanent: true },
      { source: "/wp-signup.php",       destination: "/", permanent: true },
      { source: "/wp-config.php",       destination: "/", permanent: true },
      { source: "/wp-settings.php",     destination: "/", permanent: true },
      { source: "/wp-load.php",         destination: "/", permanent: true },
      { source: "/wp-blog-header.php",  destination: "/", permanent: true },
      { source: "/wp-trackback.php",    destination: "/", permanent: true },
      { source: "/xmlrpc.php",          destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
