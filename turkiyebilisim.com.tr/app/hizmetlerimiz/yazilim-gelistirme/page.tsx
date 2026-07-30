import { Code2, Database, Settings2, Workflow } from "lucide-react";
import ServiceLanding from "@/components/ServiceLanding";

export const metadata = {
  alternates: {
    canonical: "https://turkiyebilisim.com.tr/hizmetlerimiz/yazilim-gelistirme",
  },
  title: "Yazilim Gelistirme | Türkiye Bilişim",
  description: "Ihtiyaciniza uygun panel, otomasyon ve ozel yazilim gelistirme hizmeti.",
};

export default function YazilimGelistirmePage() {
  return (
    <ServiceLanding
      eyebrow="Yazilim Gelistirme"
      title="Isinizi hizlandiran, takip edilebilir ve size ozel yazilimlar gelistiriyoruz."
      description="Her isletmenin ihtiyaci ayni degildir. Bu nedenle Türkiye Bilişim olarak hazir kaliplarla sinirli kalmiyor; teklif yonetimi, operasyon takibi, yonetim panelleri ve ozel is akislarina uygun yazilim cozumleri gelistiriyoruz."
      heroNote="Ihtiyaciniza uygun, sade ama guclu yazilimlar ile surecinizi kolaylastiriyoruz."
      icon={Code2}
      benefits={[
        "Gereksiz karmasa olusturmadan ihtiyaca odakli moduller gelistiririz.",
        "Takip edilebilir, kullanimi kolay ve ekip icinde net isleyen paneller kurariz.",
        "Buyumeye uygun, sonradan gelistirilebilir altyapi mantigi ile ilerleriz.",
      ]}
      sections={[
        {
          title: "Ozel panel gelistirme",
          text: "Yonetim paneli, teklif ekrani, musteri takibi veya operasyon yonetimi gibi alanlari is akislariniza uygun olarak gelistirebiliriz.",
        },
        {
          title: "Surec otomasyonu",
          text: "Tekrarlayan isleri azaltan, veri toplama ve takip surecini kolaylastiran dijital akislar olusturuyoruz.",
        },
        {
          title: "Teknik guven ve duzen",
          text: "Yazilimi sadece calisacak sekilde degil, daha sonra yonetilebilecek ve gelistirilebilecek duzende kuruyoruz.",
        },
      ]}
      process={[
        "Ihtiyacinizi ve mevcut is akisinizi analiz ediyoruz.",
        "Yazilimin hangi ekranlardan ve hangi mantikla ilerleyecegini planliyoruz.",
        "Gelisim surecinde ara kontrollerle sistemi birlikte sekillendiriyoruz.",
        "Canli kullanim oncesi test, iyilestirme ve son teslim surecini tamamliyoruz.",
      ]}
    />
  );
}
