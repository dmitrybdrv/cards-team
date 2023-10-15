import { Meta, StoryObj } from '@storybook/react'

import { Dropdown, ToolbarItemWithIcon } from './dropdown.tsx'

import { ReactComponent as SignOut } from '@/assets/icons/logout.svg'
import { ReactComponent as UserIcon } from '@/assets/icons/person-outline-icon.svg'

const meta = {
  title: 'Components/UI/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description:
        'ReactNode элементы в качестве передаваемых значений / TooltipItem в качестве children',
    },
    align: {
      description: "'start' | 'center' | 'end' - значения выравнивания",
      defaultValue: 'center',
    },
    trigger: {
      description: 'ReactNode значение - тригер к появлению выпадающего меню',
    },
    className: {
      description: 'Значение - строка, стили',
    },
    style: {
      description: 'CSSProperties - тип - возможность передавать стили css напрямую',
    },
  },
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div>
        <ToolbarItemWithIcon
          icon={<UserIcon />}
          text={'Profile'}
          onSelect={() => {}}
        ></ToolbarItemWithIcon>
        <ToolbarItemWithIcon
          icon={<SignOut />}
          text={'Sign Out'}
          onSelect={() => {}}
        ></ToolbarItemWithIcon>
      </div>
    ),
    trigger: <div style={{ marginRight: '10px' }}>{'Ivan'}</div>,
  },
  render: args => <Dropdown {...args} />,
}
