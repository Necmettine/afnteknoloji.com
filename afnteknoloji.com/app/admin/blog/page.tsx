"use client";
import { useState, useEffect } from "react";
import { Send, CheckCircle, Trash2, LogOut, Eye, EyeOff, FileText, Plus, Clock, CalendarClock } from "lucide-react";

const CATEGORIES = ["LinkedIn", "BT Yönetimi", "Siber Güvenlik", "Microsoft", "Yedekleme", "Sanallaştırma", "Ağ & Altyapı", "Genel"];

type Post = { id: string; slug: string; title: string; excerpt: string; category: string; date: string; readTime: string; };
type Scheduled = { id: string; title: string; category: string; excerpt: string; scheduledFor: string; };

// Yerel saati datetime-local input formatına çevir
function toLocalDatetimeValue(date: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function formatTR(iso: string) {
  return new Date(iso).toLocaleString("tr-TR", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

// Varsayılan: yarın sabah 09:00
function defaultSchedule() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  d.setHours(9, 0, 0, 0);
  return toLocalDatetimeValue(d);
}

export default function AdminBlogPage() {
  const [apiKey, setApiKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [mode, setMode] = useState<"now" | "schedule">("schedule");
  const [form, setForm] = useState({ title: "", content: "", category: "LinkedIn", author: "AFN Teknoloji", publishAt: defaultSchedule() });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [posts, setPosts] = useState<Post[]>([]);
  const [scheduled, setScheduled] = useState<Scheduled[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!apiKey.trim()) { setLoginError("API key boş olamaz."); return; }
    const res = await fetch("/api/blog");
    if (res.ok) { setLoggedIn(true); } else { setLoginError("Bağlantı hatası."); }
  };

  const load = async () => {
    setLoading(true);
    const [r1, r2] = await Promise.all([fetch("/api/blog"), fetch("/api/blog?scheduled=1")]);
    if (r1.ok) setPosts((await r1.json()).posts ?? []);
    if (r2.ok) setScheduled((await r2.json()).posts ?? []);
    setLoading(false);
  };

  useEffect(() => { if (loggedIn) load(); }, [loggedIn]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending"); setErrorMsg(""); setSuccessMsg("");

    const body: Record<string, string> = { title: form.title, content: form.content, category: form.category, author: form.author };
    if (mode === "schedule") body.publishAt = new Date(form.publishAt).toISOString();

    const res = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": apiKey },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      const data = await res.json();
      setStatus("success");
      setSuccessMsg(data.scheduled
        ? `✅ Planlandı: ${formatTR(form.publishAt)} tarihinde otomatik yayınlanacak.`
        : "✅ Yazı hemen yayınlandı!");
      setForm({ title: "", content: "", category: "LinkedIn", author: "AFN Teknoloji", publishAt: defaultSchedule() });
      load();
      setTimeout(() => setStatus("idle"), 5000);
    } else {
      const data = await res.json();
      setErrorMsg(data.error || "Hata oluştu.");
      setStatus("error");
    }
  };

  const deletePost = async (id: string, type: "published" | "scheduled") => {
    await fetch(`/api/blog?id=${id}&type=${type}`, { method: "DELETE", headers: { "x-api-key": apiKey } });
    load();
  };

  // --- GİRİŞ EKRANI ---
  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-[#0A0E1A] flex items-center justify-center px-4">
        <div className="w-full max-w-sm bg-white/5 border border-white/10 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#F5A623]/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-[#F5A623]" />
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">Blog Admin</h1>
              <p className="text-gray-500 text-xs">AFN Teknoloji</p>
            </div>
          </div>
          <label className="block text-sm text-gray-400 mb-2">API Key</label>
          <div className="relative mb-4">
            <input
              type={showKey ? "text" : "password"}
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              placeholder="BLOG_API_KEY değeriniz"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-10 text-white text-sm focus:outline-none focus:border-[#F5A623]/50"
            />
            <button type="button" onClick={() => setShowKey(!showKey)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300">
              {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {loginError && <p className="text-red-400 text-sm mb-4">{loginError}</p>}
          <button onClick={handleLogin} className="w-full py-3 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-colors">
            Giriş Yap
          </button>
        </div>
      </div>
    );
  }

  // --- ADMIN PANELİ ---
  return (
    <div className="min-h-screen bg-[#0A0E1A] text-white">
      <div className="border-b border-white/10 bg-[#0d1221] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#F5A623]/10 flex items-center justify-center">
            <FileText className="w-4 h-4 text-[#F5A623]" />
          </div>
          <span className="font-bold">Blog Admin</span>
          <span className="text-gray-500 text-sm">— AFN Teknoloji</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="/blog" target="_blank" className="text-sm text-gray-400 hover:text-[#F5A623] flex items-center gap-1">
            <Eye className="w-4 h-4" /> Blogu Gör
          </a>
          <button onClick={() => { setLoggedIn(false); setApiKey(""); }} className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-400">
            <LogOut className="w-4 h-4" /> Çıkış
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">

        {/* YENİ YAZI */}
        <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <Plus className="w-5 h-5 text-[#F5A623]" />
            <h2 className="font-bold text-lg">Yeni Yazı Ekle</h2>
          </div>

          {/* MOD SEÇİCİ */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setMode("now")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${mode === "now" ? "bg-[#F5A623] text-black" : "bg-white/5 text-gray-400 hover:bg-white/10"}`}
            >
              <Send className="w-4 h-4" /> Hemen Yayınla
            </button>
            <button
              onClick={() => setMode("schedule")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${mode === "schedule" ? "bg-[#F5A623] text-black" : "bg-white/5 text-gray-400 hover:bg-white/10"}`}
            >
              <CalendarClock className="w-4 h-4" /> Tarih Planla
            </button>
          </div>

          {status === "success" && (
            <div className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-xl px-4 py-3 mb-4 text-sm">
              <CheckCircle className="w-4 h-4 flex-shrink-0" /> {successMsg}
            </div>
          )}
          {status === "error" && (
            <div className="text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3 mb-4 text-sm">{errorMsg}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Başlık *</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="LinkedIn postunuzun başlığı"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#F5A623]/50"
              />
            </div>

            <div className={`grid gap-4 ${mode === "schedule" ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Kategori</label>
                <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full bg-[#0A0E1A] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F5A623]/50">
                  {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Yazar</label>
                <input type="text" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F5A623]/50" />
              </div>
              {mode === "schedule" && (
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Yayın Tarihi & Saati</label>
                  <input
                    type="datetime-local"
                    value={form.publishAt}
                    onChange={(e) => setForm({ ...form, publishAt: e.target.value })}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F5A623]/50"
                    style={{ colorScheme: "dark" }}
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">
                İçerik * <span className="text-gray-600">— LinkedIn postunu buraya yapıştırın</span>
              </label>
              <textarea
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                placeholder="LinkedIn post içeriği..."
                required rows={10}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#F5A623]/50 resize-y"
              />
            </div>

            <button type="submit" disabled={status === "sending"}
              className="flex items-center gap-2 px-6 py-3 bg-[#F5A623] text-black font-bold rounded-xl hover:bg-[#e6951a] transition-colors disabled:opacity-50">
              {status === "sending" ? "İşleniyor..." : mode === "schedule"
                ? <><CalendarClock className="w-4 h-4" /> Planla</>
                : <><Send className="w-4 h-4" /> Hemen Yayınla</>}
            </button>
          </form>
        </div>

        {/* PLANLANMIŞ YAZILAR */}
        {scheduled.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-[#F5A623]" />
              <h2 className="font-bold text-lg">Planlanmış ({scheduled.length})</h2>
            </div>
            <div className="space-y-3">
              {scheduled.map((p) => (
                <div key={p.id} className="bg-[#F5A623]/5 border border-[#F5A623]/20 rounded-xl px-5 py-4 flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs px-2 py-0.5 bg-[#F5A623]/20 text-[#F5A623] rounded-md">{p.category}</span>
                      <span className="text-xs text-[#F5A623]/70 flex items-center gap-1">
                        <CalendarClock className="w-3 h-3" /> {formatTR(p.scheduledFor)}
                      </span>
                    </div>
                    <h3 className="text-white font-medium text-sm truncate">{p.title}</h3>
                    <p className="text-gray-500 text-xs mt-0.5 line-clamp-1">{p.excerpt}</p>
                  </div>
                  <button onClick={() => deletePost(p.id, "scheduled")} className="text-gray-600 hover:text-red-400 transition-colors" title="İptal et">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* YAYINLANAN YAZILAR */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg">Yayınlananlar ({posts.length})</h2>
            <button onClick={load} className="text-sm text-gray-500 hover:text-[#F5A623]">Yenile</button>
          </div>
          {loading ? (
            <div className="text-gray-500 text-sm py-4">Yükleniyor...</div>
          ) : posts.length === 0 ? (
            <div className="text-gray-600 text-sm py-4">Henüz yazı yok.</div>
          ) : (
            <div className="space-y-3">
              {posts.map((p) => (
                <div key={p.id} className="bg-white/3 border border-white/8 rounded-xl px-5 py-4 flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs px-2 py-0.5 bg-[#F5A623]/10 text-[#F5A623] rounded-md">{p.category}</span>
                      <span className="text-xs text-gray-500">{p.date}</span>
                    </div>
                    <h3 className="text-white font-medium text-sm truncate">{p.title}</h3>
                    <p className="text-gray-500 text-xs mt-0.5 line-clamp-1">{p.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a href={`/blog/${p.slug}`} target="_blank" className="text-gray-500 hover:text-[#F5A623] transition-colors" title="Görüntüle">
                      <Eye className="w-4 h-4" />
                    </a>
                    <button onClick={() => deletePost(p.id, "published")} className="text-gray-600 hover:text-red-400 transition-colors" title="Sil">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
