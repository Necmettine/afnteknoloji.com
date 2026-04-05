import { NextRequest, NextResponse } from "next/server";
import { storeLead } from "@/lib/leads";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Zorunlu alanlar eksik" }, { status: 400 });
    }

    const lead = storeLead({
      type: "contact",
      source: "afnteknoloji.com/iletisim",
      payload: {
        name,
        email,
        phone: phone || "",
        company: company || "",
        subject: subject || "",
        message,
      },
    });

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    }

    return NextResponse.json({ success: true, message: "Mesajiniz alindi" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Sunucu hatasi", detail: String(err) }, { status: 500 });
  }
}
