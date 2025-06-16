'use client';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import { useRouter, usePathname } from 'next/navigation';
import { useFlashToast } from '@/store/flashToastStore';

export function WalletGuard({ children }: { children: React.ReactNode }) {
  const { isConnected } = useAccount();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isConnected) {
      const pageName = pathname.split('/').pop() || 'this page';
      // save the message globally
      useFlashToast.getState().set(
        `Please connect your wallet to access “${pageName}”`,
        'error'
      );
      router.back();
    }
  }, [isConnected, pathname, router]);

  return isConnected ? <>{children}</> : null;
}
