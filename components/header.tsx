"use client"

import { useState } from "react"
import { Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePrivy } from "@privy-io/react-auth"
import { NotificationsDropdown } from "./notifications-dropdown"
import { WalletModal } from "./wallet-modal"
import Link from "next/link"
import Image from "next/image"

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
      <header className="bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center">
            <Image src="/images/scoop-logo.png" alt="SCOOP" width={180} height={60} className="h-12 w-auto" priority />
          </Link>

          <div className="flex items-center gap-2">
            <NotificationsDropdown />
            <Button variant="ghost" size="icon" className="h-10 w-10" onClick={handleWalletClick}>
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
