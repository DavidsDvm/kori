import { useUserStore } from '@/store'

export const useCreditLine = () => {
  const {
    storeCreditLine,
    cardCreditLine,
    setStoreCreditLine,
    setCardCreditLine,
    addRepayment,
    koriScore,
    tier,
  } = useUserStore()

  const calculateMaxCreditLine = () => {
    // In a real implementation, this would be calculated based on various factors
    // For now, we'll use a simple formula based on the Kori score
    return Math.floor(koriScore * 2)
  }

  const requestStoreCreditLine = (amount: number) => {
    const maxCreditLine = calculateMaxCreditLine()
    if (amount <= maxCreditLine) {
      setStoreCreditLine(amount)
      return true
    }
    return false
  }

  const requestCardCreditLine = (amount: number) => {
    const maxCreditLine = calculateMaxCreditLine()
    if (amount <= maxCreditLine) {
      setCardCreditLine(amount)
      return true
    }
    return false
  }

  const makeRepayment = (amount: number, type: 'store' | 'card') => {
    const currentDate = new Date().toISOString()
    const status = 'on-time' // In a real implementation, this would be determined by payment timing

    addRepayment({
      date: currentDate,
      amount,
      status,
      type,
    })

    if (type === 'store') {
      setStoreCreditLine(storeCreditLine - amount)
    } else {
      setCardCreditLine(cardCreditLine - amount)
    }
  }

  return {
    storeCreditLine,
    cardCreditLine,
    requestStoreCreditLine,
    requestCardCreditLine,
    makeRepayment,
    maxCreditLine: calculateMaxCreditLine(),
    tier,
  }
} 