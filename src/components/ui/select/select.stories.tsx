import { Meta, StoryObj } from '@storybook/react'

import { SelectC } from './select.tsx'

const meta = {
  title: 'Components/UI/Select',
  component: SelectC,
  tags: ['autodocs'],
  argTypes: {
    values: {
      description: 'fields select values',
    },
    label: {
      description: 'the name of the select',
    },
    isDisabled: {
      description: "Applied for all items'",
    },
    className: {
      description: 'for layout control',
    },
  },
} satisfies Meta<typeof SelectC>

export default meta
type Story = StoryObj<typeof meta>

export const Select: Story = {
  args: {
    values: ['apple', 'orange', 'kiwi'],
    label: 'Select-box',
    className: ' width: 210px;',
  },
}

export const SelectWithDisabled: Story = {
  args: {
    values: ['apple', 'orange', 'kiwi'],
    label: 'Select-box',
    isDisabled: true,
    className: ' width: 210px;',
  },
}
