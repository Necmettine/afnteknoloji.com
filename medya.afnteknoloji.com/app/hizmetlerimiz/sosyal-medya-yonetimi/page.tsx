import { Megaphone, PenTool, Presentation, TrendingUp } from "lucide-react";
import ServiceLanding from "@/components/ServiceLanding";

export const metadata = {
  title: "Sosyal Medya Yonetimi | AFN Medya",
  description: "Icerik, tasarim, paylasim ve reklam takibiyle profesyonel sosyal medya yonetimi hizmeti.",
};

export default function SosyalMedyaYonetimiPage() {
  return (
    <ServiceLanding
      eyebrow="Sosyal Medya Yonetimi"
      title="Markanizin dijital gorunumunu duzenli, profesyonel ve etkili sekilde yonetiyoruz."
      description="Sosyal medya sadece paylasim yapmak degil; markanin gorunusunu, dilini ve guven algisini dogru yonetmektir. AFN Medya olarak icerik plani, tasarim duzeni, paylasim ritmi ve reklam takibi ile markaniza daha duzenli bir dijital durus kazandiriyoruz."
      heroNote="Daginik paylasimlar yerine tutarli, markaya yakisan ve dikkat ceken bir sosyal medya sistemi kuruyoruz."
      icon={Megaphone}
      benefits={[
        "Marka dilinize uygun icerik ve tasarim cizgisi olustururuz.",
        "Sayfanizin duzenli, profesyonel ve daha guven veren gorunmesini saglariz.",
        "Ihtiyaca gore reklam takibi ve performans yorumlari ile sureci destekleriz.",
      ]}
      sections={[
        {
          title: "Icerik plani",
          text: "Ne paylasilacagi, ne zaman paylasilacagi ve hangi mesajin one cikacagi rastgele degil, planli bir duzende ilerler.",
        },
        {
          title: "Gorsel duzen ve tasarim",
          text: "Sayfanizin ilk bakista daha profesyonel gorunmesi icin kartlar, kapaklar, metin dili ve gorsel akisi uyumlu hale getirilir.",
        },
        {
          title: "Reklam ve takip",
          text: "Gerektiginde sosyal medya reklamlarinizi destekliyor, hangi icerigin daha iyi sonuc verdigini yorumlayarak sureci guclendiriyoruz.",
        },
      ]}
      process={[
        "Markanizi, sektorunuzu ve hedef kitlenizi analiz ediyoruz.",
        "Icerik basliklari ve gorsel yonu netlestiriyoruz.",
        "Paylasim takvimi ve tasarim akislarini olusturuyoruz.",
        "Sureci duzenli takip edip gerekirse reklam ve icerik yonunu guncelliyoruz.",
      ]}
    />
  );
}
