import { useState } from 'react'

import type { Meta } from '@storybook/react'

import s from './checkbox.module.scss'

import { CheckBox } from './'

const meta = {
  title: 'Components/UI/Checkbox',
  component: CheckBox,
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      action: 'checkbox clicked',
      type: 'function',
      description: 'Колбэк обработки события чекбокса',
    },
    defaultChecked: {
      description: 'boolean Значение определяющее стартовое состояние чекбокса',
    },
    className: {
      description: 'Стили',
    },
  },
} satisfies Meta<typeof CheckBox>

export default meta

export const Default = () => {
  const [check, setCheck] = useState(false)

  return <CheckBox onChange={setCheck} defaultChecked={check} />
}

export const Unselected = () => {
  const [check, setCheck] = useState(true)

  return <CheckBox onChange={setCheck} className={s.checkboxRoot} defaultChecked={check} />
}

export const Disabled = () => {
  const [check, setCheck] = useState(false)

  return <CheckBox onChange={setCheck} className={s.checkboxRoot} defaultChecked={check} disabled />
}

export const DisabledUnchecked = () => {
  const [check, setCheck] = useState(true)

  return <CheckBox onChange={setCheck} className={s.checkboxRoot} defaultChecked={check} disabled />
}
