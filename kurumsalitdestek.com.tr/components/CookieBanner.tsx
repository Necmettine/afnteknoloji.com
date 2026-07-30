"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "kurumsalitdestek-cookie-consent";
const CONSENT_EVENT = "kurumsalitdestek-cookie-consent-changed";

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
    <div className="fixed inset-x-4 bottom-4 z-[1200] mx-auto max-w-3xl border border-mit-border bg-mit-deep/95 p-5 shadow-2xl backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Çerez tercihi</p>
          <p className="mt-1 text-sm leading-relaxed text-gray-400">
            Ziyaret istatistiklerini ölçmek için çerez kullanıyoruz. Reddetmeniz
            hâlinde yalnızca sitenin çalışması için zorunlu olanlar kullanılır.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => saveChoice("rejected")}
            className="border border-mit-border px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            Reddet
          </button>
          <button
            type="button"
            onClick={() => saveChoice("accepted")}
            className="bg-mit-gold px-4 py-2 text-sm font-bold text-mit-deep transition-colors hover:bg-mit-amber"
          >
            Kabul et
          </button>
        </div>
      </div>
    </div>
  );
}
