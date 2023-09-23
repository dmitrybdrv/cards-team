import { Meta, StoryObj } from '@storybook/react'

import { PersonalInformation } from './PersonalInformation.tsx'

const meta = {
  title: 'Components/Forms/PersonalInformation',
  component: PersonalInformation,
  tags: ['autodocs'],
} satisfies Meta<typeof PersonalInformation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'PersonalInformation',
}
