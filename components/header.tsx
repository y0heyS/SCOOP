import { User, Trophy, History, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="relative z-20 bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl" role="img" aria-label="乾杯">🍻</span>
          <span className="text-base font-bold text-foreground md:text-lg">ほろよいWEB3</span>
        </Link>

        {/* Desktop Navigation - hidden on mobile */}
        <nav className="hidden items-center gap-1 md:flex">
          <Link href="/rounds">
            <Button variant="ghost" size="sm" className="gap-2 text-foreground hover:bg-white/20">
              <History className="h-4 w-4" />
              <span>過去ラウンド</span>
            </Button>
          </Link>
          <Link href="/leaderboard">
            <Button variant="ghost" size="sm" className="gap-2 text-foreground hover:bg-white/20">
              <Trophy className="h-4 w-4" />
              <span>ランキング</span>
            </Button>
          </Link>
          <Link href="/notifications">
            <Button variant="ghost" size="icon" className="h-10 w-10 text-foreground hover:bg-white/20">
              <Bell className="h-5 w-5" />
              <span className="sr-only">通知</span>
            </Button>
          </Link>
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
