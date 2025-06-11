import { useCallback, useState } from 'react';
import {
  toPasskeyTransport,
  toWebAuthnCredential,
  toModularTransport,
  toCircleSmartAccount,
  encodeTransfer,
  WebAuthnMode,
} from '@circle-fin/modular-wallets-core';
import { createPublicClient } from 'viem';
import { createBundlerClient, toWebAuthnAccount } from 'viem/account-abstraction';
import { polygonAmoy } from 'viem/chains';

export const useCircleWallet = () => {
  const [smartAccount, setSmartAccount] = useState<any>(null);
  const [bundlerClient, setBundlerClient] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const initializeWallet = useCallback(async (username: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // Get environment variables
      const clientKey = process.env.NEXT_PUBLIC_CIRCLE_CLIENT_KEY;
      const clientUrl = process.env.NEXT_PUBLIC_CIRCLE_CLIENT_URL;

      if (!clientKey || !clientUrl) {
        throw new Error('Circle client key or URL not found in environment variables');
      }

      // 1. Create Passkey Transport and register/login
      const passkeyTransport = toPasskeyTransport(clientUrl, clientKey);
      const credential = await toWebAuthnCredential({
        transport: passkeyTransport,
        mode: WebAuthnMode.Register,
        username,
      });

      // 2. Create modular transport
      const modularTransport = toModularTransport(
        `${clientUrl}/polygonAmoy`,
        clientKey
      );

      // 3. Create blockchain client
      const client = createPublicClient({
        chain: polygonAmoy,
        transport: modularTransport,
      });

      // 4. Create Circle smart account
      const account = await toCircleSmartAccount({
        client,
        owner: toWebAuthnAccount({
          credential,
        }),
      });

      // 5. Create bundler client
      const bundler = createBundlerClient({
        account,
        chain: polygonAmoy,
        transport: modularTransport,
      });

      setSmartAccount(account);
      setBundlerClient(bundler);

      return { account, bundler };
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to initialize Circle wallet');
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const sendTransaction = useCallback(async (
    to: string,
    tokenAddress: string,
    amount: bigint
  ) => {
    if (!bundlerClient) {
      throw new Error('Bundler client not initialized');
    }

    setIsLoading(true);
    setError(null);

    try {
      const userOpHash = await bundlerClient.sendUserOperation({
        calls: [encodeTransfer(to as `0x${string}`, tokenAddress as `0x${string}`, amount)],
        paymaster: true,
      });

      const { receipt } = await bundlerClient.waitForUserOperationReceipt({
        hash: userOpHash,
      });

      return receipt;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to send transaction');
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [bundlerClient]);

  return {
    smartAccount,
    bundlerClient,
    isLoading,
    error,
    initializeWallet,
    sendTransaction,
  };
}; 