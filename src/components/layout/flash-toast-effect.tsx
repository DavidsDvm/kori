'use client';

import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useFlashToast } from '@/store/flashToastStore';

export default function FlashToastEffect() {
  const { message, kind, clear } = useFlashToast();

  useEffect(() => {
    if (message) {
      toast[kind](message);
      clear();
    }
  }, [message, kind, clear]);

  return null;
}
