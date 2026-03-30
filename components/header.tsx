"use client"

import { useState } from "react"
import { Wallet, Mic } from "lucide-react"
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
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <Mic className="h-5 w-5 text-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">ほろよいWEB3</span>
          </Link>

          <div className="flex items-center gap-2">
            <NotificationsDropdown />
            <Button variant="ghost" size="icon" className="h-10 w-10 text-foreground hover:bg-white/20" onClick={handleWalletClick}>
              <Wallet className="h-5 w-5" />
              <span className="sr-only">{authenticated ? "Connected Wallet" : "Connect Wallet"}</span>
            </Button>
          </div>
        </div>
      </header>

      <WalletModal open={walletModalOpen} onOpenChange={setWalletModalOpen} />
    </>
  )
}
