import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://medya.afnteknoloji.com";

const staticRoutes: Array<{
  path: string;
  priority: number;
  changeFreq: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "",                                          priority: 1.0,  changeFreq: "weekly"  },
  { path: "/hizmetlerimiz",                            priority: 0.9,  changeFreq: "monthly" },
  { path: "/hizmetlerimiz/web-tasarim",                priority: 0.85, changeFreq: "monthly" },
  { path: "/hizmetlerimiz/yazilim-gelistirme",         priority: 0.85, changeFreq: "monthly" },
  { path: "/hizmetlerimiz/sosyal-medya-yonetimi",      priority: 0.85, changeFreq: "monthly" },
  { path: "/iletisim",                                 priority: 0.9,  changeFreq: "monthly" },
  { path: "/hakkimizda",                               priority: 0.75, changeFreq: "monthly" },
  { path: "/blog",                                     priority: 0.8,  changeFreq: "weekly"  },
  { path: "/destek",                                   priority: 0.65, changeFreq: "monthly" },
  { path: "/referanslarimiz",                          priority: 0.65, changeFreq: "monthly" },
  { path: "/gizlilik-politikasi",                      priority: 0.3,  changeFreq: "yearly"  },
];

// next.config.mjs trailingSlash: true — sitemap URL'leri de eğik çizgiyle bitmeli
function withSlash(path: string): string {
  return `${BASE_URL}${path}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ path, priority, changeFreq }) => ({
    url: withSlash(path),
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: withSlash(`/blog/${post.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
