import { PredictionForm } from "@/components/prediction-form"
import { Header } from "@/components/header"
import { PastEpisodes } from "@/components/past-episodes"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-4xl px-4 py-12 md:py-20">
        {/* Title Section */}
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Podcast Title Prediction
          </p>
          <h1 className="mb-5 text-balance font-sans text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            ほろよいWEB3
          </h1>
          <p className="mx-auto max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
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
    </main>
  )
}
