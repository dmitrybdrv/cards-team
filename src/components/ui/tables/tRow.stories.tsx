import { Meta, StoryObj } from '@storybook/react'

import { THead } from '@/components/ui'

const meta = {
  title: 'Components/UI/Tables/THead',
  component: THead,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      description:
        'Массив строк для формирования колонок, для пустой колонки в header - передай пустую строку в массиве. Стили применяться в таблице в зависимости от варианта',
    },
  },
} satisfies Meta<typeof THead>

type Story = StoryObj<typeof THead>

export default meta

export const Default: Story = {
  args: {
    columns: ['Name', 'Cards', 'LastUpdate', 'Created by', ''],
  },
  render: args => {
    return <THead columns={args.columns} />
  },
}
