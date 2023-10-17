import { ChangeEvent, useEffect, useState } from 'react'

import * as SliderApp from '@radix-ui/react-slider'

import s from './slider.module.scss'

import { ChangeSwitcherValues } from '@/pages/decks-page/hook/useGetDecks.tsx'

type Props = {
  defaultMinValue?: number
  defaultMaxValue?: number
  step?: number
  boundaryMinValue?: number
  boundaryMaxValue?: number
  onChange?: (minValue: number, maxValue: number) => void
  width?: number
  setFuncForChangeValue: (arg: ChangeSwitcherValues) => void
  disabled?: boolean
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
    onChange,
    setFuncForChangeValue,
  } = props

  //checking default values for range values
  if (defaultMaxValue > boundaryMaxValue || defaultMaxValue < boundaryMinValue) {
    defaultMaxValue = boundaryMaxValue
  }
  if (defaultMinValue < boundaryMinValue || defaultMinValue > boundaryMaxValue) {
    defaultMinValue = boundaryMinValue
  }
  const [minValue, setMinValue] = useState(defaultMinValue)
  const [maxValue, setMaxValue] = useState(defaultMaxValue)

  useEffect(() => {
    setFuncForChangeValue({ setMaxValue, setMinValue })
  }, [])

  const handlerSliderChange = (number: number[]) => {
    setMinValue(number[0])
    setMaxValue(number[1])
  }

  const fetchSliderValue = (number: number[]) => {
    onChange && onChange(number[0], number[1])
  }

  const handlerMinInput = (e: ChangeEvent<HTMLInputElement>) => {
    let newMinValue = Number(e.currentTarget.value)

    setMinValue(prevState => {
      if (newMinValue < boundaryMinValue) {
        newMinValue = prevState
      }

      return newMinValue
    })
    onChange && onChange(newMinValue, maxValue)
  }

  const handlerMaxInput = (e: ChangeEvent<HTMLInputElement>) => {
    let newMaxValue = Number(e.currentTarget.value)

    setMaxValue(prevState => {
      if (newMaxValue > boundaryMaxValue) {
        newMaxValue = prevState
      }

      return newMaxValue
    })
    onChange && onChange(minValue, newMaxValue)
  }

  return (
    <form className={s.SliderWrapper}>
      <input
        className={s.input}
        type={'number'}
        value={minValue}
        onChange={handlerMinInput}
        disabled={disabled}
      />
      <SliderApp.Root
        disabled={disabled}
        style={{ width: width }}
        min={boundaryMinValue}
        max={boundaryMaxValue}
        value={[minValue, maxValue]}
        defaultValue={[defaultMinValue, defaultMaxValue]}
        step={step}
        onValueChange={handlerSliderChange}
        onValueCommit={fetchSliderValue}
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
        value={maxValue}
        onChange={handlerMaxInput}
        disabled={disabled}
      />
    </form>
  )
}
