'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUserStore } from '@/store/user'
import { useMerchantIntegration } from '@/hooks/useMerchantIntegration'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Store, TrendingUp, DollarSign } from 'lucide-react'

export default function MerchantsPage() {
  const router = useRouter()
  const { user } = useUserStore()
  const {
    merchants,
    getMerchantStats,
    getMerchantTrend,
    processTransaction,
  } = useMerchantIntegration()

  useEffect(() => {
    if (!user) {
      router.push('/')
    }
  }, [user, router])

  if (!user) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Merchant Dashboard</h1>

      {/* Merchant Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <Store className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Merchants</p>
              <p className="text-2xl font-semibold">{merchants.length}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-full">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Merchants</p>
              <p className="text-2xl font-semibold">
                {merchants.filter((m) => m.status === 'active').length}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-100 rounded-full">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Transactions</p>
              <p className="text-2xl font-semibold">
                {merchants.reduce((sum, m) => sum + m.transactions.length, 0)}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Merchant List */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Merchant List</h2>
        <div className="space-y-4">
          {merchants.map((merchant) => {
            const stats = getMerchantStats(merchant.id)
            const trend = getMerchantTrend(merchant.id)

            return (
              <motion.div
                key={merchant.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium">{merchant.name}</p>
                  <p className="text-sm text-gray-500">
                    Status: <span className="capitalize">{merchant.status}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Integration Date: {new Date(merchant.integrationDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    ${stats.totalVolume.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">
                    {stats.transactionCount} transactions
                  </p>
                  <Button
                    onClick={() => processTransaction(merchant.id, 100)} // Example amount
                    className="mt-2"
                    size="sm"
                  >
                    Test Transaction
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Card>

      {/* Merchant Trends */}
      <Card className="p-6 mt-8">
        <h2 className="text-xl font-semibold mb-6">Merchant Trends</h2>
        <div className="h-64">
          {/* Add a chart component here to visualize the trend data */}
          <div className="text-center text-gray-500">
            Chart visualization coming soon...
          </div>
        </div>
      </Card>
    </div>
  )
} 