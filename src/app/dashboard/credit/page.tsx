'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { motion } from 'framer-motion'
import {
  TrendingUp,
  Clock,
  CreditCard,
  DollarSign,
  Shield,
  AlertCircle,
} from 'lucide-react'

const factors = [
  {
    name: 'Payment History',
    score: 85,
    icon: Clock,
    description: 'Your consistent on-time payments have helped build a strong payment history.',
  },
  {
    name: 'Credit Utilization',
    score: 65,
    icon: CreditCard,
    description: 'Try to keep your credit utilization below 30% to improve this score.',
  },
  {
    name: 'Account Age',
    score: 45,
    icon: TrendingUp,
    description: 'Your account is relatively new. This will improve over time.',
  },
  {
    name: 'Total Debt',
    score: 75,
    icon: DollarSign,
    description: 'Your total debt is well managed and within acceptable limits.',
  },
  {
    name: 'Credit Mix',
    score: 55,
    icon: Shield,
    description: 'Consider diversifying your credit types to improve this score.',
  },
]

const recommendations = [
  {
    title: 'Keep up the good work!',
    description: 'Your payment history is excellent. Continue making payments on time.',
    icon: TrendingUp,
    type: 'positive',
  },
  {
    title: 'Reduce credit utilization',
    description: 'Try to keep your credit utilization below 30% to improve your score.',
    icon: AlertCircle,
    type: 'warning',
  },
  {
    title: 'Build credit history',
    description: 'Your account is new. Continue using your credit responsibly to build history.',
    icon: Clock,
    type: 'info',
  },
]

export default function CreditScorePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Credit Score</h1>
          <p className="mt-1 text-sm text-gray-500">
            Your credit score and factors that affect it.
          </p>
        </div>

        {/* Main Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-medium text-gray-900">Current Score</h2>
              <p className="mt-1 text-sm text-gray-500">
                Based on your credit history and behavior
              </p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-bold text-indigo-600">185</p>
              <p className="mt-1 text-sm text-green-600">+12 points this month</p>
            </div>
          </div>
        </motion.div>

        {/* Factors */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-lg bg-white p-6 shadow"
          >
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Credit Factors
            </h3>
            <div className="mt-6 space-y-6">
              {factors.map((factor) => (
                <div key={factor.name} className="flex items-start">
                  <div className="flex-shrink-0">
                    <factor.icon
                      className="h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        {factor.name}
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        {factor.score}%
                      </p>
                    </div>
                    <div className="mt-2">
                      <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200">
                        <div
                          className="absolute inset-y-0 left-0 bg-indigo-600"
                          style={{ width: `${factor.score}%` }}
                        />
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      {factor.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-lg bg-white p-6 shadow"
          >
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Recommendations
            </h3>
            <div className="mt-6 space-y-6">
              {recommendations.map((recommendation) => (
                <div
                  key={recommendation.title}
                  className={`rounded-lg p-4 ${
                    recommendation.type === 'positive'
                      ? 'bg-green-50'
                      : recommendation.type === 'warning'
                      ? 'bg-yellow-50'
                      : 'bg-blue-50'
                  }`}
                >
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <recommendation.icon
                        className={`h-5 w-5 ${
                          recommendation.type === 'positive'
                            ? 'text-green-400'
                            : recommendation.type === 'warning'
                            ? 'text-yellow-400'
                            : 'text-blue-400'
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-gray-900">
                        {recommendation.title}
                      </h4>
                      <p className="mt-1 text-sm text-gray-500">
                        {recommendation.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  )
} 