import { Globe, Layers3, MousePointerClick, Smartphone } from "lucide-react";
import ServiceLanding from "@/components/ServiceLanding";

export const metadata = {
  title: "Web Tasarim ve Kurumsal Web Sitesi | AFN Medya",
  description: "Markanizi profesyonel gosteren, hizli ve guven veren kurumsal web sitesi tasarim hizmeti.",
};

export default function WebTasarimPage() {
  return (
    <ServiceLanding
      eyebrow="Web Tasarim"
      title="Markanizi dijitalde guclu gosteren kurumsal web siteleri tasarliyoruz."
      description="Bir web sitesi sadece gorunen bir sayfa degil, markanizin dijital vitrini ve ilk guven noktasi olmalidir. AFN Medya olarak hem estetik hem de kurumsal olarak guven veren, hizli acilan ve mobilde sorunsuz calisan web siteleri tasarliyoruz."
      heroNote="Sadece guzel gorunen degil, is yapan ve guven veren bir web deneyimi kuruyoruz."
      icon={Globe}
      benefits={[
        "Markanizin sektorune ve hedef kitlesine uygun ozel tasarim dili olustururuz.",
        "Mobil uyum, hiz ve kullanici deneyimini en bastan dogru kurariz.",
        "Sitenin sadece acilmasini degil, teklif ve iletisim uretmesini hedefleriz.",
      ]}
      sections={[
        {
          title: "Kurumsal gorunum",
          text: "Sitenizi ziyaret eden kisi ilk saniyelerde markanizin ne kadar guven verdigine karar verir. Bu nedenle renk, duzen, tipografi ve icerik akisini markaya uygun bir ciddiyetle kurguluyoruz.",
        },
        {
          title: "Kullanimi kolay yapi",
          text: "Karisik menuler ve daginik sayfalar yerine ziyaretcinin aradigi bilgiye hizli ulasacagi net ve sade bir deneyim tasarliyoruz.",
        },
        {
          title: "Donusum odakli alanlar",
          text: "Formlar, teklif alanlari, iletisim butonlari ve referans bloklari ile siteyi sadece tanitim degil, musteri kazanma araci haline getiriyoruz.",
        },
      ]}
      process={[
        "Markanizi, hedef kitlenizi ve is ihtiyacinizi dinliyoruz.",
        "Sayfa yapisini ve tasarim yonunu netlestiriyoruz.",
        "Tasarimi gelistirip mobil ve masaustu uyumunu kuruyoruz.",
        "Yayina almadan once son kontrolleri ve duzenlemeleri tamamliyoruz.",
      ]}
    />
  );
}
