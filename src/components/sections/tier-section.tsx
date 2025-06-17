'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Shield, Zap, CreditCard, Sparkles } from 'lucide-react'

export const TierSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-indigo-50/30 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-20 left-10 w-32 h-32 opacity-5" id="tier-bg-1">
          <circle cx="50%" cy="50%" r="40%" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="50%" cy="50%" r="20%" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
        <svg className="absolute top-40 right-20 w-24 h-24 opacity-10" id="tier-bg-2">
          <polygon points="50,10 90,90 10,90" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
        <svg className="absolute bottom-40 left-1/4 w-20 h-20 opacity-15" id="tier-bg-3">
          <rect x="25%" y="25%" width="50%" height="50%" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-20" 
          id="tier-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 ring-2 ring-indigo-200 mb-8">
            <TrendingUp className="w-4 h-4" />
            <span>Tier Progression System</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
            The Tier Ladder
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Progress through our credit tiers and unlock greater financial freedom with each level
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
              <span>Bronze</span>
            </div>
            <ArrowRight className="w-4 h-4" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <span>Silver</span>
            </div>
            <ArrowRight className="w-4 h-4" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <span>Gold</span>
            </div>
            <ArrowRight className="w-4 h-4" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
              <span>Platinum</span>
            </div>
            <ArrowRight className="w-4 h-4" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <span>Diamond</span>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6" id="tier-cards">
          {[
            { name: 'Bronze', score: '0-200', store: '$50-$100', card: '—', color: 'from-orange-400 to-orange-600', bgColor: 'from-orange-50 to-orange-100', textColor: 'text-orange-700', icon: Shield },
            { name: 'Silver', score: '201-400', store: 'Up to $300', card: '—', color: 'from-gray-400 to-gray-600', bgColor: 'from-gray-50 to-gray-100', textColor: 'text-gray-700', icon: Zap },
            { name: 'Gold', score: '401-600', store: '$600-$1,000', card: '—', color: 'from-yellow-400 to-yellow-600', bgColor: 'from-yellow-50 to-yellow-100', textColor: 'text-yellow-700', icon: TrendingUp },
            { name: 'Platinum', score: '601-800', store: '$1,500-$2,000', card: '$300-$500', color: 'from-slate-300 to-slate-500', bgColor: 'from-slate-50 to-slate-100', textColor: 'text-slate-700', icon: CreditCard },
            { name: 'Diamond', score: '801-1,000', store: '$3,000-$5,000', card: '$1,000-$2,000', color: 'from-cyan-300 to-blue-500', bgColor: 'from-cyan-50 to-blue-100', textColor: 'text-blue-700', icon: Sparkles }
          ].map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`tier-card tier-card-${index} relative cursor-pointer transform-gpu group`}
              data-tier={index}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "backOut" }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className={`tier-glow absolute inset-0 bg-gradient-to-br ${tier.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />
              <div className={`tier-content relative bg-gradient-to-br ${tier.bgColor} rounded-3xl p-6 border-2 border-transparent group-hover:border-gray-300 shadow-lg group-hover:shadow-2xl transition-all duration-500 backdrop-blur-sm`}>
                {/* Tier Badge */}
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    className={`w-14 h-14 bg-gradient-to-br ${tier.color} rounded-2xl flex items-center justify-center shadow-lg tier-icon group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "backOut" }}
                  >
                    <tier.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${tier.color} text-white`}>
                    TIER {index + 1}
                  </div>
                </div>
                
                <h3 className={`text-2xl font-bold mb-2 ${tier.textColor}`}>{tier.name}</h3>
                <p className="text-sm text-gray-600 mb-4 font-medium">Score: {tier.score}</p>
                
                <div className="space-y-4">
                  <div className="bg-white/60 rounded-xl p-3 backdrop-blur-sm">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Store Credit</p>
                    <p className="text-lg font-bold text-gray-900">{tier.store}</p>
                  </div>
                  <div className="bg-white/60 rounded-xl p-3 backdrop-blur-sm">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Card Credit</p>
                    <p className="text-lg font-bold text-gray-900">{tier.card}</p>
                  </div>
                </div>
                
                {/* Progress Indicator */}
                <div className="mt-4 pt-4 border-t border-white/50">
                  <div className="w-full bg-white/40 rounded-full h-2 overflow-hidden">
                    <motion.div 
                      className={`h-full bg-gradient-to-r ${tier.color} tier-progress tier-progress-${index}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${((index + 1) / 5) * 100}%` }}
                      viewport={{ once: false }}
                      transition={{ duration: 2, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-2 text-center font-medium">
                    {index < 4 ? `Next: ${['Silver', 'Gold', 'Platinum', 'Diamond'][index]}` : 'Maximum Tier'}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center" 
          id="tier-description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your existing MetaMask card becomes a powerful credit-building tool with Kori
          </p>
        </motion.div>
      </div>
    </section>
  )
} 