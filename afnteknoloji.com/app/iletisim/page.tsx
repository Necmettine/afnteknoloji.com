import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata = { title: "İletişim | AFN Teknoloji" };

const contacts = [
  {
    icon: MapPin,
    title: "Merkez Ofis",
    lines: ["Zümrütevler Mah. Hanımeli Cad.", "Tuna İş Merkezi No:13 K:3 D:6", "Maltepe / İstanbul 34852"],
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
      <section className="min-h-screen bg-[#0A0E1A] pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#F5A623]">Bize Ulaşın</span>
            <h1 className="mt-3 mb-4 text-4xl font-extrabold">İletişim</h1>
            <p className="mx-auto max-w-lg text-gray-400">
              Sorularınız veya teklif talebiniz için formu doldurun, en kısa sürede geri dönelim.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <ContactForm />

            <div className="space-y-5">
              {contacts.map((c) => (
                <div key={c.title} className="gradient-border flex gap-4 rounded-2xl p-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#F5A623]/10">
                    <c.icon className="h-6 w-6 text-[#F5A623]" />
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-white">{c.title}</div>
                    {c.lines.map((l, i) =>
                      c.href && i === 0 ? (
                        <a key={i} href={c.href} className="block text-sm text-gray-400 transition-colors hover:text-[#F5A623]">
                          {l}
                        </a>
                      ) : (
                        <div key={i} className="text-sm text-gray-400">
                          {l}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-white">
              <MapPin className="h-5 w-5 text-[#F5A623]" />
              Konumumuz
            </h2>
            <div className="overflow-hidden rounded-2xl border border-white/10" style={{ height: 400 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.082797834498!2d29.139390476422207!3d40.9358525238809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac6383a36ae81%3A0x40b51d758071ceb9!2sAfn%20Teknoloji%20Bili%C5%9Fim%20Destek%20ve%20Dan%C4%B1%C5%9Fmanl%C4%B1k%20Hizmetleri%20Ticaret%20Limited%20%C5%9Eirketi!5e0!3m2!1str!2str!4v1775466862778!5m2!1str!2str"
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

          <NewsletterSection />
        </div>
      </section>
      <Footer />
    </main>
  );
}
