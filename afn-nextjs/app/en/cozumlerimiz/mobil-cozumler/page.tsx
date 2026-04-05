import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight, Smartphone, Shield, Wifi, Settings } from "lucide-react";

export const metadata = { title: "Mobile Solutions | AFN Technology" };

const solutions = [
  {
    icon: Shield,
    name: "Mobile Device Management (MDM)",
    color: "#0078D4",
    desc: "Manage enterprise mobile devices centrally with Microsoft Intune and other MDM platforms, enforce policies, and ensure security.",
    features: [
      "iOS, Android, and Windows device management",
      "Remote wipe capabilities",
      "App distribution and restrictions",
      "Device compliance policies",
      "Conditional access",
      "Corporate and personal data separation (BYOD)",
    ],
  },
  {
    icon: Wifi,
    name: "Mobile VPN and Secure Access",
    color: "#EE3124",
    desc: "Secure remote access to corporate resources from mobile devices with FortiClient VPN and ZTNA solutions.",
    features: [
      "SSL VPN mobile client",
      "Zero Trust Network Access (ZTNA)",
      "Device authentication",
      "Encrypted tunnel access",
      "Split tunneling configuration",
      "MFA integration",
    ],
  },
  {
    icon: Smartphone,
    name: "Mobile Application Management (MAM)",
    color: "#107C10",
    desc: "Manage corporate apps on personal devices while keeping personal data untouched and protected.",
    features: [
      "Microsoft 365 mobile app protection",
      "App-level VPN",
      "App data encryption",
      "Copy/paste restrictions",
      "Screenshot prevention",
      "Remote app wipe",
    ],
  },
  {
    icon: Settings,
    name: "Mobile Email and Communication",
    color: "#6264A7",
    desc: "Use Exchange Online and Microsoft Teams securely on mobile devices. Access enterprise email and communication anywhere.",
    features: [
      "Exchange ActiveSync configuration",
      "Outlook Mobile corporate policies",
      "Teams mobile security settings",
      "S/MIME email encryption",
      "Mobile calendar and contact sync",
      "Push notification management",
    ],
  },
];

export default function EnglishMobileSolutionsPage() {
  return (
    <main className="bg-[#0A0E1A] text-white min-h-screen">
      <Header />

      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0078D4]/8 via-transparent to-[#F5A623]/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0078D4]/10 border border-[#0078D4]/20 text-[#0078D4] text-sm font-semibold mb-6">
              Enterprise Mobility
            </span>
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              Enterprise<br />
              <span className="text-gradient">Mobile Solutions</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
              Manage employee mobile devices securely. Keep your workforce safe and productive everywhere with MDM, MAM,
              mobile VPN, and enterprise mobile app solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/en/iletisim" className="flex items-center gap-2 px-7 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all hover:shadow-xl hover:shadow-orange-500/25">
                Request a proposal <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/microsoft-365" className="flex items-center gap-2 px-7 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                Microsoft 365 Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#080C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="gradient-border rounded-2xl p-6">
              <div className="text-2xl font-black text-[#F5A623] mb-2">BYOD</div>
              <h3 className="font-bold text-white mb-2">Bring Your Own Device</h3>
              <p className="text-gray-400 text-sm">Allow employees to use personal devices securely for work. Personal data stays protected with MAM.</p>
            </div>
            <div className="gradient-border rounded-2xl p-6 border-[#F5A623]/30">
              <div className="text-2xl font-black text-[#F5A623] mb-2">COPE</div>
              <h3 className="font-bold text-white mb-2">Corporate Owned, Personal Enabled</h3>
              <p className="text-gray-400 text-sm">The company owns devices and employees use them for work and personal needs with full MDM control.</p>
            </div>
            <div className="gradient-border rounded-2xl p-6">
              <div className="text-2xl font-black text-[#F5A623] mb-2">COBO</div>
              <h3 className="font-bold text-white mb-2">Corporate Owned, Business Only</h3>
              <p className="text-gray-400 text-sm">Devices are locked for business use only. Ideal for kiosk mode, field teams, and dedicated tasks.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Solution Portfolio</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-4">Enterprise Mobile Security</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Full coverage from device management to app security, mobile VPN, and enterprise communication.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {solutions.map((s) => (
              <div key={s.name} className="gradient-border rounded-2xl p-8 hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${s.color}18` }}>
                    <s.icon className="w-6 h-6" style={{ color: s.color }} />
                  </div>
                  <h3 className="font-bold text-white">{s.name}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: s.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#080C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Implementation Process</h2>
          </div>
          <div className="grid sm:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Inventory & Analysis", desc: "We assess the current device fleet, OS distribution, and security requirements." },
              { step: "02", title: "Platform Selection", desc: "We select the best fit among Microsoft Intune, Jamf, or other MDM platforms." },
              { step: "03", title: "Policy Design", desc: "Security policies, app restrictions, and access rules are defined." },
              { step: "04", title: "Go-Live", desc: "We start with a pilot group, move to full rollout, and provide user training." },
            ].map((s) => (
              <div key={s.step} className="gradient-border rounded-2xl p-6 text-center">
                <div className="text-3xl font-black text-[#0078D4]/40 mb-2">{s.step}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{s.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Keep your mobile workforce secure</h2>
          <p className="text-gray-400 mb-8">Our experts define and implement a tailored mobile security strategy for your organization.</p>
          <a href="/en/iletisim" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all">
            Free Consultation <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
