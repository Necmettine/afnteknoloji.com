import { kv } from "@vercel/kv";

const KV_KEY = "blog:posts";

export interface BlogPost {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content?: string;
  author?: string;
  createdAt?: string;
}

// Make.com'dan gelen yazılar (Vercel KV)
export async function getDynamicPosts(): Promise<BlogPost[]> {
  try {
    const posts = await kv.get<BlogPost[]>(KV_KEY);
    return posts ?? [];
  } catch {
    return [];
  }
}

// Hardcoded statik yazılar
export const staticPosts: BlogPost[] = [
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

// Tüm yazıları birleştir (dinamik önce)
export async function getAllPosts(): Promise<BlogPost[]> {
  const dynamic = await getDynamicPosts();
  return [...dynamic, ...staticPosts];
}
