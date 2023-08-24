import { StoryObj, Meta } from '@storybook/react'

import { Typography } from './typography.tsx'

const meta = {
  title: 'Components/UI/Typography',
  component: Typography,
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    variant: 'large',
    children: 'Render functions are a framework specific feature to allow you control',
  },
}

export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'Render functions are a framework specific feature to allow you control',
  },
}

export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'Render functions are a framework specific feature to allow you control',
  },
}

export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'Render functions are a framework specific feature to allow you control',
  },
}

export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'Render functions are a framework specific feature to allow you control',
  },
}

export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
    children: 'Render functions are a framework specific feature to allow you control',
  },
}

export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'Render functions are a framework specific feature to allow you control',
  },
}

export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
    children: 'Render functions are a framework specific feature to allow you control',
  },
}

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Render functions are a framework specific feature to allow you control',
  },
}

export const Overline: Story = {
  args: {
    variant: 'overline',
    children: 'Render functions are a framework specific feature to allow you control',
  },
}

export const Link1: Story = {
  args: {
    variant: 'link1',
    children: 'Render functions are a framework specific feature to allow you control',
  },
}

export const Link2: Story = {
  args: {
    variant: 'link2',
    children: 'Render functions are a framework specific feature to allow you control',
  },
}
