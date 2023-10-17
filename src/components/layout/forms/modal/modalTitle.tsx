import { FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from '@/components/layout/forms/modal/modal.module.scss'

type ModalTitleType = {
  children: ReactNode
}

export const ModalTitle: FC<ModalTitleType> = ({ children }) => {
  return <Dialog.Title className={s.dialogTitle}>{children}</Dialog.Title>
}
