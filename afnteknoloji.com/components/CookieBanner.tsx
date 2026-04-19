"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("afn-cookie-consent");
    setVisible(!saved);
  }, []);

  const saveChoice = (value: "accepted" | "rejected") => {
    window.localStorage.setItem("afn-cookie-consent", value);
    window.dispatchEvent(new Event("afn-cookie-consent-changed"));
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-[1200] mx-auto max-w-3xl rounded-2xl border border-white/10 bg-[#0D1220]/95 p-5 shadow-2xl backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Çerez kullanımı</p>
          <p className="mt-1 text-sm leading-relaxed text-gray-400">
            Site performansını ve ölçümleme altyapısını yönetmek için çerezlerden yararlanıyoruz. Ayrıntılar için gizlilik politikasını inceleyebilirsiniz.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => saveChoice("rejected")}
            className="rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            Reddet
          </button>
          <button
            type="button"
            onClick={() => saveChoice("accepted")}
            className="rounded-xl bg-[#F5A623] px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-[#e6951a]"
          >
            Kabul et
          </button>
        </div>
      </div>
    </div>
  );
}
