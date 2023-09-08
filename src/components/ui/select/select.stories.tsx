import type { Meta, StoryObj } from '@storybook/react'

import { SelectC } from './'

const meta = {
  title: 'Components/SelectC',
  component: SelectC,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'active', 'hover', 'focus'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof SelectC>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    values: ['apple', 'orange', 'kiwi'],
    variant: 'primary',
  },
}

export const Active: Story = {
  args: {
    values: ['apple', 'orange', 'kiwi'],
    variant: 'active',
  },
}
export const Hover: Story = {
  args: {
    values: ['apple', 'orange', 'kiwi'],
    variant: 'hover',
  },
}
export const Focus: Story = {
  args: {
    values: ['apple', 'orange', 'kiwi'],
    variant: 'focus',
  },
}
