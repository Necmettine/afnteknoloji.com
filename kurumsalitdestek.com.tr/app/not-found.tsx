import Link from "next/link";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center">
      <span className="flex h-14 w-14 items-center justify-center border border-mit-gold/40 bg-mit-gold/10 text-mit-amber">
        <FileQuestion className="h-6 w-6" aria-hidden="true" />
      </span>
      <h1 className="mt-6 text-3xl font-extrabold">Sayfa bulunamadı</h1>
      <p className="mt-3 max-w-md text-gray-400">
        Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Ana sayfadan devam
        edebilir ya da bizi doğrudan arayabilirsiniz.
      </p>
      <Link
        href="/"
        className="mt-8 bg-mit-gold px-6 py-3 text-base font-bold text-mit-deep transition-colors hover:bg-mit-amber"
      >
        Ana Sayfaya Dön
      </Link>
    </section>
  );
}
