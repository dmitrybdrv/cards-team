import { ComponentPropsWithoutRef, FC } from 'react'

import { clsx } from 'clsx'

import s from './table.module.scss'

type Props = ComponentPropsWithoutRef<'table'>

export const Table: FC<Props> = ({ children, className, ...rest }) => {
  const tableStyle = clsx(s.table, className)

  return (
    <table className={tableStyle} {...rest}>
      {children}
    </table>
  )
}
