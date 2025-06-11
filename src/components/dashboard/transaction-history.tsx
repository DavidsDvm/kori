import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

interface Transaction {
  id: string
  type: 'credit' | 'debit'
  amount: number
  merchant: string
  date: string
  status: 'completed' | 'pending' | 'failed'
}

interface TransactionHistoryProps {
  transactions: Transaction[]
}

export function TransactionHistory({ transactions }: TransactionHistoryProps) {
  const getStatusColor = (status: Transaction['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-600'
      case 'pending':
        return 'text-yellow-600'
      case 'failed':
        return 'text-red-600'
      default:
        return 'text-gray-600'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <div className="space-y-4">
      {transactions.map((transaction, index) => (
        <motion.div
          key={transaction.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
        >
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-gray-100 rounded-lg">
              {transaction.type === 'credit' ? (
                <ArrowDownRight className="h-5 w-5 text-green-600" />
              ) : (
                <ArrowUpRight className="h-5 w-5 text-red-600" />
              )}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                {transaction.merchant}
              </p>
              <p className="text-sm text-gray-500">{formatDate(transaction.date)}</p>
            </div>
          </div>
          <div className="text-right">
            <p
              className={`text-sm font-semibold ${
                transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {transaction.type === 'credit' ? '+' : '-'}${Math.abs(
                transaction.amount
              ).toFixed(2)}
            </p>
            <p className={`text-xs ${getStatusColor(transaction.status)}`}>
              {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 