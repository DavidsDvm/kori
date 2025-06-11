import { useCallback, useState } from 'react'
import { useNotifications } from './useNotifications'

interface MerchantData {
  id: string
  name: string
  status: 'active' | 'inactive' | 'pending'
  integrationDate: string
  transactions: Transaction[]
}

interface Transaction {
  id: string
  amount: number
  date: string
  status: 'completed' | 'pending' | 'failed'
}

interface IntegrationStats {
  totalVolume: number
  transactionCount: number
  averageTransaction: number
  successRate: number
}

export const useMerchantIntegration = () => {
  const { success, error } = useNotifications()
  const [merchants, setMerchants] = useState<MerchantData[]>([])

  const addMerchant = useCallback(
    (name: string) => {
      try {
        const newMerchant: MerchantData = {
          id: Math.random().toString(36).substring(7),
          name,
          status: 'active',
          integrationDate: new Date().toISOString(),
          transactions: [],
        }

        setMerchants((prev) => [...prev, newMerchant])
        success('Merchant added successfully')
      } catch (err) {
        console.error('Failed to add merchant:', err)
        error('Failed to add merchant. Please try again.')
      }
    },
    [success, error]
  )

  const processTransaction = useCallback(
    (merchantId: string, amount: number) => {
      try {
        setMerchants((prev) =>
          prev.map((merchant) => {
            if (merchant.id === merchantId) {
              const transaction: Transaction = {
                id: Math.random().toString(36).substring(7),
                amount,
                date: new Date().toISOString(),
                status: 'completed',
              }

              return {
                ...merchant,
                transactions: [...merchant.transactions, transaction],
              }
            }
            return merchant
          })
        )
        success('Transaction processed successfully')
      } catch (err) {
        console.error('Failed to process transaction:', err)
        error('Failed to process transaction. Please try again.')
      }
    },
    [success, error]
  )

  const getMerchantStats = useCallback(
    (merchantId: string): IntegrationStats => {
      const merchant = merchants.find((m) => m.id === merchantId)
      if (!merchant) {
        return {
          totalVolume: 0,
          transactionCount: 0,
          averageTransaction: 0,
          successRate: 0,
        }
      }

      const completedTransactions = merchant.transactions.filter(
        (t) => t.status === 'completed'
      )
      const totalVolume = completedTransactions.reduce(
        (sum, t) => sum + t.amount,
        0
      )

      return {
        totalVolume,
        transactionCount: completedTransactions.length,
        averageTransaction:
          completedTransactions.length > 0
            ? totalVolume / completedTransactions.length
            : 0,
        successRate:
          merchant.transactions.length > 0
            ? (completedTransactions.length / merchant.transactions.length) * 100
            : 0,
      }
    },
    [merchants]
  )

  const getMerchantTrend = useCallback(
    (merchantId: string) => {
      const merchant = merchants.find((m) => m.id === merchantId)
      if (!merchant) return []

      const last30Days = new Date()
      last30Days.setDate(last30Days.getDate() - 30)

      const recentTransactions = merchant.transactions.filter(
        (t) => new Date(t.date) >= last30Days
      )

      const dailyAmounts = recentTransactions.reduce(
        (acc: Record<string, number>, t) => {
          const date = new Date(t.date).toISOString().split('T')[0]
          acc[date] = (acc[date] || 0) + t.amount
          return acc
        },
        {}
      )

      return Object.entries(dailyAmounts).map(([date, amount]) => ({
        date,
        amount,
      }))
    },
    [merchants]
  )

  return {
    merchants,
    addMerchant,
    processTransaction,
    getMerchantStats,
    getMerchantTrend,
  }
} 