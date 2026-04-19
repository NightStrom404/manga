"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, User, Radio } from "lucide-react";

const navItems = [
  { href: "/search", label: "Cari", Icon: Search },
  { href: "/", label: "Home", center: true, Icon: Home },
  { href: "/about", label: "About", Icon: User },
  { href: "https://whatsapp.com/channel/0029VbClFqE7j6gAvjm7m03W", label: "Saluran", external: true, Icon: Radio },
];

export default function BottomNav() {
  const pathname = usePathname();

  // hide on chapter reader page
  if (pathname.includes("/chapter/")) return null;

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-[200] flex justify-around items-end px-3 pb-3 pt-2"
      style={{
        background: "linear-gradient(to top, rgba(10,12,16,0.98) 80%, transparent)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        backdropFilter: "blur(20px)",
      }}
    >
      {navItems.map(({ href, label, center, external, Icon }) => {
        const isActive = !external && pathname === href;

        if (center) {
          return (
            <Link key={href} href={href} className="flex flex-col items-center gap-1 relative -top-3">
              <span
                className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform active:scale-95"
                style={{
                  background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                  boxShadow: "0 8px 28px rgba(99,102,241,0.45)",
                }}
              >
                <Icon size={24} color="white" />
              </span>
              <span className="text-[10px]" style={{ color: "#6b7280" }}>{label}</span>
            </Link>
          );
        }

        return (
          <Link
            key={href}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all"
            style={{ color: isActive ? "#818cf8" : "#4b5563" }}
          >
            <Icon size={22} />
            <span className="text-[10px]">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
