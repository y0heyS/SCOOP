"use client"

import { Header } from "@/components/header"
import { Bubbles } from "@/components/bubbles"
import { BottomNav } from "@/components/bottom-nav"
import { Card } from "@/components/ui/card"
import { Bell, Trophy, Coins, Mic } from "lucide-react"

// Sample notifications data
const notifications = [
  {
    id: 1,
    type: "result",
    title: "予測結果が確定しました",
    message: "「暗号資産における日本法律」の予測スコア: 40.0%",
    date: "2026/4/1",
    read: false,
    icon: Trophy,
  },
  {
    id: 2,
    type: "bonus",
    title: "週間ボーナスを獲得",
    message: "+100pt のボーナスを獲得しました",
    date: "2026/4/1",
    read: false,
    icon: Coins,
  },
  {
    id: 3,
    type: "new_round",
    title: "新しいラウンドが開始",
    message: "次回エピソードの予測受付を開始しました",
    date: "2026/3/31",
    read: true,
    icon: Mic,
  },
  {
    id: 4,
    type: "result",
    title: "予測結果が確定しました",
    message: "「日本円とアメリカのステーブルコインの違い」の予測スコア: 50.0%",
    date: "2026/3/30",
    read: true,
    icon: Trophy,
  },
]

export default function NotificationsPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 pb-20 md:pb-0">
      {/* Wave decoration at top */}
      <div className="absolute left-0 right-0 top-0 h-8 overflow-hidden">
        <svg
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="M0,20 Q150,0 300,20 T600,20 T900,20 T1200,20 L1200,0 L0,0 Z"
            fill="rgba(255,255,255,0.3)"
          />
        </svg>
      </div>

      {/* Bubbles animation */}
      <Bubbles />

      <Header />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-8 md:py-12">
        {/* Title */}
        <div className="mb-6 flex items-center gap-3">
          <Bell className="h-6 w-6 text-foreground md:h-8 md:w-8" />
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">通知</h1>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`border-white/20 p-4 backdrop-blur-md transition-all ${
                notification.read
                  ? "bg-white/10"
                  : "bg-white/25"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                  notification.read ? "bg-white/20" : "bg-white/30"
                }`}>
                  <notification.icon className="h-5 w-5 text-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="font-semibold text-foreground">{notification.title}</h3>
                    {!notification.read && (
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    )}
                  </div>
                  <p className="mb-1 text-sm text-foreground/80">{notification.message}</p>
                  <p className="text-xs text-foreground/60">{notification.date}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="py-12 text-center">
            <Bell className="mx-auto mb-4 h-12 w-12 text-foreground/40" />
            <p className="text-foreground/60">通知はありません</p>
          </div>
        )}
      </div>

      <BottomNav />
    </main>
  )
}
