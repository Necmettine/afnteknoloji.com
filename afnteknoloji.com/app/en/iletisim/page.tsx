import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnglishContactForm from "@/components/EnglishContactForm";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata = { title: "Contact | AFN Technology" };

const contacts = [
  {
    icon: MapPin,
    title: "Head Office",
    lines: ["Zumrut Evler Mah. Hanimeli Cad.", "Tuna Is Merkezi No:13 K:3 D:6", "Maltepe / Istanbul 34852"],
  },
  {
    icon: MapPin,
    title: "Branch Office",
    lines: ["Kavakli Mahallesi / Istanbul Caddesi", "No: 21 Beylikduzu / Istanbul"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+90 216 572 50 40"],
    href: "tel:+902165725040",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@afnteknoloji.com", "destek@afnteknoloji.com", "satis@afnteknoloji.com"],
    href: "mailto:info@afnteknoloji.com",
  },
];

export default function EnglishContact() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-20 bg-[#0A0E1A] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Contact us</span>
            <h1 className="text-4xl font-extrabold mt-3 mb-4">Contact</h1>
            <p className="text-gray-400 max-w-lg mx-auto">
              Fill out the form for your questions or proposal request, and we will get back to you shortly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <EnglishContactForm />

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
                        <a key={i} href={c.href} className="block text-gray-400 hover:text-[#F5A623] transition-colors text-sm">
                          {l}
                        </a>
                      ) : (
                        <div key={i} className="text-gray-400 text-sm">
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
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#F5A623]" />
              Our Location
            </h2>
            <div className="rounded-2xl overflow-hidden border border-white/10" style={{ height: 400 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.082797834498!2d29.139390476422207!3d40.9358525238809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac6383a36ae81%3A0x40b51d758071ceb9!2sAfn%20Teknoloji%20Bili%C5%9Fim%20Destek%20ve%20Dan%C4%B1%C5%9Fmanl%C4%B1k%20Hizmetleri%20Ticaret%20Limited%20%C5%9Eirketi!5e0!3m2!1str!2str!4v1775466862778!5m2!1str!2str"
                width="100%"
                height="400"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AFN Technology Location"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
