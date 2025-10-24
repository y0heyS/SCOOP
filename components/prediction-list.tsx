import { RefreshCw, ExternalLink } from "lucide-react"

const predictions = [
  {
    id: 1,
    user: "0xA963637F4...",
    time: "8h ago",
    prediction: "Sony Announces New Gaming Console",
    score: 0.89,
    amount: 12,
    earlyBonus: true,
  },
  {
    id: 2,
    user: "0xeA64094E0...",
    time: "7h ago",
    prediction: "Japanese Economy Records Higher Than Expected Growth",
    score: 0.76,
    amount: 10,
    earlyBonus: true,
  },
  {
    id: 3,
    user: "0x7B3C9D2A1...",
    time: "6h ago",
    prediction: "Research Team Discovers New AI Technology Breakthrough",
    score: 0.72,
    amount: 9,
    earlyBonus: false,
  },
  {
    id: 4,
    user: "0x9F8E7D6C5...",
    time: "5h ago",
    prediction: "Major Nations Agree on New Climate Change Accord",
    score: 0.68,
    amount: 8,
    earlyBonus: false,
  },
  {
    id: 5,
    user: "0x4A5B6C7D8...",
    time: "4h ago",
    prediction: "Rising Star Breaks Record in Sports World",
    score: 0.65,
    amount: 11,
    earlyBonus: false,
  },
]

export function PredictionList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Predictions</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-accent">AI Score</span>
          <span className="text-sm text-muted-foreground">Bet</span>
        </div>
      </div>

      <div className="space-y-3">
        {predictions.map((pred) => (
          <div
            key={pred.id}
            className="group rounded-lg border border-border bg-card p-4 transition-all hover:border-accent/50 hover:shadow-sm"
          >
            <div className="mb-2 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span className="font-mono text-sm text-muted-foreground">{pred.user}</span>
                <span className="text-sm text-muted-foreground">{pred.time}</span>
              </div>
            </div>

            <div className="mb-3 flex items-start justify-between gap-4">
              <p className="flex-1 text-base font-medium leading-relaxed text-card-foreground">{pred.prediction}</p>
              <div className="flex shrink-0 items-center gap-6">
                <span className="text-lg font-semibold text-accent">{pred.score.toFixed(2)}</span>
                <span className="text-lg font-semibold text-foreground">${pred.amount}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-muted-foreground">
              <button className="flex items-center gap-1 text-sm transition-colors hover:text-foreground">
                <RefreshCw className="h-3.5 w-3.5" />
              </button>
              <button className="flex items-center gap-1 text-sm transition-colors hover:text-foreground">
                <ExternalLink className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
