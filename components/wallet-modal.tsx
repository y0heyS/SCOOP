"use client"
import { Wallet, ArrowDownLeft } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface WalletModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WalletModal({ open, onOpenChange }: WalletModalProps) {
  // Mock wallet data
  const balance = 8.5
  const depositHistory = [
    {
      id: 1,
      amount: 8.5,
      date: "Oct 14, 2025, 2:30 PM",
      type: "deposit" as const,
    },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            My Wallet
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Wallet Balance */}
          <div className="rounded-lg border-2 border-orange-500 bg-orange-50 p-6 text-center">
            <p className="text-sm text-muted-foreground mb-2">Total Balance</p>
            <p className="text-4xl font-bold text-foreground">
              {balance.toFixed(1)} <span className="text-2xl">USDC</span>
            </p>
          </div>

          {/* Deposit History */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Deposit History</h3>
            <div className="space-y-2">
              {depositHistory.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between rounded-lg border p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-green-100 p-2">
                      <ArrowDownLeft className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-600">+{transaction.amount} USDC</p>
                      <p className="text-xs text-muted-foreground">{transaction.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
