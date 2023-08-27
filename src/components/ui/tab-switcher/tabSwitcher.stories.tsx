import { StoryObj, Meta } from '@storybook/react'

import { TabSwitcher } from './tabSwitcher'

const meta = {
  title: 'Components/UI/TabSwitcher',
  component: TabSwitcher,
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      action: 'Changed value',
      type: 'function',
    },
  },
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Switcher2Items: Story = {
  args: {
    values: [{ value: 'Switcher1' }, { value: 'Switcher2' }],
  },
}

export const Switcher4Items: Story = {
  args: {
    values: [
      { value: 'Switcher1' },
      { value: 'Switcher2' },
      { value: 'Switcher3' },
      { value: 'Switcher4' },
    ],
  },
}

export const SwitcherWithDefaultValues: Story = {
  args: {
    values: [
      { value: 'Switcher1' },
      { value: 'Switcher2' },
      { value: 'Switcher3' },
      { value: 'Switcher4' },
    ],
    defaultValue: 'Switcher2',
  },
}

export const SwitcherWithDisabledItem: Story = {
  args: {
    values: [
      { value: 'Switcher1' },
      { value: 'Switcher2' },
      { value: 'Switcher3' },
      { value: 'Switcher4', disabled: true },
    ],
  },
}
