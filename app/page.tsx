import { PredictionForm } from "@/components/prediction-form"
import { Header } from "@/components/header"
import { PastEpisodes } from "@/components/past-episodes"
import { Bubbles } from "@/components/bubbles"
import { BottomNav } from "@/components/bottom-nav"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 pb-20 md:pb-0">
      {/* Wave decoration at top */}
      <div className="absolute left-0 right-0 top-0 h-8 overflow-hidden">
        <svg
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="M0,20 Q150,0 300,20 T600,20 T900,20 T1200,20 L1200,0 L0,0 Z"
            fill="rgba(255,255,255,0.3)"
          />
        </svg>
      </div>

      {/* Bubbles animation */}
      <Bubbles />

      <Header />
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-12 md:py-20">
        {/* Title Section */}
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-foreground/70">
            ほろよいWEB3
          </p>
          <h1 className="mb-5 text-balance font-sans text-4xl font-bold tracking-tight text-foreground drop-shadow-sm md:text-5xl lg:text-6xl">
            Podcast Title Prediction
          </h1>
          <p className="mx-auto max-w-xl text-pretty text-base text-foreground/80 md:text-lg">
            次回エピソードのタイトルを予測しよう。AIが毎週あなたの予測を採点します。
          </p>
        </div>

        {/* Prediction Form */}
        <div className="mb-16">
          <PredictionForm />
        </div>

        <div className="mb-12">
          <PastEpisodes />
        </div>
      </div>

      <BottomNav />
    </main>
  )
}
