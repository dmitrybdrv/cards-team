import { FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

export type MButtonProps = {
  children: ReactNode
}

export const MButton: FC<MButtonProps> = ({ children }) => (
  <Dialog.Trigger>{children}</Dialog.Trigger>
)
