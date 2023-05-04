import { create } from 'zustand'
import { themes } from '@/context/library'

interface ThemeState {
  multiplier: number
  inverseSpeed: number
  themeX: Function
  themeY: Function
  themeZ: Function
  num: number
  color: string
  setNum: (to: number) => void
  forward: boolean
  playing: boolean
  setMultiplier: (current: number) => void
  setInverseSpeed: (current: number) => void
}

export const useThemeStore = create<ThemeState>()((set) => ({
  color: 'orange',
  multiplier: 90,
  inverseSpeed: 20,
  themeX: (ndex, multiplier, num) =>
    Math.cos((2 * Math.PI * ndex) / multiplier + num) * 2,
  themeY: (ndex, multiplier, num) =>
    Math.sin((2 * Math.PI * ndex) / multiplier + num) * 2,
  themeZ: (ndex, multiplier, num) => Math.sin(num * (ndex + 1)),
  num: 0,
  setNum: (to) => set((state) => ({ num: to })),
  forward: true,
  playing: true,
  setMultiplier: (current) => set(() => ({ multiplier: current })),
  setInverseSpeed: (current) => set(() => ({ inverseSpeed: current })),
}))