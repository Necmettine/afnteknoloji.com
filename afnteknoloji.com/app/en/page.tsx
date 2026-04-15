import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSectionEn from "@/components/en/HeroSectionEn";
import PartnerCardsEn from "@/components/en/PartnerCardsEn";
import MicrosoftServicesEn from "@/components/en/MicrosoftServicesEn";
import VideoSectionEn from "@/components/en/VideoSectionEn";
import ServicesAccordionEn from "@/components/en/ServicesAccordionEn";
import TrustSectionEn from "@/components/en/TrustSectionEn";
import LogoCarouselEn from "@/components/en/LogoCarouselEn";
import CTASectionEn from "@/components/en/CTASectionEn";

export const metadata = { title: "AFN Technology | IT Support & Consultancy" };

export default function EnglishHome() {
  return (
    <main>
      <Header />
      <HeroSectionEn />
      <PartnerCardsEn />
      <MicrosoftServicesEn />
      <VideoSectionEn />
      <ServicesAccordionEn />
      <TrustSectionEn />
      <LogoCarouselEn />
      <CTASectionEn />
      <Footer />
    </main>
  );
}
