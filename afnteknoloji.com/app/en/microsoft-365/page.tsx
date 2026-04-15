import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight, Shield, Cloud, Users, Mail, HardDrive, Share2 } from "lucide-react";

const products = [
  {
    icon: Users,
    name: "Microsoft Teams",
    color: "#6264A7",
    desc: "A collaboration platform that unifies team communication, video meetings, file sharing, and project coordination.",
    features: ["Unlimited video meetings", "Team channels and chat", "File sharing and co-authoring", "Third-party app integrations", "Mobile app support"],
  },
  {
    icon: HardDrive,
    name: "OneDrive",
    color: "#0364B8",
    desc: "Access your files securely from anywhere with enterprise cloud storage.",
    features: ["1 TB personal cloud storage", "Automatic backup", "Version history", "Offline access", "Advanced sharing permissions"],
  },
  {
    icon: Share2,
    name: "SharePoint",
    color: "#038387",
    desc: "Powerful platform to build enterprise intranet, document management, and collaboration portals.",
    features: ["Customizable intranet portal", "Centralized document management", "Workflow automation", "Role-based access control", "Full Teams integration"],
  },
  {
    icon: Mail,
    name: "Exchange Online",
    color: "#0078D4",
    desc: "Reliable and scalable cloud solution for corporate email, calendar, and contact management.",
    features: ["50 GB mailbox", "Advanced spam and malware protection", "Shared calendars and contacts", "Mobile device management", "Email archiving"],
  },
  {
    icon: Cloud,
    name: "Azure Active Directory",
    color: "#0078D4",
    desc: "Centralize identity and access management for users and resources.",
    features: ["Single sign-on (SSO)", "Multi-factor authentication (MFA)", "Conditional access policies", "User lifecycle management", "Enterprise app integrations"],
  },
  {
    icon: Shield,
    name: "Microsoft 365 Security",
    color: "#D83B01",
    desc: "End-to-end security, compliance, and device management with Defender, Intune, and Purview.",
    features: ["Microsoft Defender for Business", "Device management with Intune", "Data loss prevention (DLP)", "Information protection labels", "Security score monitoring"],
  },
];

const plans = [
  {
    name: "Microsoft 365 Business Basic",
    price: "Affordable entry",
    color: "#0078D4",
    features: ["Exchange Online", "Teams", "SharePoint & OneDrive", "Web and mobile Office apps", "1 TB OneDrive storage"],
    recommended: false,
  },
  {
    name: "Microsoft 365 Business Standard",
    price: "Most popular plan",
    color: "#F5A623",
    features: ["Everything in Business Basic", "Desktop Office apps", "Teams webinar capability", "Bookings app", "Advanced security features"],
    recommended: true,
  },
  {
    name: "Microsoft 365 Business Premium",
    price: "Full protection",
    color: "#107C10",
    features: ["Everything in Business Standard", "Azure AD Premium P1", "Microsoft Intune", "Microsoft Defender for Business", "Azure Information Protection"],
    recommended: false,
  },
];

export const metadata = { title: "Microsoft 365 | AFN Technology" };

export default function Microsoft365EnglishPage() {
  return (
    <main className="bg-[#0A0E1A] text-white min-h-screen">
      <Header />

      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0078D4]/10 via-transparent to-[#F5A623]/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0078D4]/10 border border-[#0078D4]/20 text-[#0078D4] text-sm font-semibold mb-6">
              Microsoft Silver Partner
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Microsoft 365<br />
              <span className="text-gradient">Enterprise Solutions</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              As a Microsoft Silver Partner, AFN Technology provides the right Microsoft 365 license for your business and delivers
              deployment, configuration, and technical support services.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/en/iletisim" className="flex items-center gap-2 px-7 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all hover:shadow-xl hover:shadow-orange-500/30">
                Request a proposal <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/is-ortaklarimiz" className="flex items-center gap-2 px-7 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                Our Microsoft Partnership
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#080C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Authorized Sales", desc: "We sell official licenses as a Microsoft Silver Partner." },
              { title: "Fast Deployment", desc: "We complete tenant setup and migrations within 24-48 hours." },
              { title: "Data Security", desc: "We work with zero data loss guarantees during migrations." },
              { title: "24/7 Support", desc: "Continuous technical support for Microsoft 365." },
            ].map((item, i) => (
              <div key={i} className="gradient-border rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-[#0078D4]/20 flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-[#0078D4]" />
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Products & Services</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-4">Microsoft 365 Application Suite</h2>
            <p className="text-gray-400 max-w-xl mx-auto">We select, configure, and support Microsoft 365 applications based on your business needs.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.name} className="gradient-border rounded-2xl p-8 hover:border-[#F5A623]/30 transition-all group hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${p.color}20` }}>
                    <p.icon className="w-5 h-5" style={{ color: p.color }} />
                  </div>
                  <h3 className="font-bold text-white">{p.name}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">{p.desc}</p>
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: p.color }} />
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
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Licensing Plans</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-4">Choose the right plan for your business</h2>
            <p className="text-gray-400 max-w-xl mx-auto">All plans are offered as per-user monthly licenses. We help you select the best fit.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name}
                className={`gradient-border rounded-2xl p-8 relative transition-all hover:-translate-y-1 ${plan.recommended ? "border-[#F5A623]/40" : ""}`}>
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#F5A623] text-black text-xs font-bold rounded-full whitespace-nowrap">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: `${plan.color}20`, color: plan.color }}>
                    {plan.price}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mt-3 mb-6">{plan.name}</h3>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: plan.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/en/iletisim"
                  className="block text-center py-3 rounded-xl font-semibold transition-all"
                  style={{ backgroundColor: `${plan.color}20`, color: plan.color, border: `1px solid ${plan.color}30` }}>
                  Request a quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">How We Work</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-4">Microsoft 365 Deployment Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Analysis", desc: "We assess your current infrastructure and requirements." },
              { step: "02", title: "Licensing", desc: "We select the most suitable plan and provide licenses." },
              { step: "03", title: "Deployment", desc: "Tenant configuration, user migration, and integrations are completed." },
              { step: "04", title: "Training & Support", desc: "User training and 24/7 technical support begin." },
            ].map((s) => (
              <div key={s.step} className="gradient-border rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-[#F5A623]/30 mb-3">{s.step}</div>
                <h3 className="font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#080C18]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to move to Microsoft 365?</h2>
          <p className="text-gray-400 mb-8">Our experts analyze your needs and define the right plan and migration strategy.</p>
          <a href="/en/iletisim" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all hover:shadow-xl hover:shadow-orange-500/30">
            Get Free Consultation <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
