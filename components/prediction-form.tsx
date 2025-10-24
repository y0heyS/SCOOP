"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { BetModal } from "@/components/bet-modal"

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
        <div className="relative">
          <Textarea
            value={prediction}
            onChange={(e) => setPrediction(e.target.value)}
            maxLength={140}
            placeholder="Enter your prediction..."
            className="min-h-[120px] resize-none border-2 border-foreground bg-background px-6 py-4 text-base text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-accent md:min-h-[140px] md:text-lg"
          />
        </div>
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">{prediction.length} / 140 characters</p>
          <Button
            type="submit"
            size="lg"
            disabled={!prediction.trim()}
            className="bg-orange-500 px-8 text-white hover:bg-orange-600 disabled:bg-muted disabled:text-muted-foreground"
          >
            Submit Prediction
          </Button>
        </div>
      </form>

      <BetModal open={showBetModal} onOpenChange={setShowBetModal} prediction={prediction} onSubmit={handleBetSubmit} />
    </>
  )
}
