import AudioControls from '@/components/dom/AudioControls';
import { useThemeStore } from '@/zustand/themeStore';
import dynamic from 'next/dynamic';


// Dynamic import is used to prevent a payload when the website starts, that includes three.js, r3f etc..
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

  const [playing, setPlaying] = useThemeStore(
    (state) => [state.playing, state.setPlaying]
  )

  const [color, setColor] = useThemeStore(
    (state) => [state.color, state.setColor]
  )

  const [forward, setForward] = useThemeStore(
    (state) => [state.forward, state.setForward]
  )

  const pauseHandler = () => {
    setPlaying(false);
  }

  const playHandler = () => {
    setPlaying(true);
  }

  const colorHandler = (e) => {
    setColor(e.target.value);
  }

  const forwardHandler = () => {
    setForward(true);
  }

  const reverseHandler = () => {
    setForward(false);
  }

  const speedUpHandler = () => {
    setInverseSpeed(inverseSpeed===99?99:inverseSpeed+1);
  }

  const speedDownHandler = () => {
    setInverseSpeed(inverseSpeed===1?1:inverseSpeed-1);
  }

  const particleNumberUpHandler = () => {
    setMultiplier((multiplier===99?99:multiplier+1));
  }

  const particleNumberDownHandler = () => {
    setMultiplier((multiplier===1?1:multiplier-1));
  }


  return (
    <>
      <header className='flex flex-wrap  items-center justify-around gap-1 bg-purple-800 p-1'>
        <a href="https://github.com/forestheims/synethsizer" target='_blank' rel="opener author">
          <h1 className='cursor-pointer text-lg font-bold text-lime-400'>Synethsizer</h1>
        </a>
        <div className='flex gap-1'>
          <h2>Harmonic Pendulum</h2>
          <select onChange={(e) => colorHandler(e)} className='rounded bg-purple-400 p-1' name="color" id="color">
            <option className='' value="Rainbow">Rainbow</option>
            <option className='' value="Orange">Orange</option>
            <option className='' value="Blinking">Blinking</option>
          </select>
        </div>
        <div className='flex gap-1'>
          <h2>
            {playing ? <button className='w-12 rounded bg-rose-500 p-1' onClick={() => pauseHandler()}>Pause</button> : <button className='w-12 rounded bg-lime-500 p-1' onClick={() => playHandler()}>Play{' '}</button>}  
          </h2>
          <h2>
            {forward ? <button className='w-16 rounded bg-lime-500 p-1' onClick={() => reverseHandler()}>Reverse</button> : <button className='w-16 rounded bg-rose-500 p-1' onClick={() => forwardHandler()}>Forward</button>}  
          </h2>
        </div>
        <div className='flex items-center gap-2'>
          <h2>
            Particles: {multiplier}
          </h2>
          <div className='flex flex-col'>
            <button onMouseDown={() => particleNumberUpHandler()} className='flex justify-center rounded-xl font-bold text-lime-500 hover:bg-purple-600'>Up</button>
            <button onMouseDown={() => particleNumberDownHandler()} className='flex justify-center rounded-xl font-bold text-lime-500 hover:bg-purple-600'>Down</button>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <h2>Inverse Speed: {inverseSpeed}</h2>
          <div className='flex flex-col'>
            <button onMouseDown={() => speedUpHandler()} className='flex justify-center rounded-xl font-bold text-lime-500 hover:bg-purple-600'>Up</button>
            <button onMouseDown={() => speedDownHandler()} className='flex justify-center rounded-xl font-bold text-lime-500 hover:bg-purple-600'>Down</button>
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
