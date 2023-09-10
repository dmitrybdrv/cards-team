import type { Meta, StoryObj } from '@storybook/react'

import { SelectC } from './'

const meta = {
  title: 'Components/SelectC',
  component: SelectC,
  tags: ['autodocs'],
  argTypes: {
    values: ['apple', 'orange', 'kiwi'],
    isDisabled: false,
    label: 'select-box',
  },
} satisfies Meta<typeof SelectC>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    values: ['apple', 'orange', 'kiwi'],
  },
}

export const Active: Story = {
  args: {
    values: ['apple', 'orange', 'kiwi'],
  },
}
export const Hover: Story = {
  args: {
    values: ['apple', 'orange', 'kiwi'],
  },
}
export const Focus: Story = {
  args: {
    values: ['apple', 'orange', 'kiwi'],
    variant: 'focus',
  },
}
