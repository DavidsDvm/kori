import { useCallback, useState } from 'react'
import { useUserStore } from '@/store'
import { useNotifications } from './useNotifications'

interface CreditFactors {
  walletAge: number // in days
  transactionCount: number
  averageTransactionAmount: number
  repaymentHistory: Array<{
    date: string
    amount: number
    status: 'on-time' | 'late'
  }>
  stablecoinBalance: number
}

export const useCreditScore = () => {
  const { setKoriScore, setTier } = useUserStore()
  const { success, error } = useNotifications()
  const [score, setScore] = useState(0)
  const [factors, setFactors] = useState<CreditFactors>({
    walletAge: 0,
    transactionCount: 0,
    averageTransactionAmount: 0,
    repaymentHistory: [],
    stablecoinBalance: 0
  })

  const calculateScore = useCallback(
    (factors: CreditFactors): number => {
      let score = 0

      // Wallet age factor (max 200 points)
      const walletAgeScore = Math.min(factors.walletAge * 0.5, 200)
      score += walletAgeScore

      // Transaction history factor (max 200 points)
      const transactionScore = Math.min(factors.transactionCount * 10, 200)
      score += transactionScore

      // Average transaction amount factor (max 200 points)
      const avgTransactionScore = Math.min(factors.averageTransactionAmount * 0.1, 200)
      score += avgTransactionScore

      // Repayment history factor (max 200 points)
      const repaymentScore = factors.repaymentHistory.reduce((total, repayment) => {
        return total + (repayment.status === 'on-time' ? 20 : -30)
      }, 0)
      score += Math.min(Math.max(repaymentScore, 0), 200)

      // Stablecoin balance factor (max 200 points)
      const balanceScore = Math.min(factors.stablecoinBalance * 0.01, 200)
      score += balanceScore

      return Math.min(Math.max(Math.round(score), 0), 1000)
    },
    []
  )

  const updateScore = useCallback(
    (newFactors: CreditFactors) => {
      try {
        const newScore = calculateScore(newFactors)
        setKoriScore(newScore)
        setScore(newScore)
        setFactors(newFactors)

        // Update tier based on new score
        if (newScore >= 800) setTier('Diamond')
        else if (newScore >= 600) setTier('Platinum')
        else if (newScore >= 400) setTier('Gold')
        else if (newScore >= 200) setTier('Silver')
        else setTier('Bronze')

        success('Credit score updated successfully')
      } catch (err) {
        console.error('Failed to update credit score:', err)
        error('Failed to update credit score. Please try again.')
      }
    },
    [calculateScore, setKoriScore, setTier, success, error]
  )

  const getScoreFactors = useCallback((factors: CreditFactors) => {
    const rawFactors = {
      walletAge: Math.min(factors.walletAge * 0.5, 200),
      transactionHistory: Math.min(factors.transactionCount * 10, 200),
      averageTransaction: Math.min(factors.averageTransactionAmount * 0.1, 200),
      repaymentHistory: factors.repaymentHistory.reduce((total, repayment) => {
        return total + (repayment.status === 'on-time' ? 20 : -30)
      }, 0),
      stablecoinBalance: Math.min(factors.stablecoinBalance * 0.01, 200),
    }

    return [
      {
        name: 'Wallet Age',
        impact: rawFactors.walletAge,
        description: 'Based on how long you\'ve been using Kori'
      },
      {
        name: 'Transaction History',
        impact: rawFactors.transactionHistory,
        description: 'Based on your number of transactions'
      },
      {
        name: 'Average Transaction',
        impact: rawFactors.averageTransaction,
        description: 'Based on your average transaction amount'
      },
      {
        name: 'Repayment History',
        impact: rawFactors.repaymentHistory,
        description: 'Based on your repayment behavior'
      },
      {
        name: 'Stablecoin Balance',
        impact: rawFactors.stablecoinBalance,
        description: 'Based on your stablecoin holdings'
      }
    ]
  }, [])

  return {
    score,
    factors: getScoreFactors(factors),
    calculateScore,
    updateScore,
    getScoreFactors,
  }
} 