import { useCallback } from 'react'
import { useUserStore } from '@/store'
import { useNotifications } from './useNotifications'

interface TransactionData {
  amount: number
  type: 'store' | 'card'
  merchantFee: number
}

interface RevenueData {
  transactionFees: number
  interestIncome: number
  premiumFeatures: number
  floatYield: number
}

export const useBusinessEngineCalculation = () => {
  const { tier } = useUserStore()
  const { success, error } = useNotifications()

  const calculateTransactionFee = useCallback(
    (data: TransactionData): number => {
      const { amount, type, merchantFee } = data

      // Base transaction fee (1% for store, 0.6% for card)
      const baseFee = type === 'store' ? amount * 0.01 : amount * 0.006

      // Add merchant fee
      const totalFee = baseFee + (amount * merchantFee) / 100

      return totalFee
    },
    []
  )

  const calculateInterestIncome = useCallback(
    (creditLine: number, utilization: number, days: number): number => {
      // Base interest rate varies by tier
      const baseRate = {
        Bronze: 0.12,
        Silver: 0.11,
        Gold: 0.10,
        Platinum: 0.09,
        Diamond: 0.08,
      }[tier]

      // Calculate daily interest
      const dailyRate = baseRate / 365
      const interest = creditLine * utilization * dailyRate * days

      return interest
    },
    [tier]
  )

  const calculatePremiumFeatureRevenue = useCallback(
    (activeUsers: number): number => {
      // Premium feature pricing by tier
      const monthlyFee = {
        Bronze: 0,
        Silver: 10,
        Gold: 25,
        Platinum: 50,
        Diamond: 100,
      }[tier]

      return activeUsers * monthlyFee
    },
    [tier]
  )

  const calculateFloatYield = useCallback(
    (floatAmount: number, days: number): number => {
      // Assume 5% annual yield on idle funds
      const dailyRate = 0.05 / 365
      return floatAmount * dailyRate * days
    },
    []
  )

  const calculateTotalRevenue = useCallback(
    (data: RevenueData): number => {
      const { transactionFees, interestIncome, premiumFeatures, floatYield } = data
      return transactionFees + interestIncome + premiumFeatures + floatYield
    },
    []
  )

  const calculateExpectedLoss = useCallback(
    (creditLine: number, utilization: number): number => {
      // Base loss rate varies by tier
      const baseLossRate = {
        Bronze: 0.41, // 41% as mentioned in the README
        Silver: 0.35,
        Gold: 0.30,
        Platinum: 0.25,
        Diamond: 0.20,
      }[tier]

      return creditLine * utilization * baseLossRate
    },
    [tier]
  )

  return {
    calculateTransactionFee,
    calculateInterestIncome,
    calculatePremiumFeatureRevenue,
    calculateFloatYield,
    calculateTotalRevenue,
    calculateExpectedLoss,
  }
} 