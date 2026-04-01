"use client"

import { Header } from "@/components/header"
import { Bubbles } from "@/components/bubbles"
import { Card } from "@/components/ui/card"
import { Coins, BarChart3, Clock } from "lucide-react"

// Sample participation history data
const participationHistory = [
  {
    id: 1,
    title: "暗号資産における日本法律",
    prediction: "クリプト",
    betAmount: 482,
    earnedAmount: 964,
    score: 40.0,
    status: "completed",
  },
  {
    id: 2,
    title: "日本円とアメリカのステーブルコインの違い",
    prediction: "ステーブルコイン",
    betAmount: 100,
    earnedAmount: 200,
    score: 50.0,
    status: "completed",
  },
  {
    id: 3,
    roundNumber: 343,
    title: "「未来予測装置」として予測市場はどう活用できるか？",
    prediction: "ステーブルコイン",
    betAmount: 100,
    earnedAmount: null,
    score: null,
    status: "pending",
  },
]

// Sample point history data
const pointHistory = [
  {
    id: 1,
    type: "週間ボーナス",
    date: "2026/4/1",
    amount: 100,
  },
  {
    id: 2,
    type: "報酬",
    date: "2026/3/30",
    amount: 964,
  },
  {
    id: 3,
    type: "報酬",
    date: "2026/3/30",
    amount: 200,
  },
]

export default function MyPage() {
  const totalPoints = 1682

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500">
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

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-8">
        {/* Points Card */}
        <Card className="mb-8 border-white/20 bg-white/20 p-6 text-center backdrop-blur-md">
          <p className="mb-2 text-sm text-foreground/70">保有ポイント</p>
          <div className="flex items-center justify-center gap-2">
            <Coins className="h-8 w-8 text-emerald-400" />
            <span className="text-5xl font-bold text-emerald-400">{totalPoints.toLocaleString()}</span>
            <span className="text-2xl text-foreground">pt</span>
          </div>
        </Card>

        {/* Participation History */}
        <section className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-foreground" />
            <h2 className="text-lg font-bold text-foreground">参加履歴</h2>
          </div>
          <div className="space-y-3">
            {participationHistory.map((item) => (
              <Card
                key={item.id}
                className="border-white/20 bg-white/20 p-4 backdrop-blur-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1 font-semibold text-foreground">
                      {item.roundNumber && `#${item.roundNumber}　`}
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground/70">
                      予測: {item.prediction}
                    </p>
                    <p className="text-sm text-foreground/70">
                      ベット: {item.betAmount}pt →{" "}
                      {item.status === "pending" ? (
                        <span>結果待ち</span>
                      ) : (
                        <span>+{item.earnedAmount}pt</span>
                      )}
                    </p>
                  </div>
                  {item.score !== null && (
                    <span className="shrink-0 text-lg font-bold text-emerald-400">
                      {item.score.toFixed(1)}%
                    </span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Point History */}
        <section>
          <div className="mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-foreground" />
            <h2 className="text-lg font-bold text-foreground">ポイント収支</h2>
          </div>
          <div className="space-y-3">
            {pointHistory.map((item) => (
              <Card
                key={item.id}
                className="border-white/20 bg-white/20 p-4 backdrop-blur-md"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">{item.type}</h3>
                    <p className="text-sm text-foreground/70">{item.date}</p>
                  </div>
                  <span className="text-lg font-bold text-emerald-400">
                    +{item.amount}pt
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
