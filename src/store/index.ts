import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserState {
  koriScore: number
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond'
  storeCreditLine: number
  cardCreditLine: number
  repaymentHistory: Array<{
    date: string
    amount: number
    status: 'on-time' | 'late'
    type: 'store' | 'card'
  }>
  setKoriScore: (score: number) => void
  setTier: (tier: UserState['tier']) => void
  setStoreCreditLine: (amount: number) => void
  setCardCreditLine: (amount: number) => void
  addRepayment: (repayment: UserState['repaymentHistory'][0]) => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      koriScore: 185,
      tier: 'Bronze',
      storeCreditLine: 100,
      cardCreditLine: 0,
      repaymentHistory: [],
      setKoriScore: (score) => set({ koriScore: score }),
      setTier: (tier) => set({ tier }),
      setStoreCreditLine: (amount) => set({ storeCreditLine: amount }),
      setCardCreditLine: (amount) => set({ cardCreditLine: amount }),
      addRepayment: (repayment) =>
        set((state) => ({
          repaymentHistory: [...state.repaymentHistory, repayment],
        })),
    }),
    {
      name: 'kori-storage',
    }
  )
) 