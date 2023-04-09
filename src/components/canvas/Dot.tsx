import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Line, useCursor } from '@react-three/drei'
import { useThemeStore } from '@/zustand/themeStore.ts'

export default function Dot(props) {
  const ref = useRef<any>();

    const [dotColor, setDotColor] = useState('black');
    const { theme, num, setNum, color, forward, playing } = useThemeStore(
      (state) => (
        {
          theme: state.theme,
          num: state.num,
          setNum: state.setNum,
          color: state.color,
          forward: state.forward,
          playing: state.playing
        })
      );

const { multiplier, themeX, themeY, themeZ, inverseSpeed } =
  theme;

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

      const { ndex } = props;
    
      forward
        ? setNum(num + (playing ? delta : 0) / inverseSpeed)
        : setNum(num - (playing ? delta : 0) / inverseSpeed)
        ;
    const x = themeX(ndex, multiplier, num);
    const y = themeY(ndex, multiplier, num);
    const z = themeZ(ndex, multiplier, num);

    let r;
    let g;
    let b;

    if (color === 'orange') {
      if (dotColor !== 'orange') {
        setDotColor('orange');
      }
    } else if (color === 'rainbow') {
      r = Math.round(z * 128 + 128);
      g = Math.round(z * 128 + (y * 128 + 128));
      b = Math.round(z * 128 + (x * 128 + 128));

      if (r > 255) r = 255;
      if (r < 0) r = 0;
      if (g > 255) g = 255;
      if (g < 0) g = 0;
      if (b > 255) b = 255;
      if (b < 0) b = 0;
      setDotColor(`rgb(${r},${g},${b})`);
    } else if (color === 'trippy') {
      let zy = z * 192 + 128;
      if (zy > 255) setDotColor(`rgb(255,0,0)`);
      if (zy < 0) setDotColor(`rgb(0,0,0)`);
    }

    
    ref.current.position.x = x;
    ref.current.position.y = y;
    ref.current.position.z = z;
  })


  return (
      <mesh {...props} ref={ref} onClick={() => {}} onPointerOver={() => {}} onPointerOut={() => {}}>
        <sphereGeometry args={[0.066, 19, 19]} />
        <meshPhysicalMaterial roughness={0} color={dotColor} />
      </mesh>
  )
}
