import { Meta, StoryObj } from '@storybook/react'

import { SignIn } from './signIn.tsx'

const meta = {
  title: 'Components/Forms/SignIn',
  component: SignIn,
  tags: ['autodocs'],
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Default SignIn - Login form',
}
