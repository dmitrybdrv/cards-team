import { ComponentPropsWithoutRef } from 'react'

export type Props = {
  values: string[]
  onValueChange: (value: string) => void
  startValue?: string
  isDisabled?: boolean
  label?: string
  className?: string
} & ComponentPropsWithoutRef<'select'>
