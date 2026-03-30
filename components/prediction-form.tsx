"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { BetModal } from "@/components/bet-modal"
import { Mic } from "lucide-react"

export function PredictionForm() {
  const [prediction, setPrediction] = useState("")
  const [showBetModal, setShowBetModal] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (prediction.trim()) {
      setShowBetModal(true)
    }
  }

  const handleBetSubmit = (amount: string) => {
    console.log("Prediction submitted:", prediction, "Bet amount:", amount)
    setPrediction("")
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto w-full">
        <div className="rounded-2xl border border-white/20 bg-white/20 p-6 shadow-lg backdrop-blur-md">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/30">
              <Mic className="h-4 w-4 text-foreground" />
            </div>
            <span className="text-sm font-medium text-foreground">次回タイトルを予測</span>
          </div>
          <Textarea
            value={prediction}
            onChange={(e) => setPrediction(e.target.value)}
            maxLength={100}
            placeholder="例: Web3で変わる日本の未来..."
            className="min-h-[100px] resize-none border-0 bg-transparent px-0 py-2 text-base text-foreground placeholder:text-foreground/50 focus-visible:ring-0 md:min-h-[120px] md:text-lg"
          />
          <div className="mt-4 flex items-center justify-between gap-4 border-t border-white/20 pt-4">
            <p className="text-sm text-foreground/70">{prediction.length} / 100 文字</p>
            <Button
              type="submit"
              size="lg"
              disabled={!prediction.trim()}
              className="rounded-full bg-white/30 px-8 text-foreground backdrop-blur-sm hover:bg-white/40 disabled:bg-white/10 disabled:text-foreground/40"
            >
              予測を送信
            </Button>
          </div>
        </div>
      </form>

      <BetModal open={showBetModal} onOpenChange={setShowBetModal} prediction={prediction} onSubmit={handleBetSubmit} />
    </>
  )
}
