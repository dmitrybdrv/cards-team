import { ComponentPropsWithoutRef } from 'react'

export type Props = {
  values: string[]
  isDisabled?: boolean
  label?: string
  className?: string
} & ComponentPropsWithoutRef<'select'>
