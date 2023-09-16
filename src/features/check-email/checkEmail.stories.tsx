import { Meta, StoryObj } from '@storybook/react'

import { CheckEmail } from './checkEmail.tsx'

const meta = {
  title: 'Features/CheckEmail',
  component: CheckEmail,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Default Check email - Form',
}
