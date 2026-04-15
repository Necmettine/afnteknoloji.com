import Image from "next/image";

export default function CertificateSection() {
  return (
    <section className="py-20 px-4 bg-[#0A0E1A]">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Resmi Belge</span>
        <h2 className="text-3xl font-bold text-white mt-3 mb-4">Yetki Belgemiz</h2>
        <p className="text-gray-400 mb-10">
          Resmi makamlar tarafından düzenlenen yetki belgemiz ile güvenilir hizmet sunuyoruz.
        </p>
        <div className="inline-block rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 hover:border-[#F5A623]/30 transition-all">
          <Image
            src="https://afnteknoloji.com/wp-content/uploads/2023/02/Scan_20260314_121009-scaled.jpg"
            alt="AFN Teknoloji Yetki Belgesi"
            width={800}
            height={1100}
            className="w-full max-w-2xl h-auto"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
