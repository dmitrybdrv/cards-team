import { Meta, StoryObj } from '@storybook/react'

import { TdIcons } from '@/components/ui'

const meta = {
  title: 'Components/UI/Tables/TdIcons',
  component: TdIcons,
  tags: ['autodocs'],
  argTypes: {
    onPlay: {
      type: 'function',
      action: 'Call onPlay',
      description: 'Колбэк для запуска элемента. Иконки отрисуются только для переданных колбэков',
    },
    onEdit: {
      type: 'function',
      action: 'Call onEdit',
      description: 'Колбэк для редактирования элемента',
    },
    onDelete: {
      type: 'function',
      action: 'Call onDelete',
      description: 'Колбэк для удаления элемента',
    },
  },
} satisfies Meta<typeof TdIcons>

type Story = StoryObj<typeof TdIcons>

export default meta

export const Default: Story = {
  args: {},
}
