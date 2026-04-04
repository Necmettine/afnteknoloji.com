import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata = { title: "İletişim | AFN Teknoloji" };

const contacts = [
  {
    icon: MapPin,
    title: "Merkez Ofis",
    lines: ["Zümrüt Evler Mah. Hanımeli Cad,", "Tuna İş Merkezi No:13 K:3 D:6", "Maltepe / İstanbul 34852"],
  },
  {
    icon: MapPin,
    title: "2. Şube",
    lines: ["Kavaklı Mahallesi / İstanbul Caddesi", "No: 21 Beylikdüzü / İstanbul"],
  },
  {
    icon: Phone,
    title: "Telefon",
    lines: ["+90 216 572 50 40"],
    href: "tel:+902165725040",
  },
  {
    icon: Mail,
    title: "E-posta",
    lines: ["info@afnteknoloji.com", "destek@afnteknoloji.com", "satis@afnteknoloji.com"],
    href: "mailto:info@afnteknoloji.com",
  },
];

export default function IletisimPage() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-20 bg-[#0A0E1A] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Bize Ulaşın</span>
            <h1 className="text-4xl font-extrabold mt-3 mb-4">İletişim</h1>
            <p className="text-gray-400 max-w-lg mx-auto">Sorularınız veya teklif talebiniz için formu doldurun, en kısa sürede geri dönelim.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-6">Mesaj Gönderin</h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Adınız *</label>
                    <input type="text" placeholder="Adınız Soyadınız" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#F5A623]/50 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">E-posta *</label>
                    <input type="email" placeholder="email@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#F5A623]/50 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Konu</label>
                  <input type="text" placeholder="Konu başlığı" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#F5A623]/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Mesajınız</label>
                  <textarea rows={5} placeholder="Mesajınızı buraya yazın..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#F5A623]/50 transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all hover:shadow-lg hover:shadow-orange-500/30 active:scale-95">
                  Gönder
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div className="space-y-5">
              {contacts.map((c) => (
                <div key={c.title} className="gradient-border rounded-2xl p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F5A623]/10 flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-6 h-6 text-[#F5A623]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">{c.title}</div>
                    {c.lines.map((l, i) =>
                      c.href && i === 0 ? (
                        <a key={i} href={c.href} className="block text-gray-400 hover:text-[#F5A623] transition-colors text-sm">{l}</a>
                      ) : (
                        <div key={i} className="text-gray-400 text-sm">{l}</div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-12">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#F5A623]" />
              Konumumuz
            </h2>
            <div className="rounded-2xl overflow-hidden border border-white/10" style={{ height: 400 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.744!2d29.1374!3d40.9256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU1JzMyLjIiTiAyOcKwMDgnMTQuNiJF!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str&q=Tuna+%C4%B0%C5%9F+Merkezi+Maltepe+%C4%B0stanbul"
                width="100%"
                height="400"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AFN Teknoloji Konum"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
