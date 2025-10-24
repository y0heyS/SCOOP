"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"
import { useState } from "react"

interface BetModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  prediction: string
  onSubmit: (amount: string) => void
}

const BET_AMOUNTS = ["1 USDC", "5 USDC", "More"]

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
      <DialogContent className="max-w-2xl border-2 border-foreground p-0">
        {isSubmitted ? (
          <div className="space-y-6 p-12 text-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-serif leading-relaxed">Your prediction has been submitted!</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We'll see soon if your foresight was correct.
                <br />
                Don't miss the next prediction round.
              </p>
            </div>
            <Button onClick={handleClose} size="lg" className="mt-6 bg-orange-500 px-8 text-white hover:bg-orange-600">
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader className="border-b-2 border-foreground p-6">
              <div className="flex items-center justify-between">
                <DialogTitle className="text-sm font-normal text-muted-foreground">Your Prediction</DialogTitle>
                <button onClick={handleClose} className="text-muted-foreground hover:text-foreground">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </DialogHeader>

            <div className="space-y-6 p-6">
              <p className="text-xl font-serif leading-relaxed">{prediction}</p>

              <p className="text-sm leading-relaxed text-muted-foreground">
                You will get paid out proportionally according to how close your prediction is to Donald Trump's actual
                post on X, based on the AI's judgment.
              </p>

              <div className="space-y-3">
                <label className="text-sm text-muted-foreground">Select Amount</label>
                <div className="grid grid-cols-3 gap-3">
                  {BET_AMOUNTS.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`rounded border-2 px-6 py-4 text-center font-mono text-sm transition-colors ${
                        selectedAmount === amount
                          ? "border-foreground bg-foreground text-background"
                          : "border-foreground bg-background text-foreground hover:bg-muted"
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
                className={`w-full py-6 text-base font-normal uppercase tracking-wide transition-colors ${
                  selectedAmount
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                } disabled:opacity-50`}
              >
                Submit Prediction
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                By submitting a prediction, you agree to the{" "}
                <a href="#" className="underline">
                  TERMS OF SERVICE
                </a>
              </p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
