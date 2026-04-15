import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnerBadges from "@/components/PartnerBadges";
import PartnerCards from "@/components/PartnerCards";
import MicrosoftServices from "@/components/MicrosoftServices";
import ProcessSection from "@/components/ProcessSection";
import VideoSection from "@/components/VideoSection";
import ServicesAccordion from "@/components/ServicesAccordion";
import TrustSection from "@/components/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import LogoCarousel from "@/components/LogoCarousel";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <PartnerBadges />
      <PartnerCards />
      <MicrosoftServices />
      <ProcessSection />
      <VideoSection />
      <ServicesAccordion />
      <TrustSection />
      <TestimonialsSection />
      <TeamSection />
      <FAQSection />
      <LogoCarousel />
      <CTASection />
      <Footer />
    </main>
  );
}
