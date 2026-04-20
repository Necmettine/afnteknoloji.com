import { NextRequest, NextResponse } from "next/server";
import { kvGet, kvSet } from "@/lib/redis";

const KV_KEY = "blog:posts";
const KV_SCHEDULED = "blog:scheduled";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function getPosts(): Promise<object[]> {
  try {
    const posts = await kvGet<object[]>(KV_KEY);
    return posts ?? [];
  } catch {
    return [];
  }
}

async function savePosts(posts: object[]) {
  await kvSet(KV_KEY, posts);
}

export async function getScheduled(): Promise<object[]> {
  try {
    const posts = await kvGet<object[]>(KV_SCHEDULED);
    return posts ?? [];
  } catch {
    return [];
  }
}

export async function saveScheduled(posts: object[]) {
  await kvSet(KV_SCHEDULED, posts);
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

function buildPost(body: Record<string, string>, publishDate?: Date) {
  const { title, content, excerpt, category, author } = body;
  const safeTitle = escapeHtml(String(title));
  const safeContent = escapeHtml(String(content));
  const safeExcerpt = excerpt ? escapeHtml(String(excerpt)) : "";
  const safeCategory = category ? escapeHtml(String(category)) : "Genel";
  const safeAuthor = author ? escapeHtml(String(author)) : "AFN Teknoloji";

  const now = publishDate ?? new Date();
  const dateStr = now.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
  const wordCount = safeContent.split(/\s+/).length;
  const readTime = `${Math.max(1, Math.round(wordCount / 200))} dk`;

  return {
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
}

function checkAuth(req: NextRequest): boolean {
  if (!process.env.BLOG_API_KEY) return false;
  return req.headers.get("x-api-key") === process.env.BLOG_API_KEY;
}

// GET — yayınlanan + planlanmış yazıları döner
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  if (searchParams.get("scheduled") === "1") {
    const scheduled = await getScheduled();
    return NextResponse.json({ success: true, posts: scheduled });
  }
  const posts = await getPosts();
  return NextResponse.json({ success: true, posts });
}

// DELETE — yayınlanan ya da planlanmış yazıyı sil
export async function DELETE(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const type = searchParams.get("type") ?? "published"; // published | scheduled

  if (!id) return NextResponse.json({ error: "id gerekli" }, { status: 400 });

  if (type === "scheduled") {
    const scheduled = await getScheduled();
    await saveScheduled((scheduled as any[]).filter((p) => p.id !== id));
  } else {
    const posts = await getPosts();
    await savePosts((posts as any[]).filter((p: any) => p.id !== id));
  }

  return NextResponse.json({ success: true });
}

// POST — hemen yayınla veya planla (publishAt varsa)
export async function POST(req: NextRequest) {
  try {
    if (!process.env.BLOG_API_KEY) {
      return NextResponse.json({ error: "BLOG_API_KEY tanımlı değil" }, { status: 503 });
    }
    if (!checkAuth(req)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { title, content, publishAt } = body;

    if (!title || !content) {
      return NextResponse.json({ error: "title ve content zorunludur" }, { status: 400 });
    }

    // Planlanmış mı?
    if (publishAt) {
      const scheduledDate = new Date(publishAt);
      if (isNaN(scheduledDate.getTime()) || scheduledDate <= new Date()) {
        return NextResponse.json({ error: "Geçerli bir gelecek tarih girin" }, { status: 400 });
      }

      const scheduledPost = {
        ...buildPost(body),
        scheduledFor: scheduledDate.toISOString(),
        status: "scheduled",
      };

      const scheduled = await getScheduled();
      (scheduled as any[]).unshift(scheduledPost);
      await saveScheduled(scheduled);
      return NextResponse.json({ success: true, scheduled: true, post: scheduledPost }, { status: 201 });
    }

    // Hemen yayınla
    const newPost = buildPost(body);
    const posts = await getPosts();
    (posts as any[]).unshift(newPost);
    await savePosts(posts);

    return NextResponse.json({ success: true, scheduled: false, post: newPost }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Sunucu hatası", detail: String(err) }, { status: 500 });
  }
}
