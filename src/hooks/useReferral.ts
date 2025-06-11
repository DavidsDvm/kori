import { useCallback, useState } from 'react'
import { useUserStore } from '@/store/user'
import { useNotifications } from './useNotifications'
import { useRewards } from './useRewards'

interface Referral {
  id: string
  referrerId: string
  referredId: string
  status: 'pending' | 'completed' | 'expired'
  date: string
  rewardAmount: number
  rewardType: 'cashback' | 'points'
}

interface ReferralStats {
  totalReferrals: number
  completedReferrals: number
  pendingReferrals: number
  totalRewards: number
  averageReward: number
}

export const useReferral = () => {
  const { user } = useUserStore()
  const { success, error } = useNotifications()
  const { addReward } = useRewards()

  const [referrals, setReferrals] = useState<Referral[]>([])

  const generateReferralCode = useCallback(() => {
    if (!user?.id) return null
    // Generate a unique referral code based on user ID
    return `${user.id.slice(0, 6)}-${Math.random().toString(36).substring(2, 6)}`
  }, [user?.id])

  const createReferral = useCallback(
    (referredId: string) => {
      if (!user?.id) {
        error('User must be logged in to create referrals')
        return null
      }

      try {
        const newReferral: Referral = {
          id: Math.random().toString(36).substring(7),
          referrerId: user.id,
          referredId,
          status: 'pending',
          date: new Date().toISOString(),
          rewardAmount: 0,
          rewardType: 'points',
        }

        setReferrals((prev: Referral[]) => [...prev, newReferral])
        success('Referral created successfully')
        return newReferral.id
      } catch (err) {
        console.error('Failed to create referral:', err)
        error('Failed to create referral. Please try again.')
        return null
      }
    },
    [user?.id, success, error]
  )

  const completeReferral = useCallback(
    (referralId: string) => {
      try {
        setReferrals((prev: Referral[]) =>
          prev.map((referral: Referral) => {
            if (referral.id === referralId) {
              // Calculate reward based on referral tier
              const rewardAmount = 100 // Base reward amount
              const rewardType = 'points'

              // Add reward to the referrer
              addReward({
                type: rewardType,
                amount: rewardAmount,
                status: 'pending',
                source: 'referral',
              })

              return {
                ...referral,
                status: 'completed',
                rewardAmount,
                rewardType,
              }
            }
            return referral
          })
        )
        success('Referral completed successfully')
      } catch (err) {
        console.error('Failed to complete referral:', err)
        error('Failed to complete referral. Please try again.')
      }
    },
    [addReward, success, error]
  )

  const getReferralStats = useCallback((): ReferralStats => {
    const totalReferrals = referrals.length
    const completedReferrals = referrals.filter(
      (r: Referral) => r.status === 'completed'
    ).length
    const pendingReferrals = referrals.filter(
      (r: Referral) => r.status === 'pending'
    ).length
    const totalRewards = referrals
      .filter((r: Referral) => r.status === 'completed')
      .reduce((sum: number, r: Referral) => sum + r.rewardAmount, 0)

    return {
      totalReferrals,
      completedReferrals,
      pendingReferrals,
      totalRewards,
      averageReward:
        completedReferrals > 0 ? totalRewards / completedReferrals : 0,
    }
  }, [referrals])

  const getReferralHistory = useCallback(() => {
    return referrals.map((referral: Referral) => ({
      ...referral,
      daysSinceCreation: Math.floor(
        (new Date().getTime() - new Date(referral.date).getTime()) /
          (1000 * 60 * 60 * 24)
      ),
    }))
  }, [referrals])

  const getReferralTrend = useCallback(() => {
    const last30Days = new Date()
    last30Days.setDate(last30Days.getDate() - 30)

    const recentReferrals = referrals.filter(
      (r: Referral) => new Date(r.date) >= last30Days
    )

    const dailyReferrals = recentReferrals.reduce(
      (acc: Record<string, number>, r: Referral) => {
        const date = new Date(r.date).toISOString().split('T')[0]
        acc[date] = (acc[date] || 0) + 1
        return acc
      },
      {}
    )

    return Object.entries(dailyReferrals).map(([date, count]) => ({
      date,
      count,
    }))
  }, [referrals])

  return {
    generateReferralCode,
    createReferral,
    completeReferral,
    getReferralStats,
    getReferralHistory,
    getReferralTrend,
  }
} 