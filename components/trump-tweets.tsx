"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"

interface Tweet {
  id: string
  text: string
  created_at: string
  author: {
    name: string
    username: string
    profile_image_url: string
  }
}

const SAMPLE_TWEETS: Tweet[] = [
  {
    id: "1",
    text: "I am pleased to announce that the great Dan Scavino, in addition to remaining Deputy Chief of Staff of the Trump Administration, will head the White House Presidential Personnel Office, replacing Sergio Gor, who did a wonderful job in that position, and will now become the Ambassador to India.",
    created_at: "2025-10-12T13:43:00Z",
    author: {
      name: "Donald J. Trump",
      username: "realDonaldTrump",
      profile_image_url: "/images/trump-profile.jpg",
    },
  },
  {
    id: "2",
    text: "It was great being with King Charles, Queen Camilla, and the Royal Family!",
    created_at: "2025-10-01T12:02:00Z",
    author: {
      name: "Donald J. Trump",
      username: "realDonaldTrump",
      profile_image_url: "/images/trump-profile.jpg",
    },
  },
  {
    id: "3",
    text: 'MY son Eric\'s just out book, "UNDER SIEGE," immediately went to NUMBER ONE on Amazon. Great going Eric, you deserve it!!!',
    created_at: "2025-09-16T03:20:00Z",
    author: {
      name: "Donald J. Trump",
      username: "realDonaldTrump",
      profile_image_url: "/images/trump-profile.jpg",
    },
  },
]

export function TrumpTweets() {
  const tweets = SAMPLE_TWEETS

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">Recent Posts</h2>
      <div className="flex flex-col gap-6">
        {tweets.map((tweet) => (
          <Link key={tweet.id} href={`/predictions/${tweet.id}`} className="block">
            <Card className="cursor-pointer p-6 transition-all hover:border-orange-500/50 hover:shadow-md">
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
          </Link>
        ))}
      </div>
    </div>
  )
}
