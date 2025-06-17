'use client'

import { motion } from 'framer-motion'

interface CreditScoreChartProps {
  className?: string
}

export const CreditScoreChart = ({ className = "" }: CreditScoreChartProps) => {
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