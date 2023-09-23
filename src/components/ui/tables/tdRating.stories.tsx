import { Meta, StoryObj } from '@storybook/react'

import { TdRating } from '@/components/ui'

const meta = {
  title: 'Components/UI/Tables/TdRating',
  component: TdRating,
  tags: ['autodocs'],
  argTypes: {
    rating: {
      description: 'Рейтинг. Максимум 5 звезд',
    },
  },
} satisfies Meta<typeof TdRating>

type Story = StoryObj<typeof TdRating>

export default meta

export const Default: Story = {
  args: {
    rating: 4,
  },
}
