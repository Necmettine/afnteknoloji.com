import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { CheckCircle, ArrowRight, Server, Cloud, Database, Wifi, HardDrive, RefreshCw, GitBranch, Archive, LayoutGrid, Move } from "lucide-react";

export const metadata = {
  title: "Huawei Solutions | AFN Technology",
  description: "AFN Technology is a Huawei Elite Partner offering end-to-end smart infrastructure solutions including object storage, VM backup, on-premise migration and clustering.",
};

const services = [
  {
    icon: Database,
    name: "Object Storage (OBS)",
    color: "#CF0A2C",
    desc: "Store petabyte-scale unstructured data with Huawei OceanStor Pacific object storage. S3-compatible API simplifies cloud migration.",
    features: [
      "S3/OpenStack Swift API compatibility",
      "Unlimited scalable capacity",
      "Data deduplication and compression",
      "Multi-region data replication",
      "Lifecycle policies",
      "WORM (immutable storage) support",
    ],
  },
  {
    icon: HardDrive,
    name: "Virtual Machine Backup",
    color: "#0A6ECF",
    desc: "Application-consistent, full and incremental backup of virtual machines running on Huawei infrastructure. Complete protection with VMware and Hyper-V integration.",
    features: [
      "Application-consistent (VSS/quiesce) backup",
      "Full, incremental and differential backup",
      "VMware vSphere and Hyper-V integration",
      "Instant Recovery",
      "Backup verification and test environment",
      "Centralized backup management console",
    ],
  },
  {
    icon: Archive,
    name: "Bare Metal / Boot Backup",
    color: "#107C10",
    desc: "Back up the complete disk image of physical servers including the operating system. Restore systems within minutes after hardware failure or a cyber attack.",
    features: [
      "Full disk image including OS",
      "BMR (Bare Metal Recovery) support",
      "Restore to dissimilar hardware",
      "Recovery via bootable media (WinPE/Linux)",
      "Scheduled automated backups",
      "Encrypted backup transfer",
    ],
  },
  {
    icon: Move,
    name: "On-Premise Migration",
    color: "#F5A623",
    desc: "Migrate your existing physical or virtual infrastructure to the Huawei platform with minimal downtime. Expert migration service for P2V, V2V and V2P scenarios.",
    features: [
      "P2V (Physical → Virtual) migration",
      "V2V (Virtual → Virtual) platform migration",
      "Live migration (minimal downtime)",
      "Pre-migration compatibility analysis",
      "Rollback plan",
      "Post-migration performance validation",
    ],
  },
  {
    icon: GitBranch,
    name: "Cluster Solutions",
    color: "#8B5CF6",
    desc: "Huawei server clustering solutions for critical business applications requiring high availability. A no-single-point-of-failure, uninterrupted service infrastructure.",
    features: [
      "Active-Active and Active-Passive clusters",
      "Automatic failover",
      "Heartbeat and quorum disk management",
      "Oracle RAC, SQL Server FCI support",
      "Geo-distributed cluster (Geo-Cluster)",
      "Cluster health monitoring and alerting",
    ],
  },
  {
    icon: Server,
    name: "FusionServer Servers",
    color: "#CF0A2C",
    desc: "Carry enterprise workloads with rack, blade and high-density server models. Wide range of models with Intel Xeon and Kunpeng processors.",
    features: [
      "Rack (1U/2U/4U) and Blade servers",
      "Intel Xeon Scalable & Kunpeng processors",
      "iBMC remote management",
      "NVMe and SAS/SATA storage options",
      "High availability (HA) design",
      "Intelligent cooling and power management",
    ],
  },
  {
    icon: Database,
    name: "OceanStor Storage",
    color: "#0A6ECF",
    desc: "Low latency, high IOPS and enterprise-grade reliability for critical workloads with all-flash and hybrid storage systems.",
    features: [
      "All-Flash NVMe and hybrid models",
      "NFS, CIFS, iSCSI, FC protocols",
      "Automatic storage tiering",
      "Instant snapshot and remote replication",
      "Thin provisioning",
      "Up to 5-nines guaranteed reliability",
    ],
  },
  {
    icon: Wifi,
    name: "CloudEngine Network Switches",
    color: "#107C10",
    desc: "High-capacity, software-defined CloudEngine switches for data center and campus networks. Future-ready network infrastructure with SDN and VXLAN support.",
    features: [
      "10G / 25G / 40G / 100G connectivity",
      "VXLAN and SDN support",
      "iMaster NCE automated management",
      "PoE+ and PoE++ support",
      "EVPN and BGP routing",
      "Zero-touch provisioning (ZTP)",
    ],
  },
  {
    icon: Cloud,
    name: "FusionCloud Private Cloud",
    color: "#8B5CF6",
    desc: "Experience AWS/Azure-like agility in your own data center. Virtual servers, VDI and cloud management platform with FusionSphere and FusionAccess.",
    features: [
      "FusionSphere virtualization platform",
      "FusionAccess virtual desktop (VDI)",
      "Resource pool and self-service portal",
      "Multi-tenant architecture",
      "OpenStack compatibility",
      "Hybrid cloud integration",
    ],
  },
  {
    icon: LayoutGrid,
    name: "HCI (Hyper-Converged Infrastructure)",
    color: "#F5A623",
    desc: "Combine compute, storage and networking in a single box with FusionCube. Easy deployment, centralized management and linear scaling.",
    features: [
      "FusionCube hyper-converged platform",
      "Compute + Storage + Network in one box",
      "Linear scaling by adding nodes",
      "Built-in NVMe storage pool",
      "Centralized management interface",
      "Small start from 3 nodes",
    ],
  },
  {
    icon: RefreshCw,
    name: "Disaster Recovery (DR)",
    color: "#0A6ECF",
    desc: "Secure your business continuity with Huawei DR solutions to meet your RPO and RTO targets in the event of a primary data center failure.",
    features: [
      "Synchronous and asynchronous replication",
      "RPO: seconds, RTO: minutes",
      "Automated DR drills and testing",
      "Geographic remote site replication",
      "Continuous protection with HyperReplication",
      "DR plan documentation and rehearsal",
    ],
  },
];

const stats = [
  { val: "Elite", label: "Partner Level" },
  { val: "HCIA/HCIP/HCIE", label: "Certification Levels" },
  { val: "100+", label: "Completed Projects" },
  { val: "24/7", label: "Technical Support" },
];

export default function HuaweiPage() {
  return (
    <main className="bg-[#0A0E1A] text-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#CF0A2C]/10 via-transparent to-[#0A6ECF]/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CF0A2C]/10 border border-[#CF0A2C]/20 text-[#CF0A2C] text-sm font-semibold mb-6">
                Huawei Elite Partner
              </span>
              <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                End-to-End Smart<br />
                <span className="text-gradient">Infrastructure with Huawei</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                From object storage to bare metal backup, from on-premise migration to clustering solutions — we deliver the full Huawei enterprise portfolio with sales, installation and 24/7 maintenance support.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/en/iletisim" className="flex items-center gap-2 px-7 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all hover:shadow-xl hover:shadow-orange-500/25">
                  Get a Quote <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/en/iletisim" className="flex items-center gap-2 px-7 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                  Free Analysis
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white rounded-3xl p-12 shadow-2xl">
                <Image src="/logos/huawei.svg" alt="Huawei" width={280} height={100} className="h-20 w-auto object-contain" unoptimized />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#080C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="gradient-border rounded-2xl p-6 text-center">
                <div className="text-2xl font-black text-[#CF0A2C] mb-1">{s.val}</div>
                <div className="text-sm text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Our Services</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-4">Huawei Solutions We Offer</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We serve across the entire Huawei ecosystem — from hardware sales and software licensing to project design and 24/7 maintenance support.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.name}
                className="gradient-border rounded-2xl p-7 hover:-translate-y-1 transition-all group"
                style={{ borderColor: `${s.color}15` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${s.color}18` }}>
                    <s.icon className="w-6 h-6" style={{ color: s.color }} />
                  </div>
                  <h3 className="font-bold text-white leading-tight">{s.name}</h3>
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

      {/* Project Process */}
      <section className="py-24 bg-[#080C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">How We Work</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-4">Our Project Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Discovery & Analysis", desc: "We assess the current infrastructure, business requirements and growth targets." },
              { step: "02", title: "Solution Design", desc: "A tailored Huawei architecture, capacity plan and cost analysis are prepared." },
              { step: "03", title: "Proposal & Approval", desc: "A detailed technical and commercial proposal is submitted and the project plan is finalized." },
              { step: "04", title: "Installation & Commissioning", desc: "Our certified engineers complete installation, configuration and integration." },
              { step: "05", title: "Maintenance & Support", desc: "24/7 monitoring, proactive maintenance and priority incident response." },
            ].map((s) => (
              <div key={s.step} className="gradient-border rounded-2xl p-5 text-center">
                <div className="text-3xl font-black text-[#CF0A2C]/30 mb-2">{s.step}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{s.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Let us design your Huawei infrastructure together</h2>
          <p className="text-gray-400 mb-8">
            Get a free technical consultation from our certified engineers on object storage, VM backup, migration or clustering.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/en/iletisim" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-all hover:shadow-xl hover:shadow-orange-500/25">
              Get a Quote <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:+902165725040" className="inline-flex items-center gap-2 px-8 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
              Call Now: +90 216 572 50 40
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
