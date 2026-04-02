"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Bubbles } from "@/components/bubbles"
import { BottomNav } from "@/components/bottom-nav"
import { Trophy, Crown } from "lucide-react"

// Sample leaderboard data
const leaderboardData = [
  { id: 1, name: "新規ユーザー", points: 1164, rank: 1 },
  { id: 2, name: "crypto_master", points: 980, rank: 2 },
  { id: 3, name: "web3_lover", points: 875, rank: 3 },
  { id: 4, name: "podcast_fan", points: 720, rank: 4 },
  { id: 5, name: "horoyoi_drinker", points: 650, rank: 5 },
  { id: 6, name: "defi_guru", points: 580, rank: 6 },
  { id: 7, name: "nft_collector", points: 490, rank: 7 },
  { id: 8, name: "blockchain_dev", points: 420, rank: 8 },
]

const roundData = [
  { id: 1, name: "web3_lover", points: 250, rank: 1 },
  { id: 2, name: "新規ユーザー", points: 200, rank: 2 },
  { id: 3, name: "crypto_master", points: 180, rank: 3 },
  { id: 4, name: "podcast_fan", points: 150, rank: 4 },
  { id: 5, name: "defi_guru", points: 120, rank: 5 },
]

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState<"all" | "round">("all")
  
  const data = activeTab === "all" ? leaderboardData : roundData

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 pb-20 md:pb-0">
      {/* Beer foam at top */}
      <div className="absolute left-0 right-0 top-0 z-0">
        <div className="h-20 bg-white md:h-24" />
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="h-12 w-full md:h-16"
        >
          <path
            d="M0,0 
               C100,40 200,60 350,35 
               C500,10 600,50 750,40 
               C900,30 1000,60 1200,25 
               L1200,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Bubbles animation */}
      <Bubbles />

      <Header />
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-12 md:py-16">
        {/* Title Section */}
        <div className="mb-8 flex items-center gap-3">
          <Trophy className="h-8 w-8 text-stone-900" />
          <h1 className="text-3xl font-bold text-stone-900 md:text-4xl">ランキング</h1>
        </div>

        {/* Tab Switcher */}
        <div className="mb-6">
          <div className="inline-flex rounded-full bg-stone-900/10 p-1 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("all")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeTab === "all"
                  ? "bg-stone-900 text-white"
                  : "text-stone-700 hover:text-stone-900"
              }`}
            >
              全期間
            </button>
            <button
              onClick={() => setActiveTab("round")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeTab === "round"
                  ? "bg-stone-900 text-white"
                  : "text-stone-700 hover:text-stone-900"
              }`}
            >
              ラウンド別
            </button>
          </div>
        </div>

        {/* Leaderboard List */}
        <div className="space-y-3">
          {data.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between rounded-2xl border border-stone-300/30 bg-white/40 px-5 py-4 backdrop-blur-md transition-all hover:bg-white/60"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center">
                  {user.rank === 1 ? (
                    <Crown className="h-6 w-6 text-stone-900" />
                  ) : (
                    <span className="text-lg font-bold text-stone-500">{user.rank}</span>
                  )}
                </div>
                <span className="font-medium text-stone-900">{user.name}</span>
              </div>
              <span className="text-lg font-bold text-stone-900">
                {user.points.toLocaleString()}pt
              </span>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </main>
  )
}
