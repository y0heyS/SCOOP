"use client"

import { useState } from "react"
import { Wallet, Trophy, History } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePrivy } from "@privy-io/react-auth"
import { NotificationsDropdown } from "./notifications-dropdown"
import { WalletModal } from "./wallet-modal"
import Link from "next/link"

export function Header() {
  const { login, authenticated } = usePrivy()
  const [walletModalOpen, setWalletModalOpen] = useState(false)

  const handleWalletClick = () => {
    if (authenticated) {
      setWalletModalOpen(true)
    } else {
      login()
    }
  }

  return (
    <>
      <header className="relative z-20 bg-transparent">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl" role="img" aria-label="乾杯">🍻</span>
            <span className="text-lg font-bold text-foreground">ほろよいWEB3</span>
          </Link>

          <nav className="flex items-center gap-1">
            <Link href="/rounds">
              <Button variant="ghost" size="sm" className="gap-2 text-foreground hover:bg-white/20">
                <History className="h-4 w-4" />
                <span className="hidden sm:inline">過去ラウンド</span>
              </Button>
            </Link>
            <Link href="/leaderboard">
              <Button variant="ghost" size="sm" className="gap-2 text-foreground hover:bg-white/20">
                <Trophy className="h-4 w-4" />
                <span className="hidden sm:inline">ランキング</span>
              </Button>
            </Link>
            <NotificationsDropdown />
            <Button variant="ghost" size="icon" className="h-10 w-10 text-foreground hover:bg-white/20" onClick={handleWalletClick}>
              <Wallet className="h-5 w-5" />
              <span className="sr-only">{authenticated ? "Connected Wallet" : "Connect Wallet"}</span>
            </Button>
          </nav>
        </div>
      </header>

      <WalletModal open={walletModalOpen} onOpenChange={setWalletModalOpen} />
    </>
  )
}
