import { NextResponse } from "next/server"

export const revalidate = 300 // Cache for 5 minutes

export async function GET() {
  const bearerToken = process.env.TWITTER_BEARER_TOKEN

  if (!bearerToken) {
    return NextResponse.json({ error: "Twitter API credentials not configured" }, { status: 500 })
  }

  try {
    const userId = "25073877" // realDonaldTrump's user ID

    // Fetch the user's recent tweets
    const tweetsResponse = await fetch(
      `https://api.twitter.com/2/users/${userId}/tweets?max_results=5&tweet.fields=created_at&expansions=author_id&user.fields=name,username,profile_image_url`,
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
        next: { revalidate: 300 },
      },
    )

    if (!tweetsResponse.ok) {
      const errorData = await tweetsResponse.json()
      console.error("[v0] Twitter API error:", tweetsResponse.status, errorData)

      if (tweetsResponse.status === 429) {
        return NextResponse.json({
          tweets: [
            {
              id: "1",
              text: "Make America Great Again! 🇺🇸",
              created_at: new Date().toISOString(),
              author: {
                name: "Donald J. Trump",
                username: "realDonaldTrump",
                profile_image_url: "/public-figure-speech.png",
              },
            },
            {
              id: "2",
              text: "The fake news media is at it again. Sad!",
              created_at: new Date(Date.now() - 3600000).toISOString(),
              author: {
                name: "Donald J. Trump",
                username: "realDonaldTrump",
                profile_image_url: "/public-figure-speech.png",
              },
            },
          ],
          cached: true,
          message: "Showing sample data due to API rate limits",
        })
      }

      throw new Error("Failed to fetch tweets")
    }

    const tweetsData = await tweetsResponse.json()

    // Format the response to match our component's expected structure
    const formattedTweets = tweetsData.data?.map((tweet: any) => ({
      id: tweet.id,
      text: tweet.text,
      created_at: tweet.created_at,
      author: {
        name: tweetsData.includes?.users?.[0]?.name || "Donald J. Trump",
        username: tweetsData.includes?.users?.[0]?.username || "realDonaldTrump",
        profile_image_url: tweetsData.includes?.users?.[0]?.profile_image_url || "/public-figure-speech.png",
      },
    }))

    return NextResponse.json({ tweets: formattedTweets || [] })
  } catch (error) {
    console.error("[v0] Twitter API error:", error)

    return NextResponse.json({
      tweets: [
        {
          id: "1",
          text: "Make America Great Again! 🇺🇸",
          created_at: new Date().toISOString(),
          author: {
            name: "Donald J. Trump",
            username: "realDonaldTrump",
            profile_image_url: "/public-figure-speech.png",
          },
        },
      ],
      cached: true,
      message: "Showing sample data due to API error",
    })
  }
}
