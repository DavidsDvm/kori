'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Users, Globe } from 'lucide-react'

export const StatsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-indigo-50/30 via-indigo-900 to-indigo-800 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" id="stats-bg-grid">
          <defs>
            <pattern id="stats-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stats-grid)" />
        </svg>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="stats-float-1 absolute top-20 left-20 w-16 h-16 border-2 border-indigo-400/20 rounded-full" />
        <div className="stats-float-2 absolute top-40 right-32 w-12 h-12 border-2 border-indigo-300/30 rotate-45" />
        <div className="stats-float-3 absolute bottom-32 left-40 w-20 h-20 border-2 border-indigo-400/20 rounded-xl" />
        <div className="stats-float-4 absolute bottom-20 right-20 w-8 h-8 bg-indigo-400/20 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16" id="stats-header">
          <h2 className="text-4xl font-bold text-white mb-6 stats-title">
            Revolutionizing Financial Access
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto stats-subtitle">
            Real numbers that show the power of on-chain credit scoring
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="stats-grid">
          {[
            { icon: Zap, label: 'Settlement Time', value: '2', suffix: 'sec', prefix: '< ', description: 'Instant USDC payments', color: 'from-yellow-400 to-orange-500' },
            { icon: Shield, label: 'Default Rate', value: '2', suffix: '%', prefix: '< ', description: 'AI-powered risk assessment', color: 'from-green-400 to-emerald-500' },
            { icon: Users, label: 'Active Users', value: '50000', suffix: '+', prefix: '', description: 'Growing community', color: 'from-blue-400 to-cyan-500' },
            { icon: Globe, label: 'Merchant Network', value: '1000', suffix: '+', prefix: '', description: 'Partner stores', color: 'from-purple-400 to-pink-500' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`stat-card stat-card-${index} text-center group cursor-pointer`}
              data-stat={index}
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "backOut" }}
            >
              {/* Enhanced Card Background */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 group-hover:bg-white/10">
                {/* Icon with Enhanced Animation */}
                <div className={`stat-icon stat-icon-${index} inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                  <stat.icon className="w-10 h-10 text-white relative z-10" />
                  
                  {/* Ripple Effect */}
                  <div className={`stat-ripple stat-ripple-${index} absolute inset-0 rounded-2xl border-2 border-white/30 scale-100 opacity-0`} />
                </div>

                {/* Animated Counter */}
                <div className={`stat-value stat-value-${index} text-4xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="stat-prefix">{stat.prefix}</span>
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-suffix">{stat.suffix}</span>
                </div>

                <div className={`stat-label stat-label-${index} text-lg font-semibold text-indigo-200 mb-2 group-hover:text-white transition-colors duration-300`}>
                  {stat.label}
                </div>
                
                <div className={`stat-description stat-description-${index} text-sm text-indigo-300 group-hover:text-indigo-200 transition-colors duration-300`}>
                  {stat.description}
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
                    <motion.div 
                      className={`stat-progress stat-progress-${index} h-full bg-gradient-to-r ${stat.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: false }}
                      transition={{ duration: 2, delay: 1 + index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`stat-glow absolute inset-0 rounded-3xl bg-gradient-to-r ${stat.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20 -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 