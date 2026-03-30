"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Headphones, Calendar, ArrowRight } from "lucide-react"

interface Episode {
  id: string
  title: string
  episode_number: number
  published_at: string
  description: string
}

const SAMPLE_EPISODES: Episode[] = [
  {
    id: "1",
    title: "NFTアートの新潮流と日本のクリエイター",
    episode_number: 42,
    published_at: "2026-03-23",
    description: "国内外で活躍するNFTアーティストをゲストに迎え、最新のトレンドを語ります。",
  },
  {
    id: "2",
    title: "DeFiの未来：次世代プロトコルを探る",
    episode_number: 41,
    published_at: "2026-03-16",
    description: "分散型金融の最新動向と、注目すべき新しいプロジェクトについて解説。",
  },
  {
    id: "3",
    title: "DAOで働くということ",
    episode_number: 40,
    published_at: "2026-03-09",
    description: "DAOでフルタイム活動するメンバーに、その実態とやりがいを聞きました。",
  },
]

export function PastEpisodes() {
  const episodes = SAMPLE_EPISODES

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">過去のエピソード</h2>
        <Link 
          href="#" 
          className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          すべて見る
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {episodes.map((episode) => (
          <Link key={episode.id} href={`/predictions/${episode.id}`} className="block">
            <Card className="cursor-pointer border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Headphones className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                      EP{episode.episode_number}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {new Date(episode.published_at).toLocaleDateString("ja-JP", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="mb-1 font-semibold text-foreground truncate">{episode.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{episode.description}</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
