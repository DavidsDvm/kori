import { useCallback, useState } from 'react'
import { useUserStore } from '@/store'
import { useNotifications } from './useNotifications'

interface CreditLineFactors {
  koriScore: number
  monthlyIncome: number
  repaymentHistory: Array<{
    date: string
    amount: number
    status: 'on-time' | 'late'
  }>
  existingDebt: number
}

export const useCreditLineCalculation = () => {
  const { setStoreCreditLine, setCardCreditLine } = useUserStore()
  const { success, error } = useNotifications()
  const [storeLimit, setStoreLimit] = useState(0)
  const [cardLimit, setCardLimit] = useState(0)

  const calculateStoreCreditLine = useCallback(
    (factors: CreditLineFactors): number => {
      const { koriScore, monthlyIncome, repaymentHistory, existingDebt } = factors

      // Base credit line from Kori score (0-1000)
      let baseLine = koriScore * 2

      // Adjust based on monthly income (capped at 3x monthly income)
      const incomeBasedLine = monthlyIncome * 3
      baseLine = Math.min(baseLine, incomeBasedLine)

      // Adjust based on repayment history
      const repaymentScore = repaymentHistory.reduce((score, repayment) => {
        return score + (repayment.status === 'on-time' ? 1 : -1.5)
      }, 0)
      const repaymentMultiplier = Math.max(0.5, Math.min(1.5, 1 + repaymentScore * 0.1))
      baseLine *= repaymentMultiplier

      // Reduce for existing debt
      baseLine = Math.max(0, baseLine - existingDebt)

      // Apply tier-based limits
      if (koriScore >= 800) return Math.min(baseLine, 5000) // Diamond
      if (koriScore >= 600) return Math.min(baseLine, 2000) // Platinum
      if (koriScore >= 400) return Math.min(baseLine, 1000) // Gold
      if (koriScore >= 200) return Math.min(baseLine, 300) // Silver
      return Math.min(baseLine, 100) // Bronze
    },
    []
  )

  const calculateCardCreditLine = useCallback(
    (factors: CreditLineFactors): number => {
      const storeLine = calculateStoreCreditLine(factors)
      // Card credit line is capped at 1/3 of store credit line
      return Math.floor(storeLine / 3)
    },
    [calculateStoreCreditLine]
  )

  const updateCreditLines = useCallback(
    (factors: CreditLineFactors) => {
      try {
        const storeLine = calculateStoreCreditLine(factors)
        const cardLine = calculateCardCreditLine(factors)

        setStoreCreditLine(storeLine)
        setCardCreditLine(cardLine)
        setStoreLimit(storeLine)
        setCardLimit(cardLine)

        success('Credit lines updated successfully')
      } catch (err) {
        console.error('Failed to update credit lines:', err)
        error('Failed to update credit lines. Please try again.')
      }
    },
    [calculateStoreCreditLine, calculateCardCreditLine, setStoreCreditLine, setCardCreditLine, success, error]
  )

  return {
    storeLimit,
    cardLimit,
    totalLimit: storeLimit + cardLimit,
    calculateStoreCreditLine,
    calculateCardCreditLine,
    updateCreditLines,
  }
} 