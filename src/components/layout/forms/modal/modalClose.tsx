import { FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from '@/components/layout/forms/modal/modal.module.scss'

type ModalCloseType = {
  children: ReactNode
}

export const ModalClose: FC<ModalCloseType> = ({ children }) => {
  return <Dialog.Close className={s.dialogClose}>{children}</Dialog.Close>
}
