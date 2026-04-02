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
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-stone-300/30 bg-amber-400/95 backdrop-blur-md md:hidden">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-1 items-center justify-center py-4 transition-colors ${
                isActive
                  ? "text-stone-900"
                  : "text-stone-500 hover:text-stone-900"
              }`}
            >
              <item.icon className={`h-6 w-6 ${isActive ? "text-stone-900" : ""}`} />
              <span className="sr-only">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
