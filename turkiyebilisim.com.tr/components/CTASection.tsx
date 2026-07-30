import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)" }} />
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute left-1/2 top-0 h-28 w-[70%] -translate-x-1/2 rounded-full bg-white/25 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-black/10 bg-white/12 px-6 py-14 shadow-[0_30px_80px_rgba(8,145,178,0.35)] backdrop-blur-md sm:px-10">
          <div className="mx-auto mb-4 inline-flex rounded-full border border-black/10 bg-black/10 px-4 py-2 text-sm font-semibold text-black/75">
            Kurumsal teklif ve keşif desteği
          </div>
        <h2 className="text-4xl font-extrabold text-black mb-4">Size özel teklifimiz için</h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-black/70">
          Kurumsal BT ihtiyaçlarınız için özel fiyat teklifi alın. Uzman ekibimiz en kısa sürede sizinle iletişime geçsin.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="/iletisim"
            className="flex items-center gap-2 rounded-2xl bg-black px-8 py-4 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-xl active:scale-95">
            Bize Ulaşın <ArrowRight className="w-5 h-5" />
          </a>
          <a href="tel:+902165725040"
            className="flex items-center gap-2 rounded-2xl border border-black/20 bg-white/20 px-8 py-4 font-bold text-black transition-all hover:bg-white/30">
            <Phone className="w-5 h-5" /> +90 216 572 50 40
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}
