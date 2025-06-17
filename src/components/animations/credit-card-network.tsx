'use client'

import { motion } from 'framer-motion'

interface CreditCardNetworkProps {
  className?: string
}

export const CreditCardNetwork = ({ className = "" }: CreditCardNetworkProps) => {
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