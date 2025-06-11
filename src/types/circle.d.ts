import { SmartAccountClient } from 'viem/account-abstraction';

export interface CircleWalletHook {
  smartAccount: any | null; // Replace with proper type from Circle SDK
  bundlerClient: SmartAccountClient | null;
  isLoading: boolean;
  error: Error | null;
  initializeWallet: (username: string) => Promise<{
    account: any; // Replace with proper type from Circle SDK
    bundler: SmartAccountClient;
  }>;
  sendTransaction: (
    to: string,
    tokenAddress: string,
    amount: bigint
  ) => Promise<any>; // Replace with proper receipt type
} 