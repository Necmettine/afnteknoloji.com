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
    <section id="hizmetler" className="section-shell py-24">
      <style>{`
        details.acc-item { border-radius: 24px; overflow: hidden; border: 1px solid rgba(148,163,184,0.14); background: linear-gradient(180deg, rgba(12, 19, 34, 0.94), rgba(7, 12, 24, 0.9)); box-shadow: 0 18px 70px rgba(2, 8, 23, 0.22); margin-bottom: 14px; }
        details.acc-item summary { display: flex; align-items: center; justify-content: space-between; padding: 22px 26px; cursor: pointer; color: #fff; font-weight: 700; font-size: 16px; list-style: none; -webkit-tap-highlight-color: transparent; user-select: none; }
        details.acc-item summary::-webkit-details-marker { display: none; }
        details.acc-item summary::marker { display: none; }
        details.acc-item[open] summary { color: #67E8F9; background: rgba(6,182,212,0.08); border-bottom: 1px solid rgba(255,255,255,0.06); }
        details.acc-item .acc-arrow { transition: transform 0.25s; flex-shrink: 0; color: #9ca3af; }
        details.acc-item[open] .acc-arrow { transform: rotate(180deg); color: #06B6D4; }
        details.acc-item .acc-body { padding: 18px 26px 24px; color: #94a3b8; font-size: 15px; line-height: 1.9; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Üst satır: başlık solda, istatistikler sağda */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <span className="text-[#06B6D4] text-sm font-semibold tracking-widest uppercase">Neler Yapıyoruz?</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-4">Destek ve <span className="text-gradient">Hizmetlerimiz</span></h2>
            <p className="max-w-2xl leading-8 text-slate-400">Kurumsal BT altyapınızı güçlendirmek ve dijital dönüşüm yolculuğunuzda yanınızda olmak için kapsamlı hizmetler sunuyoruz.</p>
          </div>
          <div className="grid flex-shrink-0 gap-4 sm:grid-cols-3 lg:w-[440px]">
            <div className="panel-surface rounded-2xl px-5 py-4"><div className="text-3xl font-black text-[#06B6D4]">500+</div><div className="mt-1 text-sm text-slate-400">Mutlu müşteri</div></div>
            <div className="panel-surface rounded-2xl px-5 py-4"><div className="text-3xl font-black text-[#06B6D4]">10+</div><div className="mt-1 text-sm text-slate-400">Yıl deneyim</div></div>
            <div className="panel-surface rounded-2xl px-5 py-4"><div className="text-3xl font-black text-[#06B6D4]">7/24</div><div className="mt-1 text-sm text-slate-400">Teknik destek</div></div>
          </div>
        </div>

        {/* Alt alan: accordion öğeleri tam genişlikte */}
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
    </section>
  );
}
