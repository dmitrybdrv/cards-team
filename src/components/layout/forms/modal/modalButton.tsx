import { FC, ReactNode } from 'react'

import s from './modal.module.scss'

type ModalButtonType = {
  children: ReactNode
}

export const ModalButton: FC<ModalButtonType> = ({ children }) => {
  return <div className={s.dialogButton}>{children}</div>
}
