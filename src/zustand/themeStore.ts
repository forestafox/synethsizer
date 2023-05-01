import { create } from 'zustand'
import { themes } from '@/context/library'

interface ThemeState {
  bears: number
  theme: {
      multiplier: number
      inverseSpeed: number
      themeX: Function
      themeY: Function
      themeZ: Function
  }
  num: number
  color: string
  setNum: (to: number) => void
  increase: (by: number) => void
  forward: boolean
  playing: boolean
}

export const useThemeStore = create<ThemeState>()((set) => ({
  bears: 0,
  color: 'orange',
  theme: themes.Harmony,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  num: 0,
  setNum: (to) => set((state) => ({ num: to })),
  forward: true,
  playing: true,
  increaseSpeed: () => set(() => ({ theme: { multiplier: theme.multiplier--, ...theme} })),
  decreaseSpeed: () => set(() => ({ theme: lastName })),
}))