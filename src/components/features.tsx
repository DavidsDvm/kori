'use client'

import { motion } from 'framer-motion'
import { Wallet, CreditCard, Shield, TrendingUp, Clock, Gift } from 'lucide-react'

const features = [
  {
    icon: Wallet,
    title: 'Connect Wallet',
    description: 'Sign in with MetaMask and authorize read-only scan of your on-chain activity.',
  },
  {
    icon: CreditCard,
    title: 'Unlock Store Credit',
    description: 'Start with a Bronze tier line usable only at Kori partner stores.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your data stays private while building your credit score.',
  },
  {
    icon: TrendingUp,
    title: 'Build Credit Score',
    description: 'Every on-time repayment mints an immutable "repayment attestation" NFT.',
  },
  {
    icon: Clock,
    title: 'Instant Payouts',
    description: 'Merchants receive USDC instantly when you make a purchase.',
  },
  {
    icon: Gift,
    title: 'Earn Rewards',
    description: '1% USDC cash-back auto-stakes into a yield vault.',
  },
]

export function Features() {
  return (
    <section className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-kori-900 via-kori-950 to-accent-950" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">How Kori Works</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A step-by-step guide to turning your MetaMask debit card into a true credit card.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-kori-500/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-kori-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Flow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-24 glass-card p-8"
        >
          <h3 className="text-2xl font-bold mb-6 gradient-text text-center">The Flow</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'User',
                steps: [
                  'Connect MetaMask',
                  'Authorize data scan',
                  'View KoriScore',
                  'Start shopping',
                  'Make repayments',
                ],
              },
              {
                title: 'Behind the Scenes',
                steps: [
                  'Wallet ownership proof',
                  'On-chain data analysis',
                  'Smart contract scoring',
                  'Liquidity pool funding',
                  'NFT attestation minting',
                ],
              },
              {
                title: 'Merchant',
                steps: [
                  'Integrate Kori',
                  'Accept purchases',
                  'Receive instant USDC',
                  'No chargebacks',
                  'Growing basket sizes',
                ],
              },
            ].map((column, index) => (
              <div key={index} className="glass-card p-6">
                <h4 className="text-xl font-semibold mb-4 gradient-text">{column.title}</h4>
                <ul className="space-y-3">
                  {column.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-2">
                      <span className="text-kori-400 mt-1">•</span>
                      <span className="text-gray-300">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 