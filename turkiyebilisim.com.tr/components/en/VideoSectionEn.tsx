import YouTubeFacade from "../YouTubeFacade";

export default function VideoSectionEn() {
  return (
    <section className="py-20 bg-[#0A0E1A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-[#06B6D4] text-sm font-semibold tracking-widest uppercase">Meet Us</span>
          <h2 className="text-3xl font-extrabold mt-3">Türkiye Bilişim Corporate Overview</h2>
        </div>
        <YouTubeFacade videoId="D7tVieqVmeg" title="Türkiye Bilişim Corporate Overview Video" />
      </div>
    </section>
  );
}
