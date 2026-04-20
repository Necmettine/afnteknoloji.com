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
            content: "Sen AFN Teknoloji adına profesyonel BT blog makaleleri yazan bir içerik uzmanısın. Türkçe, kurumsal ve akıcı yazıyorsun.",
          },
          {
            role: "user",
            content: `Aşağıdaki konu hakkında profesyonel bir BT blog makalesi yaz.

Konu: ${topic}
Kategori: ${category || "BT Yönetimi"}

Kurallar:
- Türkçe yaz
- Başlık: kısa ve dikkat çekici (maksimum 10 kelime)
- İçerik: 300-500 kelime, kurumsal şirketlere hitap eden profesyonel ton
- Giriş, 3-4 ana paragraf, sonuç bölümü olsun
- Emoji veya hashtag kullanma
- AFN Teknoloji'nin 10+ yıllık deneyimini yansıt

Yanıtı SADECE şu JSON formatında ver:
{"title": "...", "content": "..."}`,
          },
        ],
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: "Groq hatası: " + err }, { status: 500 });
    }

    const data = await res.json();
    const raw = data.choices?.[0]?.message?.content ?? "";

    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("Geçersiz yanıt formatı");
    const result = JSON.parse(jsonMatch[0]);

    return NextResponse.json({ success: true, title: result.title, content: result.content });
  } catch (err) {
    return NextResponse.json({ error: "AI hatası: " + String(err) }, { status: 500 });
  }
}
