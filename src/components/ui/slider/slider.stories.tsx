import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from './'

const meta = {
  title: 'Components/UI/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    changeMinCardsCount: {
      action: 'onChange min value slider',
      type: 'function',
      description: 'Функция обработки изменения минимального диапазона',
    },
    changeMaxCardsCount: {
      action: 'onChange max value slider',
      type: 'function',
      description: 'Функция обработки изменения максимального диапазона',
    },
    boundaryMinValue: {
      type: 'number',
      description: 'Минимальное значение возможного диапазона',
      defaultValue: {
        summary: 0,
      },
    },
    boundaryMaxValue: {
      type: 'number',
      description: 'Максимальное значение возможного диапазона',
      defaultValue: {
        summary: 100,
      },
    },
    defaultMinValue: {
      type: 'number',
      description: 'Минимальное стартовое значение выбранного диапазона',
      defaultValue: {
        summary: 0,
      },
    },
    defaultMaxValue: {
      type: 'number',
      description: 'Максимальное стартовое значение выбранного диапазона',
      defaultValue: {
        summary: 'boundaryMaxValue',
      },
    },
    step: {
      type: 'number',
      description: 'Шаг выбора диапазона',
      defaultValue: {
        summary: 1,
      },
    },
    width: {
      type: 'number',
      description: 'Ширина всего диапазона',
      defaultValue: {
        summary: 200,
      },
    },
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultRanges: Story = {
  args: {
    currentValue: [20, 40],
  },
  render: args => {
    const [currentValue, setValue] = useState<[number, number]>([20, 40])
    const changeMinCardsCount = (minValue: string) => {
      setValue(prevState => [+minValue, prevState[1]])
    }

    const changeMaxCardsCount = (maxValue: string) => {
      setValue(prevState => [prevState[0], +maxValue])
    }

    return (
      <Slider
        {...args}
        currentValue={currentValue}
        changeMinCardsCount={changeMinCardsCount}
        changeMaxCardsCount={changeMaxCardsCount}
      />
    )
  },
}
export const SetRanges: Story = {
  args: {
    boundaryMinValue: 10,
    boundaryMaxValue: 50,
    defaultMaxValue: 40,
    defaultMinValue: 20,
    step: 2,
    currentValue: [20, 40],
  },
  render: DefaultRanges.render,
}
