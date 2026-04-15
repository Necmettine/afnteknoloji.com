import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, CheckCircle, Award, Server, Database, Cloud } from "lucide-react";

export const metadata = {
  title: "Veeam Data Protection | AFN Technology",
  description: "AFN Technology is a Veeam Silver Partner offering enterprise data backup, replication and disaster recovery solutions.",
};

const features = [
  { icon: Shield, title: "Data Protection", desc: "Continuous backup and recovery solutions for physical, virtual and cloud environments." },
  { icon: Server, title: "Fast Recovery", desc: "Recover systems within minutes to meet your SLA requirements." },
  { icon: Database, title: "Backup Management", desc: "Manage your entire backup infrastructure from a single central console." },
  { icon: Cloud, title: "Cloud Integration", desc: "Seamless integration with Azure, AWS and other cloud platforms." },
];

const products = [
  {
    name: "Veeam Backup & Replication",
    desc: "Comprehensive backup, replication and recovery solution for virtual, physical and cloud environments.",
    tags: ["VMware", "Hyper-V", "AWS", "Azure"],
  },
  {
    name: "Veeam ONE",
    desc: "Monitor, report and optimize your IT infrastructure in real time.",
    tags: ["Monitoring", "Reporting", "Alerting"],
  },
  {
    name: "Veeam Backup for Microsoft 365",
    desc: "Protect your Exchange Online, SharePoint, OneDrive and Teams data.",
    tags: ["Exchange", "SharePoint", "Teams", "OneDrive"],
  },
  {
    name: "Veeam Backup for Nutanix AHV",
    desc: "Purpose-built backup solution for the Nutanix AHV virtualization platform.",
    tags: ["Nutanix", "AHV", "Enterprise"],
  },
];

export default function VeeamPage() {
  return (
    <main className="bg-[#0A0E1A] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#007DB8]/10 via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#007DB8]/10 border border-[#007DB8]/30 text-[#007DB8] text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Veeam Silver Partner
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Data Protection <span className="text-[#007DB8]">with Veeam</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            As AFN Technology, a Veeam Silver Partner, we provide enterprise data backup, replication and disaster recovery solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href="/en/iletisim" className="px-8 py-4 bg-[#007DB8] text-white font-bold rounded-xl hover:bg-[#0066a0] transition-all hover:shadow-lg hover:shadow-[#007DB8]/30">
              Get a Quote
            </a>
            <a href="/cozumlerimiz/veri-yedekleme-cozumleri" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-all">
              Backup Solutions
            </a>
          </div>
        </div>
      </section>

      {/* Silver Partner Badge */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#007DB8]/10 to-[#007DB8]/5 border border-[#007DB8]/20 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-[#007DB8]/20 flex items-center justify-center flex-shrink-0">
              <Award className="w-10 h-10 text-[#007DB8]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Veeam Silver Partner Status</h2>
              <p className="text-gray-400">
                AFN Technology is part of Veeam's official Silver Partner program. This status certifies top-level performance in technical competency, sales expertise and customer satisfaction. With our certified Veeam engineers, we design and implement the most suitable data protection strategy for your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Veeam?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-[#007DB8]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#007DB8]/15 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-[#007DB8]" />
                </div>
                <h3 className="text-white font-bold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Veeam Product Portfolio</h2>
          <p className="text-gray-400 text-center mb-12">We offer license sales, installation, configuration and technical support services as AFN Technology.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((p) => (
              <div key={p.name} className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-[#007DB8]/30 transition-colors group">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-[#007DB8] flex-shrink-0 mt-0.5" />
                  <h3 className="text-white font-bold text-lg group-hover:text-[#007DB8] transition-colors">{p.name}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 pl-8">{p.desc}</p>
                <div className="flex flex-wrap gap-2 pl-8">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#007DB8]/10 border border-[#007DB8]/20 text-[#007DB8] text-xs rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-[#007DB8]/10 to-[#007DB8]/5 border border-[#007DB8]/20 rounded-3xl p-12">
          <h2 className="text-3xl font-black text-white mb-4">Learn More About Veeam Solutions</h2>
          <p className="text-gray-400 mb-8">Our expert team will build the most suitable Veeam license and implementation plan for your needs.</p>
          <a href="/en/iletisim" className="inline-block px-10 py-4 bg-[#007DB8] text-white font-bold rounded-xl hover:bg-[#0066a0] transition-all hover:shadow-lg hover:shadow-[#007DB8]/30 text-lg">
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
