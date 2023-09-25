import { ComponentPropsWithoutRef } from 'react'

export type Props = {
  values: string[]
  startValue?: string
  isDisabled?: boolean
  label?: string
  className?: string
} & ComponentPropsWithoutRef<'select'>
