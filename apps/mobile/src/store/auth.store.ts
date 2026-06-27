import { create } from 'zustand';
import type { Publisher } from '@congregation-app/shared';

interface AuthState {
  publisher: Publisher | null;
  congregationId: string | null;
  setPublisher: (publisher: Publisher) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  publisher: null,
  congregationId: null,
  setPublisher: (publisher) =>
    set({ publisher, congregationId: publisher.congregation_id }),
  clearAuth: () => set({ publisher: null, congregationId: null }),
}));
