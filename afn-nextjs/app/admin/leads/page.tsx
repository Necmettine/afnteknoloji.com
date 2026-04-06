export const dynamic = "force-dynamic";
import { existsSync, readFileSync } from "fs";
import { join } from "path";
import type { LeadRecord } from "@/lib/leads";

function readLeads(): LeadRecord[] {
  const leadsPath = join(process.cwd(), "data", "lead-inbox.json");
  if (!existsSync(leadsPath)) return [];
  try {
    return JSON.parse(readFileSync(leadsPath, "utf-8")) as LeadRecord[];
  } catch {
    return [];
  }
}

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function getPayloadField(payload: Record<string, unknown>, ...keys: string[]): string {
  for (const key of keys) {
    if (payload[key] && typeof payload[key] === "string") return payload[key] as string;
  }
  return "—";
}

interface PageProps {
  searchParams: Promise<{ key?: string }>;
}

export default async function LeadsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const adminKey = process.env.ADMIN_KEY ?? "afn2024";

  // Yetki kontrolü
  if (params.key !== adminKey) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#0A0E1A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            background: "#0D1220",
            border: "1px solid rgba(245,166,35,0.2)",
            borderRadius: 16,
            padding: "48px 56px",
            textAlign: "center",
            maxWidth: 380,
          }}
        >
          <div style={{ fontSize: 48, marginBottom: 16 }}>🔒</div>
          <h1 style={{ color: "#F5A623", fontSize: 22, fontWeight: 700, margin: "0 0 10px" }}>
            Yetkisiz Erişim
          </h1>
          <p style={{ color: "#9ca3af", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
            Bu sayfaya erişmek için geçerli bir anahtar gereklidir.
            <br />
            <span style={{ color: "#6b7280", fontSize: 12 }}>
              Örnek: /admin/leads?key=afn2024
            </span>
          </p>
        </div>
      </div>
    );
  }

  const leads = readLeads();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0A0E1A",
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "#e5e7eb",
      }}
    >
      {/* Üst bar */}
      <div
        style={{
          background: "#0D1220",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "18px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#F5A623",
              boxShadow: "0 0 8px rgba(245,166,35,0.6)",
            }}
          />
          <span style={{ color: "#F5A623", fontWeight: 800, fontSize: 18, letterSpacing: "-0.3px" }}>
            AFN Admin
          </span>
          <span style={{ color: "#4b5563", fontSize: 14 }}>/</span>
          <span style={{ color: "#9ca3af", fontSize: 14 }}>Lead Inbox</span>
        </div>
        <span
          style={{
            background: "rgba(245,166,35,0.12)",
            color: "#F5A623",
            border: "1px solid rgba(245,166,35,0.25)",
            borderRadius: 20,
            padding: "4px 14px",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          {leads.length} kayıt
        </span>
      </div>

      {/* İçerik */}
      <div style={{ padding: "32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Özet kartları */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 16,
              marginBottom: 32,
            }}
          >
            {[
              {
                label: "Toplam Lead",
                value: leads.length,
                color: "#F5A623",
              },
              {
                label: "İletişim",
                value: leads.filter((l) => l.type === "contact").length,
                color: "#60a5fa",
              },
              {
                label: "Destek",
                value: leads.filter((l) => l.type === "support").length,
                color: "#34d399",
              },
            ].map((card) => (
              <div
                key={card.label}
                style={{
                  background: "#0D1220",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                }}
              >
                <div style={{ color: "#6b7280", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                  {card.label}
                </div>
                <div style={{ color: card.color, fontSize: 32, fontWeight: 800, lineHeight: 1 }}>
                  {card.value}
                </div>
              </div>
            ))}
          </div>

          {/* Tablo */}
          {leads.length === 0 ? (
            <div
              style={{
                background: "#0D1220",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "64px 32px",
                textAlign: "center",
                color: "#4b5563",
                fontSize: 15,
              }}
            >
              Henüz hiç lead kaydı yok.
            </div>
          ) : (
            <div
              style={{
                background: "#0D1220",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    {["Tarih", "Tip", "İsim", "E-posta", "Konu / Mesaj", "Kaynak"].map((h) => (
                      <th
                        key={h}
                        style={{
                          padding: "14px 20px",
                          textAlign: "left",
                          color: "#6b7280",
                          fontSize: 11,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, idx) => {
                    const name = getPayloadField(lead.payload, "name", "isim", "ad");
                    const email = getPayloadField(lead.payload, "email", "mail");
                    const subject = getPayloadField(lead.payload, "subject", "konu", "message", "mesaj", "description");

                    return (
                      <tr
                        key={lead.id}
                        style={{
                          borderBottom:
                            idx < leads.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                          transition: "background 0.15s",
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLTableRowElement).style.background =
                            "rgba(255,255,255,0.025)")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLTableRowElement).style.background = "transparent")
                        }
                      >
                        {/* Tarih */}
                        <td
                          style={{
                            padding: "14px 20px",
                            color: "#9ca3af",
                            whiteSpace: "nowrap",
                            fontSize: 13,
                          }}
                        >
                          {formatDate(lead.createdAt)}
                        </td>

                        {/* Tip */}
                        <td style={{ padding: "14px 20px" }}>
                          <span
                            style={{
                              display: "inline-block",
                              padding: "3px 10px",
                              borderRadius: 20,
                              fontSize: 12,
                              fontWeight: 600,
                              background:
                                lead.type === "contact"
                                  ? "rgba(96,165,250,0.12)"
                                  : "rgba(52,211,153,0.12)",
                              color: lead.type === "contact" ? "#60a5fa" : "#34d399",
                              border:
                                lead.type === "contact"
                                  ? "1px solid rgba(96,165,250,0.2)"
                                  : "1px solid rgba(52,211,153,0.2)",
                            }}
                          >
                            {lead.type === "contact" ? "İletişim" : "Destek"}
                          </span>
                        </td>

                        {/* İsim */}
                        <td style={{ padding: "14px 20px", color: "#e5e7eb", fontWeight: 500 }}>
                          {name}
                        </td>

                        {/* E-posta */}
                        <td style={{ padding: "14px 20px" }}>
                          {email !== "—" ? (
                            <a
                              href={`mailto:${email}`}
                              style={{
                                color: "#F5A623",
                                textDecoration: "none",
                                fontSize: 13,
                              }}
                            >
                              {email}
                            </a>
                          ) : (
                            <span style={{ color: "#4b5563" }}>—</span>
                          )}
                        </td>

                        {/* Konu */}
                        <td
                          style={{
                            padding: "14px 20px",
                            color: "#9ca3af",
                            maxWidth: 300,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                          title={subject !== "—" ? subject : undefined}
                        >
                          {subject}
                        </td>

                        {/* Kaynak */}
                        <td style={{ padding: "14px 20px", color: "#6b7280", fontSize: 12 }}>
                          {lead.source || "—"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
