import { useTheme } from '@/context/themeProvider';

export default function AudioControls(props) {
  const { theme, num, setNum, playing, forward, playPause, color } =
  useTheme();
const { multiplier, toneClicked, themeX, themeY, themeZ, inverseSpeed } =
  theme;

  return (
    <div className='flex'>
        <iframe className='h-24 w-48 p-1' src="https://www.youtube.com/embed/xglvNR-fMSk"></iframe>
        <iframe className='h-24 w-48 p-1' src="https://www.youtube.com/embed/vm1CjIfPRPg"></iframe>
        <iframe className='h-24 w-48 p-1' src="https://www.youtube.com/embed/ZwtwIHGveS8"></iframe>
        <iframe className='h-24 w-48 p-1' src="https://www.youtube.com/embed/7s-rRMUl04I"></iframe>
    </div>
  )
}
