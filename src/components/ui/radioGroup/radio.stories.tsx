import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'

import { Radio } from './radio.tsx'

const meta = {
  title: 'Components/UI/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    data: {
      description: 'Данные - вариант выбора одного из предложенных свойств',
    },
    value: {
      description: 'Стартовое значение хранящееся в state',
    },
  },
} satisfies Meta<typeof Radio>

type Story = StoryObj<typeof Radio>

export default meta

const data = [
  { label: 'first', value: 'one', id: '1' },
  { label: 'second', value: 'two', id: '2' },
]

export const Default: Story = {
  render: args => {
    const { register } = useForm()
    const [value, setValue] = useState(data[0].value)

    return <Radio {...register('radio')} value={value} data={data} onChange={setValue} {...args} />
  },
  args: {
    data: data,
    value: data[0].value,
  },
}
