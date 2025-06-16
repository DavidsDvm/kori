// lib/flashToastStore.ts
import { create } from 'zustand';

type ToastKind = 'success' | 'error' | 'loading';

export const useFlashToast = create<{
  message: string | null;
  kind: ToastKind;
  set: (msg: string, k?: ToastKind) => void;
  clear: () => void;
}>((set) => ({
  message: null,
  kind: 'error',
  set: (message, kind = 'error') => set({ message, kind }),
  clear: () => set({ message: null }),
}));
