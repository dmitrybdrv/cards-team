import { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword } from './forgotPassword.tsx'

const meta = {
  title: 'Components/Forms/ForgotPassword',
  component: ForgotPassword,
  tags: ['autodocs'],
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Default Forgot Password - Form',
}
