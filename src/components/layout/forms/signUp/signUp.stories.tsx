import { Meta, StoryObj } from '@storybook/react'

import { SignUp } from './signUp.tsx'

const meta = {
  title: 'Components/Forms/SignUp',
  component: SignUp,
  tags: ['autodocs'],
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Default SignUp - Register form',
}
