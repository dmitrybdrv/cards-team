import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Pagination } from '@/components/ui/pagination/pagination.tsx'

const meta = {
  title: 'Components/UI/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      description: 'Актуальная страница',
    },
    totalPages: {
      description: 'Общее число страниц / номер последней страницы',
    },
    minCountShowBtn: {
      description: 'Количество отображаемых кнопок между первой и последней порцией',
      defaultValue: 3,
    },
    maxCountShowBtn: {
      description: 'Количество отображаемых кнопок в первой и последней порции',
      defaultValue: 5,
    },
    itemsPerPage: {
      description: 'Количество отображаемых элементов в селекторе',
    },
    changePage: {
      action: 'changed currentPage',
      type: 'function',
    },
    changeItemsPerPage: {
      action: 'changed itemsPerPage',
      type: 'function',
    },
    className: {
      description: 'Стили для обертки',
    },
  },
} satisfies Meta<typeof Pagination>

type Story = StoryObj<typeof Pagination>

export default meta

export const Default: Story = {
  render: args => {
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)

    return (
      <Pagination
        {...args}
        itemsPerPage={itemsPerPage}
        changeItemsPerPage={setItemsPerPage}
        changePage={setCurrentPage}
        currentPage={currentPage}
      />
    )
  },
  args: {
    totalPages: 111,
  },
}
