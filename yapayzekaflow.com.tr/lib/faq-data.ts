// SSS içeriği — hem ana sayfadaki SSS bölümü hem de FAQPage JSON-LD
// bu diziden beslenir; içerik birebir aynı kalmalıdır.
export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "İş akışı otomasyonu nedir, hangi süreçler için uygundur?",
    answer:
      "İş akışı otomasyonu; bir talebin doğduğu andan kapandığı ana kadar geçtiği adımların (form, kontrol, onay, bilgilendirme, kayıt) yazılım tarafından yürütülmesidir. En çok fayda verdiği yerler; birden fazla departmanın sırayla dokunduğu, e-posta ve Excel üzerinden takip edilen, gecikmesi maliyet yaratan süreçlerdir: satın alma talebi, izin ve masraf onayı, personel giriş-çıkış işlemleri, sipariş ve reçete talepleri, gelen evrak kaydı, servis talebi yönlendirmesi, sözleşme yenileme takibi. Tek kişinin tek başına bitirdiği işler otomasyona uygun değildir; asıl kazanç, iş bir kişiden diğerine geçerken kaybolan zamanı ortadan kaldırmaktır.",
  },
  {
    question: "Mevcut ERP ve e-posta sistemimizle çalışır mı?",
    answer:
      "Evet. Akışları sıfırdan bir platforma taşımıyoruz; kullandığınız sistemlerin üzerine kuruyoruz. ERP tarafında (Netsis, Logo, SAP, Nebim, Akınsoft gibi) API varsa API üzerinden, yoksa veritabanına okuma yetkili bağlantı ya da hazırlanan görünümler/saklı yordamlar üzerinden entegre oluyoruz. E-posta tarafında Microsoft 365 / Exchange ve Google Workspace ile IMAP, Graph API veya SMTP üzerinden çalışıyoruz. Dosya paylaşımı için SharePoint ve ağ klasörleri, mesajlaşma için Teams bildirimleri destekleniyor. Hiçbir entegrasyon ERP'nizin veri modelini değiştirmez.",
  },
  {
    question: "Bir akış ne kadar sürede devreye girer?",
    answer:
      "Tek departmanı ilgilendiren ve tek onay adımı olan basit bir akış, keşif dahil 1-2 hafta içinde pilot olarak çalışmaya başlar. Birden fazla sistemle konuşan, çok kademeli onay içeren akışlarda süre genellikle 3-6 haftadır. Süreyi belirleyen asıl unsur yazılım değil, kurumun kendi süreç netliğidir: onay yetkilerinin kimde olduğu, hangi durumda hangi yolun izleneceği netse geliştirme hızlanır. Bu yüzden ilk adım her zaman kısa bir keşif çalışmasıdır ve mevcut süreci olduğu gibi haritalarız.",
  },
  {
    question: "Onay adımları esnek mi, sonradan değiştirebilir miyiz?",
    answer:
      "Onay zinciri koda gömülü değildir; kural olarak tanımlanır. Onaycı kişi, pozisyon, departman veya tutar aralığına göre belirlenebilir. Örneğin belirli bir tutarın altındaki talepler yalnızca birim yöneticisine, üzerindekiler ek olarak genel müdüre gider. Kişi izinde ya da işten ayrılmışsa vekâlet ve yönlendirme kuralları devreye girer. Bu kuralları yönetim ekranından güncelleyebilirsiniz; yeni bir sürüm yayınlamaya gerek kalmaz. Değişiklik yapıldığında eski talepler başladıkları kuralla tamamlanır, yeni talepler yeni kuralla ilerler.",
  },
  {
    question: "Akış hata verirse ne oluyor?",
    answer:
      "Hiçbir adım sessizce kaybolmaz. Her akış adımı yeniden denenebilir olacak şekilde tasarlanır; ERP'ye erişilemediğinde veya e-posta sunucusu yanıt vermediğinde adım kuyruğa alınır ve artan aralıklarla tekrar denenir. Tekrarlar da başarısız olursa iş 'hata' durumuna düşer, sorumlu kişiye ve sistem yöneticisine bildirim gider, talep bekleyenler listesinde görünür kalır. Aynı işin iki kez işlenmesini önlemek için her adım tekrar-güvenli (idempotent) yazılır; yani bir sipariş talebi ağ hatası yüzünden iki kez tetiklense bile tedarikçiye tek e-posta gider.",
  },
  {
    question: "Kim ne yaptı görebiliyor muyuz?",
    answer:
      "Evet, her akışın tam bir denetim kaydı tutulur. Talebi kimin açtığı, hangi tarihte hangi kullanıcının onayladığı veya reddettiği, red gerekçesi, sistemden okunan değerlerin o anki hali, gönderilen e-postanın alıcısı ve zamanı kayıt altına alınır. Kayıtlar sonradan düzenlenemez; yalnızca yeni hareket eklenir. Bu sayede 'bu talep neden 4 gün bekledi' sorusunun cevabı tahmine değil kayda dayanır. Denetim ve iç kontrol çalışmaları için dönemsel raporlar dışa aktarılabilir.",
  },
  {
    question: "Yapay zeka tam olarak nerede devreye giriyor?",
    answer:
      "Yapay zekayı akışın karar verici merkezi olarak değil, kural yazmanın zor olduğu dar noktalarda kullanıyoruz. Dört yerde belirgin fayda sağlıyor: gelen PDF veya taranmış belgeden alan okuma (fatura numarası, tarih, tutar, kalem satırları), serbest metinle gelen talebi doğru kategoriye ve doğru ekibe sınıflandırma, uzun yazışma ve açıklama metinlerini onaycı için birkaç satıra özetleme, bir talepte eksik veya çelişkili bilgiyi tespit edip talep sahibine geri sorma. Bunların hepsinde çıktı bir öneridir; tutar, onay ve tedarikçiye gönderim gibi bağlayıcı adımlar insan onayından geçer ve modelin ne önerdiği kayda yazılır.",
  },
  {
    question: "Küçük ekipler için de mantıklı mı?",
    answer:
      "Mantıklıdır, hatta çoğu zaman daha hızlı geri döner. Küçük ekiplerde süreç bilgisi tek kişinin başında durur; o kişi izne çıktığında akış durur. Otomasyon bu bilgiyi sistemin içine yazar. 10-15 kişilik bir şirkette bile satın alma onayı, izin talebi ve gelen evrak kaydı gibi üç akış, haftada birkaç saatlik takip yükünü ortadan kaldırır. Küçük ekiplerde tek bir akışla başlamayı öneriyoruz: en çok e-posta trafiği yaratan süreci seçip devreye alıyor, ölçtükten sonra diğerlerine geçiyoruz.",
  },
];
