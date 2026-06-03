import { NextRequest, NextResponse } from "next/server";
import { hizmetler, cozumler } from "@/lib/content";

// GET /api/site-context?key=...
// CRM tarafından AI prompt zenginleştirmek için çağrılır
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const key = searchParams.get("key");
  const adminKey = process.env.BLOG_API_KEY ?? "afn2024";
  if (key !== adminKey) {
    return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  }

  const services = Object.entries(hizmetler).map(([slug, s]) => ({
    slug, title: s.title, desc: s.desc,
  }));

  const solutions = Object.entries(cozumler).map(([slug, s]) => ({
    slug, title: s.title, desc: s.desc,
  }));

  return NextResponse.json({
    company: {
      name: "AFN Teknoloji Bilişim Destek ve Dan. Hiz. Tic. Ltd. Şti.",
      shortName: "AFN Teknoloji",
      tagline: "Kurumsal Bilişim Desteğiniz",
      website: "https://afnteknoloji.com",
      phone: "+90 216 572 50 40",
      email: "satis@afnteknoloji.com",
      location: "Maltepe / İstanbul",
      description: "Kurumsal BT altyapısı, güvenlik, sanallaştırma, yedekleme ve ağ çözümleri alanında 15+ yıllık deneyime sahip Türkiye merkezli BT hizmet şirketi.",
      notOffered: [
        "Eğitim ve kurs hizmetleri",
        "Mobil uygulama geliştirme",
        "Dijital pazarlama",
        "E-ticaret yazılımı",
        "Grafik tasarım",
      ],
      partners: ["VMware", "Veeam", "Fortinet", "HP", "Dell", "Microsoft", "Aruba", "Sophos"],
      products: ["AFN RiskScan (risktarama.com.tr)"],
    },
    services,
    solutions,
  });
}
