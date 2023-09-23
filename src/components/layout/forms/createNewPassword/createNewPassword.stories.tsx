import { Meta, StoryObj } from '@storybook/react'

import { CreateNewPassword } from './createNewPassword.tsx'

const meta = {
  title: 'Components/Forms/CreateNewPassword',
  component: CreateNewPassword,
  tags: ['autodocs'],
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Default Create New Password - Form',
}
