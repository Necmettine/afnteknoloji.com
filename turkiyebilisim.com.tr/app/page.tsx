import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnerCards from "@/components/PartnerCards";
import MicrosoftServices from "@/components/MicrosoftServices";
import ServicesAccordion from "@/components/ServicesAccordion";
import TrustSection from "@/components/TrustSection";
import LogoCarousel from "@/components/LogoCarousel";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  alternates: { canonical: "https://turkiyebilisim.com.tr" },
};

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <PartnerCards />
      <MicrosoftServices />
      <ServicesAccordion />
      <TrustSection />
      <LogoCarousel />
      <CTASection />
      <Footer />
    </main>
  );
}
