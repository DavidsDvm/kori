'use client'

import { motion } from 'framer-motion'

interface PaymentFlowProps {
  className?: string
}

export const PaymentFlow = ({ className = "" }: PaymentFlowProps) => {
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