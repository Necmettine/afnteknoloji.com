import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

const KV_KEY = "blog:posts";
const KV_SCHEDULED = "blog:scheduled";

// Vercel bu endpoint'i saatte bir çağırır (vercel.json'da tanımlı)
// Güvenlik: CRON_SECRET header kontrolü
export async function GET(req: NextRequest) {
  const secret = req.headers.get("authorization");
  if (secret !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const scheduled: any[] = (await kv.get<any[]>(KV_SCHEDULED)) ?? [];
    const now = new Date();
    const toPublish = scheduled.filter((p) => new Date(p.scheduledFor) <= now);
    const remaining = scheduled.filter((p) => new Date(p.scheduledFor) > now);

    if (toPublish.length === 0) {
      return NextResponse.json({ success: true, published: 0 });
    }

    // Planlanmış yazıları yayına al
    const published: any[] = (await kv.get<any[]>(KV_KEY)) ?? [];
    for (const post of toPublish) {
      const { scheduledFor, status, ...cleanPost } = post;
      published.unshift({
        ...cleanPost,
        date: now.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" }),
        createdAt: now.toISOString(),
      });
    }

    await kv.set(KV_KEY, published);
    await kv.set(KV_SCHEDULED, remaining);

    return NextResponse.json({ success: true, published: toPublish.length });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
