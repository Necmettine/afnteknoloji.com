import { BadgeCheck, ClipboardCheck, Headset, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Enterprise trust focused approach",
    description: "We address infrastructure, security, backup, and business continuity needs in a single roadmap.",
  },
  {
    icon: BadgeCheck,
    title: "Brand and technology expertise",
    description: "We bring project and support experience across Microsoft, Huawei, VMware, Veeam, Fortinet, and Zimbra ecosystems.",
  },
  {
    icon: ClipboardCheck,
    title: "Process-driven delivery model",
    description: "We plan discovery, design, deployment, documentation, and support steps in measurable phases.",
  },
  {
    icon: Headset,
    title: "Post-sales ownership",
    description: "Beyond products, we provide operational continuity with support workflows, prioritization, and response discipline.",
  },
];

const proofPoints = [
  "500+ enterprise customer experience",
  "IT consulting and support since 2008",
  "24/7 technical support and request management",
  "Operations from Maltepe and Beylikduzu offices",
];

export default function TrustSectionEn() {
  return (
    <section className="bg-[#080C18] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#F5A623]">
              Why AFN Technology
            </span>
            <h2 className="mt-3 text-4xl font-extrabold text-white">
              Enterprise IT partner for project delivery and operational continuity
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-400">
              The most critical element of an IT consultancy website is not just listing technologies, but showing how you
              approach the organization. At AFN Technology, we take shared responsibility for planning, implementation, and
              sustaining the project.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {proofPoints.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-gray-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-[#F5A623]/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5A623]/10">
                  <pillar.icon className="h-6 w-6 text-[#F5A623]" />
                </div>
                <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
