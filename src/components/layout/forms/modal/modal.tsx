import { FC } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

import { Button } from '@/components/ui'

type Props = {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export const Modal: FC<Props> = ({ onOpenChange, isOpen }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Trigger>
        <Button>open</Button>
      </Dialog.Trigger>
      <Dialog.Portal className={s.modalContainer}>
        <Dialog.Overlay className={s.dialogOverlay} />
        <Dialog.Content className={s.dialogContent}>
          <Dialog.Title>Title</Dialog.Title>
          <Dialog.Description>Description</Dialog.Description>
          <Dialog.Close className={s.IconButton} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
