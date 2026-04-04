export default function VideoSection() {
  return (
    <section className="py-20 bg-[#0A0E1A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Bizi Tanıyın</span>
          <h2 className="text-3xl font-extrabold mt-3">AFN Teknoloji Kurumsal Tanıtım</h2>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10"
          style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/D7tVieqVmeg"
            title="AFN Teknoloji Tanıtım Videosu"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
