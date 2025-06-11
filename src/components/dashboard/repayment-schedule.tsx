import { motion } from 'framer-motion'
import { Calendar, CheckCircle2, Clock } from 'lucide-react'

interface Repayment {
  id: string
  amount: number
  dueDate: string
  status: 'upcoming' | 'completed' | 'overdue'
  type: 'minimum' | 'full'
}

interface RepaymentScheduleProps {
  repayments: Repayment[]
}

export function RepaymentSchedule({ repayments }: RepaymentScheduleProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  const getStatusColor = (status: Repayment['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-600'
      case 'overdue':
        return 'text-red-600'
      case 'upcoming':
        return 'text-blue-600'
      default:
        return 'text-gray-600'
    }
  }

  const getStatusIcon = (status: Repayment['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-5 w-5 text-green-600" />
      case 'overdue':
        return <Clock className="h-5 w-5 text-red-600" />
      case 'upcoming':
        return <Calendar className="h-5 w-5 text-blue-600" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-4">
      {repayments.map((repayment, index) => (
        <motion.div
          key={repayment.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
        >
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-gray-100 rounded-lg">
              {getStatusIcon(repayment.status)}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                {repayment.type === 'minimum' ? 'Minimum Payment' : 'Full Payment'}
              </p>
              <p className="text-sm text-gray-500">{formatDate(repayment.dueDate)}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-900">
              ${repayment.amount.toFixed(2)}
            </p>
            <p className={`text-xs ${getStatusColor(repayment.status)}`}>
              {repayment.status.charAt(0).toUpperCase() + repayment.status.slice(1)}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 