import { FC } from 'react'

import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { clsx } from 'clsx'

import s from './tabSwitcher.module.scss'
import { Props } from './tabSwitcher.types.ts'

export const TabSwitcher: FC<Props> = props => {
  const { currentValue, onChange, values, disabled = false, defaultValue, className } = props
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

  const toggleStyle = clsx(s.ToggleGroup, className)

  return (
    <ToggleGroup.Root
      value={currentValue}
      disabled={disabled}
      type={'single'}
      className={toggleStyle}
      onValueChange={onChange}
      defaultValue={defaultValue}
    >
      {mappedItems}
    </ToggleGroup.Root>
  )
}
