import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const mockResult = {
  id: "1",
  userPrediction: "Trump announces major White House personnel changes",
  actualHeadline:
    "I am pleased to announce that the great Dan Scavino, in addition to remaining Deputy Chief of Staff of the Trump Administration, will head the White House Presidential Personnel Office, replacing Sergio Gor, who did a wonderful job in that position, and will now become the Ambassador to India.",
  aiScore: 0.87,
  betAmount: 5,
  payout: 8.5,
  date: "October 12, 2025",
  postTime: "10:43 PM",
  won: true,
}

export default function ResultPage({ params }: { params: { id: string } }) {
  const result = mockResult
  const isWin = result.won

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            {isWin ? (
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            ) : (
              <XCircle className="h-16 w-16 text-red-500" />
            )}
          </div>
          <h1 className="mb-2 text-4xl font-bold">{isWin ? "Congratulations!" : "Better Luck Next Time"}</h1>
          <p className="text-lg text-muted-foreground">
            {isWin
              ? "Your prediction was close to Trump's actual post!"
              : "Your prediction didn't match Trump's actual post."}
          </p>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="mb-4 text-xl font-semibold">Prediction Details</h2>
            <div className="space-y-4">
              <div>
                <p className="mb-1 text-sm font-medium text-muted-foreground">Date</p>
                <p className="text-lg">
                  {result.date}, {result.postTime}
                </p>
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-muted-foreground">Your Prediction</p>
                <p className="text-lg">{result.userPrediction}</p>
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-muted-foreground">Trump's Actual Post on X</p>
                <p className="text-lg font-semibold">{result.actualHeadline}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="mb-4 text-xl font-semibold">AI Judgment</h2>
            <div className="space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-medium text-muted-foreground">Similarity Score</p>
                  <p className="text-2xl font-bold text-orange-500">{(result.aiScore * 100).toFixed(0)}%</p>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full bg-orange-500 transition-all" style={{ width: `${result.aiScore * 100}%` }} />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                The AI analyzed your prediction against Trump's actual post using semantic similarity.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="mb-4 text-xl font-semibold">Payout Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Bet Amount</span>
                <span className="font-semibold">{result.betAmount} USDC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">AI Score Multiplier</span>
                <span className="font-semibold">{result.aiScore.toFixed(2)}x</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between text-lg">
                  <span className="font-semibold">Total Payout</span>
                  <span className={`font-bold ${isWin ? "text-green-500" : "text-red-500"}`}>
                    {isWin ? `+${result.payout}` : "0"} USDC
                  </span>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex gap-4">
            <Link href="/" className="flex-1">
              <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">Make Another Prediction</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
