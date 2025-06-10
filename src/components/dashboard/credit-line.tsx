import { motion } from 'framer-motion'
import { CreditCard, Store, Wallet } from 'lucide-react'

interface CreditLineProps {
  storeLimit: number
  cardLimit: number
  totalLimit: number
}

export function CreditLine({ storeLimit, cardLimit, totalLimit }: CreditLineProps) {
  const limits = [
    {
      name: 'Store Credit',
      amount: storeLimit,
      icon: Store,
      description: 'Available at Kori partner stores',
    },
    {
      name: 'Card Credit',
      amount: cardLimit,
      icon: CreditCard,
      description: 'Available on your MetaMask card',
    },
    {
      name: 'Total Credit',
      amount: totalLimit,
      icon: Wallet,
      description: 'Your total available credit',
    },
  ]

  return (
    <div className="space-y-6">
      {limits.map((limit, index) => (
        <motion.div
          key={limit.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start space-x-4"
        >
          <div className="p-2 bg-gray-100 rounded-lg">
            <limit.icon className="h-5 w-5 text-gray-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">{limit.name}</p>
              <p className="text-sm font-semibold text-gray-900">
                ${limit.amount.toFixed(2)}
              </p>
            </div>
            <p className="text-sm text-gray-500">{limit.description}</p>
            <div className="mt-2 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{
                  width: `${(limit.amount / totalLimit) * 100}%`,
                }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 