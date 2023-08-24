import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from './'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      action: 'Change slider',
      type: 'function',
      description: 'Функция обработки изменения выбранного диапазона',
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

export const DefaultRanges: Story = {}
export const SetRanges: Story = {
  args: {
    boundaryMinValue: 10,
    boundaryMaxValue: 50,
    defaultMaxValue: 40,
    defaultMinValue: 20,
    step: 2,
  },
}
