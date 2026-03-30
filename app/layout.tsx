import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { PrivyProviderWrapper } from "@/lib/privy-provider"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "ほろよいWEB3 | 次回タイトル予測",
  description: "ほろよいWEB3 Podcastの次回エピソードタイトルを予測しよう。AIが毎週あなたの予測を採点します。",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <PrivyProviderWrapper>{children}</PrivyProviderWrapper>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
