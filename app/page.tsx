import { PredictionForm } from "@/components/prediction-form"
import { Header } from "@/components/header"
import { PastEpisodes } from "@/components/past-episodes"
import { Bubbles } from "@/components/bubbles"
import { BottomNav } from "@/components/bottom-nav"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 pb-20 md:pb-0">
      {/* Beer foam at top */}
      <div className="absolute left-0 right-0 top-0 z-0">
        {/* White foam background */}
        <div className="h-16 bg-gradient-to-b from-white to-amber-50 md:h-20" />
        {/* Wavy foam edge */}
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="h-10 w-full md:h-14"
        >
          <path
            d="M0,0 
               C100,30 200,50 300,30 
               C400,10 500,40 600,30 
               C700,20 800,50 900,25 
               C1000,0 1100,35 1200,20 
               L1200,0 L0,0 Z"
            fill="white"
          />
          <path
            d="M0,5 
               C150,40 250,15 400,35 
               C550,55 650,20 800,40 
               C950,60 1050,25 1200,30 
               L1200,0 L0,0 Z"
            fill="#fffbeb"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Bubbles animation */}
      <Bubbles />

      <Header />
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-12 md:py-20">
        {/* Title Section */}
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-stone-700">
            ほろよいWEB3
          </p>
          <h1 className="mb-5 text-balance font-sans text-4xl font-bold tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
            Podcast Title Prediction
          </h1>
          <p className="mx-auto max-w-xl text-pretty text-base text-stone-700 md:text-lg">
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
