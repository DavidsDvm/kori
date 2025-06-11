'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { motion } from 'framer-motion'
import {
  Users,
  Share2,
  Gift,
  ArrowUpRight,
  CheckCircle2,
  Clock,
} from 'lucide-react'

const referrals = [
  {
    id: 1,
    name: 'Alice Smith',
    status: 'completed',
    date: '2024-03-15',
    reward: 50,
  },
  {
    id: 2,
    name: 'Bob Johnson',
    status: 'pending',
    date: '2024-03-10',
    reward: 50,
  },
  {
    id: 3,
    name: 'Carol White',
    status: 'completed',
    date: '2024-03-05',
    reward: 50,
  },
]

const rewards = [
  {
    id: 1,
    title: 'Refer a Friend',
    description: 'Get $50 in USDC for each friend who joins and makes their first purchase.',
    icon: Gift,
    status: 'active',
  },
  {
    id: 2,
    title: 'Early Adopter Bonus',
    description: 'Earn 2x rewards for referrals during our launch period.',
    icon: ArrowUpRight,
    status: 'active',
  },
]

export default function ReferralsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Referrals</h1>
          <p className="mt-1 text-sm text-gray-500">
            Invite friends and earn rewards in USDC.
          </p>
        </div>

        {/* Referral Stats */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg bg-white p-6 shadow"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Referrals</p>
                <p className="text-lg font-semibold text-gray-900">3</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-lg bg-white p-6 shadow"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Gift className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Rewards</p>
                <p className="text-lg font-semibold text-gray-900">$150</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-lg bg-white p-6 shadow"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Share2 className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Pending Rewards</p>
                <p className="text-lg font-semibold text-gray-900">$50</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Referral Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-lg bg-white p-6 shadow"
        >
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Your Referral Link
          </h3>
          <div className="mt-4">
            <div className="flex rounded-md shadow-sm">
              <input
                type="text"
                readOnly
                value="https://kori.com/ref/abc123"
                className="block w-full rounded-l-md border-0 py-3 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <button
                type="button"
                className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-4 py-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <Share2 className="h-5 w-5 text-gray-400" aria-hidden="true" />
                Copy
              </button>
            </div>
          </div>
        </motion.div>

        {/* Active Rewards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-lg bg-white shadow"
        >
          <div className="px-6 py-4">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Active Rewards
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <ul role="list" className="divide-y divide-gray-200">
              {rewards.map((reward) => (
                <li key={reward.id} className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <reward.icon className="h-6 w-6 text-indigo-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {reward.title}
                        </p>
                        <p className="text-sm text-gray-500">{reward.description}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                      {reward.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Referral History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-lg bg-white shadow"
        >
          <div className="px-6 py-4">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Referral History
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <ul role="list" className="divide-y divide-gray-200">
              {referrals.map((referral) => (
                <li key={referral.id} className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {referral.status === 'completed' ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : (
                        <Clock className="h-5 w-5 text-yellow-500" />
                      )}
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {referral.name}
                        </p>
                        <p className="text-sm text-gray-500">{referral.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">
                        ${referral.reward}
                      </p>
                      <p className="text-sm text-gray-500">{referral.status}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  )
} 