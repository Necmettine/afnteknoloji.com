import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Shield, Users, Award, Clock } from "lucide-react";

export const metadata = { title: "About Us | AFN Technology" };

const values = [
  {
    icon: Shield,
    title: "Reliability",
    desc: "A customer-first service mindset backed by more than 10+ years of experience.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "An experienced team of certified engineers and technical specialists.",
  },
  {
    icon: Award,
    title: "Partner Certifications",
    desc: "Authorized partnerships with Microsoft, Huawei, VMware, Veeam, and Fortinet.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    desc: "Continuous technical support to protect business continuity.",
  },
];

export default function EnglishAbout() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-20 bg-[#0A0E1A] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Who we are</span>
            <h1 className="text-4xl font-extrabold mt-3 mb-4">About Us</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              AFN Technology has been operating since 2008 in enterprise IT infrastructure, system security, and technology
              solutions, and is one of Turkey's leading IT service companies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We aim to deliver the most current and reliable IT solutions by keeping pace with a constantly changing
                technology landscape. Our core mission is to be a strategic partner in the digital transformation of
                enterprise organizations.
              </p>
              <p className="text-gray-400 leading-relaxed">
                From our offices in Maltepe and Beylikduzu, we serve Istanbul and all of Turkey. We provide 24/7 technical
                support to more than 500 enterprise customers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "2008", label: "Year Founded" },
                { val: "500+", label: "Enterprise Customers" },
                { val: "28+", label: "Partner Brands" },
                { val: "7/24", label: "Technical Support" },
              ].map((s) => (
                <div key={s.label} className="gradient-border rounded-2xl p-6 text-center">
                  <div className="text-3xl font-black text-[#F5A623]">{s.val}</div>
                  <div className="text-sm text-gray-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="glass rounded-2xl p-6 hover:border-[#F5A623]/30 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-[#F5A623]/10 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-[#F5A623]" />
                </div>
                <h3 className="font-bold text-white mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24">
            <div className="text-center mb-12">
              <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Authorized Partnerships</span>
              <h2 className="text-3xl font-bold text-white mt-3 mb-4">Our Certifications & Partner Status</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We are an authorized solution partner and certified reseller of leading global technology brands.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  brand: "Microsoft",
                  level: "Microsoft Partner",
                  desc: "Authorized partner for Microsoft 365, Azure, Windows Server, and Exchange solutions.",
                  color: "#00A4EF",
                  badge: "Partner",
                },
                {
                  brand: "Huawei",
                  level: "Huawei Partner",
                  desc: "Authorized distributor for Huawei Enterprise networking, server, and cloud infrastructure solutions.",
                  color: "#CF0A2C",
                  badge: "Enterprise Partner",
                },
                {
                  brand: "VMware",
                  level: "VMware Partner",
                  desc: "Certified solution partner for vSphere, vCenter, and NSX virtualization platforms.",
                  color: "#607078",
                  badge: "Solution Partner",
                },
                {
                  brand: "Veeam",
                  level: "Veeam Silver Partner",
                  desc: "Silver partner status for backup, replication, and disaster recovery solutions.",
                  color: "#007DB8",
                  badge: "Silver Partner",
                },
                {
                  brand: "Fortinet",
                  level: "Fortinet Partner",
                  desc: "Authorized reseller for FortiGate firewall, FortiAnalyzer, and FortiManager solutions.",
                  color: "#EE3124",
                  badge: "Authorized Reseller",
                },
                {
                  brand: "Zimbra",
                  level: "Zimbra Turkey Distributor",
                  desc: "Official distributor in Turkey for Zimbra enterprise email solutions.",
                  color: "#EC532B",
                  badge: "Official Distributor",
                },
              ].map((cert) => (
                <div key={cert.brand} className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-white/20 transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-black"
                      style={{ backgroundColor: cert.color + "20", color: cert.color }}>
                      {cert.brand.charAt(0)}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold border"
                      style={{ color: cert.color, borderColor: cert.color + "40", backgroundColor: cert.color + "15" }}>
                      {cert.badge}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#F5A623] transition-colors">{cert.brand}</h3>
                  <div className="text-xs font-semibold mb-3" style={{ color: cert.color }}>{cert.level}</div>
                  <p className="text-gray-500 text-sm leading-relaxed">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 text-center">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Official Certificate</span>
            <h2 className="text-3xl font-bold text-white mt-3 mb-4">Our Authorization Certificate</h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
              We deliver reliable service with our ISO/IEC 27001 authorization certificate issued by official authorities.
            </p>
            <div className="inline-block overflow-hidden max-w-md">
              <Image
                src="/iso-27001.jpg"
                alt="AFN Technology ISO 27001 Authorization Certificate"
                width={800}
                height={1100}
                className="w-full h-auto scale-[1.04] origin-center"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
