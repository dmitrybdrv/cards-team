import { ChangeEvent } from 'react'

import * as SliderApp from '@radix-ui/react-slider'

import s from './slider.module.scss'

type Props = {
  defaultMinValue?: number
  defaultMaxValue?: number
  step?: number
  boundaryMinValue?: number
  boundaryMaxValue?: number
  width?: number
  disabled?: boolean
  currentValue: [number, number]
  changeMinCardsCount: (minValue: string) => void
  changeMaxCardsCount: (maxValue: string) => void
}
export const Slider = (props: Props) => {
  let {
    disabled,
    step = 1,
    boundaryMinValue = 0,
    boundaryMaxValue = 100,
    defaultMinValue = 0,
    defaultMaxValue = boundaryMaxValue,
    width = 200,
    changeMinCardsCount,
    changeMaxCardsCount,
    currentValue,
  } = props

  //checking default values for range values
  if (defaultMaxValue > boundaryMaxValue || defaultMaxValue < boundaryMinValue) {
    defaultMaxValue = boundaryMaxValue
  }
  if (defaultMinValue < boundaryMinValue || defaultMinValue > boundaryMaxValue) {
    defaultMinValue = boundaryMinValue
  }

  if (!currentValue[1]) {
    currentValue[1] = boundaryMaxValue
  }

  const handlerSliderChange = (number: number[]) => {
    changeMinCardsCount(number[0].toString())
    changeMaxCardsCount(number[1].toString())
  }

  const handlerMinInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newMinValue = e.currentTarget.value

    if (+newMinValue >= boundaryMinValue) {
      changeMinCardsCount(newMinValue)
    }
  }

  const handlerMaxInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = e.currentTarget.value

    if (+newMaxValue <= boundaryMinValue) {
      changeMinCardsCount(newMaxValue)
    }
  }

  return (
    <form className={s.SliderWrapper}>
      <input
        className={s.input}
        type={'number'}
        value={currentValue[0]}
        onChange={handlerMinInput}
        disabled={disabled}
      />
      <SliderApp.Root
        disabled={disabled}
        style={{ width: width }}
        min={boundaryMinValue}
        max={boundaryMaxValue}
        value={currentValue}
        defaultValue={[defaultMinValue, defaultMaxValue]}
        step={step}
        onValueChange={handlerSliderChange}
        onValueCommit={handlerSliderChange}
        className={s.SliderRoot}
      >
        <SliderApp.Track className={s.SliderTrack}>
          <SliderApp.Range className={s.SliderRange} />
        </SliderApp.Track>
        <SliderApp.Thumb className={s.SliderThumb} />
        <SliderApp.Thumb className={s.SliderThumb} />
      </SliderApp.Root>
      <input
        className={s.input}
        type={'number'}
        value={currentValue[1]}
        onChange={handlerMaxInput}
        disabled={disabled}
      />
    </form>
  )
}
