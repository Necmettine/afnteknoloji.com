import { NextRequest, NextResponse } from "next/server";
import { kvGet, kvSet } from "@/lib/redis";

const SUBSCRIBERS_KEY = "newsletter:subscribers";
const UNSUBSCRIBED_KEY = "newsletter:unsubscribed";

interface Subscriber {
  email: string;
  name?: string;
  subscribedAt: string;
}

async function getSubscribers(): Promise<Subscriber[]> {
  return (await kvGet<Subscriber[]>(SUBSCRIBERS_KEY)) ?? [];
}

async function getUnsubscribed(): Promise<string[]> {
  return (await kvGet<string[]>(UNSUBSCRIBED_KEY)) ?? [];
}

// POST /api/newsletter  { action: "subscribe"|"unsubscribe", email, name? }
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, email, name } = body as { action: string; email: string; name?: string };

    if (!email || !action) {
      return NextResponse.json({ success: false, error: "E-posta ve işlem tipi gerekli." }, { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (action === "subscribe") {
      const subscribers = await getSubscribers();
      const unsubscribed = await getUnsubscribed();

      const alreadyExists = subscribers.some((s) => s.email === normalizedEmail);
      if (alreadyExists) {
        // Unsubscribed listesinden çıkar (yeniden abone olabilir)
        const newUnsub = unsubscribed.filter((e) => e !== normalizedEmail);
        if (newUnsub.length !== unsubscribed.length) {
          await kvSet(UNSUBSCRIBED_KEY, newUnsub);
        }
        return NextResponse.json({ success: true, message: "Zaten abonesınız." });
      }

      const newSubscriber: Subscriber = {
        email: normalizedEmail,
        name: name?.trim() || undefined,
        subscribedAt: new Date().toISOString(),
      };
      subscribers.push(newSubscriber);
      await kvSet(SUBSCRIBERS_KEY, subscribers);

      // Unsubscribed listesinden de çıkar
      const newUnsub = unsubscribed.filter((e) => e !== normalizedEmail);
      if (newUnsub.length !== unsubscribed.length) {
        await kvSet(UNSUBSCRIBED_KEY, newUnsub);
      }

      // Webhook bildirimi (opsiyonel)
      const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL;
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "subscribe", email: normalizedEmail, name }),
        }).catch(() => {});
      }

      return NextResponse.json({ success: true, message: "Başarıyla abone oldunuz!" });
    }

    if (action === "unsubscribe") {
      const subscribers = await getSubscribers();
      const unsubscribed = await getUnsubscribed();

      const exists = subscribers.some((s) => s.email === normalizedEmail);
      if (!exists && unsubscribed.includes(normalizedEmail)) {
        return NextResponse.json({ success: true, message: "Zaten aboneliğiniz iptal edilmiş." });
      }

      if (!exists) {
        return NextResponse.json({ success: false, error: "Bu e-posta adresi listemizde bulunamadı." }, { status: 404 });
      }

      // Aboneler listesinden çıkar
      const newSubscribers = subscribers.filter((s) => s.email !== normalizedEmail);
      await kvSet(SUBSCRIBERS_KEY, newSubscribers);

      // Unsubscribed listesine ekle
      if (!unsubscribed.includes(normalizedEmail)) {
        unsubscribed.push(normalizedEmail);
        await kvSet(UNSUBSCRIBED_KEY, unsubscribed);
      }

      // Webhook bildirimi (opsiyonel)
      const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL;
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "unsubscribe", email: normalizedEmail }),
        }).catch(() => {});
      }

      return NextResponse.json({ success: true, message: "Aboneliğiniz iptal edildi." });
    }

    return NextResponse.json({ success: false, error: "Geçersiz işlem." }, { status: 400 });
  } catch (err) {
    return NextResponse.json({ success: false, error: "Sunucu hatası", detail: String(err) }, { status: 500 });
  }
}

// GET /api/newsletter?action=check&email=...
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email")?.trim().toLowerCase();

  if (!email) {
    return NextResponse.json({ success: false, error: "E-posta gerekli." }, { status: 400 });
  }

  const subscribers = await getSubscribers();
  const unsubscribed = await getUnsubscribed();

  const isSubscribed = subscribers.some((s) => s.email === email) && !unsubscribed.includes(email);
  return NextResponse.json({ success: true, email, isSubscribed });
}
