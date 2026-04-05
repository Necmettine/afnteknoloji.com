import { NextRequest, NextResponse } from "next/server";
import { writeFileSync, readFileSync, existsSync } from "fs";
import { join } from "path";

const DB_PATH = join(process.cwd(), "data", "blog-posts.json");

function getPosts() {
  if (!existsSync(DB_PATH)) return [];
  try {
    return JSON.parse(readFileSync(DB_PATH, "utf-8"));
  } catch {
    return [];
  }
}

function savePosts(posts: object[]) {
  const dir = join(process.cwd(), "data");
  if (!existsSync(dir)) {
    require("fs").mkdirSync(dir, { recursive: true });
  }
  writeFileSync(DB_PATH, JSON.stringify(posts, null, 2), "utf-8");
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s")
    .replace(/ı/g, "i").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// GET — tüm yazıları getir
export async function GET() {
  const posts = getPosts();
  return NextResponse.json({ success: true, posts });
}

// POST — Make.com webhook'undan yeni yazı ekle
export async function POST(req: NextRequest) {
  try {
    // Basit API key koruması
    const apiKey = req.headers.get("x-api-key");
    if (apiKey !== process.env.BLOG_API_KEY && process.env.BLOG_API_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { title, content, excerpt, category, author } = body;

    if (!title || !content) {
      return NextResponse.json({ error: "title ve content zorunludur" }, { status: 400 });
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.max(1, Math.round(wordCount / 200)) + " dk";

    const newPost = {
      id: Date.now().toString(),
      slug: slugify(title) + "-" + Date.now().toString().slice(-4),
      title,
      content,
      excerpt: excerpt || content.slice(0, 160) + "...",
      category: category || "Genel",
      author: author || "AFN Teknoloji",
      date: dateStr,
      readTime,
      createdAt: now.toISOString(),
    };

    const posts = getPosts();
    posts.unshift(newPost); // en yeni başa
    savePosts(posts);

    return NextResponse.json({ success: true, post: newPost }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Sunucu hatası", detail: String(err) }, { status: 500 });
  }
}
