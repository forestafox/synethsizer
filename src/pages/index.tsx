import AudioControls from '@/components/dom/AudioControls';
import { useThemeStore } from '@/zustand/themeStore';
import dynamic from 'next/dynamic'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
// const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })
const Dots = dynamic(() => import('@/components/canvas/Dots'), { ssr: false })

// Dom components go here
export default function Page(props) {
  

  const [inverseSpeed, setInverseSpeed] = useThemeStore(
    (state) => [state.inverseSpeed, state.setInverseSpeed]
  )

  const [multiplier, setMultiplier] = useThemeStore(
    (state) => [state.multiplier, state.setMultiplier]
  )


  return (
    <>
      <header className='flex items-center  justify-around bg-purple-800'>
        <h1 className='text-lg'>Synethsizer</h1>
        <h2>Harmonic Pendulum</h2>
        <h2>
          <button>Play / Pause</button>  
        </h2>
        <div className='flex items-center gap-2'>
          <h2>
            Particles: {multiplier}
          </h2>
          <div className='flex flex-col'>
            <button onMouseDown={() => setMultiplier(multiplier+1)} className='flex justify-center rounded-xl font-bold text-lime-500 hover:bg-purple-600'>Up</button>
            <button onMouseDown={() => setMultiplier(multiplier-1)} className='flex justify-center rounded-xl font-bold text-lime-500 hover:bg-purple-600'>Down</button>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <h2>Inverse Speed: {inverseSpeed}</h2>
          <div className='flex flex-col'>
            <button onMouseDownCapture={() => setInverseSpeed(inverseSpeed+1)} className='flex justify-center rounded-xl font-bold text-lime-500 hover:bg-purple-600'>Up</button>
            <button onMouseDown={() => setInverseSpeed(inverseSpeed-1)} className='flex justify-center rounded-xl font-bold text-lime-500 hover:bg-purple-600'>Down</button>
          </div>
        </div>
      </header>
      <footer className='fixed bottom-0 flex w-full items-center justify-center bg-purple-800'>
        <AudioControls />
        </footer>
    </>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => <Dots  />

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
