import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #F5A623 0%, #e6951a 100%)" }} />
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-black mb-4">Size özel teklifimiz için</h2>
        <p className="text-black/70 text-lg mb-10 max-w-xl mx-auto">
          Kurumsal BT ihtiyaçlarınız için özel fiyat teklifi alın. Uzman ekibimiz en kısa sürede sizinle iletişime geçsin.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="/iletisim"
            className="flex items-center gap-2 px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-900 transition-all hover:shadow-xl hover:-translate-y-0.5 active:scale-95">
            Bize Ulaşın <ArrowRight className="w-5 h-5" />
          </a>
          <a href="tel:+902165725040"
            className="flex items-center gap-2 px-8 py-4 bg-white/20 text-black font-bold rounded-xl hover:bg-white/30 transition-all border border-black/20">
            <Phone className="w-5 h-5" /> +90 216 572 50 40
          </a>
        </div>
      </div>
    </section>
  );
}
