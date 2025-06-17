'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CreditCard, Store, TrendingUp, Sparkles } from 'lucide-react'
import { CreditCardNetwork, PaymentFlow, CreditScoreChart } from '@/components/animations'

export const FeaturesSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const parallaxRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const { scrollYProgress: parallaxProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const parallaxY1 = useTransform(parallaxProgress, [0, 1], [0, -200])
  const parallaxY2 = useTransform(parallaxProgress, [0, 1], [0, -100])
  const parallaxY3 = useTransform(parallaxProgress, [0, 1], [0, -300])

  const features = [
    {
      title: 'Credit Card Conversion',
      description: 'Turn your MetaMask debit card into a true revolving credit card.',
      icon: CreditCard,
      animation: CreditCardNetwork
    },
    {
      title: 'Instant Merchant Payments',
      description: 'Merchants get paid in seconds with instant USDC settlements.',
      icon: Store,
      animation: PaymentFlow
    },
    {
      title: 'Build Credit Score',
      description: 'Build your credit score with every transaction and repayment.',
      icon: TrendingUp,
      animation: CreditScoreChart
    },
  ]

  return (
    <div ref={parallaxRef} className="relative">
      {/* Parallax Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 opacity-10"
        style={{ y: parallaxY1 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" stroke="#4F46E5" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="25" stroke="#4F46E5" strokeWidth="1" fill="none" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-40 right-20 w-24 h-24 opacity-15"
        style={{ y: parallaxY2 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,10 90,90 10,90" stroke="#4F46E5" strokeWidth="2" fill="none" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-60 left-1/2 w-16 h-16 opacity-20"
        style={{ y: parallaxY3 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="25" y="25" width="50" height="50" stroke="#4F46E5" strokeWidth="2" fill="none" />
          <rect x="35" y="35" width="30" height="30" stroke="#4F46E5" strokeWidth="1" fill="none" />
        </svg>
      </motion.div>

      {/* Enhanced Features Section*/}
      <div ref={containerRef} id="features" className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 via-gray-100 to-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Enhanced Deploy Faster Section */}
          <div className="mx-auto max-w-4xl lg:text-center relative mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <div className="w-full h-full opacity-5">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    {[...Array(12)].map((_, i) => (
                      <motion.circle
                        key={i}
                        cx={50 + (i % 4) * 100}
                        cy={50 + Math.floor(i / 4) * 100}
                        r="2"
                        fill="#4F46E5"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                      />
                    ))}
                  </svg>
                </div>
              </div>

              {/* Enhanced Badge */}
              <motion.div
                className="inline-block mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-lg opacity-30" />
                  <span className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-3 text-sm font-semibold text-indigo-700 ring-2 ring-inset ring-indigo-200 shadow-lg">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                    Deploy faster
                  </span>
                </div>
              </motion.div>
              
              <motion.h2 
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
                  Everything you need to
                </span>
                <br />
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  deploy your app
                </span>
              </motion.h2>
              
              <motion.div
                className="mt-8 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-xl leading-8 text-gray-600 font-medium">
                  Kori provides a complete solution for converting MetaMask debit cards into credit cards while ensuring instant merchant payments.
                </p>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-xl" />
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl" />
            </motion.div>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 justify-center items-stretch" id="features-container">
              {features.map((feature, index) => {
                const isHovered = hoveredFeature === index
                const isOtherHovered = hoveredFeature !== null && hoveredFeature !== index

                return (
                  <div
                    key={feature.title}
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    className={`feature-card feature-card-${index} group relative overflow-hidden rounded-2xl bg-indigo-950 p-6 shadow-2xl border transition-all duration-300 ease-in-out will-change-transform min-h-[320px] ${
                      isHovered 
                        ? 'border-indigo-400 w-full lg:w-[400px] scale-105' 
                        : isOtherHovered 
                          ? 'opacity-70 w-full lg:w-[280px]' 
                          : 'hover:border-indigo-400 border-indigo-800 w-full lg:w-[320px]'
                    }`}
                    style={{
                      backgroundImage: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.05) 0%, transparent 70%)'
                    }}
                  >
                    {/* Enhanced Background Animation - Shifts to Right Side on Hover */}
                    <div
                      className={`feature-animation absolute flex items-center justify-center mix-blend-screen pointer-events-none transition-all duration-500 ease-in-out ${
                        isHovered 
                          ? 'right-4 top-1/2 -translate-y-1/2 opacity-50 scale-90 translate-x-2' 
                          : 'inset-0 opacity-20 scale-75'
                      }`}
                    >
                      <feature.animation className="w-48 h-48 lg:w-56 lg:h-56" />
                    </div>

                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_20px_rgba(99,102,241,0.3)] ring-1 ring-indigo-400/30" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Title Section - Fixed Height */}
                      <div className="h-[80px] flex items-start">
                        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white group-hover:text-slate-200 transition-colors duration-300">
                          <div className="feature-icon flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500 transition-all duration-300 hover:bg-indigo-400 flex-shrink-0 group-hover:scale-110">
                            <feature.icon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </div>
                          <span className={`transition-all duration-300 font-bold ${isHovered ? 'text-lg text-indigo-200' : 'text-white'}`}>
                            {feature.title}
                          </span>
                        </dt>
                      </div>
                      
                      {/* Content Section - Flexible Height */}
                      <dd className="flex flex-auto flex-col text-base leading-7 text-slate-200 group-hover:text-white transition-colors duration-300">
                        {/* Base description - hidden on hover */}
                        <div className={`overflow-hidden transition-all duration-400 ease-in-out ${
                          isHovered 
                            ? 'max-h-0 opacity-0' 
                            : 'max-h-32 opacity-100'
                        }`}>
                          <p className="text-base text-slate-300">
                            {feature.description}
                          </p>
                        </div>
                        
                        {/* Key Benefits - only visible on hover */}
                        <div className={`overflow-hidden transition-all duration-400 ease-in-out ${
                          isHovered 
                            ? 'max-h-48 opacity-100 flex-1' 
                            : 'max-h-0 opacity-0'
                        }`}>
                          <div className="text-sm text-slate-300 leading-relaxed space-y-3">
                            <p className="font-semibold text-indigo-300 text-base">Key Benefits</p>
                            {index === 0 && (
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                  <span className="text-indigo-400 font-bold">•</span>
                                  <span>Seamless blockchain integration</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-indigo-400 font-bold">•</span>
                                  <span>Maintains existing spending habits</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-indigo-400 font-bold">•</span>
                                  <span>Builds credit history automatically</span>
                                </li>
                              </ul>
                            )}
                            {index === 1 && (
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                  <span className="text-indigo-400 font-bold">•</span>
                                  <span>Eliminates payment waiting periods</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-indigo-400 font-bold">•</span>
                                  <span>Immediate USDC settlements</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-indigo-400 font-bold">•</span>
                                  <span>Improved merchant cash flow</span>
                                </li>
                              </ul>
                            )}
                            {index === 2 && (
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                  <span className="text-indigo-400 font-bold">•</span>
                                  <span>Partnership with major credit bureaus</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-indigo-400 font-bold">•</span>
                                  <span>Every transaction builds profile</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-indigo-400 font-bold">•</span>
                                  <span>Establishes financial standing</span>
                                </li>
                              </ul>
                            )}
                          </div>
                        </div>
                      </dd>
                      
                      {/* Learn More Link - Fixed Position at Bottom */}
                      <div className="mt-auto pt-4">
                        <a
                          href="#"
                          className="text-sm font-semibold leading-6 text-indigo-400 transition-all duration-300 hover:text-indigo-300 inline-flex items-center gap-1 hover:gap-2"
                        >
                          <span>Learn more</span>
                          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </a>
                      </div>
                    </div>

                    {/* Subtle Inner Shadow for Depth */}
                    <div className="absolute inset-0 rounded-2xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.3)] pointer-events-none" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Smooth Transition Bridge */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-50" />
      </div>
    </div>
  )
} 