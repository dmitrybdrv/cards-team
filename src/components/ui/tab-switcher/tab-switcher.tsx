import { FC } from 'react'

import * as ToggleGroup from '@radix-ui/react-toggle-group'

import s from './tab-switcher.module.scss'

type ValueType = {
  value: string
  title?: string
  disabled?: boolean
}

type Props = {
  onChange?: (value: string) => void
  values: ValueType[]
  defaultValue?: string
  disabled?: boolean
}
export const TabSwitcher: FC<Props> = props => {
  const { onChange, values, disabled = false, defaultValue } = props
  const mappedItems = values.map((value, index) => {
    return (
      <ToggleGroup.Item
        disabled={value.disabled}
        value={value.value}
        className={s.ToggleItem}
        key={index}
      >
        <span>{value.title || value.value}</span>
      </ToggleGroup.Item>
    )
  })

  return (
    <ToggleGroup.Root
      disabled={disabled}
      type={'single'}
      className={s.ToggleGroup}
      onValueChange={onChange}
      defaultValue={defaultValue}
    >
      {mappedItems}
    </ToggleGroup.Root>
  )
}
