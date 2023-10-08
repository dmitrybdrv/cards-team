import { FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from '@/components/layout/forms/modal/modal.module.scss'

type ModalContentType = {
  children: ReactNode
}

export const ModalContent: FC<ModalContentType> = ({ children }) => {
  return (
    <Dialog.Portal className={s.dialogPortal}>
      <Dialog.Overlay className={s.dialogOverlay} />
      <Dialog.Content className={s.dialogContent}>{children}</Dialog.Content>
    </Dialog.Portal>
  )
}
