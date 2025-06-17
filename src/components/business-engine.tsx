'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DollarSign, CreditCard, TrendingUp, Banknote, ArrowRight, Shield, Zap } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger)

const revenueStreams = [
  {
    icon: DollarSign,
    title: 'Instant-payout fee',
    description: '1% of every merchant settlement',
    color: 'from-green-500 to-green-600',
    bgColor: 'from-green-50 to-green-100',
    textColor: 'text-green-700',
    iconColor: 'text-green-600',
  },
  {
    icon: CreditCard,
    title: 'Interchange share',
    description: '~0.6% on card-rail spend',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
    textColor: 'text-blue-700',
    iconColor: 'text-blue-600',
  },
  {
    icon: TrendingUp,
    title: 'Credit spread',
    description: 'Borrow at 5% stablecoin, lend at 12% APR',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100',
    textColor: 'text-purple-700',
    iconColor: 'text-purple-600',
  },
  {
    icon: Banknote,
    title: 'Float yield',
    description: 'Idle USDC swept into T-bill–backed on-chain funds',
    color: 'from-amber-500 to-amber-600',
    bgColor: 'from-amber-50 to-amber-100',
    textColor: 'text-amber-700',
    iconColor: 'text-amber-600',
  },
]

const merchantBenefits = [
  {
    title: 'Legacy Rails',
    pain: 'Payouts held 7–14 days or more for new sellers',
    solution: 'USDC lands the moment the sale clears—no reserves, no rolling holds',
    icon: ArrowRight,
    color: 'from-kori-500 to-kori-600',
    bgColor: 'from-kori-50 to-kori-100',
  },
  {
    title: 'High Fees',
    pain: '3–4% card fees + chargebacks',
    solution: '1% Kori settlement fee, zero fraud chargebacks (Kori owns risk)',
    icon: DollarSign,
    color: 'from-success-500 to-success-600',
    bgColor: 'from-success-50 to-success-100',
  },
  {
    title: 'Limited Credit',
    pain: 'Small BNPL tickets (<$400)',
    solution: 'Basket sizes climb as users tap expanding Kori lines',
    icon: TrendingUp,
    color: 'from-accent-500 to-accent-600',
    bgColor: 'from-accent-50 to-accent-100',
  },
]

export function BusinessEngine() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const revenueCardsRef = useRef<HTMLDivElement>(null)
  const merchantSectionRef = useRef<HTMLDivElement>(null)
  const riskSectionRef = useRef<HTMLDivElement>(null)
  const backgroundElementsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Advanced GSAP Timeline Animation (something Framer Motion can't do as elegantly)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse" // Play on enter, reverse on leave back up, play again on re-enter
      }
    })

    // Staggered entrance animation with complex timing
    tl.from(headerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(".revenue-card", {
      y: 100,
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      stagger: {
        amount: 1.2,
        from: "start",
        ease: "power2.out"
      },
      ease: "back.out(1.7)"
    }, "-=0.5")
    .from(".merchant-section", {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.3")
    .from(".merchant-benefit", {
      x: -50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.5")
    .from(".risk-section", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.4")

    // Continuous background animation (GSAP excels at this)
    gsap.to(".bg-circle-1", {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none"
    })

    gsap.to(".bg-circle-2", {
      rotation: -360,
      duration: 25,
      repeat: -1,
      ease: "none"
    })

    // Advanced hover animations with GSAP (more powerful than CSS)
    const revenueCards = gsap.utils.toArray(".revenue-card")
    revenueCards.forEach((card: any) => {
      const icon = card.querySelector(".card-icon")
      const bg = card.querySelector(".card-bg")
      
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        })
        gsap.to(icon, {
          scale: 1.2,
          rotation: 360,
          duration: 0.6,
          ease: "back.out(2)"
        })
        gsap.to(bg, {
          opacity: 0.3,
          duration: 0.3,
          ease: "power2.out"
        })
      })

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        })
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "power2.out"
        })
        gsap.to(bg, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out"
        })
      })
    })

    // ScrollTrigger for parallax effects (GSAP's specialty)
    gsap.to(".parallax-1", {
      y: -100,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    })

    gsap.to(".parallax-2", {
      y: -150,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom", 
        end: "bottom top",
        scrub: 1.5
      }
    })

  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-b from-white via-gray-50 to-indigo-50/30 relative overflow-hidden">
      {/* GSAP-powered animated background elements */}
      <div ref={backgroundElementsRef} className="absolute inset-0 pointer-events-none">
        <div className="bg-circle-1 parallax-1 absolute top-20 left-10 w-32 h-32 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" stroke="#4F46E5" strokeWidth="2" fill="none" />
            <circle cx="50" cy="50" r="25" stroke="#4F46E5" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="bg-circle-2 parallax-2 absolute top-40 right-20 w-24 h-24 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,10 90,90 10,90" stroke="#4F46E5" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 ring-2 ring-indigo-200 mb-8">
            <DollarSign className="w-4 h-4" />
            <span>Revenue Model</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
              Business Engine
            </span>
          </h2>
          <p className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
            A sustainable revenue model that benefits both users and merchants through innovative financial infrastructure.
          </p>
        </div>

        {/* Revenue Streams - GSAP Enhanced */}
        <div ref={revenueCardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {revenueStreams.map((stream, index) => (
            <div
              key={index}
              className="revenue-card group relative cursor-pointer"
            >
              <div className={`card-bg absolute inset-0 bg-gradient-to-br ${stream.color} rounded-3xl blur-xl opacity-0 transition-all duration-500`} />
              <div className={`relative bg-gradient-to-br ${stream.bgColor} rounded-3xl p-6 border-2 border-transparent group-hover:border-gray-300 shadow-lg group-hover:shadow-2xl transition-all duration-500 backdrop-blur-sm`}>
                {/* Icon */}
                <div className={`card-icon w-14 h-14 bg-gradient-to-br ${stream.color} rounded-2xl flex items-center justify-center shadow-lg mb-4 transition-transform duration-300`}>
                  <stream.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className={`text-xl font-bold mb-3 ${stream.textColor}`}>{stream.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{stream.description}</p>
                
                {/* Decorative element */}
                <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-br ${stream.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
              </div>
            </div>
          ))}
        </div>

        {/* Merchant Benefits - Enhanced with GSAP */}
        <div
          ref={merchantSectionRef}
          className="merchant-section bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Why Merchants Plug In
              </span>
            </h3>
            <p className="text-lg text-gray-600">Solving critical pain points in traditional payment processing</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {merchantBenefits.map((benefit, index) => (
              <div
                key={index}
                className="merchant-benefit group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-15 transition-all duration-500`} />
                <div className={`relative bg-gradient-to-br ${benefit.bgColor} rounded-3xl p-8 border-2 border-gray-100 group-hover:border-gray-300 group-hover:shadow-xl transition-all duration-300 backdrop-blur-sm h-full`}>
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">{benefit.title}</h4>
                  </div>
                  
                  {/* Content with better visual hierarchy */}
                  <div className="space-y-6">
                    {/* Current Problem */}
                    <div className="relative">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        Current Challenge
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed italic">
                        "{benefit.pain}"
                      </p>
                    </div>
                    
                    {/* Divider */}
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                      <div className={`w-2 h-2 bg-gradient-to-br ${benefit.color} rounded-full`}></div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                    </div>
                    
                    {/* Our Solution */}
                    <div className="relative">
                      <div className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <div className={`w-1 h-1 bg-gradient-to-br ${benefit.color} rounded-full`}></div>
                        Kori Advantage
                      </div>
                      <p className="text-gray-800 font-medium text-sm leading-relaxed">
                        {benefit.solution}
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative bottom element */}
                  <div className={`absolute bottom-6 right-6 w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Management - GSAP Enhanced */}
        <div
          ref={riskSectionRef}
          className="risk-section bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl shadow-2xl border border-indigo-200 p-8"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700 mb-6">
              <Shield className="w-4 h-4" />
              <span>Risk Management</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Comprehensive Risk Protection
              </span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tiered exposure keeps expected loss below the BNPL late-payment rate of 41% reported in 2025 surveys.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">User Protection</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Gradual credit line increases</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Smart contract-based limits</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Transparent scoring system</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Merchant Protection</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Instant USDC settlements</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">No chargeback risk</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Growing customer base</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 