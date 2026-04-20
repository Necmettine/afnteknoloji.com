import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

export async function POST(req: NextRequest) {
  try {
    const apiKey = req.headers.get("x-api-key");
    if (!process.env.BLOG_API_KEY || apiKey !== process.env.BLOG_API_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { topic, category } = await req.json();
    if (!topic) return NextResponse.json({ error: "Konu gerekli" }, { status: 400 });

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const message = await client.messages.create({
      model: "claude-opus-4-5",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: `AFN Teknoloji adına profesyonel bir BT blog makalesi yaz.

Konu: ${topic}
Kategori: ${category || "BT Yönetimi"}

Kurallar:
- Türkçe yaz
- Başlık: kısa ve dikkat çekici (maksimum 10 kelime)
- İçerik: 300-500 kelime, kurumsal şirketlere hitap eden, LinkedIn'e uygun profesyonel ton
- Giriş, 3-4 ana madde/paragraf, sonuç bölümü olsun
- Emoji veya hashtag kullanma
- AFN Teknoloji'nin 10+ yıllık deneyimini ve uzmanlığını yansıt

Yanıtı SADECE şu JSON formatında ver, başka hiçbir şey ekleme:
{"title": "...", "content": "..."}`,
        },
      ],
    });

    const raw = (message.content[0] as { type: string; text: string }).text.trim();
    // JSON parse
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("Geçersiz yanıt formatı");
    const result = JSON.parse(jsonMatch[0]);

    return NextResponse.json({ success: true, title: result.title, content: result.content });
  } catch (err) {
    return NextResponse.json({ error: "AI hatası: " + String(err) }, { status: 500 });
  }
}
