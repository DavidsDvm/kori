'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { motion } from 'framer-motion'
import {
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  DollarSign,
  Shield,
} from 'lucide-react'

const transactions = [
  {
    id: 1,
    type: 'purchase',
    merchant: 'Tech Haven',
    amount: 299.99,
    date: '2024-03-15',
    status: 'completed',
  },
  {
    id: 2,
    type: 'payment',
    merchant: 'Payment',
    amount: -150.00,
    date: '2024-03-10',
    status: 'completed',
  },
  {
    id: 3,
    type: 'purchase',
    merchant: 'Fashion Forward',
    amount: 89.99,
    date: '2024-03-05',
    status: 'completed',
  },
  {
    id: 4,
    type: 'purchase',
    merchant: 'Home Essentials',
    amount: 149.99,
    date: '2024-03-01',
    status: 'completed',
  },
]

const cardDetails = {
  number: '4242 4242 4242 4242',
  name: 'John Doe',
  expiry: '12/25',
  cvv: '123',
  type: 'Visa',
  limit: 1000,
  available: 450.03,
  used: 549.97,
}

export default function CardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Card</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your Kori credit card and view transactions.
          </p>
        </div>

        {/* Card Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 p-6 text-white shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8" />
              <span className="text-lg font-semibold">Kori</span>
            </div>
            <CreditCard className="h-8 w-8" />
          </div>
          <div className="mt-8">
            <p className="text-sm text-indigo-100">Card Number</p>
            <p className="mt-1 text-2xl tracking-wider">{cardDetails.number}</p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-indigo-100">Card Holder</p>
              <p className="mt-1 text-lg">{cardDetails.name}</p>
            </div>
            <div>
              <p className="text-sm text-indigo-100">Expires</p>
              <p className="mt-1 text-lg">{cardDetails.expiry}</p>
            </div>
          </div>
        </motion.div>

        {/* Card Stats */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-lg bg-white p-6 shadow"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <DollarSign className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Credit Limit</p>
                <p className="text-lg font-semibold text-gray-900">
                  ${cardDetails.limit}
                </p>
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
                <Clock className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Available Credit</p>
                <p className="text-lg font-semibold text-gray-900">
                  ${cardDetails.available}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-lg bg-white p-6 shadow"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CreditCard className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Credit Used</p>
                <p className="text-lg font-semibold text-gray-900">
                  ${cardDetails.used}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent Transactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-lg bg-white shadow"
        >
          <div className="px-6 py-4">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Recent Transactions
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <ul role="list" className="divide-y divide-gray-200">
              {transactions.map((transaction) => (
                <li key={transaction.id} className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {transaction.type === 'purchase' ? (
                        <ArrowDownRight className="h-5 w-5 text-red-500" />
                      ) : (
                        <ArrowUpRight className="h-5 w-5 text-green-500" />
                      )}
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {transaction.merchant}
                        </p>
                        <p className="text-sm text-gray-500">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`text-sm font-medium ${
                          transaction.type === 'purchase'
                            ? 'text-red-600'
                            : 'text-green-600'
                        }`}
                      >
                        {transaction.type === 'purchase' ? '-' : '+'}$
                        {Math.abs(transaction.amount).toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500">{transaction.status}</p>
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