import type { MetadataRoute } from "next";
import { hizmetler, cozumler } from "@/lib/content";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://turkiyebilisim.com.tr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/en",
    "/en/iletisim",
    "/en/hakkimizda",
    "/en/hizmetlerimiz",
    "/en/cozumlerimiz",
    "/en/referanslarimiz",
    "/en/fortinet",
    "/en/huawei",
    "/en/microsoft-365",
    "/en/veeam",
    "/en/vmware",
    "/en/guvenlik-yazilimlari",
    "/en/zimbra",
    "/blog",
    "/cozumlerimiz",
    "/destek",
    "/fortinet",
    "/gizlilik-politikasi",
    "/guvenlik-yazilimlari",
    "/hakkimizda",
    "/hizmetlerimiz",
    "/huawei",
    "/iletisim",
    "/is-ortaklarimiz",
    "/microsoft-365",
    "/referanslarimiz",
    "/veeam",
    "/vmware",
    "/zimbra",
    "/cozumlerimiz/mobil-cozumler",
    "/cozumlerimiz/veri-tekillestirme",
    "/en/cozumlerimiz/mobil-cozumler",
    "/en/cozumlerimiz/veri-tekillestirme",
  ];

  const hizmetRoutes = Object.keys(hizmetler).map((slug) => `/hizmetlerimiz/${slug}`);
  const hizmetRoutesEn = Object.keys(hizmetler).map((slug) => `/en/hizmetlerimiz/${slug}`);
  const cozumRoutes = Object.keys(cozumler)
    .filter((slug) => !["microsoft-365", "guvenlik-yazilimlari", "mobil-cozumler", "veri-tekillestirme"].includes(slug))
    .map((slug) => `/cozumlerimiz/${slug}`);
  const cozumRoutesEn = Object.keys(cozumler)
    .filter((slug) => !["microsoft-365", "guvenlik-yazilimlari", "mobil-cozumler", "veri-tekillestirme"].includes(slug))
    .map((slug) => `/en/cozumlerimiz/${slug}`);
  const blogRoutes = getAllPosts().map((post) => `/blog/${post.slug}`);

  return [...staticRoutes, ...hizmetRoutes, ...hizmetRoutesEn, ...cozumRoutes, ...cozumRoutesEn, ...blogRoutes].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/blog/") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route === "/iletisim" || route === "/hizmetlerimiz" || route === "/cozumlerimiz" ? 0.9 : 0.7,
  }));
}
