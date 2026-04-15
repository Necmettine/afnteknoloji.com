import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  buildOfferResponseToken,
  OfferResponseStatus,
  storeOfferResponse,
} from "@/lib/offer-responses";

type SearchParams = Promise<{
  offer?: string;
  status?: string;
  token?: string;
}>;

function getUi(status: OfferResponseStatus) {
  if (status === "positive") {
    return {
      badge: "Olumlu Donus",
      title: "Geri bildiriminiz icin tesekkur ederiz",
      message:
        "Teklifiniz olumlu olarak kaydedildi. Ekibimiz sizinle en kisa surede iletisime gececektir.",
      accent: "bg-emerald-600",
      panel: "from-emerald-50 to-white",
      border: "border-emerald-100",
      text: "text-emerald-800",
    };
  }

  return {
    badge: "Olumsuz Donus",
    title: "Geri bildiriminiz icin tesekkur ederiz",
    message:
      "Teklifiniz olumsuz olarak kaydedildi. Talebiniz olursa ekibimiz guncel bir revizyon hazirlayabilir.",
    accent: "bg-rose-600",
    panel: "from-rose-50 to-white",
    border: "border-rose-100",
    text: "text-rose-800",
  };
}

export default async function OfferResponsePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { offer, status, token } = await searchParams;
  const offerId = Number(offer || "0");
  const normalizedStatus = status === "positive" || status === "negative" ? status : null;

  const isValid =
    Number.isFinite(offerId) &&
    offerId > 0 &&
    !!normalizedStatus &&
    token === buildOfferResponseToken(offerId, normalizedStatus);

  let createdAt: string | null = null;

  if (isValid) {
    const record = await storeOfferResponse({
      offerId,
      status: normalizedStatus,
      token: token || "",
      source: "public",
    });
    createdAt = record.createdAt;
  }

  const ui = normalizedStatus ? getUi(normalizedStatus) : null;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_38%),linear-gradient(180deg,#f8fbff_0%,#eef4ff_100%)] text-slate-900">
      <Header />
      <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-6 py-16">
        {!isValid || !ui ? (
          <div className="w-full max-w-2xl rounded-[32px] border border-slate-200 bg-white p-10 shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
            <span className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
              AFN Teknoloji
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900">
              Gecersiz baglanti
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Teklif yanit baglantisi eksik ya da gecersiz gorunuyor. Yeni teklif linki
              isterseniz bizimle iletisime gecebilirsiniz.
            </p>
          </div>
        ) : (
          <div
            className={`w-full max-w-3xl overflow-hidden rounded-[36px] border bg-gradient-to-br ${ui.panel} shadow-[0_25px_80px_rgba(15,23,42,0.14)] ${ui.border}`}
          >
            <div className="border-b border-slate-200/70 px-8 py-8 sm:px-10">
              <span className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold text-white ${ui.accent}`}>
                AFN Teknoloji
              </span>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950">
                {ui.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                {ui.message}
              </p>
            </div>
            <div className="px-8 py-8 sm:px-10">
              <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white/80 p-6 sm:grid-cols-[180px_1fr]">
                <div className="font-semibold text-slate-500">Teklif ID</div>
                <div className="text-lg font-semibold text-slate-900">{offerId}</div>
                <div className="font-semibold text-slate-500">Durum</div>
                <div className={`text-lg font-semibold ${ui.text}`}>{ui.badge}</div>
                <div className="font-semibold text-slate-500">Kayit Zamani</div>
                <div className="text-slate-800">
                  {createdAt
                    ? new Intl.DateTimeFormat("tr-TR", {
                        dateStyle: "short",
                        timeStyle: "short",
                      }).format(new Date(createdAt))
                    : "-"}
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-slate-500">
                Sorulariniz icin{" "}
                <a className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4" href="mailto:satis@afnteknoloji.com">
                  satis@afnteknoloji.com
                </a>{" "}
                adresinden bizimle iletisime gecebilirsiniz.
              </p>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
