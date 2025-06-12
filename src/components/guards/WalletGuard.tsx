'use client'

import { useAccount } from 'wagmi'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

interface WalletGuardProps {
  children: React.ReactNode
}

export function WalletGuard({ children }: WalletGuardProps) {
  const { isConnected } = useAccount()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!isConnected) {
      const pageName = pathname.split('/').pop() || 'this page'
      toast.error(`Please connect your wallet to access ${pageName}`)
      router.replace('/')
    }
  }, [isConnected, router, pathname])

  if (!isConnected) {
    return null
  }

  return <>{children}</>
} 