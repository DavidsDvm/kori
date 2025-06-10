import { useCallback, useState } from 'react'
import { useUserStore } from '@/store'
import { useNotifications } from './useNotifications'

interface Reward {
  id: string
  type: 'cashback' | 'points' | 'tier_upgrade'
  amount: number
  date: string
  status: 'pending' | 'claimed' | 'expired'
  source: 'transaction' | 'repayment' | 'referral'
}

interface RewardsStats {
  totalCashback: number
  totalPoints: number
  pendingRewards: number
  claimedRewards: number
  expiredRewards: number
}

export const useRewards = () => {
  const { tier } = useUserStore()
  const { success, error } = useNotifications()

  const [rewards, setRewards] = useState<Reward[]>([])

  const calculateCashback = useCallback(
    (amount: number, type: 'store' | 'card'): number => {
      // Base cashback rate varies by tier and transaction type
      const baseRate = {
        Bronze: { store: 0.005, card: 0.01 }, // 0.5% store, 1% card
        Silver: { store: 0.01, card: 0.015 }, // 1% store, 1.5% card
        Gold: { store: 0.015, card: 0.02 }, // 1.5% store, 2% card
        Platinum: { store: 0.02, card: 0.025 }, // 2% store, 2.5% card
        Diamond: { store: 0.025, card: 0.03 }, // 2.5% store, 3% card
      }[tier]

      return amount * baseRate[type]
    },
    [tier]
  )

  const addReward = useCallback(
    (reward: Omit<Reward, 'id' | 'date'>) => {
      try {
        const newReward: Reward = {
          ...reward,
          id: Math.random().toString(36).substring(7),
          date: new Date().toISOString(),
        }

        setRewards((prev: Reward[]) => [...prev, newReward])
        success('Reward added successfully')
      } catch (err) {
        console.error('Failed to add reward:', err)
        error('Failed to add reward. Please try again.')
      }
    },
    [success, error]
  )

  const claimReward = useCallback(
    (rewardId: string) => {
      try {
        setRewards((prev: Reward[]) =>
          prev.map((reward: Reward) =>
            reward.id === rewardId
              ? { ...reward, status: 'claimed' as const }
              : reward
          )
        )
        success('Reward claimed successfully')
      } catch (err) {
        console.error('Failed to claim reward:', err)
        error('Failed to claim reward. Please try again.')
      }
    },
    [success, error]
  )

  const getRewardsStats = useCallback((): RewardsStats => {
    const totalCashback = rewards
      .filter((r: Reward) => r.type === 'cashback')
      .reduce((sum: number, r: Reward) => sum + r.amount, 0)

    const totalPoints = rewards
      .filter((r: Reward) => r.type === 'points')
      .reduce((sum: number, r: Reward) => sum + r.amount, 0)

    const pendingRewards = rewards.filter((r: Reward) => r.status === 'pending').length
    const claimedRewards = rewards.filter((r: Reward) => r.status === 'claimed').length
    const expiredRewards = rewards.filter((r: Reward) => r.status === 'expired').length

    return {
      totalCashback,
      totalPoints,
      pendingRewards,
      claimedRewards,
      expiredRewards,
    }
  }, [rewards])

  const getRewardsTrend = useCallback(() => {
    const last30Days = new Date()
    last30Days.setDate(last30Days.getDate() - 30)

    const recentRewards = rewards.filter(
      (r: Reward) => new Date(r.date) >= last30Days
    )

    const dailyAmounts = recentRewards.reduce(
      (acc: Record<string, number>, r: Reward) => {
        const date = new Date(r.date).toISOString().split('T')[0]
        acc[date] = (acc[date] || 0) + r.amount
        return acc
      },
      {}
    )

    return Object.entries(dailyAmounts).map(([date, amount]) => ({
      date,
      amount,
    }))
  }, [rewards])

  const getRewardsBreakdown = useCallback(() => {
    const cashbackRewards = rewards.filter((r: Reward) => r.type === 'cashback')
    const pointsRewards = rewards.filter((r: Reward) => r.type === 'points')
    const tierUpgradeRewards = rewards.filter((r: Reward) => r.type === 'tier_upgrade')

    return {
      cashback: {
        total: cashbackRewards.reduce((sum: number, r: Reward) => sum + r.amount, 0),
        count: cashbackRewards.length,
        claimedRate:
          cashbackRewards.length > 0
            ? (cashbackRewards.filter((r: Reward) => r.status === 'claimed').length /
                cashbackRewards.length) *
              100
            : 0,
      },
      points: {
        total: pointsRewards.reduce((sum: number, r: Reward) => sum + r.amount, 0),
        count: pointsRewards.length,
        claimedRate:
          pointsRewards.length > 0
            ? (pointsRewards.filter((r: Reward) => r.status === 'claimed').length /
                pointsRewards.length) *
              100
            : 0,
      },
      tierUpgrade: {
        total: tierUpgradeRewards.reduce((sum: number, r: Reward) => sum + r.amount, 0),
        count: tierUpgradeRewards.length,
        claimedRate:
          tierUpgradeRewards.length > 0
            ? (tierUpgradeRewards.filter((r: Reward) => r.status === 'claimed').length /
                tierUpgradeRewards.length) *
              100
            : 0,
      },
    }
  }, [rewards])

  return {
    rewards,
    calculateCashback,
    addReward,
    claimReward,
    getRewardsStats,
    getRewardsTrend,
    getRewardsBreakdown,
  }
} 