import { FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

type Props = {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  children: ReactNode
}

type ModalCompoundComponents = {
  Trigger: FC<{ children: ReactNode }>
  Portal: FC<{ children: ReactNode[] }>
  Title: FC<{ children: ReactNode }>
  Description: FC<{ children: ReactNode }>
  Close: FC
}

export const Modal: FC<Props> & ModalCompoundComponents = ({ isOpen, onOpenChange, children }) => {
  return (
    <Dialog.Root defaultOpen={false} open={isOpen} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  )
}

Modal.Trigger = ({ children }) => {
  return <Dialog.Trigger>{children}</Dialog.Trigger>
}

Modal.Portal = ({ children }) => {
  return (
    <Dialog.Portal className={s.dialogContent}>
      <Dialog.Overlay className={s.dialogOverlay} />
      <Dialog.Content>
        <Dialog.Title>{children}</Dialog.Title>
        <Dialog.Description>{children}</Dialog.Description>
      </Dialog.Content>
    </Dialog.Portal>
  )
}

Modal.Title = ({ children }) => {
  return <Dialog.Title className={s.dialogTitle}>{children}</Dialog.Title>
}

Modal.Description = ({ children }) => {
  return <Dialog.Description className={s.dialogDescription}>{children}</Dialog.Description>
}

Modal.Close = () => {
  return <Dialog.Close />
}
