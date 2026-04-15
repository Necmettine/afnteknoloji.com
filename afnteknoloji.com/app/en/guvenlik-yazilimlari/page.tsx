import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Eye, Zap, Lock } from "lucide-react";

export const metadata = {
  title: "Security Software | EDR & XDR Solutions | AFN Technology",
  description: "Kaspersky and Bitdefender EDR & XDR endpoint security solutions. Sales, installation and support from AFN Technology.",
};

const brands = [
  {
    name: "Kaspersky",
    badge: "Authorized Sales & Support",
    desc: "Monitor and protect your entire attack surface — from endpoints to network traffic, email to cloud workloads — on a single platform with Kaspersky XDR and EDR solutions.",
    products: [
      {
        icon: Shield,
        name: "Kaspersky EDR Optimum",
        desc: "Machine learning-based endpoint threat detection and response platform designed for SMBs and mid-sized businesses.",
        features: [
          "Behavior-based threat detection",
          "Automated incident response (playbook)",
          "Root Cause Analysis",
          "Suspicious process and file isolation",
          "MITRE ATT&CK framework mapping",
          "Centralized management console (KSC)",
        ],
      },
      {
        icon: Eye,
        name: "Kaspersky XDR Expert",
        desc: "Extended platform that combines endpoint, network, email and cloud telemetry to detect APTs and advanced threats at an early stage.",
        features: [
          "Multi-vector correlation engine",
          "Threat Intelligence integration (TIP)",
          "SIEM/SOAR integration support",
          "Advanced threat hunting workflows",
          "Attack graph visualization",
          "Custom detection rule editor",
        ],
      },
      {
        icon: Lock,
        name: "Kaspersky Endpoint Security",
        desc: "Traditional but powerful endpoint protection with next-generation antivirus, firewall, web control and application control modules.",
        features: [
          "Next-generation antivirus engine",
          "Integrated host firewall",
          "Application, web and device control",
          "Vulnerability scanner",
          "Data encryption (FDE/FLE)",
          "Centralized policy management",
        ],
      },
    ],
  },
  {
    name: "Bitdefender",
    badge: "Authorized Partner",
    desc: "Protect your entire organization from a single console with Bitdefender's award-winning prevention, detection and response technologies.",
    products: [
      {
        icon: Zap,
        name: "Bitdefender GravityZone EDR",
        desc: "Cloud-native EDR solution offering real-time visibility and automated response against endpoint threats.",
        features: [
          "AI-powered threat detection",
          "Automatic quarantine and remediation",
          "Incident timeline visualization",
          "Process behavior monitoring",
          "Integrated threat intelligence",
          "GravityZone cloud management",
        ],
      },
      {
        icon: Eye,
        name: "Bitdefender XDR",
        desc: "Extended detection and response platform that integrates endpoint, network, cloud and identity telemetry for comprehensive threat visibility.",
        features: [
          "Cross-layer threat correlation",
          "Identity and access anomaly detection",
          "Cloud workload protection",
          "Automated attack story generation",
          "Guided response playbooks",
          "SIEM integration",
        ],
      },
      {
        icon: Shield,
        name: "Bitdefender Business Security Enterprise",
        desc: "Comprehensive protection suite that combines advanced threat prevention, risk analytics and patch management for enterprises.",
        features: [
          "HyperDetect pre-execution analysis",
          "Sandbox Analyzer (detonation)",
          "Network Attack Defense",
          "Risk score dashboard",
          "Patch Management module",
          "Full Disk Encryption",
        ],
      },
    ],
  },
];

const whyAfn = [
  { title: "Certified Technical Team", desc: "Our engineers hold vendor-certified training on Kaspersky and Bitdefender platforms." },
  { title: "Needs Analysis Before Sales", desc: "We recommend the right product through infrastructure assessment — no overselling." },
  { title: "End-to-End Implementation", desc: "We manage installation, configuration, policy design and user training ourselves." },
  { title: "Post-Sale Support", desc: "We provide SLA-backed support after project delivery, including emergency response." },
  { title: "Single Point of Contact", desc: "You communicate with us; we handle vendor processes, licenses and escalations." },
  { title: "Hybrid Environment Support", desc: "We deliver solutions in on-premise, cloud or hybrid environments." },
];

export default function SecuritySoftwarePage() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-20 bg-[#0A0E1A] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="text-center mb-20">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Security Software</span>
            <h1 className="text-4xl lg:text-5xl font-extrabold mt-3 mb-6">
              EDR & XDR Solutions<br />
              <span className="text-[#F5A623]">Next-Generation Security</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Kaspersky and Bitdefender EDR & XDR solutions: we provide sales, installation, configuration and ongoing technical support.
            </p>
          </div>

          {/* Brands */}
          {brands.map((brand) => (
            <div key={brand.name} className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-extrabold text-white">{brand.name}</h2>
                <span className="px-3 py-1 bg-[#F5A623]/10 border border-[#F5A623]/30 text-[#F5A623] text-xs font-bold rounded-full">
                  {brand.badge}
                </span>
              </div>
              <p className="text-gray-400 mb-8 max-w-3xl">{brand.desc}</p>
              <div className="grid md:grid-cols-3 gap-6">
                {brand.products.map((product) => (
                  <div key={product.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#F5A623]/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-[#F5A623]/10 flex items-center justify-center mb-4">
                      <product.icon className="w-6 h-6 text-[#F5A623]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{product.desc}</p>
                    <ul className="space-y-2">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="text-[#F5A623] mt-0.5">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Why AFN */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 mb-16">
            <h2 className="text-2xl font-extrabold text-white text-center mb-2">Why AFN Technology?</h2>
            <p className="text-gray-400 text-center mb-8">Our approach to security software projects</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyAfn.map((item) => (
                <div key={item.title} className="bg-white/5 rounded-xl p-5">
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Get a Quote?</h2>
            <p className="text-gray-400 mb-8">Contact us for detailed information about Kaspersky or Bitdefender solutions.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/en/iletisim"
                className="px-8 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all">
                Request a Quote
              </a>
              <a href="tel:+902165725040"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:border-[#F5A623]/30 transition-all">
                +90 216 572 50 40
              </a>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}
