const items = [
  {
    title: "Sistem Danışmanlığı",
    content: "Kurumların rekabet gücü, teknolojiyi iş süreçlerinde etkin kullanmasıyla orantılıdır. Güçlü bir yapı için doğru sistem mimarisi, planlama ve uygulama desteği sağlıyoruz.",
  },
  {
    title: "BT Güvenlik Sistemleri Bakım & Destek",
    content: "BT Güvenlik Ürünleri ve Sistemleri Bakım/Destek hizmetimizle müşterilerin BT sistemlerinin sürekliliğini, veri bütünlüğünü ve güvenliğini koruyoruz.",
  },
  {
    title: "PC-Sunucu Bakım & Destek",
    content: "PC, Server ve çevre birimleri bakım/destek hizmetiyle müşterilerin BT altyapısında kesintisiz operasyon sağlıyoruz. Saha ve uzaktan destek seçenekleri mevcuttur.",
  },
  {
    title: "Yardım Masası",
    content: "Çağrı bazlı yürütülen tüm BT operasyonlarına ilişkin çağrı alma, yönlendirme, takip ve çözüm süreçlerini 7/24 profesyonel ekibimizle yönetiyoruz.",
  },
  {
    title: "Ağ ve Güvenlik Danışmanlığı",
    content: "Sürekli gelişen ağ teknolojileri için mimari tasarım, güvenlik duvarı yapılandırması, VPN kurulumu ve ağ optimizasyon hizmetleri sunuyoruz.",
  },
];

export default function ServicesAccordion() {
  return (
    <section id="hizmetler" className="py-24 bg-[#0A0E1A]">
      <style>{`
        details.acc-item { border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.03); margin-bottom: 10px; }
        details.acc-item summary { display: flex; align-items: center; justify-content: space-between; padding: 18px 20px; cursor: pointer; color: #fff; font-weight: 600; font-size: 15px; list-style: none; -webkit-tap-highlight-color: transparent; user-select: none; }
        details.acc-item summary::-webkit-details-marker { display: none; }
        details.acc-item summary::marker { display: none; }
        details.acc-item[open] summary { color: #F5A623; background: rgba(245,166,35,0.08); border-bottom: 1px solid rgba(255,255,255,0.06); }
        details.acc-item .acc-arrow { transition: transform 0.25s; flex-shrink: 0; color: #9ca3af; }
        details.acc-item[open] .acc-arrow { transform: rotate(180deg); color: #F5A623; }
        details.acc-item .acc-body { padding: 16px 20px; color: #9ca3af; font-size: 14px; line-height: 1.7; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Neler Yapıyoruz?</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-6">Destek ve <span className="text-gradient">Hizmetlerimiz</span></h2>
            <p className="text-gray-400 leading-relaxed mb-8">Kurumsal BT altyapınızı güçlendirmek ve dijital dönüşüm yolculuğunuzda yanınızda olmak için kapsamlı hizmetler sunuyoruz.</p>
            <div className="flex gap-8">
              <div><div className="text-3xl font-black text-[#F5A623]">500+</div><div className="text-sm text-gray-400 mt-1">Mutlu Müşteri</div></div>
              <div><div className="text-3xl font-black text-[#F5A623]">10+</div><div className="text-sm text-gray-400 mt-1">Yıl Deneyim</div></div>
              <div><div className="text-3xl font-black text-[#F5A623]">7/24</div><div className="text-sm text-gray-400 mt-1">Teknik Destek</div></div>
            </div>
          </div>

          <div>
            {items.map((item, i) => (
              <details key={i} className="acc-item" open={i === 0 || undefined}>
                <summary>
                  <span>{item.title}</span>
                  <span className="acc-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <div className="acc-body">{item.content}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
