"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { X, CheckCircle } from "lucide-react"
import { useState } from "react"

interface BetModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  prediction: string
  onSubmit: (amount: string) => void
}

const MAX_POINTS = 1682
const MIN_POINTS = 1

export function BetModal({ open, onOpenChange, prediction, onSubmit }: BetModalProps) {
  const [betAmount, setBetAmount] = useState<number>(100)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    if (betAmount >= MIN_POINTS) {
      onSubmit(`${betAmount}pt`)
      setIsSubmitted(true)
    }
  }

  const handleClose = () => {
    setBetAmount(100)
    setIsSubmitted(false)
    onOpenChange(false)
  }

  const percentage = ((betAmount - MIN_POINTS) / (MAX_POINTS - MIN_POINTS)) * 100

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg border border-border bg-card p-0">
        {isSubmitted ? (
          <div className="space-y-6 p-10 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">予測が送信されました</h2>
              <p className="text-muted-foreground">
                次回エピソード公開後に結果をお知らせします。
                <br />
                次の予測もお楽しみに。
              </p>
            </div>
            <Button onClick={handleClose} size="lg" className="mt-4 bg-primary px-8 text-primary-foreground hover:bg-primary/90">
              閉じる
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader className="border-b border-border p-5">
              <div className="flex items-center justify-between">
                <DialogTitle className="text-sm font-medium text-foreground">あなたの予測</DialogTitle>
                <button onClick={handleClose} className="text-muted-foreground hover:text-foreground">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <DialogDescription className="sr-only">予測を確認して送信してください</DialogDescription>
            </DialogHeader>

            <div className="space-y-5 p-5">
              <p className="text-lg font-medium leading-relaxed text-foreground">{prediction}</p>

              <p className="text-sm leading-relaxed text-muted-foreground">
                AIが次回のほろよいWEB3エピソードタイトルとあなたの予測を比較し、
                類似度に応じて報酬が分配されます。
              </p>

              <div className="space-y-4">
                <div className="text-base">
                  <span className="text-foreground">賭けポイント: </span>
                  <span className="font-bold text-amber-800">{betAmount}pt</span>
                </div>
                
                <div className="relative py-2">
                  <input
                    type="range"
                    min={MIN_POINTS}
                    max={MAX_POINTS}
                    value={betAmount}
                    onChange={(e) => setBetAmount(Number(e.target.value))}
                    className="slider-input w-full cursor-pointer appearance-none bg-transparent"
                    style={{
                      background: `linear-gradient(to right, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) ${percentage}%, rgba(255,255,255,0.3) ${percentage}%, rgba(255,255,255,0.3) 100%)`,
                      height: '8px',
                      borderRadius: '4px',
                    }}
                  />
                </div>
                
                <div className="flex justify-between text-sm text-foreground/70">
                  <span>{MIN_POINTS}pt</span>
                  <span>保有: {MAX_POINTS}pt</span>
                </div>
              </div>

              <Button
                onClick={handleSubmit}
                disabled={betAmount < MIN_POINTS}
                size="lg"
                className="w-full bg-primary py-5 text-base text-primary-foreground hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground"
              >
                予測を確定
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                予測を送信することで、
                <a href="#" className="underline hover:text-foreground">
                  利用規約
                </a>
                に同意したことになります。
              </p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
