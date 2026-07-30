import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";

export const metadata = {
  title: "Iletisim | AFN Medya",
  description: "AFN Medya ile web tasarim, yazilim ve sosyal medya projeleriniz icin iletisime gecin.",
};

const contacts = [
  {
    icon: Phone,
    title: "Telefon",
    lines: ["+90 216 572 50 40"],
    href: "tel:+902165725040",
  },
  {
    icon: MessageCircleMore,
    title: "WhatsApp Business",
    lines: ["+90 530 443 18 07"],
    href: "https://wa.me/905304431807",
    external: true,
  },
  {
    icon: Mail,
    title: "E-posta",
    lines: ["info@afnteknoloji.com", "satis@afnteknoloji.com"],
    href: "mailto:info@afnteknoloji.com",
  },
  {
    icon: MapPin,
    title: "Lokasyon",
    lines: ["Maltepe / Istanbul", "Online gorusme ve proje planlama destegi"],
  },
];

export default function IletisimPage() {
  return (
    <main className="bg-[#06101d]">
      <Header />

      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">Iletisim</p>
            <h1 className="mt-4 font-display text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">
              Projenizi anlatalim, size en uygun dijital yapiyi birlikte cikaralim.
            </h1>
            <p className="mt-5 text-base leading-8 text-white/66">
              Web sitesi, yazilim ya da sosyal medya tarafinda neye ihtiyaciniz oldugunu yazin. Ekibimiz size uygun
              kurguyu netlestirip hizli sekilde geri donus yapsin.
            </p>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-5">
              {contacts.map((contact) => (
                <div key={contact.title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/14 text-[var(--accent)]">
                      <contact.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-lg font-black text-white">{contact.title}</h2>
                      <div className="mt-2 space-y-1.5 text-sm text-white/66">
                        {contact.lines.map((line, index) =>
                          contact.href && index === 0 ? (
                            <a
                              key={line}
                              href={contact.href}
                              target={contact.external ? "_blank" : undefined}
                              rel={contact.external ? "noopener noreferrer" : undefined}
                              className="block transition hover:text-white"
                            >
                              {line}
                            </a>
                          ) : (
                            <p key={line}>{line}</p>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 sm:p-8">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">Iletisim Formu</p>
                <h2 className="mt-3 text-2xl font-black text-white">Bize kisa bir ozet birakin</h2>
                <p className="mt-3 text-sm leading-7 text-white/62">
                  Form aktif durumda. Talebiniz geldikten sonra size telefon veya e-posta ile geri donus yapabiliriz.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
