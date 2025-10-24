"use client"

import type React from "react"

import { PrivyProvider } from "@privy-io/react-auth"

export function PrivyProviderWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || "cmgkitjmr006xjn0cjwq4oogg"}
      config={{
        appearance: {
          theme: "light",
          accentColor: "#f97316",
        },
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      {children}
    </PrivyProvider>
  )
}
