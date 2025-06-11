'use client'

import { motion } from 'framer-motion'
import { Star, Shield, CreditCard, TrendingUp, Zap } from 'lucide-react'

const tiers = [
  {
    name: 'Bronze',
    score: '0-200',
    storeLine: '$50 – $100',
    cardLine: '—',
    icon: Star,
    color: 'from-amber-500/20 to-amber-600/20',
    textColor: 'text-amber-400',
    benefits: [
      'Below typical BNPL ticket',
      'Minimal risk exposure',
      'Partner store access',
    ],
  },
  {
    name: 'Silver',
    score: '201-400',
    storeLine: 'Up to $300',
    cardLine: '—',
    icon: Shield,
    color: 'from-gray-400/20 to-gray-500/20',
    textColor: 'text-gray-400',
    benefits: [
      'Under starter card range',
      'Expanded store access',
      'Growing credit line',
    ],
  },
  {
    name: 'Gold',
    score: '401-600',
    storeLine: '$600 – $1,000',
    cardLine: '—',
    icon: CreditCard,
    color: 'from-yellow-500/20 to-yellow-600/20',
    textColor: 'text-yellow-400',
    benefits: [
      'Top starter card range',
      'Merchant-locked credit',
      'Priority support',
    ],
  },
  {
    name: 'Platinum',
    score: '601-800',
    storeLine: '$1,500 – $2,000',
    cardLine: '$300 – $500',
    icon: TrendingUp,
    color: 'from-blue-500/20 to-blue-600/20',
    textColor: 'text-blue-400',
    benefits: [
      'Secured card access',
      'Open-loop credit',
      'Enhanced rewards',
    ],
  },
  {
    name: 'Diamond',
    score: '801-1,000',
    storeLine: '$3,000 – $5,000',
    cardLine: '$1,000 – $2,000',
    icon: Zap,
    color: 'from-purple-500/20 to-purple-600/20',
    textColor: 'text-purple-400',
    benefits: [
      'Maximum credit line',
      'Full card access',
      'VIP benefits',
    ],
  },
]

export function Tiers() {
  return (
    <section className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-950 via-kori-950 to-kori-900" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Credit Tiers</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Progress through our tier system as you build your credit score and repayment history.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-50`} />
              
              {/* Content */}
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tier.color} flex items-center justify-center`}>
                    <tier.icon className={`w-5 h-5 ${tier.textColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{tier.name}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400">Score Range</div>
                    <div className="font-semibold">{tier.score}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Store Credit Line</div>
                    <div className="font-semibold">{tier.storeLine}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Card Credit Line</div>
                    <div className="font-semibold">{tier.cardLine}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-2">Benefits</div>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2">
                          <span className={`${tier.textColor} mt-1`}>•</span>
                          <span className="text-sm text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 glass-card p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 gradient-text">Why It's Safe</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-kori-400 mt-1">•</span>
                  <span className="text-gray-300">Tiered exposure keeps expected loss below BNPL late-payment rate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-kori-400 mt-1">•</span>
                  <span className="text-gray-300">Open-loop credit capped at ~⅓ of closed-loop line</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-kori-400 mt-1">•</span>
                  <span className="text-gray-300">Smart contract-based risk management</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 gradient-text">How to Progress</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-kori-400 mt-1">•</span>
                  <span className="text-gray-300">Make on-time repayments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-kori-400 mt-1">•</span>
                  <span className="text-gray-300">Build repayment history</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-kori-400 mt-1">•</span>
                  <span className="text-gray-300">Maintain good credit utilization</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 