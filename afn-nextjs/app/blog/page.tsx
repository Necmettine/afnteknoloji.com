import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const posts = [
  {
    slug: "kurumsal-bt-altyapisi-nasil-planlanir",
    title: "Kurumsal BT Altyapısı Nasıl Planlanır?",
    excerpt: "Küçük ve orta ölçekli işletmelerden büyük kurumlara kadar doğru BT altyapısı planlaması için dikkat edilmesi gereken kritik adımlar.",
    category: "BT Yönetimi",
    date: "15 Mart 2024",
    readTime: "5 dk",
  },
  {
    slug: "zero-trust-guvenlik-modeli",
    title: "Zero Trust Güvenlik Modeli Nedir?",
    excerpt: "Geleneksel ağ güvenliği anlayışını kökten değiştiren Zero Trust yaklaşımı ve kurumunuzda nasıl uygulayabileceğiniz.",
    category: "Siber Güvenlik",
    date: "28 Şubat 2024",
    readTime: "7 dk",
  },
  {
    slug: "microsoft-365-kurumsal-kullanim-ipuclari",
    title: "Microsoft 365 Kurumsal Kullanım İpuçları",
    excerpt: "Microsoft 365'in gücünü tam anlamıyla kullanmak için Teams, SharePoint ve OneDrive entegrasyon stratejileri.",
    category: "Microsoft",
    date: "10 Şubat 2024",
    readTime: "6 dk",
  },
  {
    slug: "veeam-ile-felaket-kurtarma-stratejisi",
    title: "Veeam ile Felaket Kurtarma Stratejisi Oluşturma",
    excerpt: "Veri kaybını önlemek ve iş sürekliliğini sağlamak için kapsamlı bir felaket kurtarma planı nasıl hazırlanır.",
    category: "Yedekleme",
    date: "25 Ocak 2024",
    readTime: "8 dk",
  },
  {
    slug: "5651-kanunu-log-yonetimi",
    title: "5651 Sayılı Kanun ve Log Yönetimi",
    excerpt: "İnternet ortamındaki hukuki yükümlülüklerinizi yerine getirmek için 5651 log kayıt ve saklama gereksinimleri rehberi.",
    category: "Uyumluluk",
    date: "12 Ocak 2024",
    readTime: "6 dk",
  },
  {
    slug: "vmware-vsphere-best-practices",
    title: "VMware vSphere Best Practices",
    excerpt: "Sanallaştırma ortamınızın performansını ve güvenilirliğini artırmak için VMware vSphere yapılandırma önerileri.",
    category: "Sanallaştırma",
    date: "5 Ocak 2024",
    readTime: "9 dk",
  },
];

const categories = ["Tümü", "BT Yönetimi", "Siber Güvenlik", "Microsoft", "Yedekleme", "Uyumluluk", "Sanallaştırma"];

export default function BlogPage() {
  return (
    <main className="bg-[#0A0E1A] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 text-[#F5A623] text-sm font-medium mb-6">
            <Tag className="w-4 h-4" />
            Blog & Makaleler
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            BT Dünyasından <span className="text-[#F5A623]">Güncel İçerikler</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Siber güvenlik, altyapı yönetimi, bulut çözümleri ve daha fazlası hakkında uzman görüşleri ve rehberler.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 mb-12">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button key={cat} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              cat === "Tümü"
                ? "bg-[#F5A623] text-black"
                : "bg-white/5 text-gray-400 border border-white/10 hover:border-[#F5A623]/40 hover:text-[#F5A623]"
            }`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-8 px-4 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white/3 border border-white/8 rounded-2xl overflow-hidden hover:border-[#F5A623]/30 transition-all group">
              {/* Placeholder image area */}
              <div className="h-44 bg-gradient-to-br from-[#F5A623]/10 to-[#0A0E1A] flex items-center justify-center">
                <span className="text-4xl opacity-30">📝</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 bg-[#F5A623]/10 text-[#F5A623] text-xs rounded-md font-medium">{post.category}</span>
                </div>
                <h2 className="text-white font-bold text-lg mb-2 group-hover:text-[#F5A623] transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-gray-500 text-xs">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <a href={`/blog/${post.slug}`} className="flex items-center gap-1 text-[#F5A623] text-sm font-medium hover:gap-2 transition-all">
                    Oku <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
