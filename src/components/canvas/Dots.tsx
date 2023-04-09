import { useRef } from 'react'
import Dot from './Dot'
import { useThemeStore } from '@/zustand/themeStore'

export default function Dots({  ...props }) {
  
  const mesh = useRef(null)

  const theme = useThemeStore((state) => state.theme);
  const { multiplier } = theme;

  const mapArray = new Array(multiplier).fill('');

  return (
    <group ref={mesh} {...props}>
      {mapArray.map((each, i) => {
        return <Dot ndex={i} key={i} />
      })}
    </group>
  )
}
