'use client'

import dynamicImport from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useUserStore } from '@/store/user'
import { useReferral } from '@/hooks/useReferral'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Users, TrendingUp, Award } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { WalletGuard } from '@/components/guards/WalletGuard'

function ReferralsPage() {
  const {
    generateReferralCode,
    createReferral,
    getReferralStats,
    getReferralHistory,
    getReferralTrend,
  } = useReferral()

  const [referralCode, setReferralCode] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const code = generateReferralCode()
    setReferralCode(code)
  }, [generateReferralCode])

  const stats = getReferralStats()
  const history = getReferralHistory()
  const trend = getReferralTrend()

  const handleCopyCode = () => {
    if (referralCode) {
      navigator.clipboard.writeText(referralCode)
      setCopied(true)
      toast.success('Referral code copied to clipboard!')
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <WalletGuard>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Referral Program</h1>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Referrals</p>
                <p className="text-2xl font-semibold">{stats.totalReferrals}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-100 rounded-full">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Completed Referrals</p>
                <p className="text-2xl font-semibold">{stats.completedReferrals}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Rewards</p>
                <p className="text-2xl font-semibold">${stats.totalRewards.toFixed(2)}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Referral Code */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Referral Code</h2>
          <div className="flex items-center space-x-4">
            <div className="flex-1 p-4 bg-gray-50 rounded-lg">
              <p className="font-mono text-lg">{referralCode}</p>
            </div>
            <Button
              onClick={handleCopyCode}
              className={`${
                copied ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {copied ? 'Copied!' : 'Copy Code'}
            </Button>
          </div>
        </Card>

        {/* Referral History */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Referral History</h2>
          <div className="space-y-4">
            {history.map((referral) => (
              <motion.div
                key={referral.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium">
                    Referred ID: {referral.referredId.slice(0, 8)}...
                  </p>
                  <p className="text-sm text-gray-500">
                    Status: <span className="capitalize">{referral.status}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Created: {new Date(referral.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    ${referral.rewardAmount.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500 capitalize">
                    {referral.rewardType}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Referral Trend */}
        <Card className="p-6 mt-8">
          <h2 className="text-xl font-semibold mb-6">Referral Trend</h2>
          <div className="h-64">
            {/* Add a chart component here to visualize the trend data */}
            <div className="text-center text-gray-500">
              Chart visualization coming soon...
            </div>
          </div>
        </Card>
      </div>
    </WalletGuard>
  )
} 

// Export the dynamically loaded component
export default dynamicImport(() => Promise.resolve(ReferralsPage), {
  ssr: false
}) 