'use client'

import { motion } from 'framer-motion'
import { DollarSign, CreditCard, TrendingUp, Banknote } from 'lucide-react'

const revenueStreams = [
  {
    icon: DollarSign,
    title: 'Instant-payout fee',
    description: '1% of every merchant settlement',
    color: 'from-green-500/20 to-green-600/20',
    textColor: 'text-green-400',
  },
  {
    icon: CreditCard,
    title: 'Interchange share',
    description: '~0.6% on card-rail spend',
    color: 'from-blue-500/20 to-blue-600/20',
    textColor: 'text-blue-400',
  },
  {
    icon: TrendingUp,
    title: 'Credit spread',
    description: 'Borrow at 5% stablecoin, lend at 12% APR',
    color: 'from-purple-500/20 to-purple-600/20',
    textColor: 'text-purple-400',
  },
  {
    icon: Banknote,
    title: 'Float yield',
    description: 'Idle USDC swept into T-bill–backed on-chain funds',
    color: 'from-amber-500/20 to-amber-600/20',
    textColor: 'text-amber-400',
  },
]

const merchantBenefits = [
  {
    title: 'Legacy Rails',
    pain: 'Payouts held 7–14 days or more for new sellers',
    solution: 'USDC lands the moment the sale clears—no reserves, no rolling holds',
  },
  {
    title: 'High Fees',
    pain: '3–4% card fees + chargebacks',
    solution: '1% Kori settlement fee, zero fraud chargebacks (Kori owns risk)',
  },
  {
    title: 'Limited Credit',
    pain: 'Small BNPL tickets (<$400)',
    solution: 'Basket sizes climb as users tap expanding Kori lines',
  },
]

export function BusinessEngine() {
  return (
    <section className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-kori-900 via-accent-950 to-kori-950" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Business Engine</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A sustainable revenue model that benefits both users and merchants.
          </p>
        </motion.div>

        {/* Revenue Streams */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {revenueStreams.map((stream, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stream.color} opacity-50`} />
              
              {/* Content */}
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-4">
                  <stream.icon className={`w-6 h-6 ${stream.textColor}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{stream.title}</h3>
                <p className="text-gray-300">{stream.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Merchant Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="glass-card p-8"
        >
          <h3 className="text-2xl font-bold mb-8 gradient-text text-center">Why Merchants Plug In</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {merchantBenefits.map((benefit, index) => (
              <div key={index} className="glass-card p-6">
                <h4 className="text-xl font-semibold mb-4 gradient-text">{benefit.title}</h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-2">Pain Point</div>
                    <p className="text-gray-300">{benefit.pain}</p>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-2">Kori Solution</div>
                    <p className="text-gray-300">{benefit.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Risk Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 glass-card p-8"
        >
          <h3 className="text-2xl font-bold mb-6 gradient-text text-center">Risk Management</h3>
          <p className="text-center text-gray-300 mb-8">
            Tiered exposure keeps expected loss below the BNPL late-payment rate of 41% reported in 2025 surveys.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 gradient-text">User Protection</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-kori-400 mt-1">•</span>
                  <span className="text-gray-300">Gradual credit line increases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-kori-400 mt-1">•</span>
                  <span className="text-gray-300">Smart contract-based limits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-kori-400 mt-1">•</span>
                  <span className="text-gray-300">Transparent scoring system</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 gradient-text">Merchant Protection</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-kori-400 mt-1">•</span>
                  <span className="text-gray-300">Instant USDC settlements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-kori-400 mt-1">•</span>
                  <span className="text-gray-300">No chargeback risk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-kori-400 mt-1">•</span>
                  <span className="text-gray-300">Growing customer base</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 