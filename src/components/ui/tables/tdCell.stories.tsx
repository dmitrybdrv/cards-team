import { Meta, StoryObj } from '@storybook/react'

import testImg from '@/assets/img/avatarPlaceholder.png'
import { TdCell } from '@/components/ui'

const meta = {
  title: 'Components/UI/Tables/TdCell',
  component: TdCell,
  tags: ['autodocs'],
  argTypes: {
    video: {
      description: 'Видео вставка',
    },
    img: {
      description: 'Картинка',
    },
    children: {
      description: 'Строка',
    },
  },
} satisfies Meta<typeof TdCell>

type Story = StoryObj<typeof TdCell>

export default meta

export const Default: Story = {
  render: _args => {
    return <TdCell>По умолчанию</TdCell>
  },
}

export const WithImage: Story = {
  render: _args => {
    return <TdCell img={testImg}>По умолчанию</TdCell>
  },
}
