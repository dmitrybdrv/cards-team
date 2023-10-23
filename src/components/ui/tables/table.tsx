import { ComponentPropsWithoutRef, FC, memo } from 'react'

import { clsx } from 'clsx'

import s from './table.module.scss'

type Props = {
  variant: 'packs' | 'cards' | 'myCards'
} & ComponentPropsWithoutRef<'table'>

export const Table: FC<Props> = memo(({ variant, children, className, ...rest }) => {
  const tableStyle = clsx(s.table, className, s[variant])

  return (
    <table className={tableStyle} {...rest}>
      {children}
    </table>
  )
})
