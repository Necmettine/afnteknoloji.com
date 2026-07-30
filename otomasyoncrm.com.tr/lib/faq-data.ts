// SSS içeriği — hem ana sayfadaki SSS bölümü hem de FAQPage JSON-LD
// bu diziden beslenir; içerik birebir aynı kalmalıdır.
export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "CRM otomasyonu tam olarak neyi otomatikleştirir?",
    answer:
      "Satış ekibinin her gün elle yaptığı tekrarlı adımları otomatikleştiriyoruz: web formundan veya telefondan gelen talebin CRM'de potansiyel müşteri kaydına dönüşmesi, teklifin şablondan üretilip PDF olarak gönderilmesi, teklif sonrası hatırlatma zincirinin kendiliğinden işlemesi, fırsat aşaması değiştiğinde ilgili kişiye görev açılması, sözleşme yenileme ve vade tarihlerinin önceden uyarı vermesi ve dönemsel satış raporunun belirlenen saatte e-postayla düşmesi. Amaç, satışçının zamanını veri girişine değil görüşmeye ayırmasıdır.",
  },
  {
    question: "Mevcut CRM'imiz varsa üzerine kurulabilir mi?",
    answer:
      "Evet. Çalışan bir CRM'iniz varsa onu değiştirmeye çalışmıyoruz; otomasyon katmanını mevcut sistemin üzerine kuruyoruz. Kullandığınız CRM API veya veritabanı erişimi veriyorsa kayıt açma, aşama güncelleme, görev atama ve rapor çekme işlemlerini oradan yürütürüz. API'si kapalı bir ürün kullanıyorsanız, hangi süreçlerin taşınmasının daha doğru olduğunu keşif toplantısında birlikte değerlendiriyoruz.",
  },
  {
    question: "Wolvox/Netsis ile entegre olur mu?",
    answer:
      "Evet. Akınsoft Wolvox ve Logo Netsis ile cari kart, bakiye, fatura ve tahsilat verisi seviyesinde çalışıyoruz. Kendi ürünümüz AfnCrm doğrudan Wolvox ERP veritabanı üzerinde çalışır; otomatik döviz kuru senkronu ve cari yaşlandırma raporu gibi işlevleri bu entegrasyondan besleniyor. Netsis tarafında da cari ve bakiye senkronu, sipariş/fatura durumu okuma senaryolarını kuruyoruz.",
  },
  {
    question: "Kaç kullanıcıdan itibaren mantıklı olur?",
    answer:
      "Otomasyonun getirisi kullanıcı sayısından çok tekrar sayısına bağlıdır. 3-4 kişilik bir satış ekibi bile ayda 50'nin üzerinde teklif çıkarıyorsa yatırım kısa sürede geri döner. Pratik eşiğimiz şudur: haftada birkaç saatinizi Excel güncellemeye, teklif kopyalamaya veya rapor derlemeye harcıyorsanız otomasyon mantıklıdır. 20+ kullanıcılı ekiplerde ise elle takip zaten sürdürülebilir olmaktan çıkar.",
  },
  {
    question: "Kurulum ne kadar sürer?",
    answer:
      "Tipik bir kurulum 3-6 hafta sürer. İlk hafta keşif ve mevcut satış sürecinin haritalanması, ikinci ve üçüncü hafta CRM yapılandırması ile veri aktarımı, dördüncü hafta entegrasyonlar ve otomasyon kurallarının devreye alınması, son aşamada da paralel kullanım ve ince ayar yapılır. Kapsam yalnızca teklif ve hatırlatma akışıyla sınırlıysa 2 haftada da bitirdiğimiz projeler oldu.",
  },
  {
    question: "Satış ekibi alışabilir mi, eğitim veriyor musunuz?",
    answer:
      "Evet, eğitim kurulum paketinin içindedir. Satış temsilcileri için 2 saatlik uygulamalı oturum, satış yöneticisi için ayrı bir raporlama ve pipeline oturumu düzenliyoruz. Ekranları sadeleştiriyoruz: bir satışçının günlük olarak dokunduğu alan sayısını mümkün olduğunca azaltıyoruz, çünkü benimsenmeyen CRM'in otomasyonu da çalışmaz. Devreye alma sonrası ilk 30 gün boyunca kullanım alışkanlıklarını izleyip düzeltme yapıyoruz.",
  },
  {
    question: "Verilerimiz nerede tutuluyor?",
    answer:
      "Karar sizindir. Kendi sunucunuzda veya veri merkezindeki sanal sunucunuzda barındırma (on-premise) ile Türkiye'de konumlu bulut barındırma seçeneklerinin ikisini de kuruyoruz. ERP verisiyle yakın çalışan kurumlar genellikle şirket içi barındırmayı tercih ediyor. AFN Teknoloji ISO 27001 bilgi güvenliği yönetim sistemi sertifikasına sahiptir; erişim yetkileri, yedekleme ve kayıt tutma süreçleri bu standarda göre işletilir.",
  },
  {
    question: "Excel'den veri aktarabilir miyiz?",
    answer:
      "Evet, mevcut Excel takip dosyalarınız aktarımın başlangıç noktasıdır. Müşteri listesi, açık teklifler, fırsatlar ve görüşme notları alan eşleştirmesi yapılarak toplu olarak aktarılır. Aktarım öncesinde mükerrer kayıt temizliği ve vergi numarası/ünvan üzerinden eşleştirme yapıyoruz, böylece aynı firma CRM'de iki kez açılmıyor. Aktarım sonrası doğrulama listesini sizinle birlikte kontrol ediyoruz.",
  },
];
