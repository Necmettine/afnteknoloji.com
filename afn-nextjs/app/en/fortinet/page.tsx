import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { CheckCircle, ArrowRight, Shield, Network, Lock, Eye } from "lucide-react";

export const metadata = {
  title: "Fortinet Solutions | AFN Technology",
  description: "AFN Technology is an authorized Fortinet solution partner offering FortiGate, FortiAnalyzer, FortiSwitch and FortiClient sales, installation and maintenance services.",
};

const products = [
  {
    icon: Shield,
    name: "FortiGate Firewall",
    desc: "The foundation of enterprise network security, FortiGate NGFW delivers IPS, application control, web filtering and VPN capabilities in a single device.",
    features: ["Next-Generation Firewall (NGFW)", "SSL/IPSec VPN", "Intrusion Prevention System (IPS)", "Application visibility and control", "High availability (HA) support"],
  },
  {
    icon: Eye,
    name: "FortiAnalyzer",
    desc: "A security management platform that centrally collects, analyzes and reports network security events.",
    features: ["Centralized log management", "Security event correlation", "Compliance reports", "Real-time threat visibility", "Long-term log archiving"],
  },
  {
    icon: Network,
    name: "FortiSwitch",
    desc: "An enterprise network switching solution that integrates with FortiGate and supports centralized management.",
    features: ["FortiLink integration", "VLAN and port security", "PoE+ support", "Centralized management", "High bandwidth"],
  },
  {
    icon: Lock,
    name: "FortiClient EMS",
    desc: "Endpoint security management system that centrally manages VPN, threat protection and device compliance control.",
    features: ["Zero Trust Network Access (ZTNA)", "Endpoint DLP", "Web filtering", "Application firewall", "Remote VPN management"],
  },
];

export default function FortinetPage() {
  return (
    <main className="bg-[#0A0E1A] text-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EE3124]/10 via-transparent to-[#F5A623]/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EE3124]/10 border border-[#EE3124]/20 text-[#EE3124] text-sm font-semibold mb-6">
                Fortinet Authorized Solution Partner
              </span>
              <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                Network Security<br />
                <span className="text-gradient">Powered by Fortinet</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                As an authorized Fortinet solution partner, AFN Technology provides sales, installation and maintenance services for FortiGate, FortiAnalyzer, FortiSwitch and FortiClient products.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/en/iletisim" className="flex items-center gap-2 px-7 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all">
                  Get a Quote <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/hizmetlerimiz/ag-ve-guvenlik-danismanligi" className="flex items-center gap-2 px-7 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                  Security Consulting
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white rounded-3xl p-12 shadow-2xl">
                <Image src="/logos/fortinet.svg" alt="Fortinet" width={280} height={100} className="h-20 w-auto object-contain" unoptimized />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fortinet */}
      <section className="py-16 bg-[#080C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Industry Leader", desc: "A leader in the Gartner Magic Quadrant for many consecutive years." },
              { title: "Integrated Platform", desc: "All products managed from a single screen with FortiOS." },
              { title: "High Performance", desc: "Wire-speed security with purpose-built ASIC processors." },
              { title: "Authorized Service", desc: "Installation and maintenance support from our certified team." },
            ].map((item, i) => (
              <div key={i} className="gradient-border rounded-2xl p-6">
                <CheckCircle className="w-8 h-8 text-[#EE3124] mb-3" />
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
            <h2 className="text-4xl font-extrabold mt-3 mb-4">Fortinet Solution Family</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Comprehensive Fortinet portfolio spanning network security, endpoint protection, log management and switching solutions.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {products.map((p) => (
              <div key={p.name} className="gradient-border rounded-2xl p-8 hover:border-[#EE3124]/30 transition-all hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EE3124]/10 flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-[#EE3124]" />
                  </div>
                  <h3 className="font-bold text-white">{p.name}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">{p.desc}</p>
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 text-[#EE3124]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 bg-[#080C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Our Fortinet Services</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Sales & Licensing", desc: "We identify the most suitable FortiGate model and license package for your organization." },
              { title: "Installation & Configuration", desc: "We handle device installation, policy configuration and network integration." },
              { title: "Maintenance & Support", desc: "24/7 technical support and firmware updates through annual maintenance agreements." },
            ].map((s, i) => (
              <div key={i} className="gradient-border rounded-2xl p-6 text-center">
                <div className="text-3xl font-black text-[#EE3124]/30 mb-3">0{i + 1}</div>
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
          <h2 className="text-3xl font-extrabold mb-4">Let us strengthen your network security</h2>
          <p className="text-gray-400 mb-8">Our Fortinet experts will provide the solution best suited to your needs.</p>
          <a href="/en/iletisim" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all">
            Free Assessment <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
