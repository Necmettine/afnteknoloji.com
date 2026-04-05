import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cozumlerEn } from "@/lib/content-en";
import { ArrowRight } from "lucide-react";

export const metadata = { title: "Solutions | AFN Technology" };

const customLinks: Record<string, string> = {
  "microsoft-365": "/microsoft-365",
  "guvenlik-yazilimlari": "/guvenlik-yazilimlari",
  "veri-tekillestirme": "/en/cozumlerimiz/veri-tekillestirme",
  "mobil-cozumler": "/en/cozumlerimiz/mobil-cozumler",
};

export default function EnglishSolutions() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-20 bg-[#0A0E1A] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Technology solutions</span>
            <h1 className="text-4xl font-extrabold mt-3 mb-4">Solutions</h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              A broad portfolio spanning network security, backup, virtualization, and archiving.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(cozumlerEn).map(([slug, item]) => {
              const href = customLinks[slug] ?? `/en/cozumlerimiz/${slug}`;
              return (
                <a key={slug} href={href}
                  className="gradient-border rounded-2xl p-6 hover:border-[#F5A623]/50 transition-all hover:-translate-y-1 group">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h2 className="font-bold text-white mb-2 group-hover:text-[#F5A623] transition-colors">{item.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                  <span className="flex items-center gap-1 text-[#F5A623] text-sm font-semibold">
                    Details <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
