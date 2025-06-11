import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface CreditScoreProps {
  score: number
  factors: Array<{
    name: string
    impact: number
    description: string
  }>
}

export function CreditScore({ score, factors }: CreditScoreProps) {
  const getScoreColor = (score: number) => {
    if (score >= 800) return 'text-green-600'
    if (score >= 600) return 'text-blue-600'
    if (score >= 400) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreLabel = (score: number) => {
    if (score >= 800) return 'Excellent'
    if (score >= 600) return 'Good'
    if (score >= 400) return 'Fair'
    return 'Poor'
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Your Credit Score</p>
          <p className={`text-4xl font-bold ${getScoreColor(score)}`}>
            {score}
          </p>
          <p className="text-sm text-gray-500">{getScoreLabel(score)}</p>
        </div>
        <div className="h-24 w-24">
          {/* Add a circular progress indicator here */}
          <div className="relative h-full w-full">
            <svg className="h-full w-full" viewBox="0 0 100 100">
              <circle
                className="text-gray-200"
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
              />
              <circle
                className={getScoreColor(score)}
                strokeWidth="10"
                strokeDasharray={251.2}
                strokeDashoffset={251.2 - (251.2 * score) / 1000}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-900">Score Factors</h3>
        {factors.map((factor, index) => (
          <motion.div
            key={factor.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-3"
          >
            {factor.impact > 0 ? (
              <TrendingUp className="h-5 w-5 text-green-600" />
            ) : (
              <TrendingDown className="h-5 w-5 text-red-600" />
            )}
            <div>
              <p className="text-sm font-medium text-gray-900">{factor.name}</p>
              <p className="text-sm text-gray-500">{factor.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 