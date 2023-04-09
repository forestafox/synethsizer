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
  
  const bears = useThemeStore((state) => state.bears);

  return (
    <>
      <header className='flex justify-between bg-purple-800'>
        <h1 className='text-lg'>Synethsizer</h1>
        <h2>Play / Pause</h2>
        <h2>Bears: {bears}</h2>
        <h2>Previous</h2>
        <h2>Next</h2>
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
