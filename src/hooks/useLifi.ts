import { useCallback, useState } from 'react';
import { ChainId, createConfig, getQuote, LiFiStep } from '@lifi/sdk';

export const useLifi = () => {
  const [quote, setQuote] = useState<LiFiStep | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Initialize LI.FI config
  const config = createConfig({
    integrator: 'Kori',
  });

  const fetchQuote = useCallback(async (
    fromAddress: string,
    fromChain: ChainId,
    toChain: ChainId,
    fromToken: string,
    toToken: string,
    fromAmount: string
  ) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const quote = await getQuote({
        fromAddress,
        fromChain,
        toChain,
        fromToken,
        toToken,
        fromAmount,
      });
      
      setQuote(quote);
      return quote;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to fetch quote');
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    quote,
    isLoading,
    error,
    fetchQuote,
  };
}; 