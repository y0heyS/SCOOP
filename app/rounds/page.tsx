"use client"

import { Header } from "@/components/header"
import { Bubbles } from "@/components/bubbles"
import { Card } from "@/components/ui/card"
import { Calendar, Users } from "lucide-react"
import Link from "next/link"

// Mock data for past rounds
const rounds = [
  {
    id: "342",
    number: 342,
    title: "忘れてはいけないクリプト精神",
    date: "2026/3/19",
    participants: 0,
    status: "confirmed" as const,
    score: null,
  },
  {
    id: "341",
    number: 341,
    title: "X Momeyによる金融の民主化",
    date: "2026/3/16",
    participants: 0,
    status: "confirmed" as const,
    score: null,
  },
  {
    id: "344",
    number: 344,
    title: "AIエージェント向けサービスの流れ",
    date: "2026/3/27",
    participants: 0,
    status: "confirmed" as const,
    score: null,
  },
  {
    id: "345",
    number: null,
    title: "タイトル未定",
    date: "2026/3/30",
    participants: 0,
    status: "accepting" as const,
    score: null,
  },
  {
    id: "346",
    number: null,
    title: "暗号資産における日本法律",
    date: "2026/3/30",
    participants: 1,
    status: "confirmed" as const,
    score: 40.0,
  },
  {
    id: "347",
    number: null,
    title: "日本円とアメリカのステーブルコインの違い",
    date: "2026/3/30",
    participants: 1,
    status: "confirmed" as const,
    score: 50.0,
  },
  {
    id: "343",
    number: 343,
    title: "「未来予測装置」として予測市場はどう活用できるか？",
    date: "2026/3/23",
    participants: 1,
    status: "confirmed" as const,
    score: null,
  },
  {
    id: "348",
    number: null,
    title: "タイトル未定",
    date: "2026/3/24",
    participants: 0,
    status: "accepting" as const,
    score: null,
  },
]

export default function RoundsPage() {
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
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-8 md:py-12">
        {/* Title */}
        <h1 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
          過去ラウンド一覧
        </h1>

        {/* Rounds Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {rounds.map((round) => (
            <Link key={round.id} href={`/rounds/${round.id}`}>
              <Card className="cursor-pointer border-white/20 bg-white/20 p-5 backdrop-blur-md transition-all hover:bg-white/30">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    {/* Status Badge */}
                    <div className="mb-2">
                      {round.status === "confirmed" ? (
                        <span className="inline-flex rounded-full bg-white/30 px-2.5 py-0.5 text-xs font-medium text-foreground">
                          確定
                        </span>
                      ) : (
                        <span className="inline-flex rounded-full bg-emerald-500/80 px-2.5 py-0.5 text-xs font-medium text-white">
                          受付中
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 font-semibold text-foreground">
                      {round.number ? `#${round.number}　` : ""}
                      {round.title}
                    </h3>

                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-sm text-foreground/70">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {round.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" />
                        {round.participants}人参加
                      </span>
                    </div>
                  </div>

                  {/* Score */}
                  {round.score !== null && (
                    <div className="shrink-0 text-right">
                      <span className="text-lg font-bold text-emerald-400">
                        {round.score.toFixed(1)}%
                      </span>
                    </div>
                  )}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
