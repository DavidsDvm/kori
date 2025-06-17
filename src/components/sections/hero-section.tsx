'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'
import { WalletConnect } from '@/components/wallet-connect'

export const HeroSection = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen flex items-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 -z-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-indigo-400/10 to-purple-400/10 blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 ring-2 ring-indigo-200 mb-8">
                <Sparkles className="w-4 h-4" />
                <span>The Future of Credit is Here</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8"
            >
              Turn Your MetaMask Debit into Credit
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl leading-8 text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              The on-chain engine that converts every MetaMask debit card into a true revolving credit card—while merchants get paid in seconds.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
            >
              <WalletConnect />
              <motion.a
                href="#features"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-900 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span>Explore Features</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                { value: '< 2s', label: 'Settlement Time' },
                { value: '1,000+', label: 'Merchants' },
                { value: '< 2%', label: 'Default Rate' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Card Display */}
          <div className="mt-16 sm:mt-24 lg:mt-0 flex items-center justify-center relative">
            {/* Geometric Background */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <svg
                width="800"
                height="800"
                viewBox="0 0 800 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[120%] h-[120%]"
              >
                <path
                  d="M800 0H300v250L0 400v200l300 200v0.2h200v-0.2l300-200h200V0z"
                  fill="#4F46E5"
                  className="opacity-10"
                />
                <path
                  d="M750 50H350v200L100 375v150l250 175v0.1h150v-0.1l250-175h150V50z"
                  fill="#4F46E5"
                  className="opacity-5"
                />
              </svg>
            </div>
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ? 'images/metamask-card4x.avif' : '/images/metamask-card4x.avif'}`}
                alt="metamask card" 
                width={500} 
                height={500}
                className="w-full h-auto max-w-lg relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Smooth Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-white/50 to-gray-50" />
    </div>
  )
} 