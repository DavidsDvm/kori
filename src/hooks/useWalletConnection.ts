import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { useWallet } from './useWallet'

export const useWalletConnection = () => {
  const router = useRouter()
  const { isConnected } = useWallet()

  const checkWalletConnection = (pageName: string) => {
    if (!isConnected) {
      router.push('/')
      toast.error(`Please connect your wallet to access ${pageName}`)
      return false
    }
    return true
  }

  return {
    checkWalletConnection,
    isConnected
  }
} 