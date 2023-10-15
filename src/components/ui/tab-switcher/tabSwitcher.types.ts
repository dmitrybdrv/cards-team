export type ValueType = {
  value: string
  title?: string
  disabled?: boolean
}

export type Props = {
  onChange?: (value: string) => void
  values: ValueType[]
  currentValue?: string
  defaultValue?: string
  disabled?: boolean
  className?: string
}
