import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-dynamic"; // Make.com'dan gelen yeni yazılar hemen görünsün

const categories = ["Tümü", "BT Yönetimi", "Siber Güvenlik", "Microsoft", "Yedekleme", "Uyumluluk", "Sanallaştırma", "Genel"];

export default function BlogPage() {
  const posts = getAllPosts();

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
            <span key={cat} className={`px-4 py-2 rounded-full text-sm font-medium cursor-default ${
              cat === "Tümü"
                ? "bg-[#F5A623] text-black"
                : "bg-white/5 text-gray-400 border border-white/10"
            }`}>
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-8 px-4 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white/3 border border-white/8 rounded-2xl overflow-hidden hover:border-[#F5A623]/30 transition-all group hover:-translate-y-1">
              <div className="h-44 bg-gradient-to-br from-[#F5A623]/10 to-[#0A0E1A] flex items-center justify-center">
                <span className="text-5xl opacity-20">📝</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 bg-[#F5A623]/10 text-[#F5A623] text-xs rounded-md font-medium">{post.category}</span>
                </div>
                <h2 className="text-white font-bold text-lg mb-2 group-hover:text-[#F5A623] transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
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
