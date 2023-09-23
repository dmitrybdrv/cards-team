import { ComponentPropsWithoutRef, FC } from 'react'

import { clsx } from 'clsx'

import s from './table.module.scss'

type Props = ComponentPropsWithoutRef<'tr'>

export const TRow: FC<Props> = ({ children, className, ...rest }) => {
  const trStyle = clsx(className, s.tableRow)

  return (
    <tr {...rest} className={trStyle}>
      {children}
    </tr>
  )
}
