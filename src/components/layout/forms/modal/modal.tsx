import { FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

type Props = {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  children: ReactNode
}

export const Modal: FC<Props> = ({ onOpenChange, isOpen, children }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  )
}
