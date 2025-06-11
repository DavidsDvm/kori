'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUserStore } from '@/store/user'
import { useRewards } from '@/hooks/useRewards'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Gift, Coins, TrendingUp } from 'lucide-react'
import { useWallet } from '@/hooks/useWallet'

export default function RewardsPage() {
  const router = useRouter()
  const { isConnected } = useWallet()
  const {
    rewards,
    getRewardsStats,
    getRewardsBreakdown,
    claimReward,
  } = useRewards()

  useEffect(() => {
    if (!isConnected) {
      router.push('/')
    }
  }, [isConnected, router])

  if (!isConnected) {
    return null
  }

  const stats = getRewardsStats()
  const breakdown = getRewardsBreakdown()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Rewards Center</h1>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <Coins className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Cashback</p>
              <p className="text-2xl font-semibold">${stats.totalCashback.toFixed(2)}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-full">
              <Gift className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Points</p>
              <p className="text-2xl font-semibold">{stats.totalPoints}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-100 rounded-full">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending Rewards</p>
              <p className="text-2xl font-semibold">{stats.pendingRewards}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Rewards Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {Object.entries(breakdown).map(([type, data]) => (
          <Card key={type} className="p-6">
            <h3 className="text-lg font-semibold mb-4 capitalize">{type}</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="text-xl font-semibold">${data.total.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Rewards</p>
                <p className="text-xl font-semibold">{data.count}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Claimed Rate</p>
                <p className="text-xl font-semibold">{data.claimedRate.toFixed(1)}%</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Rewards List */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Available Rewards</h2>
        <div className="space-y-4">
          {rewards
            .filter((reward) => reward.status === 'pending')
            .map((reward) => (
              <motion.div
                key={reward.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium capitalize">{reward.type}</p>
                  <p className="text-sm text-gray-500">
                    Amount: ${reward.amount.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">
                    Source: {reward.source}
                  </p>
                </div>
                <Button
                  onClick={() => claimReward(reward.id)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Claim
                </Button>
              </motion.div>
            ))}
        </div>
      </Card>
    </div>
  )
} 