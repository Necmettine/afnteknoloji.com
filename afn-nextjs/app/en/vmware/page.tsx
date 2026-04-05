import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { CheckCircle, ArrowRight, Server, Cloud, Monitor, Shield } from "lucide-react";

export const metadata = {
  title: "VMware Solutions | AFN Technology",
  description: "AFN Technology is a VMware Enterprise Solution Partner providing sales, installation, configuration and technical support services for vSphere, vSAN, Horizon VDI and NSX.",
};

const products = [
  {
    icon: Server,
    name: "VMware vSphere",
    desc: "The world's most widely used virtualization platform. Move your physical servers to a virtual environment with ESXi hypervisor and vCenter Server.",
    features: ["ESXi Hypervisor", "vCenter Server centralized management", "vMotion (zero-downtime migration)", "High Availability (HA)", "Distributed Resource Scheduler (DRS)"],
  },
  {
    icon: Cloud,
    name: "VMware vSAN",
    desc: "Create a high-performance, hyper-converged shared storage infrastructure by pooling server disks together.",
    features: ["Software-defined storage", "All-Flash and hybrid configuration", "Data deduplication and compression", "Instant snapshot and replication", "Full vSphere integration"],
  },
  {
    icon: Monitor,
    name: "VMware Horizon (VDI)",
    desc: "Deliver a secure desktop experience to your employees from anywhere, on any device with virtual desktop infrastructure.",
    features: ["Virtual Desktop Infrastructure (VDI)", "Application virtualization", "Cloud desktop services", "PCoIP and Blast protocols", "Centralized desktop management"],
  },
  {
    icon: Shield,
    name: "VMware NSX",
    desc: "Apply micro-segmentation, distributed firewall and network automation with a software-defined networking and security platform.",
    features: ["Micro-segmentation", "Distributed firewall", "VPN and load balancing", "Network automation", "Zero Trust security architecture"],
  },
];

export default function VMwarePage() {
  return (
    <main className="bg-[#0A0E1A] text-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#607078]/20 via-transparent to-[#F5A623]/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#607078]/20 border border-[#607078]/30 text-gray-300 text-sm font-semibold mb-6">
                VMware Enterprise Solution Partner
              </span>
              <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                Virtualization<br />
                <span className="text-gradient">Powered by VMware</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                As a VMware Enterprise Solution Partner, AFN Technology provides sales, installation, configuration and technical support services for vSphere, vSAN, Horizon VDI and NSX products.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/en/iletisim" className="flex items-center gap-2 px-7 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all">
                  Get a Quote <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/cozumlerimiz/sanallastirma" className="flex items-center gap-2 px-7 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                  Virtualization Solutions
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white rounded-3xl p-12 shadow-2xl">
                <Image src="/logos/vmware.svg" alt="VMware" width={280} height={100} className="h-20 w-auto object-contain" unoptimized />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-[#080C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Hardware Independence", desc: "Virtualize your existing server investments without replacing them." },
              { title: "Cost Savings", desc: "Server consolidation reduces hardware and energy costs." },
              { title: "High Availability", desc: "Eliminate unplanned downtime with HA and vMotion." },
              { title: "Certified Team", desc: "Our VCP-certified engineers manage your project end-to-end." },
            ].map((item, i) => (
              <div key={i} className="gradient-border rounded-2xl p-6">
                <CheckCircle className="w-8 h-8 text-[#607078] mb-3" />
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Product Portfolio</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-4">VMware Solution Family</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Comprehensive VMware portfolio from server virtualization and software-defined networking to VDI and hyper-converged infrastructure.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {products.map((p) => (
              <div key={p.name} className="gradient-border rounded-2xl p-8 hover:border-[#607078]/50 transition-all hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#607078]/20 flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-gray-300" />
                  </div>
                  <h3 className="font-bold text-white">{p.name}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">{p.desc}</p>
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 text-gray-400" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-24 bg-[#080C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">VMware Migration Process</h2>
          </div>
          <div className="grid sm:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Your existing physical infrastructure is analyzed and virtualization compatibility is assessed." },
              { step: "02", title: "Design", desc: "Capacity planning, cluster architecture and licensing plan are prepared." },
              { step: "03", title: "Migration", desc: "P2V (physical to virtual) migration is performed with zero data loss." },
              { step: "04", title: "Optimization", desc: "Performance monitoring, DRS and HA policies are configured." },
            ].map((s) => (
              <div key={s.step} className="gradient-border rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-[#607078]/40 mb-3">{s.step}</div>
                <h3 className="font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Let us kick off your virtualization project</h2>
          <p className="text-gray-400 mb-8">Get a free discovery report from our VMware-certified engineers.</p>
          <a href="/en/iletisim" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all">
            Free Discovery Request <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
