import { PredictionForm } from "@/components/prediction-form"
import { Header } from "@/components/header"
import { TrumpTweets } from "@/components/trump-tweets"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-20">
        {/* Title Section */}
        <div className="mb-8 text-center md:mb-12">
          <h1 className="mb-4 text-balance font-sans text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Predict Trump's Next Post on{" "}
            <img
              src="/images/x-logo.png"
              alt="X"
              className="inline-block h-10 w-10 -translate-y-1 align-bottom md:h-12 md:w-12 lg:h-16 lg:w-16"
            />
          </h1>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            Submit your best guess. AI scores your prediction daily.
          </p>
        </div>

        {/* Prediction Form */}
        <div className="mb-16">
          <PredictionForm />
        </div>

        <div className="mb-12">
          <TrumpTweets />
        </div>
      </div>
    </main>
  )
}
