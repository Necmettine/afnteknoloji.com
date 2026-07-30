import YouTubeFacade from "./YouTubeFacade";

export default function VideoSection() {
  return (
    <section className="py-20 bg-[#0A0E1A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Bizi Tanıyın</span>
          <h2 className="text-3xl font-extrabold mt-3">AFN Teknoloji Kurumsal Tanıtım</h2>
        </div>
        <YouTubeFacade videoId="D7tVieqVmeg" title="AFN Teknoloji Tanıtım Videosu" />
      </div>
    </section>
  );
}
