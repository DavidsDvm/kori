import { useEffect, useState } from 'react'
import MetaMaskSDK from '@metamask/sdk'
import { useWallet } from './useWallet'
import { useNotifications } from './useNotifications'

export const useMetaMask = () => {
  const [sdk, setSdk] = useState<MetaMaskSDK | null>(null)
  const [isInitialized, setIsInitialized] = useState(false)
  const { connect, disconnect } = useWallet()
  const { error: showError } = useNotifications()

  useEffect(() => {
    const initializeSDK = async () => {
      try {
        const MMSDK = new MetaMaskSDK({
          dappMetadata: {
            name: 'Kori',
            url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
          },
          checkInstallationImmediately: false,
          enableDebug: process.env.NODE_ENV === 'development',
        })

        setSdk(MMSDK)
        setIsInitialized(true)
      } catch (err) {
        console.error('Failed to initialize MetaMask SDK:', err)
        showError('Failed to initialize MetaMask SDK. Please try again.')
      }
    }

    initializeSDK()
  }, [showError])

  const connectWallet = async () => {
    if (!sdk || !isInitialized) {
      showError('MetaMask SDK is not initialized. Please try again.')
      return
    }

    try {
      const ethereum = sdk.getProvider()
      if (!ethereum) {
        showError('MetaMask is not installed. Please install MetaMask to continue.')
        return
      }

      await connect('metaMask')
    } catch (err) {
      console.error('Failed to connect wallet:', err)
      showError('Failed to connect wallet. Please try again.')
    }
  }

  const disconnectWallet = () => {
    disconnect()
  }

  const signMessage = async (message: string) => {
    if (!sdk || !isInitialized) {
      showError('MetaMask SDK is not initialized. Please try again.')
      return null
    }

    try {
      const ethereum = sdk.getProvider()
      if (!ethereum) {
        showError('MetaMask is not installed. Please install MetaMask to continue.')
        return null
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      const account = accounts[0]

      const signature = await ethereum.request({
        method: 'personal_sign',
        params: [message, account],
      })

      return signature
    } catch (err) {
      console.error('Failed to sign message:', err)
      showError('Failed to sign message. Please try again.')
      return null
    }
  }

  return {
    isInitialized,
    connectWallet,
    disconnectWallet,
    signMessage,
  }
} 