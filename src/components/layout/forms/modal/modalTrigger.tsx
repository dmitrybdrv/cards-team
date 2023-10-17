import { FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from '@/components/layout/forms/modal/modal.module.scss'

type ModalTriggerType = {
  children: ReactNode
  variant?: 'button' | 'text'
  className?: string
}

export const ModalTrigger: FC<ModalTriggerType> = ({ children, variant = 'text', className }) => {
  const triggerVariant =
    variant === 'button' ? <div className={clsx(className)}>{children}</div> : children

  return <Dialog.Trigger className={s.dialogTrigger}>{triggerVariant}</Dialog.Trigger>
}
