import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, category, priority, subject, description } = body;

    if (!name || !email || !subject || !description) {
      return NextResponse.json({ error: "Zorunlu alanlar eksik" }, { status: 400 });
    }

    // Make.com webhook'una ilet (ileride eklenecek)
    const webhookUrl = process.env.SUPPORT_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, email, phone, company,
          category, priority, subject, description,
          createdAt: new Date().toISOString(),
          source: "afnteknoloji.com/destek",
        }),
      });
    }

    // Dahili bildirim e-postası (SMTP ileride eklenebilir)
    console.log("YENİ DESTEK TALEBİ:", { name, email, priority, subject });

    return NextResponse.json({ success: true, message: "Talep alındı" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Sunucu hatası", detail: String(err) }, { status: 500 });
  }
}
