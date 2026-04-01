"use client"

import { Home, Trophy, Bell, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/", icon: Home, label: "ホーム" },
  { href: "/leaderboard", icon: Trophy, label: "ランキング" },
  { href: "/notifications", icon: Bell, label: "通知" },
  { href: "/mypage", icon: User, label: "マイページ" },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/20 bg-amber-400/95 backdrop-blur-md md:hidden">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-1 flex-col items-center gap-1 py-3 text-xs transition-colors ${
                isActive
                  ? "text-foreground"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              <item.icon className={`h-5 w-5 ${isActive ? "text-foreground" : ""}`} />
              <span className="font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
