import { FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

type Props = {
  children?: ReactNode
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description: string
}

type CompoundModalType = {
  BModal: FC
}

export const Modal: FC<Props> & CompoundModalType = ({
  isOpen,
  onOpenChange,
  title,
  description,
  children,
}) => {
  return (
    <Dialog.Root defaultOpen={false} open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Trigger>{children}</Dialog.Trigger>

      <Dialog.Portal className={s.modalContainer}>
        <Dialog.Overlay className={s.dialogOverlay} />
        <Dialog.Content className={s.dialogContent}>
          <Dialog.Title className={s.dialogTitle}>{title}</Dialog.Title>
          <Dialog.Description className={s.dialogDescription}>{description}</Dialog.Description>
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

Modal.BModal = Dialog.Trigger
