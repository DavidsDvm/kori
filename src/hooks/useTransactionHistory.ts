import { useCallback, useState } from 'react'
import { useUserStore } from '@/store'
import { useNotifications } from './useNotifications'
import { useCreditScore } from './useCreditScore'

interface Transaction {
  id: string
  date: string
  amount: number
  type: 'store' | 'card'
  merchant: string
  status: 'pending' | 'completed' | 'failed'
}

export const useTransactionHistory = () => {
  const { success, error } = useNotifications()
  const { updateScore } = useCreditScore()

  const [transactions, setTransactions] = useState<Transaction[]>([])

  const addTransaction = useCallback(
    (transaction: Omit<Transaction, 'id' | 'date'>) => {
      try {
        const newTransaction: Transaction = {
          ...transaction,
          id: Math.random().toString(36).substring(7),
          date: new Date().toISOString(),
        }

        setTransactions((prev: Transaction[]) => [...prev, newTransaction])

        // Update credit score based on transaction
        updateScore({
          walletAge: 30, // Mock value, should be calculated from wallet creation date
          transactionCount: transactions.length + 1,
          averageTransactionAmount:
            (transactions.reduce((sum: number, t: Transaction) => sum + t.amount, 0) + transaction.amount) /
            (transactions.length + 1),
          repaymentHistory: [], // This should be fetched from the repayment history
          stablecoinBalance: 1000, // Mock value, should be fetched from wallet
        })

        success('Transaction recorded successfully')
      } catch (err) {
        console.error('Failed to record transaction:', err)
        error('Failed to record transaction. Please try again.')
      }
    },
    [transactions, updateScore, success, error]
  )

  const getTransactionStats = useCallback(() => {
    const totalTransactions = transactions.length
    const totalAmount = transactions.reduce((sum: number, transaction: Transaction) => sum + transaction.amount, 0)
    const completedTransactions = transactions.filter(
      (transaction: Transaction) => transaction.status === 'completed'
    ).length
    const failedTransactions = transactions.filter(
      (transaction: Transaction) => transaction.status === 'failed'
    ).length
    const successRate = totalTransactions > 0 ? (completedTransactions / totalTransactions) * 100 : 0

    return {
      totalTransactions,
      totalAmount,
      completedTransactions,
      failedTransactions,
      successRate,
    }
  }, [transactions])

  const getTransactionTrend = useCallback(() => {
    const last30Days = new Date()
    last30Days.setDate(last30Days.getDate() - 30)

    const recentTransactions = transactions.filter(
      (transaction: Transaction) => new Date(transaction.date) >= last30Days
    )

    const dailyAmounts = recentTransactions.reduce((acc: Record<string, number>, transaction: Transaction) => {
      const date = new Date(transaction.date).toISOString().split('T')[0]
      acc[date] = (acc[date] || 0) + transaction.amount
      return acc
    }, {})

    return Object.entries(dailyAmounts).map(([date, amount]) => ({
      date,
      amount,
    }))
  }, [transactions])

  const getTransactionBreakdown = useCallback(() => {
    const storeTransactions = transactions.filter((transaction: Transaction) => transaction.type === 'store')
    const cardTransactions = transactions.filter((transaction: Transaction) => transaction.type === 'card')

    return {
      store: {
        total: storeTransactions.reduce((sum: number, transaction: Transaction) => sum + transaction.amount, 0),
        count: storeTransactions.length,
        successRate:
          storeTransactions.length > 0
            ? (storeTransactions.filter((transaction: Transaction) => transaction.status === 'completed').length /
                storeTransactions.length) *
              100
            : 0,
      },
      card: {
        total: cardTransactions.reduce((sum: number, transaction: Transaction) => sum + transaction.amount, 0),
        count: cardTransactions.length,
        successRate:
          cardTransactions.length > 0
            ? (cardTransactions.filter((transaction: Transaction) => transaction.status === 'completed').length /
                cardTransactions.length) *
              100
            : 0,
      },
    }
  }, [transactions])

  return {
    transactions: transactions.map(t => ({
      ...t,
      type: t.type === 'store' ? 'debit' as const : 'credit' as const
    })),
    addTransaction,
    getTransactionStats,
    getTransactionTrend,
    getTransactionBreakdown,
  }
} 