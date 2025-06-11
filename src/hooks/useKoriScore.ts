import { useUserStore } from '@/store'

export const useKoriScore = () => {
  const { koriScore, tier, repaymentHistory, setKoriScore, setTier } = useUserStore()

  const calculateNewScore = (repayment: { amount: number; status: 'on-time' | 'late' }) => {
    // In a real implementation, this would be a more complex calculation
    // For now, we'll use a simple formula
    const baseChange = repayment.status === 'on-time' ? 10 : -20
    const amountMultiplier = Math.min(repayment.amount / 100, 1)
    return Math.max(0, Math.min(1000, koriScore + baseChange * amountMultiplier))
  }

  const updateScore = (repayment: { amount: number; status: 'on-time' | 'late' }) => {
    const newScore = calculateNewScore(repayment)
    setKoriScore(newScore)

    // Update tier based on new score
    if (newScore >= 800) setTier('Diamond')
    else if (newScore >= 600) setTier('Platinum')
    else if (newScore >= 400) setTier('Gold')
    else if (newScore >= 200) setTier('Silver')
    else setTier('Bronze')
  }

  const getScoreColor = () => {
    if (koriScore >= 800) return 'text-purple-500'
    if (koriScore >= 600) return 'text-blue-500'
    if (koriScore >= 400) return 'text-yellow-500'
    if (koriScore >= 200) return 'text-gray-400'
    return 'text-amber-700'
  }

  const getScoreLabel = () => {
    if (koriScore >= 800) return 'Excellent'
    if (koriScore >= 600) return 'Very Good'
    if (koriScore >= 400) return 'Good'
    if (koriScore >= 200) return 'Fair'
    return 'Poor'
  }

  return {
    koriScore,
    tier,
    repaymentHistory,
    updateScore,
    getScoreColor,
    getScoreLabel,
  }
} 