"use client";

const logos = [
  "Adobe","Apple","Autodesk","Azure","Canon","Dell","Fortinet","Hikvision",
  "HP","Kaspersky","Kingston","Lenovo","Logitech","Microsoft","Qnap",
  "Samsung","Seagate","Sophos","Symantec","Trend Micro","Veeam","Vmware","WD","ZyXEL",
];

export default function LogoCarousel() {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-20 bg-[#080C18] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Partner Olduğumuz Markalar</span>
        <h2 className="text-3xl font-extrabold mt-3">Dünya Markalarıyla Çalışıyoruz</h2>
      </div>
      <div className="relative">
        <div className="flex animate-scroll gap-8 w-max">
          {doubled.map((logo, i) => (
            <div key={i}
              className="flex-shrink-0 w-36 h-20 glass rounded-xl flex items-center justify-center hover:border-[#F5A623]/40 transition-all group cursor-default">
              <span className="text-sm font-semibold text-gray-400 group-hover:text-[#F5A623] transition-colors text-center px-2">{logo}</span>
            </div>
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080C18] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080C18] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
