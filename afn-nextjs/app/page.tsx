import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnerCards from "@/components/PartnerCards";
import MicrosoftServices from "@/components/MicrosoftServices";
import VideoSection from "@/components/VideoSection";
import ServicesAccordion from "@/components/ServicesAccordion";
import LogoCarousel from "@/components/LogoCarousel";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <PartnerCards />
      <MicrosoftServices />
      <VideoSection />
      <ServicesAccordion />
      <LogoCarousel />
      <CTASection />
      <Footer />
    </main>
  );
}
