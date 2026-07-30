import { NextRequest, NextResponse } from "next/server";
import { writeFileSync, readFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

const DB_PATH = join(process.cwd(), "data", "blog-posts.json");

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

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
    mkdirSync(dir, { recursive: true });
  }
  writeFileSync(DB_PATH, JSON.stringify(posts, null, 2), "utf-8");
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function GET() {
  const posts = getPosts();
  return NextResponse.json({ success: true, posts });
}

export async function POST(req: NextRequest) {
  try {
    if (!process.env.BLOG_API_KEY) {
      return NextResponse.json({ error: "BLOG_API_KEY tanimli degil" }, { status: 503 });
    }

    const apiKey = req.headers.get("x-api-key");
    if (apiKey !== process.env.BLOG_API_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { title, content, excerpt, category, author } = body;

    if (!title || !content) {
      return NextResponse.json({ error: "title ve content zorunludur" }, { status: 400 });
    }

    const safeTitle = escapeHtml(String(title));
    const safeContent = escapeHtml(String(content));
    const safeExcerpt = excerpt ? escapeHtml(String(excerpt)) : "";
    const safeCategory = category ? escapeHtml(String(category)) : "Genel";
    const safeAuthor = author ? escapeHtml(String(author)) : "AFN Teknoloji";

    const now = new Date();
    const dateStr = now.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
    const wordCount = safeContent.split(/\s+/).length;
    const readTime = `${Math.max(1, Math.round(wordCount / 200))} dk`;

    const newPost = {
      id: Date.now().toString(),
      slug: `${slugify(safeTitle)}-${Date.now().toString().slice(-4)}`,
      title: safeTitle,
      content: safeContent,
      excerpt: safeExcerpt || `${safeContent.slice(0, 160)}...`,
      category: safeCategory,
      author: safeAuthor,
      date: dateStr,
      readTime,
      createdAt: now.toISOString(),
    };

    const posts = getPosts();
    posts.unshift(newPost);
    savePosts(posts);

    return NextResponse.json({ success: true, post: newPost }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Sunucu hatasi", detail: String(err) }, { status: 500 });
  }
}
