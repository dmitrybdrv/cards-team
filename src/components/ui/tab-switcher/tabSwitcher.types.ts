import { TabSwitcher } from '@/services/decks/decks.types.ts'

export type ValueType = {
  value: string
  title?: string
  disabled?: boolean
}

export type Props = {
  onChange?: (value: '' | TabSwitcher) => void
  values: ValueType[]
  currentValue?: string
  defaultValue?: string
  disabled?: boolean
  className?: string
}
