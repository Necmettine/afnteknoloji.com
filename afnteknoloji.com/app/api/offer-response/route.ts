import { NextRequest, NextResponse } from "next/server";
import {
  getLatestOfferResponse,
  OfferResponseStatus,
  storeOfferResponse,
} from "@/lib/offer-responses";

function isValidStatus(status: string): status is OfferResponseStatus {
  return status === "positive" || status === "negative";
}

function isAuthorized(req: NextRequest) {
  const configuredKey = process.env.OFFER_RESPONSE_API_KEY || process.env.ADMIN_KEY || "afn2024";
  const incomingKey =
    req.headers.get("x-api-key") ||
    req.nextUrl.searchParams.get("key") ||
    "";

  return incomingKey === configuredKey;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Yetkisiz istek" }, { status: 401 });
  }

  const offerId = Number(req.nextUrl.searchParams.get("offerId") || "0");
  if (!Number.isFinite(offerId) || offerId <= 0) {
    return NextResponse.json({ error: "offerId zorunlu" }, { status: 400 });
  }

  const latest = await getLatestOfferResponse(offerId);
  if (!latest) {
    return NextResponse.json({ found: false });
  }

  return NextResponse.json({
    found: true,
    id: latest.id,
    offerId: latest.offerId,
    status: latest.status,
    token: latest.token,
    createdAt: latest.createdAt,
    source: latest.source,
    companyName: latest.companyName ?? null,
    fileName: latest.fileName ?? null,
    offerDate: latest.offerDate ?? null,
  });
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Yetkisiz istek" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const offerId = Number(body.offerId || 0);
    const status = String(body.status || "");

    if (!Number.isFinite(offerId) || offerId <= 0 || !isValidStatus(status)) {
      return NextResponse.json({ error: "Gecersiz veri" }, { status: 400 });
    }

    const record = await storeOfferResponse({
      offerId,
      status,
      token: String(body.token || ""),
      source: "internal",
      companyName: body.companyName || "",
      fileName: body.fileName || "",
      offerDate: body.offerDate || "",
    });

    return NextResponse.json({ success: true, record }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Sunucu hatasi", detail: String(error) }, { status: 500 });
  }
}
