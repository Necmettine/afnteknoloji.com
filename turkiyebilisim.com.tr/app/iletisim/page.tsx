import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock3 } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://turkiyebilisim.com.tr/iletisim",
    languages: {
      tr: "https://turkiyebilisim.com.tr/iletisim",
      en: "https://turkiyebilisim.com.tr/en/iletisim",
    },
  },
  title: "İletişim | Türkiye Bilişim",
};

const contacts = [
  {
    icon: MapPin,
    title: "Merkez Ofis",
    lines: ["Zümrütevler Mah. Hanımeli Cad.", "Tuna İş Merkezi No:13 K:3 D:6", "Maltepe / İstanbul 34852"],
  },
  {
    icon: MapPin,
    title: "Beylikdüzü Ofisi",
    lines: ["Kavaklı Mahallesi, İstanbul Caddesi", "No: 21 Beylikdüzü / İstanbul"],
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
    lines: ["info@turkiyebilisim.com.tr", "destek@turkiyebilisim.com.tr", "satis@turkiyebilisim.com.tr"],
    href: "mailto:info@turkiyebilisim.com.tr",
  },
  {
    icon: Clock3,
    title: "Çalışma Düzeni",
    lines: ["Hafta içi operasyon desteği", "Kritik talepler için 7/24 erişim"],
  },
];

export default function IletisimPage() {
  return (
    <main>
      <Header />
      <section className="section-shell min-h-screen pb-20 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#06B6D4]">Bize Ulaşın</span>
            <h1 className="mt-3 text-4xl font-extrabold text-white lg:text-5xl">İletişim</h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
              Teklif talebi, teknik ihtiyaçlarınız veya kurumsal iş birliği görüşmeleri için bizimle
              iletişime geçin. Ekibimiz talebinize en uygun şekilde geri dönüş sağlasın.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <ContactForm />

            <div className="space-y-5">
              <div className="panel-surface rounded-[28px] p-7">
                <span className="text-sm font-semibold uppercase tracking-widest text-[#06B6D4]">Kurumsal İletişim</span>
                <h2 className="mt-3 text-2xl font-bold text-white">Teklif ve destek süreçlerinizi birlikte planlayalım</h2>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Satın alma, idari işler ve BT ekipleri için ihtiyaç duyulan altyapı, güvenlik,
                  yedekleme ve teknik destek taleplerini tek noktadan değerlendiriyoruz.
                </p>
              </div>

              {contacts.map((contact) => (
                <div key={contact.title} className="panel-surface flex gap-4 rounded-[28px] p-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#06B6D4]/10">
                    <contact.icon className="h-6 w-6 text-[#06B6D4]" />
                  </div>
                  <div>
                    <div className="mb-2 font-semibold text-white">{contact.title}</div>
                    {contact.lines.map((line, index) =>
                      contact.href && index === 0 ? (
                        <a key={line} href={contact.href} className="block text-sm text-slate-400 transition-colors hover:text-[#06B6D4]">
                          {line}
                        </a>
                      ) : (
                        <div key={line} className="text-sm leading-7 text-slate-400">
                          {line}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <div className="mb-6 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-[#06B6D4]" />
              <h2 className="text-xl font-bold text-white">Konumumuz</h2>
            </div>
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-3">
              <div className="overflow-hidden rounded-[24px] border border-white/10" style={{ height: 420 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.082797834498!2d29.139390476422207!3d40.9358525238809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac6383a36ae81%3A0x40b51d758071ceb9!2sT%C3%BCrkiye%20Bili%C5%9Fim!5e0!3m2!1str!2str!4v1775466862778!5m2!1str!2str"
                  width="100%"
                  height="420"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Türkiye Bilişim Konum"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
