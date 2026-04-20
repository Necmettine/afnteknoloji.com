import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const apiKey = req.headers.get("x-api-key");
    if (!process.env.BLOG_API_KEY || apiKey !== process.env.BLOG_API_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { topic, category } = await req.json();
    if (!topic) return NextResponse.json({ error: "Konu gerekli" }, { status: 400 });

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "GEMINI_API_KEY tanımlı değil" }, { status: 503 });
    }

    const prompt = `AFN Teknoloji adına profesyonel bir BT blog makalesi yaz.

Konu: ${topic}
Kategori: ${category || "BT Yönetimi"}

Kurallar:
- Türkçe yaz
- Başlık: kısa ve dikkat çekici (maksimum 10 kelime)
- İçerik: 300-500 kelime, kurumsal şirketlere hitap eden, profesyonel ton
- Giriş, 3-4 ana paragraf, sonuç bölümü olsun
- Emoji veya hashtag kullanma
- AFN Teknoloji'nin 10+ yıllık deneyimini ve uzmanlığını yansıt

Yanıtı SADECE şu JSON formatında ver, başka hiçbir şey ekleme:
{"title": "...", "content": "..."}`;

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.7, maxOutputTokens: 1024 },
        }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: "Gemini hatası: " + err }, { status: 500 });
    }

    const data = await res.json();
    const raw = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("Geçersiz yanıt formatı");
    const result = JSON.parse(jsonMatch[0]);

    return NextResponse.json({ success: true, title: result.title, content: result.content });
  } catch (err) {
    return NextResponse.json({ error: "AI hatası: " + String(err) }, { status: 500 });
  }
}
