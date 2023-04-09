import { create } from 'zustand'

interface ThemeState {
  bears: number
  multiplier: number
  increase: (by: number) => void
}

export const useThemeStore = create<ThemeState>()((set) => ({
  bears: 0,
  multiplier: 90,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}))