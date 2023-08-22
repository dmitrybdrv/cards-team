import * as Slider from '@radix-ui/react-slider'

import s from './slider.module.scss'

export const SliderApp = () => {
  return (
    <Slider.Root defaultValue={[25, 75]} className={s.SliderRoot}>
      <Slider.Track className={s.SliderTrack}>
        <Slider.Range className={s.SliderRange} />
      </Slider.Track>
      <Slider.Thumb className={s.SliderThumb} />
      <Slider.Thumb className={s.SliderThumb} />
    </Slider.Root>
  )
}
