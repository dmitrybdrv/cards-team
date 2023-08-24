import * as ToggleGroup from '@radix-ui/react-toggle-group'

import s from './tab-switcher.module.scss'

export const TabSwitcher = () => {
  return (
    <ToggleGroup.Root type={'single'} className={s.ToggleGroup}>
      <ToggleGroup.Item value={'first'} className={s.ToggleItem} />
      <ToggleGroup.Item value={'second'} className={s.ToggleItem} />
      <ToggleGroup.Item value={'third'} className={s.ToggleItem} />
    </ToggleGroup.Root>
  )
}
