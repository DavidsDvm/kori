'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUserStore } from '@/store/user'
import { Tiers } from '@/components/tiers'
import { BusinessEngine } from '@/components/business-engine'
import { 
  HeroSection, 
  FeaturesSection, 
  TierSection,
  StatsSection, 
  HowItWorksSection, 
  CTASection 
} from '@/components/sections'

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
