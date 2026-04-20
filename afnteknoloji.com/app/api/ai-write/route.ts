import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const apiKey = req.headers.get("x-api-key");
    if (!process.env.BLOG_API_KEY || apiKey !== process.env.BLOG_API_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { topic, category } = await req.json();
    if (!topic) return NextResponse.json({ error: "Konu gerekli" }, { status: 400 });

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json({ error: "GROQ_API_KEY tanımlı değil" }, { status: 503 });
    }

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        temperature: 0.7,
        max_tokens: 1024,
        messages: [
          {
            role: "system",
            content: "Sen AFN Teknoloji adına profesyonel BT blog makaleleri yazan bir içerik uzmanısın. Türkçe, kurumsal ve akıcı yazıyorsun. Verilen formata kesinlikle uy.",
          },
          {
            role: "user",
            content: `Konu: ${topic}
Kategori: ${category || "BT Yönetimi"}

Kurallar:
- Türkçe, kurumsal, 300-500 kelime
- Giriş, 3-4 paragraf, sonuç
- Emoji veya hashtag kullanma
- AFN Teknoloji'nin 10+ yıllık uzmanlığını yansıt

BAŞLIK: [Buraya kısa başlık yaz]
İÇERİK: [Buraya makale içeriğini yaz]`,
          },
        ],
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: "Groq bağlantı hatası: " + err }, { status: 500 });
    }

    const data = await res.json();
    const raw: string = data.choices?.[0]?.message?.content ?? "";

    if (!raw) {
      return NextResponse.json({ error: "AI boş yanıt döndürdü" }, { status: 500 });
    }

    // Çoklu parse stratejisi — hangisi çalışırsa
    let title = "";
    let content = "";

    // 1. BAŞLIK: / İÇERİK: formatı
    const titleLine = raw.match(/BAŞLIK\s*:\s*(.+)/i);
    const contentAfter = raw.match(/İÇERİK\s*:\s*([\s\S]+)/i);
    if (titleLine) title = titleLine[1].trim();
    if (contentAfter) content = contentAfter[1].trim();

    // 2. XML etiket formatı (fallback)
    if (!title || !content) {
      const tMatch = raw.match(/<title>([\s\S]*?)<\/title>/i);
      const cMatch = raw.match(/<content>([\s\S]*?)<\/content>/i);
      if (tMatch) title = tMatch[1].trim();
      if (cMatch) content = cMatch[1].trim();
    }

    // 3. İlk satır başlık, geri kalanı içerik (son fallback)
    if (!title || !content) {
      const lines = raw.split("\n").filter((l) => l.trim());
      title = lines[0].replace(/^#+\s*/, "").trim();
      content = lines.slice(1).join("\n").trim();
    }

    if (!title || !content) {
      return NextResponse.json({ error: "Yanıt formatı anlaşılamadı, tekrar deneyin." }, { status: 500 });
    }

    return NextResponse.json({ success: true, title, content });
  } catch (err) {
    return NextResponse.json({ error: "AI hatası: " + String(err) }, { status: 500 });
  }
}
