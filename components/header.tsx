import { User, Trophy, History } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NotificationsDropdown } from "./notifications-dropdown"
import Link from "next/link"

export function Header() {
  return (
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
            <Link href="/mypage">
              <Button variant="ghost" size="icon" className="h-10 w-10 text-foreground hover:bg-white/20">
                <User className="h-5 w-5" />
                <span className="sr-only">マイページ</span>
              </Button>
            </Link>
          </nav>
        </div>
      </header>
  )
}
