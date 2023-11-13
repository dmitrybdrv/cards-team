import { FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from '@/components/layout/forms/modal/modal.module.scss'

type ModalCloseType = {
  children: ReactNode
  onClick?: () => void
}

export const ModalClose: FC<ModalCloseType> = ({ children, onClick }) => {
  return (
    <Dialog.Close className={s.dialogClose} onClick={onClick}>
      {children}
    </Dialog.Close>
  )
}
