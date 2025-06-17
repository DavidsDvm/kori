'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUserStore } from '@/store/user'
<<<<<<< Updated upstream
import { Tiers } from '@/components/tiers'
=======
<<<<<<< Updated upstream
import { WalletConnect } from '@/components/wallet-connect'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight, CreditCard, Store, TrendingUp, Shield, Zap, Users, Globe, Sparkles, CheckCircle, Search, BarChart3, Target, Bolt, Wallet, Brain, ChartBar } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}


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
        stroke="#6366f1"
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
        fill="#6366f1"
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
          stroke="#6366f1"
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
            fill="#6366f1"
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
            stroke="#6366f1"
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
          stroke="#6366f1"
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
        stroke="#6366f1"
        strokeWidth="2"
        fill="none"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      />
      
      {/* Store icon */}
      <motion.path
        d="M60 135 L70 125 L80 135 V155 H60 V135Z"
        stroke="#6366f1"
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
        stroke="#6366f1"
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
        stroke="#6366f1"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />

      {/* Payment flow arrows */}
      <motion.path
        d="M95 140 Q150 120 205 140"
        stroke="#6366f1"
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
        stroke="#6366f1"
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
        fill="#6366f1"
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
          fill="#6366f1"
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
            fill="#6366f1"
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
          stroke="#6366f1"
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
        stroke="#6366f1"
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
        stroke="#6366f1"
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
          fill="#6366f1"
          opacity="0.7"
          initial={{ height: 0, y: 250 }}
          animate={{ height: bar.height, y: 250 - bar.height }}
          transition={{ duration: 0.8, delay: bar.delay, ease: "easeOut" }}
        />
      ))}

      {/* Trend line */}
      <motion.path
        d="M80 190 L120 150 L160 110 L200 70"
        stroke="#6366f1"
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
          fill="#6366f1"
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
          fill="#6366f1"
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
        stroke="#6366f1"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
      />

      {/* Success particles */}
      {[...Array(8)].map((_, i) => {
        // Deterministic positioning based on index
        const offsetX = (i % 2 ? 1 : -1) * ((i % 4) * 5 + 5);
        const offsetY = (i % 3) * 7;
        return (
          <motion.circle
            key={i}
            cx={230 + offsetX}
            cy={40 + offsetY}
            r="2"
            fill="#6366f1"
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
        );
      })}
    </svg>
  )
}
=======
>>>>>>> Stashed changes
import { BusinessEngine } from '@/components/business-engine'
import { 
  HeroSection, 
  FeaturesSection, 
  TierSection,
  StatsSection, 
  HowItWorksSection, 
  CTASection 
} from '@/components/sections'
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes

export default function HomePage() {
  const router = useRouter()
  const { user } = useUserStore()

  useEffect(() => {
    if (user) {
      router.push('/dashboard')
    }
  }, [user, router])

  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TierSection />
      <StatsSection />
      <HowItWorksSection />
      <BusinessEngine />

      <CTASection />
    </div>
  )
}
