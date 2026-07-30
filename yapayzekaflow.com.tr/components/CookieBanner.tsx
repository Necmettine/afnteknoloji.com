"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "yzflow-cookie-consent";
const CONSENT_EVENT = "yzflow-cookie-consent-changed";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(CONSENT_KEY);
    setVisible(!saved);
  }, []);

  const saveChoice = (value: "accepted" | "rejected") => {
    window.localStorage.setItem(CONSENT_KEY, value);
    window.dispatchEvent(new Event(CONSENT_EVENT));
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-[1200] mx-auto max-w-3xl rounded-2xl border border-flow-border/70 bg-flow-deep/95 p-5 shadow-2xl backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Çerez kullanımı</p>
          <p className="mt-1 text-sm leading-relaxed text-slate-400">
            Site trafiğini ölçmek ve sayfa performansını iyileştirmek için
            çerezlerden yararlanıyoruz. Reddederseniz yalnızca zorunlu çerezler
            kullanılır.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => saveChoice("rejected")}
            className="rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            Reddet
          </button>
          <button
            type="button"
            onClick={() => saveChoice("accepted")}
            className="rounded-xl bg-flow-cyan px-4 py-2 text-sm font-bold text-flow-deep transition-colors hover:bg-flow-mint"
          >
            Kabul et
          </button>
        </div>
      </div>
    </div>
  );
}
