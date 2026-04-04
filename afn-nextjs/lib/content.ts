export const hizmetler: Record<string, { title: string; desc: string; content: string; icon: string }> = {
  "sistem-danismanligi": {
    title: "Sistem Danışmanlığı", icon: "⚙️",
    desc: "Kurumunuzun BT altyapısını güçlendirmek için stratejik sistem danışmanlığı hizmeti.",
    content: "Kurumların rekabet gücü, teknolojiyi iş süreçlerinde etkin kullanmasıyla orantılıdır. Güçlü bir yapı için doğru sistem mimarisi, planlama ve uygulama desteği sağlıyoruz. Mevcut altyapınızı analiz eder, ihtiyaçlarınıza uygun çözümler tasarlayıp hayata geçiriyoruz.",
  },
  "bt-guvenlik-sistemleri-bakim-destek": {
    title: "BT Güvenlik Sistemleri Bakım & Destek", icon: "🛡️",
    desc: "BT güvenlik sistemlerinizin kesintisiz çalışması için profesyonel bakım ve destek.",
    content: "BT Güvenlik Ürünleri ve Sistemleri Bakım/Destek hizmetimizle müşterilerin BT sistemlerinin sürekliliğini, veri bütünlüğünü ve güvenliğini koruyoruz. Firewall, IPS/IDS, anti-virüs ve güvenlik sistemlerinizin bakımını üstleniyoruz.",
  },
  "pc-sunucu-bakim-destek": {
    title: "PC-Sunucu Bakım & Destek", icon: "🖥️",
    desc: "PC, sunucu ve çevre birimleriniz için kapsamlı bakım ve destek hizmetleri.",
    content: "PC, Server ve çevre birimleri bakım/destek hizmetiyle müşterilerin BT altyapısında kesintisiz operasyon sağlıyoruz. Donanım arızaları, yazılım sorunları ve performans optimizasyonu konularında saha ve uzaktan destek veriyoruz.",
  },
  "yardim-masasi": {
    title: "Yardım Masası", icon: "📞",
    desc: "7/24 profesyonel yardım masası hizmetiyle tüm BT sorunlarınıza anında çözüm.",
    content: "Çağrı bazlı yürütülen tüm BT operasyonlarına ilişkin çağrı alma, yönlendirme, takip ve çözüm süreçlerini 7/24 profesyonel ekibimizle yönetiyoruz. SLA garantili destek hizmeti sunuyoruz.",
  },
  "ag-ve-guvenlik-danismanligi": {
    title: "Ağ ve Güvenlik Danışmanlığı", icon: "🌐",
    desc: "Kurumsal ağ altyapısı tasarımı ve güvenlik danışmanlığı hizmetleri.",
    content: "Sürekli gelişen ağ teknolojileri için mimari tasarım, güvenlik duvarı yapılandırması, VPN kurulumu ve ağ optimizasyon hizmetleri sunuyoruz. LAN/WAN tasarımından siber güvenliğe kadar kapsamlı danışmanlık sağlıyoruz.",
  },
  "ag-bakim-destek": {
    title: "Ağ Bakım & Destek", icon: "🔌",
    desc: "Ağ altyapınızın kesintisiz çalışması için proaktif bakım ve anlık destek.",
    content: "Switch, router, access point ve ağ altyapı bileşenlerinizin düzenli bakımı, konfigürasyonu ve sorun giderme hizmetlerini sağlıyoruz. Ağ performans izleme ve optimizasyon da hizmetlerimiz arasındadır.",
  },
  "yazilim-bakim-destek": {
    title: "Yazılım Bakım & Destek", icon: "💻",
    desc: "Kurumsal yazılımlarınız için güncelleme, bakım ve teknik destek hizmetleri.",
    content: "İşletim sistemleri, kurumsal uygulamalar ve özel yazılımlarınızın bakım, güncelleme ve destek hizmetlerini yürütüyoruz. Lisans yönetimi ve yazılım uyumluluk danışmanlığı da sunuyoruz.",
  },
  "olaganustu-durum-danismanligi": {
    title: "Olağanüstü Durum Danışmanlığı", icon: "🚨",
    desc: "İş sürekliliğinizi korumak için olağanüstü durum planlaması ve kurtarma stratejileri.",
    content: "Felaket kurtarma planlaması, iş sürekliliği stratejileri ve acil müdahale prosedürleri oluşturuyoruz. Veri kaybı ve sistem kesintisi riskini minimize etmek için kapsamlı DR çözümleri tasarlıyoruz.",
  },
  "isletim-ve-yonetim-hizmetleri": {
    title: "İşletim ve Yönetim Hizmetleri", icon: "📊",
    desc: "BT altyapınızın tüm işletim ve yönetim süreçlerini profesyonel ekibimize bırakın.",
    content: "Sunucu yönetimi, veritabanı işletimi, yedekleme operasyonları ve sistem izleme hizmetlerini üstleniyoruz. Managed IT Services modeliyle BT operasyonlarınızı ekibimiz yönetir, siz işinize odaklanırsınız.",
  },
};

export const cozumler: Record<string, { title: string; desc: string; content: string; icon: string }> = {
  "sanallastirma": {
    title: "Sanallaştırma", icon: "☁️",
    desc: "VMware tabanlı sanallaştırma çözümleriyle altyapı verimliliğinizi artırın.",
    content: "VMware Enterprise Solution Partner olarak sanallaştırma altyapısı tasarımı, kurulumu ve yönetimini gerçekleştiriyoruz. vSphere, vCenter, vSAN ve NSX çözümleriyle donanım maliyetlerinizi düşürürken performansı artırıyoruz.",
  },
  "veri-yedekleme-cozumleri": {
    title: "Veri Yedekleme Çözümleri", icon: "💾",
    desc: "Veeam Silver Partner olarak kurumsal veri yedekleme ve kurtarma çözümleri.",
    content: "Veeam Backup & Replication ile fiziksel ve sanal ortamlarınız için otomatik yedekleme, hızlı kurtarma ve felaket kurtarma çözümleri sunuyoruz. Bulut yedekleme entegrasyonu da sağlıyoruz.",
  },
  "veri-depolama-cozumleri": {
    title: "Veri Depolama Çözümleri", icon: "🗄️",
    desc: "SAN, NAS ve bulut depolama çözümleriyle verilerinizi güvenle saklayın.",
    content: "Kurumsal veri depolama ihtiyaçlarınız için SAN, NAS ve hibrit bulut depolama çözümleri tasarlıyor ve kuruyoruz. HP, Dell EMC, NetApp ve QNAP markalı çözümler sunuyoruz.",
  },
  "ag-ve-internet-guvenligi-cozumleri": {
    title: "Ağ ve İnternet Güvenliği", icon: "🔒",
    desc: "Fortinet tabanlı kapsamlı ağ ve internet güvenliği çözümleri.",
    content: "Fortigate Solution Partner olarak next-generation firewall, web filtreleme, IPS/IDS ve unified threat management çözümleri sunuyoruz. Ağınızı iç ve dış tehditlere karşı koruyoruz.",
  },
  "uzak-erisim-cozumleri": {
    title: "Uzak Erişim Çözümleri", icon: "🔑",
    desc: "Güvenli VPN ve uzak masaüstü çözümleriyle her yerden çalışın.",
    content: "SSL VPN, IPSec VPN ve Zero Trust Network Access çözümleriyle çalışanlarınızın kurumsal kaynaklara güvenli uzaktan erişimini sağlıyoruz.",
  },
  "video-konferans-cozumleri": {
    title: "Video Konferans Çözümleri", icon: "📹",
    desc: "Profesyonel video konferans sistemleriyle toplantılarınızı dijitalleştirin.",
    content: "Logitech, Poly ve Microsoft Teams Room çözümleriyle toplantı odalarınızı profesyonel video konferans sistemleriyle donatıyoruz.",
  },
  "sunucu-kurulum-ve-bakim": {
    title: "Sunucu Kurulum ve Bakım", icon: "🖥️",
    desc: "HP, Dell ve Lenovo sunucu kurulumu, bakımı ve performans optimizasyonu.",
    content: "Rack sunucu, tower sunucu ve blade sunucu sistemlerinin kurulumu, konfigürasyonu ve bakımını yapıyoruz. HP ProLiant, Dell PowerEdge ve Lenovo ThinkSystem markalı çözümlerde uzmanız.",
  },
  "yerel-alan-aglari-lan": {
    title: "Yerel Alan Ağları (LAN)", icon: "🔗",
    desc: "Kurumsal LAN altyapısı tasarımı, kurulumu ve yönetimi.",
    content: "Kurumsal yerel alan ağı tasarımı, yapısal kablolama, switch ve router konfigürasyonu hizmetleri sunuyoruz. HP Aruba, Cisco, Fortinet ve Huawei network çözümleri ile güvenilir LAN altyapısı kuruyoruz.",
  },
  "genis-alan-aglari-wan": {
    title: "Geniş Alan Ağları (WAN)", icon: "🌍",
    desc: "Şubelerinizi birbirine bağlayan güvenli ve hızlı WAN çözümleri.",
    content: "MPLS, SD-WAN ve VPN teknolojileriyle şubeleriniz arasında güvenli ve yüksek performanslı bağlantı sağlıyoruz. Fortinet ve Huawei SD-WAN çözümlerinde uzmanlığımızla ağ maliyetlerinizi optimize ediyoruz.",
  },
  "felaket-koruma-senaryolari": {
    title: "Felaket Koruma Senaryoları", icon: "🚨",
    desc: "İş sürekliliğinizi garantileyen felaket kurtarma planları ve çözümleri.",
    content: "Doğal afet, siber saldırı veya donanım arızası gibi senaryolara karşı kapsamlı felaket kurtarma planları hazırlıyoruz. RTO ve RPO hedeflerinize uygun DR çözümleri tasarlıyor ve test ediyoruz.",
  },
  "arsivleme": {
    title: "Arşivleme", icon: "📁",
    desc: "E-posta ve veri arşivleme çözümleriyle yasal uyumluluk sağlayın.",
    content: "E-posta arşivleme, dosya arşivleme ve yasal uyumluluk gerektiren veri saklama çözümleri sunuyoruz. Uzun süreli veri saklama ihtiyaçlarınız için maliyet etkin arşivleme sistemleri kuruyoruz.",
  },
  "5651-loglama": {
    title: "5651 Loglama", icon: "📋",
    desc: "5651 sayılı kanun kapsamında internet erişim log kayıt sistemleri.",
    content: "5651 sayılı Kanun kapsamında internet erişim kayıtlarının tutulması, saklanması ve raporlanması için log yönetim sistemleri kuruyoruz. Yasal yükümlülüklerinizi karşılamak için kapsamlı loglama çözümleri sunuyoruz.",
  },
  "yapisal-kablolama": {
    title: "Yapısal Kablolama", icon: "🔌",
    desc: "Cat6, Cat6a ve fiber optik yapısal kablolama sistemleri.",
    content: "Ofis, fabrika ve veri merkezi projelerinde Cat6, Cat6a, Cat7 ve fiber optik yapısal kablolama sistemleri tasarlıyor ve kuruyoruz. Panduit, CommScope ve Legrand markalı çözümler sunuyoruz.",
  },
  "zimbra-turkiye": {
    title: "Zimbra Türkiye", icon: "📧",
    desc: "Zimbra kurumsal e-posta çözümlerinde Türkiye yetkili distribütörü.",
    content: "AFN Teknoloji olarak Zimbra'nın Türkiye yetkili distribütörüyüz. Zimbra Collaboration Suite ile kurumsal e-posta, takvim, kişi yönetimi ve anlık mesajlaşma çözümleri sunuyoruz.",
  },
};
