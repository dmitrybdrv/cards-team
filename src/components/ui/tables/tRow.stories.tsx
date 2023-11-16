import { Meta, StoryObj } from '@storybook/react'

import { Sort, THead } from '@/components/ui'
import { decksColumnsTitles } from '@/pages/decks-page'

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
    columns: decksColumnsTitles,
  },
  render: args => {
    const currentSort: Sort = {
      orderName: null,
      direction: null,
    }

    return <THead columns={args.columns} onSort={() => {}} currentSort={currentSort} />
  },
}
