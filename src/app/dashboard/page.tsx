'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { motion } from 'framer-motion'
import {
  CreditCard,
  TrendingUp,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { Line, Doughnut } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

const stats = [
  {
    name: 'Credit Score',
    value: '185',
    change: '+12',
    changeType: 'increase',
    icon: TrendingUp,
  },
  {
    name: 'Available Credit',
    value: '$100',
    change: '$50',
    changeType: 'increase',
    icon: CreditCard,
  },
  {
    name: 'Total Spent',
    value: '$450',
    change: '$120',
    changeType: 'increase',
    icon: DollarSign,
  },
]

const spendingData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Spending',
      data: [300, 450, 320, 500, 450, 600],
      borderColor: 'rgb(99, 102, 241)',
      backgroundColor: 'rgba(99, 102, 241, 0.5)',
      tension: 0.4,
    },
  ],
}

const spendingOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
}

const categoryData = {
  labels: ['Shopping', 'Food', 'Entertainment', 'Travel'],
  datasets: [
    {
      data: [40, 25, 20, 15],
      backgroundColor: [
        'rgba(99, 102, 241, 0.8)',
        'rgba(139, 92, 246, 0.8)',
        'rgba(236, 72, 153, 0.8)',
        'rgba(14, 165, 233, 0.8)',
      ],
    },
  ],
}

const categoryOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
}

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Welcome back! Here's an overview of your account.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
            >
              <dt>
                <div className="absolute rounded-md bg-indigo-500 p-3">
                  <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">
                  {stat.name}
                </p>
              </dt>
              <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">
                  {stat.value}
                </p>
                <p
                  className={`ml-2 flex items-baseline text-sm font-semibold ${
                    stat.changeType === 'increase'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {stat.changeType === 'increase' ? (
                    <ArrowUpRight className="h-4 w-4 flex-shrink-0 self-center text-green-500" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 flex-shrink-0 self-center text-red-500" />
                  )}
                  <span className="sr-only">
                    {stat.changeType === 'increase' ? 'Increased' : 'Decreased'} by
                  </span>
                  {stat.change}
                </p>
              </dd>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-lg bg-white p-6 shadow"
          >
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Spending History
            </h3>
            <div className="mt-6">
              <Line options={spendingOptions} data={spendingData} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-lg bg-white p-6 shadow"
          >
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Spending by Category
            </h3>
            <div className="mt-6">
              <Doughnut options={categoryOptions} data={categoryData} />
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  )
} 