'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useUserStore } from '@/store/user'
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

  // GSAP Animations
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Counter animation function
    const animateCounter = (element: Element, target: number, duration = 2) => {
      gsap.fromTo(element, 
        { textContent: 0 },
        {
          textContent: target,
          duration: duration,
          ease: "power2.out",
          snap: { textContent: target > 100 ? 100 : 1 },
          onUpdate: function() {
            const value = parseInt(this.targets()[0].textContent)
            if (target > 1000) {
              element.textContent = (value / 1000).toFixed(value % 1000 === 0 ? 0 : 1) + 'K'
            } else {
              element.textContent = value.toString()
            }
          }
        }
      )
    }

    // Tier Section Animations
    const tierTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#tier-header",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    // Tier header animation
    tierTl
      .fromTo("#tier-header h2", 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
      .fromTo("#tier-header p", 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 
        "-=0.4"
      )

    // Floating card animation
    const cardTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#floating-card",
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse"
      }
    })

    cardTl
      .from("#floating-card", { 
        scale: 0.8, 
        opacity: 0, 
        y: 100, 
        duration: 1, 
        ease: "back.out(1.7)" 
      })

    // Card floating animation is handled by Framer Motion

    // Tier cards animation
    const tierCards = gsap.utils.toArray(".tier-card")
    tierCards.forEach((card: any, index) => {
      gsap.fromTo(card, 
        { 
          y: 80, 
          opacity: 0, 
          scale: 0.9 
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Hover animations for tier cards
      const handleMouseEnter = () => {
        gsap.to(card, { scale: 1.05, y: -10, duration: 0.3, ease: "power2.out" })
        gsap.to(card.querySelector('.tier-glow'), { opacity: 0.4, duration: 0.3 })
        
        // Shrink other cards
        tierCards.forEach((otherCard: any) => {
          if (otherCard !== card) {
            gsap.to(otherCard, { scale: 0.95, opacity: 0.7, duration: 0.3 })
          }
        })
      }

      const handleMouseLeave = () => {
        gsap.to(card, { scale: 1, y: 0, duration: 0.3, ease: "power2.out" })
        gsap.to(card.querySelector('.tier-glow'), { opacity: 0, duration: 0.3 })
        
        // Reset other cards
        tierCards.forEach((otherCard: any) => {
          gsap.to(otherCard, { scale: 1, opacity: 1, duration: 0.3 })
        })
      }

      card.addEventListener('mouseenter', handleMouseEnter)
      card.addEventListener('mouseleave', handleMouseLeave)
    })

    // Background elements animation
    gsap.to("#tier-bg-1", {
      rotation: 360,
      duration: 20,
      ease: "none",
      repeat: -1
    })

    gsap.to("#tier-bg-2", {
      rotation: -180,
      duration: 15,
      ease: "none",
      repeat: -1
    })

    gsap.to("#tier-bg-3", {
      rotation: 90,
      duration: 25,
      ease: "none",
      repeat: -1
    })

    // Stats Section Animations
    const statsTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#stats-header",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    statsTl
      .from(".stats-title", { 
        y: 50, 
        opacity: 0, 
        duration: 0.8, 
        ease: "power3.out" 
      })
      .from(".stats-subtitle", { 
        y: 30, 
        opacity: 0, 
        duration: 0.6, 
        ease: "power2.out" 
      }, "-=0.4")

    // Animate floating elements
    gsap.to(".stats-float-1", {
      y: -20,
      rotation: 360,
      duration: 8,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    })

    gsap.to(".stats-float-2", {
      y: 15,
      x: 10,
      rotation: -45,
      duration: 6,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    })

    gsap.to(".stats-float-3", {
      y: -10,
      x: -15,
      duration: 10,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    })

    gsap.to(".stats-float-4", {
      scale: 1.5,
      opacity: 0.3,
      duration: 4,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    })

    // Stats cards animation
    const statsCards = gsap.utils.toArray(".stat-card")
    statsCards.forEach((card: any, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      })

      tl
        .from(card, { 
          y: 80, 
          opacity: 0, 
          scale: 0.8, 
          duration: 0.8, 
          ease: "back.out(1.7)" 
        })
        .from(card.querySelector('.stat-icon'), { 
          scale: 0, 
          rotation: 180, 
          duration: 0.6, 
          ease: "back.out(2)" 
        }, "-=0.4")

      // Animate progress bars
      gsap.to(card.querySelector('.stat-progress'), {
        width: "100%",
        duration: 2,
        ease: "power2.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      })

      // Counter animation
      const numberElement = card.querySelector('.stat-number')
      if (numberElement) {
        const target = parseInt(numberElement.dataset.target)
        gsap.delayedCall(1, () => animateCounter(numberElement, target))
      }

      // Ripple effect on hover
      const ripple = card.querySelector('.stat-ripple')
      const handleStatHover = () => {
        gsap.fromTo(ripple, 
          { scale: 1, opacity: 0.6 },
          { scale: 1.5, opacity: 0, duration: 0.6, ease: "power2.out" }
        )
      }

      card.addEventListener('mouseenter', handleStatHover)
    })

    // Business Engine Section Animations
    const businessTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#business-content",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    businessTl
      .from(".business-title", { 
        x: -50, 
        opacity: 0, 
        duration: 0.8, 
        ease: "power3.out" 
      })
      .from(".business-subtitle", { 
        x: -30, 
        opacity: 0, 
        duration: 0.6, 
        ease: "power2.out" 
      }, "-=0.4")

    // Animate SVG background elements
    gsap.set(".business-node", { scale: 0, opacity: 0 })
    
    // Set up line drawing animation using strokeDasharray
    const businessLines = document.querySelectorAll(".business-line")
    businessLines.forEach((line: any) => {
      const length = line.getTotalLength()
      gsap.set(line, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 0
      })
    })

    const svgTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#business-bg-svg",
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    })

    svgTl
      .to(".business-node", {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(2)"
      })
      .to(".business-line", {
        strokeDashoffset: 0,
        opacity: 0.3,
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.out"
      }, "-=0.8")

    // Floating business elements
    gsap.to(".business-float-1", {
      y: -25,
      rotation: 360,
      duration: 12,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    })

    gsap.to(".business-float-2", {
      y: 20,
      x: 15,
      rotation: -90,
      duration: 8,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    })

    gsap.to(".business-float-3", {
      y: -15,
      x: -20,
      duration: 15,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    })

    gsap.to(".business-float-4", {
      scale: 2,
      opacity: 0.1,
      duration: 6,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    })

    // Business metrics animation
    const businessMetrics = gsap.utils.toArray(".business-metric")
    businessMetrics.forEach((metric: any, index) => {
      gsap.from(metric, {
        x: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: index * 0.15,
        scrollTrigger: {
          trigger: metric,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      })

      // Progress bar animation
      gsap.to(metric.querySelector('.business-progress'), {
        width: "100%",
        duration: 2,
        ease: "power2.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: metric,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      })

      // Counter animation
      const numberElement = metric.querySelector('.business-metric-number')
      if (numberElement) {
        const target = parseFloat(numberElement.dataset.target)
        gsap.delayedCall(1 + index * 0.2, () => animateCounter(numberElement, target, 1.5))
      }
    })

    // Risk management section
    const riskTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#business-risk",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })

    riskTl
      .from(".business-risk-card", { 
        x: 80, 
        opacity: 0, 
        scale: 0.9, 
        duration: 0.8, 
        ease: "power3.out" 
      })
      .from(".business-risk-icon", { 
        scale: 0, 
        rotation: 360, 
        duration: 0.6, 
        ease: "back.out(2)" 
      }, "-=0.4")
      .from(".business-risk-title", { 
        y: 20, 
        opacity: 0, 
        duration: 0.5 
      }, "-=0.3")
      .from(".business-risk-subtitle", { 
        y: 15, 
        opacity: 0, 
        duration: 0.5 
      }, "-=0.2")

    // Business features animation
    const businessFeatures = gsap.utils.toArray(".business-feature")
    businessFeatures.forEach((feature: any, index) => {
      gsap.from(feature, {
        x: 60,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: feature,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      })

      // Feature progress animation
      gsap.to(feature.querySelector('.business-feature-progress'), {
        width: "100%",
        duration: 1.5,
        ease: "power2.out",
        delay: 0.8 + index * 0.1,
        scrollTrigger: {
          trigger: feature,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      })
    })

    // Risk statistics counters
    const riskPercentage = document.querySelector("#risk-percentage")
    const accuracyPercentage = document.querySelector("#accuracy-percentage")

    if (riskPercentage) {
      gsap.delayedCall(2, () => {
        gsap.fromTo(riskPercentage, 
          { textContent: 0 },
          {
            textContent: 1.8,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 0.1 },
            onUpdate: function() {
              const value = parseFloat(this.targets()[0].textContent)
              riskPercentage.textContent = value.toFixed(1) + '%'
            }
          }
        )
      })
    }

    if (accuracyPercentage) {
      gsap.delayedCall(2.5, () => {
        gsap.fromTo(accuracyPercentage, 
          { textContent: 0 },
          {
            textContent: 97,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            onUpdate: function() {
              const value = parseInt(this.targets()[0].textContent)
              accuracyPercentage.textContent = value + '%'
            }
          }
        )
      })
    }

        // Continuous particle animation in business section
    const particles = gsap.utils.toArray(".business-particle")
    particles.forEach((particle: any, index) => {
      // Define circular motion for particles instead of complex paths
      const radius = 50 + index * 20
      const centerX = window.innerWidth * (0.3 + index * 0.1)
      const centerY = window.innerHeight * (0.3 + index * 0.1)
      
      gsap.set(particle, { 
        x: centerX + radius, 
        y: centerY,
        opacity: 0.6
      })
      
      gsap.to(particle, {
        rotation: 360,
        duration: 8 + index * 2,
        ease: "none",
        repeat: -1,
        transformOrigin: `${-radius}px 0px`,
        delay: index * 0.5
      })
      
      // Fade in and out
      gsap.to(particle, {
        opacity: 0.8,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.3
      })
    })

    // How It Works Section Animations
    const howItWorksTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#how-it-works-header",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    howItWorksTl
      .from("#how-it-works-header", { 
        y: 50, 
        opacity: 0, 
        duration: 0.8, 
        ease: "power3.out" 
      })

    // How It Works Steps Animation
    const howItWorksSteps = gsap.utils.toArray(".how-it-works-step")
    howItWorksSteps.forEach((step: any, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: step,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      })

      tl
        .from(step, { 
          y: 80, 
          opacity: 0, 
          scale: 0.9, 
          duration: 0.8, 
          ease: "back.out(1.7)" 
        })
        .from(step.querySelector('.step-badge'), { 
          scale: 0, 
          rotation: 180, 
          duration: 0.6, 
          ease: "back.out(2)" 
        }, "-=0.4")

      // Step progress animation
      gsap.to(step.querySelector('.step-progress'), {
        width: `${((index + 1) / 3) * 100}%`,
        duration: 2,
        ease: "power2.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: step,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      })
    })



    // Section transition animations
    const sections = gsap.utils.toArray("section")
    sections.forEach((section: any, index) => {
      if (index === 0) return // Skip hero section
      
      gsap.fromTo(section, 
        { 
          y: 100, 
          opacity: 0.8 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "top 10%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    // Enhanced Features section animations
    const featureCards = gsap.utils.toArray(".feature-card")
    
    // Set initial state
    gsap.set(".feature-card", { 
      opacity: 0, 
      y: 100, 
      scale: 0.8,
      rotationY: 15
    })

    // Create main timeline for features
    const featuresTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#features-container",
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    })

    // Animate cards in sequence with dramatic effect
    featureCards.forEach((card: any, index) => {
      featuresTl
        .to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: index * 0.2
        })
        .to(card, {
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          duration: 0.3,
          ease: "power2.out"
        }, "-=0.3")

      // Individual floating animation for each card (very subtle)
      gsap.to(card, {
        y: -1.5,
        rotation: index % 2 === 0 ? 0.2 : -0.2,
        duration: 8 + index * 0.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 1.2
      })

      // Glow effect animation (more subtle)
      gsap.to(card, {
        filter: "drop-shadow(0 0 15px rgba(99, 102, 241, 0.2))",
        duration: 4,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 1.5
      })

      // Mouse enter/leave enhanced animations
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.08,
          rotationY: 5,
          z: 50,
          duration: 0.4,
          ease: "power2.out"
        })
        
        // Animate the background animation
        gsap.to(card.querySelector('.feature-animation'), {
          scale: 1.1,
          rotation: 5,
          duration: 0.4,
          ease: "power2.out"
        })

        // Pulse effect on icon
        gsap.to(card.querySelector('.feature-icon'), {
          scale: 1.2,
          rotation: 360,
          duration: 0.6,
          ease: "back.out(2)"
        })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          rotationY: 0,
          z: 0,
          duration: 0.4,
          ease: "power2.out"
        })

        gsap.to(card.querySelector('.feature-animation'), {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "power2.out"
        })

        gsap.to(card.querySelector('.feature-icon'), {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "power2.out"
        })
      })
    })

    // Parallax effect for feature animations (very subtle)
    gsap.utils.toArray(".feature-animation").forEach((animation: any, index) => {
      gsap.to(animation, {
        y: -4,
        duration: 10 + index,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.8
      })
    })

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

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
      {/* Enhanced Hero Section */}
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
        </div>

        {/* Enhanced Smooth Transition */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-white/50 to-gray-50" />
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
                  
                  {/* Feature highlights */}
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
        </div>
      </div>

      {/* Enhanced Tier Comparison Section with GSAP */}
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
          <div className="text-center mb-20" id="tier-header">
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
          </div>



                    {/* Enhanced Tier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6" id="tier-cards">
            {[
              { name: 'Bronze', score: '0-200', store: '$50-$100', card: '—', color: 'from-orange-400 to-orange-600', bgColor: 'from-orange-50 to-orange-100', textColor: 'text-orange-700', icon: Shield },
              { name: 'Silver', score: '201-400', store: 'Up to $300', card: '—', color: 'from-gray-400 to-gray-600', bgColor: 'from-gray-50 to-gray-100', textColor: 'text-gray-700', icon: Zap },
              { name: 'Gold', score: '401-600', store: '$600-$1,000', card: '—', color: 'from-yellow-400 to-yellow-600', bgColor: 'from-yellow-50 to-yellow-100', textColor: 'text-yellow-700', icon: TrendingUp },
              { name: 'Platinum', score: '601-800', store: '$1,500-$2,000', card: '$300-$500', color: 'from-slate-300 to-slate-500', bgColor: 'from-slate-50 to-slate-100', textColor: 'text-slate-700', icon: CreditCard },
              { name: 'Diamond', score: '801-1,000', store: '$3,000-$5,000', card: '$1,000-$2,000', color: 'from-cyan-300 to-blue-500', bgColor: 'from-cyan-50 to-blue-100', textColor: 'text-blue-700', icon: Sparkles }
            ].map((tier, index) => (
              <div
                key={tier.name}
                className={`tier-card tier-card-${index} relative cursor-pointer transform-gpu group`}
                data-tier={index}
              >
                <div className={`tier-glow absolute inset-0 bg-gradient-to-br ${tier.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />
                <div className={`tier-content relative bg-gradient-to-br ${tier.bgColor} rounded-3xl p-6 border-2 border-transparent group-hover:border-gray-300 shadow-lg group-hover:shadow-2xl transition-all duration-500 backdrop-blur-sm`}>
                  {/* Tier Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${tier.color} rounded-2xl flex items-center justify-center shadow-lg tier-icon group-hover:scale-110 transition-transform duration-300`}>
                      <tier.icon className="w-7 h-7 text-white" />
                    </div>
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
                      <div 
                        className={`h-full bg-gradient-to-r ${tier.color} tier-progress tier-progress-${index} transition-all duration-1000 ease-out`}
                        style={{ width: `${((index + 1) / 5) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-600 mt-2 text-center font-medium">
                      {index < 4 ? `Next: ${['Silver', 'Gold', 'Platinum', 'Diamond'][index]}` : 'Maximum Tier'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
      </div>

          <div className="mt-16 text-center" id="tier-description">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your existing MetaMask card becomes a powerful credit-building tool with Kori
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section with GSAP */}
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
              <div
                key={stat.label}
                className={`stat-card stat-card-${index} text-center group cursor-pointer`}
                data-stat={index}
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
                    <span className="stat-number" data-target={stat.value}>0</span>
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
                      <div className={`stat-progress stat-progress-${index} h-full bg-gradient-to-r ${stat.color} w-0 transition-all duration-1000 ease-out`} />
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className={`stat-glow absolute inset-0 rounded-3xl bg-gradient-to-r ${stat.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20 -z-10`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Enhanced How It Works Section */}
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
          <div className="text-center mb-20" id="how-it-works-header">
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
          </div>

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
              <div
                key={step.step}
                className={`how-it-works-step step-${index} relative group`}
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
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
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
                      <div 
                        className={`h-full bg-gradient-to-r ${step.color} step-progress step-progress-${index} transition-all duration-1000 ease-out`}
                        style={{ width: `${((index + 1) / 3) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Hover Effect Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 -z-10`} />
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
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
          </div>
        </div>
      </section>

                         {/* Enhanced Business Engine Section with GSAP */}
       <section className="py-24 bg-gradient-to-b from-indigo-800 via-indigo-700 to-white relative overflow-hidden">
        {/* Complex Animated SVG Background */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-5" id="business-bg-svg">
            <defs>
              <linearGradient id="business-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
              
              <filter id="business-glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Network Nodes */}
            <g id="business-network">
              <circle className="business-node business-node-1" cx="10%" cy="20%" r="4" fill="url(#business-gradient)" filter="url(#business-glow)" />
              <circle className="business-node business-node-2" cx="90%" cy="30%" r="6" fill="url(#business-gradient)" filter="url(#business-glow)" />
              <circle className="business-node business-node-3" cx="20%" cy="70%" r="5" fill="url(#business-gradient)" filter="url(#business-glow)" />
              <circle className="business-node business-node-4" cx="80%" cy="80%" r="3" fill="url(#business-gradient)" filter="url(#business-glow)" />
              <circle className="business-node business-node-5" cx="50%" cy="15%" r="4" fill="url(#business-gradient)" filter="url(#business-glow)" />
              <circle className="business-node business-node-6" cx="70%" cy="60%" r="5" fill="url(#business-gradient)" filter="url(#business-glow)" />
            </g>
            
            {/* Connecting Lines */}
            <g id="business-connections">
              <path className="business-line business-line-1" d="M 10% 20% Q 50% 10% 90% 30%" stroke="url(#business-gradient)" strokeWidth="1" fill="none" opacity="0.3" />
              <path className="business-line business-line-2" d="M 20% 70% Q 60% 50% 80% 80%" stroke="url(#business-gradient)" strokeWidth="1" fill="none" opacity="0.3" />
              <path className="business-line business-line-3" d="M 50% 15% Q 35% 45% 20% 70%" stroke="url(#business-gradient)" strokeWidth="1" fill="none" opacity="0.3" />
              <path className="business-line business-line-4" d="M 90% 30% Q 80% 45% 70% 60%" stroke="url(#business-gradient)" strokeWidth="1" fill="none" opacity="0.3" />
            </g>
            
            {/* Data Flow Particles */}
            <g id="business-particles">
              {[...Array(8)].map((_, i) => (
                <circle key={i} className={`business-particle business-particle-${i}`} r="1.5" fill="#06b6d4" opacity="0" />
              ))}
            </g>
          </svg>
      </div>

                 {/* Floating Geometric Elements */}
         <div className="absolute inset-0 pointer-events-none overflow-hidden">
           <div className="business-float-1 absolute top-32 left-16 w-24 h-24 border border-indigo-400/20 rounded-full" />
           <div className="business-float-2 absolute top-20 right-24 w-16 h-16 border border-indigo-400/30 rotate-45" />
           <div className="business-float-3 absolute bottom-40 left-32 w-20 h-20 border border-indigo-400/25 rounded-xl" />
           <div className="business-float-4 absolute bottom-32 right-40 w-12 h-12 bg-indigo-400/10 rounded-full blur-sm" />
         </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div id="business-content">
              <h2 className="text-4xl font-bold text-white mb-6 business-title">
                Sustainable Business Engine
              </h2>
              <p className="text-xl text-gray-300 mb-8 business-subtitle">
                Multiple revenue streams ensure long-term sustainability while providing value to all stakeholders.
              </p>
              
              <div className="space-y-6" id="business-metrics">
                {[
                  { title: 'Instant Payout Fee', value: '1', suffix: '%', description: 'Of every merchant settlement', color: 'from-indigo-400 to-indigo-500', delay: 0 },
                                      { title: 'Interchange Share', value: '0.6', suffix: '%', prefix: '~', description: 'On card-rail transactions', color: 'from-indigo-500 to-purple-500', delay: 0.1 },
                    { title: 'Credit Spread', value: '7', suffix: '%', description: 'Borrow at 5%, lend at 12%', color: 'from-purple-400 to-purple-500', delay: 0.2 },
                  { title: 'Float Yield', value: '4.5', suffix: '%', prefix: '', description: 'USDC in T-bill backed funds', color: 'from-indigo-400 to-purple-500', delay: 0.3 }
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className={`business-metric business-metric-${index} group cursor-pointer`}
                    data-metric={index}
                  >
                    <div className="relative p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 group-hover:border-white/30 transition-all duration-500 group-hover:bg-white/10">
                      {/* Enhanced Visual Elements */}
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color} business-indicator business-indicator-${index}`} />
                            <div className="font-semibold text-white business-metric-title group-hover:text-indigo-200 transition-colors duration-300">{item.title}</div>
                          </div>
                          <div className="text-sm text-gray-400 business-metric-desc group-hover:text-gray-300 transition-colors duration-300">{item.description}</div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                            <span className="business-metric-prefix">{item.prefix}</span>
                            <span className="business-metric-number" data-target={item.value}>0</span>
                            <span className="business-metric-suffix">{item.suffix}</span>
                          </div>
                        </div>
                      </div>

                      {/* Progress visualization */}
                      <div className="mt-4">
                        <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                          <div className={`business-progress business-progress-${index} h-full bg-gradient-to-r ${item.color} w-0 transition-all duration-1000 ease-out`} />
                        </div>
                      </div>

                      {/* Hover Glow */}
                      <div className={`business-metric-glow absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20 -z-10`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative" id="business-risk">
              <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10 business-risk-card">
                {/* Enhanced Header with Animation */}
                <div className="text-center mb-8 business-risk-header">
                  <div className="relative inline-block mb-4">
                    <Sparkles className="w-16 h-16 text-indigo-400 mx-auto business-risk-icon" />
                    <div className="absolute inset-0 bg-indigo-400/20 rounded-full blur-xl business-risk-icon-glow" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 business-risk-title">Risk Management</h3>
                  <p className="text-gray-300 business-risk-subtitle">AI-powered tiered exposure keeps losses below industry average</p>
                </div>
                
                                 {/* Enhanced Feature List */}
                 <div className="space-y-4" id="business-features">
                   {[
                     { text: 'On-chain transaction history analysis', icon: Search },
                     { text: 'Real-time spending pattern monitoring', icon: BarChart3 }, 
                     { text: 'Graduated credit limits by tier', icon: Target },
                     { text: 'Automatic risk adjustment algorithms', icon: Bolt }
                   ].map((feature, index) => (
                     <div
                       key={index}
                       className={`business-feature business-feature-${index} group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10`}
                     >
                       <div className="w-8 h-8 flex items-center justify-center bg-indigo-500/20 rounded-lg business-feature-icon">
                         <feature.icon className="w-5 h-5 text-indigo-300" />
                       </div>
                       <div className="flex items-center gap-3 flex-1">
                         <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 business-feature-check" />
                         <span className="text-gray-300 group-hover:text-white transition-colors duration-300 business-feature-text">{feature.text}</span>
                       </div>
                       
                       {/* Feature Progress Bar */}
                       <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                         <div className={`business-feature-progress business-feature-progress-${index} h-full bg-indigo-400 w-0 transition-all duration-1000 ease-out`} />
                       </div>
                     </div>
                   ))}
                </div>

                {/* Enhanced Visual Elements */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center gap-8">
                                         <div className="text-center business-risk-stat">
                       <div className="text-3xl font-bold text-indigo-400" id="risk-percentage">0%</div>
                       <div className="text-sm text-gray-400">Default Rate</div>
                     </div>
                     <div className="w-px h-12 bg-white/20" />
                     <div className="text-center business-risk-stat">
                       <div className="text-3xl font-bold text-purple-400" id="accuracy-percentage">0%</div>
                       <div className="text-sm text-gray-400">AI Accuracy</div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
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
                className="text-sm font-semibold leading-6 text-white"
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
                fill="url(#indigo-gradient)"
                fillOpacity="0.3"
              />
              <defs>
                <radialGradient id="indigo-gradient">
                  <stop stopColor="#6366f1" />
                  <stop offset={1} stopColor="#8b5cf6" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
