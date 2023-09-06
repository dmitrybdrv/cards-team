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
    checked: {
      description: 'boolean Значение определяющее состояние чекбокса',
      control: { type: 'boolean' },
    },
    className: {
      description: 'Стили для чебокса',
    },
    label: {
      description: 'Описание к чекбоксу. Не имеет tab',
      control: { type: 'string' },
    },
    name: {
      description: 'Имя чекбокса',
    },
    required: {
      description: 'Придает чекбоксу обязательное значение',
    },
  },
} satisfies Meta<typeof CheckBox>

export default meta

export const Default = () => {
  const [check, setCheck] = useState(true)

  return <CheckBox onChange={setCheck} checked={check} />
}

export const Unselected = () => {
  const [check, setCheck] = useState(false)

  return <CheckBox onChange={setCheck} className={s.checkboxRoot} checked={check} />
}

export const Disabled = () => {
  const [check, setCheck] = useState(true)

  return <CheckBox onChange={setCheck} className={s.checkboxRoot} checked={check} disabled />
}

export const DisabledUnchecked = () => {
  const [check, setCheck] = useState(false)

  return <CheckBox onChange={setCheck} className={s.checkboxRoot} checked={check} disabled />
}
