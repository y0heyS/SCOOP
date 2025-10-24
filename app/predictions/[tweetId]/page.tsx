import { Header } from "@/components/header"
import { PredictionList } from "@/components/prediction-list"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

// Sample tweet data - in a real app, this would come from a database or API
const TWEETS = {
  "1": {
    id: "1",
    text: "I am pleased to announce that the great Dan Scavino, in addition to remaining Deputy Chief of Staff of the Trump Administration, will head the White House Presidential Personnel Office, replacing Sergio Gor, who did a wonderful job in that position, and will now become the Ambassador to India.",
    created_at: "2025-10-12T13:43:00Z",
    author: {
      name: "Donald J. Trump",
      username: "realDonaldTrump",
      profile_image_url: "/images/trump-profile.jpg",
    },
  },
  "2": {
    id: "2",
    text: "It was great being with King Charles, Queen Camilla, and the Royal Family!",
    created_at: "2025-10-01T12:02:00Z",
    author: {
      name: "Donald J. Trump",
      username: "realDonaldTrump",
      profile_image_url: "/images/trump-profile.jpg",
    },
  },
  "3": {
    id: "3",
    text: 'MY son Eric\'s just out book, "UNDER SIEGE," immediately went to NUMBER ONE on Amazon. Great going Eric, you deserve it!!!',
    created_at: "2025-09-16T03:20:00Z",
    author: {
      name: "Donald J. Trump",
      username: "realDonaldTrump",
      profile_image_url: "/images/trump-profile.jpg",
    },
  },
}

export default function PredictionsPage({
  params,
}: {
  params: { tweetId: string }
}) {
  const tweet = TWEETS[params.tweetId as keyof typeof TWEETS]

  if (!tweet) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="mx-auto max-w-5xl px-4 py-12">
          <p className="text-center text-muted-foreground">Tweet not found</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-20">
        {/* Back button */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Tweet Display */}
        <div className="mb-8">
          <h1 className="mb-6 text-3xl font-bold text-foreground">Predictions for this Post</h1>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <img
                src={tweet.author.profile_image_url || "/placeholder.svg"}
                alt={tweet.author.name}
                className="h-12 w-12 rounded-full"
              />
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <span className="font-bold">{tweet.author.name}</span>
                  <span className="text-muted-foreground">@{tweet.author.username}</span>
                </div>
                <p className="text-foreground">{tweet.text}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {new Date(tweet.created_at).toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Predictions List */}
        <PredictionList />
      </div>
    </main>
  )
}
