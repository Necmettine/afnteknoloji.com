import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClipboardList, ShieldCheck, Timer, Wrench } from "lucide-react";

export const metadata = { title: "References | AFN Technology" };

const sectors = [
  { name: "Finance & Banking", count: "50+" },
  { name: "Healthcare", count: "40+" },
  { name: "Manufacturing & Industry", count: "80+" },
  { name: "Retail & E-commerce", count: "60+" },
  { name: "Public Sector & Municipalities", count: "30+" },
  { name: "Education", count: "45+" },
  { name: "Logistics", count: "35+" },
  { name: "Services", count: "100+" },
];

const caseStudies = [
  {
    title: "Disaster recovery deployment for a manufacturing company",
    challenge: "Reduce downtime risk and improve RTO targets",
    solution: "Veeam-based backup with secondary site replication",
    result: "Recovery time reduced from hours to minutes",
  },
  {
    title: "Security architecture transformation for a finance institution",
    challenge: "Performance and visibility issues in firewall rules",
    solution: "Fortinet NGFW segmentation and centralized log management",
    result: "Security incidents became detectable earlier",
  },
  {
    title: "Remote access standardization for a multi-site organization",
    challenge: "Multiple VPN solutions and fragmented identity infrastructure",
    solution: "Centralized identity management with secure remote access model",
    result: "User experience and operational control consolidated in one place",
  },
];

const processSteps = [
  { icon: ClipboardList, title: "Discovery", text: "Clarifying current infrastructure, risks, and goals" },
  { icon: Wrench, title: "Design and Implementation", text: "Architecture, planning, deployment, and documentation" },
  { icon: ShieldCheck, title: "Security and Compliance", text: "Policies, logging, backup, and process control" },
  { icon: Timer, title: "Sustainable Support", text: "SLA, ticket management, and continuous improvement" },
];

export default function EnglishReferences() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-20 bg-[#0A0E1A] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Our Customers</span>
            <h1 className="text-4xl font-extrabold mt-3 mb-4">References</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              With 500+ enterprise customer experience, we deliver lasting solutions across infrastructure, security, and operational continuity.
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
                  <span className="text-gray-300 font-semibold">Challenge:</span> {item.challenge}
                </p>
                <p className="text-sm text-gray-400 mb-2">
                  <span className="text-gray-300 font-semibold">Solution:</span> {item.solution}
                </p>
                <p className="text-sm text-gray-400">
                  <span className="text-gray-300 font-semibold">Result:</span> {item.result}
                </p>
                <div className="mt-4 text-xs text-gray-500">
                  Company names are not shared due to confidentiality.
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
            <h2 className="text-2xl font-bold mb-3">Join our reference list</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Let's clarify your needs together and share a tailored roadmap and proposal.
            </p>
            <a
              href="/en/iletisim"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
