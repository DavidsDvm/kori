'use client'

import dynamicImport from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useMerchantIntegration } from '@/hooks/useMerchantIntegration'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Store, TrendingUp, DollarSign, Clock, AlertCircle, CheckCircle2 } from 'lucide-react'
import { useWalletConnection } from '@/hooks/useWalletConnection'
import { WalletGuard } from '@/components/guards/WalletGuard'

function MerchantsPageContent() {
  const [mounted, setMounted] = useState(false)
  const { checkWalletConnection } = useWalletConnection()
  const {
    merchants,
    getMerchantStats,
    getMerchantTrend,
    processTransaction,
  } = useMerchantIntegration()

  useEffect(() => {
    setMounted(true)
  })

  if (!mounted) {
    return null
  }

  const totalSettlementFees = merchants.reduce((sum, m) => {
    const stats = getMerchantStats(m.id)
    return sum + (stats.totalVolume * 0.01) // 1% settlement fee
  }, 0)

  return (
    <WalletGuard>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Merchant Dashboard</h1>

        {/* Merchant Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
                <p className="text-sm text-gray-500">Total Volume</p>
                <p className="text-2xl font-semibold">
                  ${merchants.reduce((sum, m) => sum + getMerchantStats(m.id).totalVolume, 0).toFixed(2)}
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-yellow-100 rounded-full">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Settlement Fees</p>
                <p className="text-2xl font-semibold">${totalSettlementFees.toFixed(2)}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Merchant List */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Merchant List</h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                Export Data
              </Button>
              <Button size="sm">
                Add Merchant
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            {merchants.map((merchant) => {
              const stats = getMerchantStats(merchant.id)
              const trend = getMerchantTrend(merchant.id)

              return (
                <motion.div
                  key={merchant.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <p className="font-medium">{merchant.name}</p>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        merchant.status === 'active' 
                          ? 'bg-green-100 text-green-800'
                          : merchant.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {merchant.status}
                      </span>
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">
                          Integration Date: {new Date(merchant.integrationDate).toLocaleDateString()}
                        </p>
                        <p className="text-sm text-gray-500">
                          Success Rate: {stats.successRate.toFixed(1)}%
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          Avg. Transaction: ${stats.averageTransaction.toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-500">
                          Settlement Fee: ${(stats.totalVolume * 0.01).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <p className="font-medium">
                      ${stats.totalVolume.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">
                      {stats.transactionCount} transactions
                    </p>
                    <div className="mt-2 flex space-x-2">
                      <Button
                        onClick={() => processTransaction(merchant.id, 100)}
                        className="mt-2"
                        size="sm"
                        variant="outline"
                      >
                        Test Transaction
                      </Button>
                      <Button
                        className="mt-2"
                        size="sm"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Card>

        {/* Merchant Benefits */}
        <Card className="p-6 mt-8">
          <h2 className="text-xl font-semibold mb-6">Why Merchants Choose Kori</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">Instant Settlements</h3>
              </div>
              <p className="text-sm text-gray-600">
                Get paid in USDC the moment the sale clears—no reserves, no rolling holds.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <DollarSign className="h-5 w-5 text-green-600" />
                <h3 className="font-medium">Lower Fees</h3>
              </div>
              <p className="text-sm text-gray-600">
                1% Kori settlement fee, zero fraud chargebacks (Kori owns risk).
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                <h3 className="font-medium">Growing Basket Sizes</h3>
              </div>
              <p className="text-sm text-gray-600">
                Basket sizes climb as users tap expanding Kori credit lines.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </WalletGuard>
  )
}

// Export the dynamically loaded component
export default dynamicImport(() => Promise.resolve(MerchantsPageContent), {
  ssr: false
}) 