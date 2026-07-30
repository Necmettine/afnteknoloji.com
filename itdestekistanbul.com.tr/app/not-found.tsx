import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-it-blue/15 text-it-sky">
        <SearchX className="h-7 w-7" aria-hidden="true" />
      </span>
      <h1 className="mt-5 text-3xl font-extrabold">Sayfa bulunamadı</h1>
      <p className="mt-3 max-w-md text-gray-400">
        Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Ana sayfadan devam
        edebilirsiniz.
      </p>
      <Link
        href="/"
        className="mt-7 rounded-xl bg-it-blue px-6 py-3 text-base font-bold text-white transition-colors hover:bg-it-sky"
      >
        Ana Sayfaya Dön
      </Link>
    </section>
  );
}
