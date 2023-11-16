import { FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from '@/components/layout/forms/modal/modal.module.scss'
import { Typography } from '@/components/ui'

type ModalDescriptionType = {
  children: ReactNode
}

export const ModalDescription: FC<ModalDescriptionType> = ({ children }) => {
  return (
    <Dialog.Description className={s.dialogDescription}>
      <Typography variant={'body1'}>{children}</Typography>
    </Dialog.Description>
  )
}
