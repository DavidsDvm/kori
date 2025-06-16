'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useUserStore } from '@/store/user'
import { WalletConnect } from '@/components/wallet-connect'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, CreditCard, Store, TrendingUp } from 'lucide-react'

// Credit Card Network Animation
const CreditCardNetwork = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Central Credit Card */}
      <motion.rect
        x="100"
        y="120"
        width="100"
        height="60"
        rx="8"
        stroke="#FFB087"
        strokeWidth="2"
        fill="none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      
      {/* Card chip */}
      <motion.rect
        x="115"
        y="135"
        width="15"
        height="12"
        rx="2"
        fill="#FFB087"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
      
      {/* Card stripes */}
      {[0, 1, 2].map((i) => (
        <motion.line
          key={i}
          x1="140"
          y1={145 + i * 8}
          x2="180"
          y2={145 + i * 8}
          stroke="#FFB087"
          strokeWidth="1.5"
          opacity="0.7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.2 + i * 0.2 }}
        />
      ))}

      {/* Network connections */}
      {[
        { x: 50, y: 50, delay: 0.5 },
        { x: 250, y: 80, delay: 0.7 },
        { x: 80, y: 250, delay: 0.9 },
        { x: 220, y: 220, delay: 1.1 }
      ].map((node, i) => (
        <g key={i}>
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="8"
            fill="#FFB087"
            opacity="0.6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: node.delay }}
          />
          <motion.line
            x1="150"
            y1="150"
            x2={node.x}
            y2={node.y}
            stroke="#FFB087"
            strokeWidth="1"
            opacity="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: node.delay + 0.3 }}
          />
        </g>
      ))}

      {/* Pulsing signals */}
      {[0, 1, 2, 3].map((i) => (
        <motion.circle
          key={i}
          cx="150"
          cy="150"
          r="30"
          stroke="#FFB087"
          strokeWidth="1"
          fill="none"
          opacity="0"
          animate={{
            r: [30, 80],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.7,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}
    </svg>
  )
}

// Payment Flow Animation
const PaymentFlow = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Merchant store */}
      <motion.rect
        x="50"
        y="120"
        width="40"
        height="40"
        rx="4"
        stroke="#FFB087"
        strokeWidth="2"
        fill="none"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      />
      
      {/* Store icon */}
      <motion.path
        d="M60 135 L70 125 L80 135 V155 H60 V135Z"
        stroke="#FFB087"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Customer wallet */}
      <motion.rect
        x="210"
        y="120"
        width="40"
        height="40"
        rx="4"
        stroke="#FFB087"
        strokeWidth="2"
        fill="none"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* Wallet icon */}
      <motion.rect
        x="220"
        y="130"
        width="20"
        height="15"
        rx="2"
        stroke="#FFB087"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />

      {/* Payment flow arrows */}
      <motion.path
        d="M95 140 Q150 120 205 140"
        stroke="#FFB087"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrowhead)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />

      {/* USDC settlement arrow */}
      <motion.path
        d="M205 145 Q150 165 95 145"
        stroke="#FFB087"
        strokeWidth="2"
        fill="none"
        strokeDasharray="5,5"
        markerEnd="url(#arrowhead)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 2 }}
      />

      {/* USDC label */}
      <motion.text
        x="150"
        y="175"
        textAnchor="middle"
        fill="#FFB087"
        fontSize="12"
        fontWeight="600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        USDC
      </motion.text>

      {/* Moving payment particles */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          r="3"
          fill="#FFB087"
          opacity="0.8"
          animate={{
            cx: [95, 150, 205, 95],
            cy: [140, 120, 140, 140]
          }}
          transition={{
            duration: 2,
            delay: 1.5 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Arrow marker definition */}
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon
            points="0 0, 10 3.5, 0 7"
            fill="#FFB087"
          />
        </marker>
      </defs>

      {/* Speed indicators */}
      {[...Array(6)].map((_, i) => (
        <motion.line
          key={i}
          x1={120 + i * 10}
          y1="100"
          x2={125 + i * 10}
          y2="90"
          stroke="#FFB087"
          strokeWidth="2"
          opacity="0.6"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: 0.3,
            delay: 3 + i * 0.1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1
          }}
        />
      ))}
    </svg>
  )
}

// Credit Score Chart Animation
const CreditScoreChart = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Chart axes */}
      <motion.line
        x1="50"
        y1="50"
        x2="50"
        y2="250"
        stroke="#FFB087"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.line
        x1="50"
        y1="250"
        x2="250"
        y2="250"
        stroke="#FFB087"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* Score bars */}
      {[
        { height: 60, x: 80, delay: 1 },
        { height: 100, x: 120, delay: 1.2 },
        { height: 140, x: 160, delay: 1.4 },
        { height: 180, x: 200, delay: 1.6 }
      ].map((bar, i) => (
        <motion.rect
          key={i}
          x={bar.x}
          y={250 - bar.height}
          width="25"
          height={bar.height}
          fill="#FFB087"
          opacity="0.7"
          initial={{ height: 0, y: 250 }}
          animate={{ height: bar.height, y: 250 - bar.height }}
          transition={{ duration: 0.8, delay: bar.delay, ease: "easeOut" }}
        />
      ))}

      {/* Trend line */}
      <motion.path
        d="M80 190 L120 150 L160 110 L200 70"
        stroke="#FFB087"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 2 }}
      />

      {/* Score points */}
      {[
        { x: 80, y: 190 },
        { x: 120, y: 150 },
        { x: 160, y: 110 },
        { x: 200, y: 70 }
      ].map((point, i) => (
        <motion.circle
          key={i}
          cx={point.x}
          cy={point.y}
          r="5"
          fill="#FFB087"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 2.5 + i * 0.2 }}
        />
      ))}

      {/* Score labels */}
      {['600', '650', '700', '750'].map((score, i) => (
        <motion.text
          key={i}
          x={80 + i * 40}
          y={270}
          textAnchor="middle"
          fill="#FFB087"
          fontSize="12"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 + i * 0.1 }}
        >
          {score}
        </motion.text>
      ))}

      {/* Upward arrow */}
      <motion.path
        d="M220 60 L230 50 L240 60 M230 50 V90"
        stroke="#FFB087"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
      />

      {/* Success particles */}
      {[...Array(8)].map((_, i) => (
        <motion.circle
          key={i}
          cx={230 + (i % 2 ? 1 : -1) * Math.random() * 20}
          cy={40 + Math.random() * 20}
          r="2"
          fill="#FFB087"
          opacity="0.8"
          animate={{
            y: [0, -20, 0],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{
            duration: 2,
            delay: 4 + i * 0.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </svg>
  )
}

export default function HomePage() {
  const router = useRouter()
  const { user } = useUserStore()
  const containerRef = useRef<HTMLDivElement>(null)
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  
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

  useEffect(() => {
    if (user) {
      router.push('/dashboard')
    }
  }, [user, router])

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Turn Your MetaMask Debit Card into Credit
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Kori converts your MetaMask debit card into a true revolving credit card while providing instant liquidity to merchants.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-10 flex items-center gap-x-6"
                >
                  <WalletConnect />
                  <a
                    href="#features"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 flex items-center justify-center relative">
            {/* Geometric Background */}
            <div 
              className="absolute inset-0 flex items-center justify-center -z-10"
            >
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
                src="/images/metamask-card4x.avif" 
                alt="metamask card" 
                width={500} 
                height={500}
                className="w-full h-auto max-w-lg relative z-10"
              />
            </motion.div>
          </div>
        </div>

        {/* Smooth Transition Bridge */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-50" />
      </div>

      {/* Parallax Elements */}
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

        {/* Enhanced Features Section with MetaMask Aesthetic */}
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
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 justify-center items-stretch overflow-hidden">
                {features.map((feature, index) => {
                  const isHovered = hoveredFeature === index
                  const isOtherHovered = hoveredFeature !== null && hoveredFeature !== index

                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      onHoverStart={() => setHoveredFeature(index)}
                      onHoverEnd={() => setHoveredFeature(null)}
                      className={`group relative overflow-hidden rounded-2xl bg-[#15005C] p-6 shadow-2xl border border-[#2D1B69] transition-all duration-500 ease-in-out will-change-transform ${
                        isHovered 
                          ? 'border-[#FFB087] w-full lg:w-[500px]' 
                          : isOtherHovered 
                            ? 'opacity-80 w-full lg:w-[250px]' 
                            : 'hover:border-[#FFB087] w-full lg:w-[300px]'
                      }`}
                      style={{
                        backgroundImage: 'radial-gradient(ellipse at center, rgba(255, 176, 135, 0.05) 0%, transparent 70%)'
                      }}
                      transition={{
                        duration: isHovered || isOtherHovered ? 0.4 : 0.6,
                        delay: isHovered || isOtherHovered ? 0 : index * 0.2,
                        ease: "easeInOut"
                      }}
                    >
                      {/* Enhanced Background Animation - Shifts to Right Side on Hover */}
                      <div
                        className={`absolute flex items-center justify-center mix-blend-screen pointer-events-none transition-all duration-500 ease-in-out ${
                          isHovered 
                            ? 'right-4 top-1/2 -translate-y-1/2 opacity-50 scale-90 translate-x-2' 
                            : 'inset-0 opacity-20 scale-75'
                        }`}
                      >
                        <feature.animation className="w-48 h-48 lg:w-56 lg:h-56" />
                      </div>

                      {/* Glow Effect */}
                      <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_20px_rgba(255,176,135,0.3)] ring-1 ring-[#FFB087]/30" />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col">
                        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white group-hover:text-slate-200 transition-colors duration-300">
                          <motion.div
                            whileHover={{ 
                              rotate: 360,
                              scale: 1.2,
                            }}
                            transition={{ duration: 0.5 }}
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFB087] transition-colors duration-300 hover:bg-[#FF9A66] flex-shrink-0"
                          >
                            <feature.icon
                              className="h-6 w-6 text-[#15005C]"
                              aria-hidden="true"
                            />
                          </motion.div>
                          <span className={`transition-all duration-300 ${isHovered ? 'text-lg' : ''}`}>
                            {feature.title}
                          </span>
                        </dt>
                        
                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-200 group-hover:text-white transition-colors duration-300">
                          {/* Base description - hidden on hover */}
                          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isHovered 
                              ? 'max-h-0 opacity-0' 
                              : 'max-h-32 opacity-100'
                          }`}>
                            <p className="text-base">
                              {feature.description}
                            </p>
                          </div>
                          
                          {/* Key Benefits - only visible on hover */}
                          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isHovered 
                              ? 'max-h-48 opacity-100 flex-auto' 
                              : 'max-h-0 opacity-0'
                          }`}>
                            <div className="text-sm text-slate-300 leading-relaxed space-y-3">
                              <p className="font-semibold text-[#FFB087] text-base">Key Benefits</p>
                              {index === 0 && (
                                <ul className="space-y-2 text-sm">
                                  <li className="flex items-start gap-2">
                                    <span className="text-[#FFB087] font-bold">•</span>
                                    <span>Seamless blockchain integration</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-[#FFB087] font-bold">•</span>
                                    <span>Maintains existing spending habits</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-[#FFB087] font-bold">•</span>
                                    <span>Builds credit history automatically</span>
                                  </li>
                                </ul>
                              )}
                              {index === 1 && (
                                <ul className="space-y-2 text-sm">
                                  <li className="flex items-start gap-2">
                                    <span className="text-[#FFB087] font-bold">•</span>
                                    <span>Eliminates payment waiting periods</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-[#FFB087] font-bold">•</span>
                                    <span>Immediate USDC settlements</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-[#FFB087] font-bold">•</span>
                                    <span>Improved merchant cash flow</span>
                                  </li>
                                </ul>
                              )}
                              {index === 2 && (
                                <ul className="space-y-2 text-sm">
                                  <li className="flex items-start gap-2">
                                    <span className="text-[#FFB087] font-bold">•</span>
                                    <span>Partnership with major credit bureaus</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-[#FFB087] font-bold">•</span>
                                    <span>Every transaction builds profile</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-[#FFB087] font-bold">•</span>
                                    <span>Establishes financial standing</span>
                                  </li>
                                </ul>
                              )}
                            </div>
                          </div>
                          
                          {/* Learn more link */}
                          <div className={`transition-all duration-300 ${isHovered ? 'mt-6' : 'mt-6'}`}>
                            <a
                              href="#"
                              className="text-sm font-semibold leading-6 text-[#FFB087] transition-all duration-300 hover:text-[#FF9A66] inline-flex items-center gap-1 hover:gap-2"
                            >
                              <span>Learn more</span>
                              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </a>
                          </div>
                        </dd>
                      </div>

                      {/* Subtle Inner Shadow for Depth */}
                      <div className="absolute inset-0 rounded-2xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.3)] pointer-events-none" />
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Start building your credit today
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Connect your wallet and start using Kori to build your credit score while enjoying instant merchant payments.
              </p>
            </motion.div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <WalletConnect />
              <a
                href="#"
                className="text-sm font-semibell leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
