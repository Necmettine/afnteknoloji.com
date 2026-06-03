import { NextRequest, NextResponse } from "next/server";
import { getAllPosts } from "@/lib/blog";

// GET /api/recent-posts?limit=3&key=...
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const key = searchParams.get("key");
  const adminKey = process.env.BLOG_API_KEY ?? "afn2024";
  if (key !== adminKey) {
    return NextResponse.json({ error: "Yetkisiz erişim." }, { status: 401 });
  }

  const limit = Math.min(parseInt(searchParams.get("limit") ?? "3", 10), 10);

  const allPosts = await getAllPosts();

  // En yeni N yazıyı döndür (içerik hariç, sadece meta)
  const posts = allPosts.slice(0, limit).map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    date: p.date,
    url: `https://afnteknoloji.com/blog/${p.slug}`,
  }));

  return NextResponse.json({ success: true, posts, total: allPosts.length });
}
