"use client";

import Image from "next/image";
import { Award } from "lucide-react";

const partners = [
  {
    name: "Microsoft",
    badge: "Silver Partner",
    logo: "https://cdn.simpleicons.org/microsoft/ffffff",
    color: "#00A4EF",
  },
  {
    name: "Huawei",
    badge: "Certified Partner",
    logo: "/logos/huawei.svg",
    color: "#FF0000",
    bgWhite: true,
  },
  {
    name: "VMware",
    badge: "Professional Partner",
    logo: "/logos/vmware.svg",
    color: "#607078",
    bgWhite: true,
  },
  {
    name: "Veeam",
    badge: "Silver Partner",
    logo: "/logos/veeam.svg",
    color: "#00B336",
    bgWhite: true,
  },
  {
    name: "Fortinet",
    badge: "Expert Partner",
    logo: "/logos/fortinet.svg",
    color: "#DA291C",
    bgWhite: true,
  },
];

export default function PartnerBadges() {
  return (
    <section className="py-16 bg-[#0A0E1A] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#F5A623]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5A623]/10 border border-[#F5A623]/20 rounded-full text-[#F5A623] text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Resmi Partner Statulerimiz
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Global Teknoloji Devlerinin{" "}
            <span className="text-gradient">Guvenilir Ortagi</span>
          </h2>
        </div>

        {/* Partner Badges Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative bg-[#0d1221] border border-white/5 rounded-2xl p-6 w-44 transition-all duration-300 hover:border-[#F5A623]/30 hover:shadow-[0_0_30px_rgba(245,166,35,0.1)] hover:-translate-y-1"
            >
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${partner.color}15 0%, transparent 70%)`,
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Logo */}
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                    partner.bgWhite ? "bg-white" : "bg-white/5"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={`h-10 w-auto object-contain ${
                      !partner.bgWhite ? "opacity-90" : ""
                    }`}
                  />
                </div>

                {/* Name */}
                <h3 className="text-white font-semibold text-sm mb-1">
                  {partner.name}
                </h3>

                {/* Badge */}
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: `${partner.color}20`,
                    color: partner.color,
                    border: `1px solid ${partner.color}40`,
                  }}
                >
                  {partner.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ISO Badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-white/[0.02] border border-white/5 rounded-2xl">
            <div className="w-14 h-14 rounded-xl bg-[#F5A623]/10 border border-[#F5A623]/20 flex items-center justify-center">
              <Award className="w-7 h-7 text-[#F5A623]" />
            </div>
            <div>
              <h4 className="text-white font-semibold">ISO 27001 Sertifikali</h4>
              <p className="text-gray-400 text-sm">
                Bilgi Guvenligi Yonetim Sistemi
              </p>
            </div>
            <div className="hidden sm:block h-10 w-px bg-white/10 mx-2" />
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-2xl font-bold text-gradient">%99.9</span>
              <span className="text-gray-400 text-sm">
                Uptime
                <br />
                Garantisi
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
