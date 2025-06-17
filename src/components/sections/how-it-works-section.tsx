'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Wallet, Brain, ChartBar } from 'lucide-react'

export const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-indigo-50/30 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="how-it-works-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#how-it-works-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-20" 
          id="how-it-works-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 ring-2 ring-indigo-200 mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Simple Process</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            How Kori Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From wallet connection to credit building, experience the future of finance in three simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12" id="how-it-works-steps">
          {[
            {
              step: '01',
              title: 'Connect & Scan',
              description: 'Link your MetaMask wallet and authorize our oracle to scan your on-chain activity and debit card usage patterns.',
              icon: Wallet,
              color: 'from-indigo-500 to-indigo-600',
              bgColor: 'from-indigo-50 to-indigo-100'
            },
            {
              step: '02', 
              title: 'Get Scored',
              description: 'Our AI analyzes 200+ variables to generate your KoriScore and unlock your initial credit tier instantly.',
              icon: Brain,
              color: 'from-purple-500 to-purple-600',
              bgColor: 'from-purple-50 to-purple-100'
            },
            {
              step: '03',
              title: 'Spend & Build',
              description: 'Use your credit at partner stores, repay on time, and watch your score climb through our tier system.',
              icon: ChartBar,
              color: 'from-indigo-600 to-purple-600',
              bgColor: 'from-indigo-50 to-purple-100'
            }
          ].map((step, index) => (
            <motion.div
              key={step.step}
              className={`how-it-works-step step-${index} relative group`}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "backOut" }}
            >
              {/* Connecting Line */}
              {index < 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-indigo-300 to-indigo-400 z-10">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-indigo-500" />
                  </div>
                </div>
              )}

              <div className={`relative bg-gradient-to-br ${step.bgColor} rounded-3xl p-8 border-2 border-transparent group-hover:border-indigo-200 shadow-lg group-hover:shadow-2xl transition-all duration-500 backdrop-blur-sm overflow-hidden`}>
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="currentColor" />
                  </svg>
                </div>

                {/* Step Badge */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "backOut" }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white step-badge`}>
                    STEP {step.step}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-900 transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{step.description}</p>

                {/* Progress Indicator */}
                <div className="mt-6 pt-4 border-t border-white/50">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-medium">Progress</span>
                    <span className="text-gray-700 font-bold">{Math.round(((index + 1) / 3) * 100)}%</span>
                  </div>
                  <div className="w-full bg-white/60 rounded-full h-2 mt-2 overflow-hidden">
                    <motion.div 
                      className={`h-full bg-gradient-to-r ${step.color} step-progress step-progress-${index}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${((index + 1) / 3) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.5 + index * 0.2, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Hover Effect Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-gray-200">
            <div className="flex -space-x-2">
              {[1,2,3].map((i) => (
                <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-r ${['from-indigo-400 to-indigo-500', 'from-purple-400 to-purple-500', 'from-indigo-500 to-purple-500'][i-1]} border-2 border-white`} />
              ))}
            </div>
            <p className="text-sm font-medium text-gray-700">
              Join <span className="font-bold text-indigo-600">50,000+</span> users building their credit with Kori
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 