import Link from "next/link";

const tech = [
  { icon: "⚛️", name: "Frontend", desc: "Next.js 15 / JSX" },
  { icon: "🎨", name: "Styling", desc: "Tailwind CSS" },
  { icon: "📖", name: "Sumber", desc: "MangaDex API" },
  { icon: "☁️", name: "Hosting", desc: "Vercel Serverless" },
];

export const metadata = {
  title: "About — NightManga",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0a0c10" }}>
      <div className="max-w-lg mx-auto px-4 py-6 space-y-4">

        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-2">
          ← Kembali
        </Link>

        {/* Hero */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg,rgba(99,102,241,0.13),rgba(139,92,246,0.09))",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div className="relative flex flex-col items-center py-8 px-5 text-center">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(99,102,241,0.2),transparent 70%)", filter: "blur(30px)" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://i.ibb.co.com/XZ22Jmzr/file-00000000656871faa9fc663362873257.png"
              alt="NightStrom404"
              className="w-20 h-20 rounded-2xl object-cover mb-4"
              style={{ border: "2px solid rgba(99,102,241,0.5)", boxShadow: "0 0 30px rgba(99,102,241,0.3)" }}
            />
            <h1
              className="text-2xl font-bold mb-1"
              style={{ background: "linear-gradient(135deg,#a5b4fc,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              NightManga
            </h1>
            <p className="text-xs mb-5" style={{ color: "#6b7280" }}>Platform Baca Manga, Manhua &amp; Manhwa · v1.0.0</p>

            <div
              className="w-full flex items-center gap-3 rounded-2xl p-3"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://i.ibb.co.com/XZ22Jmzr/file-00000000656871faa9fc663362873257.png" alt="dev" className="w-11 h-11 rounded-xl object-cover flex-shrink-0" style={{ border: "1px solid rgba(99,102,241,0.5)" }} />
              <div className="text-left flex-1">
                <p className="text-sm font-semibold text-white">NightStrom404 Ofc</p>
                <p className="text-[11px]" style={{ color: "#6b7280" }}>Lead Developer &amp; UI/UX Designer</p>
              </div>
              <span className="text-[10px] px-2.5 py-1 rounded-full font-medium" style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8" }}>Owner</span>
            </div>
          </div>
        </div>

        {/* Social + Donate */}
        <div className="rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <p className="text-[10px] uppercase tracking-widest mb-3" style={{ color: "#4b5563" }}>Hubungi Saya</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              { href: "https://t.me/NightStrom308", label: "Telegram" },
              { href: "https://tiktok.com/@nightstromreal", label: "TikTok" },
              { href: "https://github.com/", label: "GitHub" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-full transition-all hover:text-white"
                style={{ color: "#9ca3af", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                {s.label}
              </a>
            ))}
          </div>
          <a
            href="https://saweria.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm text-white"
            style={{ background: "linear-gradient(135deg,#f59e0b,#ef4444)", boxShadow: "0 4px 20px rgba(245,158,11,0.2)" }}
          >
            ☕ Donate via Saweria
          </a>
          <p className="text-center text-[10px] mt-2" style={{ color: "#4b5563" }}>Dukung pengembangan NightManga 🙏</p>
        </div>

        {/* About */}
        <div className="rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <h2 className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: "#6366f1" }}>Tentang Project</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
            <span className="text-white font-medium">NightManga</span> adalah platform baca manga gratis berbasis web. Data bersumber dari{" "}
            <span className="text-indigo-400">MangaDex API</span> yang menyediakan koleksi manga, manhua, dan manhwa dari seluruh dunia.
          </p>
        </div>

        {/* Tech */}
        <div className="rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <h2 className="text-[11px] font-semibold uppercase tracking-widest mb-3" style={{ color: "#6366f1" }}>Tech Stack</h2>
          <div className="grid grid-cols-2 gap-2">
            {tech.map((t) => (
              <div key={t.name} className="flex items-center gap-3 rounded-xl p-3" style={{ background: "rgba(255,255,255,0.04)" }}>
                <span className="text-xl">{t.icon}</span>
                <div>
                  <p className="text-xs font-medium text-white">{t.name}</p>
                  <p className="text-[10px]" style={{ color: "#6b7280" }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="rounded-2xl p-4" style={{ background: "rgba(245,158,11,0.04)", border: "1px solid rgba(245,158,11,0.15)" }}>
          <h2 className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: "#f59e0b" }}>⚠️ Disclaimer</h2>
          <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>
            NightManga tidak menyimpan konten manga di server kami. Semua data bersumber dari MangaDex. Dibuat untuk tujuan edukasi.
          </p>
        </div>

        <div className="text-center py-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-[11px]" style={{ color: "#374151" }}>© 2026 NightStrom404 · Made for manga lovers 📚</p>
        </div>
      </div>
    </div>
  );
}
