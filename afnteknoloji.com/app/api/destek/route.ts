import { NextRequest, NextResponse } from "next/server";
import { storeLead } from "@/lib/leads";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, category, priority, subject, description } = body;

    if (!name || !email || !subject || !description) {
      return NextResponse.json({ error: "Zorunlu alanlar eksik" }, { status: 400 });
    }

    const lead = storeLead({
      type: "support",
      source: "afnteknoloji.com/destek",
      payload: {
        name,
        email,
        phone: phone || "",
        company: company || "",
        category: category || "",
        priority: priority || "medium",
        subject,
        description,
      },
    });

    const webhookUrl = process.env.SUPPORT_WEBHOOK_URL || process.env.NEXT_PUBLIC_SUPPORT_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    }

    console.log("YENI DESTEK TALEBI:", { name, email, priority, subject });

    return NextResponse.json({ success: true, message: "Talep alindi" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Sunucu hatasi", detail: String(err) }, { status: 500 });
  }
}
