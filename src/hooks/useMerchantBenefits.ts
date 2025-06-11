import { useCallback } from 'react'
import { useUserStore } from '@/store'
import { useNotifications } from './useNotifications'

interface MerchantData {
  monthlyVolume: number
  averageTicketSize: number
  customerCount: number
}

interface Benefit {
  id: string
  name: string
  description: string
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond'
  requirements: {
    monthlyVolume?: number
    averageTicketSize?: number
    customerCount?: number
  }
}

export const useMerchantBenefits = () => {
  const { tier } = useUserStore()
  const { success, error } = useNotifications()

  const benefits: Benefit[] = [
    {
      id: '1',
      name: 'Basic Analytics',
      description: 'Access to basic sales and customer analytics',
      tier: 'Bronze',
      requirements: {
        monthlyVolume: 1000,
        customerCount: 10,
      },
    },
    {
      id: '2',
      name: 'Advanced Analytics',
      description: 'Detailed analytics with customer insights and trend analysis',
      tier: 'Silver',
      requirements: {
        monthlyVolume: 5000,
        averageTicketSize: 100,
        customerCount: 50,
      },
    },
    {
      id: '3',
      name: 'Priority Support',
      description: '24/7 priority customer support',
      tier: 'Gold',
      requirements: {
        monthlyVolume: 10000,
        averageTicketSize: 200,
        customerCount: 100,
      },
    },
    {
      id: '4',
      name: 'Custom Solutions',
      description: 'Tailored solutions and dedicated account manager',
      tier: 'Platinum',
      requirements: {
        monthlyVolume: 50000,
        averageTicketSize: 500,
        customerCount: 500,
      },
    },
    {
      id: '5',
      name: 'Enterprise Features',
      description: 'Full suite of enterprise features and white-label options',
      tier: 'Diamond',
      requirements: {
        monthlyVolume: 100000,
        averageTicketSize: 1000,
        customerCount: 1000,
      },
    },
  ]

  const getAvailableBenefits = useCallback(
    (merchantData: MerchantData): Benefit[] => {
      const tierOrder = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond']
      const currentTierIndex = tierOrder.indexOf(tier)

      return benefits.filter((benefit) => {
        const benefitTierIndex = tierOrder.indexOf(benefit.tier)
        if (benefitTierIndex > currentTierIndex) return false

        const { monthlyVolume, averageTicketSize, customerCount } = benefit.requirements

        if (monthlyVolume && merchantData.monthlyVolume < monthlyVolume) return false
        if (averageTicketSize && merchantData.averageTicketSize < averageTicketSize) return false
        if (customerCount && merchantData.customerCount < customerCount) return false

        return true
      })
    },
    [tier]
  )

  const getNextTierBenefits = useCallback(
    (merchantData: MerchantData): Benefit[] => {
      const tierOrder = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond']
      const currentTierIndex = tierOrder.indexOf(tier)
      const nextTier = tierOrder[currentTierIndex + 1]

      if (!nextTier) return []

      return benefits.filter((benefit) => {
        if (benefit.tier !== nextTier) return false

        const { monthlyVolume, averageTicketSize, customerCount } = benefit.requirements

        if (monthlyVolume && merchantData.monthlyVolume < monthlyVolume) return false
        if (averageTicketSize && merchantData.averageTicketSize < averageTicketSize) return false
        if (customerCount && merchantData.customerCount < customerCount) return false

        return true
      })
    },
    [tier]
  )

  const getProgressToNextTier = useCallback(
    (merchantData: MerchantData): { progress: number; requirements: string[] } => {
      const tierOrder = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond']
      const currentTierIndex = tierOrder.indexOf(tier)
      const nextTier = tierOrder[currentTierIndex + 1]

      if (!nextTier) {
        return { progress: 100, requirements: ['Maximum tier reached'] }
      }

      const nextTierBenefits = benefits.filter((benefit) => benefit.tier === nextTier)
      if (nextTierBenefits.length === 0) {
        return { progress: 100, requirements: ['No additional requirements'] }
      }

      const requirements = nextTierBenefits[0].requirements
      const progress = {
        monthlyVolume: requirements.monthlyVolume
          ? Math.min(100, (merchantData.monthlyVolume / requirements.monthlyVolume) * 100)
          : 100,
        averageTicketSize: requirements.averageTicketSize
          ? Math.min(100, (merchantData.averageTicketSize / requirements.averageTicketSize) * 100)
          : 100,
        customerCount: requirements.customerCount
          ? Math.min(100, (merchantData.customerCount / requirements.customerCount) * 100)
          : 100,
      }

      const overallProgress = Math.min(
        progress.monthlyVolume,
        progress.averageTicketSize,
        progress.customerCount
      )

      const missingRequirements = []
      if (requirements.monthlyVolume && merchantData.monthlyVolume < requirements.monthlyVolume) {
        missingRequirements.push(
          `Monthly volume: $${merchantData.monthlyVolume} / $${requirements.monthlyVolume}`
        )
      }
      if (requirements.averageTicketSize && merchantData.averageTicketSize < requirements.averageTicketSize) {
        missingRequirements.push(
          `Average ticket size: $${merchantData.averageTicketSize} / $${requirements.averageTicketSize}`
        )
      }
      if (requirements.customerCount && merchantData.customerCount < requirements.customerCount) {
        missingRequirements.push(
          `Customer count: ${merchantData.customerCount} / ${requirements.customerCount}`
        )
      }

      return {
        progress: overallProgress,
        requirements: missingRequirements,
      }
    },
    [tier]
  )

  return {
    benefits,
    getAvailableBenefits,
    getNextTierBenefits,
    getProgressToNextTier,
  }
} 