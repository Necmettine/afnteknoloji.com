import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hizmetler } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return Object.keys(hizmetler).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = hizmetler[slug];
  if (!item) return {};
  return { title: `${item.title} | AFN Teknoloji`, description: item.desc };
}

export default async function HizmetPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = hizmetler[slug];
  if (!item) notFound();

  const others = Object.entries(hizmetler).filter(([s]) => s !== slug).slice(0, 5);

  return (
    <main>
      <Header />
      <section className="pt-32 pb-20 bg-[#0A0E1A] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <a href="/hizmetlerimiz" className="text-[#F5A623] text-sm hover:underline">← Tüm Hizmetler</a>
          </div>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="text-5xl mb-6">{item.icon}</div>
              <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Hizmetlerimiz</span>
              <h1 className="text-4xl font-extrabold mt-2 mb-4">{item.title}</h1>
              <p className="text-xl text-gray-300 mb-8">{item.desc}</p>
              <div className="gradient-border rounded-2xl p-8 mb-8">
                <p className="text-gray-300 leading-relaxed text-lg">{item.content}</p>
              </div>
              <a href="/iletisim" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all hover:shadow-lg hover:shadow-orange-500/30">
                Bu Hizmet İçin Teklif Al <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4 text-lg">Diğer Hizmetlerimiz</h3>
              <div className="space-y-3">
                {others.map(([s, h]) => (
                  <a key={s} href={`/hizmetlerimiz/${s}`}
                    className="flex items-center gap-3 glass rounded-xl p-4 hover:border-[#F5A623]/30 transition-all group">
                    <span className="text-2xl">{h.icon}</span>
                    <span className="text-sm text-gray-300 group-hover:text-[#F5A623] transition-colors">{h.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
