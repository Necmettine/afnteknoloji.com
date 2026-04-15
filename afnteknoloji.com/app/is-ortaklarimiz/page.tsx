import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnerCards from "@/components/PartnerCards";
import LogoCarousel from "@/components/LogoCarousel";

export const metadata = { title: "İş Ortaklarımız | AFN Teknoloji" };

export default function IsOrtaklarimizPage() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-10 bg-[#0A0E1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Stratejik Ortaklıklar</span>
          <h1 className="text-4xl font-extrabold mt-3 mb-4">İş Ortaklarımız</h1>
          <p className="text-gray-400 max-w-xl mx-auto">Dünya'nın önde gelen teknoloji markaları ile kurduğumuz stratejik ortaklıklar sayesinde en güncel çözümleri sunuyoruz.</p>
        </div>
      </section>
      <PartnerCards />
      <LogoCarousel />
      <Footer />
    </main>
  );
}
