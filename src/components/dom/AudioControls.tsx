import { useTheme } from '@/context/themeProvider';

export default function AudioControls(props) {
  const { theme, num, setNum, playing, forward, playPause, color } =
  useTheme();
const { multiplier, toneClicked, themeX, themeY, themeZ, inverseSpeed } =
  theme;

  return (
    <>
        <p>
            AudioControls
        </p>
    </>
  )
}
