import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { useUserStore } from '@/store'

export const useWallet = () => {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const { setKoriScore, setTier } = useUserStore()

  const handleConnect = async (connectorId: string) => {
    try {
      const connector = connectors.find((c) => c.id === connectorId)
      if (connector) {
        await connect({ connector })
        // Mock Kori score calculation based on wallet age and transaction history
        // In a real implementation, this would be calculated on the backend
        const mockScore = Math.floor(Math.random() * 200) + 100
        setKoriScore(mockScore)
        
        // Set tier based on score
        if (mockScore >= 800) setTier('Diamond')
        else if (mockScore >= 600) setTier('Platinum')
        else if (mockScore >= 400) setTier('Gold')
        else if (mockScore >= 200) setTier('Silver')
        else setTier('Bronze')
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error)
    }
  }

  const handleDisconnect = () => {
    disconnect()
  }

  return {
    address,
    isConnected,
    connectors,
    connect: handleConnect,
    disconnect: handleDisconnect,
  }
} 