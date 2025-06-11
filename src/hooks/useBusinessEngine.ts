import { useUserStore } from '@/store'

interface RevenueStream {
  id: string
  name: string
  description: string
  percentage: number
}

interface MerchantBenefit {
  id: string
  name: string
  description: string
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond'
}

export const useBusinessEngine = () => {
  const { tier } = useUserStore()

  const revenueStreams: RevenueStream[] = [
    {
      id: '1',
      name: 'Transaction Fees',
      description: 'Small percentage fee on each transaction processed through the platform',
      percentage: 2.5,
    },
    {
      id: '2',
      name: 'Interest on Credit Lines',
      description: 'Interest earned on store and card credit lines',
      percentage: 15,
    },
    {
      id: '3',
      name: 'Premium Features',
      description: 'Additional features and services for higher-tier merchants',
      percentage: 5,
    },
  ]

  const merchantBenefits: MerchantBenefit[] = [
    {
      id: '1',
      name: 'Basic Analytics',
      description: 'Access to basic sales and customer analytics',
      tier: 'Bronze',
    },
    {
      id: '2',
      name: 'Advanced Analytics',
      description: 'Detailed analytics with customer insights and trend analysis',
      tier: 'Silver',
    },
    {
      id: '3',
      name: 'Priority Support',
      description: '24/7 priority customer support',
      tier: 'Gold',
    },
    {
      id: '4',
      name: 'Custom Solutions',
      description: 'Tailored solutions and dedicated account manager',
      tier: 'Platinum',
    },
    {
      id: '5',
      name: 'Enterprise Features',
      description: 'Full suite of enterprise features and white-label options',
      tier: 'Diamond',
    },
  ]

  const getAvailableBenefits = () => {
    return merchantBenefits.filter((benefit) => {
      const tierOrder = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond']
      const currentTierIndex = tierOrder.indexOf(tier)
      const benefitTierIndex = tierOrder.indexOf(benefit.tier)
      return benefitTierIndex <= currentTierIndex
    })
  }

  const calculateRevenue = (transactionAmount: number) => {
    return revenueStreams.reduce((total, stream) => {
      return total + (transactionAmount * stream.percentage) / 100
    }, 0)
  }

  return {
    revenueStreams,
    merchantBenefits,
    getAvailableBenefits,
    calculateRevenue,
    currentTier: tier,
  }
} 