import { FC, ReactNode } from 'react'

import s from './label.module.scss'

type Props = {
  children: ReactNode
  label: string
  disabled?: boolean
}

export const Label: FC<Props> = ({ label, disabled, children }) => {
  return (
    <div className={s.labelContainer}>
      {
        <label className={s.label} aria-disabled={disabled}>
          {label}
          {children}
        </label>
      }
    </div>
  )
}
