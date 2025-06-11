import { ChainId, Quote } from '@lifi/sdk';

export interface LifiQuoteParams {
  fromAddress: string;
  fromChain: ChainId;
  toChain: ChainId;
  fromToken: string;
  toToken: string;
  fromAmount: string;
}

export interface LifiHook {
  quote: Quote | null;
  isLoading: boolean;
  error: Error | null;
  fetchQuote: (params: LifiQuoteParams) => Promise<Quote>;
} 