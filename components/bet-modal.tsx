"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X, CheckCircle } from "lucide-react"
import { useState } from "react"

interface BetModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  prediction: string
  onSubmit: (amount: string) => void
}

const BET_AMOUNTS = ["1 USDC", "5 USDC", "もっと"]

export function BetModal({ open, onOpenChange, prediction, onSubmit }: BetModalProps) {
  const [selectedAmount, setSelectedAmount] = useState<string>("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    if (selectedAmount) {
      onSubmit(selectedAmount)
      setIsSubmitted(true)
    }
  }

  const handleClose = () => {
    setSelectedAmount("")
    setIsSubmitted(false)
    onOpenChange(false)
  }

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
            </DialogHeader>

            <div className="space-y-5 p-5">
              <p className="text-lg font-medium leading-relaxed text-foreground">{prediction}</p>

              <p className="text-sm leading-relaxed text-muted-foreground">
                AIが次回のほろよいWEB3エピソードタイトルとあなたの予測を比較し、
                類似度に応じて報酬が分配されます。
              </p>

              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">金額を選択</label>
                <div className="grid grid-cols-3 gap-3">
                  {BET_AMOUNTS.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`rounded-lg border px-4 py-3 text-center text-sm font-medium transition-colors ${
                        selectedAmount === amount
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-secondary"
                      }`}
                    >
                      {amount}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleSubmit}
                disabled={!selectedAmount}
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
