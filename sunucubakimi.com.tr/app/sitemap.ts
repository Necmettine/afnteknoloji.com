import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const staticRoutes: Array<{
  path: string;
  priority: number;
  changeFreq: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "",                  priority: 1.0,  changeFreq: "weekly"  },
  { path: "/hizmetlerimiz",    priority: 0.9,  changeFreq: "monthly" },
  { path: "/bakim-paketleri",  priority: 0.9,  changeFreq: "monthly" },
  { path: "/hakkimizda",       priority: 0.7,  changeFreq: "monthly" },
  { path: "/iletisim",         priority: 0.8,  changeFreq: "monthly" },
];

// next.config.mjs trailingSlash: true — sitemap URL'leri de eğik çizgiyle bitmeli
function withSlash(path: string): string {
  return `${SITE_URL}${path}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map(({ path, priority, changeFreq }) => ({
    url: withSlash(path),
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority,
  }));
}
