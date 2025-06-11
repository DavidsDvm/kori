'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { mainnet } from 'viem/chains'
import { http } from 'viem'
import { useEffect, useState } from 'react'


export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [config, setConfig] = useState<any>(null)
  const queryClient = new QueryClient()

  useEffect(() => {
    const initConfig = async () => {
      const config = getDefaultConfig({
        appName: 'Kori',
        projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '',
        chains: [mainnet],
        transports: {
          [mainnet.id]: http(),
        },
      })
      setConfig(config)
      setMounted(true)
    }

    initConfig()
  }, [])

  if (!mounted || !config) {
    return <>{children}</>
  }

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
} 