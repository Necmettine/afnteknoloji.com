/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "frame-ancestors 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000",
  },
];

const nextConfig = {
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
      // 404 → Doğru sayfalara yönlendirme (Google Search Console)
      {
        source: "/hizmetlerimiz/olaganustu-durum-danismanligi-2/:path*",
        destination: "/hizmetlerimiz",
        permanent: true,
      },
      {
        source: "/log-a-support-ticket/:path*",
        destination: "/destek",
        permanent: true,
      },
      {
        source: "/907-2/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/907-2",
        destination: "/",
        permanent: true,
      },
      {
        source: "/cozumlerimiz/yapisal-kablolama-2/:path*",
        destination: "/cozumlerimiz",
        permanent: true,
      },
      {
        source: "/veeam.html",
        destination: "/veeam",
        permanent: true,
      },
      // WordPress kalıntı URL'leri
      {
        source: "/wp-:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wordpress/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
