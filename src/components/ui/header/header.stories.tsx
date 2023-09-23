import { StoryObj, Meta } from '@storybook/react'

import { Header } from './header.tsx'

const meta = {
  title: 'Components/UI/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    isLoggedIn: {
      description: 'Boolean значение - true - залогинен, false - нет',
    },
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedOut: Story = {
  args: {
    isLoggedIn: false,
  },
}

export const LoggeIn: Story = {
  args: {
    isLoggedIn: true,
  },
}
