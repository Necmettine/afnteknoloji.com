import { NextRequest, NextResponse } from "next/server";
import { kvGet, kvSet } from "@/lib/redis";

const KEY = "mail:unsubscribed";

async function getList(): Promise<string[]> {
  return (await kvGet<string[]>(KEY)) ?? [];
}

// POST /api/mailing-unsubscribe  { email }  → aboneliği iptal et
// GET  /api/mailing-unsubscribe?email=...   → kontrol et
// GET  /api/mailing-unsubscribe?action=list&key=... → tüm liste (admin)

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json() as { email?: string };
    if (!email) return NextResponse.json({ error: "E-posta gerekli." }, { status: 400 });

    const normalized = email.trim().toLowerCase();
    const list = await getList();

    if (!list.includes(normalized)) {
      list.push(normalized);
      await kvSet(KEY, list);
    }

    return NextResponse.json({ success: true, message: "Listeden çıkarıldınız." });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get("action");

  // Admin liste
  if (action === "list") {
    const key = searchParams.get("key");
    const adminKey = process.env.BLOG_API_KEY ?? "afn2024";
    if (key !== adminKey) return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
    const list = await getList();
    return NextResponse.json({ success: true, list, total: list.length });
  }

  // Tek email kontrol
  const email = searchParams.get("email")?.trim().toLowerCase();
  if (!email) return NextResponse.json({ error: "E-posta gerekli." }, { status: 400 });

  const list = await getList();
  return NextResponse.json({ success: true, email, unsubscribed: list.includes(email) });
}
