import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Bot, Layers3, Rocket, ScanSearch } from "lucide-react";

export const metadata = {
  title: "Hakkimizda | AFN Medya",
  description: "AFN Medya'nin yaklasimini, hizmet bakisini ve dijital proje anlayisini kesfedin.",
};

const values = [
  {
    icon: Layers3,
    title: "Parca parca degil, butunsel bakis",
    text: "Web sitesi, yazilim ve sosyal medya tarafini ayni marka deneyiminin parcalari olarak ele aliyoruz.",
  },
  {
    icon: ScanSearch,
    title: "Once analiz, sonra tasarim",
    text: "Isi sadece gorsel olarak degil, hedef kitle, algi ve donusum mantigi uzerinden de planliyoruz.",
  },
  {
    icon: Bot,
    title: "Teknolojik gorunum, kolay kullanim",
    text: "Vay be dedirten hissi kurarken ziyaretciyi yormayan sade ve anlasilir bir deneyim birakiyoruz.",
  },
  {
    icon: Rocket,
    title: "Yayina alinabilir cozumler",
    text: "Sadece fikir uretmiyor, projeyi gercekten hayata gecirilecek net bir sisteme donusturuyoruz.",
  },
];

export default function HakkimizdaPage() {
  return (
    <main className="bg-[#06101d]">
      <Header />

      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">Biz Kimiz</p>
              <h1 className="mt-4 font-display text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">
                Dijital tarafta markalari daha guclu, daha temiz ve daha profesyonel gostermek icin calisiyoruz.
              </h1>
              <p className="mt-6 text-base leading-8 text-white/66">
                AFN Medya, AFN Teknoloji'nin medya ve dijital uretim tarafinda konumlanan ayri yapisidir. Burada odagimiz;
                guven veren web deneyimleri, ihtiyaca gore sekillenen yazilimlar ve markayi one tasiyan sosyal medya
                yonetimidir.
              </p>
              <p className="mt-4 text-base leading-8 text-white/66">
                Hedefimiz sadece guzel bir sayfa cikarmak degil. Ziyaretciye ne yapildigini hizli anlatan, profesyonel his
                veren ve iletisime gecmeyi kolaylastiran bir sistem kurmak.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { value: "3", label: "Ana hizmet kolu" },
                { value: "1", label: "Net medya markasi" },
                { value: "24/7", label: "Hizli geri donus disiplini" },
                { value: "100%", label: "Markaya ozel kurgu" },
              ].map((item) => (
                <div key={item.label} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                  <p className="text-4xl font-black text-[var(--accent)]">{item.value}</p>
                  <p className="mt-2 text-sm text-white/62">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-4">
            {values.map((value) => (
              <article key={value.title} className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/14 text-[var(--accent)]">
                  <value.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-black text-white">{value.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/62">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
