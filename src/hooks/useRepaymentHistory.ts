import { useCallback } from 'react'
import { useUserStore } from '@/store'
import { useNotifications } from './useNotifications'
import { useKoriScore } from './useKoriScore'

interface Repayment {
  date: string
  amount: number
  status: 'on-time' | 'late'
  type: 'store' | 'card'
}

export const useRepaymentHistory = () => {
  const { repaymentHistory, addRepayment } = useUserStore()
  const { updateScore } = useKoriScore()
  const { success, error } = useNotifications()

  const addNewRepayment = useCallback(
    (repayment: Omit<Repayment, 'date'>) => {
      try {
        const newRepayment: Repayment = {
          ...repayment,
          date: new Date().toISOString(),
        }

        addRepayment(newRepayment)
        updateScore(newRepayment)

        success('Repayment recorded successfully')
      } catch (err) {
        console.error('Failed to record repayment:', err)
        error('Failed to record repayment. Please try again.')
      }
    },
    [addRepayment, updateScore, success, error]
  )

  const getRepaymentStats = useCallback(() => {
    const totalRepayments = repaymentHistory.length
    const totalAmount = repaymentHistory.reduce((sum, repayment) => sum + repayment.amount, 0)
    const onTimeRepayments = repaymentHistory.filter((repayment) => repayment.status === 'on-time').length
    const lateRepayments = repaymentHistory.filter((repayment) => repayment.status === 'late').length
    const onTimeRate = totalRepayments > 0 ? (onTimeRepayments / totalRepayments) * 100 : 0

    return {
      totalRepayments,
      totalAmount,
      onTimeRepayments,
      lateRepayments,
      onTimeRate,
    }
  }, [repaymentHistory])

  const getRepaymentTrend = useCallback(() => {
    const last30Days = new Date()
    last30Days.setDate(last30Days.getDate() - 30)

    const recentRepayments = repaymentHistory.filter(
      (repayment) => new Date(repayment.date) >= last30Days
    )

    const dailyAmounts = recentRepayments.reduce((acc, repayment) => {
      const date = new Date(repayment.date).toISOString().split('T')[0]
      acc[date] = (acc[date] || 0) + repayment.amount
      return acc
    }, {} as Record<string, number>)

    return Object.entries(dailyAmounts).map(([date, amount]) => ({
      date,
      amount,
    }))
  }, [repaymentHistory])

  const getRepaymentBreakdown = useCallback(() => {
    const storeRepayments = repaymentHistory.filter((repayment) => repayment.type === 'store')
    const cardRepayments = repaymentHistory.filter((repayment) => repayment.type === 'card')

    return {
      store: {
        total: storeRepayments.reduce((sum, repayment) => sum + repayment.amount, 0),
        count: storeRepayments.length,
        onTimeRate:
          storeRepayments.length > 0
            ? (storeRepayments.filter((repayment) => repayment.status === 'on-time').length /
                storeRepayments.length) *
              100
            : 0,
      },
      card: {
        total: cardRepayments.reduce((sum, repayment) => sum + repayment.amount, 0),
        count: cardRepayments.length,
        onTimeRate:
          cardRepayments.length > 0
            ? (cardRepayments.filter((repayment) => repayment.status === 'on-time').length /
                cardRepayments.length) *
              100
            : 0,
      },
    }
  }, [repaymentHistory])

  return {
    repayments: repaymentHistory.map(r => ({
      id: Math.random().toString(36).substring(7),
      amount: r.amount,
      dueDate: r.date,
      status: r.status === 'on-time' ? 'completed' as const : 'overdue' as const,
      type: 'minimum' as const
    })),
    addNewRepayment,
    getRepaymentStats,
    getRepaymentTrend,
    getRepaymentBreakdown,
  }
} 