import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight, Database, HardDrive, Zap, BarChart } from "lucide-react";

export const metadata = { title: "Data Deduplication | AFN Technology" };

const features = [
  {
    icon: Database,
    title: "Storage Savings",
    desc: "Detects duplicate data blocks to reduce storage usage by 60-95 percent.",
  },
  {
    icon: Zap,
    title: "Faster Backups",
    desc: "Because only new and changed blocks are transferred, backup and replication times drop significantly.",
  },
  {
    icon: HardDrive,
    title: "Bandwidth Optimization",
    desc: "Minimizes bandwidth consumption for data transfers over WAN.",
  },
  {
    icon: BarChart,
    title: "Cost Optimization",
    desc: "Store the same data volume with less storage hardware and lower cloud costs.",
  },
];

const useCases = [
  {
    title: "Backup Environments",
    desc: "Reduce backup pool sizes in Veeam and Commvault with inline or post-process deduplication.",
    items: ["Recurring VM snapshot data in daily full backups", "Identical attachments in email archives", "Unchanged blocks in database backups"],
  },
  {
    title: "Primary Storage",
    desc: "Store more data on the same hardware with inline deduplication in all-flash and hybrid systems (Huawei OceanStor, NetApp, and more).",
    items: ["OS disk deduplication in VDI environments", "Identical VM templates in Dev/Test", "Shared document servers"],
  },
  {
    title: "Object Storage",
    desc: "Large-scale archive deduplication in Huawei OceanStor Pacific and S3-compatible storage systems.",
    items: ["Media and content archives", "Log and telemetry data", "Long-term compliance archives"],
  },
];

export default function EnglishDeduplicationPage() {
  return (
    <main className="bg-[#0A0E1A] text-white min-h-screen">
      <Header />

      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/8 via-transparent to-blue-500/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-sm font-semibold mb-6">
            Data Optimization
          </span>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Data Deduplication<br />
            <span className="text-gradient">Solutions</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
            Dramatically reduce storage costs with deduplication technology that automatically detects duplicate data blocks
            and stores a single copy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/en/iletisim" className="flex items-center gap-2 px-7 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all hover:shadow-xl hover:shadow-orange-500/25">
              Request a proposal <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/cozumlerimiz/veri-depolama-cozumleri" className="flex items-center gap-2 px-7 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
              Storage Solutions
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#080C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { val: "60-95%", label: "Storage Savings" },
              { val: "10x", label: "Smaller Backup Size" },
              { val: "80%", label: "Lower WAN Bandwidth" },
              { val: "3x", label: "Faster Backup Speed" },
            ].map((s, i) => (
              <div key={i} className="gradient-border rounded-2xl p-6">
                <div className="text-3xl font-black text-[#F5A623] mb-1">{s.val}</div>
                <div className="text-sm text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Why Data Deduplication?</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Enterprise data typically contains 60-80 percent duplicate blocks. Store only one copy to unlock significant savings.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="gradient-border rounded-2xl p-6 hover:-translate-y-1 transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#F5A623]/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-[#F5A623]" />
                </div>
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#080C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Use Cases</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {useCases.map((u, i) => (
              <div key={i} className="gradient-border rounded-2xl p-8 hover:-translate-y-1 transition-all">
                <h3 className="font-bold text-white text-lg mb-3">{u.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{u.desc}</p>
                <ul className="space-y-2">
                  {u.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-[#F5A623] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Reduce your storage costs</h2>
          <p className="text-gray-400 mb-8">We provide a free analysis of how much you can save in your current infrastructure.</p>
          <a href="/en/iletisim" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all">
            Free Analysis <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
