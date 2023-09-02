import type { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'

import { TextField } from './'

const meta = {
  title: 'Components/UI/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    error: {
      description: 'Ошибка при валидации',
      type: 'string',
    },
    label: {
      description: 'Лэйбл - наименвание поля',
    },
    disabled: {
      description: 'Делает элемент неактивным',
    },
  },
} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: false,
    label: 'Example',
  },
}

export const Password = () => {
  return <TextField type={'password'} name={'password'} label={'Password'} />
}

export const Search = () => {
  return <TextField type={'search'} name={'search'} label={'Search'} />
}
