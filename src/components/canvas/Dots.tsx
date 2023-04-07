import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useFrame } from '@react-three/fiber'
import { Line, useCursor } from '@react-three/drei'
import Dot from './Dot'
import { useTheme } from '@/context/themeProvider'

export default function Dots({  ...props }) {
  const mesh = useRef(null)

    const { theme } = useTheme();
  const { multiplier } = theme;

  const mapArray = new Array(multiplier).fill('');

  // useFrame((state, delta) => {
  //   const t = state.clock.getElapsedTime()
  //   // mesh.current.rotation.y = Math.sin(t) * (Math.PI / 8)
  //   // mesh.current.rotation.x = Math.cos(t) * (Math.PI / 8)
  //   // mesh.current.rotation.z -= delta / 4
  // })

  return (
    <group ref={mesh} {...props}>
      {mapArray.map((item, i) => {
        return <Dot ndex={i} key={i} />
      })}

    </group>
  )
}
