"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return !window.localStorage.getItem("turkiyebilisim-cookie-consent");
  });

  const saveChoice = (value: "accepted" | "rejected") => {
    window.localStorage.setItem("turkiyebilisim-cookie-consent", value);
    window.dispatchEvent(new Event("turkiyebilisim-cookie-consent-changed"));
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-[1200] mx-auto w-auto max-w-[360px] lg:right-6 lg:left-auto lg:mx-0">
      <div className="panel-surface rounded-[28px] p-5 shadow-2xl shadow-black/40">
        <div className="mb-4 flex items-start gap-3">
          <div className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#06B6D4]/12">
            <ShieldCheck className="h-5 w-5 text-[#67E8F9]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Cerez kullanimi</p>
            <p className="mt-1 text-sm leading-6 text-slate-400">
              Site performansi ve olcumleme icin cerez kullaniyoruz.
            </p>
            <Link
              href="/gizlilik-politikasi"
              className="mt-2 inline-flex text-xs font-medium text-[#67E8F9] transition-colors hover:text-white"
            >
              Gizlilik politikasini incele
            </Link>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => saveChoice("rejected")}
            className="flex-1 rounded-2xl border border-white/10 px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            Reddet
          </button>
          <button
            type="button"
            onClick={() => saveChoice("accepted")}
            className="flex-1 rounded-2xl bg-[#06B6D4] px-4 py-3 text-sm font-bold text-black transition-colors hover:bg-[#22D3EE]"
          >
            Kabul et
          </button>
        </div>
      </div>
    </div>
  );
}
