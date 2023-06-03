import { create } from 'zustand'

interface ThemeState {
  color: string
  multiplier: number
  inverseSpeed: number
  forward: boolean
  playing: boolean
  themeX: Function
  themeY: Function
  themeZ: Function
  num: number
  setNum: (to: number) => void
  setPlaying: (current: boolean) => void
  setForward: (current: boolean) => void
  setColor: (selection: string) => void
  setMultiplier: (current: number) => void
  setInverseSpeed: (current: number) => void
}

export const useThemeStore = create<ThemeState>()((set) => ({
  color: 'Rainbow',
  multiplier: 91,
  inverseSpeed: 26,
  forward: true,
  playing: true,
  themeX: (i, multiplier, num) =>
    Math.cos((2 * Math.PI * i) / multiplier + num) * 2,
  themeY: (i, multiplier, num) =>
    Math.sin((2 * Math.PI * i) / multiplier + num) * 2,
  themeZ: (i, multiplier, num) => Math.sin(num * (i + 1)),
  num: 0,
  setNum: (to) => set((state) => ({ num: to })),
  setPlaying: (current) => set(() => ({ playing: current })),
  setForward: (current) => set(() => ({ forward: current })),
  setColor: (selection) => set(() => ({ color: selection })),
  setMultiplier: (current) => set(() => ({ multiplier: current })),
  setInverseSpeed: (current) => set(() => ({ inverseSpeed: current })),
}))