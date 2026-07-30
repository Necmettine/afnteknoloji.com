import { existsSync, readFileSync } from "fs";
import { join } from "path";

export interface BlogPost {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content?: string;
  author?: string;
  createdAt?: string;
}

// Make.com'dan gelen yazılar (data/blog-posts.json)
export function getDynamicPosts(): BlogPost[] {
  try {
    const path = join(process.cwd(), "data", "blog-posts.json");
    if (!existsSync(path)) return [];
    return JSON.parse(readFileSync(path, "utf-8"));
  } catch {
    return [];
  }
}

// Statik yazılar kaldırıldı (eski yazılar next.config.ts'te 301 ile /blog'a yönlendiriliyor;
// listede ve sitemap'te ölü URL üretmemek için boş bırakıldı)
export const staticPosts: BlogPost[] = [];

// Tüm yazıları birleştir (dinamik önce)
export function getAllPosts(): BlogPost[] {
  const dynamic = getDynamicPosts();
  return [...dynamic, ...staticPosts];
}
