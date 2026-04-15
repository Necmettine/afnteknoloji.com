import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClipboardList, ShieldCheck, Timer, Wrench } from "lucide-react";

export const metadata = { title: "Referanslarimiz | AFN Teknoloji" };

const sectors = [
  { name: "Finans & Bankacilik", count: "50+" },
  { name: "Saglik", count: "40+" },
  { name: "Uretim & Sanayi", count: "80+" },
  { name: "Perakende & E-ticaret", count: "60+" },
  { name: "Kamu & Belediye", count: "30+" },
  { name: "Egitim", count: "45+" },
  { name: "Lojistik", count: "35+" },
  { name: "Hizmet Sektoru", count: "100+" },
];

const caseStudies = [
  {
    title: "Uretim sektorunde felaket kurtarma kurulum projesi",
    challenge: "Kesinti riskini azaltmak ve RTO hedeflerini dusurmek",
    solution: "Veeam tabanli yedekleme + ikincil lokasyon replikasyon",
    result: "Kurtarma sureleri saatlerden dakikalara indirildi",
  },
  {
    title: "Finans kurumunda guvenlik mimarisi donusumu",
    challenge: "Firewall kurallarinda performans ve gorunurluk problemleri",
    solution: "Fortinet NGFW segmentasyon + merkezi log yonetimi",
    result: "Guvenlik olaylari daha erken tespit edilebilir hale geldi",
  },
  {
    title: "Cok lokasyonlu sirkette uzaktan erisim standardizasyonu",
    challenge: "Farkli VPN cozumleri ve daginik kimlik altyapisi",
    solution: "Merkezi kimlik yonetimi + guvenli uzak erisim modeli",
    result: "Kullanici deneyimi ve operasyonel kontrol tek noktada toplandi",
  },
];

const processSteps = [
  { icon: ClipboardList, title: "Kesif", text: "Mevcut altyapi, risk ve hedeflerin netlestirilmesi" },
  { icon: Wrench, title: "Tasarim ve Uygulama", text: "Mimari, planlama, kurulum ve dokumantasyon" },
  { icon: ShieldCheck, title: "Guvenlik ve Uyum", text: "Politika, loglama, yedekleme ve surec kontrolu" },
  { icon: Timer, title: "Surdurulebilir Destek", text: "SLA, ticket yonetimi ve surekli iyilestirme" },
];

export default function ReferanslarimizPage() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-20 bg-[#0A0E1A] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Musterilerimiz</span>
            <h1 className="text-4xl font-extrabold mt-3 mb-4">Referanslarimiz</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              500+ kurumsal musteri deneyimimizle altyapi, guvenlik ve operasyon surekliligi alanlarinda kalici cozumler sunuyoruz.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {sectors.map((sector) => (
              <div key={sector.name} className="gradient-border rounded-2xl p-6 text-center hover:border-[#F5A623]/40 transition-all">
                <div className="text-3xl font-black text-[#F5A623] mb-2">{sector.count}</div>
                <div className="text-sm text-gray-300 font-medium">{sector.name}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {caseStudies.map((item) => (
              <div key={item.title} className="glass rounded-2xl p-6 border border-white/10">
                <h2 className="text-lg font-bold text-white mb-3">{item.title}</h2>
                <p className="text-sm text-gray-400 mb-2">
                  <span className="text-gray-300 font-semibold">Zorluk:</span> {item.challenge}
                </p>
                <p className="text-sm text-gray-400 mb-2">
                  <span className="text-gray-300 font-semibold">Cozum:</span> {item.solution}
                </p>
                <p className="text-sm text-gray-400">
                  <span className="text-gray-300 font-semibold">Sonuc:</span> {item.result}
                </p>
                <div className="mt-4 text-xs text-gray-500">
                  Kurumsal gizlilik geregi firma isimleri paylasilmamaktadir.
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {processSteps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5A623]/10">
                  <step.icon className="h-5 w-5 text-[#F5A623]" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="glass rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-3">Siz de referanslarimiz arasina katilin</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Ihtiyaclarinizi birlikte netlestirelim, size ozel yol haritasi ve teklifimizi paylasalim.
            </p>
            <a
              href="/iletisim"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all"
            >
              Iletisime gec
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
