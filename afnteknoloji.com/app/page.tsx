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
import FAQSchema from "@/components/FAQSchema";
import LogoCarousel from "@/components/LogoCarousel";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AFN Teknoloji | Kurumsal IT Destek, Siber Güvenlik ve BT Altyapı Çözümleri",
  description:
    "İstanbul merkezli AFN Teknoloji; kurumsal IT destek, yerinde bakım, sunucu kurulumu, siber güvenlik, Microsoft 365, VMware ve Veeam çözümleri ile 500+ firmaya 7/24 hizmet verir.",
  alternates: {
    canonical: "https://afnteknoloji.com",
    languages: { tr: "https://afnteknoloji.com", en: "https://afnteknoloji.com/en" },
  },
};

export default function Home() {
  return (
    <main>
      <FAQSchema />
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
