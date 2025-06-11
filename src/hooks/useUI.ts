import { useState } from 'react'

interface UIState {
  isMenuOpen: boolean
  isWalletModalOpen: boolean
  isCreditLineModalOpen: boolean
  isRepaymentModalOpen: boolean
  activeTab: string
}

export const useUI = () => {
  const [state, setState] = useState<UIState>({
    isMenuOpen: false,
    isWalletModalOpen: false,
    isCreditLineModalOpen: false,
    isRepaymentModalOpen: false,
    activeTab: 'dashboard',
  })

  const toggleMenu = () => {
    setState((prev) => ({ ...prev, isMenuOpen: !prev.isMenuOpen }))
  }

  const toggleWalletModal = () => {
    setState((prev) => ({ ...prev, isWalletModalOpen: !prev.isWalletModalOpen }))
  }

  const toggleCreditLineModal = () => {
    setState((prev) => ({ ...prev, isCreditLineModalOpen: !prev.isCreditLineModalOpen }))
  }

  const toggleRepaymentModal = () => {
    setState((prev) => ({ ...prev, isRepaymentModalOpen: !prev.isRepaymentModalOpen }))
  }

  const setActiveTab = (tab: string) => {
    setState((prev) => ({ ...prev, activeTab: tab }))
  }

  const closeAllModals = () => {
    setState((prev) => ({
      ...prev,
      isWalletModalOpen: false,
      isCreditLineModalOpen: false,
      isRepaymentModalOpen: false,
    }))
  }

  return {
    ...state,
    toggleMenu,
    toggleWalletModal,
    toggleCreditLineModal,
    toggleRepaymentModal,
    setActiveTab,
    closeAllModals,
  }
} 