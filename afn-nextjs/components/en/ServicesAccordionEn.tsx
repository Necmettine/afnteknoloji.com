const items = [
  {
    title: "System Consulting",
    content: "An organization's competitiveness depends on using technology effectively in business processes. We provide the right system architecture, planning, and implementation support to build a strong foundation.",
  },
  {
    title: "IT Security Systems Maintenance & Support",
    content: "With our maintenance and support services for IT security products and systems, we protect continuity, data integrity, and security of your IT environments.",
  },
  {
    title: "PC-Server Maintenance & Support",
    content: "We ensure uninterrupted operations for your IT infrastructure with PC, server, and peripheral maintenance and support. On-site and remote support options are available.",
  },
  {
    title: "Help Desk",
    content: "We manage request intake, routing, tracking, and resolution processes for all call-based IT operations with our 24/7 professional team.",
  },
  {
    title: "Network & Security Consulting",
    content: "We provide architecture design, firewall configuration, VPN setup, and network optimization services for evolving network technologies.",
  },
];

export default function ServicesAccordionEn() {
  return (
    <section id="services" className="py-24 bg-[#0A0E1A]">
      <style>{`
        details.acc-item { border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.03); margin-bottom: 10px; }
        details.acc-item summary { display: flex; align-items: center; justify-content: space-between; padding: 18px 20px; cursor: pointer; color: #fff; font-weight: 600; font-size: 15px; list-style: none; -webkit-tap-highlight-color: transparent; user-select: none; }
        details.acc-item summary::-webkit-details-marker { display: none; }
        details.acc-item summary::marker { display: none; }
        details.acc-item[open] summary { color: #F5A623; background: rgba(245,166,35,0.08); border-bottom: 1px solid rgba(255,255,255,0.06); }
        details.acc-item .acc-arrow { transition: transform 0.25s; flex-shrink: 0; color: #9ca3af; }
        details.acc-item[open] .acc-arrow { transform: rotate(180deg); color: #F5A623; }
        details.acc-item .acc-body { padding: 16px 20px; color: #9ca3af; font-size: 14px; line-height: 1.7; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">What we do</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-6">Support and <span className="text-gradient">Services</span></h2>
            <p className="text-gray-400 leading-relaxed mb-8">We deliver comprehensive services to strengthen your enterprise IT infrastructure and support your digital transformation journey.</p>
            <div className="flex gap-8">
              <div><div className="text-3xl font-black text-[#F5A623]">500+</div><div className="text-sm text-gray-400 mt-1">Happy Clients</div></div>
              <div><div className="text-3xl font-black text-[#F5A623]">10+</div><div className="text-sm text-gray-400 mt-1">Years Experience</div></div>
              <div><div className="text-3xl font-black text-[#F5A623]">7/24</div><div className="text-sm text-gray-400 mt-1">Technical Support</div></div>
            </div>
          </div>

          <div>
            {items.map((item, i) => (
              <details key={i} className="acc-item" open={i === 0 || undefined}>
                <summary>
                  <span>{item.title}</span>
                  <span className="acc-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <div className="acc-body">{item.content}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
