import { FC, ReactNode } from 'react'

import s from './modal.module.scss'

type ModalFieldType = {
  children: ReactNode
}

export const ModalField: FC<ModalFieldType> = ({ children }) => {
  return <div className={s.dialogFields}>{children}</div>
}
