import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Modal } from './modal.tsx'

import { ModalButton } from '@/components/layout/forms/modal/modalButton.tsx'
import { ModalClose } from '@/components/layout/forms/modal/modalClose.tsx'
import { ModalContent } from '@/components/layout/forms/modal/modalContent.tsx'
import { ModalDescription } from '@/components/layout/forms/modal/modalDescription.tsx'
import { ModalField } from '@/components/layout/forms/modal/modalField.tsx'
import { ModalTitle } from '@/components/layout/forms/modal/modalTitle.tsx'
import { ModalTrigger } from '@/components/layout/forms/modal/modalTrigger.tsx'
import { Button, TextField } from '@/components/ui'
import s from '@/components/ui/button/button.module.scss'

const meta = {
  title: 'Components/Forms/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Компонеты передаваемые в качестве children',
    },
    isOpen: {
      defaultValue: false,
      description: 'boolean значение для триггера (открыта или закрыта модалка)',
    },
    onOpenChange: {
      description: 'Функция открытия и закрытия модалки',
    },
  },
  args: {
    isOpen: false,
  },
} satisfies Meta<typeof Modal>

export default meta

export const ModalWithTitle = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Modal onOpenChange={setOpen} isOpen={open}>
        <ModalTrigger className={s.secondary} variant={'button'}>
          logout
        </ModalTrigger>
        <ModalContent>
          <ModalTitle>My title</ModalTitle>
          <ModalClose>X</ModalClose>
        </ModalContent>
      </Modal>
    </>
  )
}

export const Default = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Modal onOpenChange={setOpen} isOpen={open}>
        <ModalTrigger className={s.secondary} variant={'button'}>
          logout
        </ModalTrigger>
        <ModalContent>
          <ModalTitle>My title</ModalTitle>
          <ModalClose>X</ModalClose>
          <ModalDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid, culpa debitis
            deleniti deserunt dignissimos dolore dolorem error est expedita facilis impedit ipsa
            laudantium magnam modi neque nostrum numquam odit officia optio quaerat quam totam ullam
            ut vel. Nihil, nobis.
          </ModalDescription>
          <ModalField>
            <TextField label={'test'} />
          </ModalField>
          <ModalButton>
            <Button>Cancel</Button>
            <Button variant={'secondary'}>Save changes</Button>
          </ModalButton>
        </ModalContent>
      </Modal>
    </>
  )
}
