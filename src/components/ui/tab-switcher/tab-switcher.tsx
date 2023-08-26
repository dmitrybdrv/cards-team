import * as ToggleGroup from '@radix-ui/react-toggle-group'

import s from './tab-switcher.module.scss'

type Props = {
  onChange?: (value: string) => void
  values: string[]
  titles?: string[]
}
export const TabSwitcher = (props: Props) => {
  const { onChange, values, titles } = props

  const mappedItems = values.map((value, index) => {
    return (
      <ToggleGroup.Item value={value} className={s.ToggleItem} key={index}>
        <span>{titles?.[index] || value}</span>
      </ToggleGroup.Item>
    )
  })

  return (
    <ToggleGroup.Root type={'single'} className={s.ToggleGroup} onValueChange={onChange}>
      {mappedItems}
    </ToggleGroup.Root>
  )
}
