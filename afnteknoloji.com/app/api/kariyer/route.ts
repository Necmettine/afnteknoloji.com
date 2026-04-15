import { NextRequest, NextResponse } from "next/server";
import { storeLead } from "@/lib/leads";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, position, experience, linkedin, message } = body;

    if (!name || !email || !phone || !position) {
      return NextResponse.json({ error: "Zorunlu alanlar eksik" }, { status: 400 });
    }

    const lead = storeLead({
      type: "career",
      source: "afnteknoloji.com/ekip-kariyer",
      payload: {
        name,
        email,
        phone,
        position,
        experience: experience || "",
        linkedin: linkedin || "",
        message: message || "",
      },
    });

    // Webhook varsa bildir
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, type: "career_application" }),
      });
    }

    return NextResponse.json({ success: true, message: "Başvurunuz alındı" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Sunucu hatası", detail: String(err) }, { status: 500 });
  }
}
