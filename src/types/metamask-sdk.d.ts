declare module '@metamask/sdk' {
  export interface MetaMaskSDKOptions {
    dappMetadata: {
      name: string
      url: string
    }
    checkInstallationImmediately?: boolean
    enableDebug?: boolean
  }

  export interface MetaMaskProvider {
    request: (args: { method: string; params?: any[] }) => Promise<any>
    on: (event: string, callback: (params: any) => void) => void
    removeListener: (event: string, callback: (params: any) => void) => void
  }

  export default class MetaMaskSDK {
    constructor(options: MetaMaskSDKOptions)
    getProvider(): MetaMaskProvider | null
  }
} 