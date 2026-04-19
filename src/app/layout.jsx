import "./globals.css";
import Navbar from "@/components/navbar";
import BottomNav from "@/components/bottom-nav";
import TranslateButtonV2 from "@/components/translate-button-v2";
import { Toaster } from "sonner";

export const metadata = {
  title: "NightManga — Baca Manga, Manhua & Manhwa",
  description: "Platform baca manga, manhua, dan manhwa gratis dengan koleksi lengkap",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#6366f1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="pb-24">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <BottomNav />
        <TranslateButtonV2 />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#1e2030",
              color: "#e5e7eb",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              fontSize: "13px",
            },
          }}
        />
      </body>
    </html>
  );
}
